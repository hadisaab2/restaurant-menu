import React from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import { convertPrice } from "../../../utilities/convertPrice";
import { getImageUrl } from "../../../utilities/imageUrl";

export default function ProductCard({
  product,
  getProductName,
  accentColor,
  currencySymbol,
  activeLanguage,
  openProduct,
}) {
  const name = getProductName(product);
  const description =
    activeLanguage === "ar" && product.ar_description
      ? product.ar_description
      : product.en_description || product.description;
  const price = product.price ? convertPrice(Number(product.price), currencySymbol) : null;
  const imageUrl = product.image_url ? getImageUrl(product.image_url) : null;
  const isOutOfStock = product.is_available === false || product.is_available === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      onClick={() => !isOutOfStock && openProduct(product.id)}
      className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.03] cursor-pointer transition-all duration-300 hover:border-white/[0.12] hover:shadow-2xl hover:shadow-black/40 ${
        isOutOfStock ? "opacity-50 pointer-events-none" : ""
      }`}
    >
      {/* Image */}
      {imageUrl ? (
        <div className="relative aspect-square overflow-hidden">
          <img
            src={imageUrl}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

          {/* Out of stock badge */}
          {isOutOfStock && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="rounded-full bg-red-500/80 px-4 py-1 text-xs font-bold text-white uppercase tracking-wider">
                {activeLanguage === "ar" ? "غير متوفر" : "Sold Out"}
              </span>
            </div>
          )}
        </div>
      ) : (
        <div className="aspect-square bg-gradient-to-br from-white/[0.04] to-white/[0.02] flex items-center justify-center">
          <span className="text-3xl text-white/10 font-bold">{name?.charAt(0)}</span>
        </div>
      )}

      {/* Content */}
      <div className="p-4">
        <h3 className="text-base font-semibold text-white/90 truncate mb-1">
          {name}
        </h3>
        {description && (
          <p className="text-xs text-white/40 line-clamp-2 mb-3 leading-relaxed">
            {description}
          </p>
        )}
        <div className="flex items-center justify-between">
          {price && (
            <span
              className="text-sm font-bold"
              style={{ color: accentColor }}
            >
              {price}
            </span>
          )}
          {!isOutOfStock && (
            <div
              className="flex h-8 w-8 items-center justify-center rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
            >
              <FiPlus className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
