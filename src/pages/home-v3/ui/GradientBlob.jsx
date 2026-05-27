import React from "react";

export default function GradientBlob({
  color1 = "rgba(87,0,255,0.15)",
  color2 = "rgba(139,92,246,0.10)",
  size = 600,
  className = "",
  style = {},
  speed = "20s",
}) {
  return (
    <>
      <style>{`
        @keyframes v3-blob-morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: rotate(0deg) scale(1); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: rotate(90deg) scale(1.05); }
          50% { border-radius: 50% 60% 30% 60% / 30% 70% 40% 60%; transform: rotate(180deg) scale(0.95); }
          75% { border-radius: 60% 30% 50% 40% / 60% 40% 60% 30%; transform: rotate(270deg) scale(1.02); }
        }
      `}</style>
      <div
        className={`pointer-events-none absolute ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          background: `linear-gradient(135deg, ${color1}, ${color2})`,
          filter: "blur(80px)",
          animation: `v3-blob-morph ${speed} ease-in-out infinite`,
          willChange: "border-radius, transform",
          ...style,
        }}
        aria-hidden
      />
    </>
  );
}
