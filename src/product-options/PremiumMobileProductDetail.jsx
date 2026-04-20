import React from "react";
import { Box, Typography, TextField, Chip, Paper } from "@mui/material";
import { fadeThemeColor } from "./muiAlphaSafe";
import { motion } from "framer-motion";

/**
 * Hero card: title, price, description, optional tags.
 * Render `children` between this card and special instructions (e.g. options UI).
 */
export default function PremiumMobileProductDetail({
  isAr,
  productName,
  descriptionHtml,
  tags = [],
  accentColor,
  textColor,
  unitPriceDisplay,
  compareAtDisplay = null,
  showCompareAt = false,
  instruction,
  setInstruction,
  outOfStockNotice = null,
  children,
}) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 560,
        mx: "auto",
        px: 2,
        pt: 2,
        pb: 1,
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          p: 2.5,
          mb: 2,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          border: `1px solid ${fadeThemeColor(textColor, 0.06)}`,
          bgcolor: "#fff",
        }}
      >
        {tags.length > 0 && (
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 0.75,
              mb: 1.5,
            }}
          >
            {tags.map((t) => (
              <Chip
                key={t}
                label={t}
                size="small"
                sx={{
                  fontWeight: 700,
                  bgcolor: fadeThemeColor(accentColor, 0.12),
                  color: accentColor,
                }}
              />
            ))}
          </Box>
        )}
        <Typography
          variant="h5"
          component="h1"
          sx={{
            fontWeight: 900,
            lineHeight: 1.2,
            mb: 1,
            color: textColor,
            letterSpacing: -0.3,
          }}
        >
          {productName}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "baseline",
            gap: 1.5,
            flexWrap: "wrap",
            mb: 1.5,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 900,
              color: accentColor,
              letterSpacing: -0.8,
              fontSize: { xs: "1.75rem", sm: "2rem" },
            }}
          >
            {unitPriceDisplay}
          </Typography>
          {showCompareAt && compareAtDisplay && (
            <Typography
              sx={{
                textDecoration: "line-through",
                color: fadeThemeColor(textColor, 0.38),
                fontWeight: 600,
                fontSize: "1rem",
              }}
            >
              {compareAtDisplay}
            </Typography>
          )}
        </Box>
        {descriptionHtml ? (
          <Box
            sx={{
              color: fadeThemeColor(textColor, 0.72),
              fontSize: "0.95rem",
              lineHeight: 1.65,
              fontWeight: 500,
              "& p": { margin: 0, marginBottom: "0.5em" },
              "& p:last-child": { marginBottom: 0 },
            }}
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        ) : null}
        {outOfStockNotice}
      </Paper>

      {children}

      <Paper
        elevation={0}
        sx={{
          borderRadius: 3,
          p: 2,
          mt: 0.5,
          mb: 10,
          boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
          border: `1px solid ${fadeThemeColor(textColor, 0.06)}`,
          bgcolor: "#fff",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: 800, mb: 0.5, color: textColor }}
        >
          {isAr ? "ملاحظات للمطبخ" : "Special instructions"}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: fadeThemeColor(textColor, 0.5), display: "block", mb: 1 }}
        >
          {isAr
            ? "اختياري — أي تفضيلات خاصة للطلب"
            : "Optional — allergies, spice level, etc."}
        </Typography>
        <TextField
          multiline
          minRows={3}
          fullWidth
          placeholder={
            isAr ? "أضف ملاحظة للمطبخ" : "Add a note for the kitchen"
          }
          value={instruction}
          onChange={(e) => setInstruction(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: fadeThemeColor(textColor, 0.03),
            },
          }}
        />
      </Paper>
    </Box>
  );
}

/**
 * Sticky bottom bar: quantity, total, primary CTA.
 */
export function PremiumStickyCartBar({
  show,
  accentColor,
  buttonTextColor,
  surfaceColor,
  textColor,
  quantity,
  onIncrement,
  onDecrement,
  lineTotalLabel,
  ctaLabel,
  onAddToCart,
  isAr,
}) {
  if (!show) return null;

  const btnStyle = {
    width: 44,
    height: 44,
    border: "none",
    background: "transparent",
    fontSize: "1.35rem",
    fontWeight: 700,
    cursor: "pointer",
    color: accentColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 10,
        px: 2,
        pt: 1.5,
        pb: "calc(14px + env(safe-area-inset-bottom, 0px))",
        background: fadeThemeColor(surfaceColor || "#fff", 0.94),
        backdropFilter: "blur(14px)",
        borderTop: "1px solid",
        borderColor: fadeThemeColor(textColor || "#000", 0.08),
        boxShadow: "0 -12px 40px rgba(0,0,0,0.08)",
        direction: isAr ? "rtl" : "ltr",
      }}
    >
      <Box sx={{ maxWidth: 560, mx: "auto" }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 1,
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: fadeThemeColor(textColor, 0.45),
              textTransform: "uppercase",
              letterSpacing: 0.9,
              fontSize: "0.65rem",
            }}
          >
            {isAr ? "الكمية" : "Quantity"}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 800,
              color: fadeThemeColor(textColor, 0.45),
              textTransform: "uppercase",
              letterSpacing: 0.9,
              fontSize: "0.65rem",
            }}
          >
            {isAr ? "الإجمالي" : "Total"}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            mb: 1.5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              borderRadius: 999,
              border: `2px solid ${fadeThemeColor(accentColor, 0.22)}`,
              overflow: "hidden",
              bgcolor: fadeThemeColor(accentColor, 0.04),
            }}
          >
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              style={btnStyle}
              onClick={onDecrement}
              aria-label="decrease quantity"
            >
              −
            </motion.button>
            <Typography
              sx={{
                minWidth: 36,
                textAlign: "center",
                fontWeight: 900,
                fontSize: "1.1rem",
                color: textColor,
              }}
            >
              {quantity}
            </Typography>
            <motion.button
              type="button"
              whileTap={{ scale: 0.9 }}
              style={btnStyle}
              onClick={onIncrement}
              aria-label="increase quantity"
            >
              +
            </motion.button>
          </Box>
          <Typography
            sx={{
              flex: 1,
              textAlign: "end",
              fontWeight: 900,
              fontSize: "1.35rem",
              color: textColor,
              letterSpacing: -0.5,
            }}
          >
            {lineTotalLabel}
          </Typography>
        </Box>
        <motion.button
          type="button"
          whileTap={{ scale: 0.985 }}
          onClick={onAddToCart}
          style={{
            width: "100%",
            border: "none",
            borderRadius: 16,
            padding: "16px 20px",
            fontWeight: 800,
            fontSize: "1.02rem",
            cursor: "pointer",
            background: accentColor,
            color: buttonTextColor,
            boxShadow: `0 10px 28px ${fadeThemeColor(accentColor, 0.4)}`,
          }}
        >
          {ctaLabel}
        </motion.button>
      </Box>
    </Box>
  );
}
