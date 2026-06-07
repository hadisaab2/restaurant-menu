import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import { PLANS, VIP_EXCLUSIVE_FEATURES } from "../data";
import { useCountUp } from "../animations";
import SectionHeader from "../ui/SectionHeader";

function PriceCountUp({ price, started }) {
  const count = useCountUp(price, { duration: 1200, started });
  return <>{count}</>;
}

function PlanCard({ plan, i, onGetStarted }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="h-full"
    >
      <div
        className={`relative rounded-2xl border p-8 overflow-hidden h-full flex flex-col transition-all duration-300 ${
          plan.recommended
            ? "bg-[#1E0C40] border-[#1E0C40] text-white shadow-apple-lg"
            : "bg-white border-gray-200 shadow-apple hover:shadow-apple-md"
        }`}
        style={plan.recommended ? {
          // Animated gradient border overlay
        } : undefined}
      >
        {/* Rotating gradient border for VIP */}
        {plan.recommended && (
          <>
            <style>{`
              @keyframes v3-border-rotate {
                from { --v3-angle: 0deg; }
                to { --v3-angle: 360deg; }
              }
            `}</style>
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `conic-gradient(from 0deg, transparent, rgba(87,0,255,0.3), transparent, rgba(139,92,246,0.2), transparent)`,
                animation: "v3-border-rotate 8s linear infinite",
                mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                maskComposite: "exclude",
                WebkitMaskComposite: "xor",
                padding: "2px",
                borderRadius: "1rem",
              }}
            />
          </>
        )}

        {plan.recommended && (
          <span className="absolute top-5 right-5 text-xs bg-white/15 border border-white/20 text-white rounded-full px-3 py-1 font-medium">
            Most Popular
          </span>
        )}

        <h3 className={`text-3xl font-semibold tracking-tight ${plan.recommended ? "text-white" : "text-apple-text"}`}>
          {plan.name}
        </h3>
        <p className={`mt-2 text-sm ${plan.recommended ? "text-white/70" : "text-apple-muted"}`}>
          {plan.tagline}
        </p>

        <div className="mt-7 min-h-[5.5rem] flex items-center">
          <span className={`text-[1.6rem] md:text-[1.8rem] font-bold tracking-tight ${plan.recommended ? "text-white" : "text-apple-accent"}`}>
            Let's talk
          </span>
        </div>

        <ul className="mt-6 space-y-3.5 flex-1">
          {plan.features.map((f, fi) => (
            <motion.li
              key={f}
              className="flex items-start gap-3 text-sm"
              initial={{ opacity: 0, x: -8 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + fi * 0.06 }}
            >
              <FiCheck size={15} className={`mt-0.5 shrink-0 ${plan.recommended ? "text-[#D9C7FF]" : "text-apple-accent"}`} />
              <span className={plan.recommended ? "text-white/88" : "text-apple-text"}>{f}</span>
            </motion.li>
          ))}
          {plan.name === "Premium" &&
            VIP_EXCLUSIVE_FEATURES.map((f) => (
              <li key={`no-${f}`} className="flex items-start gap-3 text-sm">
                <FiX size={15} className="mt-0.5 shrink-0 text-red-500" />
                <span className="text-apple-muted">{f}</span>
              </li>
            ))}
        </ul>

        {plan.supportingLine && (
          <p className="mt-5 pt-5 border-t border-white/12 text-[0.78rem] leading-relaxed text-white/50 shrink-0">
            {plan.supportingLine}
          </p>
        )}

        <button
          type="button"
          onClick={() => onGetStarted?.()}
          className={`${plan.supportingLine ? "mt-6" : "mt-8"} w-full rounded-full py-3.5 font-medium text-sm transition-all shrink-0 border-none cursor-pointer ${
            plan.recommended
              ? "bg-white text-apple-text hover:bg-gray-100"
              : "bg-apple-accent text-white hover:bg-apple-accentHover"
          }`}
        >
          Contact Us
        </button>
      </div>
    </motion.div>
  );
}

export default function Pricing({ onGetStarted }) {
  return (
    <section id="pricing" className="py-24 bg-[#F9F7FD]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="Packages"
          title="Simple, honest pricing"
          subtitle="Two packages built for businesses at different stages of growth."
        />
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <PlanCard key={plan.name} plan={plan} i={i} onGetStarted={onGetStarted} />
          ))}
        </div>
      </div>
    </section>
  );
}
