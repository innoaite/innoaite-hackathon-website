import Image from "next/image";
import { sponsors } from "../data/sponsors";

export default function Sponsors() {
  const handleSponsorClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      window.location.href =
        "mailto:innoaite@gmail.com?subject=Interest%20in%20Sponsoring%20InnoAIte%20Hackathon&body=Hello%20InnoAIte%20Team,%0D%0A%0D%0AWe%20are%20interested%20in%20sponsoring%20the%20InnoAIte%2024-hour%20Gen-AI%20Hackathon.%0D%0A%0D%0ACompany%20Name:%0D%0AContact%20Person:%0D%0APhone%20Number:%0D%0AProposed%20Sponsorship%20Type:%0D%0A%0D%0APlease%20share%20further%20details.%0D%0A%0D%0ARegards,";
    } else {
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=innoaite@gmail.com&su=Interest%20in%20Sponsoring%20InnoAIte%20Hackathon&body=Hello%20InnoAIte%20Team,%0D%0A%0D%0AWe%20are%20interested%20in%20sponsoring%20the%20InnoAIte%2024-hour%20Gen-AI%20Hackathon.%0D%0A%0D%0ACompany%20Name:%0D%0AContact%20Person:%0D%0APhone%20Number:%0D%0AProposed%20Sponsorship%20Type:%0D%0A%0D%0APlease%20share%20further%20details.%0D%0A%0D%0ARegards,",
        "_blank",
      );
    }
  };

  return (
    <section
      id="sponsors"
      className="relative py-5 px-4 md:px-8 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
            SPONSORS & PARTNERS
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Proud Sponsors
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto">
            We thank our sponsors for supporting innovation and empowering young
            builders.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div   className={`flex flex-wrap justify-center gap-6 mb-16 ${
    sponsors.length >= 4 ? "lg:grid lg:grid-cols-4 md:grid md:grid-cols-3" : ""
  }`}>
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-slate-900/50 border border-slate-700/50 rounded-xl p-6 flex items-center justify-center min-h-[140px]
                         hover:border-indigo-500/50 hover:scale-[1.03] transition-all duration-300 group backdrop-blur-sm"
            >
              {sponsor.logo ? (
                <Image
                  src={sponsor.logo}
                  alt={sponsor.name}
                  width={140}
                  height={70}
                  className="object-contain opacity-90 group-hover:opacity-100 transition"
                />
              ) : (
                <div className="text-center">
                  <div className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                    {sponsor.name}
                  </div>
                  <div className="mt-1 h-1 w-12 mx-auto bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full opacity-70" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <div className="bg-slate-900/60 border border-slate-700/50 rounded-2xl p-8 text-center backdrop-blur-sm">
          <h3 className="text-2xl font-semibold text-white mb-3">
            Interested in Sponsoring?
          </h3>

          <p className="text-slate-400 mb-6 max-w-xl mx-auto">
            Showcase your brand, support innovation, and connect with talented
            developers.
          </p>

          <button
            onClick={handleSponsorClick}
            className="inline-flex items-center justify-center px-8 py-3 rounded-full
             bg-gradient-to-r from-indigo-600 to-purple-500 text-white font-medium
             hover:shadow-[0_0_30px_rgba(168,85,247,0.5)]
             hover:-translate-y-1 transition-all duration-300"
          >
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}
