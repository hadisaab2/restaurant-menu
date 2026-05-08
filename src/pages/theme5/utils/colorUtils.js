/**
 * Color utilities for dynamic theming.
 * Admin-configured restaurant colors are the source of truth.
 * These helpers derive elegant surfaces from those colors.
 */

function parseHex(color) {
  if (!color || typeof color !== 'string') return null;
  const hex = color.replace('#', '').trim();
  if (hex.length === 3) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
    };
  }
  if (hex.length === 6) {
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
    };
  }
  return null;
}

function isValidColorString(color) {
  if (!color || typeof color !== 'string') return false;
  const value = color.trim();
  if (!value) return false;
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(value)) return true;
  if (/^rgba?\([^)]+\)$/i.test(value)) return true;
  if (/^hsla?\([^)]+\)$/i.test(value)) return true;
  if (/^[a-z]+$/i.test(value)) return true;
  return false;
}

export function isLightColor(color) {
  const rgb = parseHex(color);
  if (!rgb) return true;
  const luminance = (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255;
  return luminance > 0.5;
}

export function getReadableTextColor(bgColor, lightText = '#ffffff', darkText = '#111111') {
  return isLightColor(bgColor) ? darkText : lightText;
}

export function safeColor(color, fallback = '#000000') {
  return isValidColorString(color) ? color.trim() : fallback;
}

/**
 * Return color with alpha channel.
 * Works with hex colors. Falls back gracefully for named colors.
 */
export function withAlpha(color, alpha = 0.1) {
  const rgb = parseHex(color);
  if (!rgb) return color;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
}

/**
 * Create a very soft tinted surface from a color.
 * Used for backgrounds, section tints, skeleton backgrounds etc.
 */
export function softTint(color, opacity = 0.07) {
  return withAlpha(color, opacity);
}

/**
 * Create a CSS linear-gradient string from two colors.
 * Direction defaults to 135deg (diagonal).
 */
export function softGradient(color1, color2, direction = '135deg', alpha1 = 1, alpha2 = 1) {
  const rgb1 = parseHex(color1);
  const rgb2 = parseHex(color2);
  if (!rgb1 || !rgb2) return `linear-gradient(${direction}, ${color1}, ${color2})`;
  const c1 = `rgba(${rgb1.r}, ${rgb1.g}, ${rgb1.b}, ${alpha1})`;
  const c2 = `rgba(${rgb2.r}, ${rgb2.g}, ${rgb2.b}, ${alpha2})`;
  return `linear-gradient(${direction}, ${c1}, ${c2})`;
}

/**
 * Darken a color by a given amount (0–1).
 * Also exported as darkenColor for named-alias compatibility.
 */
export function darkenColor(color, amount = 0.1) {
  const rgb = parseHex(color);
  if (!rgb) return color;
  const r = Math.max(0, Math.round(rgb.r * (1 - amount)));
  const g = Math.max(0, Math.round(rgb.g * (1 - amount)));
  const b = Math.max(0, Math.round(rgb.b * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

export function darken(color, amount = 0.1) {
  const rgb = parseHex(color);
  if (!rgb) return color;
  const r = Math.max(0, Math.round(rgb.r * (1 - amount)));
  const g = Math.max(0, Math.round(rgb.g * (1 - amount)));
  const b = Math.max(0, Math.round(rgb.b * (1 - amount)));
  return `rgb(${r}, ${g}, ${b})`;
}

/**
 * Lighten a color by mixing it toward white.
 * Also exported as lightenColor for named-alias compatibility.
 */
export function lightenColor(color, amount = 0.2) {
  const rgb = parseHex(color);
  if (!rgb) return color;
  const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * amount));
  const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * amount));
  const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * amount));
  return `rgb(${r}, ${g}, ${b})`;
}

export function lighten(color, amount = 0.2) {
  const rgb = parseHex(color);
  if (!rgb) return color;
  const r = Math.min(255, Math.round(rgb.r + (255 - rgb.r) * amount));
  const g = Math.min(255, Math.round(rgb.g + (255 - rgb.g) * amount));
  const b = Math.min(255, Math.round(rgb.b + (255 - rgb.b) * amount));
  return `rgb(${r}, ${g}, ${b})`;
}
