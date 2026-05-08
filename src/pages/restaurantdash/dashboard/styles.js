import styled, { keyframes } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
const T = {
  /* surfaces */
  pageBg: "#f0f2f8",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  /* text */
  textPrimary: "#0f172a",
  textSub: "#64748b",
  textMuted: "#94a3b8",
  /* accents */
  accent: "#5eabb1",       /* teal */
  accentPurple: "#8b5cf6", /* purple */
  accentAmber: "#f59e0b",  /* amber */
  accentRose: "#f43f5e",   /* rose */
  accentEmerald: "#10b981",/* green */
  accentBlue: "#3b82f6",   /* blue */
  /* shadows */
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  shadowHover: "0 12px 32px rgba(15,23,42,0.13)",
};

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0);    }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(94,171,177,0); }
  50%       { box-shadow: 0 0 0 6px rgba(94,171,177,0.12); }
`;

/* ─────────────────────────────────────────────
   PAGE WRAPPER
───────────────────────────────────────────── */
export const Wrapper = styled.div`
  width: 90%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  animation: ${fadeUp} 0.35s ease both;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
    box-sizing: border-box;
  }
`;

/* ─────────────────────────────────────────────
   HERO BANNER
───────────────────────────────────────────── */
export const Hero = styled.div`
  border-radius: 20px;
  padding: 28px 28px 24px;

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 20px 18px 18px;
    border-radius: 16px;
  }

  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

  /* subtle grid lines */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 19px;
    letter-spacing: -0.3px;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 8px 0 0 0;
  opacity: 0.65;
  font-size: 13.5px;
  line-height: 1.6;
  max-width: 560px;
  position: relative;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12px;
    margin-top: 6px;
  }
`;

export const MetaRow = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  position: relative;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 11.5px;
  font-weight: 500;
  padding: 5px 12px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  letter-spacing: 0.2px;
  backdrop-filter: blur(4px);
`;

/* ─────────────────────────────────────────────
   STAT CARDS GRID
───────────────────────────────────────────── */
export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (min-width: 1200px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`;

export const StatCard = styled.div`
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 18px;
  padding: 18px 16px 16px;
  box-shadow: ${T.shadow};
  position: relative;
  overflow: hidden;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 14px 12px 12px;
    border-radius: 14px;
  }

  /* top accent stripe */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(p) => p.$accent || T.accent};
    border-radius: 18px 18px 0 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${T.shadowHover};
  }
`;

export const StatIconBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: ${(p) => p.$bg || "rgba(94,171,177,0.12)"};
  color: ${(p) => p.$color || T.accent};
  margin-bottom: 12px;
  flex-shrink: 0;
`;

export const StatLabel = styled.div`
  font-size: 11.5px;
  font-weight: 600;
  color: ${T.textSub};
  letter-spacing: 0.4px;
  text-transform: uppercase;
`;

export const StatValue = styled.div`
  margin-top: 6px;
  font-size: 30px;
  line-height: 1;
  font-weight: 800;
  color: ${T.textPrimary};
  letter-spacing: -1px;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 24px;
  }
`;

export const StatHint = styled.div`
  margin-top: 8px;
  font-size: 11px;
  color: ${T.textMuted};
  line-height: 1.35;
`;

/* ─────────────────────────────────────────────
   QUICK ACTION BUTTONS
───────────────────────────────────────────── */
export const ActionsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr 1fr;
    gap: 10px;
  }
`;

export const ActionButton = styled.button`
  border: none;
  background: linear-gradient(
    135deg,
    ${(p) => p.$from || "#0c0f1d"} 0%,
    ${(p) => p.$to || "#1e293b"} 100%
  );
  color: #f8fafc;
  border-radius: 14px;
  padding: 14px 12px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
  line-height: 1.35;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  letter-spacing: 0.15px;
  box-shadow: 0 4px 16px rgba(15, 23, 42, 0.16);

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 12px 10px;
    font-size: 12px;
    border-radius: 12px;
    gap: 6px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 28px rgba(15, 23, 42, 0.22);
    filter: brightness(1.12);
  }
  &:active {
    transform: scale(0.97);
  }
`;

export const ActionIcon = styled.span`
  font-size: 22px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

/* ─────────────────────────────────────────────
   CHART GRIDS
───────────────────────────────────────────── */
export const ChartsGridWide = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: ${breakingPoints.lg}px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 14px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

/* ─────────────────────────────────────────────
   CHART CARD
───────────────────────────────────────────── */
export const ChartCard = styled.div`
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 18px;
  padding: 20px;
  box-shadow: ${T.shadow};
  transition: box-shadow 0.2s ease;
  overflow: hidden;

  &:hover {
    box-shadow: ${T.shadowHover};
  }
`;

