import { Timeline } from '@/components/ui/timeline';
import { Bootstrap5, Canva, CSS3, Figma, GitHubLight, HTML5, JavaScript, Laravel, MySQL, NextJs, PHP, Python, React, ShadcnUI, TailwindCSS, TypeScript, VisualStudioCode, ViteJS, VueJs, WordPress } from 'developer-icons';
import { IconBriefcase, IconBrandGithub, IconDeviceDesktop, IconMap, IconCategory, IconArrowRight } from '@tabler/icons-react';

const techIcons: Record<string, React.ReactNode> = {
  React: <React size={23} />,
  Python: <Python size={23} />,
  TypeScript: <TypeScript size={23} />,
  NextJs: <NextJs size={23} />,
  Figma: <Figma size={23} />,
  GitHub: <GitHubLight size={23} />,
  WordPress: <WordPress size={23} />,
  JavaScript: <JavaScript size={23} />,
  HTML: <HTML5 size={23} />,
  CSS: <CSS3 size={23} />,
  Bootstrap: <Bootstrap5 size={23} />,
  Tailwind: <TailwindCSS size={23} />,
  VSCode: <VisualStudioCode size={23} />,
  Canva: <Canva size={23} />,
  Laravel: <Laravel size={23} />,
  PHP: <PHP size={23} />,
  VueJs: <VueJs size={23} />,
  MySQL: <MySQL size={23} />,
  ViteJS: <ViteJS size={23} />,
  ShadcnUI: <ShadcnUI size={23} />,
};

