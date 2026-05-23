import styled, { keyframes, css } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
const T = {
  pageBg: "#f0f2f8",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  text: "#0f172a",
  textSub: "#64748b",
  textMuted: "#94a3b8",
  teal: "#5eabb1",
  tealLight: "rgba(94,171,177,0.12)",
  emerald: "#10b981",
  emeraldLight: "rgba(16,185,129,0.12)",
  amber: "#f59e0b",
  amberLight: "rgba(245,158,11,0.12)",
  rose: "#f43f5e",
  roseLight: "rgba(244,63,94,0.12)",
  blue: "#3b82f6",
  blueLight: "rgba(59,130,246,0.12)",
  purple: "#8b5cf6",
  purpleLight: "rgba(139,92,246,0.12)",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  shadowMd: "0 8px 28px rgba(15,23,42,0.10)",
};

/* ─────────────────────────────────────────────
   ANIMATIONS
───────────────────────────────────────────── */
const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -600px 0; }
  100% { background-position: 600px 0; }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
`;

/* ─────────────────────────────────────────────
   PAGE SHELL
───────────────────────────────────────────── */
export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 48px;
  box-sizing: border-box;
  animation: ${fadeUp} 0.35s ease both;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 16px;
    margin-top: 14px;
  }
`;

/* ─────────────────────────────────────────────
   PAGE HEADER
───────────────────────────────────────────── */
export const PageHeader = styled.div`
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  border-radius: 20px;
  padding: 28px 28px 24px;
  color: #f8fafc;
  position: relative;
  overflow: hidden;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);

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

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 20px 18px 18px;
    border-radius: 14px;
  }
`;

export const PageHeaderInner = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`;

export const PageHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 1.7rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f8fafc;
  line-height: 1.2;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 1.35rem;
  }
`;

export const PageSubtitle = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: rgba(248, 250, 252, 0.6);
  line-height: 1.5;
  max-width: 520px;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 0.8rem;
  }
`;

export const HeaderMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 4px;
  align-items: center;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.75rem;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.75);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 4px 10px;
`;

export const PageHeaderRight = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

export const HeaderBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 8px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;

  ${(p) =>
    p.$primary
      ? css`
          border: none;
          background: ${T.teal};
          color: #fff;
          box-shadow: 0 4px 14px rgba(94, 171, 177, 0.4);
          &:hover { background: #4f9ea4; transform: translateY(-1px); }
        `
      : css`
          border: 1px solid rgba(255,255,255,0.18);
          background: rgba(255,255,255,0.08);
          color: rgba(248,250,252,0.85);
          &:hover { background: rgba(255,255,255,0.14); }
        `}
`;

/* ─────────────────────────────────────────────
   SEARCH + FILTER BAR
───────────────────────────────────────────── */
export const FilterBar = styled.div`
  background: ${T.cardBg};
  border-radius: 16px;
  border: 1px solid ${T.cardBorder};
  padding: 16px 20px;
  box-shadow: ${T.shadow};
  box-sizing: border-box;
`;

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 200px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIcon = styled.span`
  position: absolute;
  left: 12px;
  color: ${T.textMuted};
  font-size: 1rem;
  pointer-events: none;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 40px;
  padding: 0 12px 0 38px;
  border: 1.5px solid rgba(148, 163, 184, 0.3);
  border-radius: 10px;
  font-size: 0.875rem;
  color: ${T.text};
  background: rgba(248, 250, 252, 0.9);
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;

  &::placeholder {
    color: ${T.textMuted};
  }

  &:focus {
    border-color: ${T.teal};
    background: #fff;
  }
`;

export const FilterSelect = styled.select`
  height: 40px;
  padding: 0 32px 0 12px;
  border: 1.5px solid rgba(148, 163, 184, 0.3);
  border-radius: 10px;
  font-size: 0.82rem;
  font-weight: 500;
  color: ${T.textSub};
  background: rgba(248, 250, 252, 0.9) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 10px center;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${T.teal};
  }
`;

export const SortRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const SortLabel = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${T.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
`;

export const SortChip = styled.button`
  padding: 6px 12px;
  font-size: 0.78rem;
  font-weight: 600;
  border-radius: 999px;
  cursor: pointer;
  transition: all 0.15s ease;
  white-space: nowrap;
  border: 1.5px solid
    ${(p) => (p.$active ? T.teal : "rgba(148,163,184,0.3)")};
  background: ${(p) => (p.$active ? T.tealLight : "transparent")};
  color: ${(p) => (p.$active ? T.teal : T.textSub)};

  &:hover {
    border-color: ${T.teal};
    color: ${T.teal};
    background: ${T.tealLight};
  }
`;

