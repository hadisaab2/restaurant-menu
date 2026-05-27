import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { TEMPLATES, TEMPLATE_DEMO_URLS } from "../data";
import SectionHeader from "../ui/SectionHeader";

function PhoneFrame({ children, className = "" }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="w-52 rounded-[2.5rem] border-4 border-gray-200 bg-white overflow-hidden shadow-apple-lg">
        <div className="h-6 bg-gray-100 flex items-center justify-center">
          <div className="w-20 h-3 rounded-full bg-gray-200" />
        </div>
        {children}
      </div>
    </div>
  );
}

export default function Templates() {
  const [active, setActive] = useState(0);
  const [failedVideos, setFailedVideos] = useState({});
  const currentTemplate = TEMPLATES[active];

  useEffect(() => {
    setFailedVideos((prev) => ({ ...prev, [currentTemplate.id]: false }));
  }, [currentTemplate.id]);

  return (
    <section
      id="templates"
      className="relative py-24 overflow-hidden"
    >
      {/* Dynamic background that crossfades with template accent */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentTemplate.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(180deg, #FBFAFF 0%, ${currentTemplate.accent}08 40%, ${currentTemplate.accent}05 70%, #F5F1F2 100%)`,
          }}
        />
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="TEMPLATES"
          title="Four distinct templates. One powerful platform."
          subtitle="Each template is a complete storefront experience designed for a different business style — not just a color change."
        />

        {/* Tab switcher with sliding indicator */}
        <div
          className="flex justify-center mb-12 flex-wrap gap-1.5 p-1.5 rounded-2xl mx-auto w-fit"
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1px solid rgba(87,0,255,0.1)",
            boxShadow: "0 6px 20px rgba(30,12,64,0.06)",
            backdropFilter: "blur(12px)",
          }}
          role="tablist"
        >
          {TEMPLATES.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setActive(i)}
              role="tab"
              aria-selected={active === i}
              className="relative px-5 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200"
              style={{
                color: active === i ? "#1E0C40" : "#5B4A7A",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {active === i && (
                <motion.div
                  layoutId="v3-template-tab"
                  className="absolute inset-0 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 4px 12px rgba(30,12,64,0.08), inset 0 0 0 1px rgba(87,0,255,0.18)",
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.name}</span>
            </button>
          ))}
        </div>

        {/* Active template showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTemplate.id}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: Phone video */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Accent color glow */}
                <motion.div
                  className="absolute inset-0 rounded-[3rem] blur-2xl -z-10 scale-90"
                  style={{ background: `linear-gradient(135deg, ${currentTemplate.accent}44, ${currentTemplate.accent}18)` }}
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <PhoneFrame className="scale-[1.02] sm:scale-[1.1] origin-center">
                    <div
                      className="w-full overflow-hidden relative"
                      style={{
                        height: "clamp(360px, 48vw, 460px)",
                        background: "linear-gradient(180deg, #f6f3ff 0%, #ece4ff 100%)",
                        border: `1px solid ${currentTemplate.accent}22`,
                      }}
                    >
                      {!failedVideos[currentTemplate.id] ? (
                        <video
                          key={currentTemplate.id}
                          src={currentTemplate.videoSrc}
                          autoPlay
                          muted
                          loop
                          playsInline
                          preload="auto"
                          onError={() => setFailedVideos((prev) => ({ ...prev, [currentTemplate.id]: true }))}
                          className="w-full h-full object-cover block"
                        />
                      ) : (
                        <img
                          src={currentTemplate.posterSrc}
                          alt={`${currentTemplate.name} preview`}
                          className="w-full h-full object-cover block"
                        />
                      )}
                    </div>
                  </PhoneFrame>
                </motion.div>
              </div>
            </div>

            {/* Right: Template info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="space-y-4 rounded-3xl p-7 border border-white/60 bg-white/70 backdrop-blur-xl"
              style={{
                boxShadow: "0 12px 36px rgba(30,12,64,0.08), inset 0 1px 0 rgba(255,255,255,0.8)",
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{ background: currentTemplate.accent }} />
                <h3 className="text-3xl font-semibold text-apple-text">{currentTemplate.name}</h3>
              </div>
              <p className="text-apple-muted leading-relaxed">{currentTemplate.desc}</p>
              <p className="text-sm text-apple-muted">
                <span className="font-medium text-apple-text">Best for: </span>
                {currentTemplate.bestFor}
              </p>
              <div className="pt-2 space-y-2.5">
                {currentTemplate.highlights.map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.25 + i * 0.08 }}
                    className="flex items-center gap-2.5 text-sm text-[#4B3B6C]"
                  >
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + i * 0.08, type: "spring", stiffness: 500 }}
                    >
                      <FiCheck size={14} style={{ color: currentTemplate.accent }} />
                    </motion.span>
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-3 pt-3">
                <button
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${currentTemplate.accent} 0%, #5700FF 100%)`,
                    boxShadow: "0 8px 20px rgba(87,0,255,0.2)",
                  }}
                  onClick={() => {
                    const url = TEMPLATE_DEMO_URLS[currentTemplate.id];
                    if (url) window.open(url, "_blank", "noopener,noreferrer");
                  }}
                >
                  Explore Template <FiArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
