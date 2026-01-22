import ProfileCard from './ProfileCard';
import RightColumn from './RightColumn';

export default function About() {
  return (
    <section id='about' className='relative overflow-hidden bg-black px-6 py-32 sm:px-8 md:px-12 lg:px-16'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-20'>
          <h2 className='text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl'>Who I Am</h2>
          <div className='mt-6 h-px w-20 bg-white/30' />
        </div>

        <div className='grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12'>
          <div className='lg:col-span-4'>
            <ProfileCard />
          </div>
          <RightColumn />
        </div>
      </div>
    </section>
  );
}
