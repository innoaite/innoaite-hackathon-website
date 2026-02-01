export default function Marquee() {
  const items = [
    "InnoAIte – 24HR GEN‑AI HACKATHON",
    "YUKTHIX 2026",
    "COLLEGE OF ENGINEERING, TECHNOLOGY & ARCHITECTURE – PAYYANUR",
    "DEPARTMENT OF AI & ML",
    "BUILD • DEPLOY • INNOVATE"
  ];

  return (
    <section className="overflow-hidden border-t border-b border-gray-800 py-4 md:py-6 bg-slate-950">
      <div className="relative">
        <div className="animate-marquee flex gap-12 whitespace-nowrap">
          {[...items, ...items].map((item, index) => (
            <div key={index} className="flex items-center gap-6 md:gap-12">
              <span className="text-lg md:text-xl font-semibold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent whitespace-nowrap">
                {item}
              </span>
              {index < items.length * 2 - 1 && (
                <span className="text-gray-600">•</span>
              )}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          gap: 2rem;
          animation: marquee 8s linear infinite; /* faster on small screens */
        }

        @media (min-width: 640px) {
          .animate-marquee {
            gap: 2.5rem;
            animation-duration: 10s; /* slightly slower on medium screens */
          }
        }

        @media (min-width: 768px) {
          .animate-marquee {
            gap: 3rem;
            animation-duration: 12s; /* larger screens */
          }
        }

        @media (min-width: 1024px) {
          .animate-marquee {
            gap: 3.5rem;
            animation-duration: 14s; /* extra large screens */
          }
        }
      `}</style>
    </section>
  );
}
