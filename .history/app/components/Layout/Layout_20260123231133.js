'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import BackgroundEffects from './BackgroundElements';
import CursorDot from './CursorDot';
import Navbar from './Navbar';
import { initSmoothScroll, initGsapAnimations, initMouseParallax } from '@/lib/animations';

export default function Layout({ children }) {
  useEffect(() => {
    // Initialize all animations
    const cleanupSmoothScroll = initSmoothScroll();
    const cleanupGsap = initGsapAnimations();
    const cleanupParallax = initMouseParallax();

    return () => {
      cleanupSmoothScroll();
      cleanupGsap();
      cleanupParallax();
    };
  }, []);

  return (
    <>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="lazyOnload"
        onLoad={() => window.dispatchEvent(new Event('gsap:loaded'))}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="lazyOnload"
        onLoad={() => window.dispatchEvent(new Event('gsap:loaded'))}
      />

      <BackgroundEffects />
      <CursorDot />
      <Navbar />
      {children}
    </>
  );
}