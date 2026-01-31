'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Rocket, Trophy } from 'lucide-react';
const schedule = [
  {
    date: 'Now Open',
    title: 'Registration Begins',
    description:
      'Form your teams and register on the portal. Early bird slots available.',
    icon: <Calendar className="w-5 h-5" />,
    active: true
  },
  {
    date: 'Jan 20, 2026',
    title: 'Team Confirmation',
    description:
      'Final team lists released. Mentors assigned to confirmed teams.',
    icon: <Users className="w-5 h-5" />
  },
  {
    date: 'Jan 27, 2026',
    title: 'Hackathon Day 1',
    description:
      '9:00 AM Kickoff. Coding begins. Mentorship sessions throughout the day.',
    icon: <Rocket className="w-5 h-5" />
  },
  {
    date: 'Jan 28, 2026',
    title: 'Hackathon Day 2',
    description:
      'Code freeze at 9:00 AM. Presentations, judging, and awards ceremony.',
    icon: <Trophy className="w-5 h-5" />
  }];

const lineVariants = {
  hidden: {
    scaleY: 0
  },
  visible: {
    scaleY: 1,
    transition: {
      duration: 1.5,
      ease: 'easeOut'
    }
  }
};
const itemVariants = {
  hidden: (i) => ({
    opacity: 0,
    x: i % 2 === 0 ? -60 : 60
  }),
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      damping: 15
    }
  }
};
export default function Timeline() {
  return (
    <section id="timeline" className="py-12 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}
            className="text-3xl md:text-4xl font-bold text-white mb-4">

            Event <span className="text-violet-400">Timeline</span>
          </motion.h2>
        </div>

        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 origin-top md:-translate-x-1/2"
            variants={lineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true
            }}>

            <div className="w-full h-full bg-gradient-to-b from-violet-500 via-violet-500/50 to-violet-500/0" />
          </motion.div>

          <div className="space-y-12">
            {schedule.map((item, index) =>
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: true,
                  margin: '-50px'
                }}
                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                {/* Timeline Dot with pulse */}
                <div className="absolute left-4 md:left-1/2 top-0 -translate-x-[7px] md:-translate-x-1/2 z-10">
                  <motion.div
                    className={`w-4 h-4 rounded-full border-4 border-slate-950 ${item.active ? 'bg-violet-400' : 'bg-violet-500'}`}
                    initial={{
                      scale: 0
                    }}
                    whileInView={{
                      scale: 1
                    }}
                    viewport={{
                      once: true
                    }}
                    transition={{
                      delay: index * 0.2,
                      type: 'spring',
                      stiffness: 200
                    }} />

                  {item.active &&
                    <motion.div
                      className="absolute inset-0 rounded-full bg-violet-400"
                      animate={{
                        scale: [1, 2, 1],
                        opacity: [0.5, 0, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'easeOut'
                      }} />

                  }
                </div>

                {/* Content */}
                <div className="ml-10 md:ml-0 md:w-1/2">
                  <motion.div
                    className={`p-6 rounded-2xl bg-slate-900/50 border border-white/5 backdrop-blur-sm hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}
                    whileHover={{
                      y: -4
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300
                    }}>

                    <div
                      className={`flex items-center gap-2 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>

                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${item.active ? 'bg-violet-500/20 text-violet-300 border-violet-500/30' : 'bg-violet-500/10 text-violet-300 border-violet-500/20'}`}>

                        <span className="text-violet-400">{item.icon}</span>
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.description}</p>
                  </motion.div>
                </div>

                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}