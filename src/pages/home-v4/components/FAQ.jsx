import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FAQS } from "../data";

function FAQItem({ q, a, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="border-b border-white/[0.06] last:border-b-0"
    >
      <button
        onClick={toggle}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-white group"
      >
        <span className="text-base font-medium text-white/80 pr-4 group-hover:text-white transition-colors">
          {q}
        </span>
        <div className="relative flex-shrink-0 h-5 w-5 text-white/40">
          <FiPlus
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-0 rotate-90" : "opacity-100 rotate-0"
            }`}
          />
          <FiMinus
            className={`absolute inset-0 transition-all duration-300 ${
              isOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-white/40 leading-relaxed max-w-2xl">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#050510] to-[#030303]" />

      <div className="relative z-10 mx-auto max-w-2xl px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-teal-400 font-medium">
            FAQ
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Common questions
          </h2>
        </div>

        {/* Accordion */}
        <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm px-6">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              q={faq.q}
              a={faq.a}
              index={i}
              isOpen={openIndex === i}
              toggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
