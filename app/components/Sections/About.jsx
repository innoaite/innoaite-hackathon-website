export default function About() {
 const cards = [
    {
      title: "Innovate in Teams",
      description: "Collaborate in small teams of 1–3 members to design, prototype, and deploy cutting-edge AI solutions using modern tools, APIs, and frameworks."
    },
    {
      title: "Expert Mentorship",
      description: "Receive guidance from industry professionals and faculty mentors on architecture, AI models, and user experience, helping you build with confidence."
    },
    {
      title: "Real-World Challenges",
      description: "Solve meaningful problems across education, productivity, and societal impact tracks, creating prototypes that can evolve into real products."
    }
  ];

  return (
    <section
      id="about"
      className="pt-20 pb-10 px-4 md:px-12 bg-slate-950 relative overflow-hidden"
    >
      {/* Optional subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-950/90 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto z-10 text-center">
        <div className="mb-16">
          <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
            ABOUT THE EVENT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">
            Where Innovation Meets Execution
          </h2>
          <p className="text-slate-400 mt-4 max-w-3xl mx-auto leading-relaxed">
            InnoAIte is a 24-hour Gen-AI hackathon hosted by the Department of Artificial
            Intelligence & Machine Learning at CETAP Payyanur as part of YUKTHIX ’26. 
            Builders collaborate, prototype, and ship under the guidance of mentors and a 
            like-minded community, bringing AI ideas to life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl border border-white/10 backdrop-blur-xl bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-[1.03] hover:border-indigo-500/40"
            >
              <h3 className="text-xl font-semibold text-white mb-3">
                {card.title}
              </h3>
              <p className="text-slate-400">{card.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Optional subtle floating particles/glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-3xl pointer-events-none animate-pulse"></div>
    </section>
  );
}
