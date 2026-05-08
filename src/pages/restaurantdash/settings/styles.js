import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../styles/theme";

const C = dashboardColors.mainColor;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  margin-top: 20px;
  min-height: 100vh;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;

export const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
  margin-top: 20px;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

export const Tab = styled.span`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  flex-shrink: 0;
  padding: 8px 16px;
  border-radius: 999px;
  font-size: 13.5px;
  font-weight: ${(p) => (p.tab === p.activetab ? "600" : "500")};
  color: ${(p) => (p.tab === p.activetab ? "#ffffff" : "#64748b")};
  background: ${(p) => (p.tab === p.activetab ? C : "rgba(148,163,184,0.12)")};
  border: 1.5px solid ${(p) => (p.tab === p.activetab ? C : "transparent")};
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: ${(p) =>
    p.tab === p.activetab ? `0 3px 12px ${C}40` : "none"};

  &:hover {
    background: ${(p) => (p.tab === p.activetab ? C : "rgba(148,163,184,0.2)")};
    color: ${(p) => (p.tab === p.activetab ? "#ffffff" : "#334155")};
  }

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12.5px;
    padding: 7px 13px;
  }
`;