/* ─────────────────────────────────────────────
   KPI CARDS
───────────────────────────────────────────── */
export const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`;

export const KpiCard = styled.div`
  background: ${T.cardBg};
  border-radius: 16px;
  padding: 18px 16px 16px;
  border: 1px solid ${T.cardBorder};
  box-shadow: ${T.shadow};
  display: flex;
  flex-direction: column;
  gap: 6px;
  position: relative;
  overflow: hidden;
  transition: box-shadow 0.2s, transform 0.2s;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(p) => p.$accent || T.teal};
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    box-shadow: ${T.shadowMd};
    transform: translateY(-2px);
  }
`;

export const KpiIconBox = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: ${(p) => p.$bg || T.tealLight};
  color: ${(p) => p.$color || T.teal};
  margin-bottom: 4px;
  flex-shrink: 0;
`;

export const KpiValue = styled.span`
  font-size: 1.6rem;
  font-weight: 800;
  color: ${T.text};
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 1.3rem;
  }
`;

export const KpiLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  color: ${T.textSub};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
`;

export const KpiMeta = styled.span`
  font-size: 0.72rem;
  color: ${(p) => p.$positive ? T.emerald : p.$negative ? T.rose : T.textMuted};
  font-weight: ${(p) => (p.$positive || p.$negative) ? "600" : "400"};
  display: flex;
  align-items: center;
  gap: 3px;
  margin-top: auto;
`;

/* ─────────────────────────────────────────────
   ANALYTICS SECTION
───────────────────────────────────────────── */
export const AnalyticsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  background: ${T.cardBg};
  border-radius: 16px;
  border: 1px solid ${T.cardBorder};
  padding: 22px 20px;
  box-shadow: ${T.shadow};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const CardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
`;

export const CardTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
  letter-spacing: -0.02em;
`;

export const CardSubtitle = styled.p`
  margin: 4px 0 0 0;
  font-size: 0.8rem;
  color: ${T.textSub};
  line-height: 1.4;
`;

/* ─────────────────────────────────────────────
   SENTIMENT SUMMARY
───────────────────────────────────────────── */
export const SentimentTrack = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 999px;
  overflow: hidden;
  display: flex;
  background: rgba(148,163,184,0.12);
`;

export const SentimentSegment = styled.div`
  height: 100%;
  background: ${(p) => p.$color};
  transition: width 0.5s ease;
  min-width: ${(p) => (p.$value > 0 ? "4px" : "0")};
`;

export const SentimentRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SentimentRow = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const SentimentDot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(p) => p.$color};
  flex-shrink: 0;
`;

export const SentimentLabel = styled.span`
  font-size: 0.85rem;
  font-weight: 600;
  color: ${T.text};
  min-width: 64px;
`;

export const SentimentBar = styled.div`
  flex: 1;
  height: 8px;
  background: rgba(148,163,184,0.12);
  border-radius: 999px;
  overflow: hidden;
`;

export const SentimentFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: ${(p) => p.$color};
  transition: width 0.5s ease;
`;

export const SentimentCount = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${T.textSub};
  min-width: 40px;
  text-align: right;
`;

export const SentimentPct = styled.span`
  font-size: 0.75rem;
  font-weight: 600;
  color: ${T.textMuted};
  min-width: 40px;
  text-align: right;
`;

/* ─────────────────────────────────────────────
   RATING DISTRIBUTION
───────────────────────────────────────────── */
export const RatingDistRows = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RatingDistRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const StarLabel = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  min-width: 50px;
  font-size: 0.78rem;
  font-weight: 600;
  color: ${T.textSub};
`;

export const StarIcon = styled.span`
  color: ${(p) =>
    p.$n >= 4 ? "#f59e0b" : p.$n === 3 ? "#f97316" : "#ef4444"};
  font-size: 0.85rem;
`;

export const RatingBarTrack = styled.div`
  flex: 1;
  height: 10px;
  background: rgba(148,163,184,0.12);
  border-radius: 999px;
  overflow: hidden;
`;

export const RatingBarFill = styled.div`
  height: 100%;
  border-radius: 999px;
  background: ${(p) =>
    p.$n === 5 ? "#10b981" :
    p.$n === 4 ? "#22c55e" :
    p.$n === 3 ? "#f59e0b" :
    p.$n === 2 ? "#f97316" :
    "#ef4444"};
  transition: width 0.5s ease;
  min-width: ${(p) => (p.$count > 0 ? "6px" : "0")};
`;

