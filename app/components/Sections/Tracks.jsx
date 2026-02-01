'use client';

import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Car, Building2, Hospital, GraduationCap } from 'lucide-react'

export default function Tracks() {
  const tracks = useMemo(
    () => [
      {
        id: 'P01',
        icon: <Car className="w-8 h-8" />,
        title: 'Smart Traffic Management',
        subtitle: 'Kochi Congestion Reduction',
        description:
          'Build an AI-powered real-time traffic monitoring system that analyzes CCTV feeds, detects congestion, optimizes signal timings dynamically, and prioritizes emergency vehicles at major junctions.',
        tags: ['Computer Vision', 'Real-time Analytics', 'IoT'],
        color: 'text-emerald-400',
        borderColor: 'group-hover:border-emerald-500/50',
        glowColor: 'group-hover:shadow-emerald-500/10',
        bgGlow: 'bg-emerald-500/20',
        tagBg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
      },
      {
        id: 'P02',
        icon: <Building2 className="w-8 h-8" />,
        title: 'Infrastructure Intelligence',
        subtitle: 'Residential Safety & Quality',
        description:
          'Create an AI inspection system that classifies building defects from images, generates risk scores per property/room, and produces human-readable safety summaries for home buyers.',
        tags: ['Image Classification', 'Risk Assessment', 'NLP'],
        color: 'text-amber-400',
        borderColor: 'group-hover:border-amber-500/50',
        glowColor: 'group-hover:shadow-amber-500/10',
        bgGlow: 'bg-amber-500/20',
        tagBg: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
      },
      {
        id: 'P03',
        icon: <Hospital className="w-8 h-8" />,
        title: 'Hospital Discharge Automation',
        subtitle: 'Patient Flow Optimization',
        description:
          'Develop an AI system that coordinates discharge workflows across departments, automates billing & documentation, predicts bottlenecks, and provides real-time status updates to reduce patient wait times.',
        tags: ['Process Automation', 'Predictive AI', 'Healthcare'],
        color: 'text-rose-400',
        borderColor: 'group-hover:border-rose-500/50',
        glowColor: 'group-hover:shadow-rose-500/10',
        bgGlow: 'bg-rose-500/20',
        tagBg: 'bg-rose-500/10 text-rose-300 border-rose-500/20',
      },
      {
        id: 'P04',
        icon: <GraduationCap className="w-8 h-8" />,
        title: 'Student Readiness Assessment',
        subtitle: 'Stage-Aware Career Guidance',
        description:
          "Build an AI assessment tool that evaluates academic readiness, identifies genuine interests, and recommends realistic exam pathways based on the student's current stage.",
        tags: ['EdTech', 'Personalization', 'Assessment AI'],
        color: 'text-violet-400',
        borderColor: 'group-hover:border-violet-500/50',
        glowColor: 'group-hover:shadow-violet-500/10',
        bgGlow: 'bg-violet-500/20',
        tagBg: 'bg-violet-500/10 text-violet-300 border-violet-500/20',
      },
    ],
    []
  )

  return (
    <section id="tracks" className="py-24 bg-slate-950 relative overflow-hidden">
      <motion.div
        className="absolute top-0 left-0 w-full h-px"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      >
        <div className="w-full h-full bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 mb-6"
          >
            <motion.span
              className="w-2 h-2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(167,139,250,0.5)]"
              animate={{ opacity: [1, 0.5, 1], scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-medium">4 Problem Statements</span>
          </motion.div>

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

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {tracks.map(track => (
            <motion.div
              key={track.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              transition={{ type: 'spring', stiffness: 120, damping: 16 }}
              className={`group relative p-6 lg:p-8 rounded-2xl bg-slate-900/80 border border-white/5 ${track.borderColor} ${track.glowColor}`}
            >
              <div className={`absolute inset-0 rounded-2xl ${track.bgGlow} opacity-0 group-hover:opacity-100 blur-xl`} />

              <motion.div
                className={`absolute top-6 right-6 font-mono text-2xl font-bold ${track.color}`}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                style={{ filter: 'brightness(1.2)' }}
              >
                {track.id}
              </motion.div>

              <div className={`mb-5 p-4 rounded-xl bg-slate-950/80 inline-flex ${track.color}`}>
                {track.icon}
              </div>

              <h3 className="text-xl font-bold text-white">{track.title}</h3>
              <p className={`text-sm ${track.color}`}>{track.subtitle}</p>

              <p className="text-slate-400 text-sm mt-3">{track.description}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {track.tags.map(tag => (
                  <span key={tag} className={`px-3 py-1 text-xs rounded-full border ${track.tagBg}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
