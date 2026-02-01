"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can participate in the hackathon?",
    answer:
      "The hackathon is open to undergraduate and postgraduate students from any college or university. Students from all departments are welcome to participate."
  },
  {
    question: "What is the team size?",
    answer:
      "Each team can have a minimum of 1 member and a maximum of 3 members. Both solo and team participation are allowed."
  },
  {
    question: "Is there a registration fee?",
    answer:
      "Yes. A registration fee of ₹300 per participant is required. The fee must be paid only after your team is shortlisted."
  },
  {
    question: "Do we need prior experience in AI or Machine Learning?",
    answer:
      "No prior advanced experience is required. Basic programming knowledge is enough. Mentors will guide participants throughout the hackathon."
  },
  {
    question: "What should participants bring to the event?",
    answer:
      "Participants must bring their own laptops, chargers, and any software tools needed for development. Internet access and workspace will be provided."
  },
  {
    question: "Will certificates be provided?",
    answer:
      "Yes. All participants will receive certificates of participation. Winners will receive cash prizes along with certificates and mentorship."
  },
  {
    question: "Can teams work on their own problem ideas?",
    answer:
      "No. Teams must choose one problem statement from the official tracks provided by the organizers."
  }
];


export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-10 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
            FAQ
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Everything you need to know before participating in InnoAIte.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border border-slate-700/50 rounded-xl bg-slate-900/50 backdrop-blur-sm"
              >
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-white font-medium">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 text-slate-400 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
