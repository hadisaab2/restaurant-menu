import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HOW_IT_WORKS } from "../data";
import { useSectionInView } from "../animations";

function StepCard({ step, title, text, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Step circle */}
      <div className="relative mb-5">
        <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/[0.08] bg-[#0a0a0a]">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 + index * 0.15, type: "spring", stiffness: 400, damping: 15 }}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-teal-600"
          >
            <span className="text-sm font-bold text-white">{step}</span>
          </motion.div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-sm text-white/40 max-w-[220px] leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const { ref, inView } = useSectionInView("-100px");

  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-medium">
            How It Works
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Launch in four steps
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/40 max-w-xl mx-auto">
            From setup to receiving orders — it only takes minutes.
          </p>
        </div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Desktop connector line */}
          <div className="hidden md:block absolute top-7 left-[12%] right-[12%] h-[2px] bg-white/[0.06]">
            <motion.div
              className="h-full bg-gradient-to-r from-indigo-600 to-teal-600 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {HOW_IT_WORKS.map((item, i) => (
              <StepCard key={item.step} {...item} index={i} />
            ))}
          </div>

          {/* Mobile connector */}
          <div className="md:hidden absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/[0.06] -z-10">
            <motion.div
              className="w-full bg-gradient-to-b from-indigo-600 to-teal-600 origin-top"
              initial={{ scaleY: 0 }}
              animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
              style={{ height: "100%" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
