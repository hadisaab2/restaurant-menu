import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { STATS } from "../data";

function AnimatedNumber({ value, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const num = parseInt(value) || 0;
    const dur = 1200;
    const steps = 40;
    const inc = num / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += inc;
      if (current >= num) {
        setDisplay(num);
        clearInterval(interval);
      } else {
        setDisplay(Math.floor(current));
      }
    }, dur / steps);
    return () => clearInterval(interval);
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString()}{suffix}</span>;
}

export default function TrustStrip() {
  return (
    <section
      className="relative py-12 md:py-16 border-t border-b border-[#EDE7F5]/60"
      style={{
        background: "linear-gradient(180deg, #F8F6FF 0%, #F3EEFF 50%, #F8F6FF 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#5700FF] to-[#8B5CF6] bg-clip-text text-transparent">
                <AnimatedNumber value={String(s.target || s.value || "0").replace(/[^0-9]/g, "")} suffix={s.suffix || String(s.value || "").replace(/[0-9]/g, "")} />
              </div>
              <div className="text-xs md:text-sm text-apple-muted mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
