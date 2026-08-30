import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "styled-components";
import {
  parseMacrosJson,
  renderableMacros,
  macroLabel,
  macroValueText,
} from "./schema";

/**
 * Nutrition strip shown in a product's detail view, in every theme.
 *
 * Renders NOTHING when the product has no usable macro rows — that is what
 * makes it safe to mount in all themes (including the clinic theme) and for
 * non-food verticals without any business_type or feature-flag gating.
 *
 * Styling follows ProductOptionsPicker: MUI primitives plus styled-components
 * theme tokens, so it inherits each restaurant's palette.
 *
 * @param {string|object|null} macros raw value off the product
 * @param {string} activeLanguage "en" | "ar"
 */
export default function MacrosStrip({ macros, activeLanguage = "en" }) {
  const theme = useTheme();
  const items = renderableMacros(parseMacrosJson(macros));
  if (items.length === 0) return null;

  const isAr = activeLanguage === "ar";
  const mainColor = theme?.mainColor || theme?.maincolor || "#a6ce39";
  const textColor = theme?.BoxTextColor || theme?.textColor || "#1a1a1a";
  const borderColor = theme?.borderColor || "rgba(128,128,128,0.22)";
  const surface = theme?.BoxColor || "transparent";

  return (
    <Box
      dir={isAr ? "rtl" : "ltr"}
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(84px, 1fr))",
        gap: "8px",
        margin: "12px 0",
      }}
    >
      {items.map((item) => (
        <Box
          key={item.id}
          sx={{
            background: surface,
            border: `1px solid ${borderColor}`,
            borderRadius: "10px",
            padding: "8px 6px",
            textAlign: "center",
            minWidth: 0,
          }}
        >
          <Typography
            component="div"
            sx={{
              fontSize: "14px",
              fontWeight: 700,
              lineHeight: 1.25,
              color: mainColor,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {macroValueText(item)}
          </Typography>
          <Typography
            component="div"
            sx={{
              fontSize: "10px",
              fontWeight: 600,
              marginTop: "2px",
              letterSpacing: "0.2px",
              color: textColor,
              opacity: 0.6,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {macroLabel(item, activeLanguage)}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
