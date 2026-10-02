import styled, { keyframes, createGlobalStyle } from "styled-components";
import { withAlpha, isLightColor, lightenColor } from "../../theme6/utils/colorUtils";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Almarai:wght@300;400;700;800&display=swap');

  :root {
    --c-bg: ${p => p.$bg || "#fdfcfa"};
    --c-surface: ${p => {
      const bg = p.$bg || "#fdfcfa";
      return isLightColor(bg) ? "#ffffff" : lightenColor(bg, 15);
    }};
    --c-text: ${p => p.$text || "#1a1a1a"};
    --c-text-2: ${p => withAlpha(p.$text || "#1a1a1a", 0.65)};
    --c-text-3: ${p => withAlpha(p.$text || "#1a1a1a", 0.4)};
    --c-accent: ${p => p.$accent || "#8b6f4e"};
    --c-accent-light: ${p => p.$accentLight || "#c4a97d"};
    --c-accent-bg: ${p => p.$accentBg || "rgba(139, 111, 78, 0.06)"};
    --c-border: ${p => withAlpha(p.$text || "#1a1a1a", 0.12)};
    --c-border-light: ${p => withAlpha(p.$text || "#1a1a1a", 0.06)};
    --c-gold: ${p => p.$accentLight || "#c4a97d"};
    --font-display: 'Playfair Display', Georgia, serif;
    --font-body: 'Inter', -apple-system, sans-serif;
    --font-ar: 'Almarai', sans-serif;
  }

  html, body, #root {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: var(--font-body);
    background: var(--c-bg) !important;
    -webkit-font-smoothing: antialiased;
  }
  [dir="rtl"] body { font-family: var(--font-ar); }
`;

const logoEntrance = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to   { opacity: 1; transform: scale(1); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const cardEntrance = keyframes`
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
`;

/* ─── Landing Wrapper (flex column → sticky footer) ─── */
export const LandingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: var(--c-bg);
  position: relative;
  direction: ${p => p.dir || "ltr"};
  &[dir="rtl"] { font-family: var(--font-ar); }
`;

/* ─── Language Toggle ─── */
export const LangToggle = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 100px;
  padding: 6px 14px;
  font-size: 13px;
  font-weight: 500;
  color: var(--c-text-2);
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
  &:hover {
    border-color: var(--c-accent-light);
    color: var(--c-accent);
    box-shadow: 0 4px 16px rgba(0,0,0,0.06);
  }
  svg { width: 16px; height: 16px; }
  [dir="rtl"] & { right: auto; left: 20px; }
  @media (max-width: 374px) {
    padding: 5px 10px;
    font-size: 12px;
    top: 12px;
    right: 12px;
    [dir="rtl"] & { right: auto; left: 12px; }
  }
`;

/* ─── Hero ─── */
export const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 64px 24px 40px;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--c-accent-bg) 0%, transparent 70%);
    pointer-events: none;
  }
  @media (min-width: 375px) and (max-width: 639px) {
    padding: 48px 16px 32px;
  }
  @media (max-width: 374px) {
    padding: 40px 12px 24px;
  }
`;

export const HeroLogo = styled.img`
  width: 180px;
  height: 180px;
  object-fit: contain;
  animation: ${logoEntrance} 0.8s cubic-bezier(0.16,1,0.3,1) both;
  position: relative;
  z-index: 1;
  @media (min-width: 375px) and (max-width: 639px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 374px) {
    width: 100px;
    height: 100px;
  }
`;

export const HeroLogoFallback = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--c-accent-light), var(--c-accent));
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: 40px;
  font-weight: 700;
  color: #fff;
  animation: ${logoEntrance} 0.8s cubic-bezier(0.16,1,0.3,1) both;
  position: relative;
  z-index: 1;
  @media (min-width: 375px) and (max-width: 639px) {
    width: 88px;
    height: 88px;
    font-size: 32px;
  }
  @media (max-width: 374px) {
    width: 72px;
    height: 72px;
    font-size: 28px;
  }
