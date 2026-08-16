import styled, { keyframes, css } from "styled-components";

/* ═══════════════════════════════════════
   Keyframes
   ═══════════════════════════════════════ */
export const fadeIn = keyframes`from{opacity:0}to{opacity:1}`;
export const slideUp = keyframes`from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}`;
export const slideInEnd = keyframes`from{transform:translateX(100%)}to{transform:translateX(0)}`;
export const slideInStart = keyframes`from{transform:translateX(-100%)}to{transform:translateX(0)}`;
const shimmer = keyframes`from{background-position:200% 0}to{background-position:-200% 0}`;
const toastIn = keyframes`from{transform:translateY(12px);opacity:0}to{transform:translateY(0);opacity:1}`;
const pulse = keyframes`0%{transform:scale(1)}50%{transform:scale(1.15)}100%{transform:scale(1)}`;

/* ═══════════════════════════════════════
   Page Wrapper
   ═══════════════════════════════════════ */
export const PageWrapper = styled.div`
  min-height: 100dvh;
  background: ${p => p.theme.backgroundColor || "#FAFAF8"};
  color: ${p => p.theme.textColor || "#1A1816"};
  font-family: ${p => p.theme.font || "'DM Sans'"}, system-ui, -apple-system, sans-serif;
  font-size: 0.875rem;
  line-height: 1.5;
  direction: ${p => p.$rtl ? "rtl" : "ltr"};
  padding-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:1024px){ padding-bottom: 0; }
  *:focus-visible { outline: 2px solid ${p => p.theme.mainColor || "#9E7C0C"}; outline-offset: 2px; }
`;

/* ═══════════════════════════════════════
   Overlay
   ═══════════════════════════════════════ */
export const Overlay = styled.div`
  position: fixed; inset: 0; z-index: 100;
  background: rgba(0,0,0,0.45);
  animation: ${fadeIn} 250ms ease;
`;

/* ═══════════════════════════════════════
   HEADER
   ═══════════════════════════════════════ */
export const HeaderWrap = styled.header`
  position: sticky; top: 0; z-index: 50;
  height: 56px;
  background: ${p => p.theme.BoxColor || "#fff"};
  border-bottom: 1px solid #E5E2DB;
  transition: box-shadow 250ms;
  ${p => p.$scrolled && css`box-shadow: 0 4px 16px rgba(0,0,0,0.07);`}
  @media(min-width:1024px){ height: 64px; }
`;

export const HeaderInner = styled.div`
  max-width: 1200px; margin: 0 auto; height: 100%;
  display: flex; align-items: center; gap: 12px;
  padding: 0 16px;
  @media(min-width:640px){ padding: 0 24px; }
  @media(min-width:1280px){ padding: 0 32px; }
`;

export const HeaderLogo = styled.div`
  width: 34px; height: 34px; border-radius: 8px; overflow: hidden; flex-shrink: 0;
  background: ${p => p.theme.categoryActive || "#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 0.875rem; color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const HeaderBrand = styled.span`
  font-family: 'Literata', Georgia, serif;
  font-weight: 700; font-size: 1rem; color: ${p => p.theme.textColor || "#1A1816"}; white-space: nowrap;
  ${p => p.$rtl && css`font-family: 'Almarai', 'Segoe UI', sans-serif;`}
  @media(min-width:1024px){ font-size: 1.125rem; }