const ProjectCard = ({ project }: { project: any }) => (
  <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-700 mb-6 hover:shadow-xl transition-all duration-300">
    {/* Header with Logo and Company Info */}
    <div className="flex items-start justify-between mb-4">
      <div className="flex items-center gap-4">
        <div className="relative group">
          <div className="relative group flex flex-col items-center">
            <img
              className="w-14 h-14 rounded-full border border-slate-500 object-cover cursor-pointer"
              src={project.companyLogo}
              alt={project.companyName} />
            {/* Hover Preview */}
            <div className="absolute left-1/2 -translate-x-4 -bottom-2 w-60 h-w-60 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 z-50 pointer-events-none flex items-center justify-center">
              <img
                src={project.companyLogo}
                alt={`${project.companyName} preview`}
                className="w-40 h-40 rounded-full border border-slate-600 shadow-lg object-contain bg-slate-900"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white">
            {project.companyName}
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <IconMap className="w-4 h-4" />
            {project.companyLocation}
          </div>
        </div>
      </div>
      <span className="text-xs bg-slate-800 text-gray-300 px-3 py-1 rounded-full font-medium">
        {project.duration}
      </span>
    </div>
    {/* Project Title and Role */}
    <div className="mb-4">
      <h2 className="text-xl font-bold text-white mb-1">
        {project.title}
      </h2>
      <div className="flex items-center gap-4 text-sm text-gray-400">
        <span className="font-semibold text-gray-200">{project.role}</span>
        <span className="flex items-center gap-1">
          <IconCategory className="w-4 h-4" />
          {project.projectType}
        </span>
      </div>
    </div>

    {/* Responsibility */}
    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
      {project.responsibility}
    </p>

    {/* Tech Stack */}
    <div className="mb-4">
      <div className="flex flex-wrap gap-2">
        {project.tech.map((tech: string) => (
          <div
            key={tech}
            className="flex items-center gap-1 bg-slate-800 px-3 py-1 rounded-lg text-xs text-gray-300 font-medium"
          >
            {techIcons[tech]}
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Action Buttons */}
    <div className="flex gap-3">
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden px-4 py-2 border border-gray-600 text-gray-300 hover:text-white rounded-lg hover:bg-gray-700 transition-all duration-300 text-sm font-medium flex items-center gap-2"
      >
        <div className="flex items-center gap-2 group-hover:translate-x-6 transition-transform duration-300">
          <IconBrandGithub className="w-4 h-4" />
          <span>Code</span>
        </div>
        <IconArrowRight className="w-4 h-4 group-hover:-translate-x-8 translate-x-8 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute" />
      </a>
      <a
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative overflow-hidden px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 text-sm font-medium flex items-center gap-2"
      >
        <div className="flex items-center gap-2 group-hover:translate-x-6 transition-transform duration-300">
          <IconDeviceDesktop className="w-4 h-4" />
          <span>Live Demo</span>
        </div>
        <IconArrowRight className="w-4 h-4 group-hover:-translate-x-10 translate-x-10 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute" />
      </a>
    </div>
  </div>
);

export default function ExperienceTimeline() {
  const projects = [
    //Company experience
    {
      title: 'Jewelry Management System',
      companyName: 'Chhorn Chenda',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Point of Sale System',
      role: 'Fullstack Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.',
      duration: 'Mar 2025 - Jan 2025',
      tech: ['VueJs', 'Laravel', 'Bootstrap', 'MySQL'],
      category: 'Company',
      companyLogo: '/logo/ccd.png',
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
      companyLogo: 'https://via.placeholder.com/48/10b981/ffffff?text=DT',
      github: 'https://github.com',
      live: 'https://example.com',
    },
    //Personal Projects
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
      companyLogo: 'https://via.placeholder.com/48/f59e0b/ffffff?text=PS',
      github: 'https://github.com',
      live: 'https://aboutyoureadmore.online/',
    },
    //Academy Projects
    {
      title: 'Portfolio Website',
      companyName: 'CSTAD Academy',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Academic Project',
      role: 'Frontend Developer',
      responsibility: 'Created responsive design with modern CSS techniques, implemented smooth animations and transitions, optimized performance for fast loading times, and ensured cross-browser compatibility.',
      duration: 'Jan 2021 - Mar 2021',
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
      category: 'Academy',
      companyLogo: 'https://via.placeholder.com/48/8b5cf6/ffffff?text=CS',
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
      companyLogo: 'https://via.placeholder.com/48/8b5cf6/ffffff?text=CS',
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
      tech: ['VueJs', 'JavaScript', 'CSS', 'Figma', 'Canva'],
      category: 'Academy',
      companyLogo: 'https://via.placeholder.com/48/8b5cf6/ffffff?text=CS',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  // Group projects by year and create timeline data
  const createTimelineData = () => {
    const groupedByYear: Record<string, typeof projects> = {};
    projects.forEach(project => {
      const endYear = project.duration.split(' - ')[1].split(' ')[1] || '2025';
      if (!groupedByYear[endYear]) {
        groupedByYear[endYear] = [];
      }
      groupedByYear[endYear].push(project);
    });

    // Sort years in descending order
    return Object.keys(groupedByYear)
      .sort((a, b) => parseInt(b) - parseInt(a))
      .map(year => ({
        title: year,
        content: (
          <div className="space-y-6">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">
                Professional Growth with {year}
              </h3>
              <p className="text-gray-400 text-sm">
                {groupedByYear[year].length} project{groupedByYear[year].length > 1 ? 's' : ''} completed this year
              </p>
            </div>

            {groupedByYear[year].map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        ),
      }));
  };

  const timelineData = createTimelineData();

  return (
    <section className="min-h-screen bg-slate-950 pt-16 px-2 relative">
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-2">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-white/20 mb-4">
                <IconBriefcase className="w-5 h-5" />
                <span className="text-sm text-white font-medium tracking-wide">MY EXPERIENCE</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tight">
                PROFESSIONAL
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-white">EXPERIENCE</span>
              </h2>
              <div className="w-24 h-px bg-white mx-auto mb-8"></div>
              <p className="text-lg sm:text-xl md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                Explore my professional journey through various projects, from academic work to enterprise solutions.
                Each experience has shaped my expertise in modern web development and user experience design.
              </p>
            </div>
          </div>
          {/* Timeline */}
          <div className="relative">
            <Timeline data={timelineData} />
          </div>
        </div>
      </div>
    </section>
  );
}