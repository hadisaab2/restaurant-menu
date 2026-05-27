import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiPlay } from "react-icons/fi";
import { heroAllScreens, STATS } from "../data";
import { useCountUp, useSectionInView } from "../animations";

const FloatingShape = ({ delay = 0, duration = 20, children, className = "" }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0.3, 0.6, 0.3],
      scale: [1, 1.2, 1],
      rotate: [0, 180, 360],
    }}
    transition={{ duration, delay, repeat: Infinity, ease: "linear" }}
  >
    {children}
  </motion.div>
);

function StatItem({ target, suffix, label, delay: d }) {
  const { ref, inView } = useSectionInView("-40px");
  const count = useCountUp(target, { duration: 1600, delay: d, started: inView });
  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-400 to-teal-400 bg-clip-text text-transparent mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm md:text-base">{label}</div>
    </div>
  );
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Hero({ openDemo, scrollTo }) {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden flex items-center justify-center">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#030303] via-[#0a0a1a] to-[#030303]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at top, rgba(99,102,241,0.08), transparent 60%)" }} />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: "linear-gradient(to right, rgba(128,128,128,0.07) 1px, transparent 1px), linear-gradient(to bottom, rgba(128,128,128,0.07) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating geometric shapes */}
      <FloatingShape delay={0} duration={25} className="top-20 left-[5%] w-32 h-32">
        <div className="w-full h-full border-2 border-indigo-500/30 rounded-3xl rotate-45 bg-indigo-500/5" />
      </FloatingShape>
      <FloatingShape delay={2} duration={30} className="top-40 right-[8%] w-24 h-24">
        <div className="w-full h-full border-2 border-teal-500/30 rounded-full bg-teal-500/5" />
      </FloatingShape>
      <FloatingShape delay={4} duration={28} className="bottom-32 left-1/4 w-20 h-20">
        <div className="w-full h-full border-2 border-cyan-500/30 bg-cyan-500/5" />
      </FloatingShape>
      <FloatingShape delay={1} duration={22} className="bottom-20 right-1/3 w-28 h-28">
        <div className="w-full h-full border-2 border-rose-500/30 rounded-2xl bg-rose-500/5" />
      </FloatingShape>
      <FloatingShape delay={3} duration={26} className="top-1/3 right-[5%] w-16 h-16">
        <div className="w-full h-full border-2 border-indigo-500/30 rounded-full bg-indigo-500/5" />
      </FloatingShape>
      <FloatingShape delay={5} duration={24} className="bottom-1/4 left-[6%] w-36 h-36">
        <div className="w-full h-full border-2 border-violet-500/30 rounded-3xl rotate-12 bg-violet-500/5" />
      </FloatingShape>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div variants={badgeVariants} className="flex justify-center mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            Digital Menu &amp; Storefront Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.05] tracking-tight"
        >
          <span className="bg-gradient-to-r from-white via-indigo-100 to-teal-100 bg-clip-text text-transparent">
            Your Business,
          </span>
          <br />
          <span className="bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300 bg-clip-text text-transparent">
            One Beautiful Storefront
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-white/40 mb-10 max-w-2xl mx-auto leading-relaxed font-light tracking-wide"
        >
          Create a stunning digital menu, product catalog, or online storefront for any business.
          Accept orders through WhatsApp, delivery, or pickup — all from one platform.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-teal-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:brightness-110 group"
          >
            Get Started
            <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={openDemo}
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold text-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:text-white group"
          >
            <FiPlay className="w-5 h-5 group-hover:text-teal-400 transition-colors" />
            See Live Demo
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="mt-14 flex flex-wrap justify-center gap-8 md:gap-12 text-white/40"
        >
          {STATS.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 200} />
          ))}
        </motion.div>

        {/* Hero mockup image */}
        <motion.div
          variants={itemVariants}
          className="mt-16 relative"
        >
          {/* Glow behind image */}
          <div
            className="absolute -inset-10 opacity-20 blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(ellipse at center, rgba(99,102,241,0.3), transparent 70%)" }}
          />
          <div className="relative mx-auto max-w-4xl">
            {/* Gradient fade at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030303] to-transparent z-10 pointer-events-none" />
            <img
              src={heroAllScreens}
              alt="Menugic on all devices"
              className="w-full h-auto rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/40"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
