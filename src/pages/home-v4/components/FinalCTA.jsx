import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";

export default function FinalCTA({ openDemo, scrollTo }) {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />

      {/* Gradient accent */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(ellipse at center, rgba(99,102,241,0.12), transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-indigo-400 font-medium">
            Start Today
          </span>

          <h2 className="mt-4 text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-white via-indigo-200 to-teal-200 bg-clip-text text-transparent">
              Ready to launch your
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
              digital storefront?
            </span>
          </h2>

          <p className="mt-5 text-base md:text-lg text-white/40 max-w-lg mx-auto leading-relaxed">
            Join businesses already using Menugic to display, sell, and manage — all from one beautiful platform.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:brightness-110 group"
            >
              Get Started
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={openDemo}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white/80 transition-all duration-300 hover:bg-white/10 hover:text-white group"
            >
              <FiPlay className="w-5 h-5 group-hover:text-teal-400 transition-colors" />
              See Live Demo
            </button>
          </div>

          <p className="mt-8 text-sm text-white/25">
            No coding needed &middot; Launch in minutes &middot; Built for every business type
          </p>
        </motion.div>
      </div>
    </section>
  );
}
