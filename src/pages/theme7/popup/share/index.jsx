import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiCopy, FiCheck, FiShare2 } from "react-icons/fi";

export default function SharePopup({ restaurant, accentColor, popupHandler }) {
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: restaurant?.name, url });
    }
  };

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-x-0 bottom-0 z-[9999] rounded-t-3xl border-t border-white/[0.08] bg-[#0f0f0f] shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:max-w-md md:rounded-3xl md:border"
    >
      <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.06]">
        <h2 className="text-lg font-bold text-white">Share</h2>
        <button onClick={() => popupHandler(null)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white">
          <FiX className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6 space-y-4">
        {/* Copy link */}
        <div className="flex items-center gap-2">
          <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white/50 truncate">
            {url}
          </div>
          <button
            onClick={copy}
            className="flex h-11 w-11 items-center justify-center rounded-xl transition-colors"
            style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
          >
            {copied ? <FiCheck className="w-5 h-5" /> : <FiCopy className="w-5 h-5" />}
          </button>
        </div>

        {navigator.share && (
          <button
            onClick={nativeShare}
            className="w-full rounded-xl py-3.5 text-sm font-bold text-black flex items-center justify-center gap-2 transition-all hover:brightness-110"
            style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
          >
            <FiShare2 className="w-4 h-4" />
            Share
          </button>
        )}
      </div>
    </motion.div>
  );
}
