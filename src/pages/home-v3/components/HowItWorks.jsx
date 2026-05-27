import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { HOW_IT_WORKS } from "../data";
import SectionHeader from "../ui/SectionHeader";

function TimelineStep({ step, i, total, sectionProgress }) {
  const threshold = i / total;
  const stepRef = useRef(null);
  const inView = useInView(stepRef, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={stepRef}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="relative z-10 text-center flex flex-col items-center"
    >
      {/* Step circle */}
      <div className="relative mb-5">
        {/* Background circle */}
        <div className="w-14 h-14 rounded-full bg-[#F1EAFF] border-2 border-white shadow-apple flex items-center justify-center">
          <span className="text-apple-accent font-bold text-sm">{step.step}</span>
        </div>
        {/* Animated fill overlay */}
        <motion.div
          className="absolute inset-0 rounded-full flex items-center justify-center"
          initial={{ scale: 0, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ delay: 0.3 + i * 0.12, type: "spring", stiffness: 400, damping: 15 }}
          style={{
            background: "linear-gradient(135deg, #5700FF, #7C3AFF)",
          }}
        >
          <span className="text-white font-bold text-sm">{step.step}</span>
        </motion.div>
      </div>

      <motion.h4
        className="font-semibold text-apple-text text-[1.05rem]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.4 + i * 0.12 }}
      >
        {step.title}
      </motion.h4>
      <motion.p
        className="text-apple-muted text-sm mt-3 leading-relaxed max-w-[220px]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.5 + i * 0.12 }}
      >
        {step.text}
      </motion.p>
    </motion.div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.6"],
  });

  return (
    <section ref={sectionRef} id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeader
          eyebrow="How it works"
          title="From setup to first order in minutes"
          subtitle="A simple, focused flow that gets your business live quickly and professionally."
        />

        <div className="relative mt-8">
          {/* Animated connector line (desktop) */}
          <div className="hidden md:block absolute top-7 left-[12.5%] right-[12.5%] h-[2px] z-0">
            <div className="w-full h-full bg-[#EDE7F5] rounded-full" />
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full origin-left"
              style={{
                background: "linear-gradient(90deg, #5700FF, #7C3AFF)",
                scaleX: scrollYProgress,
              }}
            />
          </div>

          {/* Vertical connector (mobile) */}
          <div className="md:hidden absolute top-7 left-7 bottom-7 w-[2px] z-0">
            <div className="w-full h-full bg-[#EDE7F5] rounded-full" />
            <motion.div
              className="absolute top-0 left-0 w-full rounded-full origin-top"
              style={{
                background: "linear-gradient(180deg, #5700FF, #7C3AFF)",
                scaleY: scrollYProgress,
              }}
            />
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-8 md:gap-6">
            {HOW_IT_WORKS.map((step, i) => (
              <TimelineStep
                key={step.step}
                step={step}
                i={i}
                total={HOW_IT_WORKS.length}
                sectionProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
