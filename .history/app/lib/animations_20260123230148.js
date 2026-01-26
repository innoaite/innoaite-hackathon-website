'use client';

export function initSmoothScroll() {
  const clickHandler = (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (!anchor) return;

    const id = anchor.getAttribute('href').slice(1);
    if (!id) return;

    const target = document.getElementById(id);
    if (!target) return;

    event.preventDefault();
    const rect = target.getBoundingClientRect();
    const offset = window.pageYOffset + rect.top - 80;
    window.scrollTo({ top: offset, behavior: 'smooth' });
  };

  document.addEventListener('click', clickHandler);
  
  return () => document.removeEventListener('click', clickHandler);
}

export function initGsapAnimations() {
  const initAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const gsap = window.gsap;
    const ScrollTrigger = window.ScrollTrigger;
    
    try {
      gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
      // Already registered
    }

    // Hero animation
    const headlineWords = document.querySelectorAll('.headline-word');
    gsap.set(headlineWords, { yPercent: 120, opacity: 0 });
    gsap.to(headlineWords, {
      yPercent: 0,
      opacity: 1,
      duration: 0.9,
      ease: 'power3.out',
      stagger: 0.06,
      delay: 0.15,
    });

    // Add other animations as needed
  };

  if (window.gsap && window.ScrollTrigger) {
    initAnimations();
  }

  window.addEventListener('gsap:loaded', initAnimations);
  
  return () => window.removeEventListener('gsap:loaded', initAnimations);
}