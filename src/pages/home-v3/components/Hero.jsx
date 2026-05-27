import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";
import { heroAllScreens, HERO_CHIPS, HERO_TRUST_ITEMS, HERO_ICON_MARKERS } from "../data";
import GradientBlob from "../ui/GradientBlob";
import MagneticButton from "../ui/MagneticButton";
import TextReveal from "../ui/TextReveal";

function FloatingMarker({ icon: Icon, label, posStyle, delay, floatY, dur }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "absolute", ...posStyle, zIndex: 30, pointerEvents: "none" }}
    >
      <motion.div
        animate={{ y: [0, floatY, 0] }}
        transition={{ repeat: Infinity, duration: dur, ease: "easeInOut" }}
        className="flex items-center gap-2 rounded-xl px-3 py-2"
        style={{
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          boxShadow: "0 6px 20px rgba(30,12,64,0.10), 0 1px 4px rgba(30,12,64,0.06)",
          border: "1px solid rgba(87,0,255,0.14)",
          whiteSpace: "nowrap",
        }}
      >
        <div className="w-7 h-7 rounded-lg shrink-0 flex items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(87,0,255,0.08), rgba(87,0,255,0.16))",
            border: "1px solid rgba(87,0,255,0.12)",
          }}
        >
          <Icon size={13} style={{ color: "#5700FF" }} />
        </div>
        <span className="text-[11px] font-semibold text-[#1E0C40] tracking-tight">{label}</span>
      </motion.div>
    </motion.div>
  );
}

