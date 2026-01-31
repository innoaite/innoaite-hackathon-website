'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'framer-motion';
import { Zap, Target, Trophy, Users } from 'lucide-react';

// Animated counter component
function AnimatedCounter({ value, suffix = '', prefix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  useEffect(() => {
    return display.on('change', (latest) => {
      setDisplayValue(latest);
    });
  }, [display]);

  return (
    <span ref={ref}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  );
}

const stats = [
  {
    label: 'Participants',
    value: 200,
    suffix: '+'
  },
  {
    label: 'Hours of Hacking',
    value: 24,
    suffix: ''
  },
  {
    label: 'Prize Pool',
    value: 50,
    suffix: 'k+',
    prefix: '₹'
  },
  {
    label: 'Mentors',
    value: 10,
    suffix: '+'
  }
];

const features = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'High-Energy Environment',
    description:
      'Experience 24 hours of pure adrenaline, coding, and creativity with like-minded innovators.',
    color: 'text-yellow-400',
    glow: 'group-hover:shadow-yellow-500/20'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Real World Problems',
    description:
      'Tackle challenges that matter. Build solutions that have the potential to impact the real world.',
    color: 'text-red-400',
    glow: 'group-hover:shadow-red-500/20'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Mentorship',
    description:
      'Get guidance from industry experts and professors to refine your ideas and technical implementation.',
    color: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/20'
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Exciting Rewards',
    description:
      'Win cash prizes, swag, and certificates. Plus, the opportunity to network with top tech talent.',
    color: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/20'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100, damping: 12 }
  }
};

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with text reveal */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            About <span className="text-violet-400">YUKTHI</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            YUKTHI 2026 is a premier 24-hour Gen-AI hackathon organized by the
            Department of Artificial Intelligence & Machine Learning. We bring
            together the brightest minds to build the future.
          </motion.p>
        </div>

        {/* Stats Grid with counting animation */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className="p-6 rounded-2xl bg-slate-900/40 border border-white/5 text-center backdrop-blur-sm hover:border-violet-500/30 hover:bg-slate-800/50 transition-colors cursor-default"
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid with stagger */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: 'spring', stiffness: 300 }
              }}
              className={`group p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-white/10 hover:border-violet-500/30 transition-all duration-300 hover:shadow-2xl ${feature.glow}`}
            >
              <motion.div
                className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 ${feature.color}`}
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.4 }
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}