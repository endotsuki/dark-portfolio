import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { IconBriefcase, IconCode, IconHome, IconMail, IconMenu4, IconUserSquareRounded, IconX } from '@tabler/icons-react';

export function NavBar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const sections = ['hero', 'about', 'skills', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 150; // Increased offset

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'nearest'
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    }, 100);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: IconHome },
    { id: 'about', label: 'About', icon: IconUserSquareRounded },
    { id: 'skills', label: 'Skills', icon: IconCode },
    { id: 'experience', label: 'Experience', icon: IconBriefcase },
    { id: 'contact', label: 'Contact', icon: IconMail },
  ];

  const containerClass = `transition-all duration-500 ${isScrolled || isMobileMenuOpen
    ? 'bg-sky-900/20 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl shadow-black/25'
    : 'bg-sky-900/20 backdrop-blur-xs border border-white/5 rounded-3xl'
    }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'pt-3' : 'pt-6'}`}
      >
        <div className="mx-auto px-4 max-w-7xl">
          {/* Desktop */}
          <div className="hidden lg:flex">
            <div className={`w-full mx-auto ${containerClass} ${isScrolled ? 'max-w-7xl' : 'max-w-5xl'}`}>
              <div className="flex items-center justify-between px-4 py-3">
                <motion.button
                  onClick={() => scrollTo('hero')}
                  className="text-white font-bold text-xl ml-3 hover:text-blue-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}>
                  SOCHEATH
                </motion.button>
                <div className="flex items-center bg-white/5 rounded-xl p-2 gap-3 backdrop-blur-sm border border-white/10">
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`relative px-4 py-2.5 text-sm font-medium rounded-lg flex items-center gap-2 transition-all duration-300 ${activeSection === item.id
                        ? 'text-white shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                        }`}
                      whileHover={{ scale: 1.05 }}>
                      <item.icon size={20} />
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId="activeDesktop"
                          className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-400/30"
                          transition={{ type: "spring", stiffness: 400, damping: 25 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="lg:hidden">
            <div className={`${containerClass} relative z-50`}>
              <div className="flex items-center justify-between px-6 py-3">
                <motion.button
                  onClick={() => scrollTo('hero')}
                  className="text-white font-bold hover:text-blue-300 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  SOCHEATH
                </motion.button>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="p-2 text-white hover:text-blue-300 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatePresence mode="wait">
                    {isMobileMenuOpen ? (
                      <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                        <IconX size={23} />
                      </motion.div>
                    ) : (
                      <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                        <IconMenu4 size={23} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/10"
                  >
                    <div className="px-4 py-4 space-y-2">
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`flex items-center w-full px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${activeSection === item.id
                            ? 'text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30'
                            : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent'
                            }`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className="flex items-center justify-center w-10 h-10 mr-3 rounded-lg bg-white/5">
                            <item.icon size={20} />
                          </span>
                          {item.label}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}