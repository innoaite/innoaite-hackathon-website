'use client';

import React, { useState, Children } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Mail } from 'lucide-react';
const faqs = [
  {
    question: 'Who can participate in YUKTHI 2026?',
    answer:
      'The hackathon is open to all students, regardless of their major or year of study. We encourage diverse teams with a mix of skills!'
  },
  {
    question: 'Do I need a team?',
    answer:
      "Yes, you need a team of 2-4 members. If you don't have one, you can join our Discord server to find teammates or attend the team formation session."
  },
  {
    question: 'Is there a registration fee?',
    answer:
      'No, participation in YUKTHI 2026 is completely free! We believe in making innovation accessible to everyone.'
  },
  {
    question: 'What should I bring?',
    answer:
      "Bring your laptops, chargers, and any hardware you might need. We'll provide high-speed internet, food, and beverages throughout the event."
  },
  {
    question: 'Will food be provided?',
    answer:
      "Absolutely! We'll keep you fueled with meals, snacks, and plenty of coffee/energy drinks for the entire 24-hour duration."
  }];

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15
    }
  }
};
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
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
              duration: 0.6
            }}
            className="text-3xl md:text-4xl font-bold text-white mb-4">

            Frequently Asked <span className="text-violet-400">Questions</span>
          </motion.h2>
        </div>

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true
          }}>

          {faqs.map((faq, index) =>
            <motion.div
              key={index}
              variants={itemVariants}
              className="border border-white/10 rounded-xl bg-slate-900/30 overflow-hidden backdrop-blur-sm hover:border-violet-500/20 transition-colors">

              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left group"
                whileHover={{
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }}
                whileTap={{
                  scale: 0.995
                }}>

                <span className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0
                  }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeInOut'
                  }}
                  className="flex-shrink-0">

                  <ChevronDown className="w-5 h-5 text-violet-400" />
                </motion.div>
              </motion.button>
              <AnimatePresence initial={false}>
                {openIndex === index &&
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: 'easeOut'
                        },
                        opacity: {
                          duration: 0.2,
                          delay: 0.1
                        }
                      }
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                      transition: {
                        height: {
                          duration: 0.3,
                          ease: 'easeIn'
                        },
                        opacity: {
                          duration: 0.1
                        }
                      }
                    }}
                    className="overflow-hidden">

                    <motion.div
                      className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-white/5 pt-4"
                      initial={{
                        y: -10
                      }}
                      animate={{
                        y: 0
                      }}
                      transition={{
                        duration: 0.2,
                        delay: 0.1
                      }}>

                      {faq.answer}
                    </motion.div>
                  </motion.div>
                }
              </AnimatePresence>
            </motion.div>
          )}
        </motion.div>

        {/* Contact Support Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 p-8 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-900/50 border border-violet-500/20 relative overflow-hidden group"
        >
          {/* Glow effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-violet-600/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-6 text-center md:text-left">
              {/* Relevant Image */}
              <div className="relative w-20 h-20 shrink-0 bg-slate-800/50 rounded-2xl flex items-center justify-center border border-white/5 shadow-lg group-hover:border-violet-500/30 transition-colors duration-500">
                <Image
                  src="/logo2.png"
                  alt="Yukthi Support Team"
                  width={40}
                  height={40}
                  className="object-contain drop-shadow-[0_0_15px_rgba(139,92,246,0.5)]"
                />
              </div>

              <div>
                <div className="text-xs font-bold tracking-widest text-violet-400 uppercase mb-1">
                  Get in touch
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Still have <span className="text-violet-400">Questions?</span>
                </h3>
                <p className="text-slate-400 max-w-md">
                  Can't find what you're looking for? We're here to help you out.
                </p>
              </div>
            </div>

            <a
              href="mailto:yukthi@cetpayyanur.ac.in"
              className="group/btn flex items-center gap-2 px-8 py-4 rounded-xl bg-violet-600/10 hover:bg-violet-600/20 border border-violet-500/50 hover:border-violet-500 text-white font-semibold transition-all duration-300"
            >
              <span>Mail Us</span>
              <Mail className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>);

}