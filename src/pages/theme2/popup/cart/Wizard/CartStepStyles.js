import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const CartStepContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 380px;
  overflow-y: auto;
  padding-bottom: 12px;
  flex: 1;
  min-height: 0;
  padding-right: 4px;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
    border-radius: 4px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: ${(p) => p.theme.popupbackgroundColor || "#ffffff"};
  border-radius: 14px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}30`;
  }};
  transition: box-shadow 0.2s ease, transform 0.2s ease;
  animation: ${fadeIn} 0.25s ease;

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }
`;

/* ── Top row: image | info | actions ── */
export const ItemTopRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 10px;
`;

export const ItemImage = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`;

export const ItemName = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.popupTextColor || "#1a1a1a"};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* right column: price + stepper + delete */
export const ItemActions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`;

export const ItemPrice = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  white-space: nowrap;
`;

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  background: ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}12`;
  }};
  padding: 3px 5px;
  border-radius: 20px;
`;

export const QuantityButton = styled.button`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  color: ${(p) => p.theme.popupbackgroundColor || "#ffffff"};
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;
  flex-shrink: 0;

  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  }
  &:active {
    transform: scale(0.9);
  }
  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.popupTextColor || "#1a1a1a"};
  min-width: 20px;
  text-align: center;
`;

export const DeleteButton = styled.button`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  border: none;
  background: transparent;
  color: ${(p) => p.theme.popupTextColor || "#999"};
  font-size: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.45;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

  svg { font-size: 11px; }

  &:hover {
    opacity: 1;
    color: #e53935;
    transform: scale(1.15);
  }
  &:active {
    transform: scale(0.9);
  }
`;

/* ── Customisations row ── */
export const CustomizationsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 4px;
`;

const basePill = `
  display: inline-flex;
  align-items: center;
  font-size: 10px;
  font-weight: 600;
  border-radius: 20px;
  padding: 2px 8px;
  line-height: 1.5;
  white-space: nowrap;
`;

export const SizePill = styled.span`
  ${basePill}
  border: 1px solid ${(p) => {
    const c = p.theme.popupTextColor || "#1a1a1a";
    return `${c}50`;
  }};
  color: ${(p) => p.theme.popupTextColor || "#1a1a1a"};
  background: transparent;
`;

export const AddonChip = styled.span`
  ${basePill}
  background: ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}18`;
  }};
  color: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  border: 1px solid ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}35`;
  }};
`;

export const RemovalChip = styled.span`
  ${basePill}
  background: transparent;
  color: ${(p) => p.theme.popupTextColor || "#999"};
  border: 1px dashed ${(p) => {
    const c = p.theme.popupTextColor || "#999";
    return `${c}40`;
  }};
  opacity: 0.65;
  text-decoration: line-through;
`;

export const NoteText = styled.div`
  font-size: 10px;
  font-style: italic;
  color: ${(p) => p.theme.popupTextColor || "#999"};
  opacity: 0.7;
  margin-top: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

/* legacy plain-text fallback */
export const ItemDetails = styled.div`
  font-size: 10px;
  color: ${(p) => p.theme.popupTextColor || "#666"};
  opacity: 0.75;
  line-height: 1.5;
`;

/* ── Total block ── */
export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 12px 14px;
  background: ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}10`;
  }};
  border-radius: 12px;
  border: 1px solid ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}30`;
  }};
  margin-top: 4px;
`;

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalLabel = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${(p) => p.theme.popupTextColor || "#1a1a1a"};
  opacity: 0.75;
`;

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 800;
  color: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 260px;
  font-size: 14px;
  color: ${(p) => p.theme.popupTextColor || "#999"};
  opacity: 0.6;
  text-align: center;
`;
