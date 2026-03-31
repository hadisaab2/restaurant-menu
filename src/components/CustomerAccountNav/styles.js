import styled, { keyframes } from "styled-components";

const dropdownIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const modalIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(12px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
`;

/* —— Icon trigger (navbar) —— */
export const AccountIconWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
`;

export const AccountIconsCluster = styled.div`
  display: flex;
  align-items: center;
  gap: 0;
  flex-shrink: 0;
`;

/** Ghost icon — no filled background (navbar account / orders) */
export const AccountIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  padding: 0;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: transparent;
  color: ${(p) => p.theme?.textColor || "#1e293b"};
  box-shadow: none;
  transition: color 0.2s ease, opacity 0.2s ease, transform 0.15s ease;
  font-family: ${(p) => `${p.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};

  &:hover {
    color: ${(p) => p.theme?.mainColor || "#0f172a"};
    opacity: 1;
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px ${(p) => p.theme?.mainColor || "#3b82f6"}55;
  }

  &:active {
    transform: scale(0.96);
  }

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.95;
  }
`;

/** Navbar wishlist: Ionic outline heart (hollow center); keep separate from FA-filled icons */
export const WishlistAccountIconButton = styled(AccountIconButton)`
  svg {
    fill: none;
    stroke: currentColor;
  }
`;

/* —— Logged-in dropdown —— */
export const UserMenuDropdown = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  ${(p) => (p.$rtl ? "left: 0;" : "right: 0;")}
  min-width: 228px;
  max-width: min(280px, calc(100vw - 32px));
  background: #ffffff;
  color: #0f172a;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.06), 0 20px 40px -12px rgba(15, 23, 42, 0.18);
  z-index: 10050;
  overflow: hidden;
  animation: ${dropdownIn} 0.2s ease-out;
`;

export const UserMenuHeader = styled.div`
  padding: 14px 16px 12px;
  background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
`;

export const UserMenuName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
  letter-spacing: -0.01em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserMenuEmail = styled.div`
  font-size: 12px;
  color: #64748b;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserMenuBody = styled.div`
  padding: 6px;
`;

export const UserMenuItem = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  text-align: left;
  padding: 11px 12px;
  border: none;
  border-radius: 10px;
  background: transparent;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  color: #334155;
  transition: background 0.15s ease, color 0.15s ease;
  font-family: inherit;

  svg {
    width: 16px;
    height: 16px;
    color: #64748b;
    flex-shrink: 0;
  }

  &[data-outline-wishlist-heart="true"] svg {
    fill: none;
    stroke: currentColor;
  }

  &:hover {
    background: #f1f5f9;
    color: #0f172a;
    svg {
      color: ${(p) => p.theme?.mainColor || "#0f172a"};
    }
  }

  ${(p) =>
    p.$danger &&
    `
    &:hover {
      background: #fef2f2;
      color: #b91c1c;
      svg { color: #b91c1c; }
    }
  `}

  ${(p) =>
    p.$rtl &&
    `
    text-align: right;
    flex-direction: row-reverse;
    direction: rtl;
  `}
`;

/* —— Modal shell —— */
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  max-width: 100%;
  min-height: 100vh;
  min-height: 100dvh;
  box-sizing: border-box;
  background: rgba(15, 23, 42, 0.45);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  z-index: 10000;
  display: grid;
  place-items: center;
  place-content: center;
  padding: max(10px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right))
    max(10px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left));
  overflow: hidden;
  overscroll-behavior: contain;
  touch-action: none;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalCard = styled.div`
  position: relative;
  background: #ffffff;
  color: #0f172a;
  border-radius: 20px;
  width: min(400px, calc(100vw - 40px));
  max-width: 100%;
  max-height: min(90vh, 640px);
  margin: auto;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  animation: ${modalIn} 0.28s cubic-bezier(0.16, 1, 0.3, 1);
  font-family: ${(p) => `${p.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};
  justify-self: center;
  align-self: center;
`;

export const ModalAccentBar = styled.div`
  height: 4px;
  width: 100%;
  background: linear-gradient(
    90deg,
    ${(p) => p.theme?.mainColor || "#0f172a"},
    ${(p) => p.theme?.mainColor || "#0f172a"}cc
  );
  flex-shrink: 0;
`;

export const ModalCloseGhost = styled.button`
  position: absolute;
  top: 10px;
  ${(p) => (p.$rtl ? "left: 10px;" : "right: 10px;")}
  z-index: 2;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 10px;
  background: rgba(15, 23, 42, 0.04);
  color: #64748b;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.08);
    color: #0f172a;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const ModalHero = styled.div`
  padding: 16px 24px 6px;
  padding-right: ${(p) => (p.$rtl ? "24px" : "48px")};
  padding-left: ${(p) => (p.$rtl ? "48px" : "24px")};
  text-align: ${(p) => (p.$rtl ? "right" : "left")};
`;

export const ModalTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
  line-height: 1.3;
`;

export const ModalSubtitle = styled.p`
  margin: 6px 0 0;
  font-size: 14px;
  line-height: 1.5;
  color: #64748b;
`;

export const TabSegmentWrap = styled.div`
  display: flex;
  margin: 10px 20px 0;
  padding: 4px;
  background: #f1f5f9;
  border-radius: 12px;
  gap: 4px;
`;

export const TabSegmentBtn = styled.button`
  flex: 1;
  padding: 10px 12px;
  border: none;
  border-radius: 9px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
  font-family: inherit;
  color: #64748b;
  background: transparent;

  ${(p) =>
    p.$active &&
    `
    background: #ffffff;
    color: #0f172a;
    box-shadow: 0 1px 3px rgba(15, 23, 42, 0.08);
  `}
`;

export const Form = styled.form`
  padding: 12px 24px 6px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  letter-spacing: 0.02em;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #0f172a;
  background: #fafafa;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;
  font-family: inherit;

  &::placeholder {
    color: #94a3b8;
  }

  &:hover {
    border-color: #cbd5e1;
    background: #fff;
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme?.mainColor || "#3b82f6"};
    background: #fff;
    box-shadow: 0 0 0 3px ${(p) => p.theme?.mainColor || "#3b82f6"}22;
  }
`;

export const ErrorText = styled.div`
  padding: 10px 12px;
  border-radius: 10px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  color: #b91c1c;
  font-size: 13px;
  line-height: 1.4;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  margin-top: 4px;
  padding: 14px 18px;
  border: none;
  border-radius: 12px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  color: #ffffff;
  background: ${(p) => p.theme?.mainColor || "#0f172a"};
  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.08);
  transition: filter 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;

  &:hover {
    filter: brightness(1.06);
    box-shadow: 0 4px 14px ${(p) => p.theme?.mainColor || "#0f172a"}44;
  }

  &:active {
    transform: scale(0.99);
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
    transform: none;
  }
`;

export const ModalFooter = styled.div`
  padding: 8px 24px 16px;
`;

export const TextLinkButton = styled.button`
  width: 100%;
  padding: 12px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 500;
  color: #64748b;
  cursor: pointer;
  font-family: inherit;
  border-radius: 10px;
  transition: color 0.15s ease, background 0.15s ease;

  &:hover {
    color: #0f172a;
    background: #f8fafc;
  }
`;

/* Legacy name used in older code paths */
export const AccountButton = PrimaryButton;

/* —— Orders / addresses drawer —— */
export const DrawerCard = styled.div`
  position: fixed;
  top: max(12px, env(safe-area-inset-top));
  bottom: max(12px, env(safe-area-inset-bottom));
  width: min(400px, calc(100vw - 24px));
  max-height: calc(100dvh - 24px);
  background: #ffffff;
  color: #0f172a;
  z-index: 10001;
  display: flex;
  flex-direction: column;
  padding: 0;
  font-family: ${(p) => `${p.theme?.font || "system-ui"}, "Noto Kufi Arabic"`};
  border-radius: 18px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  overflow: hidden;
  box-shadow: 0 24px 48px rgba(15, 23, 42, 0.16);
  ${(p) =>
    p.$rtl
      ? `
    left: max(12px, env(safe-area-inset-left));
    right: auto;
  `
      : `
    right: max(12px, env(safe-area-inset-right));
    left: auto;
  `}
  animation: ${modalIn} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

export const DrawerHeader = styled.div`
  padding: 22px 22px 18px;
  border-bottom: 1px solid rgba(15, 23, 42, 0.06);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 12px;
  background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
`;

export const DrawerTitleBlock = styled.div`
  min-width: 0;
`;

export const DrawerTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: #0f172a;
`;

export const DrawerSubtitle = styled.div`
  font-size: 13px;
  color: #64748b;
  margin-top: 4px;
`;

export const CloseBtn = styled.button`
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 12px;
  background: rgba(15, 23, 42, 0.05);
  color: #64748b;
  cursor: pointer;
  transition: background 0.15s ease, color 0.15s ease;

  &:hover {
    background: rgba(15, 23, 42, 0.09);
    color: #0f172a;
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

export const OrderList = styled.div`
  flex: 1;
  overflow: auto;
  padding: 16px 20px 28px;
  min-height: 0;
`;

export const OrderCard = styled.div`
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.06);
  background: linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: rgba(15, 23, 42, 0.12);
    box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  }
