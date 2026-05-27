import React from "react";
import { motion } from "framer-motion";
import { FiShoppingCart } from "react-icons/fi";
import { convertPrice } from "../../../utilities/convertPrice";

export default function BottomBar({
  itemCount,
  cart,
  currencySymbol,
  accentColor,
  popupHandler,
}) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed bottom-0 left-0 right-0 z-[9990] p-4 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent"
    >
      <button
        onClick={() => popupHandler("cart")}
        className="w-full flex items-center justify-between rounded-2xl px-6 py-4 text-black font-semibold shadow-2xl transition-all hover:brightness-110"
        style={{
          background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
          boxShadow: `0 8px 32px ${accentColor}40`,
        }}
      >
        <div className="flex items-center gap-3">
          <FiShoppingCart className="w-5 h-5" />
          <span className="text-sm font-bold">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </span>
        </div>
        <span className="text-sm font-bold">
          {convertPrice(total, currencySymbol)}
        </span>
      </button>
    </motion.div>
  );
}
