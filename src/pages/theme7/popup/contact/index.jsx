import React from "react";
import { motion } from "framer-motion";
import { FiX, FiPhone, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";

export default function ContactPopup({ restaurant, activeLanguage, accentColor, popupHandler }) {
  const branch = restaurant?.branches?.[0];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-x-0 bottom-0 z-[9999] rounded-t-3xl border-t border-white/[0.08] bg-[#0f0f0f] shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:max-w-md md:rounded-3xl md:border"
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <h2 className="text-lg font-bold text-white">
          {activeLanguage === "ar" ? "اتصل بنا" : "Contact"}
        </h2>
        <button onClick={() => popupHandler(null)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white">
          <FiX className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6 space-y-3">
        {branch?.phone && (
          <a href={`tel:${branch.phone}`} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-white/70 hover:text-white transition-colors">
            <FiPhone className="w-5 h-5" style={{ color: accentColor }} />
            <span className="text-sm">{branch.phone}</span>
          </a>
        )}
        {branch?.whatsapp_number && (
          <a href={`https://wa.me/${branch.whatsapp_number}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-400 hover:bg-emerald-500/15 transition-colors">
            <FiMessageCircle className="w-5 h-5" />
            <span className="text-sm">{activeLanguage === "ar" ? "واتساب" : "WhatsApp"}</span>
          </a>
        )}
        {branch?.email && (
          <a href={`mailto:${branch.email}`} className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-white/70 hover:text-white transition-colors">
            <FiMail className="w-5 h-5" style={{ color: accentColor }} />
            <span className="text-sm">{branch.email}</span>
          </a>
        )}
        {branch?.address && (
          <div className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4 text-white/70">
            <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            <span className="text-sm">{branch.address}</span>
          </div>
        )}
      </div>
    </motion.div>
  );
}
