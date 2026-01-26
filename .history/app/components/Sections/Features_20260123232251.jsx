export default function Features() {
  const features = [
    {
      category: "Track 01",
      title: "AI Productivity Systems",
      description: "Build copilots, workflow engines, and automation layers that amplify human output across design, code, and operations.",
      type: "track"
    },
    {
      category: "Track 02",
      title: "Intelligent Interfaces",
      description: "Design adaptive interfaces — chat, voice, or multimodal — that feel conversational, context‑aware, and human‑centered.",
      type: "track"
    },
    {
      category: "Track 03",
      title: "AI for Good",
      description: "Prototype solutions that address challenges in education, accessibility, climate, and public health with measurable impact.",
      type: "track"
    },
    {
      category: "Experience",
      title: "Night‑long Build Sprint",
      description: "Ship from concept to demo in a single night with checkpoints, lightning talks, and music to keep the energy high.",
      type: "experience"
    },
    {
      category: "Judging",
      title: "Product‑First Evaluation",
      description: "Projects are evaluated on UX, technical depth, originality, and narrative — not just model choice.",
      type: "experience"
    },
    {
      category: "Prizes",
      title: "Recognition & Opportunities",
      description: "Win prizes, gain visibility with partners, and get a platform to continue building beyond the event.",
      type: "experience"
    }
  ]

  return (
    <section id="features" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="section-subtitle">TRACKS & EXPERIENCES</div>
          <h2 className="section-title">What You'll Build</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl hover:border-accent-blue/50 border border-transparent transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(56,189,248,0.25)]"
            >
              <div className={`px-3 py-1 rounded-full text-xs font-medium mb-4 inline-block ${
                feature.type === 'track' 
                  ? 'bg-accent-blue/20 text-white' 
                  : 'border border-gray-700 text-gray-400'
              }`}>
                {feature.category}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}