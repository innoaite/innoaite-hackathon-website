export default function About() {
  const aboutCards = [
    {
      title: 'For the Builders',
      description: 'You\'ll work in small teams to design, validate, and deploy AI features that feel native — not bolted‑on — using modern tooling and APIs.'
    },
    {
      title: 'Curated Mentorship',
      description: 'Industry mentors and faculty guide you through architecture, model choice, and UX decisions so you can move with confidence.'
    },
    {
      title: 'Real‑World Impact',
      description: 'Tracks are centered around education, productivity, and societal impact so that your prototypes can grow into real products.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12">
          <p className="section-kicker">ABOUT THE EVENT</p>
          <h2 className="section-title">Where Innovation Meets Execution</h2>
          <p className="section-lead">
            YUKTHI is a focused, high‑energy Gen‑AI hackathon hosted by the
            Department of Artificial Intelligence &amp; Machine Learning.
            Builders ideate, prototype, and ship in under 24 hours with access to
            mentors, tools, and a like‑minded community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {aboutCards.map((card, index) => (
            <div key={index} className="about-card">
              <h3 className="text-lg font-semibold mb-3">{card.title}</h3>
              <p className="text-text-muted text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}