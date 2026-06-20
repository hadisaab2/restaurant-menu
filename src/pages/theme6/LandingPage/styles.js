import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(12px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${(p) => p.theme.backgroundColor};
  font-family: ${(p) => `${p.theme.font}, "Noto Kufi Arabic" !important`};
  display: flex;
  flex-direction: column;
  padding-bottom: 70px;
`;

export const SliderSection = styled.div`
  width: 100%;
  margin-bottom: 8px;
  padding: 0 12px;
  animation: ${fadeIn} 0.5s ease;
`;

export const SliderImage = styled.div`
  width: 100%;
  height: 200px;
  border-radius: 16px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${(p) => p.theme.categoryUnActive || "#e5e7eb"};
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  gap: 6px;
  margin-top: 10px;
`;

export const SliderDot = styled.div`
  width: ${(p) => (p.$active ? "20px" : "6px")};
  height: 6px;
  border-radius: 3px;
  background: ${(p) => (p.$active ? p.theme.mainColor : p.theme.categoryUnActive || "#d1d5db")};
  transition: all 0.3s ease;
  cursor: pointer;
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 800;
  color: ${(p) => p.theme.textColor || p.theme.BoxTextColor || "#0f172a"};
  padding: 16px 16px 8px;
  margin: 0;
  text-align: ${(p) => (p.$rtl ? "right" : "left")};
  letter-spacing: -0.3px;
`;

export const SectionSubtitle = styled.p`
  font-size: 12px;
  color: ${(p) => p.theme.textColor || "#64748b"}90;
  padding: 0 16px 12px;
  margin: 0;
  text-align: ${(p) => (p.$rtl ? "right" : "left")};
`;

export const BranchGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  padding: 0 12px;
  animation: ${fadeIn} 0.6s ease 0.1s both;

  @media (max-width: 400px) {
    grid-template-columns: 1fr;
  }
`;

const cardPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.98); }
  100% { transform: scale(1); }
`;

export const BranchCard = styled.div`
  background: ${(p) => p.theme.BoxColor || "#fff"};
  border-radius: 16px;
  border: 1px solid ${(p) => p.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:active {
    animation: ${cardPulse} 0.2s ease;
  }

  &:hover {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    border-color: ${(p) => p.theme.mainColor}40;
  }
`;

export const BranchName = styled.h3`
  font-size: 15px;
  font-weight: 700;
  color: ${(p) => p.theme.mainColor};
  margin: 0;
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const BranchLocation = styled.p`
  font-size: 11px;
  color: ${(p) => p.theme.textColor || "#64748b"};
  margin: 0;
  line-height: 1.4;
  display: flex;
  align-items: flex-start;
  gap: 5px;
`;

export const BranchContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 11px;
  color: ${(p) => p.theme.textColor || "#64748b"};

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;

export const BadgeRow = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  font-size: 9px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 20px;
  background: ${(p) => (p.$active ? "rgba(16,185,129,0.1)" : "rgba(148,163,184,0.1)")};
  color: ${(p) => (p.$active ? "#10b981" : "#94a3b8")};
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const OrderButton = styled.button`
  width: 100%;
  padding: 10px 0;
  border-radius: 10px;
  border: none;
  background: ${(p) => p.theme.mainColor};
  color: ${(p) => p.theme.popupbuttonText || "#fff"};
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  transition: opacity 0.15s;
  font-family: inherit;

  &:active {
    opacity: 0.85;
  }
`;

export const MapLink = styled.a`
  font-size: 10px;
  color: ${(p) => p.theme.mainColor};
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 4px;
  justify-content: center;
  opacity: 0.8;

  &:hover {
    opacity: 1;
  }
`;
