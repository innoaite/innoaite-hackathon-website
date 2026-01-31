'use client'

import { useEffect, useState } from 'react'
import Button from '../UI/Button'

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
      const offset = 90
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition =
        elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }
  }

  return (
    <header
      className={`
        fixed left-0 right-0 z-50 flex justify-center pointer-events-none
        transition-all duration-300
        ${scrolled || isMobile ? 'top-3' : 'top-8'}
      `}
    >
      <div
        className={`
          max-w-6xl mx-auto px-5 py-2.5 flex items-center justify-between gap-6
          rounded-full pointer-events-auto border border-slate-400/40
          transition-all duration-300
          bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-gray-900/95
          shadow-[0_22px_70px_rgba(15,23,42,0.9)]
          ${scrolled ? 'max-w-[95%] py-3 px-6' : ''}
          ${isMobile && !scrolled ? 'max-w-[94%]' : ''}
        `}
      >
        {/* Logo / Hackathon Name */}
        <div className="flex items-center gap-3">
          <span
            className={`
              flex items-center justify-center rounded-lg font-bold
              bg-gradient-to-br from-indigo-600 to-purple-600 text-white
              ${isMobile ? 'w-7 h-7 text-sm' : 'w-8 h-8 text-base'}
            `}
          >
            I
          </span>

          <div className="flex flex-col leading-none">
            <span
              className={`
                font-['Space_Grotesk'] font-semibold tracking-wide text-white
                ${isMobile ? 'text-lg' : 'text-xl'}
              `}
            >
              InnoAIte
            </span>
            <span className="text-[10px] tracking-widest text-gray-400 uppercase">
              Gen-AI Hackathon · YUKTHI ’26
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
          {[
            { label: 'Home', id: 'hero' },
            { label: 'About', id: 'about' },
            { label: 'Tracks', id: 'tracks' },
            { label: 'Timeline', id: 'timeline' },
            { label: 'Prizes', id: 'prizes' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className="
                relative text-gray-400 hover:text-white px-1 pt-1 pb-2
                transition-colors duration-200
                after:absolute after:left-1/2 after:bottom-0
                after:h-0.5 after:w-0 after:-translate-x-1/2
                after:rounded-full after:bg-gradient-to-r
                after:from-indigo-600 after:to-purple-500
                after:transition-all after:duration-300
                hover:after:w-6
              "
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Register Button */}
        <Button
          href="#cta"
          onClick={(e) => scrollToSection(e, 'cta')}
          className={`${isMobile ? 'px-4 py-1.5 text-xs' : 'px-5 py-2 text-sm'} text-slate-900`}
        >
          Register Now
        </Button>
      </div>
    </header>
  )
}
