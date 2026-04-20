import {
  parseFormJsonString,
  hasAnyOptions,
  emptyOptions,
} from "./schema";
import {
  migrateLegacyFormioToV2,
  legacyHasRenderableFields,
} from "./migrateLegacyFormio";

/**
 * Pick effective form_json string: product first if meaningful, else category.
 * @param {string|null|undefined} productFormJson
 * @param {string|null|undefined} categoryFormJson
 */
export function pickFormJsonString(productFormJson, categoryFormJson) {
  const p = parseFormJsonString(productFormJson);
  if (p.kind === "v2" && hasAnyOptions(p.data)) {
    return { source: "product", parsed: p };
  }
  if (p.kind === "legacy" && legacyHasRenderableFields(p.data)) {
    const migrated = migrateLegacyFormioToV2(p.data);
    if (hasAnyOptions(migrated)) {
      return { source: "product", parsed: { kind: "v2", data: migrated } };
    }
    return { source: "product", parsed: p };
  }
  if (p.kind === "v2" && !hasAnyOptions(p.data)) {
    // empty v2 on product — fall through to category
  }

  const c = parseFormJsonString(categoryFormJson);
  if (c.kind === "v2" && hasAnyOptions(c.data)) {
    return { source: "category", parsed: c };
  }
  if (c.kind === "legacy" && legacyHasRenderableFields(c.data)) {
    const migrated = migrateLegacyFormioToV2(c.data);
    if (hasAnyOptions(migrated)) {
      return { source: "category", parsed: { kind: "v2", data: migrated } };
    }
    return { source: "category", parsed: c };
  }

  if (p.kind === "v2") {
    return { source: "product", parsed: p };
  }
  if (p.kind === "legacy") {
    return { source: "product", parsed: p };
  }
  if (c.kind === "v2") {
    return { source: "category", parsed: c };
  }
  if (c.kind === "legacy") {
    return { source: "category", parsed: c };
  }

  return {
    source: "none",
    parsed: { kind: "v2", data: emptyOptions() },
  };
}

/**
 * @returns {{ mode: 'v2', options: import('./schema').ProductOptionsV2 } | { mode: 'legacy', legacyForm: object }}
 */
export function resolveCustomerForm(productFormJson, categoryFormJson) {
  const { parsed } = pickFormJsonString(productFormJson, categoryFormJson);

  if (parsed.kind === "v2") {
    return { mode: "v2", options: parsed.data };
  }
  if (parsed.kind === "legacy") {
    const migrated = migrateLegacyFormioToV2(parsed.data);
    if (hasAnyOptions(migrated)) {
      return { mode: "v2", options: migrated };
    }
    if (legacyHasRenderableFields(parsed.data)) {
      return { mode: "legacy", legacyForm: parsed.data };
    }
  }
  return { mode: "v2", options: emptyOptions() };
}

/** For quick-add / grid: need user to open details if there are any options or legacy fields. */
export function productNeedsOptionsDialog(productFormJson, categoryFormJson) {
  const { parsed } = pickFormJsonString(productFormJson, categoryFormJson);
  if (parsed.kind === "v2") {
    return hasAnyOptions(parsed.data);
  }
  if (parsed.kind === "legacy") {
    const migrated = migrateLegacyFormioToV2(parsed.data);
    if (hasAnyOptions(migrated)) return true;
    return legacyHasRenderableFields(parsed.data);
  }
  return false;
}
