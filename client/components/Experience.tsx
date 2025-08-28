import { useState } from 'react';
import { IconBox, IconBrandGithub, IconBriefcase, IconBuilding, IconBuildings, IconClock, IconDeviceDesktop, IconHandClick, IconMap, IconPoint, IconUser } from '@tabler/icons-react';
import { Bootstrap5, Canva, CSS3, Figma, GitHubLight, HTML5, JavaScript, Laravel, MySQL, NextJs, PHP, Python, React, ShadcnUI, TailwindCSS, TypeScript, VisualStudioCode, ViteJS, VueJs, WordPress } from 'developer-icons';


const techIcons: Record<string, React.ReactNode> = {
  React: <React className="w-6 h-6" />,
  Python: <Python className="w-6 h-6" />,
  TypeScript: <TypeScript className="w-6 h-6" />,
  NextJs: <NextJs className="w-6 h-6" />,
  Figma: <Figma className="w-6 h-6" />,
  GitHub: <GitHubLight className="w-6 h-6" />,
  WordPress: <WordPress className="w-6 h-6" />,
  JavaScript: <JavaScript className="w-6 h-6" />,
  HTML: <HTML5 className="w-6 h-6" />,
  CSS: <CSS3 className="w-6 h-6" />,
  Bootstrap: <Bootstrap5 className="w-6 h-6" />,
  Tailwind: <TailwindCSS className="w-6 h-6" />,
  VSCode: <VisualStudioCode className="w-6 h-6" />,
  Canva: <Canva className="w-6 h-6" />,
  Laravel: <Laravel className="w-6 h-6" />,
  PHP: <PHP className="w-6 h-6" />,
  VueJs: <VueJs className="w-6 h-6" />,
  MySQL: <MySQL className="w-6 h-6" />,
  ViteJS: <ViteJS className="w-6 h-6" />,
  ShadcnUI: <ShadcnUI className="w-6 h-6" />,
};

