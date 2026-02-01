"use client";
import { useEffect, useState } from "react";
import { Trophy, Medal, Award, Sparkles, Star, Gem } from "lucide-react";

export default function Prizes() {
  const prizes = [
    { 
      rank: "1st Place", 
      amount: "₹15,000", 
      extra: "Certificate & Mentorship",
      icon: Trophy,
      badge: "Winner",
      gradient: "from-amber-500/20 via-orange-500/15 to-yellow-500/10",
      iconColor: "text-amber-400",
      borderColor: "border-amber-500/30",
      glowColor: "bg-amber-500/10",
      features: ["Cash Prize", "Certificate", "Mentorship"]
    },
    { 
      rank: "2nd Place", 
      amount: "₹10,000", 
      extra: "Certificate & Mentorship",
      icon: Medal,
      badge: "Runner-up",
      gradient: "from-slate-500/15 via-gray-500/10 to-slate-500/10",
      iconColor: "text-slate-300",
      borderColor: "border-slate-500/25",
      glowColor: "bg-slate-500/5",
      features: ["Cash Prize", "Certificate", "Mentorship"]
    },
    { 
      rank: "3rd Place", 
      amount: "₹5,000", 
      extra: "Certificate & Mentorship",
      icon: Award,
      badge: "Third Place",
      gradient: "from-amber-700/20 via-orange-800/15 to-yellow-900/10",
      iconColor: "text-amber-600",
      borderColor: "border-amber-700/30",
      glowColor: "bg-amber-700/10",
      features: ["Cash Prize", "Certificate", "Mentorship"]
    }
  ];

  const [visible, setVisible] = useState(false);

  // FIX: Proper useEffect cleanup for setTimeout
  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
   <section id="prizes" className="py-16 md:py-20 px-4 md:px-8 bg-slate-950">
  <div className="max-w-6xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="text-indigo-400 uppercase tracking-widest text-sm mb-2">
        PRIZE POOL
      </div>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
        Win Amazing <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Prizes</span>
      </h2>
      <p className="text-slate-400 max-w-2xl mx-auto">
        Compete for exciting rewards and recognition. All winners receive cash prizes, certificates, and exclusive mentorship opportunities.
      </p>
    </div>

    {/* Prizes Grid */}
    <div className="flex flex-col md:flex-row items-center md:items-end justify-center gap-8 md:gap-4 xl:gap-8 w-full mx-auto">
      {prizes.map((prize, index) => {
        const Icon = prize.icon;
        const isFirstPlace = index === 0;

        return (
          <div
            key={index}
            className={`relative group transition-all duration-700 w-full sm:w-64 md:w-1/3 flex-shrink-0`}
          >
            {/* Card */}
            <div className={`relative glass-card p-6 md:p-8 rounded-2xl border backdrop-blur-xl
              ${prize.borderColor} bg-gradient-to-b from-slate-900/90 to-slate-950/90
              hover:from-slate-900 hover:to-slate-950
              transition-all duration-500
              ${isFirstPlace ? "min-h-[400px]" : "min-h-[360px]"}
              group-hover:border-white/20
              shadow-2xl shadow-black/20
            `}>
              {/* Badge */}
              <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full border border-white/10 backdrop-blur-sm z-10 ${
                isFirstPlace ? "bg-gradient-to-r from-amber-500 to-orange-500" : "bg-slate-800"
              }`}>
                <span className={`text-xs font-bold ${isFirstPlace ? "text-white" : "text-slate-200"}`}>
                  {prize.badge}
                </span>
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4 md:mb-6 mt-2">
                <div className={`relative p-5 rounded-2xl bg-gradient-to-br ${prize.gradient} border ${prize.borderColor} group-hover:scale-105 transition-transform duration-500 ${isFirstPlace ? "scale-110" : ""}`}>
                  <Icon className={`w-10 h-10 ${prize.iconColor} group-hover:rotate-12 transition-transform duration-500`} />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <div className={`text-sm font-semibold uppercase tracking-wider mb-2 md:mb-3 ${isFirstPlace ? "text-amber-400" : "text-slate-300"}`}>
                  {prize.rank}
                </div>

                <h3 className={`text-2xl md:text-3xl font-bold mb-2 md:mb-3 bg-gradient-to-r ${isFirstPlace ? "from-amber-400 to-orange-400" : "from-slate-200 to-slate-300"} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                  {prize.amount}
                </h3>

                <p className="text-slate-400 text-sm mb-4 md:mb-6">{prize.extra}</p>

                <div className="space-y-2 mb-4 md:mb-6">
                  {prize.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center gap-2">
                      <Star className="w-3 h-3 text-indigo-400" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>

    {/* Additional Info */}
    <div className="mt-16 text-center">
      <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900/50 border border-slate-700/50 backdrop-blur-sm">
        <Gem className="w-5 h-5 text-indigo-400" />
        <span className="text-slate-300 text-sm">
          <span className="font-semibold text-indigo-300">All participants</span> receive certificates of participation
        </span>
      </div>
    </div>
  </div>
</section>

  );
}
