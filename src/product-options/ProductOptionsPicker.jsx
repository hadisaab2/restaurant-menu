import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import { computeUnitPrice } from "./pricing";
import { emptySelection, isV2Selection } from "./schema";
import { FiCheck, FiX } from "react-icons/fi";

export default function ProductOptionsPicker({
  options,
  formData,
  setFormData,
  formErrors = {},
  activeLanguage,
  basePrice,
  onPriceChange,
}) {
  const theme = useTheme();
  const sel = isV2Selection(formData) ? formData : emptySelection();
  const isAr = activeLanguage === "ar";
  const mainColor = theme?.mainColor || theme?.maincolor || "#a6ce39";
  const selectedTextColor = theme?.popupbackgroundColor || "#ffffff";
  const defaultTextColor = theme?.popupTextColor || theme?.textColor || "#333333";
  const bgTint = mainColor + "12"; // 7% opacity tint of accent
  const borderLight = mainColor + "40"; // 25% opacity border

  const addonKey = (sel.addonIds || []).slice().sort().join(",");
  const removalKey = (sel.removalIds || []).slice().sort().join(",");

  useEffect(() => {
    const price = computeUnitPrice(basePrice, options, sel);
    onPriceChange(price);
  }, [basePrice, options, sel.sizeId, addonKey, removalKey]);

  const labelFor = (row) =>
    isAr ? row.labelAr || row.labelEn : row.labelEn || row.labelAr;

  const priceTag = (modifier) => {
    const p = Number(modifier);
    if (!p || p === 0) return null;
    return p > 0 ? `+${p}` : `${p}`;
  };

  // ── Section Header ──
  const SectionTitle = ({ children }) => (
    <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1.5 }}>
      <Box sx={{ width: 3, height: 16, borderRadius: 1, bgcolor: mainColor }} />
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: defaultTextColor,
          opacity: 0.7,
        }}
      >
        {children}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ width: "100%", mt: 2, mb: 1 }}>

      {/* ── Sizes ── */}
      {options?.sizes?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <SectionTitle>{isAr ? "الحجم" : "Size"}</SectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
            {options.sizes.map((s) => {
              const selected = sel.sizeId === s.id;
              return (
                <Box
                  key={s.id}
                  onClick={() =>
                    setFormData((prev) => {
                      const base = isV2Selection(prev) ? prev : emptySelection();
                      return { ...base, sizeId: s.id };
                    })
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 2,
                    py: 1,
                    borderRadius: "12px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: `1.5px solid ${selected ? mainColor : borderLight}`,
                    bgcolor: selected ? mainColor : bgTint,
                    color: selected ? selectedTextColor : defaultTextColor,
                    boxShadow: selected ? `0 2px 8px ${mainColor}30` : "none",
                    "&:hover": {
                      borderColor: mainColor,
                      bgcolor: selected ? mainColor : mainColor + "1A",
                    },
                  }}
                >
                  <Typography sx={{ fontSize: 13, fontWeight: 600 }}>
                    {labelFor(s)}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          {formErrors.size && (
            <Typography variant="caption" color="error" sx={{ mt: 0.5, display: "block" }}>
              {isAr ? "يرجى اختيار الحجم" : "Please select a size"}
            </Typography>
          )}
        </Box>
      )}

      {/* ── Add-ons ── */}
      {options?.addons?.length > 0 && (
        <Box sx={{ mb: 3 }}>
          <SectionTitle>{isAr ? "إضافات" : "Add-ons"}</SectionTitle>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 0.8 }}>
            {options.addons.map((a) => {
              const checked = (sel.addonIds || []).includes(a.id);
              const price = priceTag(a.priceModifier);
              return (
                <Box
                  key={a.id}
                  onClick={() => {
                    setFormData((prev) => {
                      const p = isV2Selection(prev) ? prev : emptySelection();
                      const ids = new Set(p.addonIds || []);
                      if (ids.has(a.id)) ids.delete(a.id);
                      else ids.add(a.id);
                      return { ...p, addonIds: [...ids] };
                    });
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1.5,
                    px: 1.5,
                    py: 1.2,
                    borderRadius: "10px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: `1.5px solid ${checked ? mainColor : borderLight}`,
                    bgcolor: checked ? bgTint : "transparent",
                    "&:hover": { borderColor: mainColor },
                  }}
                >
                  {/* Custom checkbox */}
                  <Box
                    sx={{
                      width: 22,
                      height: 22,
                      borderRadius: "6px",
                      border: `2px solid ${checked ? mainColor : borderLight}`,
                      bgcolor: checked ? mainColor : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s ease",
                      flexShrink: 0,
                    }}
                  >
                    {checked && <FiCheck size={14} color={selectedTextColor} strokeWidth={3} />}
                  </Box>
                  <Typography
                    sx={{
                      flex: 1,
                      fontSize: 14,
                      fontWeight: checked ? 600 : 400,
                      color: defaultTextColor,
                    }}
                  >
                    {labelFor(a)}
                  </Typography>
                  {price && (
                    <Typography
                      sx={{
                        fontSize: 12,
                        fontWeight: 600,
                        color: mainColor,
                        flexShrink: 0,
                      }}
                    >
                      {price}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      )}

      {/* ── Removals ── */}
      {options?.removals?.length > 0 && (
        <Box sx={{ mb: 1 }}>
          <SectionTitle>{isAr ? "إزالة" : "Remove"}</SectionTitle>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.8 }}>
            {options.removals.map((r) => {
              const checked = (sel.removalIds || []).includes(r.id);
              return (
                <Box
                  key={r.id}
                  onClick={() => {
                    setFormData((prev) => {
                      const p = isV2Selection(prev) ? prev : emptySelection();
                      const ids = new Set(p.removalIds || []);
                      if (ids.has(r.id)) ids.delete(r.id);
                      else ids.add(r.id);
                      return { ...p, removalIds: [...ids] };
                    });
                  }}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 0.8,
                    px: 1.5,
                    py: 0.8,
                    borderRadius: "8px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    border: `1.5px solid ${checked ? "#ef4444" : borderLight}`,
                    bgcolor: checked ? "#fef2f2" : "transparent",
                    "&:hover": { borderColor: checked ? "#ef4444" : mainColor },
                  }}
                >
                  <Box
                    sx={{
                      width: 18,
                      height: 18,
                      borderRadius: "4px",
                      border: `2px solid ${checked ? "#ef4444" : borderLight}`,
                      bgcolor: checked ? "#ef4444" : "transparent",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.15s ease",
                      flexShrink: 0,
                    }}
                  >
                    {checked && <FiX size={12} color="#fff" strokeWidth={3} />}
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 13,
                      fontWeight: checked ? 500 : 400,
                      color: checked ? "#ef4444" : defaultTextColor,
                      textDecoration: checked ? "line-through" : "none",
                      opacity: checked ? 0.8 : 1,
                    }}
                  >
                    {labelFor(r)}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      )}
    </Box>
  );
}
