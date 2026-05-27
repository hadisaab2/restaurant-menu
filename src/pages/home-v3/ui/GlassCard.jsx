import React, { useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";

export default function GlassCard({
  children,
  className = "",
  tiltOnHover = false,
  glowOnHover = true,
  variants,
  custom,
  delay = 0,
}) {
  const ref = useRef(null);
  const cardRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback(
    (e) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      if (tiltOnHover) {
        setTilt({
          rotateX: (y - 0.5) * -8,
          rotateY: (x - 0.5) * 8,
        });
      }
      if (glowOnHover) {
        setGlowPos({ x: x * 100, y: y * 100 });
      }
    },
    [tiltOnHover, glowOnHover]
  );

  const handleMouseLeave = useCallback(() => {
    setTilt({ rotateX: 0, rotateY: 0 });
    setIsHovered(false);
  }, []);

  return (
    <div ref={ref}>
      <motion.div
        ref={cardRef}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={variants}
        custom={custom ?? delay}
        className={`relative overflow-hidden rounded-2xl border border-white/40 backdrop-blur-xl ${className}`}
        style={{
          background: "rgba(255,255,255,0.75)",
          boxShadow: isHovered
            ? "0 16px 40px rgba(30,12,64,0.12), 0 4px 12px rgba(30,12,64,0.06)"
            : "0 8px 24px rgba(30,12,64,0.07), 0 2px 6px rgba(30,12,64,0.04)",
          transform: tiltOnHover
            ? `perspective(800px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`
            : undefined,
          transition: "box-shadow 0.25s ease, transform 0.2s ease",
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
      >
        {glowOnHover && isHovered && (
          <div
            className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300"
            style={{
              background: `radial-gradient(500px circle at ${glowPos.x}% ${glowPos.y}%, rgba(87,0,255,0.07), transparent 40%)`,
              opacity: isHovered ? 1 : 0,
            }}
          />
        )}
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
}
