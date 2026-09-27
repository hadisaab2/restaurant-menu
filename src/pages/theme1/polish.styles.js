import { createGlobalStyle } from "styled-components";
import { NavBarContainer, NavContent, Logo, GlobeLanguageButton, MobileMenuButton } from "../theme3/NavigationBar/styles";
import { SearchProductContainer, Backdrop } from "../../product-detail/floatingProductShell.styles";
import { ProductHeader, BackBtn, CopyButton } from "../theme3/ProductParam/styles";
import { ItemName, ItemDescription, ItemInfoWrapper, ItemInfo, InfoContainer, Image, ImagesContainer, ButtonWrapper, AddToCart, QuantityPrice, QuantityWrapper, Plus, Minus, Instruction } from "../theme2/ProductParam/styles";
import { Container as CartContainer } from "../theme3/popup/cart/styles";
import { WizardContainer, StepHeader, StepContent, ProgressStep, StepCloseButton, NavButton, StepIndicator } from "../theme3/popup/cart/Wizard/styles";
import { ItemsList, CartItem, ItemName as CartItemName, ItemTopRow, ItemActions, QuantityButton } from "../theme3/popup/cart/Wizard/CartStepStyles";

// Shared component presentation is scoped to Theme1; other themes retain their styles.
export const Theme1Polish = createGlobalStyle`
  [data-theme-one] {
    --t1-header-height: 64px;
    color: ${(p) => p.theme.textColor || "#222"};
    min-height: 100dvh;
  }
  [data-theme-one] *, [data-theme-one] *::before, [data-theme-one] *::after { box-sizing: border-box; }
  [data-theme-one] button, [data-theme-one] input, [data-theme-one] select, [data-theme-one] textarea { font-family: inherit; }
  [data-theme-one] button:focus-visible, [data-theme-one] a:focus-visible, [data-theme-one] input:focus-visible, [data-theme-one] select:focus-visible, [data-theme-one] textarea:focus-visible {
    outline: 2px solid ${(p) => p.theme.mainColor || "currentColor"}; outline-offset: 3px;
  }
  [data-theme-one] ${NavBarContainer} { box-shadow: 0 1px 0 rgba(127,127,127,.15); }
  [data-theme-one] ${NavContent} { height: var(--t1-header-height); max-width: 1280px; padding-inline: 16px; }
  [data-theme-one] ${Logo} { max-height: 52px; max-width: min(160px, 35vw); }
  [data-theme-one] ${GlobeLanguageButton}, [data-theme-one] ${MobileMenuButton} { min-width: 44px; min-height: 44px; }
  [data-theme-one] ${SearchProductContainer} {
    animation: none; width: min(720px, calc(100% - 32px)); height: auto;
    max-height: calc(100dvh - 48px); border-radius: 20px;
    background: ${(p) => p.theme.popupbackgroundColor || p.theme.backgroundColor || "#fff"};
    color: ${(p) => p.theme.popupTextColor || p.theme.textColor || "#222"};
    z-index: 1501;
  }
  [data-theme-one] ${Backdrop} { z-index: 1500; animation: none; }
  [data-theme-one] ${ProductHeader} { padding: 12px 16px; flex-shrink: 0; }
  [data-theme-one] ${BackBtn}, [data-theme-one] ${CopyButton} { width: 44px; height: 44px; border: 0; }
  [data-theme-one] ${ImagesContainer} { width: 100%; margin-top: 0; min-height: 0; height: clamp(220px, 35vh, 320px); padding: 0 16px; flex-shrink: 0; }
  [data-theme-one] ${Image} { width: 100%; height: 100%; object-fit: contain; border-radius: 14px; }
  [data-theme-one] ${InfoContainer} { width: 100%; animation: none; }
  [data-theme-one] ${ItemInfoWrapper} { width: 100%; }
  [data-theme-one] ${ItemInfo} { width: 100%; padding: 20px; gap: 14px; }
  [data-theme-one] ${ItemName} { font-size: 1.375rem; font-weight: 700; line-height: 1.5; text-align: start; }
  [data-theme-one] ${ItemDescription} { font-size: .9375rem; line-height: 1.75; font-weight: 400; }
  [data-theme-one] ${Instruction} { min-height: 48px; font-size: 1rem; border-radius: 12px; }
  [data-theme-one] ${ButtonWrapper} { position: sticky; bottom: 0; width: 100%; flex-direction: row; flex-wrap: wrap; gap: 12px; padding: 12px 16px max(12px, env(safe-area-inset-bottom)); animation: none; flex-shrink: 0; background: ${(p) => p.theme.popupbackgroundColor || p.theme.backgroundColor || "#fff"}; }
  [data-theme-one] ${QuantityWrapper} { width: 132px; height: 48px; border: 1px solid currentColor; border-radius: 12px; }
  [data-theme-one] ${Plus}, [data-theme-one] ${Minus} { min-width: 44px; min-height: 44px; background: transparent; color: inherit; border: 0; cursor: pointer; }
  [data-theme-one] ${AddToCart} { flex: 1; min-width: 160px; height: auto; min-height: 48px; display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 16px; font-size: .875rem; font-weight: 600; }
  [data-theme-one] ${QuantityPrice} { position: static; font-size: inherit; }
  [data-theme-one] ${CartContainer} { max-width: 720px; margin-inline: auto; border-radius: 24px 24px 0 0; max-height: 92dvh; transition: none; padding: 0 0 env(safe-area-inset-bottom); }
  [data-theme-one] ${WizardContainer} { padding: 20px; min-height: 0; max-height: none; overflow: visible; margin-bottom: 0; }
  [data-theme-one] ${StepHeader} { margin-block: 0 20px; }
  [data-theme-one] ${StepCloseButton} { min-width: 44px; min-height: 44px; font-size: .875rem; }
  [data-theme-one] ${ProgressStep} span { font-size: .75rem; line-height: 1.5; }
  [data-theme-one] ${StepIndicator} { box-shadow: none; }
  [data-theme-one] ${StepContent} { max-height: none; overflow: visible; min-height: 0; }
  [data-theme-one] ${ItemsList} { max-height: none; overflow: visible; padding: 0; }
  [data-theme-one] ${CartItem} { padding: 14px; box-shadow: none; border-radius: 14px; }
  [data-theme-one] ${CartItemName} { font-size: .9375rem; white-space: normal; line-height: 1.5; }
  [data-theme-one] ${ItemTopRow} { flex-wrap: wrap; }
  [data-theme-one] ${ItemActions} { flex-direction: row; flex-wrap: wrap; align-items: center; justify-content: space-between; width: 100%; }
  [data-theme-one] ${QuantityButton} { width: 44px; height: 44px; }
  [data-theme-one] ${NavButton} { box-shadow: none; min-height: 48px; border-radius: 12px; }
  [data-theme-one] ${NavButton}:hover { box-shadow: none; transform: none; }
  [data-theme-one] ${CartContainer} input, [data-theme-one] ${CartContainer} select, [data-theme-one] ${CartContainer} textarea { font-size: 1rem; min-height: 44px; }
  @media (max-width: 479px) {
    [data-theme-one] ${SearchProductContainer} { width: 100%; top: auto; bottom: 0; left: 0; transform: none; max-height: 94dvh; border-radius: 22px 22px 0 0; }
  }
  @media (prefers-reduced-motion: reduce) {
    [data-theme-one] *, [data-theme-one] *::before, [data-theme-one] *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; }
  }
`;
