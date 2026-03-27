import styled from "styled-components";

export const SectionRoot = styled.section`
  width: 100%;
  position: relative;
  padding: 0 0 8px;
  margin-bottom: ${(p) => (p.$variant === "theme1" ? "4px" : "12px")};
`;

export const SectionGlow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: min(96%, 720px);
  height: 120px;
  background: radial-gradient(
    ellipse 80% 70% at 50% 0%,
    ${(p) => p.theme.mainColor || "#2563eb"}22,
    transparent 72%
  );
  pointer-events: none;
  z-index: 0;
`;

export const SectionFrame = styled.div`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  border-radius: 0 0 20px 20px;
  background: linear-gradient(
    180deg,
    ${(p) => p.theme.BoxColor || "rgba(255,255,255,0.6)"} 0%,
    ${(p) => p.theme.backgroundColor || "#f8f9fa"} 100%
  );
  box-shadow: none;
  overflow: hidden;

  @media (min-width: 768px) {
    border-radius: 0 0 24px 24px;
    max-width: min(100%, 960px);
  }
`;

export const SliderSlot = styled.div`
  width: 100%;

  /* Tighten theme3 slider padding inside this frame */
  #swiper {
    padding-top: 0;
    padding-bottom: 28px;
  }
`;
