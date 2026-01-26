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
    <header className={`top-nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        {/* Logo */}
        <div className="logo">
          <span className="logo-mark">Y</span>
          <span className="logo-text">YUKTHI</span>
        </div>

        {/* Navigation Links - Hidden on mobile */}
        <nav className="nav-links hidden md:flex">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="nav-link"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            className="nav-link"
          >
            About
          </a>
          <a 
            href="#features" 
            onClick={(e) => scrollToSection(e, 'features')}
            className="nav-link"
          >
            Tracks
          </a>
          <a 
            href="#cta" 
            onClick={(e) => scrollToSection(e, 'cta')}
            className="nav-link"
          >
            Register
          </a>
        </nav>

        {/* Register Button */}
        <a
          href="#cta"
          onClick={(e) => scrollToSection(e, 'cta')}
          className="btn primary nav-btn"
        >
          Register
        </a>
      </div>

      {/* Tailwind CSS styles */}
      <style jsx>{`
        /* Main container */
        .top-nav {
          position: fixed;
          inset: ${isMobile ? '10px 0 auto 0' : '32px 0 auto 0'};
          z-index: 50;
          display: flex;
          justify-content: center;
          pointer-events: none;
          transition: all 0.3s ease;
        }

        /* Scrolled state */
        .top-nav.scrolled {
          inset: 10px 0 auto 0;
        }

        .nav-inner {
          max-width: 1040px;
          margin: 0 auto;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          border-radius: 9999px;
          pointer-events: auto;
          transition: all 0.3s ease;
          
          /* Background gradient */
          background: radial-gradient(
            circle at 0% 0%,
            rgba(15, 23, 42, 0.98) 0,
            rgba(15, 23, 42, 0.96) 40%,
            rgba(2, 6, 23, 0.98) 100%
          );
          
          /* Border */
          border: 1px solid rgba(148, 163, 184, 0.5);
          
          /* Shadow */
          box-shadow: 0 22px 70px rgba(15, 23, 42, 0.9);
        }

        /* Scrolled state for nav-inner */
        .top-nav.scrolled .nav-inner {
          max-width: 95%;
          padding: 8px 16px;
          border-radius: 9999px;
          background: radial-gradient(
            circle at 0% 0%,
            rgba(17, 16, 47, 0.98) 0,
            rgba(17, 16, 47, 0.96) 40%,
            rgba(13, 41, 66, 0.98) 100%
          );
        }

        /* Logo styles */
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .logo-mark {
          width: ${isMobile ? '24px' : '28px'};
          height: ${isMobile ? '24px' : '28px'};
          border-radius: 10px;
          background: radial-gradient(circle at 30% 0, #4f46e5, #020617 70%);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #e5e7eb;
          font-weight: 700;
          font-size: ${isMobile ? '15px' : '18px'};
        }

        .logo-text {
          font-family: 'Space Grotesk', system-ui, sans-serif;
          font-weight: 600;
          letter-spacing: 0.18em;
          font-size: ${isMobile ? '20px' : '25px'};
          color: #ffffff;
        }

        /* Navigation links */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 24px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.16em;
        }

        .nav-link {
          position: relative;
          color: #9ca3af;
          padding: 4px 2px 10px;
          border-radius: 9999px;
          transition: color 0.2s ease;
        }

        .nav-link:hover {
          color: #ffffff;
        }

        /* Active link indicator */
        .nav-link::after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          border-radius: 9999px;
          background-image: linear-gradient(90deg, #4f46e5, #a855f7);
          box-shadow: 0 0 16px rgba(79, 70, 229, 0.85);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 26px;
        }

        /* Buttons */
        .btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 500;
          border: 1px solid transparent;
          cursor: pointer;
          transition: all 0.15s ease;
        }

        .btn.primary {
          background: 
            radial-gradient(circle at 10% 0, #ffffff, #e0e7ff 40%) padding-box,
            linear-gradient(135deg, #4f46e5, #a855f7) border-box;
          color: #020617;
          border: 1px solid transparent;
          box-shadow: 0 16px 50px rgba(79, 70, 229, 0.7);
          font-size: ${isMobile ? '12px' : '14px'};
          padding: ${isMobile ? '6px 14px' : '8px 18px'};
        }

        .btn.primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 26px 80px rgba(79, 70, 229, 0.9);
        }

        .btn.primary:active {
          transform: translateY(0);
          box-shadow: 0 18px 46px rgba(79, 70, 229, 0.75);
        }

        /* Mobile responsiveness */
        @media (max-width: 900px) {
          .nav-links {
            display: none;
          }
          
          .nav-inner {
            max-width: 94%;
          }
        }

        @media (max-width: 640px) {
          .top-nav {
            inset: 10px 0 auto 0;
          }
          
          .nav-inner {
            padding: 8px 16px;
            max-width: 94%;
          }
        }
      `}</style>
    </header>
  )
}