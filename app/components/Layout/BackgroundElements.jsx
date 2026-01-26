'use client'

import { useEffect } from 'react'

export default function BackgroundElements() {
  useEffect(() => {
    // Initialize cursor effect
    const initCursor = () => {
      const dot = document.querySelector('.cursor-dot')
      if (!dot) return

      const isTouch = window.matchMedia("(pointer: coarse)").matches
      if (isTouch) {
        dot.style.display = "none"
        return
      }

      let mouseX = 0, mouseY = 0
      let currentX = 0, currentY = 0
      let ticking = false

      const onMouseMove = (e) => {
        mouseX = e.clientX
        mouseY = e.clientY
        dot.style.opacity = "1"

        if (!ticking) {
          ticking = true
          requestAnimationFrame(updatePosition)
        }
      }

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.16
        currentY += (mouseY - currentY) * 0.16
        dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`

        if (Math.abs(mouseX - currentX) > 0.1 || Math.abs(mouseY - currentY) > 0.1) {
          requestAnimationFrame(updatePosition)
        } else {
          ticking = false
        }
      }

      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseleave', () => {
        dot.style.opacity = "0"
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

      {/* Cursor dot */}
      <div className="cursor-dot fixed w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gray-400/60 shadow-[0_0_30px_rgba(79,70,229,0.8)] mix-blend-screen opacity-0 pointer-events-none z-50"></div>

      {/* Glowing orbs */}
      <div className="fixed w-64 h-64 top-0 left-1/4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/30 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
      <div className="fixed w-56 h-56 bottom-0 right-1/4 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-br from-blue-500/30 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
      <div className="fixed w-48 h-48 top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-purple-500/20 to-transparent blur-3xl opacity-50 pointer-events-none z-[-1]"></div>
    </>
  )
}