import { IconUserSquare } from '@tabler/icons-react';
import ProfileCard from './ProfileCard';
import RightColumn from './RightColumn';

export default function About() {
  return (
    <section id='about' className='relative overflow-hidden bg-slate-950 px-2 pt-28'>
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-12 text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3'>
            <IconUserSquare size={23} />
            <span className='text-sm font-medium tracking-wide text-white'>SKILLS</span>
          </div>
          <h2 className='mb-2 text-5xl font-black tracking-tight text-white md:text-7xl'>
            WHO I<span className='block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>AM</span>
          </h2>
          <div className='mx-auto mb-8 h-px w-24 bg-white'></div>
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12'>
          <div className='lg:col-span-4'>
            <ProfileCard />
          </div>
          <RightColumn />
        </div>
      </div>
    </section>
  );
}
