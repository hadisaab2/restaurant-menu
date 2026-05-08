// Theme6 Pizza Studio — color utility helpers
// All colors stay fully dynamic from admin config.
// No hardcoded pizza/food colors here.

export const safeColor = (color, fallback = "#333333") => {
  if (!color || typeof color !== "string") return fallback;
  const t = color.trim();
  if (t === "" || t === "null" || t === "undefined") return fallback;
  return t;
};

export const hexToRgb = (color) => {
  try {
    let hex = safeColor(color, "#000000").replace(/^#/, "");
    if (hex.length === 3) hex = hex.split("").map((c) => c + c).join("");
    if (hex.length !== 6) return null;
    return {
      r: parseInt(hex.substr(0, 2), 16),
      g: parseInt(hex.substr(2, 2), 16),
      b: parseInt(hex.substr(4, 2), 16),
    };
  } catch {
    return null;
  }
};

export const isLightColor = (color) => {
  const rgb = hexToRgb(safeColor(color, "#ffffff"));
  if (!rgb) return true;
  return (0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b) / 255 > 0.55;
};

export const getReadableTextColor = (backgroundColor) =>
  isLightColor(backgroundColor) ? "#1a1a1a" : "#ffffff";

export const withAlpha = (color, alpha) => {
  const rgb = hexToRgb(safeColor(color, "#000000"));
  if (!rgb) return color;
  return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
};

export const softTint = (color, alpha = 0.1) => withAlpha(color, alpha);

export const darkenColor = (color, amount = 20) => {
  const rgb = hexToRgb(safeColor(color, "#333333"));
  if (!rgb) return color;
  return `#${[
    Math.max(0, rgb.r - amount),
    Math.max(0, rgb.g - amount),
    Math.max(0, rgb.b - amount),
  ]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;
};

export const lightenColor = (color, amount = 20) => {
  const rgb = hexToRgb(safeColor(color, "#cccccc"));
  if (!rgb) return color;
  return `#${[
    Math.min(255, rgb.r + amount),
    Math.min(255, rgb.g + amount),
    Math.min(255, rgb.b + amount),
  ]
    .map((v) => v.toString(16).padStart(2, "0"))
    .join("")}`;
};
