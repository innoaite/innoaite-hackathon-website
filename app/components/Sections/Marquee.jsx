export default function Marquee() {
  const items = [
    "24HR GEN‑AI HACKATHON",
    "YUKTHI 2026",
    "COLLEGE OF ENGINEERING OF TECHNOLOGY PAYYANUR",
    "DEPARTMENT OF AI & ML",
    "BUILD • DEPLOY • INNOVATE"
  ]

  return (
    <section className="py-8 border-y border-gray-800 overflow-hidden">
      <div className="animate-marquee flex gap-8 md:gap-12 whitespace-nowrap">
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-8 md:gap-12">
            <span className="font-space-grotesk text-base md:text-lg font-medium gradient-text">
              {item}
            </span>
            {index < items.length * 2 - 1 && (
              <span className="text-gray-600">•</span>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}