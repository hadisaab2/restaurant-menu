import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Radio,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { FaPlus, FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { emptyMacros, ensureMacroIds, parseMacrosJson } from "./schema";

function moveItem(arr, index, delta) {
  const next = [...arr];
  const j = index + delta;
  if (j < 0 || j >= next.length) return arr;
  [next[index], next[j]] = [next[j], next[index]];
  return next;
}

/** Initialize the editor model from the stored products.macros value. */
export function macrosFromJson(value) {
  return parseMacrosJson(value);
}

/**
 * Admin repeater for a product's macros. Mirrors ProductOptionsEditor so the
 * two read as one system in the product form.
 */
export default function MacrosEditor({ value, onChange, languageHint = "en" }) {
  const macros = ensureMacroIds(value || emptyMacros());
  const isAr = languageHint === "ar";
  const items = macros.items;

  const update = (list) => onChange(ensureMacroIds({ ...macros, items: list }));

  const setField = (index, key, fieldValue) =>
    update(items.map((m, i) => (i === index ? { ...m, [key]: fieldValue } : m)));

  const addRow = () =>
    update([
      ...items,
      { labelEn: "", labelAr: "", value: "", unit: "", showOnCard: false },
    ]);

  // Exactly one row may drive the card chip; ensureMacroIds keeps the first
  // flagged one, so clear the others here.
  const setCardRow = (index) =>
    update(items.map((m, i) => ({ ...m, showOnCard: i === index })));

  const clearCardRow = () => update(items.map((m) => ({ ...m, showOnCard: false })));

  return (
    <Grid container spacing={1} sx={{ marginTop: 1 }}>
      <Grid item xs={12}>
        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>
          {isAr ? "القيم الغذائية" : "Macros / Nutrition"}
        </Typography>
        <Typography sx={{ fontSize: 12, opacity: 0.7, marginBottom: 1 }}>
          {isAr
            ? "اختياري. اتركه فارغًا ولن يظهر شيء في القائمة."
            : "Optional. Leave empty and nothing shows on the menu. Pick one row to display as a badge on the product card."}
        </Typography>
      </Grid>

      {items.map((item, index) => (
        <Grid item xs={12} key={item.id}>
          <Box
            sx={{
              border: "1px solid rgba(0,0,0,0.12)",
              borderRadius: "10px",
              padding: "10px",
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center" flexWrap="wrap" useFlexGap>
              <TextField
                size="small"
                label={isAr ? "الاسم (EN)" : "Label (EN)"}
                placeholder="Calories"
                value={item.labelEn}
                onChange={(e) => setField(index, "labelEn", e.target.value)}
                sx={{ flex: "1 1 150px" }}
              />
              <TextField
                size="small"
                label={isAr ? "الاسم (AR)" : "Label (AR)"}
                placeholder="سعرات حرارية"
                value={item.labelAr}
                onChange={(e) => setField(index, "labelAr", e.target.value)}
                sx={{ flex: "1 1 150px" }}
              />
              <TextField
                size="small"
                label={isAr ? "القيمة" : "Value"}
                placeholder="320"
                value={item.value}
                onChange={(e) => setField(index, "value", e.target.value)}
                sx={{ flex: "0 1 110px" }}
              />
              <TextField
                size="small"
                label={isAr ? "الوحدة" : "Unit"}
                placeholder="kcal"
                value={item.unit}
                onChange={(e) => setField(index, "unit", e.target.value)}
                sx={{ flex: "0 1 90px" }}
              />

              <Tooltip title={isAr ? "إظهار على البطاقة" : "Show as badge on the product card"}>
                <Radio
                  size="small"
                  checked={Boolean(item.showOnCard)}
                  onChange={() => setCardRow(index)}
                  inputProps={{ "aria-label": "Show on card" }}
                />
              </Tooltip>

              <IconButton
                size="small"
                onClick={() => update(moveItem(items, index, -1))}
                disabled={index === 0}
                aria-label="Move up"
              >
                <FaArrowUp size={13} />
              </IconButton>
              <IconButton
                size="small"
                onClick={() => update(moveItem(items, index, 1))}
                disabled={index === items.length - 1}
                aria-label="Move down"
              >
                <FaArrowDown size={13} />
              </IconButton>
              <IconButton
                size="small"
                color="error"
                onClick={() => update(items.filter((_, i) => i !== index))}
                aria-label="Remove"
              >
                <FaTrash size={13} />
              </IconButton>
            </Stack>
          </Box>
        </Grid>
      ))}

      <Grid item xs={12}>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <Button size="small" variant="outlined" startIcon={<FaPlus size={11} />} onClick={addRow}>
            {isAr ? "إضافة قيمة" : "Add macro"}
          </Button>
          {items.some((m) => m.showOnCard) && (
            <Button size="small" onClick={clearCardRow}>
              {isAr ? "بدون شارة" : "No card badge"}
            </Button>
          )}
        </Stack>
      </Grid>
    </Grid>
  );
}
