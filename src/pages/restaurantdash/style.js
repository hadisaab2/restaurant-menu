import styled, { keyframes } from "styled-components";
import { breakingPoints, dashboardColors } from "../../styles/theme";
import { TbCategoryPlus } from "react-icons/tb";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

/* ─────────────────────────────────────────────
   TOKENS
───────────────────────────────────────────── */
const T = {
  sidebarBg: "#0c0f1d",
  sidebarBorder: "rgba(255,255,255,0.06)",
  sidebarText: "rgba(255,255,255,0.62)",
  sidebarTextActive: "#ffffff",
  accent: dashboardColors.mainColor,   /* teal */
  accentGlow: "rgba(94,171,177,0.22)",
  pageBg: "#f0f2f8",
  headerBg: "rgba(255,255,255,0.82)",
  radius: "14px",
};

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position:  200% center; }
`;

/* ─────────────────────────────────────────────
   PAGE SHELL
───────────────────────────────────────────── */
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background: ${T.pageBg};
`;

/* ─────────────────────────────────────────────
   SIDEBAR — desktop
───────────────────────────────────────────── */
export const Sidebar = styled.nav`
  width: 220px;
  position: fixed;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${T.sidebarBg};
  border-right: 1px solid ${T.sidebarBorder};
  left: 0;
  top: 0;
  z-index: 200;
  box-shadow: 4px 0 24px rgba(0, 0, 0, 0.28);

  @media (max-width: ${breakingPoints.sm}px) {
    display: none;
  }
`;

export const SidebarTop = styled.div`
  height: 72px;
  min-height: 72px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  flex-shrink: 0;
  border-bottom: 1px solid ${T.sidebarBorder};
`;

export const Title = styled.span`
  font-size: 22px;
  font-weight: 800;
  letter-spacing: -0.5px;
  background: linear-gradient(120deg, ${T.accent}, #a78bfa);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 100%;
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  padding: 12px 10px 12px;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar { width: 3px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.12);
    border-radius: 3px;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    gap: 2px;
    padding: 10px 10px calc(100px + env(safe-area-inset-bottom, 0px));
  }
`;

export const Tab = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  min-height: 44px;
  height: auto;
  padding: 9px 12px;
  font-size: 13.5px;
  font-weight: ${(props) => (props.$active ? "600" : "400")};
  align-items: center;
  gap: 10px;
  color: ${(props) => (props.$active ? T.sidebarTextActive : T.sidebarText)};
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.$disabled ? 0.45 : 1)};
  background: ${(props) =>
    props.$active
      ? `linear-gradient(90deg, ${T.accentGlow} 0%, transparent 100%)`
      : "transparent"};
  border-radius: 10px;
  border-left: 2.5px solid
    ${(props) => (props.$active ? T.accent : "transparent")};
  transition: all 0.18s ease;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  letter-spacing: 0.1px;

  &:hover {
    background: ${(props) =>
      props.$disabled
        ? "transparent"
        : props.$active
          ? `linear-gradient(90deg, ${T.accentGlow} 0%, transparent 100%)`
          : "rgba(255,255,255,0.05)"};
    color: ${(props) => (props.$disabled ? T.sidebarText : T.sidebarTextActive)};
  }

  @media (max-width: ${breakingPoints.sm}px) {
    border-left: none;
    border-right: 2.5px solid
      ${(props) => (props.$active ? T.accent : "transparent")};
    background: ${(props) =>
      props.$active
        ? `linear-gradient(270deg, ${T.accentGlow} 0%, transparent 100%)`
        : "transparent"};
  }
`;

export const TabText = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
  line-height: 1.25;
`;

export const SidebarBottom = styled.div`
  display: flex;
  min-height: 68px;
  height: auto;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  border-top: 1px solid ${T.sidebarBorder};
  background: rgba(255, 255, 255, 0.03);
  flex-shrink: 0;
  margin-top: auto;
  padding: 12px 14px calc(12px + env(safe-area-inset-bottom, 0px));
  z-index: 2;
  box-sizing: border-box;
`;

/* ─────────────────────────────────────────────
   MAIN CONTENT AREA
───────────────────────────────────────────── */
export const Content = styled.main`
  padding-left: 220px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  padding-bottom: 60px;
  justify-content: flex-start;
  background: ${T.pageBg};
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    padding-left: max(12px, env(safe-area-inset-left, 0px));
    padding-right: max(12px, env(safe-area-inset-right, 0px));
    padding-bottom: calc(60px + env(safe-area-inset-bottom, 0px));
    overflow-x: hidden;
  }
`;

/* ─────────────────────────────────────────────
   TOP HEADER BAR
───────────────────────────────────────────── */
export const Header = styled.header`
  width: 90%;
  background: ${T.headerBg};
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: ${T.radius};
  min-height: 60px;
  height: auto;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.07);
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    margin-top: 10px;
    min-height: 50px;
    border-radius: 10px;
    padding: 0 4px 0 0;
    gap: 4px;
  }
`;

