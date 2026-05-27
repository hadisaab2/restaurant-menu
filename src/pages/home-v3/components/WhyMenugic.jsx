import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WHY_CARDS } from "../data";
import { fadeBlur } from "../animations";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

export default function WhyMenugic() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const topRow = WHY_CARDS.slice(0, 3);
  const bottomRow = WHY_CARDS.slice(3);

  const renderCard = (c, i) => (
    <GlassCard
      key={c.title}
      variants={fadeBlur}
      custom={i * 0.08}
      tiltOnHover
      glowOnHover
      className="h-full border-[#E9E3F5] p-7 md:p-8"
    >
      <div className="flex flex-col h-full">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#F5EEFF] to-[#EEE3FF] border border-[#E4D7FF] flex items-center justify-center text-apple-accent mb-5 shadow-[0_3px_9px_rgba(87,0,255,0.07)]">
          <c.icon size={19} />
        </div>
        <h3 className="font-semibold text-apple-text text-[1.03rem] leading-snug tracking-tight text-balance">
          {c.title}
        </h3>
        <p className="text-apple-muted text-[0.9rem] mt-3.5 leading-relaxed text-pretty">{c.text}</p>
      </div>
    </GlassCard>
  );

  return (
    <section ref={ref} className="relative py-24 overflow-hidden bg-white">
      {/* Parallax gradient mesh */}
      <div className="pointer-events-none absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full opacity-40"
        style={{ background: "radial-gradient(circle, rgba(87,0,255,0.08) 0%, transparent 60%)" }}
      />
      <div className="pointer-events-none absolute -left-24 bottom-0 w-[400px] h-[400px] rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 60%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="WHY MENUGIC"
          title="A complete platform for selling beautifully online"
          variant="blur"
          titleClassName="md:text-[2.7rem]"
        />
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="space-y-5 mt-2"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRow.map((c, i) => renderCard(c, i))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:max-w-[68%] lg:max-w-[64%] mx-auto">
            {bottomRow.map((c, i) => renderCard(c, i + topRow.length))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
