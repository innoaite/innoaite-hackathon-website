'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartPulse, GraduationCap, Leaf, Lightbulb } from 'lucide-react';

const tracks = [
  {
    icon: <HeartPulse className="w-8 h-8" />,
    title: 'Healthcare AI',
    description: 'Revolutionize patient care, diagnostics, and medical research using Generative AI solutions.',
    color: 'text-rose-400',
    borderColor: 'group-hover:border-rose-500/50',
    glowColor: 'group-hover:shadow-rose-500/10',
    bgGlow: 'bg-rose-500/20'
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    title: 'EdTech Evolution',
    description: 'Create personalized learning experiences and smart tutoring systems for the future of education.',
    color: 'text-amber-400',
    borderColor: 'group-hover:border-amber-500/50',
    glowColor: 'group-hover:shadow-amber-500/10',
    bgGlow: 'bg-amber-500/20'
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: 'Sustainability',
    description: 'Build AI tools for climate action, waste management, and sustainable energy optimization.',
    color: 'text-emerald-400',
    borderColor: 'group-hover:border-emerald-500/50',
    glowColor: 'group-hover:shadow-emerald-500/10',
    bgGlow: 'bg-emerald-500/20'
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: 'Open Innovation',
    description: "Have a unique idea? Push the boundaries of what's possible with Gen-AI in any domain.",
    color: 'text-cyan-400',
    borderColor: 'group-hover:border-cyan-500/50',
    glowColor: 'group-hover:shadow-cyan-500/10',
    bgGlow: 'bg-cyan-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function Tracks() {
  return (
    <section id="tracks" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Animated top border */}
      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Hackathon{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Tracks
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            Choose your arena. We've defined four key areas where Gen-AI can
            make a massive impact.
          </motion.p>
        </div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {tracks.map((track, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`group relative p-6 rounded-2xl bg-slate-900 border border-white/5 transition-all duration-300 cursor-default ${track.borderColor} ${track.glowColor} hover:shadow-2xl`}
            >
              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 rounded-2xl ${track.bgGlow} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10`}
              />

              <motion.div
                className={`mb-6 p-4 rounded-xl bg-slate-950 inline-block border border-white/5 ${track.color}`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.4 }
                }}
              >
                {track.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors duration-300">
                {track.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {track.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}