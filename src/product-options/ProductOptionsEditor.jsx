import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { emptyOptions, ensureOptionIds, parseFormJsonString } from "./schema";
import { migrateLegacyFormioToV2 } from "./migrateLegacyFormio";

function moveItem(arr, index, delta) {
  const next = [...arr];
  const j = index + delta;
  if (j < 0 || j >= next.length) return arr;
  [next[index], next[j]] = [next[j], next[index]];
  return next;
}

/**
 * Initialize editor model from stored form_json string (v2 or legacy).
 */
export function optionsFromFormJsonString(jsonString) {
  const parsed = parseFormJsonString(jsonString);
  if (parsed.kind === "v2") {
    return ensureOptionIds(parsed.data);
  }
  if (parsed.kind === "legacy") {
    return migrateLegacyFormioToV2(parsed.data);
  }
  return emptyOptions();
}

export default function ProductOptionsEditor({ value, onChange, languageHint = "en" }) {
  const options = ensureOptionIds(value || emptyOptions());

  const updateList = (key, list) => {
    onChange(ensureOptionIds({ ...options, [key]: list }));
  };

  const sections = [
    {
      key: "sizes",
      titleEn: "Size options",
      titleAr: "خيارات الحجم",
      subtitleEn:
        "Customer picks one size. Enter each size’s price (0 = same as product list price).",
      subtitleAr: "سعر كل حجم؛ 0 = سعر المنتج الأساسي.",
      priceField: true,
    },
    {
      key: "addons",
      titleEn: "Add-ons",
      titleAr: "إضافات",
      subtitleEn: "Extra items with optional price.",
      subtitleAr: "إضافات بسعر اختياري.",
      priceField: true,
    },
    {
      key: "removals",
      titleEn: "Remove / customize",
      titleAr: "إزالة / تخصيص",
      subtitleEn: "e.g. No onions, No sauce (no extra charge).",
      subtitleAr: "مثلا: بدون بصل — بدون تكلفة إضافية.",
      priceField: false,
    },
  ];

  const isAr = languageHint === "ar";

  return (
    <Grid
      container
      spacing={2}
      sx={{
        width: "100%",
        maxWidth: 1320,
        mx: "auto",
        py: 1,
        alignItems: "stretch",
      }}
    >
      {sections.map((sec) => {
        const list = options[sec.key] || [];
        return (
          <Grid item xs={12} md={4} key={sec.key}>
            <Box
              sx={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                p: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper",
              }}
            >
              <Typography fontWeight={600} variant="subtitle1" gutterBottom>
                {isAr ? sec.titleAr : sec.titleEn}
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                display="block"
                sx={{ mb: 2 }}
              >
                {isAr ? sec.subtitleAr : sec.subtitleEn}
              </Typography>
              <Stack spacing={2} sx={{ flex: 1, minWidth: 0 }}>
                {list.map((row, rowIndex) => (
                  <Box
                    key={row.id}
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: "action.hover",
                      border: "1px solid",
                      borderColor: "divider",
                    }}
                  >
                    <Stack
                      direction="column"
                      spacing={1}
                      alignItems="stretch"
                    >
                      <TextField
                        size="small"
                        label={isAr ? "الاسم (إنجليزي)" : "Label (English)"}
                        value={row.labelEn}
                        onChange={(e) => {
                          const next = [...list];
                          next[rowIndex] = { ...row, labelEn: e.target.value };
                          updateList(sec.key, next);
                        }}
                        fullWidth
                      />
                      <TextField
                        size="small"
                        label={isAr ? "الاسم (عربي)" : "Label (Arabic)"}
                        value={row.labelAr}
                        onChange={(e) => {
                          const next = [...list];
                          next[rowIndex] = { ...row, labelAr: e.target.value };
                          updateList(sec.key, next);
                        }}
                        fullWidth
                      />
                      {sec.priceField && (
                        <TextField
                          size="small"
                          type="number"
                          label={
                            sec.key === "sizes"
                              ? isAr
                                ? "السعر"
                                : "Price"
                              : isAr
                                ? "سعر إضافي"
                                : "Extra price"
                          }
                          value={row.priceModifier ?? 0}
                          onChange={(e) => {
                            const next = [...list];
                            next[rowIndex] = {
                              ...row,
                              priceModifier: parseFloat(e.target.value) || 0,
                            };
                            updateList(sec.key, next);
                          }}
                          fullWidth
                          inputProps={{ step: "0.01" }}
                        />
                      )}
                      <Stack direction="row" spacing={0.5} flexWrap="wrap">
                        <IconButton
                          size="small"
                          aria-label="move up"
                          onClick={() =>
                            updateList(sec.key, moveItem(list, rowIndex, -1))
                          }
                          disabled={rowIndex === 0}
                        >
                          <FaArrowUp size={14} />
                        </IconButton>
                        <IconButton
                          size="small"
                          aria-label="move down"
                          onClick={() =>
                            updateList(sec.key, moveItem(list, rowIndex, 1))
                          }
                          disabled={rowIndex === list.length - 1}
                        >
                          <FaArrowDown size={14} />
                        </IconButton>
                        <IconButton
                          size="small"
                          color="error"
                          aria-label="delete"
                          onClick={() =>
                            updateList(
                              sec.key,
                              list.filter((_, i) => i !== rowIndex)
                            )
                          }
                        >
                          <FaTrash size={14} />
                        </IconButton>
                      </Stack>
                    </Stack>
                  </Box>
                ))}
                <Button
                  startIcon={<FaPlus size={14} />}
                  variant="outlined"
                  size="small"
                  onClick={() => {
                    const base = sec.priceField
                      ? { labelEn: "", labelAr: "", priceModifier: 0 }
                      : { labelEn: "", labelAr: "" };
                    updateList(sec.key, [...list, { ...base, id: undefined }]);
                  }}
                  sx={{ alignSelf: "flex-start" }}
                >
                  {isAr ? "إضافة خيار" : "Add option"}
                </Button>
              </Stack>
            </Box>
          </Grid>
        );
      })}
    </Grid>
  );
}
