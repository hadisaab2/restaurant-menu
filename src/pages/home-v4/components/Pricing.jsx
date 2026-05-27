import React from "react";
import { motion } from "framer-motion";
import { FiCheck, FiX } from "react-icons/fi";
import { PLANS, VIP_EXCLUSIVE_FEATURES } from "../data";
import { useCountUp, useSectionInView } from "../animations";

function PriceDisplay({ price }) {
  const { ref, inView } = useSectionInView("-40px");
  const count = useCountUp(price, { duration: 1200, started: inView });
  return (
    <span ref={ref} className="text-5xl md:text-6xl font-black leading-none">
      ${count}
    </span>
  );
}

const bgShapes = {
  indigo: () => (
    <motion.svg
      width="320" height="384" viewBox="0 0 320 384" fill="none"
      variants={{ hover: { scale: 1.5 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="absolute inset-0 z-0"
    >
      <motion.circle
        variants={{ hover: { scaleY: 0.5, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160" cy="115" r="100" fill="rgba(255,255,255,0.08)"
      />
      <motion.ellipse
        variants={{ hover: { scaleY: 2.25, y: -25 } }}
        transition={{ duration: 1, ease: "backInOut", delay: 0.2 }}
        cx="160" cy="265" rx="100" ry="44" fill="rgba(255,255,255,0.08)"
      />
    </motion.svg>
  ),
  rose: () => (
    <motion.svg
      width="320" height="384" viewBox="0 0 320 384" fill="none"
      variants={{ hover: { scale: 1.05 } }}
      transition={{ duration: 1, ease: "backInOut" }}
      className="absolute inset-0 z-0"
    >
      <motion.rect
        x="14" width="153" height="153" rx="15" fill="rgba(255,255,255,0.08)"
        variants={{ hover: { y: 219, rotate: "90deg", scaleX: 2 } }}
        style={{ y: 12 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
      <motion.rect
        x="155" width="153" height="153" rx="15" fill="rgba(255,255,255,0.08)"
        variants={{ hover: { y: 12, rotate: "90deg", scaleX: 2 } }}
        style={{ y: 219 }}
        transition={{ delay: 0.2, duration: 1, ease: "backInOut" }}
      />
    </motion.svg>
  ),
};

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[#030303]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-rose-400 font-medium">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-white tracking-tight">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-base md:text-lg text-white/40 max-w-xl mx-auto">
            Choose the plan that fits your business needs.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-5">
          {PLANS.map((plan, i) => {
            const BGShape = bgShapes[plan.color];
            const isVip = plan.recommended;
            return (
              <motion.div
                key={plan.name}
                whileHover="hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: "easeOut" }}
                variants={{ hover: { scale: 1.03 } }}
                className={`relative shrink-0 overflow-hidden rounded-2xl p-8 shadow-lg transition-shadow hover:shadow-xl ${
                  isVip
                    ? "bg-gradient-to-br from-rose-600 to-pink-700 w-full md:w-80"
                    : "bg-gradient-to-br from-indigo-600 to-indigo-800 w-full md:w-72"
                }`}
              >
                {isVip && (
                  <span className="absolute top-4 right-4 z-10 rounded-full bg-white/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/20">
                    Most Popular
                  </span>
                )}

                <div className="relative z-10 text-white">
                  <span className="mb-3 block w-fit rounded-full bg-white/20 backdrop-blur-sm px-3 py-0.5 text-sm font-medium border border-white/20">
                    {plan.name}
                  </span>

                  <motion.div
                    initial={{ scale: 0.85 }}
                    variants={{ hover: { scale: 1 } }}
                    transition={{ duration: 1, ease: "backInOut" }}
                    className="my-3 origin-top-left"
                  >
                    <PriceDisplay price={plan.price} />
                    <span className="text-lg text-white/70">/year</span>
                  </motion.div>

                  <p className="text-sm text-white/80 mb-6">{plan.tagline}</p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((f, fi) => (
                      <motion.li
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + fi * 0.06 }}
                        className="flex items-center gap-2 text-sm text-white/90"
                      >
                        <FiCheck className="flex-shrink-0 text-white/70" />
                        {f}
                      </motion.li>
                    ))}
                    {/* Show VIP exclusions on Premium */}
                    {!isVip &&
                      VIP_EXCLUSIVE_FEATURES.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-white/30">
                          <FiX className="flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                  </ul>
                </div>

                <button className="relative z-10 w-full rounded-lg border-2 border-white bg-white py-2.5 text-center text-sm font-bold uppercase text-neutral-800 transition-all duration-200 hover:bg-white/10 hover:text-white hover:border-white/80">
                  Get Started
                </button>

                {BGShape && <BGShape />}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
