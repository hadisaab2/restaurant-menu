import React, { useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SocialProof from "./components/SocialProof";
import Templates from "./components/Templates";
import WhyMenugic from "./components/WhyMenugic";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import ContactLead from "./components/ContactLead";
import Footer from "./components/Footer";
import { TEMPLATE_DEMO_URLS } from "./data";

function LiveDemoModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative mx-4 w-full max-w-md rounded-2xl border border-white/10 bg-[#111] p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-white/40 hover:text-white transition-colors text-xl leading-none"
        >
          &times;
        </button>
        <h3 className="mb-2 text-xl font-bold text-white">Live Demos</h3>
        <p className="mb-6 text-sm text-white/50">
          See Menugic in action on real businesses.
        </p>
        <div className="space-y-3">
          {Object.entries(TEMPLATE_DEMO_URLS).map(([id, url]) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-medium text-white/80 transition-all hover:border-indigo-500/30 hover:bg-indigo-500/10 hover:text-white"
            >
              <span className="capitalize">{id.replace(/-/g, " ")}</span>
              <span className="text-white/30">&rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeV4() {
  const [demoOpen, setDemoOpen] = useState(false);

  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  const openDemo = useCallback(() => setDemoOpen(true), []);

  return (
    <div className="min-h-screen bg-[#030303] font-sans antialiased">
      <LiveDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      <Navbar scrollTo={scrollTo} />
      <Hero openDemo={openDemo} scrollTo={scrollTo} />
      <SocialProof />
      <Templates openDemo={openDemo} />
      <WhyMenugic />
      <Features />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <FinalCTA openDemo={openDemo} scrollTo={scrollTo} />
      <ContactLead />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