export const ChartTitle = styled.h3`
  margin: 0 0 4px 0;
  font-size: 15px;
  font-weight: 700;
  color: ${T.textPrimary};
  letter-spacing: -0.2px;
`;

export const ChartCaption = styled.p`
  margin: 0 0 14px 0;
  font-size: 12px;
  color: ${T.textMuted};
  line-height: 1.45;
`;

export const ChartViewport = styled.div`
  width: 100%;
  height: ${(p) => (p.$tall ? "min(300px, 52vw)" : "min(250px, 48vw)")};
  min-height: 200px;

  @media (max-width: ${breakingPoints.sm}px) {
    height: 220px;
    min-height: 180px;
  }
`;

/* ─────────────────────────────────────────────
   HORIZONTAL BAR ROWS
───────────────────────────────────────────── */
export const Rows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 2fr 36px;
  gap: 10px;
  align-items: center;

  @media (min-width: 520px) {
    grid-template-columns: 110px 1fr 36px;
  }
`;

export const RowLabel = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${T.textSub};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const RowTrack = styled.div`
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: #e2e8f0;
  overflow: hidden;
`;

export const RowFill = styled.div`
  height: 100%;
  border-radius: 999px;
  width: ${(p) => `${p.$width || 0}%`};
  background: linear-gradient(90deg, ${T.accent} 0%, #38bdf8 100%);
  transition: width 0.6s cubic-bezier(0.16,1,0.3,1);
`;

export const RowValue = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${T.textPrimary};
  text-align: right;
`;

/* ─────────────────────────────────────────────
   CLASSIC DONUT
───────────────────────────────────────────── */
export const DonutWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  flex-wrap: wrap;
`;

export const Donut = styled.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: ${(p) =>
    `conic-gradient(#10b981 0 ${p.$availableDeg}deg, #f43f5e ${p.$availableDeg}deg 360deg)`};
  position: relative;
  flex-shrink: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &::after {
    content: "";
    position: absolute;
    inset: 22px;
    border-radius: 50%;
    background: #ffffff;
  }
`;

export const Legend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
  min-width: 120px;
`;

export const LegendItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 13px;
  color: ${T.textSub};
  font-weight: 500;

  span:last-child {
    font-weight: 700;
    color: ${T.textPrimary};
  }
`;

export const Dot = styled.span`
  width: 22px;
  height: 3px;
  border-radius: 2px;
  margin-right: 8px;
  display: inline-block;
  flex-shrink: 0;
  /* three dashes via repeating gradient */
  background: repeating-linear-gradient(
    90deg,
    ${(p) => p.$color || T.textMuted} 0px,
    ${(p) => p.$color || T.textMuted} 6px,
    transparent 6px,
    transparent 8px
  );
`;

export const LeftLegend = styled.span`
  display: inline-flex;
  align-items: center;
`;

/* ─────────────────────────────────────────────
   SECTION DIVIDER LABEL
───────────────────────────────────────────── */
export const SectionLabel = styled.div`
  font-size: 11.5px;
  font-weight: 700;
  color: ${T.textMuted};
  letter-spacing: 0.8px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 10px;

  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background: ${T.cardBorder};
    border-radius: 1px;
  }
`;

/* ─────────────────────────────────────────────
   VISIT ANALYTICS FILTERS
───────────────────────────────────────────── */
export const VisitFiltersBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  gap: 12px 16px;
  padding: 14px 16px;
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 16px;
  box-shadow: ${T.shadow};

  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;

  @media (max-width: ${breakingPoints.sm}px) {
    min-width: 0;
    width: 100%;
  }
`;

export const FilterGroupInline = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: flex-end;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterLabel = styled.span`
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: ${T.textMuted};
`;

export const FilterSelect = styled.select`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${T.cardBorder};
  background: #f8fafc;
  color: ${T.textPrimary};
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(94, 171, 177, 0.45);
  }

  &:focus {
    border-color: ${T.accent};
    box-shadow: 0 0 0 3px rgba(94, 171, 177, 0.2);
  }
`;

export const FilterDateInput = styled.input`
  height: 38px;
  padding: 0 12px;
  border-radius: 10px;
  border: 1px solid ${T.cardBorder};
  background: #f8fafc;
  color: ${T.textPrimary};
  font-size: 13px;
  outline: none;
  min-width: 132px;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:focus {
    border-color: ${T.accent};
    box-shadow: 0 0 0 3px rgba(94, 171, 177, 0.2);
  }
`;

export const FilterHint = styled.p`
  margin: 0;
  width: 100%;
  flex-basis: 100%;
  font-size: 12px;
  color: ${T.textSub};
  line-height: 1.45;
`;