`;

export const HeroName = styled.h1`
  font-family: var(--font-display);
  font-size: 38px;
  font-weight: 700;
  color: var(--c-text);
  margin-top: 24px;
  letter-spacing: -0.02em;
  line-height: 1.15;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16,1,0.3,1) 0.15s both;
  [dir="rtl"] & { font-family: var(--font-ar); letter-spacing: 0; }
  @media (min-width: 375px) and (max-width: 639px) {
    font-size: 26px;
    margin-top: 20px;
  }
  @media (max-width: 374px) {
    font-size: 22px;
    margin-top: 16px;
  }
`;

export const HeroTagline = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: var(--c-text-3);
  margin-top: 12px;
  max-width: 400px;
  line-height: 1.6;
  padding: 0 8px;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16,1,0.3,1) 0.25s both;
  @media (min-width: 375px) and (max-width: 639px) { font-size: 14px; }
  @media (max-width: 374px) { font-size: 13px; }
`;

export const HeroDivider = styled.div`
  width: 48px;
  height: 2px;
  background: linear-gradient(90deg, transparent, var(--c-gold), transparent);
  margin-top: 32px;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16,1,0.3,1) 0.35s both;
  @media (min-width: 375px) and (max-width: 639px) { margin-top: 24px; }
  @media (max-width: 374px) { margin-top: 20px; }
`;

/* ─── Brands Section ─── */
export const BrandsSection = styled.section`
  flex: 1;
  max-width: 960px;
  margin: 0 auto;
  padding: 0 24px 64px;
  @media (min-width: 375px) and (max-width: 639px) { padding: 0 14px 40px; }
  @media (max-width: 374px) { padding: 0 10px 32px; }
`;

export const BrandsHeading = styled.h2`
  text-align: center;
  font-family: var(--font-display);
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: var(--c-accent);
  margin-bottom: 40px;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16,1,0.3,1) 0.4s both;
  [dir="rtl"] & { font-family: var(--font-ar); }
  @media (min-width: 375px) and (max-width: 639px) { margin-bottom: 24px; font-size: 12px; }
  @media (max-width: 374px) { margin-bottom: 20px; font-size: 11px; }
`;

export const BrandsGrid = styled.div`
  display: grid;
  grid-template-columns: ${p => p.$count <= 2 ? '1fr' : 'repeat(2, 1fr)'};
  gap: ${p => p.$count <= 2 ? '20px' : '16px'};
  @media (min-width: 640px) { gap: 24px; }
  @media (max-width: 374px) { gap: ${p => p.$count <= 2 ? '14px' : '10px'}; }
`;

/* ─── Brand Card ─── */
export const BrandCard = styled.article`
  background: var(--c-surface);
  border-radius: 24px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s cubic-bezier(0.16,1,0.3,1),
              box-shadow 0.35s cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 2px 12px rgba(0,0,0,0.05);
  animation: ${cardEntrance} 0.7s cubic-bezier(0.16,1,0.3,1) ${p => 0.45 + (p.$index || 0) * 0.1}s both;
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.10);
  }
  &:hover img.cover-img { transform: scale(1.05); }
  &:hover .card-cta svg {
    transform: translateX(4px);
    [dir="rtl"] & { transform: translateX(-4px) scaleX(-1); }
  }
  @media (min-width: 375px) and (max-width: 639px) { border-radius: 16px; }
  @media (max-width: 374px) { border-radius: 16px; }
`;

export const CardCover = styled.div`
  position: relative;
  height: ${p => p.$single ? '360px' : '280px'};
  overflow: hidden;
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.08) 50%, transparent 100%);
  }
  @media (min-width: 375px) and (max-width: 639px) { height: ${p => p.$single ? '220px' : '180px'}; }
  @media (max-width: 374px) { height: ${p => p.$single ? '180px' : '140px'}; }
`;

export const CoverImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s cubic-bezier(0.16,1,0.3,1);
`;

export const CoverFallback = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, var(--c-border) 0%, var(--c-border-light) 100%);
`;

