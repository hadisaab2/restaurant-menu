import styled from "styled-components";
import { breakingPoints } from "../../styles/theme";

const T = {
  pageBg: "#f0f2f8",
  accent: "#5eabb1",
  accentGlow: "rgba(94,171,177,0.22)",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  textPrimary: "#0f172a",
  textSub: "#64748b",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  radius: "14px",
};

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${T.pageBg};
  box-sizing: border-box;
  padding-bottom: 60px;
`;

export const PageHeader = styled.header`
  width: 92%;
  max-width: 1400px;
  margin-top: 24px;
  padding: 28px 28px 24px;
  border-radius: 20px;
  background:
    radial-gradient(ellipse at 80% 50%, rgba(94,171,177,0.18) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(139,92,246,0.14) 0%, transparent 50%),
    linear-gradient(135deg, #0c0f1d 0%, #1a2238 55%, #0c1630 100%);
  color: #f8fafc;
  box-shadow: 0 16px 40px rgba(10, 15, 40, 0.28);
  position: relative;
  overflow: hidden;
  box-sizing: border-box;

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
    width: 100%;
    margin-top: 12px;
    padding: 20px 16px 18px;
    border-radius: 14px;
  }
`;

export const PageTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 800;
  letter-spacing: -0.6px;
  position: relative;
  background: linear-gradient(120deg, #ffffff, ${T.accent});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 22px;
  }
`;

export const PageSubtitle = styled.p`
  margin: 8px 0 0 0;
  opacity: 0.6;
  font-size: 14px;
  line-height: 1.5;
  position: relative;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12px;
  }
`;

export const TabsContainer = styled.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 4px;
  background: ${T.cardBg};
  border-radius: 12px;
  padding: 6px;
  box-shadow: ${T.shadow};
  border: 1px solid ${T.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    margin-top: 14px;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
`;

export const Tab = styled.div`
  padding: 10px 24px;
  font-size: 14px;
  font-weight: ${(props) => (props.activeTab === props.tab ? "600" : "500")};
  color: ${(props) =>
    props.activeTab === props.tab ? T.textPrimary : T.textSub};
  background: ${(props) =>
    props.activeTab === props.tab
      ? `linear-gradient(135deg, ${T.accentGlow}, rgba(94,171,177,0.08))`
      : "transparent"};
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
  position: relative;
  user-select: none;

  ${(props) =>
    props.activeTab === props.tab &&
    `
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 24px;
      height: 2.5px;
      background: ${T.accent};
      border-radius: 2px;
    }
  `}

  &:hover {
    color: ${T.textPrimary};
    background: ${(props) =>
      props.activeTab === props.tab
        ? `linear-gradient(135deg, ${T.accentGlow}, rgba(94,171,177,0.08))`
        : "rgba(15,23,42,0.04)"};
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 8px 16px;
    font-size: 13px;
  }
`;

export const ContentArea = styled.div`
  width: 92%;
  max-width: 1400px;
  margin-top: 16px;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    padding: 0 12px;
    margin-top: 12px;
  }
`;
