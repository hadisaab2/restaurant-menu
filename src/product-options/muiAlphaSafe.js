import { alpha } from "@mui/material";

const NAMED_HEX = {
  black: "#000000",
  white: "#ffffff",
  red: "#ff0000",
  green: "#008000",
  blue: "#0000ff",
  transparent: "rgba(0,0,0,0)",
};

function normalizeForMuiColor(input) {
  if (input == null || input === "") return "#000000";
  const s = String(input).trim();
  if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(s)) return s;
  if (/^(rgb|rgba|hsl|hsla|color)\(/i.test(s)) return s;
  const key = s.toLowerCase();
  if (NAMED_HEX[key]) return NAMED_HEX[key];
  return s;
}

/**
 * Like MUI `alpha()` but accepts CSS color keywords (e.g. from styled-theme: "black").
 * Named without an "alpha…" prefix so ESLint no-undef does not mis-read the identifier.
 */
export function fadeThemeColor(color, value) {
  const c = normalizeForMuiColor(color);
  try {
    return alpha(c, value);
  } catch {
    return alpha("#000000", value);
  }
}
