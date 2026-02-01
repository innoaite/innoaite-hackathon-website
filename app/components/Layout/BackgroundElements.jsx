'use client'

import { useEffect } from 'react'

export default function BackgroundElements() {
  useEffect(() => {
    // Initialize cursor effect
    const initCursor = () => {
      const dot = document.querySelector('.cursor-dot')
      const glow = document.querySelector('.cursor-glow')
      if (!dot || !glow) return

      const isTouch = window.matchMedia("(pointer: coarse)").matches
      if (isTouch) {
        dot.style.display = "none"
        glow.style.display = "none"
        return
      }

      let mouseX = 0, mouseY = 0
      let currentX = 0, currentY = 0
      let glowX = 0, glowY = 0
      let ticking = false

      const onMouseMove = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        dot.style.opacity = "1"
        glow.style.opacity = "1"

        if (!ticking) {
          ticking = true
          requestAnimationFrame(updatePosition)
        }
      }

      const updatePosition = () => {
        // Dot follows quickly
        currentX += (mouseX - currentX) * 0.2
        currentY += (mouseY - currentY) * 0.2
        dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

        // Glow follows slowly (trailing effect)
        glowX += (mouseX - glowX) * 0.08
        glowY += (mouseY - glowY) * 0.08
        glow.style.transform = `translate3d(${glowX}px, ${glowY}px, 0)`

        if (
          Math.abs(mouseX - currentX) > 0.1 || 
          Math.abs(mouseY - currentY) > 0.1 ||
          Math.abs(mouseX - glowX) > 0.1 || 
          Math.abs(mouseY - glowY) > 0.1
        ) {
          requestAnimationFrame(updatePosition)
        } else {
          ticking = false
        }
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseleave', () => {
        dot.style.opacity = "0"
        glow.style.opacity = "0"
      })

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
      }
    }

    initCursor()
  }, [])

  return (
    <>
      {/* Background ambient gradient */}
      <div className="fixed inset-0 z-[-2] pointer-events-none animate-ambient bg-gradient-radial from-purple-900/30 via-blue-900/20 to-transparent"></div>

      <div className="cursor-dot fixed w-4 h-4 bg-violet-500 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out translate-x-[-50%] translate-y-[-50%] mix-blend-screen shadow-[0_0_10px_rgba(139,92,246,0.8)]" style={{ left: 0, top: 0 }}></div>
      <div 
        className="cursor-glow fixed w-[400px] h-[500px] rounded-full pointer-events-none z-40 transition-opacity duration-300 translate-x-[-50%] translate-y-[-50%]"
        style={{ 
          left: 0, 
          top: 0,
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 20%, rgba(255, 255, 255, 0.15) 40%, transparent 70%)',
          filter: 'blur(30px)',
          mixBlendMode: 'screen'
        }}
      ></div>

      {/* Glowing orbs */}
      <div className="fixed w-64 h-64 top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
      <div className="fixed w-56 h-56 bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
      <div className="fixed w-48 h-48 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
    </>
  )
}