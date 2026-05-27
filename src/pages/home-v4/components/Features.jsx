import React from "react";
import { motion } from "framer-motion";
import { FEATURE_CARDS } from "../data";

const gradientAccents = [
  "from-indigo-500/20 to-violet-500/20",
  "from-teal-500/20 to-cyan-500/20",
  "from-rose-500/20 to-pink-500/20",
  "from-amber-500/20 to-orange-500/20",
];

export default function Features() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">
            Features
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Built for every business
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/40 max-w-2xl mx-auto">
            Whether you run a restaurant, flower shop, beauty brand, or retail store — Menugic gives you the tools to sell online beautifully.
          </p>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {FEATURE_CARDS.map((card, index) => {
            const isLarge = card.size === "large";
            const gradientIdx = index % gradientAccents.length;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className={`group relative overflow-hidden rounded-xl border border-white/[0.06] bg-white/[0.02] transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-0.5 ${
                  isLarge ? "md:col-span-2 p-7" : "col-span-1 p-5"
                }`}
              >
                {/* Hover gradient overlay */}
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${gradientAccents[gradientIdx]} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Hover gradient border glow */}
                <div className="absolute inset-0 -z-10 rounded-xl p-px bg-gradient-to-br from-transparent via-white/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative flex flex-col space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] group-hover:border-white/[0.15] transition-all duration-300 ${
                      isLarge ? "h-12 w-12" : "h-10 w-10"
                    }`}>
                      <card.icon className={`text-white/60 group-hover:text-white/90 transition-colors ${
                        isLarge ? "h-6 w-6" : "h-4 w-4"
                      }`} />
                    </div>
                    {card.status && (
                      <span className="text-[10px] font-medium px-2.5 py-1 rounded-full border border-teal-500/20 bg-teal-500/10 text-teal-400/80 uppercase tracking-wider">
                        {card.status}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className={`font-semibold text-white/90 tracking-tight ${
                      isLarge ? "text-lg" : "text-[15px]"
                    }`}>
                      {card.title}
                    </h3>
                    <p className={`mt-1.5 text-white/40 leading-relaxed ${
                      isLarge ? "text-sm" : "text-[13px]"
                    }`}>
                      {card.description}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {card.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] px-2 py-0.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/30 transition-all duration-200 group-hover:border-white/[0.1] group-hover:text-white/50"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs text-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
