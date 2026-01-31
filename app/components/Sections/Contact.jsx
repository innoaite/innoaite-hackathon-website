'use client'

import { useState, useEffect } from 'react'

export default function Contact() {
  const [currentTime, setCurrentTime] = useState('--:--')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      }))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="section-padding border-t border-gray-800">
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-blue to-purple-900 flex items-center justify-center text-white font-bold">
                Y
              </div>
              <span className="font-space-grotesk font-semibold text-2xl tracking-widest">
                YUKTHI
              </span>
            </div>
            <p className="text-gray-400">
              A 24‑hour Gen‑AI hackathon where innovation meets execution.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {['About', 'Tracks', 'Experience', 'Register'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4">Contact</h4>
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Email</div>
                <div className="text-gray-400">yukthi@cetpayyanur.ac.in</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Venue</div>
                <div className="text-gray-400">
                  College of Engineering of Technology Payyanur,
                  <br />
                  Department of AI & ML
                </div>
              </div>
            </div>
          </div>

          {/* Coordinators - Removed */}

          {/* Status */}
          <div>
            <h4 className="text-sm uppercase tracking-widest font-medium mb-4">Status</h4>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/20 border border-green-700/50 mb-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-green-400 text-sm">Registrations Open</span>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Local Time (IST)</div>
              <div className="font-space-grotesk text-2xl">{currentTime}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}