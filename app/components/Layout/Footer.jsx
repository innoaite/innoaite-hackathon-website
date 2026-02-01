'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Terminal,
  Github,
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  Heart,
  Phone
} from
  'lucide-react';
const socialLinks = [
  {
    icon: <Twitter className="w-5 h-5" />,
    href: '#',
    label: 'Twitter'
  },
  {
    icon: <Github className="w-5 h-5" />,
    href: '#',
    label: 'GitHub'
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: '#',
    label: 'LinkedIn'
  },
  {
    icon: <Instagram className="w-5 h-5" />,
    href: '#',
    label: 'Instagram'
  }];

const quickLinks = [
  {
    name: 'About',
    href: '#about'
  },
  {
    name: 'Tracks',
    href: '#tracks'
  },
  {
    name: 'Timeline',
    href: '#timeline'
  },
  {
    name: 'Prizes',
    href: '#prizes'
  }];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 pt-16 pb-8 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-violet-600/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            className="col-span-1 md:col-span-2"
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5
            }}>

            <div className="flex items-center gap-2 mb-4">
              <motion.div
                className="p-2 rounded-lg bg-violet-600/20"
                whileHover={{
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300
                }}>

                <Terminal className="w-6 h-6 text-violet-400" />
              </motion.div>
              <span className="text-xl font-bold text-white">
                YUKTHI <span className="text-violet-400">2026</span>
              </span>
            </div>
            <p className="text-slate-400 max-w-sm mb-6">
              Department of Artificial Intelligence & Machine Learning.
              Empowering the next generation of innovators through code and
              creativity.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) =>
                <motion.a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="p-2.5 rounded-lg bg-white/5 text-slate-400 hover:text-white hover:bg-violet-600/20 transition-colors"
                  whileHover={{
                    scale: 1.1,
                    y: -2
                  }}
                  whileTap={{
                    scale: 0.95
                  }}
                  initial={{
                    opacity: 0,
                    y: 20
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0
                  }}
                  viewport={{
                    once: true
                  }}
                  transition={{
                    delay: index * 0.1
                  }}>

                  {social.icon}
                </motion.a>
              )}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.2,
              duration: 0.5
            }}>

            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) =>
                <li key={index}>
                  <motion.a
                    href={link.href}
                    className="text-slate-400 hover:text-violet-400 transition-colors inline-block"
                    whileHover={{
                      x: 4
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300
                    }}>

                    {link.name}
                  </motion.a>
                </li>
              )}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.3,
              duration: 0.5
            }}>

            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <div className="text-sm font-medium text-violet-400 mb-1">Staff Coordinator</div>
                <div className="text-white text-sm">Aitha MP</div>
                <a href="tel:+919496309911" className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors mt-1 text-sm">
                  <Phone className="w-3 h-3" />
                  <span>+91 94963 09911</span>
                </a>
              </li>
              <li>
                <div className="text-sm font-medium text-violet-400 mb-1">Student Coordinator</div>
                <div className="text-white text-sm">Muhammed Juraij NP</div>
                <a href="tel:+917306883114" className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors mt-1 text-sm">
                  <Phone className="w-3 h-3" />
                  <span>+91 73068 83114</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:Innoaite@gmail.com"
                  className="flex items-center gap-2 text-slate-400 hover:text-violet-400 transition-colors text-sm">
                  <Mail className="w-4 h-4" />
                  <span>Innoaite@gmail.com</span>
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{
            opacity: 0
          }}
          whileInView={{
            opacity: 1
          }}
          viewport={{
            once: true
          }}
          transition={{
            delay: 0.4
          }}>

          <p className="text-slate-500 text-sm">
            &copy; 2026 YUKTHI Hackathon. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
            Dept. of AI & ML
          </p>
        </motion.div>
      </div>
    </footer>);

}
