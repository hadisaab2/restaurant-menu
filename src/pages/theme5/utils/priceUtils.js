export const getEffectivePrice = (product, menuMode) => {
  if (menuMode === "delivery" && product.delivery_price) {
    return parseFloat(product.delivery_price);
  }
  return parseFloat(product.en_price);
};
