'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Medal, Gift, Sparkles } from 'lucide-react';
import Button from '../UI/Button';

const prizes = [
  {
    icon: <Trophy className="w-16 h-16" />,
    rank: '1st Place',
    amount: '₹25,000',
    perks: ['Certificate', 'Mentorship'],
    color: 'text-yellow-400',
    gradient: 'from-yellow-400/20 to-yellow-500/5',
    border: 'border-yellow-400/50 hover:border-yellow-400/70',
    glow: 'hover:shadow-yellow-400/30',
    scale: true,
    order: 'md:order-2',
    delay: 0
  },
  {
    icon: <Medal className="w-12 h-12" />,
    rank: '2nd Place',
    amount: '₹15,000',
    perks: ['Certificate', 'Mentorship'],
    color: 'text-slate-300',
    gradient: 'from-slate-300/20 to-slate-400/5',
    border: 'border-slate-400/30 hover:border-slate-300/50',
    glow: 'hover:shadow-slate-400/20',
    order: 'md:order-1',
    delay: 0.2
  },
  {
    icon: <Medal className="w-12 h-12" />,
    rank: '3rd Place',
    amount: '₹10,000',
    perks: ['Certificate', 'Mentorship'],
    color: 'text-amber-600',
    gradient: 'from-amber-600/20 to-amber-700/5',
    border: 'border-amber-600/30 hover:border-amber-500/50',
    glow: 'hover:shadow-amber-500/20',
    order: 'md:order-3',
    delay: 0.4
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

export default function Prizes() {
  return (
    <section id="prizes" className="py-24 bg-slate-900/30 relative overflow-hidden">
      {/* Animated background glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-violet-600/10 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Prize <span className="text-violet-400">Pool</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="text-slate-400"
          >
            Compete for cash prizes, recognition, and opportunities.
          </motion.p>
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-end justify-center gap-6 md:gap-8 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -12,
                transition: { type: 'spring', stiffness: 300, damping: 20 }
              }}
              className={`relative p-8 rounded-3xl border backdrop-blur-sm w-full max-w-sm text-center transition-all duration-300 ${prize.border} ${prize.glow} bg-gradient-to-b ${prize.gradient} ${prize.order} ${prize.scale ? 'md:scale-110 z-10 shadow-[0_0_60px_-10px_rgba(234,179,8,0.3)]' : ''} hover:shadow-2xl`}
            >
              {/* Winner sparkle effect */}
              {prize.scale && (
                <motion.div
                  className="absolute -top-3 -right-3"
                  animate={{
                    rotate: [0, 15, -15, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }}
                >
                  <Sparkles className="w-8 h-8 text-yellow-400" />
                </motion.div>
              )}

              <motion.div
                className={`flex justify-center mb-6 ${prize.color}`}
                whileHover={{
                  scale: 1.15,
                  rotate: [0, -10, 10, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {prize.icon}
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">{prize.rank}</h3>
              <motion.div
                className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 mb-6"
                initial={{ scale: 1 }}
                whileInView={{ scale: [1, 1.05, 1] }}
                viewport={{ once: true }}
                transition={{ delay: prize.delay + 0.3, duration: 0.4 }}
              >
                {prize.amount}
              </motion.div>
              <ul className="space-y-3 text-slate-300 text-sm">
                {prize.perks.map((perk, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center justify-center gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: prize.delay + 0.4 + i * 0.1 }}
                  >
                    <Gift className="w-4 h-4 text-violet-400" />
                    {perk}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Register CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <Button
            href="#cta"
            className="px-10 py-4 text-lg md:text-xl font-bold tracking-wide shadow-[0_20px_50px_rgba(79,70,229,0.5)] hover:shadow-[0_20px_60px_rgba(79,70,229,0.6)]"
            aria-label="Register for the hackathon"
          >
            Register Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
