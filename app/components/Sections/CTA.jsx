export default function CTA() {
  return (
    <section id="cta" className="py-10 md:py-20 px-4 md:px-8 bg-slate-950">
      <div className="max-w-4xl mx-auto text-center">
        <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
          READY TO BUILD?
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Join InnoAIte and Ship Your Next Big Idea
        </h2>
        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
          Form your team, select a track, and innovate solutions to exciting Gen-AI challenges.
          Get guidance from mentors, collaborate with peers, and stand a chance to win amazing prizes!
        </p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScd4G9-ChXGL9dD-2USS_INEHiMfxOcAoSx-zxcVwROqcBTKA/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium text-lg hover:shadow-[0_0_60px_rgba(168,85,247,0.7)] transition-all duration-300 mb-4"
        >
          Open Registration Form
        </a>
        <p className="text-slate-400 text-sm">
          Fill out the form to register your team. Make sure to complete all fields before submitting.
        </p>
      </div>
    </section>
  );
}
