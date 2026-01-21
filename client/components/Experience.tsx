import { Timeline } from '@/components/ui/timeline';
import { Button } from './ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogImage, DialogClose, DialogContainer } from './ui/linear-modal';
import { techIcons, projects, designItems } from '@/data/experienceData.tsx';
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, Briefcase01Icon, GeometricShapes01Icon, GithubIcon, LaptopVideoIcon, Location05Icon } from '@hugeicons/core-free-icons';

const ProjectCard = ({ project }: { project: any }) => (
  <div className='mb-6 rounded-3xl border border-slate-700 bg-gradient-to-tr from-primary/10 to-secondary/5 p-6 shadow-lg transition-all duration-300 hover:shadow-xl'>
    <div className='mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
      <div className='flex items-center gap-4'>
        <div className='group relative flex flex-col items-center'>
          <img
            className='h-14 w-14 rounded-full border-2 border-secondary/30 object-cover'
            src={project.companyLogo}
            alt={project.companyName}
          />
          <div className='pointer-events-none absolute -bottom-2 left-1/2 z-50 flex h-40 w-40 -translate-x-1/2 scale-95 items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
            <img
              src={project.companyLogo}
              alt={project.companyName}
              className='h-full w-full rounded-full border border-slate-600 bg-slate-900 object-cover shadow-lg'
            />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-bold text-white'>{project.companyName}</h3>
          <div className='flex items-center gap-2 text-sm text-gray-400'>
            <HugeiconsIcon icon={Location05Icon} size={20} />
            {project.companyLocation}
          </div>
        </div>
      </div>
      <span className='rounded-full bg-slate-800 px-3 py-1 text-xs text-gray-300'>{project.duration}</span>
    </div>
    <div className='mb-4'>
      <h2 className='mb-1 text-xl font-bold text-white'>{project.title}</h2>
      <div className='flex items-center justify-between gap-2 text-sm text-gray-400'>
        <span className='font-semibold text-secondary'>{project.role}</span>
        <span className='flex items-center gap-1'>
          <HugeiconsIcon icon={GeometricShapes01Icon} size={20} />
          {project.projectType}
        </span>
      </div>
    </div>
    <p className='mb-4 leading-relaxed text-gray-300'>{project.responsibility}</p>
    <div className='mb-4 flex flex-wrap gap-2'>
      {project.tech.map((tech: string) => (
        <div key={tech} className='flex items-center gap-1 rounded-md bg-secondary/20 px-3 py-1 text-xs text-gray-300'>
          {techIcons[tech]}
          <span>{tech}</span>
        </div>
      ))}
    </div>
    <div className='flex flex-col gap-3 sm:flex-row'>
      <a href={project.github} target='_blank' rel='noopener noreferrer'>
        <Button variant='on-hold'>
          <HugeiconsIcon icon={GithubIcon} size={20} />
          <span>Code</span>
        </Button>
      </a>
      <a href={project.live} target='_blank' rel='noopener noreferrer'>
        <Button variant='done'>
          <HugeiconsIcon icon={LaptopVideoIcon} size={20} />
          <span>Live Demo</span>
        </Button>
      </a>
    </div>
  </div>
);

export default function ExperienceTimeline() {
  const timelineData = ['Company', 'Personal', 'Academy']
    .map((cat) => {
      const filtered = projects
        .filter((p) => p.category === cat)
        .sort(
          (a, b) =>
            parseInt(b.duration.split(' - ')[1].split(' ')[1] || '2025') - parseInt(a.duration.split(' - ')[1].split(' ')[1] || '2025')
        );
      return filtered.length
        ? {
            title: cat,
            content: (
              <div className='space-y-6'>
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
    <section id='experience' className='bg-slate-950 pb-20 pt-28'>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='mb-16 text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3'>
            <HugeiconsIcon icon={Briefcase01Icon} size={20} />
            <span className='text-sm font-medium text-white'>MY EXPERIENCE</span>
          </div>
          <h2 className='mb-2 text-5xl font-black text-white md:text-7xl'>
            WORK
            <span className='block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>EXPERIENCE</span>
          </h2>
          <div className='mx-auto mb-8 h-px w-24 bg-white'></div>
        </div>

        <div className='mb-20'>
          <Timeline data={timelineData} />
        </div>

        <div className='mt-20'>
          <div className='mb-12 text-center'>
            <h3 className='mb-2 text-4xl font-bold text-white'>DESIGN PROJECTS</h3>
            <p className='text-gray-400'>Explore some of my highlighted projects</p>
          </div>

          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-3'>
            {designItems.map((item) => (
              <Dialog key={item.id} transition={{ type: 'spring', bounce: 0.05, duration: 0.5 }}>
                <DialogTrigger className='group relative flex aspect-square w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-800 transition-shadow hover:shadow-xl'>
                  <DialogImage src={item.url} alt={item.title} className='h-full w-full object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity group-hover:opacity-80' />
                  <div className='absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-3 text-white sm:p-4'>
                    <DialogTitle className='mb-2 line-clamp-2 text-base font-semibold sm:text-lg'>{item.title}</DialogTitle>
                  </div>
                  <Button
                    variant='default'
                    size='icon'
                    className='absolute right-3 top-3 rounded-xl opacity-0 transition-opacity sm:bottom-4 sm:right-4 sm:top-auto sm:opacity-100 sm:group-hover:opacity-100'
                  >
                    <HugeiconsIcon icon={Add01Icon} className='h-4 w-4 text-white sm:h-5 sm:w-5' />
                  </Button>
                </DialogTrigger>
                <DialogContainer className='flex items-center justify-center p-4'>
                  <DialogContent className='relative w-full max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-slate-900 sm:max-w-2xl lg:max-w-4xl'>
                    <div className='flex flex-col'>
                      <div className='relative aspect-square w-full'>
                        <DialogImage src={item.url} alt={item.title} className='h-full w-full object-cover' />
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
