import styled, { keyframes, css } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

/* ─────────────────────────────────────────────
   DESIGN TOKENS
───────────────────────────────────────────── */
const T = {
  bg: "#f0f2f8",
  card: "#ffffff",
  border: "rgba(148,163,184,0.18)",
  borderHover: "rgba(94,171,177,0.35)",
  text: "#0f172a",
  sub: "#64748b",
  muted: "#94a3b8",
  teal: "#5eabb1",
  tealLight: "rgba(94,171,177,0.12)",
  indigo: "#6366f1",
  indigoLight: "rgba(99,102,241,0.12)",
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
  sky: "#0ea5e9",
  skyLight: "rgba(14,165,233,0.12)",
  green: "#22c55e",
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
  100% { background-position:  600px 0; }
`;

const shimmerBg = css`
  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);
  background-size: 600px 100%;
  animation: ${shimmer} 1.4s infinite linear;
`;

/* ─────────────────────────────────────────────
   PAGE SHELL
───────────────────────────────────────────── */
export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-top: 20px;
  direction: ${(p) => (p.$activeLanguage === "ar" ? "rtl" : "ltr")};
  box-sizing: border-box;
  animation: ${fadeUp} 0.35s ease both;
  padding-bottom: 40px;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 14px;
    margin-top: 14px;
  }
`;

/* ─────────────────────────────────────────────
   PAGE HEADER (dark gradient)
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
    border-radius: 16px;
  }
`;

export const PageHeaderInner = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 14px;
`;

export const PageHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
`;

export const PageHeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 1.65rem;
  font-weight: 800;
  letter-spacing: -0.04em;
  color: #f8fafc;
  line-height: 1.2;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 1.3rem;
  }
`;

export const PageSubtitle = styled.p`
  margin: 0;
  font-size: 0.88rem;
  color: rgba(248, 250, 252, 0.6);
  line-height: 1.5;
  max-width: 520px;
`;

export const HeaderMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
  margin-top: 2px;
`;

export const MetaPill = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 0.74rem;
  font-weight: 600;
  color: rgba(248, 250, 252, 0.75);
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 999px;
  padding: 4px 10px;
`;

export const HeaderBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 14px;
  font-size: 0.8rem;
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
   KPI GRID
───────────────────────────────────────────── */
export const KpiGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }
`;

export const KpiCard = styled.div`
  background: ${T.card};
  border-radius: 16px;
  padding: 18px 16px 16px;
  border: 1px solid ${T.border};
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
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.15rem;
  background: ${(p) => p.$bg || T.tealLight};
  color: ${(p) => p.$color || T.teal};
  margin-bottom: 2px;
  flex-shrink: 0;
`;

export const KpiValue = styled.span`
  font-size: 1.55rem;
  font-weight: 800;
  color: ${T.text};
  line-height: 1;
  letter-spacing: -0.03em;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 1.25rem;
  }
`;

export const KpiLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  color: ${T.sub};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
`;

export const KpiMeta = styled.span`
  font-size: 0.71rem;
  color: ${T.muted};
  font-weight: 400;
  margin-top: auto;
`;

/* Legacy aliases kept so no import changes needed */
export const CardsGrid = KpiGrid;
export const StatCard = KpiCard;
export const StatLabel = KpiLabel;
export const StatValue = KpiValue;
export const StatMeta = KpiMeta;

/* ─────────────────────────────────────────────
   MAIN GRID (thread list | details)
───────────────────────────────────────────── */
export const PageGrid = styled.div`
  display: grid;
  grid-template-columns: 42% 1fr;
  gap: 14px;
  align-items: start;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: 1fr;
  }
`;

/* ─────────────────────────────────────────────
   SHARED CARD PANEL
───────────────────────────────────────────── */
const Panel = styled.div`
  background: ${T.card};
  border-radius: 16px;
  border: 1px solid ${T.border};
  box-shadow: ${T.shadow};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

/* ─────────────────────────────────────────────
   LEFT PANEL - Thread list
───────────────────────────────────────────── */
export const ThreadListPanel = styled(Panel)``;

export const ThreadListHeader = styled.div`
  padding: 16px 18px 12px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const SectionTitle = styled.h3`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${T.text};
`;

