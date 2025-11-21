import { FloatingDock } from "@/components/ui/floating-dock";
import { Icon } from 'iconza'

export function Footer() {
  const links = [
    {
      title: "GitHub",
      icon: (
        <Icon name="GitHub Light" className="h-full w-full" />
      ),
      href: "https://github.com/onimuxha",
    },

    {
      title: "LinkedIn",
      icon: (
        <Icon name="LinkedIn" className="h-full w-full" />
      ),
      href: "https://www.linkedin.com/in/socheathek-mao",
    },
    {
      title: "Gmail",
      icon: (
        <Icon name="Gmail" className="h-full w-full" />
      ),
      href: "mailto:maosocheathek@gmail.com",
    },
    {
      title: "Telegram",
      icon: (
        <Icon name="Telegram" className="h-full w-full" />
      ),
      href: "https://t.me/cheatzx",
    },

    {
      title: "Facebook",
      icon: (
        <Icon name="FacebookRound" className="h-full w-full" />
      ),
      href: "https://www.facebook.com/cheathzx",
    },
  ];
  return (
    <footer className="bg-slate-900 border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-4">
            <FloatingDock
              mobileClassName="translate-y-90"
              items={links}
            />
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Socheath Ek Mao. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
