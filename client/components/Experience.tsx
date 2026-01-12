import { Timeline } from "@/components/ui/timeline";
import {
  IconBriefcase,
  IconBrandGithub,
  IconDeviceDesktop,
  IconMapPin2,
  IconCategory,
  IconPlus,
} from "@tabler/icons-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogContainer,
} from "./ui/linear-modal";
import { techIcons, projects, designItems } from "@/data/experienceData.tsx";

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 mb-6 hover:shadow-xl transition-all duration-300">
    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
      <div className="flex items-center gap-4">
        <div className="relative group flex flex-col items-center">
          <img
            className="w-14 h-14 rounded-full border border-slate-500 object-cover"
            src={project.companyLogo}
            alt={project.companyName}
          />
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-40 h-40 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-50 pointer-events-none flex items-center justify-center">
            <img
              src={project.companyLogo}
              alt={project.companyName}
              className="w-full h-full rounded-full border border-slate-600 shadow-lg object-cover bg-slate-900"
            />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            {project.companyName}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <IconMapPin2 className="w-4 h-4" />
            {project.companyLocation}
          </div>
        </div>
      </div>
      <span className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full">
        {project.duration}
      </span>
    </div>
    <div className="mb-4">
      <h2 className="text-xl font-bold text-white mb-1">{project.title}</h2>
      <div className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
        <span className="font-semibold text-gray-200">{project.role}</span>
        <span className="flex items-center gap-1">
          <IconCategory className="w-4 h-4" />
          {project.projectType}
        </span>
      </div>
    </div>
    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
      {project.responsibility}
    </p>
    <div className="flex flex-wrap gap-2 mb-4">
      {project.tech.map((tech: string) => (
        <div
          key={tech}
          className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-lg text-xs text-gray-300"
        >
          {techIcons[tech]}
          <span>{tech}</span>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row gap-3">
      <a href={project.github} target="_blank" rel="noopener noreferrer">
        <Button variant="on-hold">
          <IconBrandGithub className="w-4 h-4" />
          <span>Code</span>
        </Button>
      </a>
      <a href={project.live} target="_blank" rel="noopener noreferrer">
        <Button variant="done">
          <IconDeviceDesktop className="w-4 h-4" />
          <span>Live Demo</span>
        </Button>
      </a>
    </div>
  </div>
);

export default function ExperienceTimeline() {
  const timelineData = ["Company", "Personal", "Academy"]
    .map((cat) => {
      const filtered = projects
        .filter((p) => p.category === cat)
        .sort(
          (a, b) =>
            parseInt(b.duration.split(" - ")[1].split(" ")[1] || "2025") -
            parseInt(a.duration.split(" - ")[1].split(" ")[1] || "2025"),
        );
      return filtered.length
        ? {
            title: cat,
            content: (
              <div className="space-y-6">
                {filtered.map((p, i) => (
                  <ProjectCard key={i} project={p} />
                ))}
              </div>
            ),
          }
        : null;
    })
    .filter(Boolean);

  return (
    <section id="experience" className="bg-slate-950 pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-2">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <IconBriefcase className="w-5 h-5" />
            <span className="text-sm text-white font-medium">
              MY EXPERIENCE
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-2">
            WORK
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              EXPERIENCE
            </span>
          </h2>
          <div className="w-24 h-px bg-white mx-auto mb-8"></div>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto">
            Explore my professional journey through various projects, from
            academic work to enterprise solutions.
          </p>
        </div>

        <div className="mb-20">
          <Timeline data={timelineData} />
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-white mb-2">
              DESIGN PROJECTS
            </h3>
            <p className="text-gray-400">
              Explore some of my highlighted projects
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto px-2 sm:px-0">
            {designItems.map((item) => (
              <Dialog
                key={item.id}
                transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
              >
                <DialogTrigger className="flex w-full aspect-square border border-slate-700 bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-shadow relative group">
                  <DialogImage
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white flex flex-col justify-end h-full">
                    <DialogTitle className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                      {item.title}
                    </DialogTitle>
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="absolute top-3 right-3 sm:bottom-4 sm:right-4 sm:top-auto rounded-xl opacity-0 sm:opacity-100 sm:group-hover:opacity-100 transition-opacity"
                  >
                    <IconPlus className="w-4 sm:w-5 h-4 sm:h-5 text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContainer className="flex items-center justify-center p-4">
                  <DialogContent className="relative bg-slate-900 rounded-2xl w-full max-w-md sm:max-w-2xl lg:max-w-4xl overflow-hidden border border-slate-700">
                    <div className="flex flex-col">
                      <div className="relative w-full aspect-square">
                        <DialogImage
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <DialogClose />
                  </DialogContent>
                </DialogContainer>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
