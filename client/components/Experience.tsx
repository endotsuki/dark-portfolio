import { useState } from 'react';
import { IconBriefcase, IconBrandGithub, IconDeviceDesktop, IconMap, IconCategory, IconArrowRight } from '@tabler/icons-react';
import { Bootstrap5, Canva, CSS3, Figma, GitHubLight, HTML5, JavaScript, Laravel, MySQL, NextJs, PHP, Python, React, ShadcnUI, TailwindCSS, TypeScript, VisualStudioCode, ViteJS, VueJs, WordPress } from 'developer-icons';

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

// Divider component for categories
const CategoryDivider = ({ category }: { category: string }) => (
  <div className="flex items-center my-10">
    <div className="flex-grow border-t border-gray-300" />
    <h3 className="mx-4 text-2xl font-semibold uppercase tracking-wider">
      {category}
    </h3>
    <div className="flex-grow border-t border-gray-300" />
  </div>
);

export default function Projects() {

  const projects = [
    {
      title: 'Jewelry Management System',
      companyName: 'Chhorn Chenda',
      companyLocation: 'Phnom Penh, Cambodia',
      projectType: 'Point of Sale System',
      role: 'Fullstack Developer',
      responsibility: 'Designed Node.js services, integrated ML pipelines for inventory prediction, built real-time sales dashboard, and deployed scalable architecture to AWS with automated CI/CD pipelines.',
      duration: 'Mar 2023 - Jan 2024',
      tech: ['VueJs', 'Laravel', 'Bootstrap', 'MySQL'],
      category: 'Company',
      companyLogo: 'logo/ccd.png',
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
      companyLogo: '/logo/durable.jpg',
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
      companyLogo: 'logo/peakslaok.png',
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
      tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Figma'],
      category: 'Academy',
      companyLogo: '/pnc.png',
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
      companyLogo: '/pnc.png',
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
      companyLogo: '/pnc.png',
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ];

  // Group projects by category
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) acc[project.category] = [];
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  return (
    <section id="experience" className="overflow-hidden bg-slate-950 pt-16 px-2 relative">
      <div className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
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
              Discover my latest projects and professional experiences across different domains
            </p>
          </div>

          {/* Projects grouped by category */}
          {Object.entries(groupedProjects).map(([category, projects]) => (
            <div key={category}>
              <CategoryDivider category={category} />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-600 hover:shadow-lg">
                    {/* Header with Logo and Save Button */}
                    <div className="flex items-start justify-between mb-4 relative">
                      {/* Logo with hover preview */}
                      <div className="relative group">
                        {/* Hover Preview */}
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
                      {/* Company name and duration */}
                      <h3 className="text-lg font-semibold text-gray-200 flex-1 ml-3">
                        {project.companyName}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-200 bg-slate-700 px-2 py-1 rounded-full">
                          {project.duration}
                        </span>
                      </div>
                    </div>

                    {/* Company and Role */}
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-gray-200 mb-2">
                        {project.title}
                      </h2>
                      <h3 className="text-lg font-semibold text-gray-200 mb-1">
                        {project.role}
                      </h3>
                    </div>
                    {/* Project Details */}
                    <div className="mb-4">
                      <p className="text-gray-200 text-sm mb-2 line-clamp-2">
                        {project.responsibility}
                      </p>
                      <div className="flex items-center text-sm text-gray-300 gap-4">
                        <span className="flex items-center gap-1">
                          <IconMap className="w-4 h-4" />
                          {project.companyLocation}
                        </span>
                        <span className="flex items-center gap-1">
                          <IconCategory className="w-4 h-4" />
                          {project.projectType.split(' - ')[0]}
                        </span>
                      </div>
                    </div>
                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-1 bg-slate-700 px-2 py-2 rounded-md text-xs text-gray-300">
                            {techIcons[tech]}
                            <span>{tech}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Bottom Section with Salary and Apply Button */}
                    <div className="flex items-center justify-between">
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden px-4 py-2 border border-gray-600 text-gray-300 hover:text-slate-800 rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-1">
                          <div className="flex items-center gap-1 group-hover:translate-x-24 translate-x-2.5 transition-all duration-500">
                            <IconBrandGithub className="w-5 h-5" />
                            Code
                          </div>
                          <IconArrowRight className="text-gray-50 w-5 h-5 group-hover:-translate-x-7 -translate-x-28 transition-all duration-500" />
                        </a>
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative overflow-hidden px-5 py-2 bg-slate-700 text-white rounded-xl hover:bg-gray-800 transition-colors text-sm font-medium flex items-center gap-1">
                          <div className="flex items-center gap-1 group-hover:translate-x-32 translate-x-2.5 transition-all duration-500">
                            <IconDeviceDesktop className="w-5 h-5" />
                            View Live
                          </div>
                          <IconArrowRight className="text-gray-50 w-5 h-5 group-hover:-translate-x-11 -translate-x-32 transition-all duration-500" />
                        </a>
                      </div>
                    </div>
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