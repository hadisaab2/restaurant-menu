import React from "react";
import { getCardMacro } from "./macroBadge";

/**
 * Small macro chip for a product card — e.g. "320 kcal".
 *
 * Renders NOTHING unless the merchant flagged exactly one macro row with
 * `showOnCard`, so cards stay clean by default and the compact two-column
 * mobile grids are never crowded.
 *
 * Self-contained inline styles rather than each theme's styled-components, so
 * it can be dropped into every card without touching nine styles.js files.
 * Positioned absolutely — every card's image container is already a
 * positioning context (the existing NEW badge relies on the same thing).
 */
export default function MacroChip({ macros, activeLanguage = "en", position = "bottom-left" }) {
  const macro = getCardMacro(macros, activeLanguage);
  if (!macro) return null;

  const vertical = position.startsWith("top") ? { top: 6 } : { bottom: 6 };
  const horizontal = position.endsWith("right") ? { right: 6 } : { left: 6 };

  return (
    <span
      title={macro.label}
      style={{
        position: "absolute",
        ...vertical,
        ...horizontal,
        zIndex: 4,
        display: "inline-block",
        maxWidth: "calc(100% - 12px)",
        padding: "2px 7px",
        borderRadius: 999,
        background: "rgba(15, 23, 42, 0.72)",
        backdropFilter: "blur(3px)",
        WebkitBackdropFilter: "blur(3px)",
        color: "#ffffff",
        fontSize: 10,
        fontWeight: 700,
        lineHeight: 1.6,
        letterSpacing: "0.2px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        pointerEvents: "none",
      }}
    >
      {macro.text}
    </span>
  );
}
