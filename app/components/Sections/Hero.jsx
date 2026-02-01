"use client";

import CountdownTimer from "../UI/CountdownTimer";
import Image from "next/image";
import { CalendarDays, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-24 sm:pt-28 md:pt-32 lg:pt-40 pb-20 sm:pb-24 px-4 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        {/* LEFT SIDE */}
        <div className="text-center lg:text-left space-y-4 sm:space-y-5">
          {/* College */}
          <p className="text-gray-400 uppercase tracking-widest text-xs">
            College of Engineering, Technology and Architecture – Payyanur
          </p>

          {/* Yukthix small branding */}
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <Image
              src="/assets/yukthix_logo.png"
              alt="Yukthix Icon"
              width={36}
              height={36}
              className="object-contain"
            />

            <Image
              src="/assets/yukthix_text_logo.png"
              alt="Yukthix Text Logo"
              width={120}
              height={32}
              className="object-contain"
            />
          </div>

          {/* Fest line */}
          <p className="text-gray-500 text-sm leading-relaxed">
            As part of{" "}
            <span className="text-white font-medium">YUKTHIX ’26</span> –
            National Level Tech Fest <br />
            <span className="text-indigo-400 font-semibold">
              Department of Artificial Intelligence & Machine Learning
            </span>{" "}
            <b />
            <span className="text-white font-medium">presents</span>
          </p>

          {/* Main InnoAIte Logo (BIGGER HERO) */}
          <div className=" flex justify-center lg:justify-start">
            <Image
              src="/assets/logo_innoaite.png"
              alt="InnoAIte Logo"
              width={720}
              height={220}
              priority
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[620px] h-auto object-contain"
            />
          </div>

          {/* Subtitle */}
          <p className="text-white text-2xl sm:text-3xl font-semibold ">
            24-Hour Gen-AI Hackathon
          </p>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            Bringing together innovators from across the nation to build
            impactful solutions for real-world challenges using cutting-edge
            technology.
          </p>

          {/* Date & Location themed block */}
          <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center lg:justify-start">
            <div className="px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/60 text-white text-sm flex items-center gap-3 group hover:border-indigo-500/50 transition-all duration-300">
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <CalendarDays className="w-4 h-4 text-indigo-400" />
              </div>
              <span className="font-medium">February 15 & 16, 2026</span>
            </div>

            <a
              href="https://maps.app.goo.gl/9egH6vCU86XTCwo7A"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/60 text-white text-sm flex items-center gap-3 group hover:border-indigo-500/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="p-2 rounded-lg bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:from-indigo-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                <MapPin className="w-4 h-4 text-purple-400" />
              </div>
              <span className="font-medium">On-site Hackathon – Payyanur</span>
            </a>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
            <a
              href="#cta"
              className="
    inline-flex items-center justify-center rounded-full font-semibold
    bg-white px-10 py-3.5 text-sm
    transition-all duration-300
    hover:-translate-y-0.5 hover:shadow-[0_0_25px_rgba(168,85,247,0.8)]
    active:translate-y-0
    group
  "
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-500 bg-clip-text text-transparent">
                Register Now
              </span>
              <svg
                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                viewBox="0 0 24 24"
              >
                <defs>
                  <linearGradient
                    id="arrow-gradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#4f46e5" /> {/* indigo-600 */}
                    <stop offset="100%" stopColor="#a855f7" />{" "}
                    {/* purple-500 */}
                  </linearGradient>
                </defs>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                  stroke="url(#arrow-gradient)"
                />
              </svg>
            </a>

            <a
              href="#about"
              className="px-10 py-3.5 rounded-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-500 text-white font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_35px_rgba(168,85,247,0.8)] hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0 group"
            >
              <span>View Details</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* RIGHT SIDE CARD */}
        <div className="bg-slate-900/80 border border-slate-700/50 rounded-2xl p-8 sm:p-10 backdrop-blur-xl shadow-xl">
          <h3 className="text-xl font-semibold text-white mb-6">
            Hackathon Begins In
          </h3>

          <CountdownTimer />

          <p className="text-gray-400 text-sm mt-6">
            Team Size: 1–3 Members • Limited Slots Available
          </p>

          <p className="text-gray-400 text-sm mt-2">Prizes worth ₹30,000</p>
        </div>
      </div>
    </section>
  );
}
