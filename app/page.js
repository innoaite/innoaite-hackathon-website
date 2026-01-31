'use client'

import Navbar from './components/Layout/Navbar'
import BackgroundElements from './components/Layout/BackgroundElements'
import Footer from './components/Layout/Footer'// Re-trigger build
import Hero from './components/Sections/Hero'
import Marquee from './components/Sections/Marquee'
import About from './components/Sections/About'
import Tracks from './components/Sections/Tracks'
import Timeline from './components/Sections/Timeline'
import Prizes from './components/Sections/Prizes'
import FAQ from './components/Sections/FAQ'
import { useGSAPAnimations, useMouseParallax } from '@/lib/gsap-init'

export default function Home() {
  // Initialize animations
  useGSAPAnimations()
  useMouseParallax()

  return (
    <>
      <BackgroundElements />
      <Navbar />
      
      <main>
        <Hero />
        <Marquee />
        <About />
        <Tracks />
        <Timeline />
        <Prizes />
        <FAQ />
      </main>

      <Footer />
    </>
  )
}