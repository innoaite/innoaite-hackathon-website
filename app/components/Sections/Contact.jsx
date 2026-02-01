'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Contact() {
  const [currentTime, setCurrentTime] = useState('--:--')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString('en-IN', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata'
        })
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="contact"
      className="relative py-12 px-4 sm:px-6 md:px-10 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="text-indigo-400 uppercase tracking-widest text-xs sm:text-sm mb-2">
            CONTACT & SUPPORT
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto">
            Have questions about the InnoAIte 24-hour Gen-AI Hackathon? We’re here to help.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="mb-4">
              <Image
                src="/assets/logo_innoaite.png"
                alt="InnoAIte Logo"
                width={140}
                height={40}
                className="object-contain"
                priority
              />
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              InnoAIte is a 24-hour national level Gen-AI hackathon designed to bring innovators together to solve real-world challenges using artificial intelligence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center lg:text-left">
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              {['About', 'Tracks', 'Prizes', 'Sponsors', 'FAQ'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center lg:text-left">
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4 text-white">
              Contact Info
            </h4>

            <div className="space-y-4 text-sm text-slate-400">
              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Email
                </div>
                <a
                  href="mailto:innoaite@gmail.com"
                  className="hover:text-indigo-400 transition-colors"
                >
                  innoaite@gmail.com
                </a>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Venue
                </div>
                <div>
                  College of Engineering Payyanur <br />
                  Department of AI & ML
                </div>
              </div>
            </div>
          </div>

          {/* Coordinators & Status */}
          <div className="space-y-6 text-center lg:text-left">

            {/* Coordinators */}
            <div>
              <h4 className="text-sm uppercase tracking-widest font-medium mb-4 text-white">
                Coordinators
              </h4>

              <div className="space-y-3 text-sm text-slate-400">
                <div>
                  <span className="text-slate-500">Staff Coordinator</span><br />
                  ANITHA M P <br />
                  <a
                    href="tel:+919496309911"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    +91 9496309911
                  </a>
                </div>

                <div>
                  <span className="text-slate-500">Student Coordinator</span><br />
                  MUHAMMED JURAIJ<br />
                  <a
                    href="tel:+917306883114"
                    className="hover:text-indigo-400 transition-colors"
                  >
                    +91 7306883114
                  </a>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="flex flex-col items-center lg:items-start">

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/30 mb-3">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                <span className="text-indigo-300 text-sm">
                  Registrations Open
                </span>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wider text-slate-500 mb-1">
                  Local Time (IST)
                </div>
                <div className="text-xl sm:text-2xl font-semibold text-white">
                  {currentTime}
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
