import { motion } from 'framer-motion';
import { IconWalk, IconMessage, IconSchool } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import { personalInfos, journey1, journey2, journey3, education } from '@/data/aboutData';

export default function RightColumn() {
  return (
    <div className='space-y-8 lg:col-span-8'>
      <div
        className='relative rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8 shadow-xl'
        data-aos='fade-left'
        data-aos-duration='600'
        data-aos-delay='400'
      >
        <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
        <h3 className='mb-6 flex items-center gap-3 text-2xl font-medium'>
          <IconWalk size={23} />
          My Professional Journey
        </h3>
        <div className='max-w-none text-lg leading-relaxed text-gray-200 sm:text-xl md:text-lg'>
          <p className='mb-4 text-gray-300'>{journey1}</p>
          <p className='mb-4 text-gray-300'>{journey2}</p>
          <p className='text-gray-300'>{journey3}</p>
        </div>
      </div>

      {/* Education & Contact */}
      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        {/* Contact Information */}
        <div
          data-aos='fade-up'
          data-aos-duration='600'
          className='relative rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-8 shadow-xl'
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <h3 className='mb-6 flex items-center gap-3 text-2xl font-medium'>
            <IconMessage size={23} />
            Contact Information
          </h3>
          <div className='space-y-4'>
            {personalInfos.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group relative flex items-start gap-4 overflow-hidden rounded-lg border border-white/5 bg-gray-800/50 p-2 transition-colors duration-300'
              >
                <span className='absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100' />
                <div className='rounded-lg border border-white/5 bg-gray-800/50 p-2 transition-colors'>
                  <info.icon size={23} className='text-gray-300 transition-colors' />
                </div>
                <div>
                  <p className='text-sm text-gray-400'>{info.platform}</p>
                  <p className='font-medium text-white'>{info.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Education */}
        <div
          className='rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black p-5 shadow-xl'
          data-aos='fade-up'
          data-aos-duration='600'
          data-aos-delay='200'
        >
          <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />
          <h3 className='mb-6 flex items-center gap-3 text-2xl font-medium'>
            <IconSchool size={23} />
            Education
          </h3>
          <div className='space-y-6'>
            {education.map((edu, index) => (
              <div key={index} className='flex items-start gap-5'>
                <img src={edu.logo} className='h-14 w-14 rounded-full border border-white/20 bg-white object-cover' />
                {/* Education Content */}
                <div>
                  <h4 className='text-lg leading-relaxed text-gray-200 sm:text-xl md:text-xl'>{edu.degree}</h4>
                  <p className='mb-1 text-gray-400'>{edu.school}</p>
                  <p className='text-sm text-gray-500'>{edu.field}</p>
                  <p className='mt-2 text-sm text-stone-50'>{edu.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
