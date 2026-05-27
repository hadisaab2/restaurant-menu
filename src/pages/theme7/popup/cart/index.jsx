import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { FiX, FiMinus, FiPlus, FiTrash2, FiSend } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { removeFromCart, adjustQuantity, clearCart } from "../../../../redux/cart/cartActions";
import { useAddOrderQuery } from "../../../../apis/restaurants/addOrder";
import { trackOrderPlaced } from "../../../../utilities/analyticsTracking";
import { convertPrice } from "../../../../utilities/convertPrice";
import { formatCartItemOptionsForOrderMessage } from "../../../../product-options/cartLabels";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

function CartItem({ item, restaurantName, currencySymbol, accentColor, activeLanguage, dispatch }) {
  const name = activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name;
  const imageUrl = item.image_url ? `${STORAGE_URL}${item.image_url}` : null;
  const itemTotal = item.price * item.quantity;

  return (
    <div className="flex gap-3 py-4 border-b border-white/[0.06] last:border-b-0">
      {imageUrl && (
        <img src={imageUrl} alt={name} className="h-16 w-16 rounded-xl object-cover flex-shrink-0" />
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-semibold text-white/90 truncate">{name}</h4>
          <button
            onClick={() => dispatch(removeFromCart(restaurantName, item.uniqueId))}
            className="text-white/20 hover:text-red-400 transition-colors flex-shrink-0"
          >
            <FiTrash2 className="w-3.5 h-3.5" />
          </button>
        </div>
        <p className="text-xs mt-0.5" style={{ color: accentColor }}>
          {convertPrice(item.price, currencySymbol)}
        </p>
        {item.instruction && (
          <p className="text-[10px] text-white/30 mt-1 italic truncate">
            {item.instruction}
          </p>
        )}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.04]">
            <button
              onClick={() => {
                if (item.quantity <= 1) dispatch(removeFromCart(restaurantName, item.uniqueId));
                else dispatch(adjustQuantity(restaurantName, item.uniqueId, item.quantity - 1));
              }}
              className="px-2 py-1 text-white/50 hover:text-white transition-colors"
            >
              <FiMinus className="w-3 h-3" />
            </button>
            <span className="text-xs font-semibold text-white w-4 text-center">{item.quantity}</span>
            <button
              onClick={() => dispatch(adjustQuantity(restaurantName, item.uniqueId, item.quantity + 1))}
              className="px-2 py-1 text-white/50 hover:text-white transition-colors"
            >
              <FiPlus className="w-3 h-3" />
            </button>
          </div>
          <span className="text-sm font-bold text-white/80">
            {convertPrice(itemTotal, currencySymbol)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CartPopup({
  restaurant,
  restaurantName,
  activeLanguage,
  accentColor,
  currencySymbol,
  features,
  cart,
  popupHandler,
}) {
  const dispatch = useDispatch();
  const { handleApiCallAsync: handleAddOrderAsync } = useAddOrderQuery({
    onSuccess: () => {},
  });
  const [step, setStep] = useState("cart"); // cart | checkout
  const [orderType, setOrderType] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [tableNumber, setTableNumber] = useState("");
  const [orderNotes, setOrderNotes] = useState("");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Available order types
  const orderTypes = useMemo(() => {
    const types = [];
    if (features?.delivery_order) types.push({ key: "Delivery", label: activeLanguage === "ar" ? "توصيل" : "Delivery" });
    if (features?.takeaway_order) types.push({ key: "TakeAway", label: activeLanguage === "ar" ? "استلام" : "Pickup" });
    if (features?.dinein_order) types.push({ key: "DineIn", label: activeLanguage === "ar" ? "في المطعم" : "Dine-in" });
    return types;
  }, [features, activeLanguage]);

  // Auto-select if only one type
  useState(() => {
    if (orderTypes.length === 1) setOrderType(orderTypes[0].key);
  });

  const whatsappNumber = restaurant?.branches?.[0]?.whatsapp_number || "";

  const buildWhatsAppMessage = () => {
    let msg = `*New Order - ${orderType}*\n`;
    msg += `----------------------------\n\n`;

    cart.forEach((item, idx) => {
      const name = activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name;
      const catName = item.category
        ? (activeLanguage === "ar" && item.category.ar_category ? item.category.ar_category : item.category.en_category)
        : "";
      const itemTotal = item.price * item.quantity;

      msg += `${idx + 1}. *${(name || "").trim()}*\n`;
      if (catName) msg += `    ${catName.trim()}\n`;
      msg += `    ${item.quantity}x ${convertPrice(item.price, currencySymbol)} = *${convertPrice(itemTotal, currencySymbol)}*\n`;

      // Format options
      if (item.formData && Object.keys(item.formData).length > 0) {
        try {
          const optionsText = formatCartItemOptionsForOrderMessage(item, activeLanguage);
          if (optionsText) msg += `    ${optionsText}\n`;
        } catch (e) {}
      }

      if (item.instruction) {
        msg += `    > _${item.instruction}_\n`;
      }
      msg += `\n`;
    });

    msg += `----------------------------\n`;
    msg += `*Total: ${convertPrice(total, currencySymbol)}*\n\n`;

    if (customerName) msg += `*Name:* ${customerName}\n`;
    if (customerPhone) msg += `*Phone:* ${customerPhone}\n`;
    if (orderType === "Delivery" && customerAddress) msg += `*Address:* ${customerAddress}\n`;
    if (orderType === "DineIn" && tableNumber) msg += `*Table:* ${tableNumber}\n`;
    if (orderNotes) msg += `*Notes:* ${orderNotes}\n`;

    return msg;
  };

  const sendWhatsApp = async () => {
    let msg = buildWhatsAppMessage();
    const encoded = encodeURIComponent(msg);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encoded}`;

    // Prepare order data for database
    const simplifiedCart = cart.map((item) => ({
      id: item.id,
      quantity: item.quantity,
      branch_id: restaurant?.branches?.[0]?.id,
      restaurant_id: restaurant?.id,
    }));

    const fullOrderItems = cart.map((item) => ({
      product_id: item.id,
      product_name: activeLanguage === "ar" && item.ar_name ? item.ar_name : item.en_name,
      quantity: item.quantity,
      price: item.price,
      total_price: item.price * item.quantity,
      form_data: item.formData || {},
      instruction: item.instruction || "",
      product_details: {
        en_name: item.en_name,
        ar_name: item.ar_name,
        en_price: item.en_price,
        ar_price: item.ar_price,
        category_id: item.category_id,
      },
    }));

    // Create order in database first to get order_number
    let orderNumber = "";
    try {
      const orderResponse = await handleAddOrderAsync(
        {
          products: simplifiedCart,
          restaurant_id: restaurant?.id,
          branch_id: restaurant?.branches?.[0]?.id,
          delivery_type: orderType,
          customer_name: customerName,
          customer_phone: customerPhone,
          customer_address: orderType === "Delivery" ? customerAddress : null,
          customer_latitude: null,
          customer_longitude: null,
          table_number: orderType === "DineIn" ? tableNumber : null,
          note: orderNotes,
          items: fullOrderItems,
          subtotal: total,
          total: total,
          currency: restaurant?.currency,
        },
        restaurantName
      );
      orderNumber = orderResponse?.data?.order?.order_number || "";

      // Track order placed
      if (restaurant?.id) {
        const branchId = restaurant?.branches?.[0]?.id || null;
        trackOrderPlaced(
          restaurant.id,
          orderResponse?.data?.order?.id || null,
          orderType,
          total,
          branchId,
          { items: fullOrderItems, customerName: customerName }
        );
      }
    } catch (e) {
      console.error("Order creation failed:", e);
    }

    // Prepend order number to message if available
    if (orderNumber) {
      msg = `*${orderNumber}*\n` + msg;
    }

    const finalEncodedMessage = encodeURIComponent(msg);
    const finalWhatsappUrl = whatsappUrl.replace(encoded, finalEncodedMessage);
    window.open(finalWhatsappUrl || whatsappUrl, "_blank", "noopener,noreferrer");
    dispatch(clearCart(restaurantName));
    popupHandler(null);
  };

  const inputClass =
    "w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none focus:border-white/[0.15] transition-colors";

  return (
    <motion.div
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "100%" }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className="fixed inset-x-0 bottom-0 z-[9999] max-h-[85vh] overflow-y-auto rounded-t-3xl border-t border-white/[0.08] bg-[#0f0f0f] shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:max-w-lg md:rounded-3xl md:border md:max-h-[80vh]"
    >
      {/* Header */}
      <div className="sticky top-0 flex items-center justify-between px-6 py-4 border-b border-white/[0.06] bg-[#0f0f0f] z-10">
        <h2 className="text-lg font-bold text-white">
          {step === "cart"
            ? (activeLanguage === "ar" ? "السلة" : "Your Cart")
            : (activeLanguage === "ar" ? "إتمام الطلب" : "Checkout")}
        </h2>
        <button
          onClick={() => popupHandler(null)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white"
        >
          <FiX className="w-4 h-4" />
        </button>
      </div>

      <div className="px-6 pb-6">
        {step === "cart" ? (
          <>
            {/* Cart items */}
            {cart.length === 0 ? (
              <p className="py-12 text-center text-white/30 text-sm">
                {activeLanguage === "ar" ? "السلة فارغة" : "Your cart is empty"}
              </p>
            ) : (
              <>
                <div className="divide-y divide-white/[0.06]">
                  {cart.map((item) => (
                    <CartItem
                      key={item.uniqueId}
                      item={item}
                      restaurantName={restaurantName}
                      currencySymbol={currencySymbol}
                      accentColor={accentColor}
                      activeLanguage={activeLanguage}
                      dispatch={dispatch}
                    />
                  ))}
                </div>

                {/* Total */}
                <div className="flex items-center justify-between py-4 border-t border-white/[0.08] mt-2">
                  <span className="text-sm text-white/50">{activeLanguage === "ar" ? "المجموع" : "Total"}</span>
                  <span className="text-lg font-bold" style={{ color: accentColor }}>
                    {convertPrice(total, currencySymbol)}
                  </span>
                </div>

                {/* Proceed button */}
                <button
                  onClick={() => setStep("checkout")}
                  className="w-full rounded-xl py-3.5 text-sm font-bold text-black transition-all hover:brightness-110"
                  style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
                >
                  {activeLanguage === "ar" ? "متابعة الطلب" : "Proceed to Checkout"}
                </button>
              </>
            )}
          </>
        ) : (
          /* Checkout step */
          <div className="space-y-4 py-4">
            {/* Order type */}
            {orderTypes.length > 1 && (
              <div>
                <label className="text-xs text-white/40 block mb-2">
                  {activeLanguage === "ar" ? "نوع الطلب" : "Order Type"}
                </label>
                <div className="flex gap-2">
                  {orderTypes.map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setOrderType(t.key)}
                      className="flex-1 rounded-xl py-2.5 text-sm font-medium border transition-all"
                      style={
                        orderType === t.key
                          ? { backgroundColor: accentColor, color: "#000", borderColor: accentColor }
                          : { backgroundColor: "rgba(255,255,255,0.04)", color: "rgba(255,255,255,0.5)", borderColor: "rgba(255,255,255,0.08)" }
                      }
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <input
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
              placeholder={activeLanguage === "ar" ? "الاسم" : "Your Name"}
              className={inputClass}
            />
            <input
              value={customerPhone}
              onChange={(e) => setCustomerPhone(e.target.value)}
              placeholder={activeLanguage === "ar" ? "رقم الهاتف" : "Phone Number"}
              className={inputClass}
            />

            {orderType === "Delivery" && (
              <textarea
                value={customerAddress}
                onChange={(e) => setCustomerAddress(e.target.value)}
                placeholder={activeLanguage === "ar" ? "عنوان التوصيل" : "Delivery Address"}
                rows={2}
                className={`${inputClass} resize-none`}
              />
            )}

            {orderType === "DineIn" && (
              <input
                value={tableNumber}
                onChange={(e) => setTableNumber(e.target.value)}
                placeholder={activeLanguage === "ar" ? "رقم الطاولة" : "Table Number"}
                className={inputClass}
              />
            )}

            <textarea
              value={orderNotes}
              onChange={(e) => setOrderNotes(e.target.value)}
              placeholder={activeLanguage === "ar" ? "ملاحظات إضافية" : "Order Notes (optional)"}
              rows={2}
              className={`${inputClass} resize-none`}
            />

            {/* Total summary */}
            <div className="flex items-center justify-between py-3 border-t border-white/[0.08]">
              <span className="text-sm text-white/50">{activeLanguage === "ar" ? "المجموع" : "Total"}</span>
              <span className="text-lg font-bold" style={{ color: accentColor }}>
                {convertPrice(total, currencySymbol)}
              </span>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setStep("cart")}
                className="rounded-xl px-5 py-3 text-sm font-medium border border-white/[0.08] text-white/60 hover:text-white transition-colors"
              >
                {activeLanguage === "ar" ? "رجوع" : "Back"}
              </button>
              <button
                onClick={sendWhatsApp}
                disabled={!orderType || !customerName}
                className="flex-1 rounded-xl py-3.5 text-sm font-bold text-black transition-all hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)` }}
              >
                <FiSend className="w-4 h-4" />
                {activeLanguage === "ar" ? "إرسال عبر واتساب" : "Send via WhatsApp"}
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
