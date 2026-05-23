import styled, { keyframes } from "styled-components";
import { breakingPoints } from "../../../styles/theme";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const T = {
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
  @media (max-width: ${breakingPoints.sm}px) { width: 100%; gap: 12px; margin-top: 14px; }
`;

export const Hero = styled.div`
  border-radius: 20px;
  padding: 28px 28px 24px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10,15,40,0.28);
  position: relative; overflow: hidden;
  &::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px); background-size: 40px 40px; pointer-events: none; }
  @media (max-width: ${breakingPoints.sm}px) { padding: 20px 16px 18px; border-radius: 14px; }
`;

export const HeroTitle = styled.h2`
  margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;
  background: linear-gradient(120deg, #ffffff, ${T.accent}); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; position: relative;
`;

export const HeroSubtitle = styled.p`
  margin: 6px 0 0; font-size: 13px; opacity: 0.55; position: relative;
`;

export const Header = styled.div``;
export const HeaderTitle = styled.h2``;

export const KPIGrid = styled.div`
  display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;
  @media (max-width: ${breakingPoints.md}px) { grid-template-columns: repeat(2, 1fr); }
`;

export const KPICard = styled.div`
  background: ${T.cardBg}; border: 1px solid ${T.cardBorder}; border-radius: 14px; padding: 18px 16px;
  box-shadow: ${T.shadow}; position: relative; overflow: hidden;
  animation: ${fadeUp} 0.4s ease both; animation-delay: ${(p) => p.$delay || "0s"};
  transition: transform 0.2s, box-shadow 0.2s;
  &::before { content: ""; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: ${(p) => p.$accent || T.accent}; border-radius: 14px 14px 0 0; }
  &:hover { transform: translateY(-3px); box-shadow: ${T.shadowHover}; }
`;

export const KPILabel = styled.div` font-size: 10px; font-weight: 700; color: ${T.textMuted}; text-transform: uppercase; letter-spacing: 0.4px; `;
export const KPIValue = styled.div` font-size: 26px; font-weight: 800; color: ${T.textPrimary}; margin: 4px 0 2px; letter-spacing: -0.5px; `;
export const KPIHint = styled.div` font-size: 10px; color: ${T.textMuted}; `;

export const SearchContainer = styled.div`
  background: ${T.cardBg}; border: 1px solid ${T.cardBorder}; border-radius: 16px; padding: 20px 22px;
  box-shadow: ${T.shadow}; animation: ${fadeUp} 0.4s ease both; animation-delay: 0.1s;
`;

export const SearchInput = styled.input`
  width: 100%; height: 42px; padding: 0 16px; border-radius: 10px;
  border: 1.5px solid ${T.cardBorder}; background: #f8fafc; color: ${T.textPrimary};
  font-size: 14px; outline: none; transition: border-color 0.2s, box-shadow 0.2s;
  &::placeholder { color: ${T.textMuted}; }
  &:focus { border-color: ${T.accent}; box-shadow: 0 0 0 3px rgba(94,171,177,0.15); }
`;

export const CustomersTable = styled.div`
  background: ${T.cardBg}; border: 1px solid ${T.cardBorder}; border-radius: 16px;
  box-shadow: ${T.shadow}; overflow: hidden; animation: ${fadeUp} 0.4s ease both; animation-delay: 0.15s;
`;

export const TableCount = styled.div`
  padding: 14px 20px; font-size: 12px; color: ${T.textSub}; border-bottom: 1px solid #f1f5f9; font-weight: 500;
  strong { color: ${T.textPrimary}; }
`;

export const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 130px 70px 80px 70px 120px 90px;
  gap: 8px; padding: 12px 20px; background: ${T.textPrimary}; min-width: 800px;
  @media (max-width: ${breakingPoints.md}px) { display: none; }
`;

export const THCell = styled.div`
  font-size: 10px; font-weight: 700; color: rgba(255,255,255,0.7); text-transform: uppercase; letter-spacing: 0.4px;
`;

export const TableRow = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr 130px 70px 80px 70px 120px 90px;
  gap: 8px; padding: 14px 20px; border-bottom: 1px solid #f1f5f9; align-items: center;
  transition: background 0.15s; cursor: pointer; min-width: 800px;
  &:hover { background: #f8fafc; }
  &:last-child { border-bottom: none; }
  @media (max-width: ${breakingPoints.md}px) {
    display: flex; flex-direction: column; align-items: flex-start; gap: 6px; padding: 16px; min-width: 0;
    border: 1px solid #e2e8f0; border-radius: 10px; margin: 8px 12px;
  }
`;

export const TableCell = styled.div`
  font-size: 13px; color: ${T.textPrimary}; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`;

export const PhoneCell = styled(TableCell)`
  font-weight: 600; font-family: 'SF Mono', 'Fira Code', monospace; color: ${T.accent}; font-size: 12px;
`;

export const NameCell = styled(TableCell)`
  font-weight: 600;
`;

export const SourcesCell = styled.div`
  display: flex; gap: 4px; flex-wrap: wrap;
`;

export const SourceBadge = styled.span`
  padding: 3px 8px; border-radius: 6px; font-size: 10px; font-weight: 600; text-transform: capitalize;
  background-color: ${(p) => {
    switch (p.$source) {
      case "order": return "rgba(59,130,246,0.1)";
      case "feedback": return "rgba(245,158,11,0.1)";
      case "thread": return "rgba(139,92,246,0.1)";
      default: return "#f1f5f9";
    }
  }};
  color: ${(p) => {
    switch (p.$source) {
      case "order": return "#3b82f6";
      case "feedback": return "#f59e0b";
      case "thread": return "#8b5cf6";
      default: return "#475569";
    }
  }};
`;

export const ChatButton = styled.button`
  padding: 6px 14px; background: transparent; color: ${T.accent}; border: 1.5px solid ${T.accent};
  border-radius: 8px; font-size: 12px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  &:hover { background: ${T.accent}; color: #fff; }
`;

export const EmptyState = styled.div`
  text-align: center; padding: 60px 20px; color: ${T.textSub}; font-size: 15px;
  background: ${T.cardBg}; border-radius: 16px; box-shadow: ${T.shadow}; border: 1px solid ${T.cardBorder};
`;

export const LoadingState = styled.div` text-align: center; padding: 60px 20px; color: ${T.textSub}; font-size: 15px; `;

export const ErrorState = styled.div`
  padding: 14px 18px; background: #fef2f2; color: #dc2626; border-radius: 10px; font-size: 13px; border: 1px solid #fecaca;
`;

/* ── Chat Modal ── */
export const ChatModal = styled.div`
  position: fixed; inset: 0; z-index: 10000; display: flex; align-items: center; justify-content: center; padding: 20px;
`;

export const ModalOverlay = styled.div`
  position: absolute; inset: 0; background: rgba(15,23,42,0.5); backdrop-filter: blur(6px);
`;

export const ModalContent = styled.div`
  position: relative; background: #fff; border-radius: 20px; width: 90%; max-width: 900px; height: 80vh; max-height: 700px;
  display: flex; flex-direction: column; box-shadow: 0 24px 64px rgba(0,0,0,0.2); z-index: 1;
  animation: ${fadeUp} 0.25s ease both;
  @media (max-width: ${breakingPoints.md}px) { width: 95%; height: 90vh; }
`;

export const ModalHeader = styled.div`
  display: flex; justify-content: space-between; align-items: center; padding: 18px 22px;
  background: linear-gradient(135deg, #0c0f1d, #1a2238); border-radius: 20px 20px 0 0; color: #f8fafc;
  h3 { margin: 0; font-size: 16px; font-weight: 700; color: #fff; }
`;

export const ModalCloseButton = styled.button`
  background: rgba(255,255,255,0.1); border: none; color: #f8fafc; font-size: 18px; cursor: pointer;
  width: 32px; height: 32px; border-radius: 8px; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s; &:hover { background: rgba(255,255,255,0.2); }
`;

export const ModalBody = styled.div`
  flex: 1; display: flex; overflow: hidden;
`;

export const ThreadList = styled.div`
  width: 250px; border-right: 1px solid #e2e8f0; padding: 14px; overflow-y: auto; background: #f8fafc;
  @media (max-width: ${breakingPoints.md}px) { width: 180px; padding: 10px; }
`;

export const ThreadItem = styled.div`
  padding: 12px; border-radius: 10px; margin-bottom: 6px; cursor: pointer; transition: all 0.2s;
  background: ${(p) => (p.$active ? "rgba(94,171,177,0.12)" : "#fff")};
  border: 1.5px solid ${(p) => (p.$active ? T.accent : "transparent")};
  &:hover { background: ${(p) => (p.$active ? "rgba(94,171,177,0.12)" : "#f1f5f9")}; }
`;

export const ThreadTitle = styled.div`
  font-size: 12px; font-weight: 600; color: ${T.textPrimary}; margin-bottom: 3px;
  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;
`;

export const ThreadDate = styled.div`
  font-size: 10px; color: ${T.textMuted};
`;

export const ChatMessages = styled.div`
  flex: 1; overflow-y: auto; padding: 18px; display: flex; flex-direction: column; gap: 10px;
`;

export const MessageBubble = styled.div`
  max-width: 70%; padding: 10px 14px; border-radius: 14px;
  align-self: ${(p) => (p.$isOwner ? "flex-end" : "flex-start")};
  background: ${(p) => (p.$isOwner ? "linear-gradient(135deg, #5eabb1, #4d9aa0)" : "#f1f5f9")};
  color: ${(p) => (p.$isOwner ? "#fff" : T.textPrimary)};
  box-shadow: ${(p) => (p.$isOwner ? "0 2px 8px rgba(94,171,177,0.25)" : "none")};
`;

export const MessageText = styled.div`
  font-size: 13px; line-height: 1.5; margin-bottom: 3px;
`;

export const MessageTime = styled.div`
  font-size: 10px; opacity: 0.65; text-align: right;
`;

export const MessageInput = styled.textarea`
  flex: 1; padding: 10px 14px; border: 1.5px solid ${T.cardBorder}; border-radius: 10px;
  font-size: 13px; outline: none; resize: none; min-height: 40px; max-height: 120px; font-family: inherit;
  transition: border-color 0.2s;
  &:focus { border-color: ${T.accent}; box-shadow: 0 0 0 3px rgba(94,171,177,0.12); }
  &:disabled { background: #f1f5f9; cursor: not-allowed; }
`;

export const SendButton = styled.button`
  padding: 10px 20px; background: ${T.accent}; color: #fff; border: none; border-radius: 10px;
  font-size: 13px; font-weight: 600; cursor: pointer; transition: all 0.2s;
  box-shadow: 0 2px 8px rgba(94,171,177,0.3);
  &:hover:not(:disabled) { background: #4d9aa0; transform: translateY(-1px); }
  &:disabled { background: #cbd5e1; cursor: not-allowed; box-shadow: none; }
`;
