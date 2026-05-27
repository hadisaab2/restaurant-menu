import React from "react";
import { motion } from "framer-motion";
import { FiX, FiMapPin } from "react-icons/fi";

export default function LocationPopup({ restaurant, activeLanguage, accentColor, popupHandler }) {
  const branches = restaurant?.branches || [];

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-x-0 bottom-0 z-[9999] max-h-[70vh] overflow-y-auto rounded-t-3xl border-t border-white/[0.08] bg-[#0f0f0f] shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:max-w-md md:rounded-3xl md:border"
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <h2 className="text-lg font-bold text-white">
          {activeLanguage === "ar" ? "الفروع" : "Branches"}
        </h2>
        <button onClick={() => popupHandler(null)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white">
          <FiX className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6 space-y-3">
        {branches.map((branch) => (
          <div key={branch.id} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] p-4">
            <FiMapPin className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: accentColor }} />
            <div>
              <h3 className="text-sm font-semibold text-white/90">
                {activeLanguage === "ar" && branch.ar_name ? branch.ar_name : branch.en_name || branch.name}
              </h3>
              {branch.address && <p className="text-xs text-white/40 mt-1">{branch.address}</p>}
              {branch.phone && <p className="text-xs text-white/40 mt-0.5">{branch.phone}</p>}
            </div>
          </div>
        ))}
        {branches.length === 0 && (
          <p className="text-center text-white/30 text-sm py-8">
            {activeLanguage === "ar" ? "لا توجد فروع" : "No branches available"}
          </p>
        )}
      </div>
    </motion.div>
  );
}
