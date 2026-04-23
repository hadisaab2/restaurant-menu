import { v4 as uuidv4 } from "uuid";

export const PRODUCT_OPTIONS_VERSION = 2;

/** @typedef {{ id: string, labelEn: string, labelAr: string, priceModifier: number|string }} SizeOption (priceModifier = unit price; 0/empty uses product list price) */
/** @typedef {{ id: string, labelEn: string, labelAr: string, priceModifier: number|string }} AddonOption */
/** @typedef {{ id: string, labelEn: string, labelAr: string }} RemovalOption */

/**
 * @typedef {{
 *   version: number,
 *   sizes: SizeOption[],
 *   addons: AddonOption[],
 *   removals: RemovalOption[]
 * }} ProductOptionsV2
 */

export function emptyOptions() {
  return {
    version: PRODUCT_OPTIONS_VERSION,
    sizes: [],
    addons: [],
    removals: [],
  };
}

export function ensureOptionIds(options) {
  const normalizePriceModifier = (value) => {
    if (value === "") return "";
    return Number(value) || 0;
  };

  const next = {
    version: PRODUCT_OPTIONS_VERSION,
    sizes: (options.sizes || []).map((s) => ({
      ...s,
      id: s.id || uuidv4(),
      labelEn: String(s.labelEn ?? ""),
      labelAr: String(s.labelAr ?? ""),
      priceModifier: normalizePriceModifier(s.priceModifier),
    })),
    addons: (options.addons || []).map((a) => ({
      ...a,
      id: a.id || uuidv4(),
      labelEn: String(a.labelEn ?? ""),
      labelAr: String(a.labelAr ?? ""),
      priceModifier: normalizePriceModifier(a.priceModifier),
    })),
    removals: (options.removals || []).map((r) => ({
      ...r,
      id: r.id || uuidv4(),
      labelEn: String(r.labelEn ?? ""),
      labelAr: String(r.labelAr ?? ""),
    })),
  };
  return next;
}

/**
 * @param {string|null|undefined} jsonString
 * @returns {{ kind: 'empty' } | { kind: 'v2', data: ProductOptionsV2 } | { kind: 'legacy', data: object } | { kind: 'invalid' }}
 */
export function parseFormJsonString(jsonString) {
  if (jsonString == null || String(jsonString).trim() === "") {
    return { kind: "empty" };
  }
  let raw;
  try {
    raw = JSON.parse(jsonString);
  } catch {
    return { kind: "invalid" };
  }
  if (!raw || typeof raw !== "object") {
    return { kind: "invalid" };
  }
  if (raw.version === PRODUCT_OPTIONS_VERSION && Array.isArray(raw.sizes) && Array.isArray(raw.addons) && Array.isArray(raw.removals)) {
    return { kind: "v2", data: ensureOptionIds(raw) };
  }
  if (Array.isArray(raw.components)) {
    return { kind: "legacy", data: raw };
  }
  return { kind: "invalid" };
}

/** @param {ProductOptionsV2} options */
export function hasAnyOptions(options) {
  if (!options) return false;
  return (
    (options.sizes && options.sizes.length > 0) ||
    (options.addons && options.addons.length > 0) ||
    (options.removals && options.removals.length > 0)
  );
}

/** @param {object} formData */
export function isV2Selection(formData) {
  if (!formData || typeof formData !== "object") return false;
  return (
    Object.prototype.hasOwnProperty.call(formData, "sizeId") &&
    Array.isArray(formData.addonIds) &&
    Array.isArray(formData.removalIds)
  );
}

export function emptySelection() {
  return {
    sizeId: null,
    addonIds: [],
    removalIds: [],
  };
}

/** Stable order for cart deduplication */
export function normalizeV2Selection(selection) {
  if (!isV2Selection(selection)) return selection;
  return {
    sizeId: selection.sizeId ?? null,
    addonIds: [...(selection.addonIds || [])].filter(Boolean).sort(),
    removalIds: [...(selection.removalIds || [])].filter(Boolean).sort(),
  };
}

/**
 * Serialize options for API (admin save).
 * @param {ProductOptionsV2} options
 */
export function serializeOptions(options) {
  const normalized = ensureOptionIds(options);
  return JSON.stringify(normalized);
}
