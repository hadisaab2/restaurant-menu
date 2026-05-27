import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiX, FiStar, FiSend } from "react-icons/fi";
import axios from "axios";

export default function FeedbackPopup({ restaurant, restaurantName, activeLanguage, accentColor, popupHandler }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState("idle");
  const baseUrl = process.env.REACT_APP_BASE_URL;

  const submit = async () => {
    if (!rating) return;
    setStatus("sending");
    try {
      await axios.post(`${baseUrl}/feedback`, {
        restaurant_id: restaurant?.id,
        rating,
        comment,
        restaurant_name: restaurantName,
      });
      setStatus("success");
    } catch {
      setStatus("error");
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
        <h2 className="text-lg font-bold text-white">
          {activeLanguage === "ar" ? "رأيك يهمنا" : "Feedback"}
        </h2>
        <button onClick={() => popupHandler(null)} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white">
          <FiX className="w-4 h-4" />
        </button>
      </div>
      <div className="p-6">
        {status === "success" ? (
          <div className="text-center py-8">
            <p className="text-white text-lg font-semibold mb-2">
              {activeLanguage === "ar" ? "شكرا لك!" : "Thank you!"}
            </p>
            <p className="text-white/40 text-sm">
              {activeLanguage === "ar" ? "تم إرسال تقييمك بنجاح" : "Your feedback has been submitted"}
            </p>
          </div>
        ) : (
          <div className="space-y-5">
            {/* Stars */}
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRating(star)} className="p-1 transition-transform hover:scale-110">
                  <FiStar
                    className="w-8 h-8 transition-colors"
                    style={{
                      color: star <= rating ? accentColor : "rgba(255,255,255,0.15)",
                      fill: star <= rating ? accentColor : "none",
                    }}
                  />
                </button>
              ))}
            </div>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder={activeLanguage === "ar" ? "أكتب تعليقك هنا..." : "Write your feedback..."}
              rows={3}
              className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none focus:border-white/[0.15]"
            />
            <button
              onClick={submit}
              disabled={!rating || status === "sending"}
              className="w-full rounded-xl py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 disabled:opacity-40 flex items-center justify-center gap-2"
              style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
            >
              <FiSend className="w-4 h-4" />
              {status === "sending"
                ? (activeLanguage === "ar" ? "جاري الإرسال..." : "Sending...")
                : (activeLanguage === "ar" ? "إرسال" : "Submit")}
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
