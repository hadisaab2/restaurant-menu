import React from "react";
import { motion } from "framer-motion";
import { useMagnetic } from "../animations";

export default function MagneticButton({
  children,
  onClick,
  className = "",
  style = {},
  strength = 0.25,
  as = "button",
  ...props
}) {
  const { ref, x, y, handleMouseMove, handleMouseLeave } = useMagnetic(strength);
  const Tag = as === "a" ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      style={{ ...style, x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={className}
      whileTap={{ scale: 0.97 }}
      {...props}
    >
      {children}
    </Tag>
  );
}
