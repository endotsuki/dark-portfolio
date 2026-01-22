import { motion } from 'framer-motion';
import { personalInfos, journey1, journey2, journey3, education } from '@/data/aboutData';
import { LaptopProgrammingIcon, Mail01Icon, Mortarboard02Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function RightColumn() {
  return (
    <div className='space-y-8 lg:col-span-8'>
      <div className='border border-white/10 bg-black/50 p-8 backdrop-blur-sm'>
        <div className='mb-6 flex items-center gap-3'>
          <HugeiconsIcon icon={LaptopProgrammingIcon} size={24} className='text-white' />
          <h3 className='text-2xl font-bold text-white'>My Journey</h3>
        </div>
        <div className='space-y-4 text-base leading-relaxed text-gray-400 md:text-lg'>
          <p>{journey1}</p>
          <p>{journey2}</p>
          <p>{journey3}</p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
        <div className='border border-white/10 bg-black/50 p-8 backdrop-blur-sm'>
          <div className='mb-6 flex items-center gap-3'>
            <HugeiconsIcon icon={Mail01Icon} size={24} className='text-white' />
            <h3 className='text-2xl font-bold text-white'>Contact</h3>
          </div>
          <div className='space-y-3'>
            {personalInfos.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-4 border border-white/10 bg-white/5 p-3 transition-colors hover:border-white/30 hover:bg-white/10'
                whileHover={{ x: 4 }}
              >
                <div className='border border-white/10 bg-black/50 p-2'>
                  <HugeiconsIcon icon={info.icon} size={20} className='text-gray-400 group-hover:text-white' />
                </div>
                <div>
                  <p className='text-xs text-gray-500'>{info.platform}</p>
                  <p className='text-sm font-medium text-white'>{info.handle}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className='border border-white/10 bg-black/50 p-8 backdrop-blur-sm'>
          <div className='mb-6 flex items-center gap-3'>
            <HugeiconsIcon icon={Mortarboard02Icon} size={24} className='text-white' />
            <h3 className='text-2xl font-bold text-white'>Education</h3>
          </div>
          <div className='space-y-6'>
            {education.map((edu, index) => (
              <div key={index} className='flex items-start gap-4'>
                <img src={edu.logo} className='h-12 w-12 border border-white/20 bg-white object-cover' alt={edu.school} />
                <div>
                  <h4 className='text-lg font-medium text-white'>{edu.degree}</h4>
                  <p className='text-sm text-gray-400'>{edu.school}</p>
                  <p className='text-xs text-gray-500'>{edu.field}</p>
                  <p className='mt-1 text-xs text-gray-500'>{edu.years}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
