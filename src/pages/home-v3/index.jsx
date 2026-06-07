import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiArrowRight, FiX } from "react-icons/fi";
import { TEMPLATES, TEMPLATE_DEMO_URLS } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustStrip from "./components/TrustStrip";
import Templates from "./components/Templates";
import WhyMenugic from "./components/WhyMenugic";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ContactLead from "./components/ContactLead";
import Footer from "./components/Footer";
import DashboardShowcase from "./components/DashboardShowcase";

function LiveDemoModal({ open, onClose }) {
  const openDemo = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(30, 12, 64, 0.42)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-[1.35rem] border border-[#E4DCF0]"
            style={{
              background: "linear-gradient(to bottom, white, #FDFBFF, #F6F2FA)",
              boxShadow: "0 28px 64px -24px rgba(95,55,140,0.35), 0 12px 40px -20px rgba(30,12,64,0.12)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#EDE7F5] px-6 py-5">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-apple-accent">Live demo</p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-apple-text sm:text-xl">
                  Choose a template to preview
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-apple-muted">Opens a real storefront in a new tab.</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8E2EF] bg-white/90 text-apple-text transition-colors hover:border-[#D4C8E8] hover:bg-[#FAF8FF] cursor-pointer"
              >
                <FiX size={18} />
              </button>
            </div>
            <div className="max-h-[min(52vh,420px)] overflow-y-auto px-5 py-4 sm:px-6">
              <ul className="space-y-2.5">
                {TEMPLATES.map((t, i) => {
                  const url = TEMPLATE_DEMO_URLS[t.id];
                  return (
                    <motion.li
                      key={t.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.06 }}
                    >
                      <button
                        type="button"
                        disabled={!url}
                        onClick={() => openDemo(url)}
                        className="flex w-full items-center gap-3 rounded-2xl border border-[#E8E2F0] bg-white/90 px-4 py-3.5 text-left transition-all hover:border-[#C9B8E8] hover:bg-[#FAF8FF] hover:shadow-[0_6px_20px_-10px_rgba(87,0,255,0.18)] disabled:cursor-not-allowed disabled:opacity-45 cursor-pointer"
                        style={{ fontFamily: "inherit" }}
                      >
                        <span className="h-10 w-1 shrink-0 rounded-full" style={{ background: t.accent }} />
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-apple-text">{t.name}</span>
                          <span className="mt-0.5 block text-xs text-apple-muted line-clamp-2">{t.desc}</span>
                        </span>
                        <FiArrowRight className="shrink-0 text-apple-accent opacity-80" size={18} />
                      </button>
                    </motion.li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function HomeV3() {
  const [demoOpen, setDemoOpen] = useState(false);
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-apple-text">
      <Navbar onGetStarted={scrollToContact} />
      <Hero onGetStarted={scrollToContact} onSeeLiveDemo={() => setDemoOpen(true)} />
      <TrustStrip />
      <Templates />
      <WhyMenugic />
      <DashboardShowcase />
      <HowItWorks />
      <Pricing onGetStarted={scrollToContact} />
      <FAQ />
      <FinalCTA onGetStarted={scrollToContact} onSeeLiveDemo={() => setDemoOpen(true)} />
      <ContactLead />
      <Footer />
      <LiveDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