`;

export const OrderLines = styled.ul`
  list-style: none;
  margin: 0 0 12px;
  padding: 0;
  border-top: 1px solid rgba(15, 23, 42, 0.06);
  padding-top: 10px;
`;

export const OrderLine = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  line-height: 1.45;
  color: #475569;
  margin-bottom: 6px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const OrderLineName = styled.span`
  flex: 1;
  min-width: 0;
  color: #334155;
  font-weight: 500;
`;

export const OrderLineQty = styled.span`
  flex-shrink: 0;
  color: #64748b;
  font-variant-numeric: tabular-nums;
`;

export const OrderActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 4px;
  flex-wrap: wrap;
`;

export const ReorderButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid ${(p) => p.theme?.mainColor || "#0f172a"}33;
  background: #ffffff;
  color: ${(p) => p.theme?.mainColor || "#0f172a"};
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease, opacity 0.15s ease;

  &:hover:not(:disabled) {
    background: ${(p) => p.theme?.mainColor || "#0f172a"}0d;
    border-color: ${(p) => p.theme?.mainColor || "#0f172a"}55;
  }

  &:disabled {
    opacity: 0.55;
    cursor: not-allowed;
  }

  svg {
    width: 14px;
    height: 14px;
  }
`;

export const OrderMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 8px;
`;

