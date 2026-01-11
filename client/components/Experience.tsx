import { Timeline } from "@/components/ui/timeline";
import {
  IconBriefcase,
  IconBrandGithub,
  IconDeviceDesktop,
  IconMapPin2,
  IconCategory,
  IconPlus,
} from "@tabler/icons-react";
import { Icon } from "iconza";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogImage,
  DialogClose,
  DialogDescription,
  DialogContainer,
} from "./ui/linear-modal";

const techIcons: Record<string, React.ReactNode> = {
  React: <Icon name="ReactJS" size={23} />,
  Python: <Icon name="Python" size={23} />,
  TypeScript: <Icon name="TypeScript" size={23} />,
  NextJS: <Icon name="NextJS" size={23} />,
  Figma: <Icon name="Figma" size={23} />,
  GitHub: <Icon name="GitHub Light" size={23} />,
  WordPress: <Icon name="WordPress" size={23} />,
  JavaScript: <Icon name="JavaScript" size={23} />,
  HTML: <Icon name="HTML5" size={23} />,
  CSS: <Icon name="CSS3" size={23} />,
  Bootstrap: <Icon name="Bootstrap5" size={23} />,
  Tailwind: <Icon name="TailwindCSS" size={23} />,
  VSCode: <Icon name="VSCode" size={23} />,
  Canva: <Icon name="Canva" size={23} />,
  Laravel: <Icon name="Laravel" size={23} />,
  PHP: <Icon name="PHP" size={23} />,
  VueJS: <Icon name="VueJS" size={23} />,
  MySQL: <Icon name="MySQL" size={23} />,
  ViteJS: <Icon name="ViteJS" size={23} />,
  ShadcnUI: <Icon name="Shadcn Light" size={20} />,
};

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

const items = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1757672242146-a6a7897bcc80?q=80&w=1171&auto=format&fit=crop",
    title: "Accordion",
    description:
      "Immerse yourself in our cutting-edge interactive gallery, designed to showcase a diverse array of visual content with unparalleled clarity and style. This feature allows users to effortlessly navigate through high-resolution images, from awe-inspiring landscapes to intimate portraits and abstract art. With smooth transitions, intuitive controls, and responsive design, our gallery adapts to any device, ensuring a seamless browsing experience.",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1756806983725-977bb2308d4e?q=80&w=1170&auto=format&fit=crop",
    title: "Globe Section",
    description:
      "Embark on a virtual journey around the world with our state-of-the-art 3D globe feature. This interactive marvel allows users to explore geographical data, global trends, and worldwide connections with unprecedented ease and detail. Spin the globe with a flick of your mouse, zoom into street-level views, or soar high for a continental perspective.",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1756806983832-1f056cf24182?q=80&w=1170&auto=format&fit=crop",
    title: "Image Mouse Trail",
    description:
      "Transform your browsing experience with our mesmerizing Image Mouse Trail feature. As you move your cursor across the screen, watch in wonder as a trail of carefully curated images follows in its wake, creating a dynamic and engaging visual spectacle. This innovative feature goes beyond mere aesthetics.",
  },
];