export const CountBadge = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 999px;
  background: ${T.tealLight};
  color: ${T.teal};
`;

/* Filters */
export const FiltersRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
`;

export const SearchWrapper = styled.div`
  flex: 1;
  min-width: 140px;
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchIconWrap = styled.span`
  position: absolute;
  left: 9px;
  color: ${T.muted};
  font-size: 0.95rem;
  pointer-events: none;
  display: flex;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 36px;
  padding: 0 10px 0 32px;
  border: 1.5px solid rgba(148,163,184,0.25);
  border-radius: 10px;
  font-size: 0.82rem;
  color: ${T.text};
  background: rgba(248,250,252,0.9);
  outline: none;
  transition: border-color 0.15s;
  box-sizing: border-box;

  &::placeholder { color: ${T.muted}; }
  &:focus { border-color: ${T.teal}; background: #fff; }
`;

export const SelectInput = styled.select`
  height: 36px;
  padding: 0 28px 0 10px;
  border: 1.5px solid rgba(148,163,184,0.25);
  border-radius: 10px;
  font-size: 0.8rem;
  font-weight: 500;
  color: ${T.sub};
  background: rgba(248,250,252,0.9) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='11' height='11' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 8px center;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  transition: border-color 0.15s;

  &:focus { border-color: ${T.teal}; }
`;

/* Thread list */
export const ThreadList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 540px;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.25); border-radius: 4px; }
`;

export const ThreadListItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-bottom: 1px solid rgba(148,163,184,0.1);
  cursor: pointer;
  transition: background 0.15s, border-left-color 0.15s;
  border-left: 3px solid
    ${(p) => (p.selected ? T.teal : "transparent")};
  background: ${(p) =>
    p.selected
      ? "rgba(94,171,177,0.06)"
      : "transparent"};
  position: relative;

  &:last-child { border-bottom: none; }

  &:hover {
    background: ${(p) =>
      p.selected ? "rgba(94,171,177,0.08)" : "rgba(248,250,252,0.9)"};
  }
`;

export const ThreadAvatarBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 12px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 700;
  background: ${(p) =>
    p.$type === "suggestion" ? T.skyLight :
    p.$type === "question" ? T.indigoLight :
    T.tealLight};
  color: ${(p) =>
    p.$type === "suggestion" ? T.sky :
    p.$type === "question" ? T.indigo :
    T.teal};
`;

export const ThreadListMain = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ThreadTitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
`;

export const ThreadTitle = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${T.text};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;

export const ThreadTime = styled.span`
  font-size: 0.68rem;
  color: ${T.muted};
  white-space: nowrap;
  flex-shrink: 0;
`;

export const ThreadSubtitle = styled.span`
  font-size: 0.78rem;
  color: ${T.sub};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
`;

export const ThreadMetaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 4px;
  align-items: center;
`;

export const ThreadMetaText = styled.span`
  font-size: 0.68rem;
  color: ${T.sub};
`;

/* Inline thread badges */
const inlineBadge = css`
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  padding: 2px 7px;
  border-radius: 999px;
  border: 1px solid transparent;
`;

export const Badge = styled.span`
  ${inlineBadge}
  ${({ variant }) => {
    const key = String(variant || "").toLowerCase();
    if (key.includes("status-new"))
      return `background: rgba(59,130,246,0.12); color: #1d4ed8; border-color: rgba(59,130,246,0.25);`;
    if (key.includes("status-in_progress"))
      return `background: rgba(245,158,11,0.12); color: #b45309; border-color: rgba(245,158,11,0.25);`;
    if (key.includes("status-resolved"))
      return `background: rgba(16,185,129,0.12); color: #047857; border-color: rgba(16,185,129,0.25);`;
    if (key.includes("status-closed"))
      return `background: rgba(148,163,184,0.18); color: #475569; border-color: rgba(148,163,184,0.3);`;
    if (key.includes("type-question"))
      return `background: rgba(99,102,241,0.12); color: #4338ca; border-color: rgba(99,102,241,0.25);`;
    if (key.includes("type-suggestion"))
      return `background: rgba(14,165,233,0.12); color: #0369a1; border-color: rgba(14,165,233,0.25);`;
    if (key.includes("channel"))
      return `background: rgba(168,85,247,0.12); color: #7e22ce; border-color: rgba(168,85,247,0.25);`;
    return `background: rgba(99,102,241,0.12); color: #4338ca; border-color: rgba(99,102,241,0.25);`;
  }}
