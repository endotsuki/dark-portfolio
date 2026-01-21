import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase01Icon, Cancel01Icon, CodeSimpleIcon, Home03Icon, Mail01Icon, Menu01Icon, User02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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
          inline: 'nearest',
        });
      } else {
        console.warn(`Element with id "${id}" not found`);
      }
    }, 100);
  };

  const navItems = [
    { id: 'hero', label: 'Home', icon: Home03Icon },
    { id: 'about', label: 'About', icon: User02Icon },
    { id: 'skills', label: 'Skills', icon: CodeSimpleIcon },
    { id: 'experience', label: 'Experience', icon: Briefcase01Icon },
    { id: 'contact', label: 'Contact', icon: Mail01Icon },
  ];

  const containerClass = `transition-all duration-500 ${
    isScrolled || isMobileMenuOpen
      ? 'bg-slate-900/50 backdrop-blur-md border border-white/20 rounded-2xl'
      : 'bg-slate-900/20 backdrop-blur-xs border-none rounded-3xl'
  }`;

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${isScrolled ? 'pt-5' : 'pt-2'}`}
      >
        <div className='mx-auto max-w-7xl px-4'>
          {/* Desktop */}
          <div className='hidden lg:flex'>
            <div className={`mx-auto w-full ${containerClass} ${isScrolled ? 'max-w-7xl' : 'max-w-6xl'}`}>
              <div className='flex items-center justify-between px-4 py-3'>
                <motion.button
                  onClick={() => scrollTo('hero')}
                  className='group text-xl font-bold text-white transition-all duration-300 hover:text-blue-300'
                  whileHover={{ translateX: 12 }}
                >
                  <img src='/text-white.png' alt='' className='h-1w-12 w-12 object-contain' />
                </motion.button>

                <div className='flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm'>
                  {navItems.map((item) => (
                    <motion.button
                      key={item.id}
                      onClick={() => scrollTo(item.id)}
                      className={`relative flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                        activeSection === item.id ? 'text-white shadow-lg' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <HugeiconsIcon icon={item.icon} size={20} />
                      {item.label}
                      {activeSection === item.id && (
                        <motion.div
                          layoutId='activeDesktop'
                          className='absolute inset-0 rounded-lg border border-blue-400/30 bg-gradient-to-r from-primary/20 to-secondary/20'
                          transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 25,
                          }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className='lg:hidden'>
            <div className={`${containerClass} relative z-50`}>
              <div className='flex items-center justify-between px-6 py-3'>
                <motion.button
                  onClick={() => scrollTo('hero')}
                  className='group text-xl font-bold text-white transition-all duration-300 hover:text-blue-300'
                  whileHover={{ translateX: 12 }}
                >
                  <img src='/text-white.png' alt='' className='h-1w-12 w-12 object-contain' />
                </motion.button>

                <motion.button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className='rounded-lg border border-white/10 bg-white/5 p-2 text-white transition-colors hover:bg-white/10 hover:text-blue-300'
                  whileHover={{ scale: 1.05 }}
                >
                  <AnimatePresence mode='wait'>
                    {isMobileMenuOpen ? (
                      <motion.div key='close' initial={{ rotate: -90 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                        <HugeiconsIcon icon={Cancel01Icon} size={23} />
                      </motion.div>
                    ) : (
                      <motion.div key='menu' initial={{ rotate: 90 }} animate={{ rotate: 0 }} transition={{ duration: 0.2 }}>
                        <HugeiconsIcon icon={Menu01Icon} size={23} />
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
                    className='border-t border-white/10'
                  >
                    <div className='space-y-2 px-4 py-4'>
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollTo(item.id)}
                          className={`flex w-full items-center rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 ${
                            activeSection === item.id
                              ? 'border border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white'
                              : 'border border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
                          }`}
                          whileHover={{ scale: 1.02 }}
                        >
                          <span className='mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5'>
                            <HugeiconsIcon icon={item.icon} size={20} />
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
            className='fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden'
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
