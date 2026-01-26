export default function About() {
  const cards = [
    {
      title: "For the Builders",
      description: "You'll work in small teams to design, validate, and deploy AI features that feel native — not bolted‑on — using modern tooling and APIs."
    },
    {
      title: "Curated Mentorship",
      description: "Industry mentors and faculty guide you through architecture, model choice, and UX decisions so you can move with confidence."
    },
    {
      title: "Real‑World Impact",
      description: "Tracks are centered around education, productivity, and societal impact so that your prototypes can grow into real products."
    }
  ]

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-gray-900/50 to-bg-dark">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-subtitle">ABOUT THE EVENT</div>
          <h2 className="section-title">Where Innovation Meets Execution</h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            YUKTHI is a focused, high‑energy Gen‑AI hackathon hosted by the
            Department of Artificial Intelligence & Machine Learning.
            Builders ideate, prototype, and ship in under 24 hours with access to
            mentors, tools, and a like‑minded community.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="glass-card p-6 rounded-2xl">
              <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
              <p className="text-gray-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}