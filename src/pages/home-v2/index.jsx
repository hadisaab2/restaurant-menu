import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  FiArrowRight,
  FiCheck,
  FiChevronDown,
  FiGrid,
  FiLayout,
  FiMessageCircle,
  FiMonitor,
  FiPackage,
  FiPhone,
  FiSettings,
  FiShoppingCart,
  FiStar,
  FiUsers,
  FiZap,
  FiBarChart2,
  FiGlobe,
  FiAlignLeft,
  FiCamera,
  FiLayers,
  FiMapPin,
  FiSliders,
  FiDroplet,
  FiFeather,
  FiSmartphone,
  FiCoffee,
  FiShoppingBag,
  FiHome,
  FiMenu,
  FiX,
  FiMail,
} from "react-icons/fi";
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import heroAllScreens from "./images/all-screens.png";
import templateVideo1 from "./videos/template1.mp4";
import templateVideo2 from "./videos/template2.mp4";
import templateVideo3 from "./videos/template3.mp4";
import templateVideo4 from "./videos/template4.mp4";
import templatePoster1 from "./images/template1.png";
import templatePoster2 from "./images/template2.png";
import mainLogo from "./images/main-logo.png";

/* ─── DATA ─────────────────────────────────────────── */

const NAV_SECTION_LINKS = [
  { label: "Features", id: "features" },
  { label: "Templates", id: "templates" },
  { label: "Pricing", id: "pricing" },
  { label: "FAQ", id: "faq" },
];

// Hardcoded fallback removed — marquee shows only restaurants flagged for the main website.
const REAL_CUSTOMERS = [];

const BUSINESS_TYPES_QUICK = [
  { label: "Restaurants", icon: FiCoffee, desc: "Menus, QR ordering, online sales" },
  { label: "Cafés", icon: FiGrid, desc: "Stylish menus, seamless ordering" },
  { label: "Cosmetics", icon: FiDroplet, desc: "Premium catalogs and storefronts" },
  { label: "Flower Shops", icon: FiFeather, desc: "Beautiful displays, easy orders" },
  { label: "Grocery Stores", icon: FiShoppingCart, desc: "Organized catalogs, quick shopping" },
  { label: "Retail Stores", icon: FiShoppingBag, desc: "Modern browsing and checkout" },
  { label: "Bakeries", icon: FiStar, desc: "Showcase products, accept orders" },
  { label: "Specialty Shops", icon: FiPackage, desc: "Flexible catalogs for unique products" },
];

const TEMPLATES = [
  {
    id: "classic-elegant",
    name: "Classic Elegant",
    desc: "Refined, timeless layout with warm typography and a premium storefront feel.",
    bestFor: "Restaurants & fine dining",
    accent: "#8B6F47",
    theme: "warm",
    highlights: ["Elegant spacing", "Luxury presentation", "Smooth ordering flow"],
    videoSrc: templateVideo2,
    posterSrc: templatePoster2,
  },
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    desc: "Clean, modern layout built for sleek brands and effortless browsing.",
    bestFor: "Cafés & premium brands",
    accent: "#2d2d2d",
    theme: "minimal",
    highlights: ["Minimal interface", "Smooth browsing", "Clean product focus"],
    videoSrc: templateVideo1,
    posterSrc: heroAllScreens,
  },
  {
    id: "fresh-storefront",
    name: "Fresh Storefront",
    desc: "Bright, approachable layout designed for everyday shopping and discovery.",
    bestFor: "Grocery stores & specialty shops",
    accent: "#3a7d44",
    theme: "fresh",
    highlights: ["Easy navigation", "Clear categories", "Friendly shopping flow"],
    videoSrc: templateVideo3,
    posterSrc: templatePoster1,
  },
  {
    id: "bold-contemporary",
    name: "Bold Contemporary",
    desc: "Trend-driven layout with energetic visuals for modern standout brands.",
    bestFor: "Dessert shops & trendy concepts",
    accent: "#c2185b",
    theme: "bold",
    highlights: ["Bold visual identity", "Dynamic presentation", "Engaging storefront feel"],
    videoSrc: templateVideo4,
    posterSrc: heroAllScreens,
  },
];

/** Live demo storefronts — aligned with template1–4 videos on the landing page. */
const TEMPLATE_DEMO_URLS = {
  "modern-minimal": "https://lafleur-doree.menugic.com/",
  "classic-elegant": "https://lcafe.menugic.com/",
  "fresh-storefront": "https://bysara.menugic.com/",
  "bold-contemporary": "https://reflex.menugic.com/",
};

const STATS = [
  { target: 100, suffix: "+",  label: "Businesses" },
  { target: 500, suffix: "K+", label: "Menu views" },
  { target: 4,   suffix: "",   label: "Premium templates" },
];

const FEATURES = [
  { icon: FiLayout, label: "Digital menu builder" },
  { icon: FiGlobe, label: "Website & catalog creation" },
  { icon: FiGrid, label: "QR menu" },
  { icon: FiAlignLeft, label: "Category management" },
  { icon: FiCamera, label: "Product images & prices" },
  { icon: FiShoppingCart, label: "Add to cart" },
  { icon: FiMessageCircle, label: "WhatsApp ordering" },
  { icon: FiMapPin, label: "Delivery / Takeaway / Dine-in" },
  { icon: FiLayers, label: "Branch support" },
  { icon: FiSliders, label: "Template selection" },
  { icon: FiSettings, label: "Special instructions" },
  { icon: FiBarChart2, label: "Reports & analytics" },
  { icon: FiPackage, label: "Flexible business settings" },
  { icon: FiUsers, label: "Customer management" },
];

const WHY_CARDS = [
  {
    icon: FiMonitor,
    title: "Premium digital storefronts",
    text: "Launch a polished menu, catalog, or ordering website your customers will love.",
  },
  {
    icon: FiShoppingCart,
    title: "Flexible ordering",
    text: "Accept orders through WhatsApp, cart, delivery, takeaway, or dine-in — your way.",
  },
  {
    icon: FiGrid,
    title: "Built for every business type",
    text: "Designed for restaurants, florists, beauty brands, grocery stores, retail shops, and more.",
  },
  {
    icon: FiSettings,
    title: "Simple management dashboard",
    text: "Manage products, categories, orders, reporting, and settings from one clean dashboard.",
  },
  {
    icon: FiBarChart2,
    title: "Built-in reporting",
    text: "Track views, orders, and customer activity with clear business insights.",
  },
];

const HOW_IT_WORKS = [
  { step: "01", title: "Choose your template", text: "Pick from four premium templates designed for different business styles." },
  { step: "02", title: "Add your products", text: "Upload images, set prices, create categories, and organize your catalog." },
  { step: "03", title: "Customize your page", text: "Add your brand colors, logo, business info, and configure ordering." },
  { step: "04", title: "Publish and receive orders", text: "Go live instantly. Share your link, QR, or website address." },
];

/** VIP-only bullets (shown as ✓ on VIP, as ✗ on Premium for comparison). */
const VIP_EXCLUSIVE_FEATURES = [
  "Full admin dashboard & operations",
  "Order management workspace",
  "Analytics & reporting",
  "Registered customer management",
  "Customer threads & admin chat",
  "Advanced customization & branding",
];

const PLANS = [
  {
    name: "Premium",
    tagline: "For businesses starting professionally",
    price: 100,
    features: [
      "Digital menu or website",
      "QR menu support",
      "Category & item management",
      "WhatsApp ordering",
      "One template",
    ],
  },
  {
    name: "VIP",
    tagline: "Best for businesses that need full operations and customer management",
    price: 200,
    recommended: true,
    supportingLine:
      "VIP unlocks the full operations stack: orders, users, analytics, and customer conversations from one admin.",
    features: ["Everything in Premium", ...VIP_EXCLUSIVE_FEATURES],
  },
];

const BUSINESS_CARDS = [
  { name: "Restaurants", icon: FiGrid, desc: "Menus, QR ordering, dine-in, and WhatsApp orders." },
  { name: "Cafés", icon: FiCoffee, desc: "Branded menus with smooth ordering and daily specials." },
  { name: "Bakeries", icon: FiLayers, desc: "Beautiful product catalogs with pre-orders and notes." },
  { name: "Dessert Shops", icon: FiStar, desc: "Visual product displays with cart and WhatsApp checkout." },
  { name: "Grocery Stores", icon: FiShoppingCart, desc: "Organized catalogs with categories and easy browsing." },
  { name: "Flower Shops", icon: FiFeather, desc: "Elegant displays for bouquets, gifts, and custom orders." },
  { name: "Cosmetics", icon: FiDroplet, desc: "Premium product catalogs for beauty and skincare brands." },
  { name: "Specialty Stores", icon: FiShoppingBag, desc: "Flexible storefronts for niche products and unique brands." },
];

