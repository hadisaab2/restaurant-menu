import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { NAV_SECTION_LINKS, mainLogo } from "../data";

export default function Navbar({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobile, setIsMobile] = useState(typeof window !== "undefined" && window.innerWidth < 768);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_SECTION_LINKS.map((l) => l.id);
    const updateActive = () => {
      const y = window.scrollY + 88;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top + window.scrollY <= y) current = id;
      }
      setActiveSection(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const goHome = useCallback(() => {
    setMobileOpen(false);
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollTo = useCallback((id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-[9999]"
      initial={false}
      animate={{
        paddingLeft: scrolled ? "5%" : "0%",
        paddingRight: scrolled ? "5%" : "0%",
        paddingTop: scrolled ? "8px" : "0px",
      }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <motion.div
        className="mx-auto"
        initial={false}
        animate={{
          borderRadius: scrolled ? "24px" : "0px",
          maxWidth: scrolled ? "1180px" : "100%",
        }}
        transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
        style={{
          background: scrolled ? "rgba(255,255,255,0.88)" : "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px) saturate(1.5)",
          WebkitBackdropFilter: "blur(20px) saturate(1.5)",
          borderBottom: scrolled ? "none" : "1px solid rgba(230,224,240,0.6)",
          border: scrolled ? "1px solid rgba(87,0,255,0.08)" : undefined,
          boxShadow: scrolled
            ? "0 8px 32px rgba(30,12,64,0.08), 0 2px 8px rgba(30,12,64,0.04)"
            : "0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div
          className="flex items-center justify-between mx-auto px-6"
          style={{
            maxWidth: "1280px",
            height: scrolled ? "56px" : "68px",
            transition: "height 0.3s ease",
          }}
        >
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); goHome(); }}
            className="flex items-center gap-2 shrink-0 no-underline"
          >
            <img src={mainLogo} alt="Menugic" className="h-10 w-auto object-contain" decoding="async" />
            <span className="text-base font-bold tracking-[0.06em] text-[#1E0C40] uppercase leading-none">
              MENUGIC
            </span>
          </a>

          {/* Desktop nav links with sliding indicator */}
          {!isMobile && (
            <nav className="flex items-center gap-0.5 flex-1 justify-center" aria-label="Page sections">
              {NAV_SECTION_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollTo(item.id)}
                  className="relative px-4 py-2 text-[13.5px] font-medium rounded-full transition-colors duration-200"
                  style={{
                    color: activeSection === item.id ? "#1E0C40" : "#5A4880",
                    fontWeight: activeSection === item.id ? 600 : 500,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="v3-nav-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{ background: "#EDE4FA" }}
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </button>
              ))}
            </nav>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <button
              type="button"
              onClick={() => onGetStarted?.()}
              className="relative overflow-hidden shrink-0 rounded-full px-5 h-10 text-sm font-semibold text-white cursor-pointer border-none"
              style={{
                background: "linear-gradient(135deg, #5700FF 0%, #6D2BFF 100%)",
                boxShadow: "0 2px 14px -2px rgba(87,0,255,0.42)",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = "0 4px 20px -2px rgba(87,0,255,0.55)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = "0 2px 14px -2px rgba(87,0,255,0.42)"; }}
            >
              {/* Shimmer effect */}
              <div
                className="absolute inset-0 -translate-x-full hover:translate-x-full transition-transform duration-700"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)",
                }}
              />
              <span className="relative z-10">Get Started</span>
            </button>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((v) => !v)}
              className="p-2 rounded-full flex items-center justify-center text-[#1E0C40]"
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          )}
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && isMobile && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: [0.33, 0.11, 0.25, 1] }}
              className="overflow-hidden border-t border-[#E8E2EF]"
              style={{ background: "rgba(253,252,254,0.98)" }}
            >
              <div className="max-w-[1280px] mx-auto p-4 pb-5">
                {NAV_SECTION_LINKS.map((item, i) => (
                  <motion.button
                    key={item.id}
                    type="button"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => scrollTo(item.id)}
                    className="block w-full text-left rounded-xl px-4 py-3 text-[15px] font-medium text-[#1E0C40] mb-0.5"
                    style={{
                      background: activeSection === item.id ? "#EDE4FA" : "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  type="button"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-3 w-full rounded-full py-3.5 text-sm font-semibold text-white border-none cursor-pointer"
                  style={{ background: "#5700FF" }}
                  onClick={() => {
                    setMobileOpen(false);
                    onGetStarted?.();
                  }}
                >
                  Get Started
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
}
