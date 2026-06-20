import React from "react";
import { FaCreditCard, FaWhatsapp, FaMoneyBillWave, FaStore } from "react-icons/fa";

const METHOD_CONFIG = {
  card: { icon: FaCreditCard, en: "Credit/Debit Card", ar: "بطاقة ائتمان", desc_en: "Pay securely online", desc_ar: "ادفع بأمان عبر الإنترنت", color: "#3b82f6" },
  whatsapp: { icon: FaWhatsapp, en: "WhatsApp", ar: "واتساب", desc_en: "Order via WhatsApp", desc_ar: "اطلب عبر واتساب", color: "#25d366" },
  cod: { icon: FaMoneyBillWave, en: "Cash on Delivery", ar: "الدفع عند التوصيل", desc_en: "Pay when delivered", desc_ar: "ادفع عند الاستلام", color: "#f59e0b" },
  pay_at_store: { icon: FaStore, en: "Pay at Store", ar: "الدفع في المتجر", desc_en: "Pay when you pick up", desc_ar: "ادفع عند الاستلام من المتجر", color: "#8b5cf6" },
};

export default function PaymentMethodStep({ restaurant, activeLanguage, selectedMethod, onMethodChange, totalPrice, currencySymbol }) {
  let features = {};
  try { features = typeof restaurant?.features === "string" ? JSON.parse(restaurant.features) : restaurant?.features || {}; } catch { features = {}; }

  const isEnabled = features.online_payment === true;
  const availableMethods = isEnabled ? (features.payment_methods || ["whatsapp"]) : ["whatsapp"];
  const isRtl = activeLanguage === "ar";

  return (
    <div style={{ direction: isRtl ? "rtl" : "ltr" }}>
      <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>
        {isRtl ? "اختر طريقة الدفع" : "Choose Payment Method"}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
        {availableMethods.map(method => {
          const cfg = METHOD_CONFIG[method];
          if (!cfg) return null;
          const Icon = cfg.icon;
          const isSelected = selectedMethod === method;
          const mainColor = restaurant?.theme ? (JSON.parse(typeof restaurant.theme === "string" ? restaurant.theme : "{}").mainColor || "#5eabb1") : "#5eabb1";

          return (
            <div
              key={method}
              onClick={() => onMethodChange(method)}
              style={{
                padding: "16px 12px", borderRadius: 14, cursor: "pointer",
                border: isSelected ? `2px solid ${mainColor}` : "2px solid rgba(148,163,184,0.2)",
                background: isSelected ? `${mainColor}08` : "#fff",
                display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
                transition: "all 0.2s",
              }}
            >
              <Icon size={24} color={isSelected ? mainColor : cfg.color} />
              <div style={{ fontSize: 13, fontWeight: 600, color: "#0f172a", textAlign: "center" }}>
                {isRtl ? cfg.ar : cfg.en}
              </div>
              <div style={{ fontSize: 11, color: "#64748b", textAlign: "center" }}>
                {isRtl ? cfg.desc_ar : cfg.desc_en}
              </div>
            </div>
          );
        })}
      </div>
      {totalPrice > 0 && (
        <div style={{ marginTop: 14, padding: "10px 14px", borderRadius: 10, background: "#f8fafc", fontSize: 13, fontWeight: 600, color: "#0f172a", textAlign: "center" }}>
          {isRtl ? "المجموع" : "Total"}: {totalPrice} {currencySymbol}
        </div>
      )}
    </div>
  );
}
