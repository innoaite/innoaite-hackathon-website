'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
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
    <nav className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'w-[95%] max-w-4xl' : 'w-[90%] max-w-5xl'
    }`}>
      <div className={`glass-card px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl' : 'backdrop-blur-lg'
      }`}>
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-purple-900 flex items-center justify-center text-white font-bold">
            Y
          </div>
          <span className="font-space-grotesk font-semibold text-xl tracking-widest">
            YUKTHI
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm uppercase tracking-wider">
          {['hero', 'about', 'features', 'cta'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={(e) => scrollToSection(e, item)}
              className="text-gray-400 hover:text-white transition-colors relative group"
            >
              {item === 'hero' ? 'Home' : item}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-violet group-hover:w-6 transition-all duration-300"></span>
            </a>
          ))}
        </div>

        <a
          href="#cta"
          onClick={(e) => scrollToSection(e, 'cta')}
          className="px-6 py-2 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-white text-sm font-medium hover:shadow-[0_0_40px_rgba(79,70,229,0.8)] transition-all duration-300"
        >
          Register
        </a>
      </div>
    </nav>
  )
}