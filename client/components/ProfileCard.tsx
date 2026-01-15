import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { IconDownload, IconMail, IconRosetteDiscountCheckFilled } from '@tabler/icons-react';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import React from 'react';
import { socials } from '@/data/aboutData';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export default function ProfileCard() {
  return (
    <div
      className='relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900 to-black shadow-xl'
      data-aos='fade-right'
      data-aos-duration='600'
    >
      <GlowingEffect spread={40} glow={true} disabled={false} proximity={64} inactiveZone={0.01} />

      <div className='relative m-2 h-40 overflow-hidden rounded-2xl bg-gray-800'>
        <img src='banner.webp' alt='Profile Banner' className='h-full w-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-30'></div>
      </div>

      <div className='relative px-6 pb-6'>
        <Avatar className='z-10 -mt-16 mb-4 h-28 w-28 rounded-full border-4 border-gray-700'>
          <AvatarImage src='/profile.jpg' alt='Profile' className='object-cover' />
        </Avatar>
        <div className='mb-2'>
          <div className='flex items-center gap-1'>
            <h3 className='text-xl font-semibold text-white'>Socheath Ek Mao</h3>
            <IconRosetteDiscountCheckFilled size={20} className='fill-blue-500' />
          </div>
          <p className='text-gray-400'>Web Developer</p>
        </div>

        <Separator className='my-4' />

        <div className='mb-5 border-gray-700'>
          <label className='mb-3 block text-sm font-medium text-gray-300'>Connect on social:</label>
          <div className='grid grid-cols-6 gap-2'>
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex h-12 w-12 items-center justify-center rounded-lg border border-white/5 bg-gray-800/50 transition-all hover:border-primary/50 hover:bg-primary/10'
                title={social.platform}
              >
                {React.cloneElement(social.icon as React.ReactElement, {
                  size: 30,
                  className: 'text-gray-400 group-hover:text-cyan-400 transition-colors',
                })}
              </motion.a>
            ))}
          </div>
        </div>

        <Separator className='my-4' />

        {/* Name Fields */}
        <div className='mb-6 space-y-3'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-gray-300'>First Name</label>
              <div className='flex h-11 w-full cursor-not-allowed select-none items-center rounded-lg border border-gray-700 bg-gray-800/50 px-3 text-sm text-gray-300'>
                SOCHEATH EK
              </div>
            </div>
            <div className='space-y-2'>
              <label className='block text-sm font-medium text-gray-300'>Last Name</label>
              <div className='flex h-11 w-full cursor-not-allowed select-none items-center rounded-lg border border-gray-700 bg-gray-800/50 px-3 text-sm text-gray-300'>
                MAO
              </div>
            </div>
          </div>
        </div>
        <div className='mb-6 space-y-2'>
          <label className='block text-sm font-medium text-gray-300'>Email</label>
          <div className='relative'>
            <IconMail size={18} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <a href='mailto:maosocheathek@gmail.com' className='block'>
              <div className='flex h-11 w-full items-center rounded-lg border border-gray-700 bg-gray-800/50 pl-10 pr-3 text-sm text-gray-300'>
                maosocheathek@gmail.com
              </div>
            </a>
          </div>
        </div>

        <a href='/cv.pdf' download>
          <Button variant='on-hold' size='md' className='w-full'>
            <IconDownload size={16} />
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