const categoryIcons = {
  Company: IconBuilding,
  Personal: IconUser,
  Academy: IconBuildings,
};

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Jewelry Management System',
      companyName: 'Chhorn Chenda Jewelry',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Point of Sale System',
      role: 'Fullstack Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.',
      duration: 'Mar 2023 - Jan 2024',
      tech: ['VueJs', 'Laravel', 'Bootstrap', 'MySQL'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Enterprise Web Application',
      companyName: 'Durable Techs',
      companyLocation: 'Remote',
      projectType: 'Internship Project',
      role: 'Senior Frontend Developer',
      responsibility: 'Implemented dynamic UI components, live sync functionality with Socket.io, optimized Redis-based workflows for real-time data processing, and enhanced user experience with responsive design patterns.',
      duration: 'Jan 2022 - Nov 2022',
      tech: ['WordPress', 'PHP'],
      category: 'Company',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Peak Slaok',
      companyName: 'Personal Project',
      companyLocation: 'Open Source',
      projectType: 'Quote platform',
      role: 'UX/UI Designer',
      responsibility: 'Designed user-centric interfaces, implemented responsive layouts with Tailwind CSS, optimized performance for mobile devices, and integrated Shadcn UI components for a modern look.',
      duration: 'Jul 2025 - Present',
      tech: ['NextJs', 'Tailwind', 'ViteJS', 'ShadcnUI'],
      category: 'Personal',
      github: 'https://github.com',
      live: 'https://aboutyoureadmore.online/',
    },
    {
      title: 'Portfolio Website',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Academic Project',
      role: 'Frontend Developer',
      responsibility: 'Created responsive design with modern CSS techniques, implemented smooth animations and transitions, optimized performance for fast loading times, and ensured cross-browser compatibility.',
      duration: 'Jan 2021 - Mar 2021',
      tech: ['HTML', 'CSS', 'JavaScript', 'React'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'E-Commerce Platform',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Capstone Project',
      role: 'Product Engineer',
      responsibility: 'Integrated Stripe payment processing, configured Tailwind CSS themes for consistent design, implemented comprehensive inventory management system, and built admin dashboard with analytics.',
      duration: 'Jul 2021 - Jan 2022',
      tech: ['NextJs', 'Tailwind', 'MySQL'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Group Project',
      role: 'Frontend Developer',
      responsibility: 'Created interactive data visualizations with Chart.js, implemented scheduled post integrations, enhanced dashboard UX with intuitive navigation, and optimized real-time data updates with Redis.',
      duration: 'Feb 2021 - Apr 2021',
      tech: ['VueJs', 'JavaScript', 'CSS'],
      category: 'Academy',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project, index) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push({ ...project, originalIndex: index });
    return acc;
  }, {} as Record<string, Array<typeof projects[0] & { originalIndex: number }>>);

  const CategoryDivider = ({ category, count }: { category: string; count: number }) => {
    const IconComponent = categoryIcons[category as keyof typeof categoryIcons];

    return (
      <div className="flex items-center gap-4 my-12">
        <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 rounded-full">
          <IconComponent className="w-5 h-5 text-gray-300" />
          <span className="text-lg font-semibold text-white">{category}</span>
          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-sm font-medium">
            {count}
          </span>
        </div>
        <div className="flex-1 h-px bg-gradient-to-r from-gray-700 to-transparent"></div>
      </div>
    );
  };

  const ProjectCard = ({ project, index }: { project: typeof projects[0] & { originalIndex: number }; index: number }) => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    return (
      <div
        onMouseEnter={() => setHoveredProject(project.originalIndex)}
        onMouseLeave={() => setHoveredProject(null)}
        className="group relative rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-800 shadow-inner shadow-black/40 hover:shadow-lg hover:shadow-white/10 transition-all duration-300"
      >
        <div className="sm:hidden absolute bottom-3 right-3 flex items-center gap-1 text-xs text-gray-400 animate-pulse">
          <IconHandClick className="w-4 h-4" />
          <span>Tap to see more</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 p-4 sm:p-6 sm:py-8">
          {/* Project Number */}
          <div className="sm:col-span-1 flex justify-center items-center">
            <div className="text-2xl sm:text-4xl font-light text-gray-100 group-hover:text-gray-600 transition-colors select-none">
              {String(index + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Project Info */}
          <div className="sm:col-span-8 space-y-3 sm:space-y-4">
            <div>
              <h2 className="text-lg sm:text-2xl font-bold mb-1 group-hover:text-gray-300 transition-colors">
                {project.title}
              </h2>
              <div className="flex flex-wrap items-center gap-2 text-base font-normal text-slate-400 leading-tight">
                <span className="flex items-center gap-1">
                  <IconBuilding className="w-4 h-4 sm:w-4 sm:h-4" />
                  {project.companyName}
                </span>
                <IconPoint className="w-2 h-2" />
                <span className="flex items-center gap-1">
                  <IconMap className="w-4 h-4 sm:w-4 sm:h-4" />
                  {project.companyLocation}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 items-center text-base font-normal text-slate-400 leading-tight">
              <span className="flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-md">
                <IconUser className="w-4 h-4" />
                {project.role}
              </span>
              <span className="flex items-center gap-1">
                <IconClock className="w-4 h-4" />
                {project.duration}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 ">
                <IconBox className="w-4 h-4" />
                {project.projectType}
              </span>
            </div>

            {/* Smooth expanding description */}
            <div className={`overflow-hidden transition-all duration-700 ease-in-out ${hoveredProject === project.originalIndex ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
              <p className="text-md sm:text-md text-gray-300 leading-relaxed border-l-2 border-slate-600 pl-3">
                {project.responsibility}
              </p>
            </div>
          </div>

          {/* Tech Stack & Actions */}
          <div className="sm:col-span-3 flex flex-col justify-between gap-4">
            <div className="flex flex-wrap gap-2 sm:justify-end cursor-default">
              {project.tech.map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-1 p-1 sm:p-2 bg-gray-900 border border-gray-800 text-sm text-gray-400 hover:-translate-y-0.5 transition-all rounded-md"
                >
                  {techIcons[tech]}
                  <span className="hidden sm:inline">{tech}</span>
                </div>
              ))}
            </div>


            <div className={`flex gap-2 transition-all duration-500 ease-in-out ${hoveredProject === project.originalIndex || window.innerWidth < 640 ? 'max-h-16 opacity-100' : 'max-h-0 opacity-0'}`}>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 border border-gray-700 text-gray-300 hover:border-white hover:text-white transition-all hover:-translate-y-0.5 text-md rounded-md"
              >
                <IconBrandGithub className="w-4 h-4" />
                <span>Code</span>
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 px-3 py-1.5 bg-white text-black hover:bg-gray-200 transition-all hover:-translate-y-0.5 text-md rounded-md"
              >
                <IconDeviceDesktop className="w-4 h-4" />
                <span>Live</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="experience" className="overflow-hidden bg-slate-950 pt-28 px-2 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
            <IconBriefcase className="w-5 h-5" />
            <span className="text-sm text-white font-medium tracking-wide">EXPERIENCE</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
            PROFESSIONAL{' '}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">
              EXPERIENCE
            </span>
          </h2>
          <div className="w-20 sm:w-24 h-px bg-white mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Grouped by source. Showcasing innovation, automation, and creative engineering.
          </p>
        </div>

        {/* Projects grouped by category */}
        <div className="space-y-8">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
            <div key={category}>
              <CategoryDivider category={category} count={categoryProjects.length} />
              <div className="space-y-4 sm:space-y-6">
                {categoryProjects.map((project, index) => (
                  <div
                    key={project.originalIndex}
                    data-aos="fade-up"
                    data-aos-delay={index * 100} // delay increases by 100ms per item
                    data-aos-duration="600"
                  >
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}