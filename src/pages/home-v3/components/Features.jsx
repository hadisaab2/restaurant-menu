import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FEATURE_CARDS } from "../data";
import { fadeUp, slideLeft, slideRight, scaleIn } from "../animations";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

const bentoVariants = [slideLeft, slideLeft, slideRight, slideRight, fadeUp, fadeUp, scaleIn, scaleIn, fadeUp, fadeUp, slideLeft, slideRight];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="features"
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#F9F7FD" }}
    >
      {/* Dot grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(87,0,255,0.08) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="FEATURES"
          title="Everything you need to launch, manage, and grow online"
          subtitle="From digital menus and QR ordering to reporting, branches, and customer management."
        />

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
          {FEATURE_CARDS.map((card, i) => {
            const isLarge = card.size === "large";
            const variant = bentoVariants[i % bentoVariants.length];

            return (
              <GlassCard
                key={card.title}
                variants={variant}
                custom={(i % 4) * 0.06}
                tiltOnHover={isLarge}
                glowOnHover
                className={`${isLarge ? "lg:col-span-2 lg:row-span-2" : ""} border-[#E7E2F4]`}
              >
                <div className={`flex flex-col h-full ${isLarge ? "p-7 md:p-8 min-h-[240px]" : "p-5 min-h-[180px]"}`}>
                  <div
                    className={`${isLarge ? "w-12 h-12 rounded-2xl mb-4" : "w-10 h-10 rounded-xl mb-3"} bg-[#F1EAFF] border border-[#E3D4FF] flex items-center justify-center text-apple-accent shrink-0`}
                  >
                    {isLarge ? (
                      <motion.div
                        animate={inView ? { rotate: [0, 5, -5, 0] } : {}}
                        transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <card.icon size={isLarge ? 22 : 18} />
                      </motion.div>
                    ) : (
                      <card.icon size={18} />
                    )}
                  </div>
                  <h4 className={`${isLarge ? "text-lg" : "text-[1.02rem]"} font-semibold text-apple-text leading-snug shrink-0`}>
                    {card.title}
                  </h4>
                  <p className={`${isLarge ? "text-base" : "text-[0.9rem]"} text-apple-muted mt-2 leading-relaxed flex-1`}>
                    {card.description}
                  </p>
                </div>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