`;

export const ListEmpty = styled.div`
  padding: 36px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  color: ${T.muted};
  font-size: 0.875rem;
`;

export const LoadMoreButton = styled.button`
  margin: 12px auto;
  display: block;
  padding: 9px 20px;
  border-radius: 10px;
  border: 1.5px solid rgba(148,163,184,0.3);
  background: transparent;
  font-size: 0.82rem;
  font-weight: 600;
  color: ${T.sub};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${T.teal};
    color: ${T.teal};
    background: ${T.tealLight};
  }

  &:disabled { opacity: 0.55; cursor: not-allowed; }
`;

/* ─────────────────────────────────────────────
   RIGHT PANEL - Thread details
───────────────────────────────────────────── */
export const ThreadDetailsPanel = styled(Panel)`
  gap: 0;
`;

export const DetailsHeader = styled.div`
  padding: 18px 20px 14px;
  border-bottom: 1px solid rgba(148,163,184,0.12);
  display: flex;
  justify-content: space-between;
  gap: 12px;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export const DetailsTitle = styled.h3`
  margin: 0 0 6px 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
  line-height: 1.35;
`;

export const DetailsSubtitle = styled.span`
  font-size: 0.8rem;
  color: ${T.sub};
  display: block;
  margin-bottom: 4px;
`;

export const PhoneRow = styled.div`
  margin-top: 8px;
  font-size: 0.8rem;
  color: ${T.sub};
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const PhoneValue = styled.span`
  font-weight: 700;
  color: ${T.text};
`;

export const PhoneLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 700;
  color: ${T.emerald};
  background: ${T.emeraldLight};
  border: 1px solid rgba(16,185,129,0.25);
  text-decoration: none;
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(16,185,129,0.2);
    border-color: ${T.emerald};
  }
`;

export const DetailsBadges = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  flex-shrink: 0;
`;

export const StatusRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  padding: 10px 18px;
  background: rgba(248,250,252,0.7);
  border-bottom: 1px solid rgba(148,163,184,0.1);
`;

export const StatusLabel = styled.span`
  font-size: 0.8rem;
  font-weight: 700;
  color: ${T.sub};
  white-space: nowrap;
`;

/* ─────────────────────────────────────────────
   CHAT TIMELINE
───────────────────────────────────────────── */
export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 18px 16px;
  background: rgba(248,250,252,0.6);
  min-height: 200px;
  max-height: 400px;
  overflow-y: auto;
  flex: 1;

  &::-webkit-scrollbar { width: 4px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: rgba(148,163,184,0.25); border-radius: 4px; }
`;

export const MessageRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${(p) => {
    const isOwner = p.isOwner;
    const isAr = p.$activeLanguage === "ar";
    if (isOwner) return isAr ? "flex-start" : "flex-end";
    return isAr ? "flex-end" : "flex-start";
  }};
`;

export const MessageSenderLabel = styled.span`
  font-size: 0.68rem;
  font-weight: 700;
  color: ${T.muted};
  margin-bottom: 4px;
  padding: 0 4px;
`;