export default function Hero({ onGetStarted, onSeeLiveDemo }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const blobY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-20 md:pt-28 md:pb-28 overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #FAF8FF 0%, #F3EEFF 38%, #EAE0FF 68%, #F0ECFF 100%)",
      }}
    >
      {/* Large faint QR code background */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "min(90vw, 700px)",
          height: "min(90vw, 700px)",
          opacity: 0.04,
        }}
      >
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          {/* QR code pattern - stylized large blocks */}
          <rect fill="#5700FF" x="0" y="0" width="256" height="256" rx="16" opacity="0"/>
          {/* Position detection patterns (3 corners) */}
          {/* Top-left */}
          <rect fill="#5700FF" x="8" y="8" width="56" height="56" rx="8"/>
          <rect fill="#FAF8FF" x="16" y="16" width="40" height="40" rx="4"/>
          <rect fill="#5700FF" x="24" y="24" width="24" height="24" rx="2"/>
          {/* Top-right */}
          <rect fill="#5700FF" x="192" y="8" width="56" height="56" rx="8"/>
          <rect fill="#FAF8FF" x="200" y="16" width="40" height="40" rx="4"/>
          <rect fill="#5700FF" x="208" y="24" width="24" height="24" rx="2"/>
          {/* Bottom-left */}
          <rect fill="#5700FF" x="8" y="192" width="56" height="56" rx="8"/>
          <rect fill="#FAF8FF" x="16" y="200" width="40" height="40" rx="4"/>
          <rect fill="#5700FF" x="24" y="208" width="24" height="24" rx="2"/>
          {/* Data modules - scattered pattern */}
          <rect fill="#5700FF" x="80" y="8" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="100" y="8" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="128" y="8" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="160" y="8" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="28" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="112" y="28" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="144" y="28" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="168" y="28" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="48" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="100" y="48" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="128" y="48" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="152" y="48" width="12" height="12" rx="2"/>
          {/* Middle rows */}
          <rect fill="#5700FF" x="8" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="32" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="56" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="112" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="144" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="168" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="200" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="232" y="80" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="8" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="40" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="64" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="96" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="128" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="160" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="192" y="100" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="224" y="100" width="12" height="12" rx="2"/>
          {/* Center area */}
          <rect fill="#5700FF" x="104" y="104" width="48" height="48" rx="8"/>
          <rect fill="#FAF8FF" x="112" y="112" width="32" height="32" rx="4"/>
          <rect fill="#5700FF" x="120" y="120" width="16" height="16" rx="2"/>
          {/* More data rows */}
          <rect fill="#5700FF" x="8" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="32" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="56" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="168" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="200" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="232" y="128" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="8" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="40" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="72" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="104" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="136" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="168" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="200" y="152" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="224" y="152" width="12" height="12" rx="2"/>
          {/* Bottom data rows */}
          <rect fill="#5700FF" x="80" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="104" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="136" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="168" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="200" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="232" y="192" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="216" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="112" y="216" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="144" y="216" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="176" y="216" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="208" y="216" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="80" y="236" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="100" y="236" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="128" y="236" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="160" y="236" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="192" y="236" width="12" height="12" rx="2"/>
          <rect fill="#5700FF" x="224" y="236" width="12" height="12" rx="2"/>
        </svg>
      </div>

      {/* Animated background blobs */}
      <motion.div style={{ y: blobY }} className="absolute inset-0 pointer-events-none">
        <GradientBlob
          color1="rgba(87,0,255,0.12)"
          color2="rgba(139,92,246,0.08)"
          size={720}
          speed="18s"
          style={{ top: "-15%", right: "-10%" }}
        />
        <GradientBlob
          color1="rgba(30,12,64,0.08)"
          color2="rgba(87,0,255,0.06)"
          size={540}
          speed="22s"
          style={{ bottom: "-10%", left: "-8%" }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-[0.9fr_1.25fr] gap-8 xl:gap-12 items-center">

          {/* LEFT: Copy */}
          <div style={{ maxWidth: "520px" }}>
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7"
                style={{
                  background: "linear-gradient(135deg, #F0E9FF, #E8DEFF)",
                  border: "1px solid rgba(87,0,255,0.18)",
                }}
              >
                <span className="w-2 h-2 rounded-full bg-[#5700FF] inline-block"
                  style={{ boxShadow: "0 0 8px rgba(87,0,255,0.5)" }}
                />
                <span className="text-xs font-semibold text-[#5700FF] tracking-wide">
                  Built for food, retail, beauty, gifting, and more
                </span>
              </div>
            </motion.div>

            {/* Headline with word-by-word reveal */}
            <TextReveal
              text="Launch a premium digital catalog, menu, or ordering website for any business type."
              as="h1"
              className="text-[#1E0C40] leading-[1.1]"
              staggerDelay={0.035}
              highlightWords={["digital", "catalog"]}
              highlightClassName="v3-gradient-text"
              style={{
                fontSize: "clamp(2.2rem, 4.15vw, 3.35rem)",
                fontWeight: 800,
                letterSpacing: "-0.038em",
                maxWidth: "16.2ch",
              }}
            />

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-[#5B4A7A] leading-[1.78] max-w-[480px]"
              style={{ fontSize: "1.08rem" }}
            >
              Menugic helps businesses launch polished digital catalogs, QR menus, online ordering, WhatsApp orders, customer action reporting, and easy product management — all from one simple dashboard.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <MagneticButton
                onClick={() => onGetStarted?.()}
                className="rounded-full px-8 py-4 font-semibold text-[0.95rem] text-white flex items-center gap-2 border-none cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, #5700FF 0%, #6D2BFF 100%)",
                  boxShadow: "0 6px 22px rgba(87,0,255,0.32), 0 2px 6px rgba(87,0,255,0.18)",
                }}
                strength={0.2}
              >
                Get Started <FiArrowRight size={16} />
              </MagneticButton>

              <MagneticButton
                onClick={() => onSeeLiveDemo?.()}
                className="rounded-full px-8 py-4 font-semibold text-[0.95rem] text-[#1E0C40] flex items-center gap-2 cursor-pointer"
                style={{
                  border: "1.5px solid rgba(87,0,255,0.22)",
                  background: "rgba(255,255,255,0.80)",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 12px rgba(30,12,64,0.07)",
                }}
                strength={0.15}
              >
                See Live Demo <FiArrowRight size={15} />
              </MagneticButton>
            </motion.div>

            {/* Trust items — staggered typewriter */}
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1.5">
              {HERO_TRUST_ITEMS.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                  className="flex items-center gap-1.5 text-[12.5px] text-[#7B6A9B]"
                >
                  <FiCheck size={12} className="text-[#5700FF] shrink-0" />
                  {t}
                </motion.span>
              ))}
            </div>

            {/* Business chips */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-7 flex flex-wrap gap-2"
            >
              {HERO_CHIPS.map((label, i) => (
                <motion.span
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.85 + i * 0.05 }}
                  className="text-xs font-medium text-[#4A3A6E] rounded-full px-3.5 py-1.5"
                  style={{
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(87,0,255,0.18)",
                    backdropFilter: "blur(6px)",
                    boxShadow: "0 1px 4px rgba(30,12,64,0.06)",
                  }}
                >
                  {label}
                </motion.span>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Hero mockup with parallax */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.78, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center w-full"
          >
            <div className="relative w-full flex justify-center">
              {/* Subtle glow behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] rounded-full pointer-events-none"
                style={{ background: "radial-gradient(ellipse, rgba(87,0,255,0.14) 0%, rgba(87,0,255,0.04) 50%, transparent 70%)" }}
              />

              <motion.div
                style={{ y: imageY }}
                className="relative w-full max-w-[min(100%,720px)] lg:max-w-[860px]"
              >
                <motion.img
                  src={heroAllScreens}
                  alt="Menugic digital menu across devices"
                  className="w-full h-auto block"
                  initial={{ opacity: 0, y: 28, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                />

                {HERO_ICON_MARKERS.map((marker, idx) => (
                  <FloatingMarker
                    key={idx}
                    icon={marker.icon}
                    label={marker.label}
                    posStyle={marker.pos}
                    delay={marker.delay}
                    floatY={marker.floatY}
                    dur={marker.dur}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Gradient text style */}
      <style>{`
        .v3-gradient-text {
          background: linear-gradient(130deg, #5700FF 0%, #7C3AFF 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
}