export const RatingDistCount = styled.span`
  font-size: 0.78rem;
  font-weight: 700;
  color: ${T.text};
  min-width: 22px;
  text-align: right;
`;

export const RatingDistPct = styled.span`
  font-size: 0.72rem;
  color: ${T.textMuted};
  min-width: 36px;
  text-align: right;
`;

/* ─────────────────────────────────────────────
   TREND CHART CARD (full-width)
───────────────────────────────────────────── */
export const TrendCard = styled.div`
  background: ${T.cardBg};
  border-radius: 16px;
  border: 1px solid ${T.cardBorder};
  padding: 22px 20px 16px;
  box-shadow: ${T.shadow};
  box-sizing: border-box;
`;

export const TrendCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 16px;

  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    gap: 8px;
  }
`;

/* ─────────────────────────────────────────────
   INSIGHTS
───────────────────────────────────────────── */
export const InsightsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const InsightCard = styled.div`
  background: ${T.cardBg};
  border-radius: 14px;
  border: 1px solid ${(p) => p.$borderColor || T.cardBorder};
  padding: 16px;
  box-shadow: ${T.shadow};
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: ${T.shadowMd};
  }
`;

export const InsightTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const InsightIconBox = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  background: ${(p) => p.$bg || T.blueLight};
  color: ${(p) => p.$color || T.blue};
  flex-shrink: 0;
`;

export const InsightChip = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${(p) => p.$bg || T.blueLight};
  color: ${(p) => p.$color || T.blue};
`;

export const InsightText = styled.p`
  margin: 0;
  font-size: 0.85rem;
  font-weight: 600;
  color: ${T.text};
  line-height: 1.4;
`;

export const InsightAction = styled.span`
  font-size: 0.75rem;
  color: ${T.textSub};
  line-height: 1.4;
`;

/* ─────────────────────────────────────────────
   FEEDBACK LIST SECTION
───────────────────────────────────────────── */
export const SectionWrapper = styled.div`
  background: ${T.cardBg};
  border-radius: 16px;
  border: 1px solid ${T.cardBorder};
  box-shadow: ${T.shadow};
  overflow: hidden;
`;

export const SectionHead = styled.div`
  padding: 18px 20px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CountBadge = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 999px;
  background: ${T.tealLight};
  color: ${T.teal};
`;

export const FeedbackList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const FeedbackCard = styled.div`
  padding: 18px 20px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
  display: flex;
  gap: 16px;
  cursor: pointer;
  transition: background 0.15s;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: rgba(248, 250, 252, 0.9);
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 14px 16px;
    flex-direction: column;
    gap: 10px;
  }
`;

export const FeedbackAvatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: ${(p) =>
    p.$mood === "positive" ? T.emeraldLight :
    p.$mood === "negative" ? T.roseLight : T.amberLight};
  color: ${(p) =>
    p.$mood === "positive" ? T.emerald :
    p.$mood === "negative" ? T.rose : T.amber};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 700;
  flex-shrink: 0;
`;

export const FeedbackBody = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const FeedbackTopRow = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const FeedbackName = styled.span`
  font-size: 0.9rem;
  font-weight: 700;
  color: ${T.text};
`;

export const FeedbackDate = styled.span`
  font-size: 0.75rem;
  color: ${T.textMuted};
  margin-left: auto;

  @media (max-width: ${breakingPoints.sm}px) {
    margin-left: 0;
  }
`;

export const StarRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  font-size: 0.95rem;
`;

export const StarFilled = styled.span`
  color: #f59e0b;
  line-height: 1;
`;

export const StarEmpty = styled.span`
  color: rgba(148, 163, 184, 0.5);
  line-height: 1;
`;

export const FeedbackComment = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: ${T.textSub};
  line-height: 1.55;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const FeedbackTagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  align-items: center;
`;

export const MoodBadge = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 9px;
  border-radius: 999px;
  background: ${(p) =>
    p.$mood === "positive" ? T.emeraldLight :
    p.$mood === "negative" ? T.roseLight : T.amberLight};
  color: ${(p) =>
    p.$mood === "positive" ? T.emerald :
    p.$mood === "negative" ? T.rose : T.amber};
`;

export const InfoTag = styled.span`
  font-size: 0.68rem;
  font-weight: 500;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(148,163,184,0.1);
  color: ${T.textSub};
