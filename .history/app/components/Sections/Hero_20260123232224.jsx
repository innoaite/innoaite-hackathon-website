'use client'

import { useEffect } from 'react'
import CountdownTimer from '../UI/CountdownTimer'

export default function Hero() {
  useEffect(() => {
    // GSAP animations will be initialized in lib/gsap-init.js
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16 px-4">
      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="text-center lg:text-left">
          <div className="text-sm uppercase tracking-widest text-gray-400 mb-4">
            Gen‑AI Hackathon
          </div>
          
          <h1 className="hero-headline mb-6">
            <span className="block">
              <span className="gradient-text">YUKTHI</span>
              <span className="text-white"> 2026</span>
            </span>
            <span className="block text-white">
              Where Innovation
            </span>
            <span className="block gradient-text">
              Meets Execution
            </span>
          </h1>

          <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
            A 24‑hour sprint where builders, designers, and innovators ship AI‑native 
            products that push the edge of what's possible.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a
              href="#cta"
              className="px-8 py-3 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-white font-medium hover:shadow-[0_0_50px_rgba(79,70,229,0.8)] transition-all duration-300"
            >
              Apply to Participate
            </a>
            <a
              href="#about"
              className="px-8 py-3 rounded-full border border-gray-700 text-white font-medium hover:border-accent-blue transition-all duration-300"
            >
              View Event Details
            </a>
          </div>

          <div className="text-sm text-gray-400">
            <span>January 27 – 28, 2026</span>
            <span className="mx-2">•</span>
            <span>On‑site · Payyanur</span>
          </div>
        </div>

        <div className="glass-card p-6 lg:p-8 rounded-2xl backdrop-blur-xl">
          <div className="flex gap-3 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-accent-blue/20 text-white text-xs font-medium">
              24‑Hour Build
            </span>
            <span className="px-4 py-1.5 rounded-full border border-gray-700 text-gray-400 text-xs font-medium">
              Gen‑AI Native
            </span>
          </div>

          <h3 className="text-xl font-semibold mb-6">Countdown to Kick‑off</h3>
          
          <CountdownTimer />

          <p className="text-sm text-gray-400 mt-6">
            Teams of 2–4 • Limited slots • Beginner‑friendly
          </p>
        </div>
      </div>
    </section>
  )
}