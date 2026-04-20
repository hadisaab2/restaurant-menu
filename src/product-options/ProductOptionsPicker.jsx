import React, { useEffect } from "react";
import {
  Box,
  Typography,
  Chip,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { computeUnitPrice } from "./pricing";
import { emptySelection, isV2Selection } from "./schema";

/**
 * @param {{
 *   options: import('./schema').ProductOptionsV2,
 *   formData: { sizeId: string|null, addonIds: string[], removalIds: string[] },
 *   setFormData: (fn: (p: any) => any) => void,
 *   formErrors?: Record<string, string>,
 *   activeLanguage: 'en'|'ar',
 *   currencySymbol?: string,
 *   basePrice: string|number,
 *   onPriceChange: (formatted: string) => void,
 * }} props
 */
export default function ProductOptionsPicker({
  options,
  formData,
  setFormData,
  formErrors = {},
  activeLanguage,
  basePrice,
  onPriceChange,
}) {
  const sel = isV2Selection(formData) ? formData : emptySelection();
  const isAr = activeLanguage === "ar";

  const addonKey = (sel.addonIds || []).slice().sort().join(",");
  const removalKey = (sel.removalIds || []).slice().sort().join(",");

  useEffect(() => {
    const price = computeUnitPrice(basePrice, options, sel);
    onPriceChange(price);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- onPriceChange stable enough; avoid loops
  }, [basePrice, options, sel.sizeId, addonKey, removalKey]);

  const labelFor = (row) =>
    isAr ? row.labelAr || row.labelEn : row.labelEn || row.labelAr;

  return (
    <Box
      sx={{
        width: "100%",
        mt: 2,
        mb: 1,
        "& .MuiFormControlLabel-root": {
          alignItems: "flex-start",
          ml: 0,
          mr: 0,
        },
      }}
    >
      {options?.sizes?.length > 0 && (
        <Box sx={{ mb: 2.5 }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 700,
              letterSpacing: 0.3,
              mb: 1,
              color: "text.primary",
              opacity: 0.9,
            }}
          >
            {isAr ? "الحجم" : "Size"}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              overflowX: "auto",
              pb: 0.5,
              WebkitOverflowScrolling: "touch",
            }}
          >
            {options.sizes.map((s) => {
              const selected = sel.sizeId === s.id;
              return (
                <Chip
                  key={s.id}
                  label={labelFor(s)}
                  onClick={() =>
                    setFormData((prev) => {
                      const base = isV2Selection(prev) ? prev : emptySelection();
                      return { ...base, sizeId: s.id };
                    })
                  }
                  color={selected ? "primary" : "default"}
                  variant={selected ? "filled" : "outlined"}
                  sx={{
                    borderRadius: 2,
                    py: 2.5,
                    px: 0.5,
                    fontWeight: 600,
                    borderWidth: selected ? 0 : 2,
                    "& .MuiChip-label": { px: 1.5 },
                  }}
                />
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

      {options?.addons?.length > 0 && (
        <Box sx={{ mb: 2.5 }}>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, letterSpacing: 0.3, mb: 1, opacity: 0.9 }}
          >
            {isAr ? "إضافات" : "Add-ons"}
          </Typography>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 0.5,
            }}
          >
            <FormGroup>
              {options.addons.map((a) => {
                const checked = (sel.addonIds || []).includes(a.id);
                return (
                  <FormControlLabel
                    key={a.id}
                    control={
                      <Checkbox
                        checked={checked}
                        size="medium"
                        onChange={() => {
                          setFormData((prev) => {
                            const p = isV2Selection(prev) ? prev : emptySelection();
                            const ids = new Set(p.addonIds || []);
                            if (ids.has(a.id)) ids.delete(a.id);
                            else ids.add(a.id);
                            return { ...p, addonIds: [...ids] };
                          });
                        }}
                      />
                    }
                    label={
                      <Box sx={{ pt: "10px" }}>
                        <Typography variant="body2" fontWeight={600}>
                          {labelFor(a)}
                        </Typography>
                      </Box>
                    }
                  />
                );
              })}
            </FormGroup>
          </Box>
        </Box>
      )}

      {options?.removals?.length > 0 && (
        <Box
          sx={{
            mb: 1,
            p: 1.5,
            borderRadius: 2,
            bgcolor: "action.hover",
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 700, mb: 1, opacity: 0.75 }}
          >
            {isAr ? "تخصيص / إزالة" : "Customize / remove"}
          </Typography>
          <FormGroup>
            {options.removals.map((r) => {
              const checked = (sel.removalIds || []).includes(r.id);
              return (
                <FormControlLabel
                  key={r.id}
                  control={
                    <Checkbox
                      checked={checked}
                      size="small"
                      onChange={() => {
                        setFormData((prev) => {
                          const p = isV2Selection(prev) ? prev : emptySelection();
                          const ids = new Set(p.removalIds || []);
                          if (ids.has(r.id)) ids.delete(r.id);
                          else ids.add(r.id);
                          return { ...p, removalIds: [...ids] };
                        });
                      }}
                    />
                  }
                  label={
                    <Box sx={{ pt: "10px" }}>
                      <Typography variant="body2" color="text.secondary">
                        {labelFor(r)}
                      </Typography>
                    </Box>
                  }
                />
              );
            })}
          </FormGroup>
        </Box>
      )}
    </Box>
  );
}