const FAQS = [
  {
    q: "Is Menugic only for restaurants?",
    a: "No. Menugic is built for restaurants, cafés, florists, beauty brands, grocery stores, specialty shops, and other businesses that want to display or sell products online beautifully.",
  },
  {
    q: "Can I use Menugic for a store or product catalog?",
    a: "Yes. Menugic can be used for digital catalogs, storefronts, and product-based websites, not only menus.",
  },
  {
    q: "Can I choose between different templates?",
    a: "Yes. Menugic includes multiple premium templates, so you can choose the layout that best matches your brand and business style.",
  },
  {
    q: "Can customers order through WhatsApp?",
    a: "Yes. Menugic supports WhatsApp ordering, making it easy for customers to contact you and place orders directly.",
  },
  {
    q: "Does Menugic support delivery, takeaway, and dine-in?",
    a: "Yes. Depending on your setup, Menugic can support delivery, takeaway, and dine-in ordering flows.",
  },
  {
    q: "Can I manage products, categories, and branches myself?",
    a: "Yes. Menugic gives you an admin dashboard where you can manage products, categories, settings, and branches easily.",
  },
  {
    q: "Does Menugic include analytics and reporting?",
    a: "Yes. Menugic includes reporting tools to help you track views, orders, and customer activity.",
  },
  {
    q: "What is the difference between Premium and VIP?",
    a: "Premium is ideal for businesses starting professionally, while VIP is built for brands that need advanced operations like analytics, customer management, and more powerful admin tools.",
  },
];

const CONTACT_BUSINESS_TYPES = [
  "Restaurant",
  "Café",
  "Bakery",
  "Dessert Shop",
  "Grocery Store",
  "Flower Shop",
  "Cosmetics",
  "Specialty Store",
  "Other",
];

const CONTACT_DETAILS = {
  phoneDisplay: "+961 78 911 634",
  phoneTel: "+96178911634",
  phoneWhatsappDigits: "96178911634",
  email: "menugic@gmail.com",
};

/* ─── UTILITIES ──────────────────────────────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.07 },
  }),
};

function Reveal({ children, className, delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <Tag ref={ref}>
      <motion.div
        className={className}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
        custom={delay}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-apple-accent mb-3">
      {children}
    </p>
  );
}

function SectionTitle({ eyebrow, title, subtitle, center = true, titleClassName = "", subtitleClassName = "" }) {
  const align = center ? "text-center items-center" : "items-start";
  return (
    <Reveal className={`flex flex-col ${align} mb-14`}>
      {eyebrow && <SectionLabel>{eyebrow}</SectionLabel>}
      <h2 className={`text-3xl md:text-5xl font-semibold tracking-tight text-apple-text leading-tight max-w-3xl ${center ? "text-center" : ""} ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-apple-muted text-lg max-w-2xl leading-relaxed ${center ? "text-center" : ""} ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}

/* ─── DEVICE MOCKUP PRIMITIVES ────────────────────────── */

function PhoneFrame({ children, className = "", frameClassName = "" }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`w-52 rounded-[2.5rem] border-4 border-gray-200 bg-white overflow-hidden shadow-apple-lg ${frameClassName}`}>
        <div className="h-6 bg-gray-100 flex items-center justify-center">
          <div className="w-20 h-3 rounded-full bg-gray-200" />
        </div>
        {children}
      </div>
    </div>
  );
}

/* ─── NAVBAR ─────────────────────────────────────────── */

function MenugicWordmark({ onHome }) {
  return (
    <a
      href="#home"
      onClick={(e) => { e.preventDefault(); onHome(); }}
      style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0, textDecoration: "none", outline: "none" }}
    >
      <img
        src={mainLogo}
        alt="Menugic logo"
        style={{ height: "52px", width: "auto", objectFit: "contain", objectPosition: "left", display: "block" }}
        decoding="async"
      />
      <span
        style={{
          fontSize: "18px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          color: "#1E0C40",
          textTransform: "uppercase",
          lineHeight: 1,
          fontFamily: "inherit",
        }}
      >
        MENUGIC
      </span>
    </a>
  );
}

