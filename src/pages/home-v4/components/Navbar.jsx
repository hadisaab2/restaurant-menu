import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_SECTION_LINKS, mainLogo } from "../data";

export default function Navbar({ scrollTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    scrollTo(id);
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[9999]">
      <nav
        className={`mx-auto transition-all duration-300 ${
          scrolled
            ? "mt-3 max-w-5xl rounded-2xl border border-white/[0.06] bg-[#0a0a0a]/80 shadow-lg shadow-black/20 backdrop-blur-2xl"
            : "max-w-full border-b border-white/[0.04] bg-transparent"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-3 lg:px-6 lg:py-4">
          {/* Logo */}
          <button
            onClick={() => scrollTo("hero")}
            className="flex items-center gap-2"
          >
            <img src={mainLogo} alt="Menugic" className="h-10 w-auto" />
            <span className="text-xl font-bold text-white tracking-tight">
              Menugic
            </span>
          </button>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 text-sm">
            {NAV_SECTION_LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => handleNav(link.id)}
                  className="text-white/50 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => handleNav("contact")}
              className="rounded-lg bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110"
            >
              Get Started
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative z-20 p-2 text-white/70"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mx-4 mt-2 rounded-2xl border border-white/[0.06] bg-[#0a0a0a]/95 p-6 shadow-2xl backdrop-blur-2xl"
          >
            <ul className="space-y-4 text-base">
              {NAV_SECTION_LINKS.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNav(link.id)}
                    className="text-white/60 hover:text-white transition-colors w-full text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <button
              onClick={() => handleNav("contact")}
              className="mt-6 w-full rounded-lg bg-gradient-to-r from-indigo-600 to-teal-600 px-5 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
