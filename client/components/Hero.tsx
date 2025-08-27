import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { React, ShadcnUI, TailwindCSS, ViteJS } from 'developer-icons';
import { IconBriefcase, IconChevronsRight, IconMail } from "@tabler/icons-react";
import RotatingText from './Reactbits/RotatingText'
import ShinyText from './Reactbits/ShinyText';
import { BackgroundBeams } from "../components/ui/background-beams";

export default function Hero() {

  const items = [
    { icon: <React />, color: 'blue', label: 'Files' },
    { icon: <ShadcnUI />, color: 'purple', label: 'Books' },
    { icon: <TailwindCSS />, color: 'red', label: 'Health' },
    { icon: <ViteJS />, color: 'red', label: 'Health' },
  ]

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: 'Good morning' };
    } else if (hour >= 12 && hour < 18) {
      return { text: 'Good afternoon' };
    } else {
      return { text: 'Good evening' };
    }
  };

  const techStack = [
    { icon: <React className="h-10 w-10" />, label: 'React' },
    { icon: <ViteJS className="h-10 w-10" />, label: 'Vite' },
    { icon: <TailwindCSS className="h-10 w-10" />, label: 'Tailwind CSS' },
    { icon: <ShadcnUI className="h-10 w-10" />, label: 'Shadcn' },
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
            <span className="block text-neutral-400 text-2xl sm:text-xl md:text-4xl font-semibold tracking-tight mb-4">
              {greetingText}
            </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-white to-gray-300">
              <span className='font-semibold text-6xl text-cyan-500'>I'm</span> SOCHEATH
              </span>
            </span>
          </h2>

          <div className="text-2xl sm:text-2xl md:text-3xl text-neutral-400 mb-6 h-16 flex items-center justify-center">
            <div className="flex flex-col items-center cursor-default">
              <span className="relative">
                I'm a{" "}
                <span className="relative inline-block">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-110%" }}
                    transition={{ type: "spring", damping: 20, stiffness: 200 }}
                  >
                    <RotatingText
                      texts={[
                        "Full Stack Developer",
                        "UI/UX Designer",
                        "Tech Innovator",
                        "Digital Artist",
                      ]}
                      mainClassName="font-semibold px-2 sm:px-2 md:px-3 bg-white/10 border border-white/10 rounded-lg text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                      staggerFrom={"last"}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      rotationInterval={4000}
                    />
                  </motion.div>
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="text-base sm:text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed px-2">
          <ShinyText
            text="Crafting extraordinary digital experiences through innovative design, cutting-edge technology, and a passion for pushing the boundaries of what's possible."
            disabled={false}
            speed={4}
            className="custom-class"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            size="lg"
            onClick={() => scrollToSection("experience")}
            className="group relative overflow-hidden px-8 py-4 bg-white/10 text-white border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-white/20 text-lg font-semibold transition-all duration-300"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 -translate-x-full group-hover:translate-x-full transition-all duration-700 pointer-events-none" />
            <IconBriefcase size={24} className="mr-2 group-hover:rotate-12 transition-transform relative z-10" />
            <span className="relative z-10">View My Work</span>
            <IconChevronsRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform relative z-10" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group relative px-8 py-4 border-white/30 bg-transparent text-white text-lg font-semibold overflow-hidden"
            onClick={() => scrollToSection("contact")}
          >
            <span className="absolute inset-0 overflow-hidden rounded">
              <span className="absolute inset-0 rounded bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <IconMail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform z-10" />
            <span className="z-10">Let's Connect</span>
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
                whileHover={{ scale: 1.05, rotate: -3 }}
              >
                {tech.icon}
                <span className="text-sm text-gray-300">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <BackgroundBeams className='bg-slate-900' />
    </section>

  );
}