function LiveDemoModal({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const openDemo = (url) => {
    if (!url) return;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="live-demo-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="fixed inset-0 z-[10001] flex items-center justify-center p-4 sm:p-6"
          style={{ background: "rgba(30, 12, 64, 0.42)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative w-full max-w-lg overflow-hidden rounded-[1.35rem] border border-[#E4DCF0] bg-gradient-to-b from-white via-[#FDFBFF] to-[#F6F2FA] shadow-[0_28px_64px_-24px_rgba(95,55,140,0.35),0_12px_40px_-20px_rgba(30,12,64,0.12)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-[#EDE7F5] px-6 py-5">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-apple-accent">Live demo</p>
                <h2 id="live-demo-title" className="mt-1.5 text-lg font-semibold tracking-tight text-apple-text sm:text-xl">
                  Choose a template to preview
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-apple-muted">
                  Opens a real storefront in a new tab.
                </p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E8E2EF] bg-white/90 text-apple-text transition-colors hover:border-[#D4C8E8] hover:bg-[#FAF8FF]"
              >
                <FiX size={18} />
              </button>
            </div>
            <div className="max-h-[min(52vh,420px)] overflow-y-auto px-5 py-4 sm:px-6">
              <ul className="space-y-2.5">
                {TEMPLATES.map((t) => {
                  const url = TEMPLATE_DEMO_URLS[t.id];
                  return (
                    <li key={t.id}>
                      <button
                        type="button"
                        disabled={!url}
                        onClick={() => openDemo(url)}
                        className="flex w-full items-center gap-3 rounded-2xl border border-[#E8E2F0] bg-white/90 px-4 py-3.5 text-left transition-all hover:border-[#C9B8E8] hover:bg-[#FAF8FF] hover:shadow-[0_6px_20px_-10px_rgba(87,0,255,0.18)] disabled:cursor-not-allowed disabled:opacity-45"
                      >
                        <span
                          className="h-10 w-1 shrink-0 rounded-full"
                          style={{ background: t.accent }}
                          aria-hidden
                        />
                        <span className="min-w-0 flex-1">
                          <span className="block font-semibold text-apple-text">{t.name}</span>
                          <span className="mt-0.5 block text-xs text-apple-muted line-clamp-2">{t.desc}</span>
                        </span>
                        <FiArrowRight className="shrink-0 text-apple-accent opacity-80" size={18} aria-hidden />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Navbar({ onGetStarted }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_SECTION_LINKS.map((l) => l.id);
    const updateActive = () => {
      const headerOffset = 88;
      const y = window.scrollY + headerOffset;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= y) current = id;
      }
      setActiveSection(current);
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  const goHome = () => {
    setMobileOpen(false);
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    setMobileOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check, { passive: true });
    return () => window.removeEventListener("resize", check);
  }, []);

  const linkStyle = (id) => ({
    background: activeSection === id ? "#EDE4FA" : "transparent",
    border: "none",
    borderRadius: "999px",
    padding: "7px 13px",
    fontSize: "13.5px",
    fontWeight: activeSection === id ? 600 : 500,
    color: activeSection === id ? "#1E0C40" : "#5A4880",
    cursor: "pointer",
    whiteSpace: "nowrap",
    transition: "background 0.15s, color 0.15s, font-weight 0s",
    fontFamily: "inherit",
    letterSpacing: "-0.01em",
  });

  const headerBg = scrolled ? "rgba(255,255,255,0.97)" : "#ffffff";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: headerBg,
        borderBottom: `1px solid ${scrolled ? "#E6E0F0" : "#EEECF4"}`,
        boxShadow: scrolled
          ? "0 1px 0 rgba(255,255,255,0.8), 0 4px 18px -6px rgba(30,12,64,0.09)"
          : "0 1px 0 rgba(255,255,255,0.6)",
        backdropFilter: scrolled ? "blur(14px) saturate(1.4)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(14px) saturate(1.4)" : undefined,
        transition: "background 0.25s, box-shadow 0.25s, border-color 0.25s",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          gap: "8px",
        }}
      >
        {/* Logo */}
        <MenugicWordmark onHome={goHome} />

        {/* Desktop center links */}
        {!isMobile && (
          <nav
            aria-label="Page sections"
            style={{ display: "flex", alignItems: "center", gap: "2px", flex: 1, justifyContent: "center" }}
          >
            {NAV_SECTION_LINKS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                style={linkStyle(item.id)}
                onMouseEnter={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.background = "#F0EAFA";
                    e.currentTarget.style.color = "#1E0C40";
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.id) {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "#5A4880";
                  }
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <button
            type="button"
            style={{
              background: "#5700FF",
              color: "#fff",
              border: "none",
              borderRadius: "999px",
              padding: "0 20px",
              height: "40px",
              fontSize: "14px",
              fontWeight: 600,
              cursor: "pointer",
              whiteSpace: "nowrap",
              flexShrink: 0,
              boxShadow: "0 2px 14px -2px rgba(87,0,255,0.42)",
              transition: "background 0.2s, box-shadow 0.2s",
              fontFamily: "inherit",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "#6D2BFF"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "#5700FF"; }}
            onClick={() => onGetStarted?.()}
          >
            Get Started
          </button>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#1E0C40",
            }}
          >
            {mobileOpen ? <FiX size={22} strokeWidth={2} /> : <FiMenu size={22} strokeWidth={2} />}
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
            style={{
              overflow: "hidden",
              background: "#FDFCFE",
              borderTop: "1px solid #E8E2EF",
            }}
          >
            <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "12px 16px 16px" }}>
              {NAV_SECTION_LINKS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    background: activeSection === item.id ? "#EDE4FA" : "none",
                    border: "none",
                    borderRadius: "10px",
                    padding: "12px 14px",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#1E0C40",
                    cursor: "pointer",
                    fontFamily: "inherit",
                    marginBottom: "2px",
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                type="button"
                style={{
                  marginTop: "10px",
                  width: "100%",
                  background: "#5700FF",
                  color: "#fff",
                  border: "none",
                  borderRadius: "999px",
                  padding: "14px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
                onClick={() => {
                  setMobileOpen(false);
                  onGetStarted?.();
                }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── HERO ────────────────────────────────────────────── */

const HERO_ALL_SCREENS_SRC = heroAllScreens;

const HERO_CHIPS = [
  "Restaurants", "Cosmetics", "Flower Shops", "Retail Stores", "Grocery Stores", "Bakeries", "Specialty Shops",
];

const HERO_TRUST_ITEMS = ["WhatsApp Ordering", "Customer Insights", "Easy Dashboard Management"];

/* 4 curated feature callout cards close to the mockup group */
const HERO_ICON_MARKERS = [
  { icon: FiMessageCircle, label: "WhatsApp Orders",  pos: { top: "12%",    left: "5%"  }, delay: 0.46, floatY: -4, dur: 4.1 },
  { icon: FiBarChart2,     label: "Customer Insights", pos: { top: "14%",    right: "5%" }, delay: 0.62, floatY: -3, dur: 4.4 },
  { icon: FiSettings,      label: "Easy Management",   pos: { bottom: "20%", left: "4%"  }, delay: 0.80, floatY: 4,  dur: 4.0 },
  { icon: FiGrid,          label: "QR Catalog",        pos: { bottom: "14%", right: "5%" }, delay: 0.94, floatY: 4,  dur: 3.8 },
];

function FloatingIconMarker({ icon: Icon, label, posStyle, delay, floatY, dur }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: "absolute",
        ...posStyle,
        zIndex: 30,
        pointerEvents: "none",
      }}
    >
      <motion.div
        animate={{ y: [0, floatY, 0] }}
        transition={{ repeat: Infinity, duration: dur, ease: "easeInOut" }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "7px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          borderRadius: "12px",
          padding: "7px 11px",
          boxShadow: "0 6px 20px rgba(30,12,64,0.10), 0 1px 4px rgba(30,12,64,0.06)",
          border: "1px solid rgba(87,0,255,0.14)",
          whiteSpace: "nowrap",
        }}
      >
        <div style={{
          width: "26px", height: "26px", borderRadius: "7px", flexShrink: 0,
          display: "flex", alignItems: "center", justifyContent: "center",
          background: "linear-gradient(135deg, rgba(87,0,255,0.08), rgba(87,0,255,0.16))",
          border: "1px solid rgba(87,0,255,0.12)",
        }}>
          <Icon size={13} style={{ color: "#5700FF" }} />
        </div>
        <span style={{ fontSize: "11px", fontWeight: 600, color: "#1E0C40", letterSpacing: "-0.01em" }}>
          {label}
        </span>
      </motion.div>
    </motion.div>
  );
}

function HeroMockup() {
  return (
    <div className="relative w-full flex justify-center">
      <div style={{
        position: "absolute", top: "50%", left: "50%",
        transform: "translate(-50%,-50%)",
        width: "85%", height: "85%", borderRadius: "50%",
        background: "radial-gradient(ellipse, rgba(87,0,255,0.16) 0%, rgba(87,0,255,0.05) 50%, transparent 70%)",
        pointerEvents: "none", zIndex: 0,
      }} />

      <div
        style={{ position: "relative", display: "block", zIndex: 1 }}
        className="w-full max-w-[min(100%,720px)] lg:max-w-[860px]"
      >
        <motion.img
          src={HERO_ALL_SCREENS_SRC}
          alt="Menugic digital menu across desktop, tablet, and mobile for restaurants, cafés, bakeries, and shops"
          style={{ width: "100%", height: "auto", display: "block" }}
          initial={{ opacity: 0, y: 28, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        />

        {HERO_ICON_MARKERS.map((marker, idx) => (
          <FloatingIconMarker
            key={idx}
            icon={marker.icon}
            label={marker.label}
            posStyle={marker.pos}
            delay={marker.delay}
            floatY={marker.floatY}
            dur={marker.dur}
          />
        ))}
      </div>
    </div>
  );
}

function Hero({ onGetStarted, onSeeLiveDemo }) {
  return (
    <section
      id="home"
      className="relative pt-[5.5rem] pb-20 md:pt-[6.5rem] md:pb-24 overflow-hidden"
      style={{
        background: "linear-gradient(155deg, #FAF8FF 0%, #F3EEFF 38%, #EAE0FF 68%, #F0ECFF 100%)",
      }}
    >
      <div style={{ position: "absolute", top: "-130px", right: "-130px", width: "720px", height: "720px", borderRadius: "50%", background: "radial-gradient(circle, rgba(87,0,255,0.10) 0%, transparent 60%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "-80px", left: "-100px", width: "540px", height: "540px", borderRadius: "50%", background: "radial-gradient(circle, rgba(30,12,64,0.07) 0%, transparent 60%)", pointerEvents: "none" }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-[0.9fr_1.25fr] gap-8 xl:gap-12 items-center">

          {/* ── LEFT: Copy ── */}
          <div style={{ maxWidth: "520px" }}>

            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "8px",
                background: "linear-gradient(135deg, #F0E9FF, #E8DEFF)",
                border: "1px solid rgba(87,0,255,0.18)",
                borderRadius: "999px", padding: "7px 16px", marginBottom: "1.75rem",
              }}>
                <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#5700FF", display: "inline-block", boxShadow: "0 0 6px rgba(87,0,255,0.45)" }} />
                <span style={{ fontSize: "12.5px", fontWeight: 600, color: "#5700FF", letterSpacing: "0.01em" }}>
                  Built for food, retail, beauty, gifting, and more
                </span>
              </div>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: "clamp(2.2rem, 4.15vw, 3.35rem)",
                fontWeight: 800,
                letterSpacing: "-0.038em",
                color: "#1E0C40",
                lineHeight: 1.1,
                margin: 0,
                maxWidth: "16.2ch",
              }}
            >
              Launch a premium{" "}
              <span style={{
                background: "linear-gradient(130deg, #5700FF 0%, #7C3AFF 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                digital catalog
              </span>
              , menu, or ordering website for any business type.
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              style={{
                marginTop: "1.5rem", fontSize: "1.08rem",
                color: "#5B4A7A", lineHeight: 1.78, maxWidth: "480px",
              }}
            >
              Menugic helps businesses launch polished digital catalogs, QR menus, online ordering, WhatsApp orders, customer action reporting, and easy product management — all from one simple dashboard.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              style={{ marginTop: "2.25rem", display: "flex", flexWrap: "wrap", gap: "12px" }}
            >
              <button
                type="button"
                style={{
                  background: "linear-gradient(135deg, #5700FF 0%, #6D2BFF 100%)",
                  color: "#fff", border: "none", borderRadius: "999px",
                  padding: "15px 30px", fontWeight: 600, fontSize: "0.95rem",
                  cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
                  boxShadow: "0 6px 22px rgba(87,0,255,0.32), 0 2px 6px rgba(87,0,255,0.18)",
                  transition: "transform 0.18s ease, box-shadow 0.18s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(87,0,255,0.40), 0 3px 8px rgba(87,0,255,0.22)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 6px 22px rgba(87,0,255,0.32), 0 2px 6px rgba(87,0,255,0.18)";
                }}
                onClick={() => onGetStarted?.()}
              >
                Get Started <FiArrowRight size={16} />
              </button>
              <button
                type="button"
                style={{
                  border: "1.5px solid rgba(87,0,255,0.22)",
                  background: "rgba(255,255,255,0.80)",
                  color: "#1E0C40", borderRadius: "999px",
                  padding: "15px 30px", fontWeight: 600, fontSize: "0.95rem",
                  cursor: "pointer", display: "flex", alignItems: "center", gap: "8px",
                  backdropFilter: "blur(8px)",
                  boxShadow: "0 2px 12px rgba(30,12,64,0.07)",
                  transition: "border-color 0.18s, transform 0.18s, box-shadow 0.18s",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(87,0,255,0.50)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 4px 16px rgba(30,12,64,0.11)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(87,0,255,0.22)";
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 2px 12px rgba(30,12,64,0.07)";
                }}
                onClick={() => onSeeLiveDemo?.()}
              >
                See Live Demo <FiArrowRight size={15} />
              </button>
            </motion.div>

            {/* Trust / mini feature line */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.38 }}
              style={{
                marginTop: "1.2rem",
                display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px 20px",
              }}
            >
              {HERO_TRUST_ITEMS.map(t => (
                <span key={t} style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "12.5px", color: "#7B6A9B" }}>
                  <FiCheck size={12} style={{ color: "#5700FF", flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* Business category chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.46 }}
              style={{ marginTop: "1.75rem", display: "flex", flexWrap: "wrap", gap: "8px" }}
            >
              {HERO_CHIPS.map(label => (
                <span
                  key={label}
                  style={{
                    fontSize: "12px", fontWeight: 500,
                    background: "rgba(255,255,255,0.72)",
                    border: "1px solid rgba(87,0,255,0.18)",
                    color: "#4A3A6E", borderRadius: "999px",
                    padding: "5px 14px",
                    backdropFilter: "blur(6px)",
                    boxShadow: "0 1px 4px rgba(30,12,64,0.06)",
                  }}
                >
                  {label}
                </span>
              ))}
            </motion.div>

          </div>

          {/* ── RIGHT: Device mockup composition ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.78, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center w-full"
          >
            <HeroMockup />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ─── BUSINESSES (QUICK) ────────────────────────────── */

function BusinessApplicability() {
  return (
    <section
      className="py-24 md:py-28"
      style={{ background: "linear-gradient(180deg, #F7F4FB 0%, #F5F1F2 52%, #F9F6FF 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="BUILT FOR ALL BUSINESS TYPES"
          title="One platform for every modern business"
          subtitle="Menugic helps businesses across industries launch polished digital catalogs, menus, and ordering experiences from one simple dashboard."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mt-14">
          {BUSINESS_TYPES_QUICK.map((b, i) => (
            <Reveal key={b.label} delay={i * 0.04}>
              <div
                className="rounded-2xl p-6 pt-7 md:p-7 md:pt-8 transition-all duration-300 cursor-default h-full"
                style={{
                  background: "linear-gradient(180deg, rgba(255,255,255,0.95) 0%, rgba(250,246,255,0.92) 100%)",
                  border: "1px solid rgba(87,0,255,0.12)",
                  boxShadow: "0 8px 24px rgba(30,12,64,0.07), 0 2px 6px rgba(30,12,64,0.04)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px)";
                  e.currentTarget.style.boxShadow = "0 12px 28px rgba(30,12,64,0.10), 0 3px 10px rgba(30,12,64,0.05), 0 0 0 1px rgba(87,0,255,0.10)";
                  e.currentTarget.style.borderColor = "rgba(87,0,255,0.24)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(30,12,64,0.07), 0 2px 6px rgba(30,12,64,0.04)";
                  e.currentTarget.style.borderColor = "rgba(87,0,255,0.12)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "13px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(135deg, rgba(87,0,255,0.10), rgba(87,0,255,0.18))",
                    border: "1px solid rgba(87,0,255,0.18)",
                    marginBottom: "16px",
                  }}
                >
                  <b.icon size={21} style={{ color: "#5700FF" }} />
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#1E0C40",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {b.label}
                </h3>
                <p
                  style={{
                    margin: "10px 0 0",
                    color: "#5B4A7A",
                    fontSize: "0.88rem",
                    lineHeight: 1.58,
                  }}
                >
                  {b.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TEMPLATES ─────────────────────────────────────── */

function Templates() {
  const [active, setActive] = useState(0);
  const [failedVideos, setFailedVideos] = useState({});
  const currentTemplate = TEMPLATES[active];

  const handleVideoError = (id) => {
    setFailedVideos((prev) => ({ ...prev, [id]: true }));
  };

  // Always retry the active template video when switching tabs.
  // This prevents stale fallback state from Fast Refresh sessions.
  useEffect(() => {
    setFailedVideos((prev) => ({ ...prev, [currentTemplate.id]: false }));
  }, [currentTemplate.id]);

  return (
    <section id="templates" className="py-24" style={{ background: "linear-gradient(180deg, #FBFAFF 0%, #F7F3FF 60%, #F5F1F2 100%)" }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="TEMPLATES"
          title="Four distinct templates. One powerful platform."
          subtitle="Each template is a complete storefront experience designed for a different business style — not just a color change."
        />

        {/* Tab switcher (premium segmented control) */}
        <div
          className="flex justify-center mb-12 flex-wrap gap-2 p-2 rounded-2xl mx-auto w-fit"
          style={{
            background: "rgba(255,255,255,0.8)",
            border: "1px solid rgba(87,0,255,0.12)",
            boxShadow: "0 6px 20px rgba(30,12,64,0.06)",
            backdropFilter: "blur(10px)",
          }}
          role="tablist"
          aria-label="Template selector"
        >
          {TEMPLATES.map((t, i) => (
            <button
              key={t.name}
              onClick={() => {
                setFailedVideos((prev) => ({ ...prev, [t.id]: false }));
                setActive(i);
              }}
              role="tab"
              aria-selected={active === i}
              aria-label={`Show ${t.name} template`}
              className="px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: active === i ? "#1E0C40" : "#5B4A7A",
                background: active === i ? "rgba(255,255,255,0.95)" : "transparent",
                boxShadow: active === i ? "0 4px 12px rgba(30,12,64,0.08), inset 0 0 0 1px rgba(87,0,255,0.22)" : "none",
              }}
            >
              {t.name}
            </button>
          ))}
        </div>

        {/* Active template showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTemplate.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: device video preview */}
            <div className="flex justify-center">
              <div style={{ position: "relative" }}>
                <div
                  className="absolute inset-0 rounded-[3rem] blur-2xl opacity-30 -z-10 scale-90"
                  style={{ background: `linear-gradient(135deg, ${currentTemplate.accent}55, ${currentTemplate.accent}22)` }}
                />
                <PhoneFrame className="scale-[1.02] sm:scale-[1.1] origin-center" frameClassName="rounded-none">
                  <div
                    style={{
                      width: "100%",
                      height: "clamp(360px, 48vw, 460px)",
                      position: "relative",
                      borderRadius: "0",
                      overflow: "hidden",
                      background: "linear-gradient(180deg, #f6f3ff 0%, #ece4ff 100%)",
                      border: `1px solid ${currentTemplate.accent}22`,
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    {!failedVideos[currentTemplate.id] ? (
                      <video
                        key={currentTemplate.id}
                        src={currentTemplate.videoSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="auto"
                        onError={() => handleVideoError(currentTemplate.id)}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                        }}
                      />
                    ) : (
                      <img
                        src={currentTemplate.posterSrc}
                        alt={`${currentTemplate.name} poster preview`}
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    )}
                  </div>
                </PhoneFrame>
              </div>
            </div>

            {/* Right: active template content */}
            <div className="space-y-3.5 rounded-3xl p-6 border border-white/70 shadow-[0_10px_32px_rgba(30,12,64,0.08)] bg-white/75 backdrop-blur-md">
              
              <h3 className="text-3xl font-semibold text-apple-text">{currentTemplate.name}</h3>
              <p className="text-apple-muted leading-relaxed">{currentTemplate.desc}</p>
              <p className="text-sm text-apple-muted">
                <span className="font-medium text-apple-text">Best for: </span>
                {currentTemplate.bestFor}
              </p>
              <div className="pt-1.5 space-y-2">
                {currentTemplate.highlights.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-[#4B3B6C]">
                    <FiCheck size={14} style={{ color: currentTemplate.accent }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button
                className="mt-4 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all"
                style={{
                  color: "#fff",
                  background: `linear-gradient(135deg, ${currentTemplate.accent} 0%, #5700FF 100%)`,
                  boxShadow: "0 8px 20px rgba(87,0,255,0.2)",
                }}
              >
                Explore Template <FiArrowRight size={14} />
              </button>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* All 4 template thumbnail cards */}
        
      </div>
    </section>
  );
}

/* ─── COUNT-UP HOOK ─────────────────────────────────── */

function useCountUp(target, { duration = 1600, delay = 0, started = false } = {}) {
  const [count, setCount] = useState(0);
  const reduced = useRef(
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (!started) return;
    if (reduced.current) { setCount(target); return; }

    let raf;
    const startAt = performance.now() + delay;

    function tick(now) {
      if (now < startAt) { raf = requestAnimationFrame(tick); return; }
      const progress = Math.min((now - startAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      setCount(Math.round(eased * target));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, target, duration, delay]);

  return count;
}

function CountUpStat({ s, started, staggerDelay }) {
  const count = useCountUp(s.target, { duration: 1600, delay: staggerDelay, started });
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.96)",
        borderRadius: "20px",
        border: "1px solid rgba(87,0,255,0.12)",
        padding: "1.85rem 1.25rem",
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(30,12,64,0.06), 0 1px 4px rgba(30,12,64,0.04)",
        transition: "transform .2s, box-shadow .2s, border-color .2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 10px 24px rgba(30,12,64,0.09)";
        e.currentTarget.style.borderColor = "rgba(87,0,255,0.22)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 6px 18px rgba(30,12,64,0.06), 0 1px 4px rgba(30,12,64,0.04)";
        e.currentTarget.style.borderColor = "rgba(87,0,255,0.12)";
      }}
    >
      <p style={{ fontSize: "2.45rem", fontWeight: 800, letterSpacing: "-0.04em", color: "#1E0C40", margin: 0, lineHeight: 1 }}>
        {count}{s.suffix}
      </p>
      <p style={{ fontSize: "0.82rem", color: "#5B4A7A", marginTop: "0.52rem", fontWeight: 500 }}>{s.label}</p>
    </div>
  );
}

/* ─── CUSTOMERS ─────────────────────────────────────── */

/* Individual hoverable customer card used inside marquee rows */
function CustomerCard({ c }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={`https://${c.subdomain}.menugic.com`}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        width: "210px",
        flexShrink: 0,
        background: hovered ? "#FDFAFF" : "#F9F7FE",
        borderRadius: "14px",
        border: `1px solid ${hovered ? "rgba(87,0,255,0.2)" : "rgba(87,0,255,0.08)"}`,
        padding: "12px 14px",
        boxShadow: hovered
          ? "0 6px 20px rgba(87,0,255,0.09), 0 2px 6px rgba(30,12,64,0.05)"
          : "0 1px 4px rgba(30,12,64,0.04)",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease, background 0.18s ease",
        textDecoration: "none",
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      {/* Logo container — clean square, no gradient bg */}
      <div style={{
        width: "42px", height: "42px", borderRadius: "10px",
        background: "#fff",
        border: "1px solid rgba(30,12,64,0.07)",
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0, overflow: "hidden",
      }}>
        <img
          src={c.logo} alt={c.name}
          style={{ width: "30px", height: "30px", objectFit: "contain" }}
          loading="lazy"
          decoding="async"
          onError={(e) => { e.target.style.display = "none"; }}
        />
      </div>

      {/* Text */}
      <div style={{ minWidth: 0, flex: 1 }}>
        <p style={{
          fontSize: "13px", fontWeight: 600, color: "#1E0C40",
          margin: 0, lineHeight: 1.25,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {c.name}
        </p>
        <p style={{
          fontSize: "11px", margin: "3px 0 0", fontWeight: 500,
          color: hovered ? "#5700FF" : "#8B7BAA",
          display: "flex", alignItems: "center", gap: "3px",
          transition: "color 0.15s",
          whiteSpace: "nowrap",
        }}>
          {hovered
            ? <><FiArrowRight size={9} style={{ flexShrink: 0 }} />Visit site</>
            : c.category}
        </p>
      </div>
    </a>
  );
}

/* A single infinite marquee row — duplicates items for seamless CSS looping */
function MarqueeRow({ items, direction = "left", speed = 420 }) {
  const [paused, setPaused] = useState(false);
  if (!items || items.length === 0) return null;
  // Pad to at least 12 items before doubling so the loop point is never
  // simultaneously visible in the viewport (avoids obvious repetition).
  const MIN = 12;
  const padded =
    items.length >= MIN
      ? items
      : Array.from({ length: Math.ceil(MIN / items.length) })
          .flatMap(() => items)
          .slice(0, MIN);
  const doubled = [...padded, ...padded];
  const animName = direction === "left" ? "mgc-marquee-l" : "mgc-marquee-r";
  return (
    <div
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        style={{
          display: "flex",
          gap: "14px",
          padding: "6px 0",
          width: "max-content",
          animation: `${animName} ${speed}s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
          willChange: "transform",
        }}
      >
        {doubled.map((c, i) => (
          <CustomerCard key={`${c.subdomain}-${i}`} c={c} />
        ))}
      </div>
    </div>
  );
}

function Customers() {
  const [allCustomers, setAllCustomers] = useState([]);

  useEffect(() => {
    let mounted = true;

    async function loadAllCustomers() {
      try {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        if (!baseUrl) return;

        const res = await fetch(`${baseUrl}/restaurants/public/showcase`);
        if (!res.ok) return;

        const payload = await res.json();
        const list = Array.isArray(payload?.data) ? payload.data : Array.isArray(payload) ? payload : [];
        const mapped = list
          .map((r) => {
            const subdomain = (
              r?.restaurantName ||
              r?.restaurant_name ||
              r?.subdomain ||
              r?.name ||
              ""
            )
              .toString()
              .trim();
            if (!subdomain) return null;
            return {
              name: (r?.name || r?.restaurant_name || "").toString().trim() || subdomain,
              subdomain,
              logo:
                r?.logo ||
                (r?.logoURL
                  ? `https://storage.googleapis.com/ecommerce-bucket-testing/${r.logoURL}`
                  : ""),
              category: (r?.business_type || r?.category || "Business").toString(),
            };
          })
          .filter(Boolean);

        if (!mapped.length || !mounted) return;

        const uniqueMap = new Map();
        mapped.forEach((c) => {
          const key = c.subdomain.toLowerCase();
          if (!uniqueMap.has(key)) uniqueMap.set(key, c);
        });
        setAllCustomers(Array.from(uniqueMap.values()));
      } catch (_) {
        // If API fails, marquee remains empty (no hardcoded fallback).
      }
    }

    loadAllCustomers();
    return () => {
      mounted = false;
    };
  }, []);

  /* Split customers into two rows for opposite-direction scroll */
  // Both rows get the full customer list so there are never too few items.
  // Row B is reversed so the two rows feel distinct without extra data.
  const rowA = allCustomers;
  const rowB = [...allCustomers].reverse();
  const statsRef = useRef(null);
  const [statsStarted, setStatsStarted] = useState(false);

  useEffect(() => {
    const el = statsRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="customers" style={{ background: "linear-gradient(180deg, #F7F3FF 0%, #F5F1F2 55%, #FAF8FF 100%)", padding: "5.5rem 0" }}>
      {/* CSS keyframes injected once */}
      <style>{`
        @keyframes mgc-marquee-l {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes mgc-marquee-r {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>

      <div style={{ maxWidth: "84rem", margin: "0 auto", padding: "0 2rem" }}>
        <SectionTitle
          eyebrow="OUR CUSTOMERS"
          title="Trusted by growing businesses"
          subtitle="Restaurants, florists, dessert shops, beauty brands, and specialty businesses use Menugic to create premium digital storefronts and grow online."
        />

        {/* Stats row — triggers count-up on first scroll into view */}
        <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "5.1rem" }}>
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.06}>
              <CountUpStat s={s} started={statsStarted} staggerDelay={i * 130} />
            </Reveal>
          ))}
        </div>

        {/* Section label */}
        <Reveal>
          <p style={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8B7BAA", marginBottom: "2.5rem" }}>
            Featured businesses on Menugic
          </p>
        </Reveal>
      </div>

      {/* Marquee rows — full-width, outside the max-width container */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "0.5rem" }}>
        <MarqueeRow items={rowA} direction="left"  speed={420} />
        <MarqueeRow items={rowB} direction="right" speed={485} />
      </div>
    </section>
  );
}

/* ─── WHY MENUGIC ────────────────────────────────────── */

function WhyMenugic() {
  const topRowCards = WHY_CARDS.slice(0, 3);
  const bottomRowCards = WHY_CARDS.slice(3);

  const renderWhyCard = (c, i) => (
    <Reveal key={c.title} delay={i * 0.07}>
      <div className="h-full bg-apple-bg rounded-3xl border border-[#E9E3F5] p-7 md:p-8 shadow-[0_8px_24px_rgba(30,12,64,0.05)] hover:shadow-[0_18px_38px_rgba(87,0,255,0.12)] hover:border-[#D8CAFA] hover:-translate-y-1 transition-all duration-250 flex flex-col">
        <div className="w-11 h-11 rounded-2xl bg-gradient-to-b from-[#F5EEFF] to-[#EEE3FF] border border-[#E4D7FF] flex items-center justify-center text-apple-accent mb-5 shadow-[0_3px_9px_rgba(87,0,255,0.07)]">
          <c.icon size={19} />
        </div>
        <h3 className="font-semibold text-apple-text text-[1.03rem] leading-snug tracking-[-0.01em] text-balance">{c.title}</h3>
        <p className="text-apple-muted text-[0.9rem] mt-3.5 leading-relaxed text-pretty">{c.text}</p>
      </div>
    </Reveal>
  );

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="WHY MENUGIC"
          title="A complete platform for selling beautifully online"
          titleClassName="md:text-[2.7rem]"
        />
        <div className="space-y-5 mt-2">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {topRowCards.map((c, i) => renderWhyCard(c, i))}
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:max-w-[68%] lg:max-w-[64%] mx-auto">
            {bottomRowCards.map((c, i) => renderWhyCard(c, i + topRowCards.length))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FEATURES ──────────────────────────────────────── */

function Features() {
  const FEATURE_CARDS = [
    {
      icon: FiShoppingCart,
      title: "Flexible ordering",
      description:
        "WhatsApp, add to cart, delivery, takeaway, and dine-in — all from one system.",
    },
    {
      icon: FiLayout,
      title: "Digital menu & website builder",
      description: "Build a polished menu, catalog, or storefront for your business.",
    },
    {
      icon: FiBarChart2,
      title: "Reports & analytics",
      description: "Track views, orders, and customer activity with clear insights.",
    },
    {
      icon: FiSettings,
      title: "Simple management",
      description: "Manage categories, products, branches, and settings in one place.",
    },
    {
      icon: FiGrid,
      title: "QR menu",
      description: "Let customers scan and browse your menu instantly.",
    },
    {
      icon: FiAlignLeft,
      title: "Category management",
      description: "Organize sections and products clearly for easy browsing.",
    },
    {
      icon: FiCamera,
      title: "Product images & prices",
      description: "Show products beautifully with images, pricing, and details.",
    },
    {
      icon: FiLayers,
      title: "Branch support",
      description: "Manage multiple branches with flexibility and control.",
    },
    {
      icon: FiSliders,
      title: "Template selection",
      description: "Choose the layout that best matches your brand style.",
    },
    {
      icon: FiMessageCircle,
      title: "Special instructions",
      description: "Allow customers to add notes and custom requests easily.",
    },
    {
      icon: FiPackage,
      title: "Flexible business settings",
      description: "Adjust features, ordering options, and business preferences.",
    },
    {
      icon: FiUsers,
      title: "Customer management",
      description: "Keep customer information organized for smoother service.",
    },
  ];

  return (
    <section id="features" className="py-24 bg-apple-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="FEATURES"
          title="Everything you need to launch, manage, and grow online"
          subtitle="From digital menus and QR ordering to reporting, branches, and customer management, Menugic gives businesses everything they need in one place."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURE_CARDS.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 0.05}>
              <div className="h-full bg-white rounded-2xl border border-[#E7E2F4] shadow-[0_8px_20px_rgba(30,12,64,0.06)] p-5 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(87,0,255,0.1)] hover:border-[#DACCF7] transition-all duration-200 flex flex-col min-h-[200px]">
                <div className="w-10 h-10 rounded-xl bg-[#F1EAFF] border border-[#E3D4FF] flex items-center justify-center text-apple-accent mb-3 shrink-0">
                  <card.icon size={18} />
                </div>
                <h4 className="text-[1.02rem] font-semibold text-apple-text leading-snug shrink-0">
                  {card.title}
                </h4>
                <p className="text-[0.9rem] text-apple-muted mt-2 leading-relaxed flex-1">
                  {card.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ──────────────────────────────────── */

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="How it works"
          title="From setup to first order in minutes"
          subtitle="A simple, focused flow that gets your business live quickly and professionally."
        />

        <div className="grid md:grid-cols-4 gap-6 mt-4 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-14 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent z-0" />

          {HOW_IT_WORKS.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.1}>
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#F1EAFF] border-2 border-white shadow-apple text-apple-accent font-bold text-sm mb-5 mx-auto">
                  {step.step}
                </div>
                <h4 className="font-semibold text-apple-text">{step.title}</h4>
                <p className="text-apple-muted text-sm mt-3 leading-relaxed">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PACKAGES ──────────────────────────────────────── */

function Packages({ onGetStarted }) {
  return (
    <section id="pricing" className="py-24 bg-apple-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Packages"
          title="Simple, honest pricing"
          subtitle="Two packages built for businesses at different stages of growth."
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {PLANS.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={`rounded-2xl border p-8 relative overflow-hidden transition-all h-full flex flex-col ${
                  plan.recommended
                    ? "bg-apple-text border-apple-text text-white shadow-apple-lg"
                    : "bg-white border-gray-200 shadow-apple"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute top-5 right-5 text-xs bg-white/15 border border-white/20 text-white rounded-full px-3 py-1 font-medium">
                    Most Popular
                  </span>
                )}

                <h3 className={`text-3xl font-semibold tracking-tight ${plan.recommended ? "text-white" : "text-apple-text"}`}>
                  {plan.name}
                </h3>
                <p className={`mt-2 text-sm ${plan.recommended ? "text-white/70" : "text-apple-muted"}`}>
                  {plan.tagline}
                </p>

                <div className="mt-7 min-h-[5.5rem]">
                  <div
                    className={`flex flex-wrap items-baseline gap-x-1 gap-y-0 ${
                      plan.recommended ? "text-white" : "text-apple-text"
                    }`}
                  >
                    <span
                      className={`text-[1.35rem] font-semibold leading-none ${
                        plan.recommended ? "text-white/90" : "text-apple-text"
                      }`}
                    >
                      $
                    </span>
                    <span className="text-[2.65rem] md:text-[2.85rem] font-bold leading-none tracking-tight">
                      {plan.price}
                    </span>
                    <span
                      className={`text-[0.95rem] font-medium leading-none ml-0.5 ${
                        plan.recommended ? "text-white/75" : "text-apple-muted"
                      }`}
                    >
                      / year
                    </span>
                  </div>
                  <p
                    className={`mt-2.5 text-[0.8rem] leading-snug ${
                      plan.recommended ? "text-white/55" : "text-apple-muted"
                    }`}
                  >
                    Billed yearly
                  </p>
                </div>

                <ul className="mt-6 space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <FiCheck
                        size={15}
                        className={`mt-0.5 shrink-0 ${plan.recommended ? "text-[#D9C7FF]" : "text-apple-accent"}`}
                      />
                      <span className={plan.recommended ? "text-white/88" : "text-apple-text"}>{f}</span>
                    </li>
                  ))}
                  {plan.name === "Premium" &&
                    VIP_EXCLUSIVE_FEATURES.map((f) => (
                      <li key={`no-${f}`} className="flex items-start gap-3 text-sm">
                        <FiX size={15} className="mt-0.5 shrink-0 text-red-500" aria-hidden />
                        <span className="text-apple-muted">{f}</span>
                      </li>
                    ))}
                </ul>

                {plan.supportingLine && (
                  <p className="mt-5 pt-5 border-t border-white/12 text-[0.78rem] leading-relaxed text-white/50 shrink-0">
                    {plan.supportingLine}
                  </p>
                )}

                <button
                  type="button"
                  onClick={() => onGetStarted?.()}
                  className={`${plan.supportingLine ? "mt-6" : "mt-8"} w-full rounded-full py-3.5 font-medium text-sm transition-all shrink-0 ${
                    plan.recommended
                      ? "bg-white text-apple-text hover:bg-gray-100"
                      : "bg-apple-accent text-white hover:bg-apple-accentHover"
                  }`}
                >
                  Get {plan.name}
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── BUSINESS TYPES (DETAILED) ─────────────────────── */

function BusinessTypes() {
  return (
    <section id="businesses" className="py-24 bg-apple-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle
          eyebrow="Use Cases"
          title="Built for businesses across food, retail, beauty, and more"
          subtitle="Menugic adapts to your business type — from restaurants and cafés to florists, beauty brands, grocery stores, and specialty shops."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-2">
          {BUSINESS_CARDS.map((b, i) => {
            const Icon = b.icon;
            return (
              <Reveal key={b.name} delay={(i % 4) * 0.06} className="h-full">
                <div className="h-full bg-white rounded-2xl border border-[#E7E2F4] shadow-[0_8px_20px_rgba(30,12,64,0.06)] p-6 flex flex-col hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(87,0,255,0.1)] hover:border-[#DACCF7] transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#F1EAFF] border border-[#E3D4FF] flex items-center justify-center text-apple-accent mb-4 shrink-0">
                    <Icon size={18} strokeWidth={2} aria-hidden />
                  </div>
                  <h4 className="font-semibold text-apple-text text-[1.02rem] leading-snug shrink-0">{b.name}</h4>
                  <p className="text-apple-muted text-sm mt-2.5 leading-relaxed flex-1">{b.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ────────────────────────────────────────────── */

function FAQ() {
  const [open, setOpen] = useState(null);
  const accordionEase = [0.33, 0.11, 0.25, 1];

  return (
    <section id="faq" className="py-28 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionTitle
          title="Frequently asked questions"
          titleClassName="max-w-2xl !text-2xl md:!text-[2.15rem] !leading-snug"
        />

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={0}>
                <div
                  className={`rounded-2xl overflow-hidden border transition-[border-color,box-shadow,background-color] duration-300 ease-[cubic-bezier(0.33,0.11,0.25,1)] ${
                    isOpen
                      ? "border-transparent bg-gradient-to-b from-white via-[#FDFBFF] to-[#F9F6FC] shadow-[0_10px_36px_-14px_rgba(95,60,150,0.09),0_2px_8px_rgba(30,12,64,0.04)]"
                      : "border-[#EDE9F4]/90 bg-white shadow-[0_1px_8px_rgba(30,12,64,0.035)] hover:border-[#E4DCF2]/95 hover:bg-[#FDFCFF] hover:shadow-[0_6px_22px_-8px_rgba(30,12,64,0.06)]"
                  }`}
                >
                  <button
                    type="button"
                    className={`w-full text-left px-8 flex items-start justify-between gap-4 transition-[background-color,padding] duration-300 ease-out ${
                      isOpen ? "pt-6 pb-4" : "py-6 hover:bg-[#FBFAFD]/80"
                    }`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-medium text-apple-text text-[1.02rem] leading-snug pr-2">{item.q}</span>
                    <FiChevronDown
                      size={20}
                      strokeWidth={1.85}
                      className={`text-apple-muted shrink-0 mt-0.5 transition-[transform,color] duration-[420ms] ease-[cubic-bezier(0.33,1,0.68,1)] will-change-transform ${
                        isOpen ? "rotate-180 text-[#8B6FC8]" : "text-apple-muted/85"
                      }`}
                      aria-hidden
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.42,
                          ease: accordionEase,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="mx-8 border-t border-[#E8E0F0]/55" />
                        <p className="px-8 pb-8 pt-5 text-[0.93rem] leading-[1.65] text-apple-muted/88 font-normal">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── CONTACT / LEADS ───────────────────────────────── */

function ContactLead() {
  const waPrefill = `https://wa.me/${CONTACT_DETAILS.phoneWhatsappDigits}?text=${encodeURIComponent(
    "Hi Menugic — I'd like to learn more about launching my storefront."
  )}`;

  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    email: "",
    phone: "",
    businessType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim());
    if (
      !form.fullName.trim() ||
      !form.businessName.trim() ||
      !form.email.trim() ||
      !emailOk ||
      !form.businessType ||
      !form.message.trim()
    ) {
      return;
    }
    const baseUrl = process.env.REACT_APP_BASE_URL;
    if (!baseUrl) {
      setSubmitError("Missing REACT_APP_BASE_URL. Cannot send your message.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`${baseUrl}/public/contact-lead`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: form.fullName.trim(),
          businessName: form.businessName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          businessType: form.businessType,
          message: form.message.trim(),
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setSubmitError(data.message || "Something went wrong. Please try WhatsApp or email.");
        return;
      }
      setSubmitted(true);
    } catch {
      setSubmitError("Network error. Check your connection or try WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  const resetForm = () => {
    setForm({
      fullName: "",
      businessName: "",
      email: "",
      phone: "",
      businessType: "",
      message: "",
    });
    setSubmitted(false);
    setSubmitError("");
  };

  const inputClass =
    "mt-1.5 w-full rounded-xl border border-[#E6E0EF] bg-white px-4 py-3 text-[0.9375rem] text-apple-text placeholder:text-apple-muted/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition-[border-color,box-shadow] outline-none focus:border-apple-accent focus:ring-2 focus:ring-apple-accent/20";

  const labelClass = "block text-[0.8125rem] font-medium text-apple-text/92 tracking-tight";

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-[#EDE7F5]/90 bg-gradient-to-b from-[#FCFAFF] via-[#F8F4FC] to-[#F3EFF8] py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DDD4EC]/80 to-transparent"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(87,0,255,0.06)_0%,transparent_68%)]" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.05)_0%,transparent_70%)]" aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-24">
          {/* Left column */}
          <Reveal>
            <div className="lg:pr-4">
              <p className="text-xs font-semibold tracking-[0.22em] text-apple-accent">
                CONTACT
              </p>
              <h2 className="mt-4 text-[1.85rem] font-semibold leading-[1.12] tracking-tight text-apple-text sm:text-4xl md:text-[2.45rem] md:leading-[1.08]">
                Let’s build your digital storefront
              </h2>
              <p className="mt-5 max-w-lg text-[0.98rem] leading-relaxed text-apple-muted md:text-[1.05rem]">
                Tell us about your business and we’ll help you launch a premium menu, catalog, or ordering website with Menugic.
              </p>

              <ul className="mt-10 space-y-6">
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8E2F2] bg-white/90 text-apple-accent shadow-[0_2px_10px_-4px_rgba(87,0,255,0.18)]">
                    <FiPhone size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-muted/90">Phone</p>
                    <a
                      href={`tel:${CONTACT_DETAILS.phoneTel.replace(/\s/g, "")}`}
                      className="mt-1 inline-block text-[0.95rem] font-medium text-apple-text underline decoration-[#D9CFE8] underline-offset-4 transition-colors hover:text-apple-accent hover:decoration-apple-accent/40"
                    >
                      {CONTACT_DETAILS.phoneDisplay}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8E2F2] bg-white/90 text-apple-accent shadow-[0_2px_10px_-4px_rgba(87,0,255,0.18)]">
                    <FiMail size={18} aria-hidden />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-muted/90">Email</p>
                    <a
                      href={`mailto:${CONTACT_DETAILS.email}`}
                      className="mt-1 inline-block text-[0.95rem] font-medium text-apple-text underline decoration-[#D9CFE8] underline-offset-4 transition-colors hover:text-apple-accent hover:decoration-apple-accent/40"
                    >
                      {CONTACT_DETAILS.email}
                    </a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <span className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-[#E8E2F2] bg-white/90 text-[#25D366] shadow-[0_2px_10px_-4px_rgba(37,211,102,0.2)]">
                    <FaWhatsapp className="h-[18px] w-[18px]" aria-hidden />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-apple-muted/90">WhatsApp</p>
                    <a
                      href={waPrefill}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-apple-text underline decoration-[#D9CFE8] underline-offset-4 transition-colors hover:text-apple-accent hover:decoration-apple-accent/40"
                    >
                      Chat with us directly
                      <FiArrowRight className="shrink-0 opacity-70" size={14} aria-hidden />
                    </a>
                  </div>
                </li>
              </ul>

              <a
                href={waPrefill}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center justify-center gap-2 rounded-full border border-[#D4E8DC] bg-white/90 px-5 py-3 text-sm font-medium text-[#128C7E] shadow-[0_2px_12px_-4px_rgba(18,140,126,0.12)] transition-all hover:border-[#25D366]/55 hover:bg-[#F3FCF6] hover:shadow-[0_6px_20px_-8px_rgba(37,211,102,0.22)]"
              >
                <FaWhatsapp className="h-[18px] w-[18px]" aria-hidden />
                Chat on WhatsApp
              </a>
            </div>
          </Reveal>

          {/* Right column — form */}
          <Reveal delay={1}>
            <div className="rounded-[1.65rem] border border-[#E4DCF0]/90 bg-white/95 p-7 shadow-[0_28px_64px_-36px_rgba(95,55,140,0.28),0_12px_40px_-24px_rgba(30,12,64,0.1),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-[2px] sm:p-8 md:p-9">
              <h3 className="text-lg font-semibold tracking-tight text-apple-text md:text-xl">
                Send us a message
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-apple-muted">
                Share a few details and we’ll get back to you shortly.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mt-8 rounded-2xl border border-[#E0D8EF] bg-gradient-to-b from-[#FAF8FF] to-white px-6 py-10 text-center"
                  >
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#EDE8FF] text-apple-accent">
                      <FiCheck className="h-7 w-7" strokeWidth={2.25} aria-hidden />
                    </div>
                    <p className="mt-5 text-lg font-semibold text-apple-text">Thank you</p>
                    <p className="mx-auto mt-2 max-w-sm text-sm leading-relaxed text-apple-muted">
                      Your message was sent. We’ll get back to you soon. You can also reach us on WhatsApp anytime.
                    </p>
                    <button
                      type="button"
                      onClick={resetForm}
                      className="mt-8 rounded-full border border-[#E4DCF0] bg-white px-6 py-2.5 text-sm font-medium text-apple-text transition-all hover:border-apple-accent/35 hover:bg-[#FAF8FF]"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    className="mt-8 space-y-5"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    {submitError && (
                      <p className="rounded-xl border border-red-200/90 bg-red-50/90 px-4 py-3 text-sm text-red-800" role="alert">
                        {submitError}
                      </p>
                    )}
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-full-name" className={labelClass}>
                          Full Name
                        </label>
                        <input
                          id="contact-full-name"
                          type="text"
                          autoComplete="name"
                          value={form.fullName}
                          onChange={update("fullName")}
                          className={inputClass}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-business-name" className={labelClass}>
                          Business Name
                        </label>
                        <input
                          id="contact-business-name"
                          type="text"
                          autoComplete="organization"
                          value={form.businessName}
                          onChange={update("businessName")}
                          className={inputClass}
                          placeholder="Business or brand"
                          required
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-email" className={labelClass}>
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={update("email")}
                          className={inputClass}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                      <div className="sm:col-span-1">
                        <label htmlFor="contact-phone" className={labelClass}>
                          Phone / WhatsApp Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={update("phone")}
                          className={inputClass}
                          placeholder="Optional"
                        />
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-business-type" className={labelClass}>
                          Business Type
                        </label>
                        <select
                          id="contact-business-type"
                          value={form.businessType}
                          onChange={update("businessType")}
                          className={`${inputClass} appearance-none bg-[length:1rem] bg-[right_1rem_center] bg-no-repeat pr-10 cursor-pointer`}
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%235B4A7A'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          }}
                          required
                        >
                          <option value="">Select a type</option>
                          {CONTACT_BUSINESS_TYPES.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="contact-message" className={labelClass}>
                          Message
                        </label>
                        <textarea
                          id="contact-message"
                          rows={4}
                          value={form.message}
                          onChange={update("message")}
                          className={`${inputClass} resize-y min-h-[120px]`}
                          placeholder="Tell us what you’d like to launch…"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap sm:items-center">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full bg-apple-accent px-8 text-[0.95rem] font-medium text-white shadow-[0_4px_22px_-4px_rgba(87,0,255,0.45)] transition-all hover:bg-apple-accentHover hover:shadow-[0_8px_28px_-6px_rgba(87,0,255,0.48)] disabled:opacity-70 sm:flex-none"
                      >
                        {submitting ? "Sending…" : "Send Message"}
                        {!submitting && <FiArrowRight className="shrink-0" size={18} aria-hidden />}
                      </button>
                      <a
                        href={waPrefill}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[3.25rem] flex-1 items-center justify-center gap-2 rounded-full border border-[#E4DCF0] bg-white/90 px-8 text-[0.95rem] font-medium text-apple-text backdrop-blur-[1px] transition-all hover:border-[#25D366]/45 hover:bg-[#F6FFFA] sm:flex-none"
                      >
                        <FaWhatsapp className="h-[18px] w-[18px] text-[#25D366]" aria-hidden />
                        Chat on WhatsApp
                      </a>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ─── FINAL CTA ──────────────────────────────────────── */

function FinalCTA({ onGetStarted, onSeeLiveDemo }) {
  return (
    <section className="py-28 md:py-32 bg-apple-bg">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-[#E8E2F3]/70 bg-gradient-to-b from-white via-[#FDFBFF] to-[#F6F2FA] p-12 md:p-16 shadow-[0_24px_56px_-28px_rgba(95,55,140,0.14),0_8px_32px_-12px_rgba(30,12,64,0.07),inset_0_1px_0_rgba(255,255,255,0.85)]">
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-48 w-[min(100%,520px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.09)_0%,transparent_68%)]"
              aria-hidden
            />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.22em] uppercase text-apple-accent mb-5">
                START TODAY
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-[2.65rem] font-semibold tracking-tight text-apple-text leading-[1.12] max-w-[22rem] sm:max-w-3xl mx-auto">
                Build a digital experience your customers will remember
              </h2>
              <p className="mt-6 text-base md:text-lg text-apple-muted max-w-xl mx-auto leading-relaxed font-normal">
                Create a polished menu, catalog, or ordering website with premium templates, easy management, and
                smarter ordering.
              </p>
              <div className="mt-10 flex gap-3 justify-center flex-wrap">
                <button
                  type="button"
                  onClick={() => onGetStarted?.()}
                  className="bg-apple-accent text-white rounded-full px-9 py-4 text-[0.95rem] font-medium hover:bg-apple-accentHover transition-all flex items-center justify-center gap-2 min-h-[3.25rem] shadow-[0_4px_20px_-2px_rgba(87,0,255,0.38)] hover:shadow-[0_6px_24px_-2px_rgba(87,0,255,0.42)]"
                >
                  Get Started <FiArrowRight className="shrink-0" size={18} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={() => onSeeLiveDemo?.()}
                  className="rounded-full border border-[#E4DCF0] bg-white/75 px-9 py-4 text-[0.95rem] font-medium text-apple-text backdrop-blur-[2px] transition-all hover:border-[#D4C8E8] hover:bg-white hover:shadow-[0_4px_18px_-6px_rgba(60,40,100,0.12)] min-h-[3.25rem]"
                >
                  See Live Demo
                </button>
              </div>
              <p className="mt-9 text-[0.8125rem] md:text-sm text-apple-muted/88 max-w-md mx-auto leading-relaxed tracking-wide">
                No coding needed • Launch in minutes • Built for every business type
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const FOOTER_COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Templates", href: "#templates" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Business Types",
    links: [
      { label: "Restaurants", href: "#businesses" },
      { label: "Florists", href: "#businesses" },
      { label: "Beauty & Cosmetics", href: "#businesses" },
      { label: "Grocery Stores", href: "#businesses" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "#" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "#" },
      { label: "FAQ", href: "#faq" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

const FOOTER_SOCIAL = [
  { Icon: FaInstagram, label: "Instagram", href: "#" },
  { Icon: FaFacebookF, label: "Facebook", href: "#" },
  { Icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
];

/* ─── FOOTER ─────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-white border-t border-[#EDE9F4]">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-x-8 gap-y-10 lg:gap-x-12 mb-14 md:mb-16">
          <div className="col-span-2 md:col-span-2 max-w-sm">
            <p className="font-semibold text-apple-text text-lg tracking-tight mb-3">Menugic</p>
            <p className="text-sm text-apple-muted leading-relaxed">
              Premium menus, catalogs, and ordering websites for modern businesses.
            </p>
            <div className="flex gap-2.5 mt-6">
              {FOOTER_SOCIAL.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E8E4EF] bg-white text-apple-muted transition-all duration-200 hover:border-[#D4C8EC] hover:bg-[#FAF8FF] hover:text-apple-accent hover:shadow-[0_4px_14px_-4px_rgba(87,0,255,0.15)]"
                >
                  <Icon className="h-[15px] w-[15px]" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} className="min-w-0">
              <p className="text-xs font-semibold tracking-widest uppercase text-apple-text/90 mb-4">
                {col.title}
              </p>
              <ul className="space-y-2.5">
                {col.links.map((item) => (
                  <li key={`${col.title}-${item.label}`}>
                    <a
                      href={item.href}
                      className="text-sm text-apple-muted transition-colors duration-200 hover:text-apple-text"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100/90 pt-5 flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-4">
          <p className="text-[0.6875rem] sm:text-xs text-apple-muted/90 tracking-wide text-center sm:text-left">
            © 2026 Menugic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ─── ROOT ────────────────────────────────────────────── */

export default function HomeV2() {
  const [demoOpen, setDemoOpen] = useState(false);
  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="font-sans antialiased bg-white text-apple-text">
      <Navbar onGetStarted={scrollToContact} />
      <Hero onGetStarted={scrollToContact} onSeeLiveDemo={() => setDemoOpen(true)} />
      <BusinessApplicability />
      <Templates />
      <Customers />
      <WhyMenugic />
      <Features />
      <HowItWorks />
      <Packages onGetStarted={scrollToContact} />
      <BusinessTypes />
      <FAQ />
      <FinalCTA onGetStarted={scrollToContact} onSeeLiveDemo={() => setDemoOpen(true)} />
      <ContactLead />
      <Footer />
      <LiveDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </div>
  );
}