/* ─── Card Overlay (name + desc on image) ─── */
export const CardOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px;
  z-index: 1;
  @media (min-width: 375px) and (max-width: 639px) { padding: 12px; }
  @media (max-width: 374px) { padding: 10px; }
`;

export const CardName = styled.h3`
  font-family: var(--font-display);
  font-size: ${p => p.$single ? '28px' : '20px'};
  font-weight: 700;
  color: #fff;
  line-height: 1.2;
  text-shadow: 0 1px 4px rgba(0,0,0,0.3);
  [dir="rtl"] & { font-family: var(--font-ar); text-align: right; }
  @media (min-width: 375px) and (max-width: 639px) { font-size: ${p => p.$single ? '20px' : '15px'}; }
  @media (max-width: 374px) { font-size: ${p => p.$single ? '17px' : '13px'}; }
`;

export const CardDesc = styled.p`
  font-size: ${p => p.$single ? '15px' : '13px'};
  color: rgba(255,255,255,0.85);
  line-height: 1.5;
  margin-top: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  [dir="rtl"] & { text-align: right; }
  @media (min-width: 375px) and (max-width: 639px) { font-size: ${p => p.$single ? '13px' : '11px'}; }
  @media (max-width: 374px) { font-size: ${p => p.$single ? '12px' : '10px'}; -webkit-line-clamp: ${p => p.$single ? '2' : '1'}; }
`;

/* ─── Card Footer ─── */
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${p => p.$single ? '14px 20px' : '12px 16px'};
  border-top: 1px solid var(--c-border-light);
  @media (min-width: 375px) and (max-width: 639px) { padding: ${p => p.$single ? '12px 16px' : '10px 12px'}; }
  @media (max-width: 374px) { padding: ${p => p.$single ? '10px 14px' : '8px 10px'}; }
`;

export const CardSocials = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  @media (min-width: 375px) and (max-width: 639px) { gap: 5px; }
  @media (max-width: 374px) { gap: 4px; }
`;

export const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  color: var(--c-text-3);
  background: var(--c-accent-bg);
  transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
  text-decoration: none;
  &:hover {
    color: var(--c-accent);
    background: var(--c-border);
    transform: translateY(-1px);
  }
  svg { width: 14px; height: 14px; }
  @media (min-width: 375px) and (max-width: 639px) {
    width: 26px; height: 26px;
    svg { width: 12px; height: 12px; }
  }
  @media (max-width: 374px) {
    width: 24px; height: 24px;
    svg { width: 11px; height: 11px; }
  }
`;

export const CardCta = styled.span`
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: ${p => p.$single ? '13px' : '12px'};
  font-weight: 600;
  color: var(--c-accent);
  margin-left: auto;
  svg {
    width: ${p => p.$single ? '16px' : '14px'};
    height: ${p => p.$single ? '16px' : '14px'};
    transition: transform 0.2s ease;
  }
  [dir="rtl"] & { margin-left: 0; margin-right: auto; }
  [dir="rtl"] & svg { transform: scaleX(-1); }
  @media (min-width: 375px) and (max-width: 639px) { font-size: ${p => p.$single ? '11px' : '10px'}; gap: 4px; svg { width: 12px; height: 12px; } }
  @media (max-width: 374px) { font-size: ${p => p.$single ? '10px' : '9px'}; gap: 3px; svg { width: 11px; height: 11px; } }
`;

/* ─── Footer ─── */
export const LandingFooter = styled.footer`
  text-align: center;
  padding: 32px 24px;
  border-top: 1px solid var(--c-border-light);
  margin-top: auto;
  animation: ${fadeUp} 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s both;
`;

export const FooterPowered = styled.p`
  font-size: 13px;
  color: var(--c-text-3);
  a {
    color: var(--c-accent);
    text-decoration: none;
    font-weight: 600;
    &:hover { text-decoration: underline; }
  }
`;
