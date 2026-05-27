import React, { useMemo } from "react";
import { motion } from "framer-motion";
import ProductCard from "../ProductCard";

export default function CategorySection({
  category,
  getCategoryName,
  getProductName,
  accentColor,
  currencySymbol,
  activeLanguage,
  openProduct,
  restaurantName,
  features,
}) {
  const products = useMemo(
    () =>
      (category.products || [])
        .filter((p) => p.is_deleted !== true && p.is_deleted !== 1)
        .sort((a, b) => (b.priority || 0) - (a.priority || 0)),
    [category.products]
  );

  if (products.length === 0) return null;

  const categoryName = getCategoryName(category);

  return (
    <section
      id={`category-${category.id}`}
      className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Category heading */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <div className="flex items-center gap-4 mb-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
            {categoryName}
          </h2>
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-xs text-white/20 font-medium">
            {products.length} {products.length === 1 ? "item" : "items"}
          </span>
        </div>
        {(activeLanguage === "ar" ? category.ar_description : category.en_description) && (
          <p className="text-sm text-white/40 max-w-xl">
            {activeLanguage === "ar" ? category.ar_description : category.en_description}
          </p>
        )}
      </motion.div>

      {/* Product grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            getProductName={getProductName}
            accentColor={accentColor}
            currencySymbol={currencySymbol}
            activeLanguage={activeLanguage}
            openProduct={openProduct}
          />
        ))}
      </div>
    </section>
  );
}
