'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 900)
    }
    
    window.addEventListener('scroll', handleScroll)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const scrollToSection = (e, id) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header className={`
      fixed left-0 right-0 z-50 flex justify-center pointer-events-none transition-all duration-300
      ${scrolled || isMobile ? 'top-2.5' : 'top-8'}
    `}>
      <div className={`
        max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-6 rounded-full 
        pointer-events-auto transition-all duration-300 border border-slate-400/50
        ${scrolled ? 'max-w-[95%] p-4' : ''}
        ${isMobile && !scrolled ? 'max-w-[94%]' : ''}
        bg-gradient-to-br from-slate-900/98 via-slate-900/96 to-gray-900/98
        shadow-[0_22px_70px_rgba(15,23,42,0.9)]
        ${scrolled ? 'bg-gradient-to-br from-slate-900/98 via-slate-900/96 to-gray-900/98' : ''}
      `}>
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <span className={`
            flex items-center justify-center rounded-lg
            bg-gradient-to-br from-indigo-600 to-gray-900 text-gray-200 font-bold
            ${isMobile ? 'w-6 h-6 text-sm' : 'w-7 h-7 text-lg'}
          `}>
            Y
          </span>
          <span className={`
            font-['Space_Grotesk'] font-semibold tracking-wider text-white
            ${isMobile ? 'text-xl' : 'text-2xl'}
          `}>
            YUKTHI
          </span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="relative text-gray-400 hover:text-white px-1 pt-1 pb-2.5 rounded-full transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-indigo-600 after:to-purple-500 after:shadow-[0_0_16px_rgba(79,70,229,0.85)] after:transition-all after:duration-300 hover:after:w-6"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="relative text-gray-400 hover:text-white px-1 pt-1 pb-2.5 rounded-full transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-indigo-600 after:to-purple-500 after:shadow-[0_0_16px_rgba(79,70,229,0.85)] after:transition-all after:duration-300 hover:after:w-6"
          >
            About
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="relative text-gray-400 hover:text-white px-1 pt-1 pb-2.5 rounded-full transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-indigo-600 after:to-purple-500 after:shadow-[0_0_16px_rgba(79,70,229,0.85)] after:transition-all after:duration-300 hover:after:w-6"
          >
            Tracks
          </a>
          <a 
            href="#cta" 
            onClick={(e) => scrollToSection(e, 'cta')}
            className="relative text-gray-400 hover:text-white px-1 pt-1 pb-2.5 rounded-full transition-colors duration-200 after:absolute after:left-1/2 after:bottom-0 after:h-0.5 after:w-0 after:-translate-x-1/2 after:rounded-full after:bg-gradient-to-r after:from-indigo-600 after:to-purple-500 after:shadow-[0_0_16px_rgba(79,70,229,0.85)] after:transition-all after:duration-300 hover:after:w-6"
          >
            Register
          </a>
        </nav>

        {/* Register Button */}
        <a
          href="#cta"
          onClick={(e) => scrollToSection(e, 'cta')}
          className={`
            inline-flex items-center justify-center rounded-full font-medium 
            transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0
            bg-gradient-to-r from-indigo-600 to-purple-500 text-gray-900
            border border-transparent shadow-lg hover:shadow-xl active:shadow-md
            ${isMobile ? 'px-3.5 py-1.5 text-xs' : 'px-4.5 py-2 text-sm'}
          `}
          style={{
            background: 'radial-gradient(circle at 10% 0, #ffffff, #e0e7ff 40%) padding-box, linear-gradient(135deg, #4f46e5, #a855f7) border-box',
            border: '1px solid transparent',
            boxShadow: '0 16px 50px rgba(79, 70, 229, 0.7)'
          }}
        >
          Register
        </a>
      </div>
    </header>
  )
}