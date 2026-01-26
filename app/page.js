'use client'

import Navbar from './components/Layout/Navbar'
import BackgroundElements from './components/Layout/BackgroundElements'
import Footer from './components/Layout/Footer'
import Banner from './components/Sections/Banner'
import Hero from './components/Sections/Hero'
import Marquee from './components/Sections/Marquee'
import About from './components/Sections/About'
import Features from './components/Sections/Features'
import CTA from './components/Sections/CTA'
import Contact from './components/Sections/Contact'
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
        <Banner />
        <Hero />
        <Marquee />
        <About />
        <Features />
        <CTA />
        <Contact />
      </main>

      <Footer />
    </>
  )
}