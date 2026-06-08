/**
 * Format a WhatsApp number with the restaurant's country code.
 * If the number already starts with the country code, return as-is.
 * Otherwise prepend the country code.
 *
 * @param {string} number - The WhatsApp number (may or may not include country code)
 * @param {string} countryCode - The restaurant's country code (e.g. "961", "964", "962")
 * @returns {string} The formatted number with country code
 */
export const formatWhatsappNumber = (number, countryCode = "961") => {
  if (!number) return "";
  const clean = number.replace(/\s/g, "");
  if (clean.startsWith(countryCode)) return clean;
  if (clean.startsWith("+")) return clean.replace("+", "");
  return countryCode + clean;
};
