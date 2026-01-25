import { Timeline } from '@/components/ui/timeline';
import { Button } from './ui/button';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogImage, DialogClose, DialogContainer } from './ui/linear-modal';
import { techIcons, projects, designItems } from '@/data/experienceData.tsx';
import { HugeiconsIcon } from '@hugeicons/react';
import { Add01Icon, GeometricShapes01Icon, GithubIcon, LaptopVideoIcon, Location05Icon } from '@hugeicons/core-free-icons';

const ProjectCard = ({ project }: { project: any }) => (
  <div className='mb-6 border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/5'>
    <div className='mb-4 flex flex-col gap-4 md:flex-row md:items-start md:justify-between'>
      <div className='flex items-center gap-4'>
        <div className='group relative flex flex-col items-center'>
          <img className='h-14 w-14 object-cover' src={project.companyLogo} alt={project.companyName} />
          <div className='pointer-events-none absolute -bottom-2 left-1/2 z-50 flex h-40 w-40 -translate-x-1/2 scale-95 items-center justify-center opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100'>
            <img
              src={project.companyLogo}
              alt={project.companyName}
              className='h-full w-full border border-white/20 bg-black object-cover shadow-lg'
            />
          </div>
        </div>
        <div>
          <h3 className='text-lg font-bold text-white'>{project.companyName}</h3>
          <div className='flex items-center gap-2 text-sm text-gray-400'>
            <HugeiconsIcon icon={Location05Icon} size={18} />
            {project.companyLocation}
          </div>
        </div>
      </div>
      <span className='border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300'>{project.duration}</span>
    </div>
    <div className='mb-4'>
      <h2 className='mb-1 text-xl font-bold text-white'>{project.title}</h2>
      <div className='flex items-center justify-between gap-2 text-sm text-gray-400'>
        <span className='font-medium text-white'>{project.role}</span>
        <span className='flex items-center gap-1'>
          <HugeiconsIcon icon={GeometricShapes01Icon} size={18} />
          {project.projectType}
        </span>
      </div>
    </div>
    <p className='mb-4 leading-relaxed text-gray-400'>{project.responsibility}</p>
    <div className='mb-4 flex flex-wrap gap-2'>
      {project.tech.map((tech: string) => (
        <div key={tech} className='flex items-center gap-1 border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-300'>
          {techIcons[tech]}
          <span>{tech}</span>
        </div>
      ))}
    </div>
    <div className='flex flex-col gap-3 sm:flex-row'>
      <a href={project.github} target='_blank' rel='noopener noreferrer'>
        <Button
          size='sm'
          className='group rounded-none border border-white bg-transparent px-8 text-white transition-all hover:border-white hover:bg-white/20'
        >
          <span className='text-base font-medium tracking-wide'>Code</span>
          <HugeiconsIcon icon={GithubIcon} size={18} />
        </Button>
      </a>
      <a href={project.live} target='_blank' rel='noopener noreferrer'>
        <Button
          size='sm'
          className='group rounded-none border border-white bg-transparent px-8 text-white transition-all hover:border-white hover:bg-white/20'
        >
          <span className='text-base font-medium tracking-wide'>Live Demo</span>
          <HugeiconsIcon icon={LaptopVideoIcon} size={18} />
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
    <section id='experience' className='relative overflow-hidden bg-black px-6 py-32 sm:px-8 md:px-12 lg:px-16'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-20'>
          <h2 className='text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl'>Experience</h2>
          <div className='mt-6 h-px w-20 bg-white/30' />
        </div>

        <div className='mb-20'>
          <Timeline data={timelineData} />
        </div>

        <div className='mt-32'>
          <div className='mb-12'>
            <div className='flex items-center gap-4'>
              <div className='h-px w-12 bg-gray-600' />
              <h3 className='text-xl font-light uppercase tracking-wider text-white'>Design Projects</h3>
            </div>
          </div>

          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-3'>
            {designItems.map((item) => (
              <Dialog key={item.id} transition={{ type: 'spring', bounce: 0.05, duration: 0.5 }}>
                <DialogTrigger className='group relative flex aspect-square w-full overflow-hidden border border-slate-700 bg-slate-800 transition-shadow hover:shadow-xl'>
                  <DialogImage src={item.url} alt={item.title} className='h-full w-full object-cover' />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-100 transition-opacity group-hover:opacity-80' />
                  <div className='absolute bottom-0 left-0 right-0 flex h-full flex-col justify-end p-3 text-white sm:p-4'>
                    <DialogTitle className='mb-2 line-clamp-2 text-base font-semibold sm:text-lg'>{item.title}</DialogTitle>
                  </div>
                  <Button
                    size='icon'
                    className='absolute right-3 top-3 rounded-none border-white bg-transparent opacity-0 transition-opacity sm:bottom-4 sm:right-4 sm:top-auto sm:opacity-100 sm:group-hover:opacity-100'
                  >
                    <HugeiconsIcon size={23} icon={Add01Icon} className='text-white sm:h-5 sm:w-5' />
                  </Button>
                </DialogTrigger>
                <DialogContainer className='flex items-center justify-center p-4'>
                  <DialogContent className='relative w-full max-w-md overflow-hidden border border-slate-700 bg-slate-900 sm:max-w-2xl lg:max-w-4xl'>
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
