import styled, { css } from "styled-components";

// ── Layout ──
export const PageWrapper = styled.div`
  min-height: 100vh;
  background: ${(p) => p.theme.backgroundColor || "#FBFAF8"};
  color: ${(p) => p.theme.textColor || "#262324"};
  font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
  direction: ${(p) => (p.$rtl ? "rtl" : "ltr")};
`;

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
  @media (min-width: 640px) { padding: 0 24px; }
`;

// ── Section Title ──
export const SectionTitle = styled.h2`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
  text-align: ${(p) => (p.$center ? "center" : "start")};
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

export const SectionSub = styled.p`
  font-size: 0.75rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "99" : "#7A7472"};
  line-height: 1.6;
  max-width: 520px;
  text-align: ${(p) => (p.$center ? "center" : "start")};
  ${(p) => p.$center && css`margin: 0 auto;`}
`;

// ── Announce Bar ──
export const AnnounceBar = styled.div`
  background: ${(p) => p.theme.mainColor || "#262324"};
  color: #fff;
  font-size: 0.75rem;
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  text-align: center;
  letter-spacing: 0.02em;
  strong { color: rgba(255,255,255,0.85); }
`;

export const AnnounceClose = styled.button`
  color: #fff;
  opacity: 0.5;
  padding: 2px;
  &:hover { opacity: 1; }
`;

// ── Header ──
export const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${(p) => p.theme.backgroundColor || "#FBFAF8"};
  height: 60px;
  border-bottom: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  transition: box-shadow 0.25s;
  ${(p) => p.$scrolled && css`box-shadow: 0 1px 2px rgba(0,0,0,0.03);`}
`;

export const HeaderInner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 16px;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HeaderLogo = styled.a`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.375rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.textColor || "#262324"};
  text-decoration: none;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

export const HeaderNav = styled.nav`
  display: none;
  flex: 1;
  justify-content: center;
  gap: 20px;
  @media (min-width: 1024px) { display: flex; }
`;

export const HeaderNavLink = styled.a`
  font-size: 0.75rem;
  font-weight: 500;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  letter-spacing: 0.01em;
  text-decoration: none;
  transition: color 0.15s;
  &:hover { color: ${(p) => p.theme.textColor || "#262324"}; }
`;

export const HeaderEnd = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-inline-start: auto;
`;

export const HeaderIconBtn = styled.button`
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  transition: background 0.15s;
  &:hover { background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "10" : "#F5F3F0"}; }
`;

export const HeaderBookBtn = styled.a`
  display: none;
  padding: 8px 20px;
  background: ${(p) => p.theme.mainColor || "#262324"};
  color: #fff;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  text-decoration: none;
  transition: background 0.15s;
  &:hover { opacity: 0.9; }
  @media (min-width: 1024px) { display: inline-flex; }
`;

export const BurgerBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  @media (min-width: 1024px) { display: none; }
`;

// ── Hero ──
export const HeroSection = styled.section`
  padding: 40px 0 48px;
  background: #fff;
`;

