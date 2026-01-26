'use client'

import { useEffect } from 'react'

export function useGSAPAnimations() {
  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return

    const gsap = window.gsap
    const ScrollTrigger = window.ScrollTrigger

    // Register ScrollTrigger plugin
    try {
      gsap.registerPlugin(ScrollTrigger)
    } catch (e) {}

    // Hero animations
    const headlineWords = document.querySelectorAll('.headline-word')
    if (headlineWords.length) {
      gsap.set(headlineWords, { yPercent: 120, opacity: 0 })
      gsap.to(headlineWords, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.15,
      })
    }

    // Hero card float animation
    const heroCard = document.querySelector('.hero-card')
    if (heroCard) {
      gsap.to(heroCard, {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      })
    }

    // About cards animation
    const aboutCards = document.querySelectorAll('.about-card')
    if (aboutCards.length) {
      gsap.from(aboutCards, {
        scrollTrigger: {
          trigger: "#about",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        filter: "blur(10px)",
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        clearProps: "filter",
      })
    }

    // Features cards animation
    const featureCards = document.querySelectorAll('.feature-card')
    if (featureCards.length) {
      gsap.from(featureCards, {
        scrollTrigger: {
          trigger: "#features",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
      })
    }

    // CTA animation
    const ctaInner = document.querySelector('.section-cta .cta-inner')
    if (ctaInner) {
      gsap.from(ctaInner, {
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: "power3.out",
      })
    }

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])
}

export function useMouseParallax() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)")
    const isTouch = window.matchMedia("(pointer: coarse)").matches

    if (prefersReduced.matches || isTouch) return

    const bgLayers = Array.from(document.querySelectorAll(".bg-orb"))
    const heroCard = document.querySelector(".hero-card")
    const featureCards = Array.from(document.querySelectorAll(".feature-card"))

    let targetX = 0, targetY = 0
    let currentX = 0, currentY = 0
    let rafId = null

    const handleMouseMove = (event) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const normX = (event.clientX / vw) * 2 - 1
      const normY = (event.clientY / vh) * 2 - 1
      targetX = normX
      targetY = normY

      if (!rafId) {
        rafId = requestAnimationFrame(updateScene)
      }
    }

    const updateScene = () => {
      const lerp = 0.07
      currentX += (targetX - currentX) * lerp
      currentY += (targetY - currentY) * lerp

      // Background layers
      bgLayers.forEach((el, index) => {
        const depth = (index + 1) / (bgLayers.length + 1)
        const maxOffset = 32 * depth
        const x = -currentX * maxOffset
        const y = -currentY * maxOffset
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })

      // Hero card
      if (heroCard) {
        const maxTranslate = 10
        const maxTilt = 4
        const tx = currentX * maxTranslate
        const ty = currentY * maxTranslate
        const rx = currentY * -maxTilt
        const ry = currentX * maxTilt
        heroCard.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`
      }

      // Feature cards
      featureCards.forEach((card) => {
        const fx = currentX * 5
        const fy = currentY * 5
        card.style.transform = `translate3d(${fx}px, ${fy}px, 0)`
      })

      if (Math.abs(currentX - targetX) > 0.001 || Math.abs(currentY - targetY) > 0.001) {
        rafId = requestAnimationFrame(updateScene)
      } else {
        rafId = null
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])
}