export const OrderId = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.01em;
`;

export const OrderDate = styled.span`
  font-size: 12px;
  color: #64748b;
  text-align: right;
`;

export const OrderFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  flex-wrap: wrap;
`;

export const OrderTotal = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #0f172a;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 600;
  text-transform: capitalize;
  letter-spacing: 0.02em;
  background: ${(p) => p.$bg || "#f1f5f9"};
  color: ${(p) => p.$fg || "#475569"};
`;

export const EmptyOrders = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: #64748b;
  font-size: 14px;
  line-height: 1.6;
`;

export const LoadingOrders = styled.div`
  text-align: center;
  padding: 40px 24px;
  font-size: 14px;
  color: #64748b;
`;

export const DrawerTabs = styled.div`
  padding: 4px 20px 14px;
  flex-shrink: 0;
`;

export const OrderMetaExtra = styled.div`
  font-size: 12px;
  color: #64748b;
  margin: 0 0 10px;
  line-height: 1.45;
`;

export const OrderTypePill = styled.span`
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: #475569;
  margin-bottom: 4px;
`;

export const AddressCard = styled.div`
  padding: 14px 16px;
  margin-bottom: 12px;
  border-radius: 14px;
  border: 1px solid rgba(15, 23, 42, 0.08);
  background: #fff;
`;

export const AddressLabelRow = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 6px;
`;

export const AddressBody = styled.div`
  font-size: 13px;
  color: #475569;
  line-height: 1.45;
  margin-bottom: 10px;
  white-space: pre-wrap;
`;

export const AddressToolbar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: flex-end;
`;

export const SmallGhostBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 10px;
  border-radius: 8px;
  border: 1px solid rgba(15, 23, 42, 0.12);
  background: #fff;
  font-size: 12px;
  font-weight: 600;
  color: #475569;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f8fafc;
    border-color: rgba(15, 23, 42, 0.2);
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

export const DangerMiniBtn = styled(SmallGhostBtn)`
  color: #b91c1c;
  border-color: rgba(185, 28, 28, 0.25);
  &:hover {
    background: #fef2f2;
    border-color: rgba(185, 28, 28, 0.4);
  }
`;

export const AddAddressButton = styled.button`
  width: 100%;
  margin-top: 4px;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px dashed rgba(15, 23, 42, 0.2);
  background: #fafafa;
  font-size: 14px;
  font-weight: 600;
  color: ${(p) => p.theme?.mainColor || "#0f172a"};
  cursor: pointer;
  font-family: inherit;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover {
    background: #f1f5f9;
    border-color: rgba(15, 23, 42, 0.3);
  }
`;

export const AddressFormWrap = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-bottom: 8px;
`;

export const CheckboxRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  font-size: 13px;
  color: #334155;

  input[type="checkbox"] {
    margin-top: 3px;
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }
`;

export const CheckboxLabel = styled.label`
  cursor: pointer;
  line-height: 1.4;
`;

export const TextAreaField = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 12px 14px;
  border-radius: 12px;
  border: 1px solid #e2e8f0;
  font-size: 15px;
  color: #0f172a;
  background: #fafafa;
  font-family: inherit;
  resize: vertical;
  min-height: 96px;
  transition: border-color 0.15s ease, background 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    border-color: #cbd5e1;
    background: #fff;
  }

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme?.mainColor || "#3b82f6"};
    background: #fff;
    box-shadow: 0 0 0 3px ${(p) => p.theme?.mainColor || "#3b82f6"}22;
  }

  &::placeholder {
    color: #94a3b8;
  }
`;

/* TabRow / TabBtn kept for any import compatibility — map to new names in JSX */
export const TabRow = TabSegmentWrap;
export const TabBtn = TabSegmentBtn;

export const OrderRow = OrderCard;
