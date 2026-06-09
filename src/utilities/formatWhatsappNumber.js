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
 * Build a WhatsApp URL that opens the app directly.
 *
 * Strategy:
 * 1. Try whatsapp:// deep link first (works on both Android & iOS when app installed)
 * 2. After a short timeout, if page is still visible (app didn't open), fallback to wa.me
 *
 * @param {string} phone - Formatted phone number with country code
 * @param {string} message - The message text (will be URI-encoded)
 * @returns {string} The WhatsApp URL (for cases where caller just needs a URL)
 */
export const buildWhatsappUrl = (phone, message) => {
  const encoded = encodeURIComponent(message);
  const ua = navigator.userAgent || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);

  if (isMobile) {
    return `whatsapp://send?phone=${phone}&text=${encoded}`;
  }
  return `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
};

/**
 * Open WhatsApp with a fallback mechanism.
 * Tries the deep link first, falls back to wa.me if the app doesn't open.
 *
 * @param {string} phone - Formatted phone number with country code
 * @param {string} message - The raw message text
 */
export const openWhatsApp = (phone, message) => {
  const encoded = encodeURIComponent(message);
  const ua = navigator.userAgent || "";
  const isMobile = /iPhone|iPad|iPod|Android/i.test(ua);
  const fallbackUrl = `https://wa.me/${phone}?text=${encoded}`;

  if (!isMobile) {
    window.location.href = `https://web.whatsapp.com/send?phone=${phone}&text=${encoded}`;
    return;
  }

  // Try deep link
  const deepLink = `whatsapp://send?phone=${phone}&text=${encoded}`;
  const start = Date.now();

  window.location.href = deepLink;

  // If we're still here after 1.5s, the deep link didn't work — fallback
  setTimeout(() => {
    if (Date.now() - start < 2000) {
      window.location.href = fallbackUrl;
    }
  }, 1500);
};
