import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiArrowRight } from "react-icons/fi";
import { TEMPLATES, TEMPLATE_DEMO_URLS } from "../data";

export default function Templates({ openDemo }) {
  const [active, setActive] = useState(0);
  const template = TEMPLATES[active];
  const videoRef = useRef(null);

  return (
    <section id="templates" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">
            Templates
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Choose your style
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/40 max-w-xl mx-auto">
            Four premium templates designed for different business styles.
          </p>
        </div>

        {/* Tab switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {TEMPLATES.map((t, i) => (
            <button
              key={t.id}
              onClick={() => setActive(i)}
              className={`relative rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-white/10 text-white border border-white/10"
                  : "text-white/40 hover:text-white/60 border border-transparent"
              }`}
            >
              {active === i && (
                <motion.div
                  layoutId="tab-bg"
                  className="absolute inset-0 rounded-xl border border-white/10 bg-white/[0.06]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: t.accent }}
                />
                {t.name}
              </span>
            </button>
          ))}
        </div>

        {/* Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={template.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
          >
            {/* Phone frame */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Glow */}
                <div
                  className="absolute -inset-6 rounded-[3rem] opacity-20 blur-3xl"
                  style={{ backgroundColor: template.accent }}
                />
                {/* Phone */}
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative rounded-[2.5rem] border-4 border-white/10 bg-[#111] p-2 shadow-2xl overflow-hidden"
                  style={{ width: "clamp(260px, 45vw, 320px)", height: "clamp(520px, 80vw, 640px)" }}
                >
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 h-6 w-28 rounded-b-2xl bg-[#111]" />
                  <video
                    ref={videoRef}
                    src={template.videoSrc}
                    poster={template.posterSrc}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full rounded-[2rem] object-cover"
                  />
                </motion.div>
              </div>
            </div>

            {/* Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: template.accent }}
                />
                <h3 className="text-2xl font-bold text-white">{template.name}</h3>
              </div>
              <p className="text-white/50 mb-3 text-base">{template.desc}</p>
              <p className="text-xs text-white/30 uppercase tracking-wider mb-6">
                Best for: {template.bestFor}
              </p>

              <ul className="space-y-3 mb-8">
                {template.highlights.map((h, i) => (
                  <motion.li
                    key={h}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 text-white/60"
                  >
                    <FiCheck className="text-teal-400 flex-shrink-0" />
                    <span className="text-sm">{h}</span>
                  </motion.li>
                ))}
              </ul>

              <a
                href={TEMPLATE_DEMO_URLS[template.id]}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition-all group"
                style={{ backgroundColor: template.accent }}
              >
                View Live Demo
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