`;

export const FeedbackActions = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  flex-shrink: 0;

  @media (max-width: ${breakingPoints.sm}px) {
    align-self: flex-end;
  }
`;

export const ActionBtn = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  border: 1px solid rgba(148,163,184,0.25);
  background: transparent;
  color: ${T.textSub};
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    background: ${T.tealLight};
    border-color: ${T.teal};
    color: ${T.teal};
  }
`;

/* ─────────────────────────────────────────────
   DETAIL MODAL
───────────────────────────────────────────── */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 1100;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  animation: ${keyframes`from{opacity:0}to{opacity:1}`} 0.18s ease;
`;

export const ModalPanel = styled.div`
  background: #fff;
  border-radius: 20px;
  width: 100%;
  max-width: 560px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
  animation: ${keyframes`
    from{opacity:0;transform:scale(0.96) translateY(10px)}
    to{opacity:1;transform:scale(1) translateY(0)}
  `} 0.22s ease;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.3); border-radius: 4px; }
`;

export const ModalHeader = styled.div`
  padding: 20px 24px 16px;
  border-bottom: 1px solid rgba(148,163,184,0.15);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 1;
  border-radius: 20px 20px 0 0;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
`;

export const ModalClose = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 9px;
  border: 1px solid rgba(148,163,184,0.25);
  background: transparent;
  color: ${T.textSub};
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.15s;

  &:hover {
    background: ${T.roseLight};
    border-color: ${T.rose};
    color: ${T.rose};
  }
`;

export const ModalBody = styled.div`
  padding: 20px 24px 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ModalField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ModalFieldLabel = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: ${T.textMuted};
`;

export const ModalFieldValue = styled.span`
  font-size: 0.9rem;
  color: ${T.text};
  line-height: 1.55;
`;

export const ModalCommentBox = styled.div`
  padding: 14px 16px;
  background: rgba(248, 250, 252, 0.9);
  border: 1px solid rgba(148,163,184,0.2);
  border-radius: 12px;
  font-size: 0.9rem;
  color: ${T.text};
  line-height: 1.6;
  min-height: 60px;
`;

export const ModalDivider = styled.hr`
  border: none;
  border-top: 1px solid rgba(148,163,184,0.15);
  margin: 0;
`;

export const ModalActions = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export const ModalActionBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 16px;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.15s;

  ${(p) =>
    p.$primary
      ? css`
          border: none;
          background: ${T.teal};
          color: #fff;
          box-shadow: 0 4px 14px rgba(94,171,177,0.35);
          &:hover { background: #4f9ea4; }
        `
      : css`
          border: 1.5px solid rgba(148,163,184,0.3);
          background: transparent;
          color: ${T.textSub};
          &:hover { border-color: ${T.teal}; color: ${T.teal}; background: ${T.tealLight}; }
        `}
`;

/* ─────────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────────── */
export const EmptyState = styled.div`
  padding: 52px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const EmptyIcon = styled.div`
  font-size: 2.8rem;
  color: ${T.textMuted};
  line-height: 1;
`;

export const EmptyTitle = styled.p`
  margin: 0;
  font-size: 0.975rem;
  font-weight: 700;
  color: ${T.text};
`;

export const EmptyDesc = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${T.textSub};
  max-width: 300px;
  line-height: 1.5;
`;

/* ─────────────────────────────────────────────
   SKELETON / ERROR
───────────────────────────────────────────── */
const shimmerBg = css`
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

export const SkeletonCard = styled.div`
  height: ${(p) => p.$h || "80px"};
  border-radius: 14px;
  ${shimmerBg}
`;

export const SkeletonLine = styled.div`
  height: ${(p) => p.$h || "14px"};
  width: ${(p) => p.$w || "100%"};
  border-radius: 6px;
  ${shimmerBg}
  margin-bottom: ${(p) => p.$mb || "0"}px;
`;

export const ErrorBanner = styled.div`
  padding: 14px 18px;
  background: ${T.roseLight};
  border: 1px solid rgba(244, 63, 94, 0.25);
  border-radius: 12px;
  color: ${T.rose};
  font-size: 0.875rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 8px;
`;

/* ─────────────────────────────────────────────
   SECTION LABEL (re-used across sections)
───────────────────────────────────────────── */
export const SectionLabel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const SectionLabelTitle = styled.h3`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
  letter-spacing: -0.02em;
`;

export const SectionLabelSub = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: ${T.textSub};
`;
