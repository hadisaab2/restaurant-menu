import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { FAQS } from "../data";
import SectionHeader from "../ui/SectionHeader";

function FAQItem({ item, isOpen, onToggle, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div
        className={`rounded-2xl overflow-hidden border transition-all duration-300 ${
          isOpen
            ? "border-transparent bg-gradient-to-b from-white via-[#FDFBFF] to-[#F9F6FC] shadow-[0_10px_36px_-14px_rgba(95,60,150,0.09)]"
            : "border-[#EDE9F4]/90 bg-white shadow-[0_1px_8px_rgba(30,12,64,0.035)] hover:border-[#E4DCF2] hover:shadow-[0_6px_22px_-8px_rgba(30,12,64,0.06)]"
        }`}
      >
        {/* Accent left border on hover */}
        <div className="relative">
          <motion.div
            className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full bg-apple-accent origin-top"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: isOpen ? 1 : 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          />

          <button
            type="button"
            className={`w-full text-left px-8 flex items-start justify-between gap-4 transition-all duration-300 ${
              isOpen ? "pt-6 pb-4" : "py-6 hover:bg-[#FBFAFD]/80"
            }`}
            style={{ background: "none", border: "none", cursor: "pointer" }}
            onClick={onToggle}
            aria-expanded={isOpen}
          >
            <span className="font-medium text-apple-text text-[1.02rem] leading-snug pr-2">{item.q}</span>
            <motion.span
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="shrink-0 mt-0.5"
            >
              <FiChevronDown
                size={20}
                strokeWidth={1.85}
                className={isOpen ? "text-[#8B6FC8]" : "text-apple-muted/85"}
              />
            </motion.span>
          </button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.33, 0.11, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="mx-8 border-t border-[#E8E0F0]/55" />
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="px-8 pb-8 pt-5 text-[0.93rem] leading-[1.65] text-apple-muted/88"
              >
                {item.a}
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-28 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionHeader
          title="Frequently asked questions"
          titleClassName="max-w-2xl !text-2xl md:!text-[2.15rem] !leading-snug"
        />
        <div className="space-y-3">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
