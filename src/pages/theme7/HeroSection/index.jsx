import React from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function HeroSection({ restaurant, activeLanguage, accentColor }) {
  const coverUrl = restaurant?.cover_url
    ? `${STORAGE_URL}${restaurant.cover_url}`
    : null;
  const logoUrl = restaurant?.logoURL
    ? `${STORAGE_URL}${restaurant.logoURL}`
    : null;

  const scrollToMenu = () => {
    const el = document.getElementById("menu-start");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background image or gradient */}
      {coverUrl ? (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${coverUrl})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#0a0a0a]" />
      )}

      {/* Subtle grain texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        {/* Logo */}
        {logoUrl && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8 flex justify-center"
          >
            <img
              src={logoUrl}
              alt={restaurant?.name}
              className="h-24 w-24 md:h-32 md:w-32 rounded-2xl object-cover border-2 shadow-2xl"
              style={{ borderColor: `${accentColor}40` }}
            />
          </motion.div>
        )}

        {/* Restaurant name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight"
        >
          {restaurant?.name}
        </motion.h1>

        {/* Tagline / description */}
        {restaurant?.description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="text-lg md:text-xl text-white/60 max-w-md mx-auto mb-8"
          >
            {activeLanguage === "ar" && restaurant?.ar_description
              ? restaurant.ar_description
              : restaurant.description}
          </motion.p>
        )}

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mx-auto w-16 h-0.5 mb-8"
          style={{ backgroundColor: accentColor }}
        />

        {/* Explore button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToMenu}
          className="px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide text-black shadow-2xl transition-all duration-300"
          style={{
            background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
            boxShadow: `0 8px 32px ${accentColor}40`,
          }}
        >
          {activeLanguage === "ar" ? "استكشف القائمة" : "Explore Menu"}
        </motion.button>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-white/30 cursor-pointer"
          onClick={scrollToMenu}
        >
          <FiChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent pointer-events-none" />
    </section>
  );
}
