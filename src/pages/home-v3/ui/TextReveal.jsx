import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function TextReveal({
  text,
  as: Tag = "h1",
  className = "",
  style = {},
  staggerDelay = 0.04,
  highlightWords = [],
  highlightClassName = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap", gap: "0 0.3em", ...style }}>
      {words.map((word, i) => {
        const isHighlight = highlightWords.includes(word.replace(/[.,!?]/g, ""));
        return (
          <span key={i} style={{ overflow: "hidden", display: "inline-block" }}>
            <motion.span
              initial={{ y: "100%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : { y: "100%", opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: i * staggerDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ display: "inline-block" }}
              className={isHighlight ? highlightClassName : ""}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Tag>
  );
}
