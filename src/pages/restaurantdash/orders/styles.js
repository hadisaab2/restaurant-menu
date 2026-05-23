import styled, { keyframes } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const T = {
  pageBg: "#f0f2f8",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  textPrimary: "#0f172a",
  textSub: "#64748b",
  textMuted: "#94a3b8",
  accent: "#5eabb1",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  shadowHover: "0 12px 32px rgba(15,23,42,0.13)",
};

export const Container = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
  padding-bottom: 40px;
  animation: ${fadeUp} 0.35s ease both;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    gap: 12px;
    margin-top: 14px;
  }
`;

export const Hero = styled.div`
  border-radius: 20px;
  padding: 28px 28px 24px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;

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
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
`;

export const HeroTitle = styled.h2`
  margin: 0;
  font-size: 24px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, ${T.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
`;

export const HeroSubtitle = styled.p`
  margin: 6px 0 0;
  font-size: 13px;
  opacity: 0.55;
  position: relative;
`;

export const KPIGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }
`;

export const KPICard = styled.div`
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 14px;
  padding: 18px 16px;
  box-shadow: ${T.shadow};
  position: relative;
  overflow: hidden;
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: ${(p) => p.$delay || "0s"};
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &::before {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${(p) => p.$accent || T.accent};
    border-radius: 14px 14px 0 0;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: ${T.shadowHover};
  }
`;

export const KPILabel = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: ${T.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const KPIValue = styled.div`
  font-size: 26px;
  font-weight: 800;
  color: ${T.textPrimary};
  margin: 4px 0 2px;
  letter-spacing: -0.5px;
`;

export const KPIHint = styled.div`
  font-size: 10px;
  color: ${T.textMuted};
`;

/* ── STATUS PILLS (filter) ── */
export const StatusPills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
`;

export const StatusPill = styled.button`
  padding: 7px 16px;
  border-radius: 999px;
  border: 1.5px solid ${(p) => p.$active ? p.$color || T.accent : "#e2e8f0"};
  background: ${(p) => p.$active ? `${p.$color || T.accent}15` : "transparent"};
  color: ${(p) => p.$active ? p.$color || T.accent : T.textSub};
  font-size: 12px;
  font-weight: ${(p) => p.$active ? "700" : "500"};
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 5px;

  &:hover { border-color: ${(p) => p.$color || T.accent}; color: ${(p) => p.$color || T.accent}; }
`;

export const PillCount = styled.span`
  font-size: 10px;
  font-weight: 700;
  background: ${(p) => p.$color || T.accent}20;
  color: ${(p) => p.$color || T.accent};
  padding: 1px 6px;
  border-radius: 999px;
`;

/* ── FILTERS ── */
export const FiltersCard = styled.div`
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 16px;
  padding: 20px 22px;
  box-shadow: ${T.shadow};
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: 0.1s;
`;

export const FiltersRow = styled.div`
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: ${breakingPoints.md}px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 140px;
  flex: 1;

  @media (max-width: ${breakingPoints.md}px) { min-width: 0; width: 100%; }
`;

export const FilterLabel = styled.span`
  font-size: 10px;
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
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus { border-color: ${T.accent}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
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
  min-width: 130px;
  transition: border-color 0.15s, box-shadow 0.15s;

  &:focus { border-color: ${T.accent}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`;

/* ── TABLE ── */
export const TableCard = styled.div`
  background: ${T.cardBg};
  border: 1px solid ${T.cardBorder};
  border-radius: 16px;
  box-shadow: ${T.shadow};
  overflow: hidden;
  animation: ${fadeUp} 0.4s ease both;
  animation-delay: 0.15s;
`;

export const TableCount = styled.div`
  padding: 14px 20px;
  font-size: 12px;
  color: ${T.textSub};
  border-bottom: 1px solid #f1f5f9;
  font-weight: 500;

  strong { color: ${T.textPrimary}; }
`;

export const Table = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

export const THead = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 100px 90px 70px 90px 90px 80px;
  gap: 8px;
  padding: 12px 20px;
  background: ${T.textPrimary};
  min-width: 800px;

  @media (max-width: ${breakingPoints.md}px) { display: none; }
`;

export const THCell = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: rgba(255,255,255,0.7);
  text-transform: uppercase;
  letter-spacing: 0.4px;
`;

export const TRow = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr 1fr 100px 90px 70px 90px 90px 80px;
  gap: 8px;
  padding: 14px 20px;
  border-bottom: 1px solid #f1f5f9;
  align-items: center;
  transition: background-color 0.15s;
  cursor: pointer;
  min-width: 800px;

  &:hover { background-color: #f8fafc; }
  &:last-child { border-bottom: none; }

  @media (max-width: ${breakingPoints.md}px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
    padding: 16px;
    min-width: 0;
    border: 1px solid #e2e8f0;
    border-radius: 10px;
    margin: 8px 12px;
  }
`;

export const TCell = styled.div`
  font-size: 13px;
  color: ${T.textPrimary};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 4px 12px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  background: ${(p) => p.$color}15;
  color: ${(p) => p.$color};
  border: 1px solid ${(p) => p.$color}30;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${(p) => p.$color};
  }
`;

export const ViewBtn = styled.button`
  padding: 6px 14px;
  background: transparent;
  color: ${T.accent};
  border: 1.5px solid ${T.accent};
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;

  &:hover { background: ${T.accent}; color: #fff; }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${T.textSub};
  font-size: 15px;
  background: ${T.cardBg};
  border-radius: 16px;
  box-shadow: ${T.shadow};
  border: 1px solid ${T.cardBorder};
`;

export const LoadingState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: ${T.textSub};
  font-size: 15px;
`;

export const ErrorState = styled.div`
  padding: 14px 18px;
  background: #fef2f2;
  color: #dc2626;
  border-radius: 10px;
  font-size: 13px;
  border: 1px solid #fecaca;
`;

/* ── MODAL ── */
export const ModalWrap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(15,23,42,0.5);
  backdrop-filter: blur(6px);
`;

export const ModalContent = styled.div`
  position: relative;
  background: #fff;
  border-radius: 20px;
  max-width: 720px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 64px rgba(0,0,0,0.2);
  z-index: 1001;
  animation: ${fadeUp} 0.25s ease both;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238);
  border-radius: 20px 20px 0 0;
  color: #f8fafc;
`;

export const ModalTitle = styled.h3`
  margin: 0;
  font-size: 17px;
  font-weight: 700;
  color: #ffffff;
`;

export const ModalClose = styled.button`
  background: rgba(255,255,255,0.1);
  border: none;
  color: #f8fafc;
  font-size: 18px;
  cursor: pointer;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s;

  &:hover { background: rgba(255,255,255,0.2); }
`;

export const ModalBody = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const DetailSection = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f1f5f9;

  &:last-child { border-bottom: none; }
`;

export const DetailSectionTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: ${T.textMuted};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 12px;
`;

export const DetailGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: 1fr;
  }
`;

export const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const DetailLabel = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: ${T.textMuted};
`;

export const DetailValue = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${T.textPrimary};
  word-break: break-word;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ItemRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  background: #f8fafc;
  border-radius: 10px;
  border: 1px solid #f1f5f9;
`;

export const ItemName = styled.div`
  flex: 1;
  font-weight: 600;
  font-size: 13px;
  color: ${T.textPrimary};
`;

export const ItemQty = styled.div`
  font-size: 12px;
  color: ${T.textSub};
  min-width: 50px;
  text-align: center;
  background: #e2e8f0;
  padding: 2px 8px;
  border-radius: 6px;
  font-weight: 600;
`;

export const ItemPrice = styled.div`
  font-weight: 700;
  font-size: 13px;
  color: ${T.textPrimary};
  min-width: 80px;
  text-align: right;
`;

export const TotalBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 18px;
  margin-top: 12px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238);
  border-radius: 12px;
  color: #fff;
`;

export const TotalLabel = styled.div`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.7;
`;

export const TotalValue = styled.div`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

export const StatusSelect = styled.select`
  padding: 6px 12px;
  border-radius: 8px;
  border: 1.5px solid #e2e8f0;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  background: #f8fafc;
  transition: border-color 0.2s;

  &:focus { border-color: ${T.accent}; }
`;