export const MessageBubble = styled.div`
  max-width: 80%;
  padding: 10px 14px;
  border-radius: ${(p) =>
    p.isOwner
      ? "16px 4px 16px 16px"
      : "4px 16px 16px 16px"};
  font-size: 0.875rem;
  line-height: 1.55;
  color: ${(p) => (p.isOwner ? "#fff" : T.text)};
  background: ${(p) =>
    p.isOwner
      ? "linear-gradient(135deg, #5eabb1 0%, #4a9499 100%)"
      : T.card};
  border: 1px solid ${(p) =>
    p.isOwner ? "transparent" : "rgba(148,163,184,0.2)"};
  box-shadow: ${(p) =>
    p.isOwner
      ? "0 4px 14px rgba(94,171,177,0.3)"
      : T.shadow};
  word-break: break-word;
`;

export const MessageTime = styled.div`
  font-size: 0.65rem;
  color: ${(p) => (p.isOwner ? "rgba(255,255,255,0.65)" : T.muted)};
  margin-top: 6px;
  text-align: ${(p) => (p.isOwner ? "right" : "left")};
`;

/* ─────────────────────────────────────────────
   REPLY COMPOSER
───────────────────────────────────────────── */
export const ReplyArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 14px 16px 16px;
  border-top: 1px solid rgba(148,163,184,0.12);
  background: ${T.card};
`;

export const TemplatesBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const TemplateChip = styled.button`
  padding: 5px 10px;
  font-size: 0.72rem;
  font-weight: 600;
  border-radius: 999px;
  border: 1.5px solid rgba(148,163,184,0.25);
  background: rgba(248,250,252,0.9);
  color: ${T.sub};
  cursor: pointer;
  text-align: left;
  line-height: 1.35;
  max-width: 280px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  transition: all 0.15s;

  &:hover {
    border-color: ${T.teal};
    color: ${T.teal};
    background: ${T.tealLight};
  }
`;

export const TemplatesLabel = styled.span`
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: ${T.muted};
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ReplyInputWrapper = styled.div`
  position: relative;
`;

export const ReplyInput = styled.textarea`
  width: 100%;
  border-radius: 12px;
  border: 1.5px solid rgba(148,163,184,0.25);
  padding: 12px 14px;
  font-size: 0.875rem;
  font-family: inherit;
  resize: vertical;
  min-height: 80px;
  outline: none;
  color: ${T.text};
  background: rgba(248,250,252,0.8);
  line-height: 1.5;
  box-sizing: border-box;
  transition: border-color 0.15s, background 0.15s;

  &::placeholder { color: ${T.muted}; }
  &:focus { border-color: ${T.teal}; background: #fff; }
`;

export const CharCount = styled.span`
  font-size: 0.68rem;
  color: ${T.muted};
  text-align: right;
  display: block;
`;

export const ReplyActions = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
`;

export const SendButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, ${T.teal} 0%, #4a9499 100%);
  color: #fff;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(94,171,177,0.35);
  transition: transform 0.15s, box-shadow 0.15s, opacity 0.15s;

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94,171,177,0.42);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

export const WhatsappButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 9px 16px;
  border-radius: 10px;
  border: 1.5px solid rgba(16,185,129,0.4);
  background: rgba(16,185,129,0.1);
  color: #065f46;
  font-size: 0.875rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  opacity: ${(p) => (p.$disabled ? 0.5 : 1)};
  pointer-events: ${(p) => (p.$disabled ? "none" : "auto")};
  transition: background 0.15s, border-color 0.15s;

  &:hover {
    background: rgba(16,185,129,0.18);
    border-color: ${T.emerald};
  }
`;

/* ─────────────────────────────────────────────
   EMPTY STATE
───────────────────────────────────────────── */
export const EmptyStateBox = styled.div`
  padding: 52px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  flex: 1;
`;

export const EmptyStateIcon = styled.div`
  font-size: 2.8rem;
  line-height: 1;
  color: ${T.muted};
`;

