import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".cta-inner", {
        scrollTrigger: {
          trigger: "#cta",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.94,
        duration: 0.9,
        ease: "power3.out",
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <section id="cta" className="section section-cta" ref={comp}>
      <div className="section-inner cta-inner">
        <h2 className="cta-title">Ready to Build the Future?</h2>
        <p className="cta-text">
          Join the brightest minds at CET Payyanur for 24 hours of innovation, coding, and fun.
        </p>
        <a href="https://example.com/register" className="btn-large nav-register">
          Register Now
        </a>
        <p className="cta-note">Applications close January 25, 2026</p>
      </div>
    </section>
  );
};

export default CTA;
