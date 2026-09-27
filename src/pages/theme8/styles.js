import styled, { createGlobalStyle, keyframes } from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

/* ── Global Style with Design Tokens ── */
export const Theme8GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Almarai:wght@400;700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Literata:opsz,wght@7..72,400;7..72,600;7..72,700&display=swap');

  :root {
    --c-primary: ${p => p.$mainColor || "#1A1816"};
    --c-primary-hover: ${p => p.$mainColorHover || "#2E2C29"};
    --c-accent: #9E7C0C;
    --c-accent-hover: #7A6009;
    --c-accent-light: #F7F1DC;
    --c-accent-lighter: #FBF8EE;
    --c-bg: ${p => p.$bgColor || "#FAFAF8"};
    --c-surface: #FFFFFF;
    --c-surface-alt: #F4F2ED;
    --c-surface-raised: #FFFFFF;
    --c-text: ${p => p.$textColor || "#1A1816"};
    --c-text-2: #5C5752;
    --c-text-3: #918C86;
    --c-text-inv: #FFFFFF;
    --c-border: #E5E2DB;
    --c-border-light: #F0EDE7;
    --c-success: #1B7A3A;
    --c-success-light: #E8F5EC;
    --c-warning: #C67F17;
    --c-warning-light: #FEF3D6;
    --c-error: #B5342A;
    --c-error-light: #FDE8E6;
    --c-sale: #B5342A;
    --c-overlay: rgba(0, 0, 0, 0.45);
    --font-display: 'Literata', Georgia, 'Times New Roman', serif;
    --font-body: 'DM Sans', system-ui, -apple-system, sans-serif;
    --font-ar: 'Almarai', 'Segoe UI', Tahoma, sans-serif;
    --text-xs: 0.6875rem;
    --text-sm: 0.75rem;
    --text-base: 0.875rem;
    --text-md: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.375rem;
    --text-2xl: 1.625rem;
    --text-3xl: 2rem;
    --sp-1: 4px; --sp-2: 8px; --sp-3: 12px; --sp-4: 16px;
    --sp-5: 20px; --sp-6: 24px; --sp-8: 32px; --sp-10: 40px;
    --sp-12: 48px; --sp-16: 64px;
    --r-sm: 6px; --r-md: 10px; --r-lg: 14px; --r-xl: 20px; --r-full: 999px;
    --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
    --shadow-md: 0 4px 16px rgba(0,0,0,0.07);
    --shadow-lg: 0 8px 30px rgba(0,0,0,0.1);
    --shadow-xl: 0 20px 50px rgba(0,0,0,0.15);
    --header-h: 56px;
    --cat-nav-h: 44px;
    --bnav-h: 56px;
    --cart-bar-h: 52px;
    --container-max: 1200px;
    --sidebar-w: 200px;
    --ease-out: cubic-bezier(0.16, 1, 0.3, 1);
    --ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
    --dur-fast: 150ms;
    --dur-normal: 250ms;
    --dur-slow: 400ms;
    --safe-bottom: env(safe-area-inset-bottom, 0px);
  }

  body.no-scroll { overflow: hidden; }
`;

/* ── Keyframes ── */
export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
export const slideUp = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;
export const slideInEnd = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

/* ── Layout Components ── */
export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  background: var(--c-bg);
  font-family: var(--font-body);
  font-size: var(--text-base);
  line-height: 1.5;
  color: var(--c-text);
  -webkit-font-smoothing: antialiased;
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

export const PageContainer = styled.div`
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`;

export const MenuLayout = styled.div`
  display: flex;
  gap: var(--sp-6);
  width: 100%;
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`;

export const ProductsArea = styled.div`
  flex: 1;
  min-width: 0;
  padding-block: var(--sp-4);
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: ${p => p.$show ? "flex" : "none"};
  align-items: flex-end;
  justify-content: center;
`;

export const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  background: var(--c-overlay);
  animation: ${fadeIn} var(--dur-normal) var(--ease-out);
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: var(--sp-4);
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

/* ── Legacy exports for backward compat ── */
export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const BlurOverlay = styled.div`
  position: fixed;
  z-index: 4;
  top: 0; left: 0;
  width: 100%; height: 100%;
  backdrop-filter: ${p => p.showPopup ? "blur(5px)" : "blur(0px)"};
  -webkit-backdrop-filter: ${p => p.showPopup ? "blur(5px)" : "blur(0px)"};
  transition: all 1s ease-in-out;
  pointer-events: none;
`;

export const DetailsBtn = styled.div`
  position: fixed; bottom: 20px; right: 20px;
  width: 40px; height: 40px;
  background-color: ${p => p.theme.mainColor};
  border-radius: 50%;
  display: flex; align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  justify-content: center;
  color: white; font-size: 25px; cursor: pointer;
`;

export const CartBtn = styled.div`
  position: fixed; bottom: 70px; right: 20px;
  width: 40px; height: 40px;
  background-color: ${p => p.theme.mainColor};
  border-radius: 50%;
  display: flex; align-items: center;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  justify-content: center;
  color: white; font-size: 25px; cursor: pointer;
`;

export const CartCount = styled.div`
  position: absolute; left: -5px; top: -5px;
  width: 20px; height: 20px; border-radius: 50%;
  font-size: 10px;
  display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 6px rgba(0,0,0,0.5);
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
`;

export const Cart = styled(IoBag)`width: 20px; height: 20px;`;
export const Location = styled(FaLocationArrow)`transform: rotate(270deg); width: 20px; height: 20px;`;

export const ParamProductContainer = styled.div`
  position: fixed; height: 100vh; width: 100%;
  display: flex; align-items: center; justify-content: center;
  color: ${p => p.theme.textColor};
  background-color: ${p => p.theme.backgroundColor};
`;
