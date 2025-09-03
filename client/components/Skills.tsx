import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TypeScript, Python, React, Figma, GitHubLight, WordPress, JavaScript, HTML5, CSS3, Bootstrap5, TailwindCSS, VueJs, VisualStudioCode, Canva, Laravel, PHP, Jira, Photoshop } from "developer-icons";
import { Meteors } from "../components/ui/meteors";
import { IconTerminal2 } from "@tabler/icons-react"

const CircularProgress = ({ percentage, icon: Icon, name, category, delay = 0 }) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [displayPercentage, setDisplayPercentage] = useState(0);
  const size = 120, strokeWidth = 6, radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (animatedPercentage / 100) * circumference;

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedPercentage(percentage);

      let start = 0;
      const duration = 2500;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeProgress = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(start + (percentage - start) * easeProgress);

        setDisplayPercentage(current);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }, delay);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  return (
    <div className="flex flex-col items-center w-full h-full">
      <div className="relative group mb-4" style={{ width: size, height: size }}>
        <div className="absolute inset-0 rounded-full bg-white/3 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out blur-sm scale-110" />
        <svg width={size} height={size} className="transform -rotate-90 relative z-10">
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.06)" strokeWidth={strokeWidth} fill="transparent" />
          <circle cx={size / 2} cy={size / 2} r={radius} stroke="rgba(255,255,255,0.85)" strokeWidth={strokeWidth} fill="transparent"
            strokeDasharray={circumference} strokeDashoffset={offset} strokeLinecap="round"
            className="transition-all custom-transition"
            style={{ filter: 'drop-shadow(0 0 6px rgba(255,255,255,0.2))' }} />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="relative mb-2 group-hover:scale-105 transition-all duration-500 ease-out">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg border border-white/8 bg-white/3 backdrop-blur-sm transition-all duration-300 group-hover:border-white/15 group-hover:bg-white/5">
              <Icon size={23} className="text-white/90 transition-all duration-300 group-hover:text-white" />
            </div>
          </div>
          <div className="text-lg font-medium text-white tabular-nums transition-all duration-300">
            {displayPercentage}%
          </div>
        </div>
        <div className="absolute top-3 right-3 w-1 h-1 rounded-full bg-white/15 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out" />
      </div>
      <div className="text-center space-y-1">
        <h4 className="text-md font-medium text-white/90 leading-tight transition-all duration-300 group-hover:text-white">
          {name}
        </h4>
        <p className="text-xs text-white/40 font-medium uppercase tracking-wider transition-all duration-300 group-hover:text-white/60">
          {category === "Language" ? "LANG" : category === "Tool / Platform" ? "TOOL" : "FRAMEWORK"}
        </p>
      </div>
    </div>
  );
};

export default function Skills() {
  const skills = [
    { name: "TypeScript", level: 95, icon: TypeScript, group: "Programming Languages" },
    { name: "Python", level: 88, icon: Python, group: "Programming Languages" },
    { name: "JavaScript", level: 90, icon: JavaScript, group: "Programming Languages" },
    { name: "HTML", level: 100, icon: HTML5, group: "Programming Languages" },
    { name: "CSS", level: 100, icon: CSS3, group: "Programming Languages" },
    { name: "PHP", level: 80, icon: PHP, group: "Programming Languages" },
    { name: "React.js", level: 98, icon: React, group: "Frameworks & Libraries" },
    { name: "Vue.js", level: 70, icon: VueJs, group: "Frameworks & Libraries" },
    { name: "Bootstrap", level: 85, icon: Bootstrap5, group: "Frameworks & Libraries" },
    { name: "Tailwind CSS", level: 95, icon: TailwindCSS, group: "Frameworks & Libraries" },
    { name: "WordPress", level: 90, icon: WordPress, group: "Frameworks & Libraries" },
    { name: "Laravel", level: 87, icon: Laravel, group: "Frameworks & Libraries" },
    { name: "GitHub", level: 93, icon: GitHubLight, group: "Tools & Platforms" },
    { name: "Figma", level: 87, icon: Figma, group: "Tools & Platforms" },
    { name: "VS Code", level: 80, icon: VisualStudioCode, group: "Tools & Platforms" },
    { name: "Canva", level: 80, icon: Canva, group: "Tools & Platforms" },
    { name: "Jira", level: 75, icon: Jira, group: "Tools & Platforms" },
    { name: "PhotoShop", level: 25, icon: Photoshop, group: "Tools & Platforms" },
  ];

  const groups = ["Programming Languages", "Frameworks & Libraries", "Tools & Platforms"];

  return (
    <section id="skills" className="overflow-hidden bg-slate-950 pt-28 px-2 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <IconTerminal2 className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">SKILLS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            TECHNICAL
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              EXPERTISE
            </span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            My toolkit for building scalable, beautiful experiences.
          </p>
        </div>

        {groups.map((groupName, groupIdx) => {
          const groupSkills = skills.filter(s => s.group === groupName);
          return (
            <div key={groupName} className="mb-24">
              <div className="flex items-center mb-10">
                <h3 className="mx-4 text-2xl font-semibold uppercase tracking-wider">
                  {groupName}
                </h3>
                <div className="flex-grow h-px bg-gradient-to-r from-white/40 via-white/10 to-transparent" />
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 cursor-default">
                {groupSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  const delay = (Math.floor(i / 4) * 200 + (i % 4) * 100) / 1000;
                  return (
                    <motion.div key={skill.name}
                      initial={{ opacity: 0, y: 30, scale: 0.95 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: delay,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }}
                      viewport={{ once: false, margin: "-50px" }}
                      className="group relative rounded-3xl p-6 bg-gradient-to-br from-white/[0.02] via-white/[0.01] to-transparent border border-white/[0.06] backdrop-blur-sm hover:border-white/[0.12] transition-all duration-700 ease-out hover:shadow-2xl hover:shadow-white/[0.03] min-h-[220px] flex items-center justify-center hover:bg-gradient-to-br hover:from-white/[0.03] hover:via-white/[0.02] hover:to-white/[0.01]"
                    >
                      <div className="absolute inset-0 pointer-events-none z-0 rounded-3xl overflow-hidden">
                        <Meteors number={15} />
                      </div>
                      <div className="relative z-10 w-full">
                        <CircularProgress
                          percentage={skill.level}
                          icon={Icon}
                          name={skill.name}
                          category={groupName === "Programming Languages" ? "Language" : groupName === "Tools & Platforms" ? "Tool / Platform" : "Framework / Library"}
                          delay={delay * 1200 + 1000}
                        />
                      </div>
                      <div className="absolute inset-0 rounded-3xl opacity-20 pointer-events-none"
                        style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`, backgroundSize: '20px 20px' }} />
                    </motion.div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}