'use client'

import Navbar from './components/Layout/Navbar'
import BackgroundElements from './components/Layout/BackgroundElements'
import Footer from './components/Layout/Footer'
import Hero from './components/Sections/Hero'
import Marquee from './components/Sections/Marquee'
import About from './components/Sections/About'
import Tracks from './components/Sections/Tracks'
import Prizes from './components/Sections/Prizes'
import CTA from './components/Sections/CTA'
import Sponsors from "./components/Sections/Sponsors";
import FAQ from './components/Sections/FAQ'
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
      
      <main className="bg-slate-950 text-white overflow-x-hidden">

        <Hero />
        <Marquee />
        <About />
        <Tracks />
        <Prizes />
        <CTA />
        <Sponsors />
        <FAQ />
        <Contact />
      </main>

      <Footer />
    </>
  )
}