import styled from "styled-components";

/** New 37-style hero: full-height section with background image, gradient overlay, badges, headline, CTAs */
export const HeroRoot = styled.section`
  position: relative;
  min-height: 85vh;
  overflow: hidden;
  background: #111;

  @media (min-width: 768px) {
    min-height: 90vh;
  }
`;

export const HeroBgImage = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;

  & img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.6;
  }
`;

export const HeroGradient = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to top,
    rgba(0, 0, 0, 0.9) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  pointer-events: none;
`;

export const HeroContent = styled.div`
  position: relative;
  height: 100%;
  min-height: 85vh;
  margin: 0 auto;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding-bottom: 64px;
  max-width: 1280px;
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};

  @media (min-width: 768px) {
    min-height: 90vh;
    padding: 0 24px;
    padding-bottom: 96px;
  }
`;

export const HeroInner = styled.div`
  max-width: 672px;
`;

export const BadgesWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
  flex-wrap: wrap;
`;

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  border-radius: 9999px;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
  font-size: 12px;
  font-weight: 500;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
`;

export const HeroTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.05;
  font-weight: 700;
  color: #fff;
  margin: 0 0 20px 0;

  @media (min-width: 640px) {
    font-size: 3rem;
  }
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
  @media (min-width: 1280px) {
    font-size: 4.5rem;
  }
`;

export const HeroSubtext = styled.p`
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0 32px 0;
  max-width: 28rem;
  line-height: 1.6;

  @media (min-width: 768px) {
    font-size: 1.125rem;
  }
`;

export const CTAWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: 640px) {
    flex-direction: row;
  }
`;

export const CtaPrimary = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  font-weight: 500;
  font-size: 1rem;
  height: 48px;
  min-height: 48px;
  border-radius: 9999px;
  padding: 0 32px;
  width: 100%;
  gap: 8px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  &:hover {
    filter: brightness(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme?.mainColor || "#007bff"};
    outline-offset: 2px;
  }

  @media (min-width: 640px) {
    width: auto;
  }
`;

