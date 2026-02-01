'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '../UI/Button'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Tracks', id: 'tracks' },
    { label: 'Timeline', id: 'timeline' },
    { label: 'Prizes', id: 'prizes' },
    { label: 'Sponsors', id: 'sponsors' },
    { label: 'FAQ', id: 'faq' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Track active section
      const scrollPosition = window.scrollY + 100
      navItems.forEach((item) => {
        const section = document.getElementById(item.id)
        if (section) {
          const top = section.offsetTop
          const height = section.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
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

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <header
      className={`
        fixed left-0 right-0 z-50 flex justify-center pointer-events-none
        transition-all duration-300
        ${scrolled ? 'top-3' : 'top-8'}
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
        `}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/loga.png"
            alt="Innoaite Logo"
            width={190}
            height={65}
            className="h-12 w-auto object-contain"
            priority
          />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs uppercase tracking-widest">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`
                relative px-1 pt-1 pb-2 transition-colors duration-200
                ${activeSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'}
                after:absolute after:left-1/2 after:bottom-0
                after:h-0.5 after:-translate-x-1/2
                after:rounded-full after:bg-gradient-to-r
                after:from-indigo-600 after:to-purple-500
                after:transition-all after:duration-300
                ${activeSection === item.id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Register Button & Hamburger */}
        <div className="flex items-center gap-4">
          <Button
            href="#cta"
            onClick={(e) => scrollToSection(e, 'cta')}
            className="px-5 py-2 text-sm text-slate-900"
          >
            Register
          </Button>

          {/* Hamburger Menu Button Removed */}
        </div>
      </div>

      {/* Mobile Menu Dropdown Removed */}
    </header>
  )
}
