import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { bio, socials } from '@/data/aboutData';
import { Button } from './ui/button';
import { CheckmarkBadge02Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

export default function ProfileCard() {
  return (
    <div className='relative overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm'>
      <div className='relative h-32 overflow-hidden bg-white/5'>
        <img src='banner.webp' alt='Profile Banner' className='h-full w-full' />
      </div>

      <div className='relative p-6'>
        <Avatar className='-mt-20 mb-6 h-24 w-24 border-2 border-white/20'>
          <AvatarImage src='/profile.jpg' alt='Profile' className='object-cover' />
        </Avatar>

        <div className='mb-6 space-y-2'>
          <div className='flex items-center gap-2'>
            <h3 className='text-2xl font-bold text-white'>Socheath Ek Mao</h3>
            <HugeiconsIcon icon={CheckmarkBadge02Icon} size={20} className='fill-blue-400 text-black' />
          </div>
          <p className='text-sm text-gray-500'>Web Developer</p>
        </div>

        <p className='mb-6 leading-relaxed text-gray-400'>{bio}</p>

        <div className='mb-6 h-px bg-white/10' />
        <div className='mb-6'>
          <p className='mb-4 text-sm font-medium text-gray-400'>Connect</p>
          <div className='grid grid-cols-6 gap-2'>
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex h-11 w-11 items-center justify-center border border-white/10 bg-white/5 transition-colors hover:border-white/30 hover:bg-white/10'
                title={social.platform}
                whileHover={{ scale: 1.05 }}
              >
                {React.cloneElement(social.icon as React.ReactElement, {
                  size: 20,
                  className: 'text-gray-400 group-hover:text-white transition-colors',
                })}
              </motion.a>
            ))}
          </div>
        </div>

        <div className='mb-6 h-px bg-white/10' />

        {/* Name Fields */}
        <div className='mb-6 space-y-4'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label className='block text-xs uppercase tracking-wider text-gray-500'>First Name</label>
              <div className='border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300'>SOCHEATH EK</div>
            </div>
            <div className='space-y-2'>
              <label className='block text-xs uppercase tracking-wider text-gray-500'>Last Name</label>
              <div className='border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300'>MAO</div>
            </div>
          </div>
        </div>

        <div className='mb-6 space-y-2'>
          <label className='block text-xs uppercase tracking-wider text-gray-500'>Email</label>
          <a href='mailto:maosocheathek@gmail.com' className='block'>
            <div className='flex items-center gap-3 border border-white/10 bg-white/5 px-3 py-2 text-sm text-gray-300 transition-colors hover:border-white/20 hover:bg-white/10'>
              <HugeiconsIcon icon={Mail01Icon} size={16} className='text-gray-500' />
              maosocheathek@gmail.com
            </div>
          </a>
        </div>

        <a href='/cv.pdf' download>
          <Button
            variant='default'
            className='group w-full rounded-none border border-white bg-transparent px-8 text-white transition-all hover:border-white hover:bg-white/20'
          >
            <svg width={20} height={20} fill='none' viewBox='0 0 40 40'>
              <path
                stroke='currentColor'
                strokeWidth={1.5}
                d='M7.75 4A3.25 3.25 0 0 1 11 .75h16c.121 0 .238.048.323.134l10.793 10.793a.46.46 0 0 1 .134.323v24A3.25 3.25 0 0 1 35 39.25H11A3.25 3.25 0 0 1 7.75 36z'
              />
              <path stroke='currentColor' strokeWidth={1.5} d='M27 .5V8a4 4 0 0 0 4 4h7.5' />
            </svg>
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
