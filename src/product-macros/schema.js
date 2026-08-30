import { v4 as uuidv4 } from "uuid";

export const PRODUCT_MACROS_VERSION = 1;

/**
 * @typedef {{
 *   id: string,
 *   labelEn: string,
 *   labelAr: string,
 *   value: string,
 *   unit: string,
 *   showOnCard: boolean
 * }} MacroRow
 *
 * @typedef {{ version: number, items: MacroRow[] }} ProductMacros
 */

export function emptyMacros() {
  return { version: PRODUCT_MACROS_VERSION, items: [] };
}

/** Fill in ids and coerce every field to the expected primitive. */
export function ensureMacroIds(macros) {
  const items = (macros?.items || []).map((m) => ({
    ...m,
    id: m.id || uuidv4(),
    labelEn: String(m.labelEn ?? ""),
    labelAr: String(m.labelAr ?? ""),
    // Kept as a string so "<1", "~300" and "" all survive, matching how
    // en_price and priceModifier are stored.
    value: String(m.value ?? ""),
    unit: String(m.unit ?? ""),
    showOnCard: Boolean(m.showOnCard),
  }));

  // Only one row may drive the card chip — first flagged wins.
  let seenCardRow = false;
  for (const item of items) {
    if (!item.showOnCard) continue;
    if (seenCardRow) item.showOnCard = false;
    else seenCardRow = true;
  }

  return { version: PRODUCT_MACROS_VERSION, items };
}

/**
 * `products.macros` is a JSON column, so depending on the driver and how the
 * payload was written this arrives as an object OR as a JSON string. Accept
 * both, plus null/empty, and never throw.
 *
 * @returns {ProductMacros} always a valid shape; empty when there is nothing
 */
export function parseMacrosJson(value) {
  if (value == null || value === "") return emptyMacros();

  let raw = value;
  if (typeof raw === "string") {
    const trimmed = raw.trim();
    if (!trimmed) return emptyMacros();
    try {
      raw = JSON.parse(trimmed);
    } catch {
      return emptyMacros();
    }
  }
  if (!raw || typeof raw !== "object" || !Array.isArray(raw.items)) {
    return emptyMacros();
  }
  return ensureMacroIds(raw);
}

/** A row counts only if it has a label in either language AND a value. */
export function isRenderableMacro(item) {
  if (!item) return false;
  const hasLabel = Boolean((item.labelEn || "").trim() || (item.labelAr || "").trim());
  const hasValue = Boolean(String(item.value ?? "").trim());
  return hasLabel && hasValue;
}

/** Rows worth showing to a customer. */
export function renderableMacros(macros) {
  return (macros?.items || []).filter(isRenderableMacro);
}

/** @param {ProductMacros} macros */
export function hasAnyMacros(macros) {
  return renderableMacros(macros).length > 0;
}

/** Label in the active language, falling back to the other one. */
export function macroLabel(item, activeLanguage) {
  const en = (item?.labelEn || "").trim();
  const ar = (item?.labelAr || "").trim();
  return activeLanguage === "ar" ? ar || en : en || ar;
}

/** "320 kcal" — unit is optional. */
export function macroValueText(item) {
  const value = String(item?.value ?? "").trim();
  const unit = (item?.unit || "").trim();
  if (!value) return "";
  return unit ? `${value} ${unit}` : value;
}

/** Serialize for the API (admin save). Stored in products.macros. */
export function serializeMacros(macros) {
  const normalized = ensureMacroIds(macros);
  // Drop half-filled rows so the column never holds unrenderable noise.
  normalized.items = normalized.items.filter(isRenderableMacro);
  if (normalized.items.length === 0) return null;
  return JSON.stringify(normalized);
}
