import { motion } from 'framer-motion';
import { Icon } from 'iconza';
import { skills, groups } from '@/data/skillData';

const SkillCard = ({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true, margin: '-50px' }}
    className='group relative'
  >
    <div className='relative h-full border border-white/10 bg-black/50 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/5'>
      <div className='mb-4 flex items-start justify-between'>
        <div className='border border-white/10 bg-white/5 p-3 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10'>
          <Icon name={skill.icon} size={28} className='text-white' />
        </div>

        <div className='text-right'>
          <div className='text-xl font-bold tabular-nums text-white'>{skill.level}</div>
          <div className='text-[9px] font-medium uppercase tracking-widest text-gray-500'>Level</div>
        </div>
      </div>

      <div className='mb-4'>
        <h3 className='text-base font-semibold text-white'>{skill.name}</h3>
      </div>

      <div className='flex gap-1'>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className='h-0.5 flex-1 transition-all duration-300'
            style={{
              backgroundColor: i < skill.level / 10 ? '#ffffff' : '#333333',
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default function Skills() {
  return (
    <section id='skills' className='relative overflow-hidden bg-black px-6 py-32 sm:px-8 md:px-12 lg:px-16'>
      <div className='absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]' />
      <div className='relative z-10 mx-auto max-w-7xl'>
        <div className='mb-20'>
          <h2 className='text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl'>Expertise</h2>
          <div className='mt-6 h-px w-20 bg-white/30' />
        </div>

        <div className='space-y-20'>
          {groups.map((groupName) => {
            const groupSkills = skills.filter((s) => s.group === groupName);
            return (
              <div key={groupName}>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className='mb-8'
                >
                  <div className='flex items-center gap-4'>
                    <div className='h-px w-12 bg-gray-600' />
                    <h3 className='text-xl font-light uppercase tracking-wider text-white'>{groupName}</h3>
                  </div>
                </motion.div>

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