export const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  @media (min-width: 640px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const HeroText = styled.div`
  max-width: 540px;
  flex: 1;
`;

export const HeroEyebrow = styled.p`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: ${(p) => p.theme.mainColor || "#B39B8E"};
  margin-bottom: 12px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 2.25rem;
  font-weight: 400;
  line-height: 1.15;
  margin-bottom: 16px;
  letter-spacing: -0.01em;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
  @media (min-width: 640px) { font-size: 3rem; }
`;

export const HeroSub = styled.p`
  font-size: 0.875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  line-height: 1.7;
  margin-bottom: 24px;
`;

export const HeroCTAs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 32px;
`;

export const Btn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 24px;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  transition: all 0.15s;
  border: none;
  cursor: pointer;
  text-decoration: none;

  ${(p) => p.$primary && css`
    background: ${p.theme.mainColor || "#262324"};
    color: #fff;
    &:hover { opacity: 0.9; }
  `}
  ${(p) => p.$outline && css`
    background: none;
    border: 1px solid ${p.theme.mainColor ? p.theme.mainColor + "30" : "#E8E4E0"};
    color: ${p.theme.textColor || "#262324"};
    &:hover { background: ${p.theme.mainColor ? p.theme.mainColor + "08" : "#F5F3F0"}; }
  `}
  ${(p) => p.$wa && css`
    background: #25D366;
    color: #fff;
    &:hover { background: #1DA851; }
  `}
  ${(p) => p.$accent && css`
    background: ${p.theme.mainColor || "#B39B8E"};
    color: #fff;
    &:hover { opacity: 0.9; }
  `}
`;

export const HeroVisual = styled.div`
  height: 240px;
  border-radius: 20px;
  background: linear-gradient(135deg,
    ${(p) => p.theme.mainColor ? p.theme.mainColor + "20" : "#F0EAE5"} 0%,
    ${(p) => p.theme.mainColor ? p.theme.mainColor + "08" : "#F8F5F2"} 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  flex: 1;
  overflow: hidden;
  @media (min-width: 640px) { height: 360px; }
`;

export const HeroTrust = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const HeroTrustItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  svg { color: ${(p) => p.theme.mainColor || "#B39B8E"}; }
`;

// ── Stats ──
export const StatsBar = styled.div`
  padding: 24px 0;
  background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "12" : "#F0EAE5"};
  border-top: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  border-bottom: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
`;

export const StatsInner = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  flex-wrap: wrap;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StatItem = styled.div``;

export const StatVal = styled.div`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 600;
  color: ${(p) => p.theme.textColor || "#262324"};
  line-height: 1;
`;

export const StatLabel = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  margin-top: 4px;
`;

// ── Category Grid ──
export const CatSection = styled.section`
  padding: 48px 0;
  background: #fff;
`;

export const CatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  @media (min-width: 640px) { grid-template-columns: repeat(4, 1fr); }
`;

export const CatCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px 12px;
  border-radius: 14px;
  background: ${(p) => p.theme.backgroundColor || "#FBFAF8"};
  border: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    border-color: ${(p) => p.theme.mainColor || "#B39B8E"};
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  }
`;

export const CatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 999px;
  background: ${(p) => p.$color || (p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EAE5")};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

export const CatName = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
`;

export const CatCount = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0"};
  margin-top: 2px;
`;

// ── Service Card ──
export const SvcCard = styled.article`
  border-radius: 14px;
  overflow: hidden;
  background: #fff;
  border: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  cursor: pointer;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  &:hover {
    border-color: ${(p) => p.theme.mainColor || "#B39B8E"};
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
    transform: translateY(-2px);
  }
  ${(p) => p.$unavailable && css`opacity: 0.45; pointer-events: none;`}
`;

export const SvcCardImg = styled.div`
  height: 160px;
  background: ${(p) => p.$bg || "#F5F3F0"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  position: relative;
`;

export const SvcBadge = styled.span`
  position: absolute;
  top: 8px;
  inset-inline-start: 8px;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 3px 8px;
  border-radius: 4px;
  background: ${(p) => p.$type === "popular" ? (p.theme.mainColor || "#B39B8E") : p.$type === "new" ? "#262324" : "#C4A265"};
  color: #fff;
`;

export const SvcCardBody = styled.div`
  padding: 16px;
`;

export const SvcCardCat = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.mainColor || "#B39B8E"};
  text-transform: uppercase;
  letter-spacing: 0.06em;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const SvcCardName = styled.h3`
  font-weight: 600;
  font-size: 0.875rem;
  margin-bottom: 4px;
  line-height: 1.3;
`;

export const SvcCardDesc = styled.p`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0"};
  line-height: 1.5;
  margin-bottom: 12px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const SvcCardMeta = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  svg { width: 12px; height: 12px; }
`;

export const SvcCardPrice = styled.span`
  font-weight: 700;
  font-size: 0.75rem;
  color: ${(p) => p.theme.textColor || "#262324"};
`;

export const SvcCardCTA = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 36px;
  margin-top: 12px;
  border: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "30" : "#E8E4E0"};
  border-radius: 999px;
  font-size: 0.6875rem;
  font-weight: 600;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  transition: all 0.15s;
  &:hover {
    border-color: ${(p) => p.theme.mainColor || "#262324"};
    color: ${(p) => p.theme.textColor || "#262324"};
    background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "08" : "#F5F3F0"};
  }
`;

// ── Service Rail ──
export const SvcRail = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 8px;
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
  ${SvcCard} { flex: 0 0 260px; scroll-snap-align: start; }
`;

// ── Service Nav ──
export const SvcNav = styled.nav`
  position: sticky;
  top: 60px;
  z-index: 30;
  background: #fff;
  border-bottom: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  margin: 16px 0 24px;
`;

export const SvcNavList = styled.ul`
  display: flex;
  gap: 4px;
  overflow-x: auto;
  scrollbar-width: none;
  padding: 8px 0;
  &::-webkit-scrollbar { display: none; }
`;

export const SvcNavItem = styled.button`
  padding: 8px 12px;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.15s;
  border: none;
  background: ${(p) => p.$active ? (p.theme.mainColor || "#262324") : "none"};
  color: ${(p) => p.$active ? "#fff" : (p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0")};
  cursor: pointer;
  &:hover { color: ${(p) => p.$active ? "#fff" : (p.theme.textColor || "#262324")}; background: ${(p) => p.$active ? (p.theme.mainColor || "#262324") : (p.theme.mainColor ? p.theme.mainColor + "08" : "#F5F3F0")}; }
`;

