import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 14px 0 18px;
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.backgroundColor || "#fff"} 0%,
    ${(props) => props.theme.BoxColor || "#f9f9f9"} 100%
  );
  position: relative;
  overflow: hidden;
  direction: ${(props) => (props.isRtl ? "rtl" : "ltr")};

  /* Decorative soft radial glow — oven/pizza warmth from admin mainColor */
  &::before {
    content: "";
    position: absolute;
    top: -50px;
    right: ${(props) => (props.isRtl ? "auto" : "-50px")};
    left: ${(props) => (props.isRtl ? "-50px" : "auto")};
    width: 180px;
    height: 180px;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColor || "#e53e3e"};
    opacity: 0.07;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -30px;
    left: ${(props) => (props.isRtl ? "auto" : "-30px")};
    right: ${(props) => (props.isRtl ? "-30px" : "auto")};
    width: 110px;
    height: 110px;
    border-radius: 50%;
    background: ${(props) => props.theme.mainColor || "#e53e3e"};
    opacity: 0.05;
    pointer-events: none;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 92%;
  flex-direction: ${(props) => (props.isRtl ? "row-reverse" : "row")};
`;

export const MenuIconBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: none;
  background: transparent;
  cursor: pointer;
  border-radius: 50%;
  outline: none;
  flex-shrink: 0;
  transition: background 0.18s;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
    transform: scale(0.92);
  }
`;

export const MenuIcon = styled(HiMenuAlt2)`
  color: ${(props) => props.theme.mainColor};
  font-size: 26px;
`;

export const LogoFrame = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  background: ${(props) => props.theme.BoxColor || "#ffffff"};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:
    0 4px 16px rgba(0, 0, 0, 0.12),
    0 0 0 3px ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.06)"};
  flex-shrink: 0;
  position: relative;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const LogoInitials = styled.span`
  font-size: 24px;
  font-weight: 800;
  color: ${(props) => props.theme.mainColor || "#e53e3e"};
  letter-spacing: -0.5px;
  user-select: none;
`;

export const BrandInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  gap: 4px;
  width: 92%;
`;

export const RestaurantName = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: ${(props) => props.theme.textColor || "#1a1a1a"};
  margin: 0;
  text-align: center;
  letter-spacing: -0.4px;
  line-height: 1.2;
`;

export const BranchInfo = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.textColor || "#666"};
  opacity: 0.55;
  margin: 0;
  text-align: center;
  letter-spacing: 0.2px;
`;

export const LanguagePill = styled.div`
  display: flex;
  flex-direction: row;
  background: ${(props) => props.theme.languagebackground || props.theme.mainColor || "#e53e3e"};
  border-radius: 999px;
  padding: 3px;
  gap: 0;
  flex-shrink: 0;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
`;

export const LangOption = styled.button`
  border: none;
  background: ${(props) =>
    props.active ? "rgba(255, 255, 255, 0.28)" : "transparent"};
  color: ${(props) => props.theme.languageTextColor || "#fff"};
  font-size: 11px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  padding: 5px 11px;
  border-radius: 999px;
  cursor: pointer;
  outline: none;
  transition: all 0.18s;
  line-height: 1;
  letter-spacing: 0.4px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.7;
  }
`;

/* ── Legacy compat exports so any leftover imports don't break ── */
export const Brand = styled.img`
  max-width: 250px;
  max-height: 120px;
`;
export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10vh;
  justify-content: space-between;
  width: 90%;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const LanguageContainer = LanguagePill;
export const Wrapper = styled.div``;
export const Ball = styled.div``;
export const Language = LangOption;