export const Path = styled.span`
  margin-left: 20px;
  font-weight: 600;
  font-size: 14px;
  color: #334155;
  letter-spacing: 0.2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
  min-width: 0;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 13px;
    margin-left: 12px;
  }
`;

/* ─────────────────────────────────────────────
   SIDEBAR ICONS / AVATAR
───────────────────────────────────────────── */
export const CateogoryIcon = styled(TbCategoryPlus)`
  font-size: 17px;
  flex-shrink: 0;
  opacity: 0.85;
`;

export const ProfileIcon = styled(IoPersonCircle)`
  font-size: 28px;
  color: ${T.accent};
  flex-shrink: 0;
`;

/* ─────────────────────────────────────────────
   CLOSE / BURGER ICONS
───────────────────────────────────────────── */
export const CloseIcon = styled(IoMdClose)`
  font-size: 20px;
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  color: ${T.sidebarTextActive};
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;

  &:hover  { background: rgba(255,255,255,0.1); }
  &:active { background: rgba(255,255,255,0.18); }
`;

/* Pure-CSS 3-line hamburger — avoids SVG display:flex issues */
export const BurgerIcon = styled.button`
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 40px;
  height: 40px;
  padding: 0;
  margin-right: 8px;
  background: transparent;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  flex-shrink: 0;
  -webkit-tap-highlight-color: transparent;
  transition: background 0.15s;

  /* three dashes via box-shadow on a single pseudo-element */
  &::before,
  &::after,
  span {
    content: "";
    display: block;
    width: 22px;
    height: 2.5px;
    border-radius: 2px;
    background: #334155;
    transition: background 0.15s;
  }

  &:hover  { background: rgba(15,23,42,0.06); }
  &:active { background: rgba(15,23,42,0.1);  }

  @media (max-width: ${breakingPoints.sm}px) {
    display: flex;
  }
`;

/* ─────────────────────────────────────────────
   USERNAME / LOGOUT
───────────────────────────────────────────── */
export const Username = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: ${T.sidebarText};
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  flex: 1;
  min-width: 0;
`;

export const Logout = styled.button`
  outline: none;
  border: 1px solid rgba(148,163,184,0.3);
  border-radius: 8px;
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 500;
  color: #64748b;
  background: transparent;
  cursor: pointer;
  transition: all 0.15s;
  white-space: nowrap;
  flex-shrink: 0;
  margin-right: 16px;

  &:hover {
    background: #fef2f2;
    color: #ef4444;
    border-color: #fca5a5;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    display: none;
  }
`;

export const LogoutMobile = styled.button`
  outline: none;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 8px;
  padding: 7px 14px;
  font-size: 13px;
  font-weight: 500;
  color: ${T.sidebarText};
  background: transparent;
  cursor: pointer;
  display: none;
  margin-left: auto;
  margin-right: 4px;
  flex-shrink: 0;
  transition: all 0.15s;

  &:hover {
    background: rgba(255,255,255,0.08);
    color: #fff;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

/* ─────────────────────────────────────────────
   MOBILE SIDEBAR — backdrop + drawer
───────────────────────────────────────────── */
export const MobileSidebarBackdrop = styled.div`
  display: none;
  @media (max-width: ${breakingPoints.sm}px) {
    display: ${(props) => (props.$open ? "block" : "none")};
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    z-index: 1040;
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
  }
`;

export const MobileSidebar = styled.nav`
  width: min(280px, 88vw);
  max-width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  height: 100dvh;
  flex-direction: column;
  background: ${T.sidebarBg};
  box-shadow: 6px 0 32px rgba(0, 0, 0, 0.4);
  display: none;
  z-index: 1050;
  transform: ${(props) =>
    props.$showMobileSidebar ? "translateX(0)" : "translateX(-108%)"};
  transition: transform 0.28s cubic-bezier(0.32, 0.72, 0, 1);
  padding-top: env(safe-area-inset-top, 0px);

  @media (max-width: ${breakingPoints.sm}px) {
    display: flex;
  }
`;

/* ─────────────────────────────────────────────
   ACCESS NOTICE (VIP gate)
───────────────────────────────────────────── */
export const AccessNotice = styled.div`
  width: 90%;
  max-width: 100%;
  margin-top: 24px;
  background: #ffffff;
  border-radius: ${T.radius};
  border: 1px solid rgba(148, 163, 184, 0.25);
  padding: 32px;
  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.06);
  text-align: center;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    padding: 24px 18px;
  }
`;

export const AccessNoticeTitle = styled.h3`
  margin: 0 0 10px 0;
  font-size: 20px;
  font-weight: 700;
  color: #0f172a;
`;

export const AccessNoticeText = styled.p`
  margin: 0;
  font-size: 14px;
  color: #64748b;
  line-height: 1.6;
  max-width: 460px;
  margin: 0 auto;
`;

/* Unused legacy export kept for compat */
export const MobileSidebarTop = styled.div``;
