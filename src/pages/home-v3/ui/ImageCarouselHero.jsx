import React, { useState, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function ImageCarouselHero({
  title,
  subtitle,
  description,
  ctaText,
  onCtaClick,
  images,
  features = [],
}) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotatingCards, setRotatingCards] = useState([]);

  // Continuous rotation animation
  useEffect(() => {
    const interval = setInterval(() => {
      setRotatingCards((prev) => prev.map((val) => (val + 0.5) % 360));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Initialize rotating cards
  useEffect(() => {
    setRotatingCards(images.map((_, i) => i * (360 / images.length)));
  }, [images.length]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div className="relative w-full bg-gradient-to-b from-[#FAF8FF] via-[#F3EEFF] to-[#FAF8FF] overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#5700FF]/5 to-transparent rounded-full blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite" }} />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[#5700FF]/5 to-transparent rounded-full blur-3xl" style={{ animation: "pulse 4s ease-in-out infinite 2s" }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Label */}
        <p className="text-[0.72rem] font-bold tracking-[0.12em] uppercase text-[#8B7BAA] mb-6">
          {subtitle}
        </p>

        {/* Carousel Container */}
        <div
          className="relative w-full max-w-5xl h-72 sm:h-96 mb-10"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Rotating Image Cards */}
          <div className="absolute inset-0 flex items-center justify-center" style={{ perspective: "1000px" }}>
            {images.map((image, index) => {
              const angle = (rotatingCards[index] || 0) * (Math.PI / 180);
              const radius = typeof window !== "undefined" && window.innerWidth < 640 ? 120 : 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              const perspectiveX = isHovering ? (mousePosition.x - 0.5) * 20 : 0;
              const perspectiveY = isHovering ? (mousePosition.y - 0.5) * 20 : 0;

              return (
                <a
                  key={image.id}
                  href={image.href || "#"}
                  target={image.href ? "_blank" : undefined}
                  rel={image.href ? "noopener noreferrer" : undefined}
                  className="absolute w-28 h-36 sm:w-36 sm:h-44 transition-all duration-300"
                  style={{
                    transform: `translate(${x}px, ${y}px) rotateX(${perspectiveY}deg) rotateY(${perspectiveX}deg) rotateZ(${image.rotation}deg)`,
                    transformStyle: "preserve-3d",
                  }}
                >
                  <div
                    className={cn(
                      "relative w-full h-full rounded-2xl overflow-hidden shadow-2xl",
                      "transition-all duration-300 hover:shadow-[0_20px_60px_-15px_rgba(87,0,255,0.25)] hover:scale-110",
                      "cursor-pointer group"
                    )}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {/* Name overlay */}
                    {image.label && (
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        <p className="text-[10px] font-semibold text-white truncate text-center">{image.label}</p>
                      </div>
                    )}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Content Section */}
        <div className="relative z-20 text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1E0C40] mb-4 leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-base sm:text-lg text-[#5B4A7A] mb-8">{description}</p>

          {ctaText && onCtaClick && (
            <button
              onClick={onCtaClick}
              className={cn(
                "inline-flex items-center gap-2 px-8 py-3 rounded-full",
                "bg-gradient-to-r from-[#5700FF] to-[#6D2BFF] text-white font-semibold",
                "hover:shadow-lg hover:shadow-[#5700FF]/25 hover:scale-105 transition-all duration-300",
                "active:scale-95 group"
              )}
            >
              {ctaText}
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Features Section */}
        {features.length > 0 && (
          <div className="relative z-20 w-full max-w-4xl grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={cn(
                  "text-center p-5 rounded-2xl",
                  "bg-white/80 backdrop-blur-sm border border-[rgba(87,0,255,0.08)]",
                  "hover:bg-white hover:border-[rgba(87,0,255,0.15)] hover:shadow-[0_8px_24px_rgba(30,12,64,0.08)] transition-all duration-300",
                  "group"
                )}
              >
                <h3 className="text-base sm:text-lg font-semibold text-[#1E0C40] mb-1 group-hover:text-[#5700FF] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#5B4A7A]">{feature.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
