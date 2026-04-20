import React, { useEffect, useMemo } from "react";
import {
  Box,
  Typography,
  Checkbox,
  Chip,
  Stack,
} from "@mui/material";
import { fadeThemeColor } from "./muiAlphaSafe";
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa6";
import { computeUnitPrice } from "./pricing";
import { emptySelection, isV2Selection } from "./schema";

function formatAddonPrice(currencySymbol, n) {
  const x = Number(n) || 0;
  if (x <= 0) return null;
  const s = x % 1 === 0 ? String(x) : x.toFixed(2);
  return `+${currencySymbol}${s}`;
}

/**
 * Premium mobile UI for v2 product options (add-ons + customize).
 * @param {{
 *   options: import('./schema').ProductOptionsV2,
 *   formData: object,
 *   setFormData: function,
 *   formErrors?: Record<string, string>,
 *   activeLanguage: 'en'|'ar',
 *   currencySymbol?: string,
 *   basePrice: string|number,
 *   onPriceChange: (formatted: string) => void,
 *   accentColor?: string,
 *   textColor?: string,
 * }} props
 */
export default function ProductOptionsPickerPremium({
  options,
  formData,
  setFormData,
  formErrors = {},
  activeLanguage,
  currencySymbol = "",
  basePrice,
  onPriceChange,
  accentColor = "#c45c3e",
  textColor = "#1a1a1a",
}) {
  const sel = isV2Selection(formData) ? formData : emptySelection();
  const isAr = activeLanguage === "ar";

  const addonKey = (sel.addonIds || []).slice().sort().join(",");
  const removalKey = (sel.removalIds || []).slice().sort().join(",");

  useEffect(() => {
    const price = computeUnitPrice(basePrice, options, sel);
    onPriceChange(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basePrice, options, sel.sizeId, addonKey, removalKey]);

  const labelFor = (row) =>
    isAr ? row.labelAr || row.labelEn : row.labelEn || row.labelAr;

  const popularAddonId = useMemo(() => {
    const list = options?.addons;
    if (!list?.length) return null;
    let best = list[0].id;
    let bestVal = Number(list[0].priceModifier) || 0;
    list.forEach((a) => {
      const v = Number(a.priceModifier) || 0;
      if (v > bestVal) {
        bestVal = v;
        best = a.id;
      }
    });
    return best;
  }, [options?.addons]);

  const sectionCardSx = {
    borderRadius: 3,
    p: 2,
    mb: 2,
    bgcolor: "#fff",
    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
    border: "1px solid",
    borderColor: fadeThemeColor(textColor, 0.06),
  };

  const rowBaseSx = {
    display: "flex",
    alignItems: "center",
    minHeight: 56,
    px: 1.5,
    py: 1,
    borderRadius: 2,
    border: "1px solid",
    borderColor: fadeThemeColor(textColor, 0.08),
    bgcolor: fadeThemeColor(textColor, 0.02),
    transition: "border-color 0.2s, background-color 0.2s, box-shadow 0.2s",
    cursor: "pointer",
    WebkitTapHighlightColor: "transparent",
  };

  return (
    <Box
      sx={{
        width: "100%",
        direction: isAr ? "rtl" : "ltr",
        color: textColor,
      }}
    >
      {options?.sizes?.length > 0 && (
        <Box sx={{ ...sectionCardSx, mb: 2 }}>
          <Typography
            variant="overline"
            sx={{
              fontWeight: 700,
              letterSpacing: 1.2,
              color: fadeThemeColor(textColor, 0.5),
              display: "block",
              mb: 0.5,
            }}
          >
            {isAr ? "اختر الحجم" : "Choose size"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {options.sizes.map((s) => {
              const selected = sel.sizeId === s.id;
              return (
                <motion.div
                  key={s.id}
                  whileTap={{ scale: 0.97 }}
                  style={{ display: "inline-block" }}
                >
                  <Chip
                    label={labelFor(s)}
                    onClick={() =>
                      setFormData((prev) => {
                        const base = isV2Selection(prev) ? prev : emptySelection();
                        return { ...base, sizeId: s.id };
                      })
                    }
                    sx={{
                      fontWeight: 700,
                      borderRadius: 2,
                      px: 0.5,
                      py: 2.25,
                      height: "auto",
                      border: "2px solid",
                      borderColor: selected ? accentColor : fadeThemeColor(textColor, 0.12),
                      bgcolor: selected ? fadeThemeColor(accentColor, 0.12) : "transparent",
                      color: selected ? accentColor : textColor,
                      boxShadow: selected
                        ? `0 4px 14px ${fadeThemeColor(accentColor, 0.25)}`
                        : "none",
                      "& .MuiChip-label": { px: 1.25, py: 0.5, whiteSpace: "normal" },
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>
          {formErrors.size && (
            <Typography variant="caption" sx={{ color: "error.main", mt: 1, display: "block" }}>
              {isAr ? "يرجى اختيار الحجم" : "Please select a size"}
            </Typography>
          )}
        </Box>
      )}

      {options?.addons?.length > 0 && (
        <Box sx={sectionCardSx}>
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 1.25 }}>
            {isAr ? "إضافات" : "Add extras"}
          </Typography>
          <Stack spacing={1.25}>
            {options.addons.map((a) => {
              const checked = (sel.addonIds || []).includes(a.id);
              const priceStr = formatAddonPrice(currencySymbol, a.priceModifier);
              const isPopular = popularAddonId === a.id && options.addons.length > 1;
              return (
                <motion.div
                  key={a.id}
                  layout
                  whileTap={{ scale: 0.992 }}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                >
                  <Box
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setFormData((prev) => {
                          const p = isV2Selection(prev) ? prev : emptySelection();
                          const ids = new Set(p.addonIds || []);
                          if (ids.has(a.id)) ids.delete(a.id);
                          else ids.add(a.id);
                          return { ...p, addonIds: [...ids] };
                        });
                      }
                    }}
                    onClick={() =>
                      setFormData((prev) => {
                        const p = isV2Selection(prev) ? prev : emptySelection();
                        const ids = new Set(p.addonIds || []);
                        if (ids.has(a.id)) ids.delete(a.id);
                        else ids.add(a.id);
                        return { ...p, addonIds: [...ids] };
                      })
                    }
                    sx={{
                      ...rowBaseSx,
                      borderColor: checked ? fadeThemeColor(accentColor, 0.45) : fadeThemeColor(textColor, 0.08),
                      bgcolor: checked ? fadeThemeColor(accentColor, 0.06) : fadeThemeColor(textColor, 0.02),
                      boxShadow: checked
                        ? `0 2px 12px ${fadeThemeColor(accentColor, 0.12)}`
                        : "none",
                    }}
                  >
                    <Checkbox
                      checked={checked}
                      tabIndex={-1}
                      disableRipple
                      icon={
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "6px",
                            border: `2px solid ${fadeThemeColor(textColor, 0.2)}`,
                          }}
                        />
                      }
                      checkedIcon={
                        <Box
                          sx={{
                            width: 22,
                            height: 22,
                            borderRadius: "6px",
                            bgcolor: accentColor,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <FaCheck size={14} color="#fff" />
                        </Box>
                      }
                      sx={{ p: 0, mr: isAr ? 0 : 1.5, ml: isAr ? 1.5 : 0 }}
                    />
                    <Box sx={{ flex: 1, minWidth: 0 }}>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
                        <Typography
                          variant="body1"
                          sx={{
                            fontWeight: 700,
                            lineHeight: 1.35,
                            px: 0.75,
                            pt: "10px",
                            pb: 0.5,
                          }}
                        >
                          {labelFor(a)}
                        </Typography>
                        {isPopular && (
                          <Chip
                            label={isAr ? "الأكثر طلبًا" : "Popular"}
                            size="small"
                            sx={{
                              height: 22,
                              fontSize: "0.65rem",
                              fontWeight: 700,
                              bgcolor: fadeThemeColor(accentColor, 0.15),
                              color: accentColor,
                            }}
                          />
                        )}
                      </Box>
                    </Box>
                    {priceStr && (
                      <Typography
                        variant="body2"
                        sx={{
                          fontWeight: 800,
                          color: accentColor,
                          flexShrink: 0,
                          ml: isAr ? 0 : 1,
                          mr: isAr ? 1 : 0,
                        }}
                      >
                        {priceStr}
                      </Typography>
                    )}
                  </Box>
                </motion.div>
              );
            })}
          </Stack>
        </Box>
      )}

      {options?.removals?.length > 0 && (
        <Box sx={{ ...sectionCardSx, bgcolor: fadeThemeColor(textColor, 0.02) }}>
          <Typography variant="h6" sx={{ fontWeight: 800, fontSize: "1.05rem", mb: 0.25 }}>
            {isAr ? "خصص بيتزاك" : "Customize your pizza"}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: fadeThemeColor(textColor, 0.55), mb: 1.75, fontWeight: 500 }}
          >
            {isAr ? "أزل المكونات التي لا تريدها" : "Remove ingredients you don’t want"}
          </Typography>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {options.removals.map((r) => {
              const on = (sel.removalIds || []).includes(r.id);
              return (
                <motion.div key={r.id} whileTap={{ scale: 0.96 }}>
                  <Chip
                    label={labelFor(r)}
                    onClick={() =>
                      setFormData((prev) => {
                        const p = isV2Selection(prev) ? prev : emptySelection();
                        const ids = new Set(p.removalIds || []);
                        if (ids.has(r.id)) ids.delete(r.id);
                        else ids.add(r.id);
                        return { ...p, removalIds: [...ids] };
                      })
                    }
                    sx={{
                      fontWeight: 700,
                      borderRadius: 999,
                      px: 1,
                      py: 2.5,
                      height: "auto",
                      border: "2px solid",
                      borderColor: on ? accentColor : fadeThemeColor(textColor, 0.1),
                      bgcolor: on ? fadeThemeColor(accentColor, 0.12) : "#fff",
                      color: on ? accentColor : fadeThemeColor(textColor, 0.85),
                      boxShadow: on ? `0 2px 10px ${fadeThemeColor(accentColor, 0.15)}` : "none",
                      "& .MuiChip-label": { px: 1.25 },
                    }}
                  />
                </motion.div>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}
