import React from "react";
import { motion } from "framer-motion";
import { WHY_CARDS } from "../data";

export default function WhyMenugic() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-400 font-medium">
            Why Menugic
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Everything you need
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/40 max-w-xl mx-auto">
            One platform to display, sell, and manage — built for every business type.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* First row: 3 cards */}
          {WHY_CARDS.slice(0, 3).map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-1"
            >
              {/* Hover dot pattern */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div
                  className="absolute inset-0 rounded-2xl"
                  style={{
                    backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "4px 4px",
                  }}
                />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                    <card.icon className="h-5 w-5 text-white/70" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 px-2 py-1 rounded-md border border-white/[0.06]">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white/90 mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {card.text}
                </p>
              </div>
            </motion.div>
          ))}
          {/* Second row: 2 cards centered */}
          <div className="md:col-span-3 flex justify-center gap-4 flex-col md:flex-row">
            {WHY_CARDS.slice(3).map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 3) * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:border-white/[0.12] hover:bg-white/[0.04] hover:-translate-y-1 md:w-[calc(33.333%-0.5rem)]"
              >
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      backgroundImage: "radial-gradient(circle at center, rgba(255,255,255,0.02) 1px, transparent 1px)",
                      backgroundSize: "4px 4px",
                    }}
                  />
                </div>
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04]">
                      <card.icon className="h-5 w-5 text-white/70" />
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/30 px-2 py-1 rounded-md border border-white/[0.06]">
                      {card.tag}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-white/90 mb-2 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm text-white/40 leading-relaxed">
                    {card.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
