import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { React, ShadcnUI, TailwindCSS, ViteJS } from 'developer-icons';
import { IconArrowRight, IconBriefcase, IconChevronsRight, IconMail } from "@tabler/icons-react";
import TextType from './Reactbits/TextType'
import ShinyText from './Reactbits/ShinyText';
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import TrueFocus from './Reactbits/TrueFocus';
import SlideArrowButton from '../components/ui/SlideArrowButton';

export default function Hero() {

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Good Morning' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Good Afternoon' };
    } else {
      return { text: 'Good Evening' };
    }
  };

  const techStack = [
    { icon: <React size={45} />, label: 'React' },
    { icon: <ViteJS size={45} />, label: 'Vite' },
    { icon: <TailwindCSS size={45} />, label: 'Tailwind CSS' },
    { icon: <ShadcnUI size={45} />, label: 'Shadcn' },
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
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 pt-28 sm:pt-0">
      {/* Content Layer */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 space-y-4">
          <h2 className="text-6xl sm:text-6xl md:text-8xl font-black tracking-tight mb-10">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
              {greetingText}, I'm <span className="text-blue-400">SOCHEATH</span>
            </span>
          </h2>

          <div className="text-2xl sm:text-2xl md:text-3xl text-neutral-400 h-16 flex items-center justify-center">
            <div className="flex flex-col items-center cursor-default">
              <h2 className='mb-8 mt-9 text-center text-2xl font-light tracking-tight text-gray-300 md:text-4xl'>
                I'm a{' '}
                <TextType
                  className='font-semibold text-white'
                  text={['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'JavaScript Enthusiast']}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter='_'
                />
              </h2>
            </div>
          </div>
        </div>

        {/* <div className="text-base sm:text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          <ShinyText
            text="Crafting extraordinary digital experiences through innovative design, cutting-edge technology, and a passion for pushing the boundaries of what's possible."
            disabled={false}
            speed={4}
            className="custom-class"
          />
        </div> */}

        <p className='text-md mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-400 md:text-xl'>
          Crafting <span className='hilight'>scalable solutions</span> with clean code and intuitive
          design. Full-stack developer specializing in{' '}
          <a className="font-medium text-sky-500 after:content-['_↗']" target='_blank' href='https://react.dev/'>
            React.js
          </a>{' '}
          and{' '}
          <a className="font-medium text-sky-500 after:content-['_↗']" target='_blank' href='https://nodejs.org'>
            Node.js
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <SlideArrowButton
            onClick={() => scrollToSection("experience")}
            primaryColor="#2563EB"
            text="View My Work"
          />
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="group rounded-full relative px-8 py-4 border-white/30 bg-transparent text-white text-xl overflow-hidden">
            <IconArrowRight size={22} className="hidden md:block transition-all group-hover:translate-x-20 -translate-x-14 duration-500" />
            <div className="flex items-center gap-3 z-10 transition-all group-hover:translate-x-44 -translate-x-3 duration-500">
              <IconMail size={22} />
              <span>Let's Connect</span>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </Button>

        </div>

        {/* Tech Stack Showcase */}
        <div className="flex flex-col items-center">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">
            This Portfolio Was Built With
          </h2>
          <div className="flex flex-wrap justify-center cursor-default mt-7 gap-8">
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 p-3 bg-slate-800 backdrop-blur-xs border border-white/10 rounded-lg hover:bg-slate-700 transition-colors duration-300"
                whileHover={{ translate: 1.05, rotate: -3 }}
              >
                {tech.icon}
                <span className="text-sm text-gray-300">{tech.label}</span>
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