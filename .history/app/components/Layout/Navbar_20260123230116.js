'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'features', 'cta'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'features', label: 'Tracks' },
    { id: 'cta', label: 'Register' },
  ];

  return (
    <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center pointer-events-none px-4">
      <div className="max-w-6xl w-full mx-auto">
        <div className="backdrop-blur-xl bg-gray-900/95 border border-gray-700/50 rounded-full px-6 py-3 flex items-center justify-between shadow-2xl pointer-events-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent-blue to-gray-900 flex items-center justify-center font-bold">
              Y
            </div>
            <span className="font-space-grotesk font-semibold tracking-widest">YUKTHI</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-xs uppercase tracking-wider transition-colors ${
                  activeSection === item.id
                    ? 'text-text-primary relative after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-6 after:h-0.5 after:bg-gradient-to-r after:from-accent-blue after:to-accent-violet after:rounded-full'
                    : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Register Button */}
          <a
            href="#cta"
            className="btn-primary text-sm"
          >
            Register
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-text-muted">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}