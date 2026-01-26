"use client";

import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Page() {
  useEffect(() => {
    // --------------------
    // Countdown Timer
    // --------------------
    const targetDate = new Date("2026-01-27T09:00:00");

    function updateCountdown() {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();

      const daysEl = document.getElementById("days");
      const hoursEl = document.getElementById("hours");
      const minutesEl = document.getElementById("minutes");
      const secondsEl = document.getElementById("seconds");

      if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

      if (diff <= 0) {
        daysEl.textContent = "00";
        hoursEl.textContent = "00";
        minutesEl.textContent = "00";
        secondsEl.textContent = "00";
        return;
      }

      const secondsTotal = Math.floor(diff / 1000);
      const days = Math.floor(secondsTotal / (60 * 60 * 24));
      const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
      const seconds = secondsTotal % 60;

      daysEl.textContent = String(days).padStart(2, "0");
      hoursEl.textContent = String(hours).padStart(2, "0");
      minutesEl.textContent = String(minutes).padStart(2, "0");
      secondsEl.textContent = String(seconds).padStart(2, "0");
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    // --------------------
    // Smooth scroll for nav links
    // --------------------
    function clickHandler(event) {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const id = anchor.getAttribute("href").slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      const rect = target.getBoundingClientRect();
      const offset = window.pageYOffset + rect.top - 80;
      window.scrollTo({ top: offset, behavior: "smooth" });
    }

    document.addEventListener("click", clickHandler);

    // --------------------
    // GSAP Animations will run when GSAP is loaded (script tags included below)
    // We attempt to register and run animations if available.
    // --------------------
    function initGsapAnimations() {
      if (!window.gsap || !window.ScrollTrigger) return;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      try {
        gsap.registerPlugin(ScrollTrigger);
      } catch (e) {
        // already registered or not required
      }

      // HERO headline reveal (words slide up with stagger)
      const headlineWords = document.querySelectorAll(".headline-word");
      gsap.set(headlineWords, { yPercent: 120, opacity: 0 });

      gsap.to(headlineWords, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.06,
        delay: 0.15,
      });

      // Hero card parallax float
      gsap.to(".hero-card", {
        y: -10,
        duration: 2.8,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
      });

      // ABOUT cards: slide up + blur -> sharp on scroll
      gsap.from(".about-card", {
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
      });

      // FEATURES cards: staggered entry
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: "#features",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.08,
      });

      // CTA: centered fade + scale
      gsap.from(".section-cta .cta-inner", {
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: "power3.out",
      });

      // Footer: subtle fade-in when reaching bottom
      gsap.from(".footer", {
        scrollTrigger: {
          trigger: ".footer",
          start: "top 95%",
        },
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });
    }

    // if GSAP already loaded
    if (window.gsap && window.ScrollTrigger) initGsapAnimations();

    // Listen for the script load event (added below via next/script)
    window.addEventListener("gsap:loaded", initGsapAnimations);

    // --------------------
    // Cursor micro‑interaction (desktop)
    // --------------------
    (function initCursor() {
      const dot = document.querySelector(".cursor-dot");
      if (!dot) return;

      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let ticking = false;

      const isTouch = window.matchMedia("(pointer: coarse)").matches;
      if (isTouch) {
        dot.style.display = "none";
        return;
      }

      // show cursor when moving in the viewport
      function onMouseMove(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        dot.style.opacity = "1";

        if (!ticking) {
          ticking = true;
          requestAnimationFrame(updatePosition);
        }
      }

      window.addEventListener("mousemove", onMouseMove);

      window.addEventListener("mouseleave", () => {
        dot.style.opacity = "0";
      });

      function updatePosition() {
        // simple lerp for smooth follow
        currentX += (mouseX - currentX) * 0.16;
        currentY += (mouseY - currentY) * 0.16;
        dot.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

        if (
          Math.abs(mouseX - currentX) > 0.1 ||
          Math.abs(mouseY - currentY) > 0.1
        ) {
          requestAnimationFrame(updatePosition);
        } else {
          ticking = false;
        }
      }
    })();

    // --------------------
    // Mouse‑driven parallax & tilt
    // --------------------
    (function initMouseParallax() {
      const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      const isTouch = window.matchMedia("(pointer: coarse)").matches;

      if (prefersReduced.matches || isTouch) {
        return;
      }

      const bgLayers = Array.from(document.querySelectorAll(".bg-orb"));
      const heroCard = document.querySelector(".hero-card");
      const featureCards = Array.from(document.querySelectorAll(".feature-card"));

      if (!bgLayers.length && !heroCard && !featureCards.length) {
        return;
      }

      let targetX = 0;
      let targetY = 0;
      let currentX = 0;
      let currentY = 0;
      let rafId = null;

      function handleMouseMove(event) {
        const vw = window.innerWidth || 1;
        const vh = window.innerHeight || 1;

        const normX = (event.clientX / vw) * 2 - 1;
        const normY = (event.clientY / vh) * 2 - 1;

        targetX = normX;
        targetY = normY;

        if (!rafId) {
          rafId = requestAnimationFrame(updateScene);
        }
      }

      function updateScene() {
        const lerp = 0.07;
        currentX += (targetX - currentX) * lerp;
        currentY += (targetY - currentY) * lerp;

        bgLayers.forEach((el, index) => {
          const depth = (index + 1) / (bgLayers.length + 1);
          const maxOffset = 32 * depth;
          const x = -currentX * maxOffset;
          const y = -currentY * maxOffset;
          el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        });

        const maxTranslate = 10;
        const maxTilt = 4;
        const tx = currentX * maxTranslate;
        const ty = currentY * maxTranslate;
        const rx = currentY * -maxTilt;
        const ry = currentX * maxTilt;

        if (heroCard) {
          heroCard.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
        }

        featureCards.forEach((card) => {
          const fx = tx * 0.5;
          const fy = ty * 0.5;
          card.style.transform = `translate3d(${fx}px, ${fy}px, 0)`;
        });

        const stillMoving =
          Math.abs(currentX - targetX) > 0.001 ||
          Math.abs(currentY - targetY) > 0.001;

        if (stillMoving) {
          rafId = requestAnimationFrame(updateScene);
        } else {
          rafId = null;
        }
      }

      function resetTransforms() {
        bgLayers.forEach((el) => {
          el.style.transform = "";
        });
        if (heroCard) {
          heroCard.style.transform = "";
        }
        featureCards.forEach((card) => {
          card.style.transform = "";
        });
      }

      window.addEventListener("mousemove", handleMouseMove);

      prefersReduced.addEventListener("change", (event) => {
        if (event.matches) {
          window.removeEventListener("mousemove", handleMouseMove);
          if (rafId) {
            cancelAnimationFrame(rafId);
            rafId = null;
          }
          resetTransforms();
        }
      });
    })();

    return () => {
      clearInterval(countdownInterval);
      document.removeEventListener("click", clickHandler);
      window.removeEventListener("gsap:loaded", initGsapAnimations);
    };
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>YUKTHI · Gen‑AI Hackathon</title>
        <meta
          name="description"
          content="YUKTHI is a 24‑hour Gen‑AI hackathon hosted by College of Engineering of Technology Payyanur, Department of AI & ML."
        />
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* GSAP + ScrollTrigger (CDN) */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          // notify that GSAP is available
          window.dispatchEvent(new Event("gsap:loaded"));
        }}
      />
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"
        strategy="lazyOnload"
        onLoad={() => {
          window.dispatchEvent(new Event("gsap:loaded"));
        }}
      />

      {/* Styles injected here to keep one-file conversion. You can move to app/globals.css if preferred. */}
      <style jsx global>{`
:root {
  --bg: #0b0b0f;
  --bg-elevated: #101019;
  --bg-soft: #151521;
  --text: #f9fafb;
  --muted: #9ca3af;
  --accent-blue: #4f46e5;
  --accent-violet: #a855f7;
  --accent-soft: rgba(79, 70, 229, 0.18);
  --border-subtle: rgba(148, 163, 184, 0.25);
  --radius-lg: 18px;
  --radius-md: 12px;
  --radius-pill: 999px;
  --shadow-soft: 0 26px 80px rgba(0, 0, 0, 0.9);
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  background: radial-gradient(
    circle at top,
    #151521 0,
    #050509 40%,
    #020207 100%
  );
  color: var(--text);
  font-family:
    "Inter",
    system-ui,
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    sans-serif;
  scroll-behavior: smooth;
}

a {
  color: inherit;
  text-decoration: none;
}

/* Cursor follower (desktop) */

.cursor-dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 18px;
  height: 18px;
  margin-top: -9px;
  margin-left: -9px;
  border-radius: 999px;
  pointer-events: none;
  z-index: 50;
  border: 1px solid rgba(148, 163, 184, 0.6);
  box-shadow: 0 0 30px rgba(79, 70, 229, 0.8);
  mix-blend-mode: screen;
  opacity: 0;
}

/* Background glowing orbs */

.bg-orb {
  position: fixed;
  border-radius: 999px;
  filter: blur(40px);
  opacity: 0.5;
  pointer-events: none;
  z-index: -1;
  background: radial-gradient(circle, var(--accent-violet), transparent 60%);
  will-change: transform;
  transform: translate3d(0, 0, 0);
}

.orb-1 {
  width: 260px;
  height: 260px;
  top: -60px;
  left: 10%;
}

.orb-2 {
  width: 220px;
  height: 220px;
  bottom: -80px;
  right: 12%;
  background: radial-gradient(circle, var(--accent-blue), transparent 60%);
}

.orb-3 {
  width: 180px;
  height: 180px;
  top: 40%;
  left: -80px;
}

/* NAVBAR */

.top-nav {
  position: fixed;
  inset: 32px 0 auto 0;
  z-index: 20;
  display: flex;
  justify-content: center;
  background: transparent;
  pointer-events: none;
}

.nav-inner {
  max-width: 1040px;
  margin: 0 auto;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-radius: 999px;
  background: radial-gradient(
    circle at 0% 0%,
    rgba(15, 23, 42, 0.98) 0,
    rgba(15, 23, 42, 0.96) 40%,
    rgba(2, 6, 23, 0.98) 100%
  );
  border: 1px solid rgba(148, 163, 184, 0.5);
  box-shadow: 0 22px 70px rgba(15, 23, 42, 0.9);
  pointer-events: auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: "Space Grotesk", system-ui, sans-serif;
}

.logo-mark {
  width: 28px;
  height: 28px;
  border-radius: 10px;
  background: radial-gradient(circle at 30% 0, var(--accent-blue), #020617 70%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e5e7eb;
  font-weight: 700;
  font-size: 18px;
}

.logo-text {
  font-weight: 600;
  letter-spacing: 0.18em;
  font-size: 25px;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
}

.nav-links a {
  position: relative;
  color: var(--muted);
  padding: 4px 2px 10px;
  border-radius: 999px;
  transition: color 0.2s ease;
}

.nav-links a:hover {
  color: var(--text);
}

.nav-links a.active {
  color: var(--text);
}

.nav-links a.active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 26px;
  height: 2px;
  border-radius: 999px;
  background-image: linear-gradient(
    90deg,
    var(--accent-blue),
    var(--accent-violet)
  );
  box-shadow: 0 0 16px rgba(79, 70, 229, 0.85);
}

/* Buttons */

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--radius-pill);
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid transparent;
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease,
    border-color 0.15s ease;
}

.btn.primary {
  background:
    radial-gradient(circle at 10% 0, #ffffff, #e0e7ff 40%) padding-box,
    linear-gradient(135deg, var(--accent-blue), var(--accent-violet)) border-box;
  color: #020617;
  border: 1px solid transparent;
  box-shadow: 0 16px 50px rgba(79, 70, 229, 0.7);
}

.btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 26px 80px rgba(79, 70, 229, 0.9);
}

.btn.ghost {
  border-color: rgba(148, 163, 184, 0.5);
  color: var(--text);
  background-color: rgba(15, 23, 42, 0.9);
}

.btn.ghost:hover {
  border-color: var(--accent-blue);
}

.nav-btn {
  padding-inline: 18px;
}

.btn-large {
  padding: 10px 22px;
  font-size: 15px;
}

.nav-register {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  background:
    radial-gradient(circle at 10% 0, #ffffff, #e0e7ff 40%) padding-box,
    linear-gradient(135deg, var(--accent-blue), var(--accent-violet)) border-box;
  color: #020617;
  border: 1px solid transparent;
  box-shadow: 0 16px 50px rgba(79, 70, 229, 0.8);
  cursor: pointer;
  transition:
    transform 0.15s ease,
    box-shadow 0.15s ease,
    background-color 0.15s ease;
}

.nav-register:hover {
  transform: translateY(-1px);
  box-shadow: 0 24px 70px rgba(79, 70, 229, 0.95);
}

.nav-register:active {
  transform: translateY(0);
  box-shadow: 0 18px 46px rgba(79, 70, 229, 0.75);
}

/* Host banner (institute + department + presents) */

.site-banner {
  padding: 96px 20px 20px;
}

.site-banner-inner {
  max-width: 1120px;
  margin: 0 auto;
  text-align: center;
  font-family: "Space Grotesk", system-ui, sans-serif;
}

.site-banner-title {
  font-size: clamp(30px, 4vw, 44px);
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #e5e7eb;
}

.site-banner-sub {
  margin-top: 8px;
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(209, 213, 219, 0.9);
  padding: 8px 0;
  border-top: 1px solid rgba(148, 163, 184, 0.5);
  border-bottom: 1px solid rgba(148, 163, 184, 0.5);
}

.site-banner-presents {
  margin-top: 12px;
  font-size: 11px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--accent-blue);
  text-shadow: 0 0 16px rgba(79, 70, 229, 0.7);
}

/* HERO */

.hero {
  min-height: 100vh;
  padding-top: 120px;
  padding-bottom: 80px;
  display: flex;
  align-items: center;
}

.hero-grid {
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px 0;
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) minmax(0, 1fr);
  gap: 40px;
  align-items: center;
}

.hero-kicker {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 11px;
  color: var(--muted);
}

.hero-title {
  margin-top: 16px;
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-size: clamp(40px, 5vw, 56px);
  line-height: 1.05;
}

.headline-line {
  display: block;
  overflow: hidden; /* for text reveal */
}

.headline-word {
  display: inline-block;
  margin-right: 8px;
}

.headline-word.accent {
  color: var(--accent-blue);
}

.hero-subtext {
  margin-top: 14px;
  font-size: 15px;
  color: var(--muted);
  max-width: 520px;
}

.hero-cta-row {
  margin-top: 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.hero-meta {
  margin-top: 16px;
  font-size: 13px;
  color: var(--muted);
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
}

.meta-dot {
  color: rgba(148, 163, 184, 0.7);
}

/* Hero side card */

.hero-panel {
  display: flex;
  justify-content: flex-end;
}

.hero-card {
  width: 100%;
  max-width: 360px;
  border-radius: 22px;
  background: radial-gradient(circle at top, #1c1c2b, #05050b);
  border: 1px solid rgba(148, 163, 184, 0.4);
  box-shadow: var(--shadow-soft);
  padding: 18px 18px 20px;
  will-change: transform;
  transform-style: preserve-3d;
}

.hero-card-header {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  margin-bottom: 12px;
  font-size: 11px;
}

.pill {
  display: inline-flex;
  align-items: center;
  border-radius: var(--radius-pill);
  padding: 4px 10px;
  font-size: 11px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

.pill-soft {
  background-color: rgba(79, 70, 229, 0.16);
  color: #e5e7eb;
}

.pill-outline {
  border: 1px solid rgba(148, 163, 184, 0.6);
  color: var(--muted);
}

.hero-card-title {
  font-size: 14px;
  margin-bottom: 10px;
}

.countdown {
  display: flex;
  gap: 10px;
}

.time-box {
  flex: 1;
  min-width: 72px;
  padding: 14px 10px;
  border-radius: 14px;
  background-color: #050509;
  border: 1px solid rgba(31, 41, 55, 0.9);
  text-align: center;
}

.time-value {
  display: block;
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: var(--accent-blue);
}

.time-label {
  display: block;
  margin-top: 4px;
  font-size: 11px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--muted);
}

.hero-card-note {
  margin-top: 10px;
  font-size: 12px;
  color: var(--muted);
}

/* Sections */

.section {
  padding: 72px 20px;
}

.section-dark {
  background: radial-gradient(circle at top, #11111a, #050509);
}

.section-inner {
  max-width: 1120px;
  margin: 0 auto;
}

.section-kicker {
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 11px;
  color: var(--muted);
  margin-bottom: 8px;
}

.section-title {
  font-size: 26px;
  margin-bottom: 10px;
}

.section-lead {
  font-size: 15px;
  color: var(--muted);
  max-width: 640px;
  margin-bottom: 24px;
}

/* About cards */

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.about-card {
  background-color: var(--bg-soft);
  border-radius: var(--radius-lg);
  border: 1px solid var(--border-subtle);
  padding: 18px 18px 20px;
  font-size: 14px;
  color: var(--muted);
}

.about-card h3 {
  margin-bottom: 6px;
  font-size: 16px;
  color: var(--text);
}

/* Features grid */

.feature-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 18px;
}

.feature-card {
  background-color: #090912;
  border-radius: var(--radius-lg);
  border: 1px solid rgba(31, 41, 55, 0.9);
  padding: 18px 18px 20px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
  will-change: transform;
}

.feature-card h3 {
  margin-bottom: 6px;
  font-size: 16px;
}

.feature-card p {
  font-size: 14px;
  color: var(--muted);
}

.feature-card:hover {
  transform: translateY(-6px);
  border-color: rgba(129, 140, 248, 0.8);
  box-shadow: 0 24px 70px rgba(56, 189, 248, 0.25);
}

/* CTA */

.section-cta {
  text-align: center;
}

.cta-inner {
  max-width: 620px;
}

.cta-title {
  font-size: 26px;
  margin-bottom: 10px;
}

.cta-text {
  font-size: 15px;
  color: var(--muted);
  margin-bottom: 20px;
}

.cta-note {
  margin-top: 8px;
  font-size: 13px;
  color: var(--muted);
}

.marquee {
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  border-bottom: 1px solid rgba(31, 41, 55, 0.9);
  background:
    radial-gradient(
      circle at 0% 0%,
      rgba(79, 70, 229, 0.26) 0,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(56, 189, 248, 0.22) 0,
      transparent 55%
    ),
    linear-gradient(to right, #050509, #020617);
}

.marquee-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 22px 24px;
  overflow: hidden;
}

.marquee-track {
  display: flex;
  width: max-content;
  gap: 56px;
  animation: marqueeScroll 22s linear infinite;
}

.marquee-group {
  display: flex;
  align-items: center;
  gap: 40px;
}

.marquee-item {
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-size: 16px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  white-space: nowrap;
  background-image: linear-gradient(
    90deg,
    var(--accent-blue),
    var(--accent-violet)
  );
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
}

.marquee-separator {
  font-size: 14px;
  color: rgba(148, 163, 184, 0.98);
}

@keyframes marqueeScroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Contact / info section */

.section-contact {
  padding-top: 52px;
  padding-bottom: 52px;
  border-top: 1px solid rgba(31, 41, 55, 0.9);
}

.contact-grid {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) repeat(3, minmax(0, 1fr)) minmax(
      0,
      0.9fr
    );
  gap: 24px;
  align-items: flex-start;
}

.contact-col {
  font-size: 13px;
  color: var(--muted);
}

.contact-logo .logo-text {
  font-size: 18px;
}

.contact-tagline {
  margin-top: 10px;
  max-width: 260px;
}

.contact-heading {
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 10px;
  color: #e5e7eb;
}

.contact-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.contact-list a:hover {
  color: #e5e7eb;
}

.contact-label {
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  color: var(--muted);
}

.contact-subblock {
  margin-bottom: 10px;
}

.contact-status {
  text-align: left;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border-radius: 999px;
  padding: 6px 12px;
  background-color: #020617;
  border: 1px solid rgba(34, 197, 94, 0.7);
  margin-bottom: 10px;
  font-size: 12px;
  color: #dcfce7;
}

.status-dot {
  width: 7px;
  height: 7px;
  border-radius: 999px;
  background-color: #22c55e;
}

.status-time {
  font-family: "Space Grotesk", system-ui, sans-serif;
  font-size: 20px;
  margin-top: 4px;
}

@media (max-width: 900px) {
  .contact-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 640px) {
  .contact-grid {
    grid-template-columns: minmax(0, 1fr);
  }
}
.bg-ambient {
  position: fixed;
  inset: 0;
  z-index: -2;

  pointer-events: none;
  background-image:
    radial-gradient(
      circle at 0% 0%,
      rgba(79, 70, 229, 0.45) 0,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 15%,
      rgba(56, 189, 248, 0.4) 0,
      transparent 55%
    ),
    radial-gradient(
      circle at 0% 100%,
      rgba(168, 85, 247, 0.35) 0,
      transparent 55%
    ),
    radial-gradient(
      circle at 100% 100%,
      rgba(15, 118, 110, 0.4) 0,
      transparent 55%
    ),
    linear-gradient(135deg, #050509, #020207 55%, #050814);
  background-size: 200% 200%;
  animation: ambientShift 22s ease-in-out infinite alternate;
}

.bg-ambient::before {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image:
    radial-gradient(
      circle at 10% 20%,
      rgba(255, 255, 255, 0.06) 0,
      transparent 55%
    ),
    radial-gradient(
      circle at 80% 0,
      rgba(255, 255, 255, 0.03) 0,
      transparent 60%
    ),
    radial-gradient(
      circle at 30% 80%,
      rgba(255, 255, 255, 0.04) 0,
      transparent 60%
    );
  mix-blend-mode: soft-light;
  opacity: 0.35;
  animation: noisePulse 1.8s steps(2, end) infinite;
}

@keyframes ambientShift {
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
}

@keyframes noisePulse {
  0% {
    opacity: 0.25;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 0.25;
  }
}

/* Footer */

.footer {
  border-top: 1px solid rgba(31, 41, 55, 0.9);
  background-color: #050509;
}

.footer-inner {
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px 20px 22px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-between;
  font-size: 12px;
  color: var(--muted);
}

/* Responsive */

@media (max-width: 900px) {
  .nav-links {
    display: none;
  }

  .hero-grid {
    grid-template-columns: minmax(0, 1fr);
    gap: 40px;
    text-align: center;
  }

  .hero-copy {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hero-panel {
    justify-content: center;
  }

  .site-banner {
    padding-top: 100px;
  }
}

@media (max-width: 640px) {
  /* Navbar adjustments for mobile */
  .top-nav {
    inset: 10px 0 auto 0;
  }

  .nav-inner {
    padding: 8px 16px;
    max-width: 94%;
  }

  .logo-text {
    font-size: 20px;
  }

  .logo-mark {
    width: 24px;
    height: 24px;
    font-size: 15px;
  }

  .nav-btn {
    padding: 6px 14px;
    font-size: 12px;
  }

  /* Spacing adjustments */
  .site-banner {
    padding: 80px 20px 10px;
  }

  .site-banner-title {
    font-size: 26px;
  }

  .hero {
    padding-top: 40px;
    padding-bottom: 60px;
    min-height: auto;
  }

  .hero-title {
    font-size: 36px;
  }

  .hero-subtext {
    font-size: 14px;
    max-width: none;
  }

  .hero-card {
    max-width: 100%;
  }

  .time-value {
    font-size: 18px;
  }

  .time-label {
    font-size: 10px;
  }

  /* Reduce distractions on small screens */
  .cursor-dot {
    display: none;
  }

  .bg-orb {
    opacity: 0.25;
    filter: blur(60px);
  }
}
      `}</style>

      <div className="bg-ambient"></div>

      <div className="cursor-dot"></div>

      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>

      <header className="top-nav">
        <div className="nav-inner">
          <div className="logo">
            <span className="logo-mark">Y</span>
            <span className="logo-text">YUKTHI</span>
          </div>
          <nav className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#features">Tracks</a>
            <a href="#cta">Register</a>
          </nav>
          <a href="#cta" className="btn primary nav-btn">
            Register
          </a>
        </div>
      </header>

      <section className="site-banner" aria-label="Host institute">
        <div className="site-banner-inner">
          <p className="site-banner-title">CET PAYYANUR</p>
          <p className="site-banner-sub">
            DEPARTMENT OF ARTIFICIAL INTELLIGENCE & MACHINE LEARNING
          </p>
          <p className="site-banner-presents">PRESENTS</p>
        </div>
      </section>

      <main>
        <section id="hero" className="hero">
          <div className="hero-grid">
            <div className="hero-copy">
              <h1 className="hero-title" aria-label="YUKTHI Gen-AI Hackathon">
                <span className="headline-line">
                  <span className="headline-word">YUKTHI</span>
                  <span className="headline-word accent">2026</span>
                </span>
                <span className="headline-line">
                  <span className="headline-word">GEN‑AI</span>
                  <span className="headline-word">HACKATHON</span>
                </span>
              </h1>
              <p className="hero-subtext">
                A 24‑hour sprint where builders, designers, and innovators ship
                AI‑native products that push the edge of what’s possible.
              </p>
              <div className="hero-cta-row">
                <a href="#cta" className="btn primary hero-cta">Apply to Participate</a>
                <a href="#about" className="btn ghost hero-secondary">View Event Details</a>
              </div>
              <div className="hero-meta">
                <span>January 27 – 28, 2026</span>
                <span className="meta-dot">•</span>
                <span>On‑site · Payyanur</span>
              </div>
            </div>

            <div className="hero-panel">
              <div className="hero-card">
                <div className="hero-card-header">
                  <span className="pill pill-soft">24‑Hour Build</span>
                  <span className="pill pill-outline">Gen‑AI Native</span>
                </div>
                <div className="hero-card-body">
                  <p className="hero-card-title">Countdown to Kick‑off</p>
                  <div className="countdown" aria-label="Countdown timer">
                    <div className="time-box">
                      <span id="days" className="time-value">00</span>
                      <span className="time-label">Days</span>
                    </div>
                    <div className="time-box">
                      <span id="hours" className="time-value">00</span>
                      <span className="time-label">Hours</span>
                    </div>
                    <div className="time-box">
                      <span id="minutes" className="time-value">00</span>
                      <span className="time-label">Minutes</span>
                    </div>
                    <div className="time-box">
                      <span id="seconds" className="time-value">00</span>
                      <span className="time-label">Seconds</span>
                    </div>
                  </div>
                  <p className="hero-card-note">
                    Teams of 2–4 • Limited slots • Beginner‑friendly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="marquee" aria-label="Event highlights">
          <div className="marquee-inner">
            <div className="marquee-track">
              <div className="marquee-group">
                <span className="marquee-item">24HR GEN‑AI HACKATHON</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">YUKTHI 2026</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">COLLEGE OF ENGINEERING OF TECHNOLOGY PAYYANUR</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">DEPARTMENT OF AI &amp; ML</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">BUILD • DEPLOY • INNOVATE</span>
              </div>
              <div className="marquee-group" aria-hidden="true">
                <span className="marquee-item">24HR GEN‑AI HACKATHON</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">YUKTHI 2026</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">COLLEGE OF ENGINEERING OF TECHNOLOGY PAYYANUR</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">DEPARTMENT OF AI &amp; ML</span>
                <span className="marquee-separator">•</span>
                <span className="marquee-item">BUILD • DEPLOY • INNOVATE</span>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-dark">
          <div className="section-inner">
            <p className="section-kicker">ABOUT THE EVENT</p>
            <h2 className="section-title">Where Innovation Meets Execution</h2>
            <p className="section-lead">
              YUKTHI is a focused, high‑energy Gen‑AI hackathon hosted by the
              Department of Artificial Intelligence &amp; Machine Learning.
              Builders ideate, prototype, and ship in under 24 hours with access to
              mentors, tools, and a like‑minded community.
            </p>

            <div className="about-grid">
              <article className="about-card">
                <h3>For the Builders</h3>
                <p>
                  You’ll work in small teams to design, validate, and deploy AI
                  features that feel native — not bolted‑on — using modern tooling
                  and APIs.
                </p>
              </article>
              <article className="about-card">
                <h3>Curated Mentorship</h3>
                <p>
                  Industry mentors and faculty guide you through architecture,
                  model choice, and UX decisions so you can move with confidence.
                </p>
              </article>
              <article className="about-card">
                <h3>Real‑World Impact</h3>
                <p>
                  Tracks are centered around education, productivity, and societal
                  impact so that your prototypes can grow into real products.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="features" className="section">
          <div className="section-inner">
            <p className="section-kicker">TRACKS & EXPERIENCES</p>
            <h2 className="section-title">What You’ll Build</h2>

            <div className="feature-grid">
              <article className="feature-card">
                <p className="pill pill-soft">Track 01</p>
                <h3>AI Productivity Systems</h3>
                <p>
                  Build copilots, workflow engines, and automation layers that
                  amplify human output across design, code, and operations.
                </p>
              </article>

              <article className="feature-card">
                <p className="pill pill-soft">Track 02</p>
                <h3>Intelligent Interfaces</h3>
                <p>
                  Design adaptive interfaces — chat, voice, or multimodal — that
                  feel conversational, context‑aware, and human‑centered.
                </p>
              </article>

              <article className="feature-card">
                <p className="pill pill-soft">Track 03</p>
                <h3>AI for Good</h3>
                <p>
                  Prototype solutions that address challenges in education,
                  accessibility, climate, and public health with measurable impact.
                </p>
              </article>

              <article className="feature-card">
                <p className="pill pill-outline">Experience</p>
                <h3>Night‑long Build Sprint</h3>
                <p>
                  Ship from concept to demo in a single night with checkpoints,
                  lightning talks, and music to keep the energy high.
                </p>
              </article>

              <article className="feature-card">
                <p className="pill pill-outline">Judging</p>
                <h3>Product‑First Evaluation</h3>
                <p>
                  Projects are evaluated on UX, technical depth, originality, and
                  narrative — not just model choice.
                </p>
              </article>

              <article className="feature-card">
                <p className="pill pill-outline">Prizes</p>
                <h3>Recognition & Opportunities</h3>
                <p>
                  Win prizes, gain visibility with partners, and get a platform to
                  continue building beyond the event.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="cta" className="section section-cta section-dark">
          <div className="section-inner cta-inner">
            <p className="section-kicker">READY TO BUILD?</p>
            <h2 className="cta-title">Join YUKTHI and ship your next big idea.</h2>
            <p className="cta-text">
              Form your team, pick a track, and bring your vision. We’ll provide
              the space, mentors, and caffeine.
            </p>
            <a href="https://example.com/your-registration-form" target="_blank" rel="noopener" className="btn primary btn-large">
              Open Registration Form
            </a>
            <p className="cta-note">
              Replace the link above with your actual registration URL when you’re
              ready to share it.
            </p>
          </div>
        </section>

        <section id="contact" className="section section-dark section-contact">
          <div className="section-inner contact-grid">
            <div className="contact-col contact-brand">
              <div className="logo contact-logo">
                <span className="logo-mark">Y</span>
                <span className="logo-text">YUKTHI</span>
              </div>
              <p className="contact-tagline">
                A 24‑hour Gen‑AI hackathon where innovation meets execution.
              </p>
            </div>

            <div className="contact-col">
              <p className="contact-heading">Navigation</p>
              <ul className="contact-list">
                <li><a href="#about">About</a></li>
                <li><a href="#features">Tracks</a></li>
                <li><a href="#features">Experience</a></li>
                <li><a href="#cta">Register</a></li>
              </ul>
            </div>

            <div className="contact-col">
              <p className="contact-heading">Contact</p>
              <ul className="contact-list">
                <li><span className="contact-label">Email</span><br />yukthi@cetpayyanur.ac.in</li>
                <li>
                  <span className="contact-label">Venue</span><br />
                  College of Engineering of Technology Payyanur,<br />
                  Department of AI &amp; ML
                </li>
              </ul>
            </div>

            <div className="contact-col contact-coords">
              <p className="contact-heading">Coordinators</p>
              <div className="contact-subblock">
                <p className="contact-label">Faculty in Charge</p>
                <p>Dr. [Faculty Name]<br />+91‑9XXXXXXXXX</p>
              </div>
              <div className="contact-subblock">
                <p className="contact-label">Student Coordinators</p>
                <p>[Student 1 Name]<br />[Phone]</p>
                <p>[Student 2 Name]<br />[Phone]</p>
              </div>
            </div>

            <div className="contact-col contact-status">
              <p className="contact-heading">Status</p>
              <p className="status-pill">
                <span className="status-dot"></span>
                Registrations Open
              </p>

              <p className="contact-label">Local Time (IST)</p>
              <p id="local-time" className="status-time">--:--</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-inner">
          <span>© 2026 YUKTHI · College of Engineering of Technology Payyanur</span>
          <span>Designed for a new generation of AI builders.</span>
        </div>
      </footer>
    </>
  );
}
