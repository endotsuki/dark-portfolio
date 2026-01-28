import { useEffect } from 'react';

type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
  twitterCard?: 'summary' | 'summary_large_image';
};

function upsertMeta(attrName: 'name' | 'property', attrValue: string, content: string) {
  const selector = `meta[${attrName}="${CSS.escape(attrValue)}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function upsertLink(rel: string, href: string) {
  const selector = `link[rel="${CSS.escape(rel)}"]`;
  let el = document.head.querySelector<HTMLLinkElement>(selector);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

function toAbsoluteUrl(url: string) {
  try {
    return new URL(url, window.location.origin).toString();
  } catch {
    return url;
  }
}

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
  ogType = 'website',
  noIndex,
  twitterCard = 'summary_large_image',
}: SeoProps) {
  useEffect(() => {
    const currentUrl = `${window.location.origin}${window.location.pathname}`;
    const canonicalUrl = toAbsoluteUrl(canonical ?? currentUrl);
    const imageUrl = toAbsoluteUrl(ogImage ?? '/og-image.jpg');

    if (title) {
      document.title = title;
      upsertMeta('property', 'og:title', title);
      upsertMeta('property', 'twitter:title', title);
    }

    if (description) {
      upsertMeta('name', 'description', description);
      upsertMeta('property', 'og:description', description);
      upsertMeta('property', 'twitter:description', description);
    }

    upsertLink('canonical', canonicalUrl);
    upsertMeta('property', 'og:url', canonicalUrl);
    upsertMeta('property', 'og:type', ogType);
    upsertMeta('property', 'og:image', imageUrl);
    upsertMeta('property', 'twitter:image', imageUrl);
    upsertMeta('property', 'twitter:card', twitterCard);

    upsertMeta('name', 'robots', noIndex ? 'noindex,nofollow' : 'index,follow');
  }, [title, description, canonical, ogImage, ogType, noIndex, twitterCard]);

  return null;
}
