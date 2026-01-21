import { motion } from 'framer-motion';
import { Icon } from 'iconza';
import TextType from './Reactbits/TextType';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { Button } from './ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowRight02Icon } from '@hugeicons/core-free-icons';

export default function Hero() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'GOOD MORNING' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'GOOD AFTERNOON' };
    } else {
      return { text: 'GOOD EVENING' };
    }
  };

  const techStack = [
    { icon: <Icon name='ReactJS' size={35} />, label: 'React' },
    { icon: <Icon name='TypeScript' size={35} />, label: 'TypeScript' },
    { icon: <Icon name='ViteJS' size={35} />, label: 'Vite' },
    { icon: <Icon name='TailwindCSS' size={35} />, label: 'Tailwind CSS' },
    { icon: <Icon name='Shadcn Light' size={30} />, label: 'Shadcn' },
  ];

  const { text: greetingText } = getGreeting();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id='hero'
      className='relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-28 sm:px-6 sm:pt-0 md:px-8 lg:px-10'
    >
      {/* Content Layer */}
      <div className='relative z-10 mx-auto max-w-6xl text-center'>
        <div className='mb-8 space-y-4'>
          <h2 className='mb-10 max-w-5xl text-6xl font-black tracking-tight sm:text-6xl md:text-8xl'>
            {greetingText}, I'm <span className='text-primary'>SOCHEATH</span>
          </h2>

          <h2 className='mb-8 mt-9 text-center text-2xl font-light tracking-tight text-gray-300 md:text-4xl'>
            I'm a{' '}
            <TextType
              className='font-medium text-secondary'
              text={['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'JavaScript Enthusiast']}
              typingSpeed={75}
              pauseDuration={2000}
              showCursor={true}
              cursorCharacter='_'
            />
          </h2>
        </div>

        <p className='mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-300 md:text-xl'>
          Crafting <span className='hilight'>scalable solutions</span> with clean code and intuitive design. Full-stack developer
          specializing in{' '}
          <a className="font-medium text-accent after:content-['_↗']" target='_blank' href='https://react.dev/'>
            React.js
          </a>{' '}
          and{' '}
          <a className="font-medium text-accent after:content-['_↗']" target='_blank' href='https://nodejs.org'>
            Node.js
          </a>
          .
        </p>

        <div className='mb-16 flex flex-col justify-center gap-6 sm:flex-row'>
          <Button variant='default' size='lg' className='rounded-2xl' onClick={() => scrollToSection('experience')}>
            View My Work
            <HugeiconsIcon icon={ArrowRight02Icon} />
          </Button>
        </div>

        {/* Tech Stack Showcase */}
        <div className='flex flex-col items-center'>
          <h2 className='text-xl font-semibold text-white sm:text-2xl'>This Portfolio Was Built With</h2>
          <div className='mt-7 flex cursor-default flex-wrap justify-center gap-8'>
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className='flex items-center gap-2 rounded-lg border border-white/10 bg-slate-800 p-3 backdrop-blur-xs transition-colors duration-300 hover:bg-slate-700'
                whileHover={{ translate: 1.05, rotate: -3 }}
              >
                {tech.icon}
                <span className='text-sm text-gray-300'>{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <ShootingStars />
      <StarsBackground />
    </section>
  );
}
