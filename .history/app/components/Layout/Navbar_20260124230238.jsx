'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', checkMobile)
    checkMobile()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (!element) return

    const offset = 80
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset

    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <header
      className={`
        fixed left-0 right-0 z-50 flex justify-center pointer-events-none
        transition-all duration-300
        ${scrolled || isMobile ? 'top-2.5' : 'top-8'}
      `}
    >
      <div
        className={`
          pointer-events-auto flex items-center justify-between gap-6
          rounded-full border border-slate-400/40
          bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-gray-900/95
          shadow-[0_20px_60px_rgba(15,23,42,0.85)]
          transition-all duration-300
          ${scrolled ? 'max-w-[95%] px-5 py-3' : 'max-w-6xl px-5 py-2.5'}
          ${isMobile && !scrolled ? 'max-w-[94%]' : ''}
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span
            className={`
              flex items-center justify-center rounded-lg font-bold
              bg-gradient-to-br from-indigo-600 to-gray-900 text-gray-200
              ${isMobile ? 'w-6 h-6 text-sm' : 'w-7 h-7 text-lg'}
            `}
          >
            Y
          </span>
          <span
            className={`
              font-['Space_Grotesk'] font-semibold tracking-wider text-white
              ${isMobile ? 'text-xl' : 'text-2xl'}
            `}
          >
            YUKTHI
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
          {[
            ['Home', 'hero'],
            ['About', 'about'],
            ['Tracks', 'features'],
            ['Register', 'cta'],
          ].map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => scrollToSection(e, id)}
              className="
                relative px-1 pt-1 pb-2.5 text-gray-400 hover:text-white
                transition-colors duration-200
                after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0
                after:-translate-x-1/2 after:rounded-full
                after:bg-gradient-to-r after:from-indigo-600 after:to-purple-500
                after:shadow-[0_0_14px_rgba(79,70,229,0.8)]
                after:transition-all after:duration-300 hover:after:w-6
              "
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Register CTA (Improved UI) */}
        <a
          href="#cta"
          onClick={(e) => scrollToSection(e, 'cta')}
          className={`
            relative inline-flex items-center justify-center rounded-full
            font-semibold tracking-wide
            transition-all duration-200
            hover:-translate-y-0.5 active:translate-y-0
            text-white
            bg-gradient-to-r from-indigo-600 to-purple-600
            ring-1 ring-indigo-400/50
            hover:ring-indigo-400/80
            shadow-[0_0_24px_rgba(99,102,241,0.45)]
            ${isMobile ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'}
          `}
        >
          Register
        </a>
      </div>
    </header>
  )
}
