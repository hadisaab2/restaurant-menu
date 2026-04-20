import { isV2Selection, parseFormJsonString } from "./schema";
import {
  migrateLegacyFormioToV2,
  legacyHasRenderableFields,
} from "./migrateLegacyFormio";

/**
 * Product options from a cart line's `form_json` (native v2 or legacy Form.io migrated the same way as the picker).
 * @param {string|null|undefined} formJson
 * @returns {import('./schema').ProductOptionsV2|null}
 */
export function productOptionsFromCartItemFormJson(formJson) {
  const parsed = parseFormJsonString(formJson || "{}");
  if (parsed.kind === "v2") return parsed.data;
  if (parsed.kind === "legacy" && legacyHasRenderableFields(parsed.data)) {
    return migrateLegacyFormioToV2(parsed.data);
  }
  return null;
}

/**
 * @typedef {{ type: 'heading', text: string } | { type: 'line', key: string, text: string }} CartOptionBlock
 */

function sectionTitles(lang) {
  return lang === "ar"
    ? { size: "الحجم:", addons: "الإضافات:", removals: "بدون:" }
    : { size: "Size:", addons: "Add ons:", removals: "Remove:" };
}

/**
 * @param {import('./schema').ProductOptionsV2} options
 * @param {import('./schema').emptySelection} selection
 * @param {'en'|'ar'} lang
 * @returns {CartOptionBlock[]}
 */
export function v2SelectionToCartBlocks(options, selection, lang) {
  if (!options || !isV2Selection(selection)) return [];

  const L = lang === "ar" ? "ar" : "en";
  const hdr = sectionTitles(L);
  /** @type {CartOptionBlock[]} */
  const blocks = [];

  if (selection.sizeId && options.sizes?.length) {
    const s = options.sizes.find((x) => x.id === selection.sizeId);
    if (s) {
      const label = L === "ar" ? s.labelAr || s.labelEn : s.labelEn;
      blocks.push({ type: "heading", text: hdr.size });
      blocks.push({ type: "line", key: "size", text: label });
    }
  }

  /** @type {CartOptionBlock[]} */
  const addonLines = [];
  (selection.addonIds || []).forEach((id) => {
    const a = options.addons?.find((x) => x.id === id);
    if (a) {
      const label = L === "ar" ? a.labelAr || a.labelEn : a.labelEn;
      addonLines.push({ type: "line", key: `addon_${id}`, text: label });
    }
  });
  if (addonLines.length) {
    blocks.push({ type: "heading", text: hdr.addons });
    blocks.push(...addonLines);
  }

  /** @type {CartOptionBlock[]} */
  const removalLines = [];
  (selection.removalIds || []).forEach((id) => {
    const r = options.removals?.find((x) => x.id === id);
    if (r) {
      const label = L === "ar" ? r.labelAr || r.labelEn : r.labelEn;
      removalLines.push({ type: "line", key: `removal_${id}`, text: label });
    }
  });
  if (removalLines.length) {
    blocks.push({ type: "heading", text: hdr.removals });
    blocks.push(...removalLines);
  }

  return blocks;
}

/**
 * @param {import('./schema').ProductOptionsV2} options
 * @param {import('./schema').emptySelection} selection
 * @param {'en'|'ar'} lang
 * @returns {{ key: string, text: string }[]}
 */
export function v2SelectionToLines(options, selection, lang) {
  return v2SelectionToCartBlocks(options, selection, lang)
    .filter((b) => b.type === "line")
    .map((b) => ({ key: b.key, text: b.text }));
}

/**
 * Blocks (section headings + lines) for cart / checkout UI (v2 or legacy shape).
 * @param {{ formData?: object, form_json?: string }} item
 * @param {'en'|'ar'} lang
 * @returns {CartOptionBlock[]}
 */
export function cartItemFormDataToLines(item, lang) {
  if (!item.formData || typeof item.formData !== "object") return [];
  const keys = Object.keys(item.formData);
  if (keys.length === 0) return [];

  if (isV2Selection(item.formData)) {
    const options = productOptionsFromCartItemFormJson(item.form_json);
    if (!options) return [];
    return v2SelectionToCartBlocks(options, item.formData, lang);
  }

  const L = lang === "ar" ? "ar" : "en";
  const legacyHeading = L === "ar" ? "الخيارات:" : "Options:";
  /** @type {CartOptionBlock[]} */
  const blocks = [{ type: "heading", text: legacyHeading }];
  keys.forEach((key) => {
    const value = item.formData[key];
    let displayValue = "";
    if (Array.isArray(value)) {
      displayValue = value.join(", ");
    } else if (typeof value === "object" && value !== null) {
      displayValue = value.label;
    } else {
      displayValue = value;
    }
    blocks.push({ type: "line", key, text: `${key}: ${displayValue}` });
  });
  return blocks;
}

/** Plain text for WhatsApp / order summary (headings + indented bullets). */
export function formatCartItemOptionsForOrderMessage(item, lang) {
  const blocks = cartItemFormDataToLines(item, lang === "ar" ? "ar" : "en");
  return blocks
    .map((b) =>
      b.type === "heading" ? `${b.text}\n` : `  - ${b.text}\n`
    )
    .join("");
}
