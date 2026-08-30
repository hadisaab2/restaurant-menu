import {
  parseMacrosJson,
  renderableMacros,
  macroLabel,
  macroValueText,
} from "./schema";

/**
 * The single macro row a product card should show as a chip.
 *
 * Only a row the merchant explicitly flagged with `showOnCard` qualifies —
 * there is no fallback to the first row, because the compact two-column mobile
 * grids cannot absorb a chip on every product.
 *
 * @param {string|object|null} rawMacros value straight off the product
 * @param {string} activeLanguage "en" | "ar"
 * @returns {{ text: string, label: string }|null}
 */
export function getCardMacro(rawMacros, activeLanguage) {
  const items = renderableMacros(parseMacrosJson(rawMacros));
  if (items.length === 0) return null;

  const flagged = items.find((item) => item.showOnCard);
  if (!flagged) return null;

  const text = macroValueText(flagged);
  if (!text) return null;

  return { text, label: macroLabel(flagged, activeLanguage) };
}
