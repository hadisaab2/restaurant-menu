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

export const HeaderBar = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px;
  background: ${(p) => p.theme.backgroundColor};
  position: sticky;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid ${(p) => p.theme.categoryUnActive || "rgba(0,0,0,0.05)"};
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.03);
`;

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const MenuButton = styled.button`
  border: none;
  background: ${(p) => p.theme.mainColor}12;
  color: ${(p) => p.theme.mainColor};
  width: 36px;
  height: 36px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.15s;

  &:active {
    background: ${(p) => p.theme.mainColor}25;
  }
`;

export const Logo = styled.img`
  height: 32px;
  max-width: 120px;
  object-fit: contain;
`;

export const UserBadge = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 10px;
  background: ${(p) => p.theme.mainColor}15;
  color: ${(p) => p.theme.mainColor};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  cursor: pointer;
  border: 1px solid ${(p) => p.theme.mainColor}20;
`;

export const LangButton = styled.button`
  border: 1px solid ${(p) => p.theme.mainColor}25;
  background: ${(p) => p.theme.mainColor}10;
  color: ${(p) => p.theme.mainColor};
  font-size: 10px;
  font-weight: 700;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: background 0.15s;

  &:active {
    background: ${(p) => p.theme.mainColor}25;
  }
`;

export const SliderSection = styled.div`
  width: 100%;
  margin-bottom: 16px;
  animation: ${fadeIn} 0.5s ease;
  padding: 0 12px;
`;

export const SliderImage = styled.div`
  width: 100%;
  height: 180px;
  border-radius: 14px;
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
  width: ${(p) => (p.$active ? "18px" : "6px")};
  height: 6px;
  border-radius: 3px;
  background: ${(p) => (p.$active ? p.theme.mainColor : p.theme.categoryUnActive || "#d1d5db")};
  transition: all 0.3s ease;
`;

export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => p.theme.textColor || p.theme.BoxTextColor || "#0f172a"};
  padding: 0 16px;
  margin: 8px 0 12px;
  text-align: ${(p) => (p.$rtl ? "right" : "left")};
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.$cols || 3}, 1fr);
  gap: 12px;
  padding: 0 16px;
  animation: ${fadeIn} 0.6s ease 0.1s both;
`;

const cardPulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.96); }
  100% { transform: scale(1); }
`;

export const CategoryCard = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 16px 8px;
  border-radius: 14px;
  border: 1px solid ${(p) => p.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
  background: ${(p) => p.theme.BoxColor || "#fff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;

  &:active {
    animation: ${cardPulse} 0.25s ease;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);
  }
`;

export const CategoryIcon = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  background: ${(p) => p.theme.categoryUnActive || "#f1f5f9"};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const CategoryIconFallback = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: ${(p) => p.theme.mainColor}20;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.mainColor};
  font-size: 20px;
  font-weight: 700;
`;

export const CategoryName = styled.span`
  font-size: 11px;
  font-weight: 600;
  color: ${(p) => p.theme.BoxTextColor || p.theme.textColor || "#334155"};
  text-align: center;
  line-height: 1.3;
  max-width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  word-break: break-word;
`;

export const PoweredBy = styled.div`
  text-align: center;
  padding: 8px 0;
  font-size: 10px;
  color: ${(p) => p.theme.textColor || "#94a3b8"}60;
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  z-index: 90;
  a {
    color: inherit;
    text-decoration: none;
    font-weight: 600;
  }
`;
