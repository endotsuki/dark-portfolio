import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Layout } from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import Seo from '@/components/Seo';

export default function Index() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 100,
    });
  }, []);

  return (
    <Layout>
      <Seo
        title='Socheath Ek Mao - Full Stack Developer'
        description='Explore my portfolio showcasing my skills and experience as a full stack developer.'
        canonical='https://socheat.pages.dev/'
        ogImage='/og-image.jpg'
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </Layout>
  );
}
