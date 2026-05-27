import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiShoppingCart, FiMenu, FiX, FiChevronDown, FiInfo, FiMessageCircle, FiPhone, FiShare2 } from "react-icons/fi";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function Header({
  restaurant,
  activeLanguage,
  handleLanguage,
  itemCount,
  accentColor,
  popupHandler,
  features,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);

  const languages = (restaurant?.languages || "en")
    .split("&")
    .filter(Boolean)
    .map((code) => ({
      code: code.toUpperCase(),
      lang: code,
      label: code === "ar" ? "العربية" : "English",
    }));

  const hasMultipleLanguages = languages.length > 1;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const mobileMenuItems = [
    features?.about_us && { label: activeLanguage === "ar" ? "من نحن" : "About", icon: FiInfo, action: () => popupHandler("contact") },
    { label: activeLanguage === "ar" ? "اتصل بنا" : "Contact", icon: FiPhone, action: () => popupHandler("contact") },
    { label: activeLanguage === "ar" ? "رأيك يهمنا" : "Feedback", icon: FiMessageCircle, action: () => popupHandler("feedback") },
    { label: activeLanguage === "ar" ? "مشاركة" : "Share", icon: FiShare2, action: () => popupHandler("share") },
  ].filter(Boolean);

  const closeMobile = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
  };

  const openMobile = () => {
    setIsMobileMenuOpen(true);
    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="flex-shrink-0"
            >
              <div className="flex items-center gap-3">
                {restaurant?.logoURL && (
                  <img
                    src={`${STORAGE_URL}${restaurant.logoURL}`}
                    alt={restaurant?.name}
                    className="h-10 w-10 rounded-xl object-cover border border-white/10"
                  />
                )}
                <h1
                  className="text-xl md:text-2xl font-bold tracking-wider"
                  style={{ color: accentColor }}
                >
                  {restaurant?.name || ""}
                </h1>
              </div>
            </motion.div>

            {/* Right Side Actions */}
            <div className="flex items-center gap-3 md:gap-5">
              {/* Language Toggle */}
              {hasMultipleLanguages && (
                <div className="relative">
                  <button
                    onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                    className="flex items-center gap-1 text-white/80 hover:text-white transition-colors duration-300 text-sm font-medium px-2 py-1 rounded-lg border border-white/10 bg-white/5"
                  >
                    <span>{activeLanguage?.toUpperCase()}</span>
                    <FiChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        isLanguageOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isLanguageOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full right-0 mt-2 w-32 bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl overflow-hidden"
                      >
                        {languages.map((lang) => (
                          <button
                            key={lang.code}
                            onClick={() => {
                              handleLanguage(lang.lang);
                              setIsLanguageOpen(false);
                            }}
                            className={`w-full px-4 py-2.5 text-left text-sm transition-colors duration-200 ${
                              activeLanguage === lang.lang
                                ? "text-white"
                                : "text-white/60 hover:bg-white/5 hover:text-white"
                            }`}
                            style={activeLanguage === lang.lang ? { backgroundColor: `${accentColor}33` , color: accentColor } : {}}
                          >
                            {lang.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}

              {/* Cart */}
              {features?.cart && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="relative p-2 text-white/80 hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => popupHandler("cart")}
                >
                  <FiShoppingCart className="w-6 h-6" />
                  {itemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 500 }}
                      className="absolute -top-1 -right-1 w-5 h-5 text-black text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                    >
                      {itemCount}
                    </motion.span>
                  )}
                </motion.button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={isMobileMenuOpen ? closeMobile : openMobile}
                className="lg:hidden p-2 text-white/80 hover:text-white transition-colors duration-300"
              >
                {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] lg:hidden"
              onClick={closeMobile}
            />
            <motion.div
              initial={{ x: activeLanguage === "ar" ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: activeLanguage === "ar" ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={`fixed top-0 bottom-0 w-full max-w-sm bg-black/95 backdrop-blur-xl border-white/10 z-[10001] lg:hidden overflow-y-auto ${
                activeLanguage === "ar" ? "left-0 border-r" : "right-0 border-l"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-white/10">
                  <h2 className="text-xl font-bold" style={{ color: accentColor }}>
                    {restaurant?.name}
                  </h2>
                  <button onClick={closeMobile} className="p-2 text-white/80 hover:text-white">
                    <FiX className="w-6 h-6" />
                  </button>
                </div>

                <nav className="flex-1 px-6 py-8 space-y-2">
                  {mobileMenuItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => { closeMobile(); item.action(); }}
                      className="w-full flex items-center gap-3 px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 text-base font-medium"
                    >
                      <item.icon className="w-5 h-5 text-white/40" />
                      {item.label}
                    </motion.button>
                  ))}
                </nav>

                {/* Language in mobile */}
                {hasMultipleLanguages && (
                  <div className="p-6 border-t border-white/10">
                    <p className="text-white/40 text-sm mb-3">
                      {activeLanguage === "ar" ? "اللغة" : "Language"}
                    </p>
                    <div className="flex gap-2">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => { handleLanguage(lang.lang); closeMobile(); }}
                          className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300"
                          style={
                            activeLanguage === lang.lang
                              ? { background: accentColor, color: "#000" }
                              : { background: "rgba(255,255,255,0.05)", color: "rgba(255,255,255,0.6)" }
                          }
                        >
                          {lang.code}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
