import { motion } from "framer-motion";
import { Icon } from "iconza";
import TextType from "./Reactbits/TextType";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Button } from "./ui/button";
import { IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return { text: "GOOD MORNING" };
    } else if (hour >= 12 && hour < 18) {
      return { text: "GOOD AFTERNOON" };
    } else {
      return { text: "GOOD EVENING" };
    }
  };

  const techStack = [
    { icon: <Icon name="ReactJS" size={35} />, label: "React" },
    { icon: <Icon name="TypeScript" size={35} />, label: "TypeScript" },
    { icon: <Icon name="ViteJS" size={35} />, label: "Vite" },
    { icon: <Icon name="TailwindCSS" size={35} />, label: "Tailwind CSS" },
    { icon: <Icon name="Shadcn Light" size={30} />, label: "Shadcn" },
  ];

  const { text: greetingText } = getGreeting();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-10 pt-28 sm:pt-0"
    >
      {/* Content Layer */}
      <div className="relative z-10 text-center max-w-6xl mx-auto">
        <div className="mb-8 space-y-4">
          <h2 className="text-6xl sm:text-6xl md:text-7xl max-w-5xl font-bold tracking-tight mb-10">
            {greetingText}, I'm <span className="text-primary">SOCHEATH</span>
          </h2>

          <div className="text-2xl sm:text-2xl md:text-3xl text-neutral-400 h-16 flex items-center justify-center">
            <div className="flex flex-col items-center cursor-default">
              <h2 className="mb-8 mt-9 text-center text-2xl font-light tracking-tight text-gray-300 md:text-4xl">
                I'm a{" "}
                <TextType
                  className="font-medium text-accent"
                  text={[
                    "Web Developer",
                    "UI/UX Designer",
                    "Frontend Engineer",
                    "JavaScript Enthusiast",
                  ]}
                  typingSpeed={75}
                  pauseDuration={2000}
                  showCursor={true}
                  cursorCharacter="_"
                />
              </h2>
            </div>
          </div>
        </div>

        <p className="mx-auto mb-12 max-w-2xl text-center leading-relaxed text-gray-300 md:text-xl">
          Crafting <span className="hilight">scalable solutions</span> with
          clean code and intuitive design. Full-stack developer specializing in{" "}
          <a
            className="font-medium text-accent after:content-['_↗']"
            target="_blank"
            href="https://react.dev/"
          >
            React.js
          </a>{" "}
          and{" "}
          <a
            className="font-medium text-accent after:content-['_↗']"
            target="_blank"
            href="https://nodejs.org"
          >
            Node.js
          </a>
          .
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button
            variant="todo"
            size="lg"
            className="rounded-2xl"
            onClick={() => scrollToSection("experience")}
          >
            View My Work
            <IconArrowRight />
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
