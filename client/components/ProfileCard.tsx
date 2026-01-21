import { motion } from 'framer-motion';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { GlowingEffect } from '@/components/ui/glowing-effect';
import React from 'react';
import { bio, socials } from '@/data/aboutData';
import { Separator } from './ui/separator';
import { Button } from './ui/button';
import { CheckmarkBadge02Icon, Mail01Icon } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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
        <Avatar className='z-10 -mt-16 mb-4 h-28 w-28 rounded-full border-2 border-secondary/60'>
          <AvatarImage src='/profile.jpg' alt='Profile' className='rounded-full object-cover' />
        </Avatar>
        <div className='mb-2'>
          <div className='flex items-center gap-1'>
            <h3 className='text-xl font-semibold text-white'>Socheath Ek Mao</h3>
            <HugeiconsIcon icon={CheckmarkBadge02Icon} size={23} className='fill-blue-400 text-background' />
          </div>
          <p className='mb-2 text-sm font-medium text-gray-400'>Web Developer</p>
          <p className='leading-relaxed text-gray-300'>{bio}</p>
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
            <HugeiconsIcon icon={Mail01Icon} size={18} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' />
            <a href='mailto:maosocheathek@gmail.com' className='block'>
              <div className='flex h-11 w-full items-center rounded-lg border border-gray-700 bg-gray-800/50 pl-10 pr-3 text-sm text-gray-300 transition-all hover:bg-gray-800/70 hover:underline'>
                maosocheathek@gmail.com
              </div>
            </a>
          </div>
        </div>

        <a href='/cv.pdf' download>
          <Button variant='on-hold' size='md'>
            <svg width={25} height={25} fill='none' viewBox='0 0 40 40'>
              <path
                stroke='#D5D7DA'
                strokeWidth={1.5}
                d='M7.75 4A3.25 3.25 0 0 1 11 .75h16c.121 0 .238.048.323.134l10.793 10.793a.46.46 0 0 1 .134.323v24A3.25 3.25 0 0 1 35 39.25H11A3.25 3.25 0 0 1 7.75 36z'
              />
              <path stroke='#D5D7DA' strokeWidth={1.5} d='M27 .5V8a4 4 0 0 0 4 4h7.5' />
              <rect width={26} height={16} x={1} y={18} fill='#D92D20' rx={2} />
              <path
                fill='#fff'
                d='M4.832 30v-7.273h2.87q.826 0 1.41.316.582.314.887.87.31.555.31 1.279t-.313 1.278q-.313.555-.906.863-.59.309-1.427.309h-1.83V26.41h1.581q.444 0 .732-.153.29-.156.433-.43.145-.276.145-.635 0-.363-.145-.632a.97.97 0 0 0-.433-.423q-.291-.153-.74-.153H6.37V30zm9.053 0h-2.578v-7.273h2.6q1.095 0 1.889.437.791.433 1.218 1.246.43.814.43 1.947 0 1.136-.43 1.953a2.95 2.95 0 0 1-1.226 1.253q-.795.437-1.903.437m-1.04-1.317h.976q.682 0 1.147-.242.47-.244.703-.756.238-.516.238-1.328 0-.807-.238-1.318a1.54 1.54 0 0 0-.7-.753q-.465-.24-1.146-.241h-.98zM18.582 30v-7.273h4.816v1.268H20.12v1.733h2.958v1.268H20.12V30z'
              />
            </svg>
            Download CV
          </Button>
        </a>
      </div>
    </div>
  );
}