`;

export const HeaderSearchDesktop = styled.div`
  display: none;
  @media(min-width:768px){
    display: flex; align-items: center; flex: 1; max-width: 480px;
    margin-inline-start: auto;
  }
  input {
    width: 100%; height: 36px; border-radius: 999px; border: 1px solid #E5E2DB;
    background: ${p => p.theme.searchbackground || "#F4F2ED"}; padding: 0 16px; font-size: 0.75rem;
    color: ${p => p.theme.searchTextColor || "#1A1816"}; outline: none; font-family: inherit;
    &::placeholder { color: #918C86; }
    &:focus { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
  }
`;

export const HeaderActions = styled.div`
  display: flex; align-items: center; gap: 6px; margin-inline-start: auto;
  @media(min-width:768px){ margin-inline-start: 12px; }
`;

export const HeaderBtn = styled.button`
  position: relative; display: flex; align-items: center; justify-content: center;
  width: 36px; height: 36px; border-radius: 999px; border: none; cursor: pointer;
  background: transparent; color: ${p => p.theme.textColor || "#1A1816"};
  transition: background 150ms, color 150ms;
  &:hover { background: #F4F2ED; }
  svg { width: 18px; height: 18px; }
  @media(min-width:768px){
    &.mobile-only { display: none; }
  }
  @media(min-width:1024px){ width: 40px; height: 40px; }
`;

export const HeaderLangBtn = styled.button`
  height: 32px; padding: 0 10px; border-radius: 6px; border: 1px solid #E5E2DB;
  background: transparent; color: #5C5752; font-size: 0.75rem; font-weight: 700;
  letter-spacing: 0.02em; cursor: pointer; transition: all 150ms;
  &:hover { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; color: ${p => p.theme.textColor || "#1A1816"}; }
`;

export const CartBadge = styled.span`
  position: absolute; top: 2px; inset-inline-end: 2px;
  min-width: 16px; height: 16px; border-radius: 999px; padding: 0 4px;
  background: ${p => p.theme.mainColor || "#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
  line-height: 1;
`;

/* ═══════════════════════════════════════
   RESTAURANT INFO
   ═══════════════════════════════════════ */
export const RestoSection = styled.section`
  padding: 20px 16px 16px;
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 16px; align-items: flex-start;
  @media(min-width:640px){ padding: 24px 24px 20px; }
`;

export const RestoBody = styled.div`
  flex: 1; min-width: 0;
`;

export const RestoAvatar = styled.div`
  width: 64px; height: 64px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: ${p => p.theme.categoryActive || "#F7F1DC"};
  display: flex; align-items: center; justify-content: center;
  img { width: 100%; height: 100%; object-fit: cover; }
  span { font-family: 'Literata', Georgia, serif; font-weight: 700; font-size: 1.5rem;
    color: ${p => p.theme.mainColor || "#9E7C0C"}; }
  @media(min-width:1024px){ width: 72px; height: 72px; }
`;

export const RestoName = styled.h1`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; margin: 0 0 4px;
  color: ${p => p.theme.textColor || "#1A1816"};
  @media(min-width:1024px){ font-size: 1.625rem; }
`;

export const RestoTagline = styled.p`
  font-size: 0.75rem; color: #5C5752; margin: 0 0 12px;
`;

export const RestoMeta = styled.div`
  display: flex; align-items: center; gap: 8px 16px; flex-wrap: wrap;
  font-size: 0.6875rem; color: #5C5752; margin-bottom: 12px;
  svg { width: 14px; height: 14px; }
`;

export const MetaDot = styled.span`
  width: 6px; height: 6px; border-radius: 50%;
  background: ${p => p.$open ? "#1B7A3A" : "#B5342A"};
`;

export const RestoActions = styled.div`
  display: flex; gap: 8px; flex-wrap: wrap;
`;

export const ActionBtn = styled.button`
  display: flex; align-items: center; gap: 6px;
  height: 36px; padding: 0 16px; border-radius: 999px;
  border: 1px solid #E5E2DB; background: ${p => p.theme.BoxColor || "#fff"}; cursor: pointer;
  font-size: 0.6875rem; font-weight: 600; color: ${p => p.theme.textColor || "#1A1816"};
  transition: border-color 150ms, background 150ms;
  svg { width: 14px; height: 14px; color: #918C86; }
  &:hover { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

/* ═══════════════════════════════════════
   CATEGORY NAV (mobile sticky pills)
   ═══════════════════════════════════════ */
export const CatNavWrap = styled.nav`
  position: sticky; top: 56px; z-index: 40;
  background: ${p => p.theme.BoxColor || "#fff"};
  border-bottom: 1px solid #E5E2DB;
  @media(min-width:1024px){ top: 64px; display: none; }
`;

export const CatNavInner = styled.div`
  overflow-x: auto; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  padding: 0 16px;
  max-width: 1200px; margin: 0 auto;
`;

export const CatNavList = styled.div`
  display: flex; gap: 4px; padding: 8px 0;
  width: max-content;
`;

export const CatNavItem = styled.button`
  flex-shrink: 0; scroll-snap-align: start;
  padding: 8px 12px; border-radius: 999px; border: none;
  font-size: 0.75rem; font-weight: 500; white-space: nowrap; cursor: pointer;
  transition: all 150ms; font-family: inherit;
  background: ${p => p.$active
    ? (p.theme.textColor || "#1A1816")
    : "transparent"};
  color: ${p => p.$active
    ? "#fff"
    : (p.theme.categoryUnactiveText || "#5C5752")};
  ${p => p.$active && `font-weight: 600;`}
  &:hover {
    background: ${p => p.$active ? undefined : "#F4F2ED"};
  }
`;

/* ═══════════════════════════════════════
   MENU LAYOUT (sidebar + products)
   ═══════════════════════════════════════ */
export const MenuLayout = styled.div`
  max-width: 1200px; margin: 0 auto;
  display: flex; gap: 24px;
  padding: 16px 16px 0;
  @media(min-width:640px){ padding: 16px 24px 0; }
  @media(min-width:1280px){ padding: 16px 32px 0; }
`;

export const Sidebar = styled.aside`
  display: none;
  @media(min-width:1024px){
    display: block; flex-shrink: 0; width: 200px;
    position: sticky; top: calc(64px + 16px);
    max-height: calc(100vh - 64px - 32px); overflow-y: auto;
    scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  }
`;

export const SidebarItem = styled.button`
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 10px 12px; border: none; border-radius: 10px;
  cursor: pointer; text-align: start; font-size: 0.75rem; font-weight: 500;
  transition: all 150ms; background: transparent; font-family: inherit;
  color: ${p => p.$active
    ? (p.theme.categoryActiveText || "#1A1816")
    : (p.theme.categoryUnactiveText || "#5C5752")};
  ${p => p.$active && css`
    background: ${p.theme.categoryActive || "#F7F1DC"};
    font-weight: 600;
    border-inline-start: 3px solid ${p.theme.mainColor || "#9E7C0C"};
  `}
  &:hover { background: ${p => p.$active ? undefined : "#F4F2ED"}; }
`;

export const SidebarCount = styled.span`
  font-size: 0.625rem; color: #918C86;
  min-width: 20px; height: 20px; border-radius: 999px;
  background: #F4F2ED; display: flex; align-items: center; justify-content: center;
`;

export const ProductsArea = styled.div`
  flex: 1; min-width: 0; padding-bottom: 24px;
`;

/* ═══════════════════════════════════════
   PRODUCT SECTION
   ═══════════════════════════════════════ */
export const SectionWrap = styled.section`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h2`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-weight: 600; font-size: 1.125rem; margin: 0 0 16px;
  color: ${p => p.theme.textColor || "#1A1816"};
  @media(min-width:1024px){ font-size: 1.375rem; }
`;

/* ═══════════════════════════════════════
   PRODUCT GRID
   ═══════════════════════════════════════ */
export const ProductGrid = styled.div`
  display: grid; gap: 12px;
  grid-template-columns: 1fr;
  @media(min-width:480px){ grid-template-columns: repeat(2, 1fr); }
  @media(min-width:1024px){ grid-template-columns: repeat(3, 1fr); }
  @media(min-width:1280px){ gap: 16px; }
`;

/* ═══════════════════════════════════════
   PRODUCT CARD
   ═══════════════════════════════════════ */
export const Card = styled.div`
  position: relative; background: ${p => p.theme.BoxColor || "#fff"};
  border: 1px solid #F0EDE7; border-radius: 10px; overflow: hidden;
  cursor: pointer; transition: border-color 250ms;
  display: flex; flex-direction: row;
  ${p => p.$unavailable && css`opacity: 0.5; pointer-events: none;`}
  @media(min-width:480px){ flex-direction: column; }
  &:hover { border-color: #E5E2DB; }
  &::after {
    content: ''; position: absolute; bottom: 0; left: 0; right: 0;
    height: 2px; background: ${p => p.theme.mainColor || "#9E7C0C"};
    opacity: 0; transition: opacity 250ms;
  }
  &:hover::after { opacity: 1; }
`;

export const CardImage = styled.div`
  width: 110px; height: 110px; flex-shrink: 0; overflow: hidden;
  background: #F4F2ED; position: relative;
  @media(min-width:480px){ width: 100%; height: 0; padding-bottom: 75%; }
  img { width: 100%; height: 100%; object-fit: cover; display: block;
    @media(min-width:480px){ position: absolute; inset: 0; }
  }
`;

export const CardBadge = styled.span`
  position: absolute; top: 8px; inset-inline-start: 8px; z-index: 2;
  padding: 2px 8px; border-radius: 999px; font-size: 9px; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.06em;
  background: ${p => p.$type === "new" ? "#E8F5EC" : p.$type === "sale" ? "#FDE8E6" : p.$type === "best" ? (p.theme.mainColor || "#9E7C0C") : p.$type === "featured" ? "#1A1816" : "#F7F1DC"};
  color: ${p => p.$type === "new" ? "#1B7A3A" : p.$type === "sale" ? "#B5342A" : p.$type === "best" ? "#fff" : p.$type === "featured" ? "#fff" : (p.theme.mainColor || "#9E7C0C")};
`;

export const CardBody = styled.div`
  flex: 1; min-width: 0; padding: 12px;
  display: flex; flex-direction: column;
`;

export const CardName = styled.h3`
  font-weight: 600; font-size: 0.75rem; margin: 0 0 4px;
  color: ${p => p.theme.BoxTextColor || "#1A1816"};
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`;

export const CardDesc = styled.p`
  font-size: 0.6875rem; line-height: 1.4; color: #918C86; margin: 0 0 auto;
  display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;
`;

export const CardFooter = styled.div`
  display: flex; align-items: center; justify-content: space-between; margin-top: 8px;
`;

export const CardPrice = styled.span`
  font-weight: 700; font-size: 0.75rem;
  color: ${p => p.theme.BoxPriceColor || p.theme.mainColor || "#9E7C0C"};
`;

export const CardOldPrice = styled.span`
  font-size: 0.625rem; color: #918C86; text-decoration: line-through;
  margin-inline-start: 6px;
`;

export const CardAddBtn = styled.button`
  width: 30px; height: 30px; border-radius: 999px; border: none; cursor: pointer;
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: center;
  transition: background 150ms; flex-shrink: 0;
  svg { width: 14px; height: 14px; }
  &:hover { opacity: 0.85; }
  &:active { transform: scale(0.9); }
`;

export const UnavailableLabel = styled.span`
  font-size: 0.625rem; font-weight: 600; color: #B5342A;
`;

/* ═══════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════ */
export const FooterWrap = styled.footer`
  background: ${p => p.theme.textColor || "#1A1816"};
  color: rgba(255,255,255,0.7); padding: 48px 16px 24px;
  margin-bottom: calc(56px + env(safe-area-inset-bottom, 0px));
  @media(min-width:640px){ padding: 48px 24px 24px; }
  @media(min-width:1024px){ margin-bottom: 0; }
`;

export const FooterInner = styled.div`
  max-width: 1200px; margin: 0 auto;
`;

export const FooterGrid = styled.div`
  display: grid; gap: 32px;
  grid-template-columns: 1fr;
  @media(min-width:640px){ grid-template-columns: 2fr 1fr 1fr; }
  @media(min-width:1024px){ grid-template-columns: 2fr 1fr 1fr 1fr; }
`;

export const FooterColTitle = styled.h4`
  font-size: 0.6875rem; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.08em; color: rgba(255,255,255,0.5); margin: 0 0 16px;
`;

export const FooterBrand = styled.div`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-size: 1.375rem; font-weight: 700; color: #fff; margin-bottom: 12px;
`;

export const FooterText = styled.p`
  font-size: 0.75rem; color: rgba(255,255,255,0.5); margin: 0 0 6px;
  line-height: 1.5;
`;

export const FooterLink = styled.a`
  display: block; font-size: 0.75rem; color: rgba(255,255,255,0.5);
  text-decoration: none; margin-bottom: 8px; transition: color 150ms;
  &:hover { color: rgba(255,255,255,0.9); }
`;

export const FooterSocials = styled.div`
  display: flex; gap: 8px; margin-top: 16px;
  a {
    width: 36px; height: 36px; border-radius: 999px; display: flex;
    align-items: center; justify-content: center;
    border: 1px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.5);
    text-decoration: none; transition: all 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.3); }
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid rgba(255,255,255,0.1); margin-top: 32px; padding-top: 16px;
  display: flex; flex-wrap: wrap; justify-content: space-between; gap: 8px;
  font-size: 0.6875rem; color: rgba(255,255,255,0.3);
  a { color: rgba(255,255,255,0.4); text-decoration: none; &:hover { color: rgba(255,255,255,0.7); } }
`;

/* ═══════════════════════════════════════
   BOTTOM NAV (mobile)
   ═══════════════════════════════════════ */
export const BNavWrap = styled.nav`
  position: fixed; bottom: 0; left: 0; right: 0; z-index: 90;
  height: calc(56px + env(safe-area-inset-bottom, 0px));
  padding-bottom: env(safe-area-inset-bottom, 0px);
  background: ${p => p.theme.bottomTabBarBackgroundColor || "#fff"};
  border-top: 1px solid #F0EDE7;
  display: flex; align-items: center; justify-content: space-around;
  @media(min-width:1024px){ display: none; }
`;

export const BNavItem = styled.button`
  display: flex; flex-direction: column; align-items: center; gap: 2px;
  border: none; background: none; cursor: pointer; position: relative;
  padding: 6px 0; min-width: 48px; font-family: inherit;
  color: ${p => p.$active
    ? (p.theme.textColor || "#1A1816")
    : "#918C86"};
  font-size: 10px; font-weight: ${p => p.$active ? 600 : 500};
  transition: color 150ms;
  svg { width: 20px; height: 20px; }
`;

export const BNavBadge = styled.span`
  position: absolute; top: 0; inset-inline-end: 2px;
  min-width: 14px; height: 14px; border-radius: 999px; padding: 0 3px;
  background: ${p => p.theme.mainColor || "#9E7C0C"}; color: #fff;
  font-size: 9px; font-weight: 700; display: flex; align-items: center; justify-content: center;
`;

/* ═══════════════════════════════════════
   CART BAR (floating above bottom nav)
   ═══════════════════════════════════════ */
export const CartBarWrap = styled.div`
  position: fixed; z-index: 85;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 8px);
  left: 16px; right: 16px;
  @media(min-width:1024px){ display: none !important; }
`;

export const CartBarBtn = styled.button`
  width: 100%; height: 52px; border: none; border-radius: 14px; cursor: pointer;
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; display: flex; align-items: center; justify-content: space-between;
  padding: 0 16px 0 12px; animation: ${slideUp} 400ms cubic-bezier(0.16,1,0.3,1);
  font-family: inherit; box-shadow: 0 8px 30px rgba(0,0,0,0.1);
  &:hover { background: #2E2C29; }
`;

export const CartBarCount = styled.span`
  display: flex; align-items: center; justify-content: center;
  width: 24px; height: 24px; border-radius: 999px; background: rgba(255,255,255,0.2);
  font-size: 0.6875rem; font-weight: 700; margin-inline-end: 10px;
`;

export const CartBarLabel = styled.span`
  font-size: 0.75rem; font-weight: 600;
`;

export const CartBarTotal = styled.span`
  font-size: 1rem; font-weight: 700;
`;

/* ═══════════════════════════════════════
   SEARCH OVERLAY (mobile)
   ═══════════════════════════════════════ */
export const SearchOvWrap = styled.div`
  position: fixed; inset: 0; z-index: 200;
  background: ${p => p.theme.backgroundColor || "#FAFAF8"};
  animation: ${fadeIn} 200ms ease;
  display: flex; flex-direction: column;
  @media(min-width:768px){ display: none; }
`;

export const SearchOvHeader = styled.div`
  display: flex; align-items: center; gap: 12px;
  padding: 12px 16px; border-bottom: 1px solid #F0EDE7;
`;

export const SearchOvInput = styled.input`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${p => p.theme.searchbackground || "#F4F2ED"};
  color: ${p => p.theme.searchTextColor || "#1A1816"};
  padding: 0 16px; font-size: 0.875rem; outline: none; font-family: inherit;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const SearchOvCancel = styled.button`
  border: none; background: none; cursor: pointer; font-family: inherit;
  font-size: 0.75rem; font-weight: 600; color: ${p => p.theme.mainColor || "#9E7C0C"};
`;

export const SearchOvBody = styled.div`
  flex: 1; overflow-y: auto; padding: 16px;
`;

export const SearchResultItem = styled.div`
  display: flex; align-items: center; gap: 12px;
  padding: 10px 0; border-bottom: 1px solid #F0EDE7; cursor: pointer;
  &:last-child { border-bottom: none; }
`;

export const SearchResultImg = styled.div`
  width: 48px; height: 48px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const SearchResultInfo = styled.div`
  flex: 1; min-width: 0;
  h4 { font-size: 0.75rem; font-weight: 600; margin: 0 0 2px; color: ${p => p.theme.textColor || "#1A1816"}; }
  p { font-size: 0.6875rem; color: #918C86; margin: 0; }
`;

export const SearchResultPrice = styled.span`
  font-size: 0.75rem; font-weight: 700; flex-shrink: 0;
  color: ${p => p.theme.mainColor || "#9E7C0C"};
`;

export const SearchEmpty = styled.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.75rem;
`;

/* ═══════════════════════════════════════
   MORE SHEET (bottom sheet)
   ═══════════════════════════════════════ */
export const SheetWrap = styled.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  border-radius: 20px 20px 0 0; max-height: 70vh; overflow-y: auto;
  padding: 12px 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${slideUp} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){ max-width: 480px; margin: 0 auto; }
`;

export const SheetHandle = styled.div`
  width: 36px; height: 4px; border-radius: 999px;
  background: #E5E2DB; margin: 0 auto 16px;
`;

export const SheetItem = styled.button`
  display: flex; align-items: center; gap: 14px; width: 100%;
  padding: 14px 24px; border: none; background: none; cursor: pointer;
  font-size: 0.875rem; font-weight: 500; text-align: start; font-family: inherit;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
  transition: background 150ms;
  svg { width: 20px; height: 20px; color: #918C86; }
  &:hover { background: #F4F2ED; }
`;

/* ═══════════════════════════════════════
   PRODUCT DETAIL DRAWER
   ═══════════════════════════════════════ */
export const PdOverlay = styled.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; align-items: flex-end; justify-content: center;
  background: rgba(0,0,0,0.45); animation: ${fadeIn} 250ms;
  @media(min-width:1024px){ align-items: center; }
`;

export const PdDrawer = styled.div`
  position: relative; width: 100%; max-height: 92vh;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  border-radius: 20px 20px 0 0; overflow: hidden;
  display: flex; flex-direction: column;
  animation: ${slideUp} 400ms cubic-bezier(0.16,1,0.3,1);
  @media(min-width:1024px){
    max-width: 560px; max-height: 85vh;
    border-radius: 20px;
  }
`;

export const PdClose = styled.button`
  position: absolute; top: 12px; inset-inline-end: 12px; z-index: 5;
  width: 32px; height: 32px; border-radius: 999px;
  background: #fff; border: none; cursor: pointer; box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  display: flex; align-items: center; justify-content: center;
  color: #1A1816; transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #F4F2ED; }
`;

export const PdScroll = styled.div`
  flex: 1; overflow-y: auto; overscroll-behavior: contain;
`;

export const PdImageWrap = styled.div`
  position: relative; width: 100%; height: 280px;
  background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
  @media(min-width:1024px){ height: 320px; }
`;

export const PdNoImage = styled.div`
  width: 100%; padding: 32px 0; text-align: center; background: #F4F2ED;
  font-size: 3rem;
`;

export const PdBody = styled.div`
  padding: 20px;
`;

export const PdName = styled.h2`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.375rem; line-height: 1.25; margin: 0 0 8px;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
`;

export const PdDesc = styled.div`
  font-size: 0.75rem; color: #5C5752; line-height: 1.6; margin: 0 0 12px;
  p { margin: 0; }
`;

export const PdPriceRow = styled.div`
  display: flex; align-items: center; gap: 8px; margin-bottom: 16px;
`;

export const PdPrice = styled.span`
  font-size: 1.125rem; font-weight: 700;
  color: ${p => p.theme.mainColor || "#9E7C0C"};
`;

export const PdOldPrice = styled.span`
  font-size: 0.875rem; color: #918C86; text-decoration: line-through;
`;

export const PdDiscountBadge = styled.span`
  font-size: 0.6875rem; font-weight: 600; padding: 2px 8px;
  border-radius: 999px; background: #FDE8E6; color: #B5342A;
`;

export const PdOptionsWrap = styled.div`
  border-top: 1px solid #F0EDE7; padding-top: 16px; margin-bottom: 16px;
`;

export const PdInstructionLabel = styled.label`
  display: block; font-size: 0.6875rem; color: #918C86;
  margin-bottom: 8px; font-weight: 600;
`;

export const PdTextarea = styled.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${p => p.theme.searchbackground || "#F4F2ED"};
  color: ${p => p.theme.textColor || "#1A1816"};
  padding: 12px; font-size: 0.75rem; resize: none; outline: none;
  font-family: inherit; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const PdFooter = styled.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  display: flex; align-items: center; gap: 12px;
`;

export const QtyControl = styled.div`
  display: flex; align-items: center; gap: 4px;
  border-radius: 999px; border: 1px solid #E5E2DB; overflow: hidden;
  button {
    width: 36px; height: 40px; border: none; background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #5C5752; transition: background 150ms;
    svg { width: 16px; height: 16px; }
    &:hover { background: #F4F2ED; }
  }
  span { width: 28px; text-align: center; font-size: 0.875rem; font-weight: 600;
    color: ${p => p.theme.textColor || "#1A1816"}; }
`;

export const AddToCartBtn = styled.button`
  flex: 1; height: 44px; border: none; border-radius: 999px; cursor: pointer;
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; font-size: 0.75rem; font-weight: 600;
  transition: opacity 150ms; font-family: inherit;
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

/* ═══════════════════════════════════════
   CART DRAWER (slides from right/left)
   ═══════════════════════════════════════ */
export const CartOvWrap = styled.div`
  position: fixed; inset: 0; z-index: 110;
  display: flex; justify-content: ${p => p.$rtl ? "flex-start" : "flex-end"};
  background: rgba(0,0,0,0.45); animation: ${fadeIn} 200ms;
`;

export const CartDrawerEl = styled.div`
  width: 100%; max-width: 420px; height: 100%;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  display: flex; flex-direction: column;
  animation: ${p => p.$rtl ? slideInStart : slideInEnd} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: -20px 0 50px rgba(0,0,0,0.15);
`;

export const CartHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 16px 20px; border-bottom: 1px solid #F0EDE7; flex-shrink: 0;
`;

export const CartTitle = styled.h2`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1.125rem;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
`;

export const CartCloseBtn = styled.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  transition: background 150ms;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`;

export const CartBody = styled.div`
  flex: 1; overflow-y: auto; padding: 0 20px;
`;

export const CartEmpty = styled.div`
  text-align: center; padding: 48px 0; color: #918C86; font-size: 0.875rem;
`;

export const CartItemRow = styled.div`
  display: flex; gap: 12px; padding: 16px 0;
  border-bottom: 1px solid #F0EDE7;
  &:last-child { border-bottom: none; }
`;

export const CartItemImg = styled.div`
  width: 56px; height: 56px; border-radius: 10px; overflow: hidden; flex-shrink: 0;
  background: #F4F2ED;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const CartItemInfo = styled.div`
  flex: 1; min-width: 0;
`;

export const CartItemName = styled.h4`
  font-size: 0.75rem; font-weight: 600; margin: 0 0 2px;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
`;

export const CartItemPrice = styled.span`
  font-size: 0.6875rem; color: ${p => p.theme.mainColor || "#9E7C0C"};
`;

export const CartItemNote = styled.p`
  font-size: 0.625rem; color: #918C86; margin: 4px 0 0; font-style: italic;
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;

export const CartItemQty = styled.div`
  display: flex; align-items: center; gap: 4px; margin-top: 8px;
  border-radius: 8px; border: 1px solid #E5E2DB; width: fit-content;
  button {
    width: 28px; height: 28px; border: none; background: none; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    color: #5C5752; transition: color 150ms;
    svg { width: 12px; height: 12px; }
    &:hover { color: ${p => p.theme.textColor || "#1A1816"}; }
  }
  span { width: 20px; text-align: center; font-size: 0.6875rem; font-weight: 600;
    color: ${p => p.theme.popupTextColor || "#1A1816"}; }
`;

export const CartItemTotal = styled.span`
  font-size: 0.75rem; font-weight: 700;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
  align-self: flex-end;
`;

export const CartItemDelete = styled.button`
  border: none; background: none; cursor: pointer; padding: 0; flex-shrink: 0;
  color: #918C86; transition: color 150ms;
  svg { width: 14px; height: 14px; }
  &:hover { color: #B5342A; }
`;

export const CartFooter = styled.div`
  padding: 16px 20px; border-top: 1px solid #F0EDE7; flex-shrink: 0;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
`;

export const CartTotalRow = styled.div`
  display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;
  span:first-child { font-size: 0.75rem; color: #5C5752; }
  span:last-child { font-size: 1.125rem; font-weight: 700; color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const CartCheckoutBtn = styled.button`
  width: 100%; height: 48px; border: none; border-radius: 999px; cursor: pointer;
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  transition: opacity 150ms;
  &:hover { opacity: 0.9; }
`;

/* ─── Checkout step inside cart drawer ─── */
export const CheckoutLabel = styled.label`
  display: block; font-size: 0.6875rem; font-weight: 600; color: #918C86;
  margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.04em;
`;

export const CheckoutInput = styled.input`
  width: 100%; height: 44px; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${p => p.theme.searchbackground || "#F4F2ED"};
  color: ${p => p.theme.popupTextColor || "#1A1816"};
  padding: 0 16px; font-size: 0.75rem; outline: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const CheckoutTextarea = styled.textarea`
  width: 100%; border-radius: 10px; border: 1px solid #E5E2DB;
  background: ${p => p.theme.searchbackground || "#F4F2ED"};
  color: ${p => p.theme.popupTextColor || "#1A1816"};
  padding: 12px 16px; font-size: 0.75rem; outline: none; resize: none; font-family: inherit;
  margin-bottom: 12px; box-sizing: border-box;
  &::placeholder { color: #918C86; }
  &:focus { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const OrderTypeRow = styled.div`
  display: flex; gap: 8px; margin-bottom: 16px;
`;

export const OrderTypeBtn = styled.button`
  flex: 1; height: 40px; border-radius: 10px; border: 1px solid;
  font-size: 0.75rem; font-weight: 600; cursor: pointer; transition: all 150ms; font-family: inherit;
  background: ${p => p.$active ? (p.theme.mainColor || "#9E7C0C") : (p.theme.popupbackgroundColor || "#fff")};
  color: ${p => p.$active ? "#fff" : "#5C5752"};
  border-color: ${p => p.$active ? (p.theme.mainColor || "#9E7C0C") : "#E5E2DB"};
  &:hover { border-color: ${p => p.theme.mainColor || "#9E7C0C"}; }
`;

export const CheckoutActions = styled.div`
  display: flex; gap: 8px;
`;

export const CheckoutBackBtn = styled.button`
  height: 48px; padding: 0 20px; border-radius: 10px;
  border: 1px solid #E5E2DB; background: ${p => p.theme.popupbackgroundColor || "#fff"}; cursor: pointer;
  font-size: 0.75rem; font-weight: 600; color: #5C5752; font-family: inherit;
  transition: border-color 150ms;
  &:hover { border-color: #918C86; }
`;

export const WhatsAppBtn = styled.button`
  flex: 1; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; font-size: 0.875rem; font-weight: 700; font-family: inherit;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  transition: opacity 150ms;
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
`;

/* ═══════════════════════════════════════
   POPUP (generic bottom sheet for
   contact, feedback, share, location)
   ═══════════════════════════════════════ */
export const PopupWrap = styled.div`
  position: fixed; inset-inline: 0; bottom: 0; z-index: 110;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  border-radius: 20px 20px 0 0; max-height: 80vh; overflow-y: auto;
  padding: 0 0 calc(16px + env(safe-area-inset-bottom, 0px));
  animation: ${slideUp} 400ms cubic-bezier(0.16,1,0.3,1);
  box-shadow: 0 -8px 30px rgba(0,0,0,0.1);
  @media(min-width:1024px){
    max-width: 480px; inset-inline: auto;
    left: 50%; top: 50%;
    transform: translate(-50%, -50%);
    bottom: auto;
    border-radius: 20px; max-height: 85vh;
  }
`;

export const PopupHeader = styled.div`
  display: flex; align-items: center; justify-content: space-between;
  padding: 20px 24px 16px; position: sticky; top: 0; z-index: 2;
  background: ${p => p.theme.popupbackgroundColor || "#fff"};
  border-bottom: 1px solid #F0EDE7;
`;

export const PopupTitle = styled.h3`
  font-family: ${p => p.$rtl ? "'Almarai', sans-serif" : "'Literata', Georgia, serif"};
  font-weight: 700; font-size: 1rem;
  color: ${p => p.theme.popupTextColor || "#1A1816"};
  margin: 0;
`;

export const PopupClose = styled.button`
  width: 32px; height: 32px; border-radius: 999px; border: none; cursor: pointer;
  background: #F4F2ED; color: #5C5752;
  display: flex; align-items: center; justify-content: center;
  svg { width: 16px; height: 16px; }
  &:hover { background: #E5E2DB; }
`;

export const PopupBody = styled.div`
  padding: 20px 24px;
`;

export const PopupBtn = styled.button`
  display: flex; align-items: center; justify-content: center; gap: 8px;
  width: 100%; height: 48px; border: none; border-radius: 10px; cursor: pointer;
  font-size: 0.875rem; font-weight: 700; transition: opacity 150ms; font-family: inherit;
  background: ${p => p.$variant === "whatsapp" ? "#25D366"
    : p.$variant === "outline" ? (p.theme.popupbackgroundColor || "#fff")
    : (p.theme.textColor || "#1A1816")};
  color: ${p => p.$variant === "outline" ? (p.theme.textColor || "#1A1816") : "#fff"};
  border: ${p => p.$variant === "outline" ? "1px solid #E5E2DB" : "none"};
  svg { width: 18px; height: 18px; }
  &:hover { opacity: 0.9; }
  &:disabled { opacity: 0.4; cursor: not-allowed; }
  & + & { margin-top: 8px; }
`;

/* ═══════════════════════════════════════
   ANNOUNCEMENT BAR
   ═══════════════════════════════════════ */
export const AnnounceBar = styled.div`
  background: ${p => p.theme.textColor || "#1A1816"};
  color: #fff; padding: 8px 16px; font-size: 0.75rem; font-weight: 500;
  text-align: center; letter-spacing: 0.01em;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  strong { color: ${p => p.theme.categoryActive || "#F7F1DC"}; }
`;

export const AnnounceClose = styled.button`
  border: none; background: none; color: rgba(255,255,255,0.5); cursor: pointer;
  padding: 0; display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: #fff; }
`;

/* ═══════════════════════════════════════
   TOAST NOTIFICATIONS
   ═══════════════════════════════════════ */
export const ToastWrap = styled.div`
  position: fixed; z-index: 300;
  bottom: calc(56px + env(safe-area-inset-bottom, 0px) + 60px + 16px);
  left: 16px; right: 16px;
  display: flex; flex-direction: column; gap: 8px; pointer-events: none;
  @media(min-width:768px){ left: auto; right: 24px; bottom: 24px; max-width: 360px; }
`;

export const ToastItem = styled.div`
  background: ${p => p.$type === "success" ? "#1B7A3A" : p.$type === "error" ? "#B5342A" : "#1A1816"};
  color: #fff; padding: 12px 16px; border-radius: 10px; font-size: 0.75rem; font-weight: 500;
  box-shadow: 0 4px 16px rgba(0,0,0,0.15);
  animation: ${toastIn} 300ms ease;
  pointer-events: auto;
`;

/* ═══════════════════════════════════════
   CATEGORY IMAGE (nav pills & sidebar)
   ═══════════════════════════════════════ */
export const CatNavImg = styled.img`
  width: 18px; height: 18px; border-radius: 4px; object-fit: cover;
  margin-inline-end: 4px; flex-shrink: 0;
`;

export const SidebarImg = styled.img`
  width: 22px; height: 22px; border-radius: 5px; object-fit: cover;
  margin-inline-end: 6px; flex-shrink: 0;
`;

/* ═══════════════════════════════════════
   SECTION HEADER WITH COUNT
   ═══════════════════════════════════════ */
export const SectionHeader = styled.div`
  display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px;
`;

export const SectionCount = styled.span`
  font-size: 0.6875rem; color: #918C86; font-weight: 500;
`;

/* ═══════════════════════════════════════
   FEATURED / BEST-SELLER RAIL
   ═══════════════════════════════════════ */
/* ═══════════════════════════════════════
   PRODUCT RAIL (horizontal scroll for
   Best Sellers, Offers virtual sections)
   ═══════════════════════════════════════ */
export const ProductRail = styled.div`
  display: flex; gap: 12px; overflow-x: auto; padding-bottom: 8px;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`;

export const RailCard = styled.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${p => p.theme.BoxColor || "#fff"}; border: 1px solid #F0EDE7;
  border-radius: 10px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`;

export const RailCardImg = styled.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const RailCardBody = styled.div`
  padding: 8px 10px;
`;

export const RailCardName = styled.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${p => p.theme.BoxTextColor || "#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;

export const RailCardPrice = styled.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${p => p.theme.BoxPriceColor || p.theme.mainColor || "#9E7C0C"};
`;

/* ═══════════════════════════════════════
   PROMO CARDS (Today's Specials)
   ═══════════════════════════════════════ */
export const PromoSection = styled.section`
  padding: 0 16px 16px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 0 24px 16px; }
`;

export const PromoRail = styled.div`
  display: flex; gap: 12px; overflow-x: auto;
  scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`;

export const PromoCard = styled.div`
  flex: 0 0 280px; scroll-snap-align: start; border-radius: 14px;
  overflow: hidden; cursor: pointer; transition: transform 250ms;
  &:hover { transform: translateY(-2px); }
  @media(min-width:640px){ flex: 0 0 320px; }
`;

export const PromoCardBg = styled.div`
  padding: 20px; min-height: 140px; display: flex; flex-direction: column;
  justify-content: flex-end; color: #fff;
  background: ${p => p.$bg || "linear-gradient(135deg, #1A1816 0%, #3D3A36 100%)"};
  @media(min-width:640px){ min-height: 160px; }
`;

export const PromoBadge = styled.span`
  font-size: 9px; font-weight: 700; text-transform: uppercase;
  letter-spacing: 0.06em; opacity: 0.8; margin-bottom: 6px;
`;

export const PromoTitle = styled.h3`
  font-family: 'Literata', Georgia, serif; font-weight: 700;
  font-size: 1.125rem; margin: 0 0 4px; line-height: 1.2;
`;

export const PromoSub = styled.p`
  font-size: 0.6875rem; opacity: 0.7; margin: 0 0 10px;
`;

export const PromoCta = styled.span`
  display: inline-block; padding: 6px 14px; border-radius: 999px;
  background: rgba(255,255,255,0.2); backdrop-filter: blur(4px);
  font-size: 0.6875rem; font-weight: 600; width: fit-content;
`;

export const FeaturedRail = styled.div`
  display: flex; gap: 12px; overflow-x: auto; padding: 0 16px 20px;
  max-width: 1200px; margin: 0 auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
`;

export const FeaturedRailTitle = styled.div`
  padding: 16px 16px 12px;
  max-width: 1200px; margin: 0 auto;
  @media(min-width:640px){ padding: 16px 24px 12px; }
`;

export const FeaturedCard = styled.div`
  flex: 0 0 160px; scroll-snap-align: start;
  background: ${p => p.theme.BoxColor || "#fff"}; border: 1px solid #F0EDE7;
  border-radius: 14px; overflow: hidden; cursor: pointer;
  transition: border-color 250ms;
  &:hover { border-color: #E5E2DB; }
`;

export const FeaturedCardImg = styled.div`
  width: 100%; height: 120px; background: #F4F2ED; overflow: hidden;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const FeaturedCardBody = styled.div`
  padding: 8px 10px;
`;

export const FeaturedCardName = styled.h4`
  font-size: 0.6875rem; font-weight: 600; margin: 0 0 2px;
  color: ${p => p.theme.BoxTextColor || "#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;

export const FeaturedCardPrice = styled.span`
  font-size: 0.6875rem; font-weight: 700;
  color: ${p => p.theme.BoxPriceColor || p.theme.mainColor || "#9E7C0C"};
`;

/* ═══════════════════════════════════════
   CARD CUSTOMIZABLE / FROM LABEL
   ═══════════════════════════════════════ */
export const CardFromLabel = styled.span`
  font-size: 0.5625rem; color: #918C86; font-weight: 500;
  margin-inline-end: 2px;
`;

export const CardCustomLabel = styled.span`
  display: block; font-size: 0.5625rem; color: ${p => p.theme.mainColor || "#9E7C0C"};
  font-weight: 500; margin-top: 2px;
`;

/* ═══════════════════════════════════════
   STATUS DOT (open/closed)
   ═══════════════════════════════════════ */
export const StatusDot = styled.span`
  display: inline-flex; align-items: center; gap: 4px;
  &::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: ${p => p.$open ? "#1B7A3A" : "#B5342A"};
  }
  color: ${p => p.$open ? "#1B7A3A" : "#B5342A"};
  font-weight: 600;
`;

/* ═══════════════════════════════════════
   RELATED PRODUCTS (in product detail)
   ═══════════════════════════════════════ */
export const RelatedWrap = styled.div`
  margin-top: 20px; border-top: 1px solid #F0EDE7; padding-top: 16px;
`;

export const RelatedTitle = styled.h4`
  font-size: 0.6875rem; font-weight: 600; color: #918C86;
  text-transform: uppercase; letter-spacing: 0.06em; margin: 0 0 12px;
`;

export const RelatedRail = styled.div`
  display: flex; gap: 10px; overflow-x: auto;
  scrollbar-width: none; &::-webkit-scrollbar { display: none; }
`;

export const RelatedItem = styled.div`
  flex: 0 0 120px; cursor: pointer;
`;

export const RelatedItemImg = styled.div`
  width: 100%; height: 80px; border-radius: 10px; overflow: hidden;
  background: #F4F2ED; margin-bottom: 6px;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

export const RelatedItemName = styled.p`
  font-size: 0.625rem; font-weight: 600; margin: 0 0 2px;
  color: ${p => p.theme.textColor || "#1A1816"};
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
`;

export const RelatedItemPrice = styled.span`
  font-size: 0.625rem; font-weight: 700;
  color: ${p => p.theme.mainColor || "#9E7C0C"};
`;

/* ═══════════════════════════════════════
   SEARCH CLEAR BUTTON
   ═══════════════════════════════════════ */
export const SearchClearBtn = styled.button`
  position: absolute; inset-inline-end: 12px; top: 50%; transform: translateY(-50%);
  border: none; background: none; cursor: pointer; color: #918C86; padding: 4px;
  display: flex; align-items: center;
  svg { width: 14px; height: 14px; }
  &:hover { color: ${p => p.theme.textColor || "#1A1816"}; }
`;
