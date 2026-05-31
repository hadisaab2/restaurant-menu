import { emptySelection } from "./schema";

/**
 * List price for a size row: base price + priceModifier (additive).
 * priceModifier=0 or missing means no extra cost (uses base price as-is).
 * @param {string|number} basePrice
 * @param {import('./schema').SizeOption|undefined} size
 */
export function sizeListPrice(basePrice, size) {
  const base = parseFloat(basePrice) || 0;
  if (!size) return base;
  const p = Number(size.priceModifier);
  if (Number.isNaN(p)) return base;
  if (size.priceMode === "absolute") return p;
  return base + p;
}

/**
 * Unit price after size + add-ons (single quantity, before discount).
 * Size `priceModifier` adds to the base price; add-ons also add.
 * @param {string|number} basePrice
 * @param {import('./schema').ProductOptionsV2} options
 * @param {ReturnType<import('./schema').emptySelection>} selection
 */
export function computeUnitPrice(basePrice, options, selection) {
  const sel = selection || emptySelection();
  const base = parseFloat(basePrice) || 0;
  let unitPrice = base;

  if (options?.sizes?.length && sel.sizeId) {
    const size = options.sizes.find((s) => s.id === sel.sizeId);
    if (size) {
      unitPrice = sizeListPrice(base, size);
    }
  }

  let addOnsPrice = 0;
  (sel.addonIds || []).forEach((id) => {
    const addon = options?.addons?.find((a) => a.id === id);
    if (addon) {
      addOnsPrice += Number(addon.priceModifier) || 0;
    }
  });

  const total = unitPrice + addOnsPrice;
  const formatted = total % 1 !== 0 ? total.toFixed(2) : total.toFixed(0);
  return formatted;
}
