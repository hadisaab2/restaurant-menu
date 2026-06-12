/**
 * Map a restaurant currency name to its display symbol.
 */
const CURRENCY_MAP = {
  dollar: "$",
  lb: "L.L.",
  gram: "g",
  kilogram: "kg",
  killogram: "kg",
  IQD: "IQD",
  JOD: "JOD",
  SAR: "SAR",
  AED: "AED",
  QAR: "QAR",
  KWD: "KWD",
  EGP: "EGP",
};

export const getCurrencySymbol = (currency) => CURRENCY_MAP[currency] || currency || "";
