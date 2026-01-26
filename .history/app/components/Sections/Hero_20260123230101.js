'use client';

import { useState, useEffect } from 'react';
import CountdownTimer from '../UI/CountdownTimer';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="hero" className="min-h-screen pt-32 pb-20 flex items-center px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column */}
          <div className="text-center lg:text-left">
            <p className="text-xs uppercase tracking-widest text-text-muted mb-4">
              Gen‑AI Hackathon
            </p>
            
            <h1 className="font-space-grotesk text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
              <span className="block overflow-hidden">
                <span className="headline-word inline-block">YUKTHI</span>
                <span className="headline-word inline-block gradient-text">2026</span>
              </span>
              <span className="block overflow-hidden">
                <span className="headline-word inline-block">GEN‑AI</span>
                <span className="headline-word inline-block">HACKATHON</span>
              </span>
            </h1>

            <p className="text-text-muted text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0">
              A 24‑hour sprint where builders, designers, and innovators ship
              AI‑native products that push the edge of what's possible.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
              <a href="#cta" className="btn-primary">
                Apply to Participate
              </a>
              <a href="#about" className="btn-ghost">
                View Event Details
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 text-sm text-text-muted">
              <span>January 27 – 28, 2026</span>
              <span className="text-gray-600">•</span>
              <span>On‑site · Payyanur</span>
            </div>
          </div>

          {/* Right Column - Countdown Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="hero-card w-full max-w-md bg-gradient-to-b from-gray-900 to-gray-950 rounded-2xl border border-gray-700/50 p-6 shadow-2xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="pill-soft">24‑Hour Build</span>
                <span className="pill-outline">Gen‑AI Native</span>
              </div>
              
              <h3 className="text-lg font-semibold mb-4">Countdown to Kick‑off</h3>
              
              {mounted && <CountdownTimer targetDate="2026-01-27T09:00:00" />}
              
              <p className="text-sm text-text-muted mt-4">
                Teams of 2–4 • Limited slots • Beginner‑friendly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}