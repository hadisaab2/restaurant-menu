import styled, { keyframes } from "styled-components";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.05); }
`;

const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

export const LandingWrapper = styled.div`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 20px;
  position: relative;
  overflow: hidden;
  background: ${({ theme }) => {
    const main = theme.mainColor || "#1a1a2e";
    const bg = theme.backgroundColor || "#16213e";
    return `linear-gradient(160deg, ${main} 0%, ${bg} 40%, #0d1117 100%)`;
  }};

  /* Animated ambient glow orbs */
  &::before,
  &::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    animation: ${pulse} 6s ease-in-out infinite;
  }

  &::before {
    width: 300px;
    height: 300px;
    top: -80px;
    right: -60px;
    background: ${({ theme }) => theme.mainColor || "#4a90d9"};
    opacity: 0.25;
  }

  &::after {
    width: 250px;
    height: 250px;
    bottom: -60px;
    left: -60px;
    background: ${({ theme }) => theme.categoryActive || theme.mainColor || "#6c5ce7"};
    opacity: 0.2;
    animation-delay: 3s;
  }
`;

export const LandingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
  max-width: 440px;
  width: 100%;
  z-index: 1;
`;

export const LogoContainer = styled.div`
  animation: ${fadeSlideUp} 0.7s ease-out;
  position: relative;

  /* Soft ring behind logo */
  &::before {
    content: "";
    position: absolute;
    inset: -12px;
    border-radius: 32px;
    background: ${({ theme }) =>
      `linear-gradient(135deg, ${theme.mainColor || "#4a90d9"}44, transparent 60%)`};
    filter: blur(16px);
    z-index: -1;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 28px;
  object-fit: cover;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
  border: 2px solid rgba(255, 255, 255, 0.12);
`;

export const WelcomeText = styled.h1`
  color: #ffffff;
  font-size: 26px;
  font-weight: 800;
  text-align: center;
  margin: 0;
  animation: ${fadeSlideUp} 0.7s ease-out 0.12s both;
  line-height: 1.35;
  letter-spacing: -0.3px;

  span {
    display: block;
    background: linear-gradient(
      90deg,
      #fff 0%,
      ${({ theme }) => theme.categoryActive || "#a5b4fc"} 50%,
      #fff 100%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${shimmer} 4s linear infinite;
  }
`;

export const SubText = styled.p`
  color: rgba(255, 255, 255, 0.6);
  font-size: 15px;
  text-align: center;
  margin: -8px 0 0;
  animation: ${fadeSlideUp} 0.7s ease-out 0.2s both;
  font-weight: 400;
  letter-spacing: 0.2px;
`;

export const Divider = styled.div`
  width: 48px;
  height: 3px;
  border-radius: 2px;
  background: ${({ theme }) =>
    `linear-gradient(90deg, transparent, ${theme.mainColor || "#4a90d9"}, transparent)`};
  animation: ${fadeSlideUp} 0.7s ease-out 0.25s both;
`;

export const CardsRow = styled.div`
  display: flex;
  gap: 14px;
  width: 100%;
  animation: ${fadeSlideUp} 0.7s ease-out 0.32s both;

  @media (max-width: 380px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const ChoiceCard = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  padding: 32px 16px 28px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  background: linear-gradient(
    165deg,
    rgba(255, 255, 255, 0.1) 0%,
    rgba(255, 255, 255, 0.03) 100%
  );
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  color: #ffffff;
  position: relative;
  overflow: hidden;

  /* Top accent line */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 20%;
    right: 20%;
    height: 2px;
    border-radius: 0 0 4px 4px;
    background: ${({ $accent, theme }) =>
      $accent || theme.mainColor || "#4a90d9"};
    opacity: 0.6;
    transition: all 0.35s ease;
  }

  &:hover,
  &:active {
    background: linear-gradient(
      165deg,
      rgba(255, 255, 255, 0.16) 0%,
      rgba(255, 255, 255, 0.06) 100%
    );
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25),
      0 0 40px ${({ $accent, theme }) => (($accent || theme.mainColor || "#4a90d9") + "20")};

    &::before {
      left: 10%;
      right: 10%;
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-3px);
  }
`;

export const CardIcon = styled.div`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $accent, theme }) =>
    `linear-gradient(135deg, ${($accent || theme.mainColor || "#4a90d9")}33, ${($accent || theme.mainColor || "#4a90d9")}11)`};
  border: 1px solid ${({ $accent, theme }) =>
    ($accent || theme.mainColor || "#4a90d9") + "44"};
  font-size: 32px;
  color: ${({ $accent, theme }) => $accent || theme.categoryActive || "#fff"};
  transition: transform 0.35s ease;

  ${ChoiceCard}:hover & {
    transform: scale(1.1);
  }
`;

export const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
`;

export const CardSubtitle = styled.span`
  font-size: 12.5px;
  opacity: 0.55;
  text-align: center;
  line-height: 1.5;
  font-weight: 400;
`;

export const LangToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 2;
  padding: 7px 16px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  animation: ${fadeSlideUp} 0.7s ease-out 0.4s both;

  &:hover {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
`;

export const PoweredBy = styled.div`
  position: absolute;
  bottom: 20px;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.25);
  font-weight: 400;
  z-index: 1;
  animation: ${fadeSlideUp} 0.7s ease-out 0.5s both;
  letter-spacing: 0.5px;

  a {
    color: rgba(255, 255, 255, 0.4);
    text-decoration: none;
    font-weight: 600;

    &:hover {
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
