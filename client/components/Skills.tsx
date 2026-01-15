import { motion } from 'framer-motion';
import { Icon } from 'iconza';
import { skills, groups } from '@/data/skillData';
import { IconTerminal } from '@tabler/icons-react';

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.4, delay: index * 0.03 }}
    viewport={{ once: true, margin: '-50px' }}
    className='group relative'
  >
    <div className='relative h-full rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-transparent p-5 transition-all duration-500 hover:border-white/20 hover:bg-gradient-to-b hover:from-white/[0.08] hover:to-white/[0.02]'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='flex items-center justify-center rounded-lg bg-white/10 p-3 transition-transform duration-500 group-hover:scale-110'>
          <Icon name={skill.icon} size={30} className='text-white' />
        </div>

        <div className='text-right'>
          <div className='text-2xl font-bold tabular-nums text-white'>{skill.level}</div>
          <div className='text-[10px] font-medium uppercase tracking-wider text-white/40'>Level</div>
        </div>
      </div>

      <div className='mb-3'>
        <h3 className='text-base font-semibold text-white'>{skill.name}</h3>
      </div>

      <div className='flex gap-1'>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className='h-1 flex-1 rounded-full transition-all duration-500'
            style={{
              backgroundColor: i < skill.level / 10 ? '#75B06F' : '#ffffff',
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id='skills' className='relative bg-slate-950 px-4 py-32'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 text-center'>
          <div className='mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3'>
            <IconTerminal size={23} />
            <span className='text-sm font-medium tracking-wide text-white'>SKILLS</span>
          </div>
          <h2 className='mb-2 text-5xl font-black tracking-tight text-white md:text-7xl'>
            TECHNICAL
            <span className='block bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent'>EXPERTISE</span>
          </h2>
          <div className='mx-auto mb-8 h-px w-24 bg-white'></div>
        </div>

        {/* Skills by Group */}
        <div className='space-y-20'>
          {groups.map((groupName) => {
            const groupSkills = skills.filter((s) => s.group === groupName);
            return (
              <div key={groupName}>
                {/* Group Title */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className='mb-8'
                >
                  <h3 className='text-2xl font-semibold text-white sm:text-3xl'>{groupName}</h3>
                  <div className='mt-2 h-px w-16 bg-gradient-to-r from-white/50 to-transparent' />
                </motion.div>

                {/* Skills Grid */}
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                  {groupSkills.map((skill, i) => (
                    <SkillCard key={skill.name} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
