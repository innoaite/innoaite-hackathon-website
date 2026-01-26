export default function CTA() {
  return (
    <section id="cta" className="section-padding bg-gradient-to-b from-bg-dark to-gray-900/50">
      <div className="container-custom max-w-4xl text-center">
        <div className="section-subtitle">READY TO BUILD?</div>
        <h2 className="section-title mb-6">Join YUKTHI and ship your next big idea.</h2>
        <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
          Form your team, pick a track, and bring your vision. We'll provide
          the space, mentors, and caffeine.
        </p>
        <a
          href="https://example.com/your-registration-form"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-white font-medium text-lg hover:shadow-[0_0_60px_rgba(79,70,229,0.9)] transition-all duration-300 mb-4"
        >
          Open Registration Form
        </a>
        <p className="text-gray-500 text-sm">
          Replace the link above with your actual registration URL when you're ready to share it.
        </p>
      </div>
    </section>
  )
}