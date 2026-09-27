// Theme1 accepts the boolean forms returned by older and newer restaurant APIs.
export const enabled = (value) => value === true || value === 1 || value === "1" || value === "true";

export function parseFeatures(value) {
  try {
    const parsed = typeof value === "string" ? JSON.parse(value) : value;
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

export const localized = (item, field, language) =>
  item?.[`${language === "ar" ? "ar" : "en"}_${field}`] ||
  item?.[`${language === "ar" ? "en" : "ar"}_${field}`] || "";

const normalize = (value) => String(value || "").normalize("NFKC").toLocaleLowerCase()
  .replace(/[\u064B-\u065F\u0670\u0640]/g, "").trim();

export function visibleProducts(products = [], query = "") {
  const term = normalize(query);
  return products.filter((product) => !enabled(product.hide) &&
    (!term || normalize(product.en_name).includes(term) || normalize(product.ar_name).includes(term)))
    .sort((a, b) => (Number(b.priority) || 0) - (Number(a.priority) || 0) || Number(a.id) - Number(b.id));
}

export function productPrice(product, category) {
  const categoryDiscount = Number.parseFloat(category?.discount) || 0;
  const discount = Math.min(100, Math.max(0, categoryDiscount || Number.parseFloat(product.discount) || 0));
  const base = Number.parseFloat(product.en_price);
  return { base: Number.isFinite(base) ? base : 0, discount,
    final: (Number.isFinite(base) ? base : 0) * (1 - discount / 100),
    hasPrice: product.en_price !== null && product.en_price !== undefined && String(product.en_price).trim() !== "" && Number.isFinite(base) };
}