// ── Service Grid ──
export const SvcGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  @media (min-width: 480px) { grid-template-columns: repeat(2, 1fr); }
  @media (min-width: 1024px) { grid-template-columns: repeat(3, 1fr); }
`;

export const SvcSectionBlock = styled.section`
  margin-bottom: 32px;
`;

export const SvcSectionTitle = styled.h3`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.375rem;
  font-weight: 500;
  margin-bottom: 16px;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

// ── Packages ──
export const PkgGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

export const PkgCard = styled.div`
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid #C4A265;
  background: #FBF5EA;
  position: relative;
`;

export const PkgRibbon = styled.span`
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  padding: 4px 12px;
  background: #C4A265;
  color: #fff;
  font-size: 0.6875rem;
  font-weight: 700;
  border-radius: 999px;
  letter-spacing: 0.04em;
`;

export const PkgBody = styled.div`
  padding: 20px;
`;

export const PkgName = styled.h3`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 8px;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

export const PkgDesc = styled.p`
  font-size: 0.75rem;
  color: #7A7472;
  line-height: 1.6;
  margin-bottom: 12px;
`;

export const PkgIncludes = styled.ul`
  margin-bottom: 16px;
  li {
    font-size: 0.6875rem;
    color: #7A7472;
    padding: 4px 0;
    display: flex;
    align-items: center;
    gap: 8px;
    svg { width: 14px; height: 14px; color: #5A8A6C; flex-shrink: 0; }
  }
`;

export const PkgFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PkgPrice = styled.span`
  font-weight: 700;
  font-size: 1.125rem;
`;

export const PkgPriceOld = styled.span`
  font-weight: 400;
  font-size: 0.75rem;
  color: #A9A3A0;
  text-decoration: line-through;
  margin-inline-start: 8px;
`;

// ── Trust Grid ──
export const TrustGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-top: 24px;
  @media (min-width: 640px) { grid-template-columns: repeat(4, 1fr); }
`;

export const TrustCard = styled.div`
  text-align: center;
  padding: 20px 12px;
  border: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  border-radius: 14px;
`;

export const TrustIcon = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EAE5"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.25rem;
`;

export const TrustTitle = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
  margin-bottom: 4px;
`;

export const TrustText = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0"};
  line-height: 1.5;
`;

// ── Team ──
export const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 24px;
  @media (min-width: 640px) { grid-template-columns: repeat(4, 1fr); }
`;

export const TeamCard = styled.div`
  text-align: center;
`;

export const TeamAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 999px;
  background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EAE5"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  font-size: 1.5rem;
  font-family: 'Crimson Pro', Georgia, serif;
  font-weight: 600;
  color: ${(p) => p.theme.mainColor || "#B39B8E"};
  overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const TeamName = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
`;

export const TeamRole = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.mainColor || "#B39B8E"};
  margin-bottom: 4px;
`;

export const TeamBio = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0"};
  line-height: 1.5;
`;

// ── Testimonials ──
export const TestiGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-top: 24px;
  @media (min-width: 640px) { grid-template-columns: repeat(2, 1fr); }
`;

export const TestiCard = styled.div`
  padding: 20px;
  border: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  border-radius: 14px;
  background: #fff;
`;

export const TestiStars = styled.div`
  display: flex;
  gap: 1px;
  color: #D4A843;
  margin-bottom: 12px;
`;

export const TestiQuote = styled.p`
  font-size: 0.75rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  line-height: 1.7;
  font-style: italic;
  margin-bottom: 12px;
`;

export const TestiAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const TestiAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 999px;
  background: ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EAE5"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${(p) => p.theme.mainColor || "#B39B8E"};
`;

export const TestiName = styled.div`
  font-weight: 600;
  font-size: 0.75rem;
`;

export const TestiService = styled.div`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "60" : "#A9A3A0"};
`;

// ── Booking CTA ──
export const BookingCTASection = styled.section`
  padding: 48px 0;
`;

export const BookingCTAInner = styled.div`
  text-align: center;
  padding: 40px 24px;
  background: ${(p) => p.theme.mainColor || "#262324"};
  border-radius: 20px;
  color: #fff;
`;

export const BookingCTATitle = styled.h2`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.75rem;
  font-weight: 500;
  margin-bottom: 12px;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

export const BookingCTAText = styled.p`
  font-size: 0.75rem;
  opacity: 0.7;
  margin-bottom: 24px;
  max-width: 400px;
  margin-inline: auto;
`;

export const BookingCTABtns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
`;

// ── FAQ ──
export const FAQSection = styled.section`
  padding: 48px 0;
  background: #fff;