export const EmptyStateTitle = styled.p`
  margin: 0;
  font-size: 0.95rem;
  font-weight: 700;
  color: ${T.text};
`;

export const EmptyStateDesc = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${T.sub};
  max-width: 280px;
  line-height: 1.5;
`;

/* ─────────────────────────────────────────────
   MODALS
───────────────────────────────────────────── */
export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: 20px;
  box-sizing: border-box;
`;

export const ModalCard = styled.div`
  width: 100%;
  max-width: 540px;
  background: #fff;
  border-radius: 20px;
  padding: 24px 24px 20px;
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.2);
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const ModalTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: ${T.text};
`;

export const ModalSubtitle = styled.p`
  margin: 0;
  font-size: 0.82rem;
  color: ${T.sub};
`;

export const ModalText = styled.pre`
  margin: 0;
  padding: 14px 16px;
  background: rgba(248,250,252,0.9);
  border-radius: 12px;
  border: 1px solid rgba(148,163,184,0.2);
  font-size: 0.82rem;
  color: ${T.text};
  white-space: pre-wrap;
  max-height: 260px;
  overflow-y: auto;
  font-family: inherit;
  line-height: 1.6;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  padding-top: 8px;
  border-top: 1px solid rgba(148,163,184,0.15);
`;

export const ModalButton = styled.button`
  padding: 9px 16px;
  border-radius: 10px;
  border: 1.5px solid rgba(148,163,184,0.3);
  background: #fff;
  font-size: 0.875rem;
  font-weight: 600;
  color: ${T.sub};
  cursor: pointer;
  transition: all 0.15s;

  &:hover {
    border-color: ${T.teal};
    color: ${T.teal};
    background: ${T.tealLight};
  }
`;

export const ModalPrimaryButton = styled.button`
  padding: 9px 18px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, ${T.teal} 0%, #4a9499 100%);
  font-size: 0.875rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(94,171,177,0.35);
  transition: transform 0.15s, box-shadow 0.15s;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 18px rgba(94,171,177,0.42);
  }
`;

/* ─────────────────────────────────────────────
   SENT MESSAGE BOX
───────────────────────────────────────────── */
export const SentMessageBox = styled.div`
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  background: ${T.emeraldLight};
  border: 1px solid rgba(16,185,129,0.2);
`;

export const SentMessageTitle = styled.div`
  font-size: 0.78rem;
  font-weight: 700;
  color: #065f46;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SentMessageBody = styled.pre`
  margin: 0;
  font-size: 0.8rem;
  color: ${T.text};
  white-space: pre-wrap;
  font-family: inherit;
  line-height: 1.55;
`;

/* ─────────────────────────────────────────────
   UTILITY / LEGACY
───────────────────────────────────────────── */
export const Header = styled.div`
  display: none;
`;

export const HeaderTitle = styled.h2`
  display: none;
`;

export const HeaderSubtitle = styled.p`
  display: none;
`;

export const Section = styled.div`
  background: ${T.card};
  border-radius: 16px;
  border: 1px solid ${T.border};
  padding: 18px 20px;
  box-shadow: ${T.shadow};
`;

export const ErrorText = styled.div`
  color: ${T.rose};
  font-size: 0.8rem;
  margin-bottom: 8px;
  padding: 10px 14px;
  background: ${T.roseLight};
  border: 1px solid rgba(244,63,94,0.2);
  border-radius: 10px;
`;

export const ErrorBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  background: ${T.roseLight};
  border: 1px solid rgba(244,63,94,0.2);
  border-radius: 12px;
  color: ${T.rose};
  font-size: 0.82rem;
  font-weight: 500;
`;

export const SkeletonText = styled.div`
  height: 14px;
  border-radius: 6px;
  ${shimmerBg}
  margin-bottom: 10px;
`;

export const SkeletonCard = styled.div`
  height: ${(p) => p.$h || "60px"};
  border-radius: 12px;
  ${shimmerBg}
  margin-bottom: 8px;
`;
