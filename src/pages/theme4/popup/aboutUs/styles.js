import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

const backdropFadeIn = keyframes`
  0% { opacity: 0; backdrop-filter: blur(0); }
  100% { opacity: 1; backdrop-filter: blur(8px); }
`;

const panelSlideUp = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.98);
  }
  100% {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
`;

const lineExpand = keyframes`
  0% { transform: scaleX(0); opacity: 0; }
  60% { transform: scaleX(1); opacity: 1; }
  100% { transform: scaleX(1); opacity: 1; }
`;

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(16px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 1699;
  animation: ${backdropFadeIn} 0.35s ease-out forwards;
  pointer-events: auto;
`;

export const Panel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 94%;
  max-width: 720px;
  /* Fit all phone heights: use min() so small screens get top/bottom margin and content scrolls */
  max-height: min(
    calc(100dvh - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0) - 24px),
    calc(100vh - env(safe-area-inset-top, 0) - env(safe-area-inset-bottom, 0) - 24px)
  );
  min-height: 200px;
  background: ${(p) => p.theme?.backgroundColor || "#fff"};
  border-radius: 28px;
  box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.06);
  z-index: 1700;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${panelSlideUp} 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  direction: ${(p) => (p.$rtl ? "rtl" : "ltr")};

  @media (min-width: 768px) {
    max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 32px);
    border-radius: 32px;
  }
`;

export const CloseButton = styled(IoMdClose)`
  position: absolute;
  top: 16px;
  right: ${(p) => (p.$rtl ? "auto" : "16px")};
  left: ${(p) => (p.$rtl ? "16px" : "auto")};
  width: 44px;
  height: 44px;
  padding: 10px;
  color: ${(p) => p.theme?.textColor || "#333"};
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.15);
  transition: background 0.2s, transform 0.2s, color 0.2s;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
    transform: scale(1.05);
    color: ${(p) => p.theme?.textColor || "#111"};
  }
`;

export const ScrollContent = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  min-height: 0;
  padding: 56px 24px calc(24px + env(safe-area-inset-bottom, 0));
  -webkit-overflow-scrolling: touch;

  @media (min-width: 768px) {
    padding: 64px 40px 40px;
  }
`;

export const Hero = styled.div`
  text-align: center;
  margin-bottom: 32px;
  animation: ${fadeInUp} 0.5s ease-out 0.1s both;
`;

export const HeroTitle = styled.h1`
  font-size: clamp(28px, 5vw, 38px);
  font-weight: 700;
  margin: 0 0 8px;
  color: ${(p) => p.theme?.textColor || "#1a1a1a"};
  letter-spacing: -0.02em;
  line-height: 1.15;
`;

export const HeroGradient = styled.span`
  background: linear-gradient(135deg, ${(p) => p.theme?.mainColor || "#2563eb"} 0%, #7c3aed 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const HeroSubtitle = styled.p`
  font-size: 15px;
  color: ${(p) => (p.theme?.textColor ? p.theme.textColor + "cc" : "rgba(0,0,0,0.7)")};
  margin: 0;
  font-weight: 500;
`;

export const DecorativeLine = styled.div`
  width: 64px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, ${(p) => p.theme?.mainColor || "#2563eb"}, transparent);
  margin: 20px auto 0;
  transform-origin: center;
  animation: ${lineExpand} 0.6s ease-out 0.25s both;
  direction: ltr;
`;

export const Section = styled.section`
  margin-bottom: 28px;
  animation: ${fadeInUp} 0.5s ease-out both;
  animation-delay: ${(p) => (p.$delay ?? 0.2) + "s"};
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 700;
  color: ${(p) => p.theme?.mainColor || "#2563eb"};
  margin: 0 0 12px;
  letter-spacing: 0.02em;
`;

export const SectionText = styled.p`
  font-size: 15px;
  line-height: 1.65;
  color: ${(p) => (p.theme?.textColor ? p.theme.textColor + "ee" : "#333")};
  margin: 0;
`;

export const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
  margin-top: 16px;

  @media (min-width: 480px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
  }
`;

export const ValueCard = styled.div`
  background: linear-gradient(145deg, ${(p) => (p.theme?.mainColor ? p.theme.mainColor + "18" : "rgba(37,99,235,0.08)")} 0%, ${(p) => (p.theme?.mainColor ? p.theme.mainColor + "08" : "rgba(37,99,235,0.05)")} 100%);
  border: 1px solid ${(p) => (p.theme?.mainColor ? p.theme.mainColor + "30" : "rgba(37,99,235,0.2)")};
  border-radius: 16px;
  padding: 18px 14px;
  text-align: center;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
`;

export const ValueIcon = styled.div`
  width: 40px;
  height: 40px;
  margin: 0 auto 10px;
  border-radius: 12px;
  background: ${(p) => p.theme?.mainColor || "#2563eb"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

export const ValueTitle = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme?.textColor || "#1a1a1a"};
  display: block;
  margin-bottom: 4px;
`;

export const ValueDesc = styled.span`
  font-size: 12px;
  color: ${(p) => (p.theme?.textColor ? p.theme.textColor + "aa" : "#666")};
  line-height: 1.4;
`;

export const FooterBadge = styled.div`
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid ${(p) => (p.theme?.textColor ? p.theme.textColor + "20" : "rgba(0,0,0,0.08)")};
  text-align: center;
  font-size: 12px;
  color: ${(p) => (p.theme?.textColor ? p.theme.textColor + "99" : "#888")};
`;