`;

export const FAQList = styled.div`
  max-width: 680px;
  margin: 24px auto 0;
`;

export const FAQItem = styled.div`
  border-bottom: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
`;

export const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: start;
  cursor: pointer;
  border: none;
  background: none;
  gap: 16px;
  svg { flex-shrink: 0; transition: transform 0.15s; }
  ${(p) => p.$open && css`svg { transform: rotate(180deg); }`}
`;

export const FAQAnswer = styled.div`
  font-size: 0.75rem;
  color: ${(p) => p.theme.textColor ? p.theme.textColor + "88" : "#7A7472"};
  line-height: 1.7;
  padding-bottom: 16px;
  display: ${(p) => (p.$open ? "block" : "none")};
`;

// ── Footer ──
export const FooterWrap = styled.footer`
  background: ${(p) => p.theme.mainColor || "#262324"};
  color: #fff;
  padding: 48px 0 24px;
  margin-top: 32px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 32px;
  @media (min-width: 640px) { grid-template-columns: 2fr 1fr 1fr 1fr; }
`;

export const FooterColTitle = styled.div`
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(255,255,255,0.4);
  margin-bottom: 12px;
`;

export const FooterBrand = styled.div`
  font-family: 'Crimson Pro', Georgia, serif;
  font-size: 1.375rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  margin-bottom: 8px;
  ${(p) => p.$rtl && css`font-family: 'Cairo', 'Segoe UI', sans-serif;`}
`;

export const FooterDesc = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.5);
  line-height: 1.5;
`;

export const FooterListItem = styled.div`
  font-size: 0.75rem;
  color: rgba(255,255,255,0.55);
  cursor: pointer;
  padding: 4px 0;
  &:hover { color: rgba(255,255,255,0.8); }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255,255,255,0.06);
  font-size: 0.6875rem;
  color: rgba(255,255,255,0.3);
  strong { color: rgba(255,255,255,0.45); }
`;

// ── Mobile Bar ──
export const MobileBar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 80;
  background: #fff;
  border-top: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  display: flex;
  padding-bottom: env(safe-area-inset-bottom, 0px);
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  @media (min-width: 1024px) { display: none; }
`;

export const MobileBarItem = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 10px;
  font-weight: 500;
  color: ${(p) => p.$active ? (p.theme.mainColor || "#262324") : (p.theme.textColor ? p.theme.textColor + "55" : "#A9A3A0")};
  transition: color 0.15s;
  padding: 4px 0;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
  ${(p) => p.$book && css`color: ${p.theme.mainColor || "#B39B8E"}; font-weight: 600;`}
`;

// ── Overlay / Detail Panel ──
export const OverlayBackdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  z-index: 100;
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
`;

export const DetailPanel = styled.div`
  position: fixed;
  z-index: 101;
  background: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);

  /* Mobile: bottom sheet */
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 92vh;
  border-radius: 20px 20px 0 0;
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }

  /* Desktop: right panel */
  @media (min-width: 1024px) {
    top: 0;
    bottom: 0;
    inset-inline-end: 0;
    left: auto;
    right: auto;
    width: 520px;
    max-height: 100vh;
    border-radius: 20px 0 0 20px;
    animation: slideInEnd 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    @keyframes slideInEnd { from { transform: translateX(100%); } to { transform: translateX(0); } }
  }
`;

export const DetailClose = styled.button`
  position: absolute;
  top: 12px;
  inset-inline-end: 12px;
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 999px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  overscroll-behavior: contain;
`;

export const DetailImg = styled.div`
  width: 100%;
  height: 220px;
  background: ${(p) => p.$bg || "#F5F3F0"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;

export const DetailBody = styled.div`
  padding: 20px 16px;
`;

export const DetailFooter = styled.div`
  padding: 12px 16px;
  border-top: 1px solid ${(p) => p.theme.mainColor ? p.theme.mainColor + "15" : "#F0EDEA"};
  display: flex;
  gap: 12px;
  align-items: center;
  ${Btn} { flex: 1; height: 44px; }
`;

// ── Toast ──
export const ToastWrap = styled.div`
  position: fixed;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 12px);
  inset-inline: 16px;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  pointer-events: none;
  @media (min-width: 1024px) { bottom: 24px; left: auto; right: 24px; align-items: flex-end; }
`;

export const Toast = styled.div`
  background: ${(p) => p.$type === "success" ? "#5A8A6C" : p.$type === "error" ? "#C44B3F" : "#262324"};
  color: #fff;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 0.75rem;
  font-weight: 500;
  box-shadow: 0 8px 32px rgba(0,0,0,0.08);
  pointer-events: auto;
  max-width: 340px;
  width: 100%;
  animation: toastIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes toastIn { from { transform: translateY(12px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
`;
