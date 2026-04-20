import { emptyOptions, PRODUCT_OPTIONS_VERSION, ensureOptionIds } from "./schema";

/**
 * Parse Form.io-style option value into price modifier (delta) or absolute replacement.
 * @returns {{ mode: 'delta'|'absolute', value: number }|null}
 */
export function legacyValueToPriceParts(valueStr) {
  if (valueStr == null || valueStr === "") return null;
  const s = String(valueStr).trim();
  if (s.startsWith("+")) {
    const n = parseFloat(s.slice(1));
    return Number.isFinite(n) ? { mode: "delta", value: n } : null;
  }
  if (s.startsWith("-")) {
    const n = parseFloat(s.slice(1));
    return Number.isFinite(n) ? { mode: "delta", value: -n } : null;
  }
  const n = parseFloat(s);
  return Number.isFinite(n) ? { mode: "absolute", value: n } : null;
}

/**
 * Best-effort: first select → sizes (delta from +/-; plain numbers = absolute variant list price, stored in priceModifier).
 * First selectboxes → addons unless label/key suggests removal.
 * Second selectboxes or removal-tagged → removals.
 * @param {object} legacyForm - { components: [...] }
 */
export function migrateLegacyFormioToV2(legacyForm) {
  const out = emptyOptions();
  if (!legacyForm || !Array.isArray(legacyForm.components)) {
    return ensureOptionIds(out);
  }

  const usable = legacyForm.components.filter(
    (c) => c && c.type !== "button" && c.key !== "submit"
  );

  const selects = usable.filter((c) => c.type === "select" && c.data?.values?.length);
  const boxes = usable.filter((c) => c.type === "selectboxes" && c.values?.length);
  const radios = usable.filter((c) => c.type === "radio" && c.values?.length);

  function isRemovalComponent(c) {
    const key = String(c.key || "").toLowerCase();
    const label = String(c.label || "").toLowerCase();
    return (
      key.includes("remove") ||
      key.includes("without") ||
      label.includes("remove") ||
      label.includes("without") ||
      label.includes("no ")
    );
  }

  /** @type {typeof boxes} */
  let removalBoxes = boxes.filter(isRemovalComponent);
  let addonBoxes = boxes.filter((c) => !isRemovalComponent(c));

  // Sizes from first select or first radio
  const sizeSource = selects[0] || radios[0];
  if (sizeSource) {
    const values = sizeSource.type === "select" ? sizeSource.data.values : sizeSource.values;

    values.forEach((opt, idx) => {
      const labelEn = String(opt.label || "").trim();
      if (!labelEn) return;
      const parts = legacyValueToPriceParts(opt.value);
      let priceModifier = 0;
      if (parts?.mode === "delta") {
        priceModifier = parts.value;
      } else if (parts?.mode === "absolute") {
        priceModifier = parts.value;
      }
      out.sizes.push({
        id: `mig_size_${idx}_${labelEn.slice(0, 12)}`,
        labelEn,
        labelAr: String(opt.labelAr || opt.label || "").trim() || labelEn,
        priceModifier,
      });
    });
  }

  // If we used radio for sizes, remove from radios for addon pass
  const radiosLeft = sizeSource && sizeSource.type === "radio" ? radios.slice(1) : radios;

  // Addons: first selectboxes not marked removal, or second select
  const addonSource = addonBoxes[0];
  if (addonSource) {
    addonSource.values.forEach((opt, idx) => {
      const labelEn = String(opt.label || "").trim();
      if (!labelEn) return;
      const parts = legacyValueToPriceParts(opt.value);
      const priceModifier = parts?.mode === "delta" ? parts.value : parts?.mode === "absolute" ? parts.value : 0;
      out.addons.push({
        id: `mig_addon_${idx}_${labelEn.slice(0, 12)}`,
        labelEn,
        labelAr: String(opt.labelAr || opt.label || "").trim() || labelEn,
        priceModifier,
      });
    });
  } else if (selects[1]) {
    selects[1].data.values.forEach((opt, idx) => {
      const labelEn = String(opt.label || "").trim();
      if (!labelEn) return;
      const parts = legacyValueToPriceParts(opt.value);
      let priceModifier = 0;
      if (parts?.mode === "delta") priceModifier = parts.value;
      else if (parts?.mode === "absolute") priceModifier = parts.value;
      out.addons.push({
        id: `mig_addon_${idx}_${labelEn.slice(0, 12)}`,
        labelEn,
        labelAr: String(opt.labelAr || opt.label || "").trim() || labelEn,
        priceModifier,
      });
    });
  }

  // Removals
  const removalSource = removalBoxes[0] || boxes.find(isRemovalComponent);
  if (removalSource) {
    removalSource.values.forEach((opt, idx) => {
      const labelEn = String(opt.label || "").trim();
      if (!labelEn) return;
      out.removals.push({
        id: `mig_rem_${idx}_${labelEn.slice(0, 12)}`,
        labelEn,
        labelAr: String(opt.labelAr || opt.label || "").trim() || labelEn,
      });
    });
  }

  // Extra radios → treat as another size group only if no sizes yet (unlikely)
  if (!out.sizes.length && radiosLeft.length) {
    const r = radiosLeft[0];
    r.values.forEach((opt, idx) => {
      const labelEn = String(opt.label || "").trim();
      if (!labelEn) return;
      const parts = legacyValueToPriceParts(opt.value);
      const priceModifier =
        parts?.mode === "delta"
          ? parts.value
          : parts?.mode === "absolute"
            ? parts.value
            : 0;
      out.sizes.push({
        id: `mig_rsize_${idx}`,
        labelEn,
        labelAr: String(opt.labelAr || opt.label || "").trim() || labelEn,
        priceModifier,
      });
    });
  }

  const normalized = ensureOptionIds(out);
  normalized.version = PRODUCT_OPTIONS_VERSION;
  return normalized;
}

/** True if legacy form has at least one renderable select/selectboxes/radio (non-button). */
export function legacyHasRenderableFields(legacyForm) {
  if (!legacyForm?.components?.length) return false;
  return legacyForm.components.some(
    (c) =>
      c &&
      (c.type === "select" || c.type === "selectboxes" || c.type === "radio") &&
      c.type !== "button"
  );
}
