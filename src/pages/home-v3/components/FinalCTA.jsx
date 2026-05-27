import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import GradientBlob from "../ui/GradientBlob";
import MagneticButton from "../ui/MagneticButton";
import SectionHeader from "../ui/SectionHeader";

export default function FinalCTA({ onGetStarted, onSeeLiveDemo }) {
  return (
    <section className="py-28 md:py-32 bg-[#F9F7FD]">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative overflow-hidden rounded-3xl border border-[#E8E2F3]/70 p-12 md:p-16"
            style={{
              background: "linear-gradient(to bottom, white, #FDFBFF, #F6F2FA)",
              boxShadow: "0 24px 56px -28px rgba(95,55,140,0.14), 0 8px 32px -12px rgba(30,12,64,0.07), inset 0 1px 0 rgba(255,255,255,0.85)",
            }}
          >
            {/* Background blobs */}
            <GradientBlob
              color1="rgba(139,92,246,0.12)"
              color2="rgba(87,0,255,0.06)"
              size={400}
              speed="16s"
              style={{ top: "-40%", left: "50%", transform: "translateX(-50%)" }}
            />

            <div className="relative z-10">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-apple-accent mb-5">
                START TODAY
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-semibold tracking-tight text-apple-text leading-[1.12] max-w-[22rem] sm:max-w-3xl mx-auto">
                Build a digital experience your customers will remember
              </h2>
              <p className="mt-6 text-base md:text-lg text-apple-muted max-w-xl mx-auto leading-relaxed">
                Create a polished menu, catalog, or ordering website with premium templates, easy management, and smarter ordering.
              </p>

              <div className="mt-10 flex gap-3 justify-center flex-wrap">
                <MagneticButton
                  onClick={() => onGetStarted?.()}
                  className="bg-apple-accent text-white rounded-full px-9 py-4 text-[0.95rem] font-medium flex items-center justify-center gap-2 min-h-[3.25rem] border-none cursor-pointer"
                  style={{
                    boxShadow: "0 4px 20px -2px rgba(87,0,255,0.38)",
                  }}
                >
                  Get Started <FiArrowRight size={18} />
                </MagneticButton>

                <MagneticButton
                  onClick={() => onSeeLiveDemo?.()}
                  className="rounded-full border border-[#E4DCF0] bg-white/75 px-9 py-4 text-[0.95rem] font-medium text-apple-text min-h-[3.25rem] cursor-pointer"
                  style={{ backdropFilter: "blur(2px)" }}
                  strength={0.15}
                >
                  See Live Demo
                </MagneticButton>
              </div>

              <p className="mt-9 text-[0.8125rem] md:text-sm text-apple-muted/88 max-w-md mx-auto leading-relaxed tracking-wide">
                No coding needed • Launch in minutes • Built for every business type
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
