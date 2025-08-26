import { motion } from "framer-motion";
import { TypeScript, Python, React, Figma, GitHubLight, WordPress, JavaScript, HTML5, CSS3, Bootstrap5, TailwindCSS, VueJs, VisualStudioCode, Canva, Laravel, PHP, Jira, Photoshop } from "developer-icons";
import { Terminal } from "lucide-react";
import { Meteors } from "../components/ui/meteors";

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
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <Terminal className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">SKILLS</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            TECHNICAL
            <span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white"
            >
              EXPERTISE
            </span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>

          <p className="text-lg sm:text-xl md:text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">
            My toolkit for building scalable, beautiful experiences.
          </p>
        </div>
        {/* Skill Groups */}
        {groups.map((groupName, groupIdx) => {
          const groupSkills = skills.filter((s) => s.group === groupName);
          return (
            <div key={groupName} className="mb-20">
              <div className="flex items-center mb-10">
                <h3 className="mx-4 text-2xl font-semibold uppercase tracking-wider">
                  {groupName}
                </h3>
                <div className="flex-grow h-px bg-white/40" />
              </div>

              {/* Grid Layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-default">
                {groupSkills.map((skill, i) => {
                  const Icon = skill.icon;
                  // Calculate row and column index for staggered delay like previous example
                  const columns = 3;
                  const row = Math.floor(i / columns);
                  const col = i % columns;
                  const delay = row * 400 + col * 200;
                  return (
                    <div
                      key={skill.name}
                      data-aos="fade-up"
                      data-aos-delay={delay}
                      data-aos-duration="600"
                      className="group relative rounded-2xl p-5 bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 transition-colors shadow-inner shadow-black/40 hover:shadow-lg hover:shadow-white/10 duration-300 overflow-hidden">
                      {/* Meteors inside card, behind content */}
                      <div className="absolute inset-0 pointer-events-none z-0">
                        <Meteors number={20} />
                      </div>
                      {/* Card content above meteors */}
                      <div className="relative z-10">
                        {/* Hover glow ring */}
                        <div className="absolute inset-0 rounded-2xl pointer-events-none transition-all" />
                        {/* Header Row */}
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black/40">
                            <Icon size={24} className="text-white" />
                          </div>
                          <div>
                            <h4 className="text-lg sm:text-xl md:text-xl text-gray-200 leading-relaxed">{skill.name}</h4>
                            <p className="text-base font-normal text-slate-400 leading-tight">
                              {groupName === "Programming Languages"
                                ? "Language"
                                : groupName === "Tools & Platforms"
                                  ? "Tool / Platform"
                                  : "Framework / Library"}
                            </p>
                          </div>
                        </div>
                        {/* Proficiency Bar */}
                        <div className="mt-4">
                          <div className="flex justify-between text-sm font-normal text-slate-400 leading-tight mb-1">
                            <span>Proficiency</span>
                            <span className="text-white font-medium">{skill.level}%</span>
                          </div>
                          <div className="relative w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                            <div
                              className="absolute top-0 left-0 h-full bg-white rounded-full transition-[width] duration-[1200ms] ease-out"
                              style={{ width: `${skill.level}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
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
