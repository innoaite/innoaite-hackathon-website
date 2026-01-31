'use client';

import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
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
      </div>
    </section>);

}