export default function ExperienceTimeline() {
  const projects = [
    {
      title: "Jewelry Management System",
      companyName: "Chhorn Chenda",
      companyLocation: "Phnom Penh",
      projectType: "Point of Sale System",
      role: "Fullstack Developer",
      responsibility:
        "Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.",
      duration: "Mar 2023 - Jan 2024",
      tech: ["VueJS", "Laravel", "Bootstrap", "MySQL"],
      category: "Company",
      companyLogo: "/logo/ccd.png",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Enterprise Web Application",
      companyName: "Durable Techs",
      companyLocation: "Remote",
      projectType: "Internship Project",
      role: "Senior Frontend Developer",
      responsibility:
        "Implemented dynamic UI components, live sync functionality with Socket.io, optimized Redis-based workflows for real-time data processing, and enhanced user experience with responsive design patterns.",
      duration: "Jan 2022 - Nov 2022",
      tech: ["WordPress", "PHP"],
      category: "Company",
      companyLogo: "/logo/durable.jpg",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Peak Slaok",
      companyName: "Personal Project",
      companyLocation: "Open Source",
      projectType: "Quote platform",
      role: "UX/UI Designer",
      responsibility:
        "Designed user-centric interfaces, implemented responsive layouts with Tailwind CSS, optimized performance for mobile devices, and integrated Shadcn UI components for a modern look.",
      duration: "Jul 2025 - Present",
      tech: ["NextJS", "Tailwind", "ViteJS", "ShadcnUI"],
      category: "Personal",
      companyLogo: "logo/peakslaok.png",
      github: "https://github.com",
      live: "https://aboutyoureadmore.online/",
    },
    {
      title: "Portfolio Website",
      companyName: "CSTAD Academy",
      companyLocation: "Phnom Penh",
      projectType: "Academic Project",
      role: "Frontend Developer",
      responsibility:
        "Created responsive design with modern CSS techniques, implemented smooth animations and transitions, optimized performance for fast loading times, and ensured cross-browser compatibility.",
      duration: "Jan 2021 - Mar 2021",
      tech: ["HTML", "CSS", "JavaScript", "React", "Figma"],
      category: "Academy",
      companyLogo: "/pnc.png",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "E-Commerce Platform",
      companyName: "CSTAD Academy",
      companyLocation: "Phnom Penh",
      projectType: "Capstone Project",
      role: "Product Engineer",
      responsibility:
        "Integrated Stripe payment processing, configured Tailwind CSS themes for consistent design, implemented comprehensive inventory management system, and built admin dashboard with analytics.",
      duration: "Jul 2021 - Jan 2022",
      tech: ["NextJS", "Tailwind", "MySQL"],
      category: "Academy",
      companyLogo: "/pnc.png",
      github: "https://github.com",
      live: "https://example.com",
    },
    {
      title: "Social Media Dashboard",
      companyName: "CSTAD Academy",
      companyLocation: "Phnom Penh",
      projectType: "Group Project",
      role: "Frontend Developer",
      responsibility:
        "Created interactive data visualizations with Chart.js, implemented scheduled post integrations, enhanced dashboard UX with intuitive navigation, and optimized real-time data updates with Redis.",
      duration: "Feb 2021 - Apr 2021",
      tech: ["VueJS", "JavaScript", "CSS", "Figma", "Canva"],
      category: "Academy",
      companyLogo: "/pnc.png",
      github: "https://github.com",
      live: "https://example.com",
    },
  ];

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
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Works
            </h3>
            <p className="text-gray-400">
              Explore some of my highlighted projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {items.map((item) => (
              <Dialog
                key={item.id}
                transition={{ type: "spring", bounce: 0.05, duration: 0.5 }}
              >
                <DialogTrigger className="flex w-full h-72 border border-slate-700 bg-slate-800 rounded-xl flex-col overflow-hidden hover:shadow-xl transition-shadow relative group">
                  <DialogImage
                    src={item.url}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <DialogTitle className="text-xl font-bold mb-2">
                      {item.title}
                    </DialogTitle>
                  </div>
                  <Button
                    variant="default"
                    size="icon"
                    className="absolute bottom-4 right-4 rounded-xl"
                  >
                    <IconPlus className="w-5 h-5 text-white" />
                  </Button>
                </DialogTrigger>
                <DialogContainer className="flex items-center justify-center p-4">
                  <DialogContent className="relative bg-slate-900 rounded-2xl w-full max-w-5xl overflow-hidden border border-slate-700">
                    <div className="flex flex-col">
                      <div className="relative w-full h-[50vh]">
                        <DialogImage
                          src={item.url}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8">
                        <DialogTitle className="text-4xl font-bold text-white mb-6">
                          {item.title}
                        </DialogTitle>
                        <DialogDescription>
                          <p className="text-slate-300 text-lg leading-relaxed">
                            {item.description}
                          </p>
                        </DialogDescription>
                      </div>
                    </div>
                    <DialogClose className="!text-white" />
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
