import { motion } from 'framer-motion';
import TextType from './Reactbits/TextType';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { Button } from './ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';
import { Icon } from 'iconza';
import { useEffect, useState } from 'react';

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const socails = [
    { name: 'GitHub', url: '#', icon: 'GitHub Light' },
    { name: 'LinkedIn', url: '#', icon: 'LinkedIn' },
    { name: 'Gmail', url: 'mailto:maosocheathek@gmail.com', icon: 'Gmail' },
  ];
  const status = [
    {
      title: 'Specialization',
      info: 'React • Next.js • TypeScript • Node.js',
    },
    {
      title: 'Location',
      info: 'Phnom Penh, Cambodia',
    },
    {
      title: 'Status',
      info: 'Not available for projects',
    },
  ];
  const [time, setTime] = useState(() =>
    new Date().toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    })
  );
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(
        new Date().toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id='hero' className='relative flex min-h-screen items-center overflow-hidden'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 md:px-12'>
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className='mb-5 flex gap-5'>
          {socails.map((social) => (
            <a key={social.name} href={social.url} className='group'>
              <Icon name={social.icon} size={30} className='transition-all duration-300 ease-in-out group-hover:scale-110' />
            </a>
          ))}
        </motion.div>

        <div className='space-y-12'>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className='space-y-8'>
            <div className='space-y-2'>
              <h1 className='text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl'>SOCHEATH</h1>
              <div className='flex items-center gap-4 text-xl text-gray-400 sm:text-2xl'>
                <div className='h-px w-12 bg-gray-600' />
                <TextType
                  className='font-light tracking-wide'
                  text={['WEB DEVELOPER', 'UI/UX DESIGNER', 'FRONTEND ENGINEER', 'JS ENTHUSIAST']}
                  pauseDuration={2000}
                  typingSpeed={100}
                  showCursor={true}
                  cursorCharacter='_'
                  cursorClassName='text-gray-600'
                />
              </div>
            </div>

            <p className='max-w-2xl text-lg leading-relaxed text-gray-400 md:text-xl'>
              Creating digital experiences through clean code and thoughtful design.
              <br />
              Focused on building scalable web applications that users love.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className='grid gap-12 lg:grid-cols-2'>
            <div className='space-y-6'>
              <Button
                size='lg'
                className='group rounded-none border border-white bg-transparent px-8 text-white transition-all hover:border-white hover:bg-white/20'
                onClick={() => scrollToSection('experience')}
              >
                <span className='text-base font-medium tracking-wide'>EXPLORE WORK</span>
                <HugeiconsIcon icon={ArrowRight02Icon} className='h-5 w-5 transition-transform group-hover:translate-x-1' />
              </Button>
              <p className='text-sm text-gray-500'>Scroll to discover my latest projects and technical expertise</p>
            </div>

            <div className='space-y-4 border-l border-gray-800 pl-8'>
              {status.map((item, index) => (
                <div key={index}>
                  <h3 className='mb-2 text-xs font-medium uppercase tracking-wider text-gray-500'>{item.title}</h3>
                  <p className='text-white'>{item.info}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className='absolute bottom-12 right-12 hidden text-right text-sm text-gray-600 md:block'
        >
          <div>Phnom Penh, KH</div>
          <div className='font-mono'>{time}</div>
        </motion.div>
      </div>

      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
