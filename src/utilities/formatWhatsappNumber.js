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

/**
 * Build a WhatsApp URL that opens the app directly (skips wa.me redirect).
 * Uses whatsapp:// deep link on mobile, falls back to wa.me on desktop.
 *
 * @param {string} phone - Formatted phone number with country code
 * @param {string} message - The message text (will be URI-encoded)
 * @returns {string} The WhatsApp URL
 */
export const buildWhatsappUrl = (phone, message) => {
  const encoded = encodeURIComponent(message);
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  if (isMobile) {
    return `whatsapp://send?phone=${phone}&text=${encoded}`;
  }
  return `https://wa.me/${phone}?text=${encoded}`;
};
