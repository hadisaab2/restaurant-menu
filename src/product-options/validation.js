import { emptySelection } from "./schema";

/**
 * @param {import('./schema').ProductOptionsV2} options
 * @param {ReturnType<import('./schema').emptySelection>} selection
 * @returns {Record<string, string>}
 */
export function validateSelection(options, selection) {
  const errors = {};
  const sel = selection || emptySelection();

  if (options?.sizes?.length > 0) {
    if (!sel.sizeId) {
      errors.size = "required";
    } else if (!options.sizes.some((s) => s.id === sel.sizeId)) {
      errors.size = "invalid";
    }
  }

  return errors;
}
