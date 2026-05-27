import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, fadeBlur } from "../animations";

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  variant = "fadeUp",
  titleClassName = "",
  subtitleClassName = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const variants = variant === "blur" ? fadeBlur : fadeUp;
  const align = center ? "text-center items-center" : "items-start";

  return (
    <div ref={ref} className={`flex flex-col ${align} mb-14`}>
      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={variants}
        custom={0}
      >
        {eyebrow && (
          <p className="text-xs font-semibold tracking-widest uppercase text-apple-accent mb-3">
            {eyebrow}
          </p>
        )}
        <h2
          className={`text-3xl md:text-5xl font-semibold tracking-tight text-apple-text leading-tight max-w-3xl ${
            center ? "text-center" : ""
          } ${titleClassName}`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-4 text-apple-muted text-lg max-w-2xl leading-relaxed ${
              center ? "text-center" : ""
            } ${subtitleClassName}`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
