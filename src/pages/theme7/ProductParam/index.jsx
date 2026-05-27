import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiX, FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/cart/cartActions";
import { convertPrice } from "../../../utilities/convertPrice";
import { trackItemView, trackAddToCart } from "../../../utilities/analyticsTracking";
import ProductOptionsPicker from "../../../product-options/ProductOptionsPicker";

const STORAGE_URL = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function ProductParam({
  product,
  restaurant,
  restaurantName,
  activeLanguage,
  accentColor,
  currencySymbol,
  features,
  onClose,
}) {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [instruction, setInstruction] = useState("");
  const [formData, setFormData] = useState({});
  const [optionsPrice, setOptionsPrice] = useState(0);

  const name = activeLanguage === "ar" && product.ar_name ? product.ar_name : product.en_name;
  const description =
    activeLanguage === "ar" && product.ar_description
      ? product.ar_description
      : product.en_description || product.description;
  const imageUrl = product.image_url ? `${STORAGE_URL}${product.image_url}` : null;

  // Price calculation
  const basePrice = Number(product.price) || 0;
  const discountPercent = Number(product.discount) || 0;
  const discountedBase = discountPercent > 0 ? basePrice * (1 - discountPercent / 100) : basePrice;
  const unitPrice = discountedBase + optionsPrice;
  const totalPrice = unitPrice * quantity;

  // Check if product has v2 options
  const hasV2Options = product.formSchema?.version === 2 || product.form_schema?.version === 2;
  const formSchema = product.formSchema || product.form_schema;

  // Track item view when modal opens
  useEffect(() => {
    if (restaurant?.id && product?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackItemView(restaurant.id, product.id, product.category_id, branchId, {
        name, price: basePrice, category: product.category?.en_category || "",
      });
    }
  }, [product?.id]);

  const handleAdd = () => {
    // Track add to cart
    if (restaurant?.id && product?.id) {
      const branchId = restaurant?.branches?.[0]?.id || null;
      trackAddToCart(restaurant.id, product.id, product.category_id, quantity, branchId, {
        name, price: unitPrice,
      });
    }

    dispatch(
      addToCart(
        restaurantName,
        product,
        quantity,
        formData,
        unitPrice,
        instruction,
        undefined // menuMode
      )
    );
    onClose();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      transition={{ type: "spring", damping: 25, stiffness: 300 }}
      className="fixed inset-x-0 bottom-0 z-[9999] max-h-[90vh] overflow-y-auto rounded-t-3xl border-t border-white/[0.08] bg-[#0f0f0f] shadow-2xl md:inset-x-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:bottom-auto md:max-w-lg md:rounded-3xl md:border"
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white/60 hover:text-white transition-colors"
      >
        <FiX className="w-4 h-4" />
      </button>

      {/* Image */}
      {imageUrl && (
        <div className="relative h-64 md:h-72 overflow-hidden rounded-t-3xl md:rounded-t-3xl">
          <img src={imageUrl} alt={name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 space-y-5">
        {/* Name & price */}
        <div>
          <h2 className="text-xl font-bold text-white mb-1">{name}</h2>
          {description && (
            <p className="text-sm text-white/40 leading-relaxed">{description}</p>
          )}
          <div className="mt-3 flex items-center gap-3">
            <span className="text-lg font-bold" style={{ color: accentColor }}>
              {convertPrice(discountedBase, currencySymbol)}
            </span>
            {discountPercent > 0 && (
              <span className="text-sm text-white/30 line-through">
                {convertPrice(basePrice, currencySymbol)}
              </span>
            )}
            {discountPercent > 0 && (
              <span className="text-xs rounded-full bg-red-500/20 text-red-400 px-2 py-0.5 font-medium">
                -{discountPercent}%
              </span>
            )}
          </div>
        </div>

        {/* Product Options (V2) */}
        {hasV2Options && formSchema && (
          <div className="border-t border-white/[0.06] pt-4">
            <ProductOptionsPicker
              formSchema={formSchema}
              formData={formData}
              setFormData={setFormData}
              setOptionsPrice={setOptionsPrice}
              currencySymbol={currencySymbol}
              activeLanguage={activeLanguage}
            />
          </div>
        )}

        {/* Special instructions */}
        <div>
          <label className="text-xs text-white/40 block mb-2">
            {activeLanguage === "ar" ? "ملاحظات خاصة" : "Special Instructions"}
          </label>
          <textarea
            value={instruction}
            onChange={(e) => setInstruction(e.target.value)}
            placeholder={activeLanguage === "ar" ? "أضف ملاحظاتك هنا..." : "Add your notes here..."}
            rows={2}
            className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-3 text-sm text-white placeholder-white/20 outline-none resize-none focus:border-white/[0.15] transition-colors"
          />
        </div>

        {/* Quantity + Add to cart */}
        <div className="flex items-center gap-4 pt-2">
          {/* Quantity */}
          <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.04] px-3 py-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="text-white/60 hover:text-white transition-colors"
            >
              <FiMinus className="w-4 h-4" />
            </button>
            <span className="text-white font-semibold text-sm w-6 text-center">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="text-white/60 hover:text-white transition-colors"
            >
              <FiPlus className="w-4 h-4" />
            </button>
          </div>

          {/* Add button */}
          <button
            onClick={handleAdd}
            className="flex-1 rounded-xl py-3.5 text-sm font-bold text-black transition-all hover:brightness-110"
            style={{
              background: `linear-gradient(135deg, ${accentColor}, ${accentColor}cc)`,
            }}
          >
            {activeLanguage === "ar" ? "أضف للسلة" : "Add to Cart"} — {convertPrice(totalPrice, currencySymbol)}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
