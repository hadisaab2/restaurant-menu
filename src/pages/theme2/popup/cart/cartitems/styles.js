import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 22px;
  font-weight: 700;
  margin-top: 36px;
  color: ${(p) => p.theme.popupTextColor};
`;

export const Border = styled.div`
  height: 1px;
  width: 100%;
  background-color: ${(p) => p.theme.popupTextColor};
  opacity: 0.1;
  margin-top: 10px;
`;

export const ItemsWrap = styled.div`
  max-height: 38vh;
  width: 100%;
  overflow-y: auto;
  margin-top: 14px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-right: 4px;

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

export const NoItems = styled.div`
  height: 35vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(p) => p.theme.popupTextColor};
  font-size: 16px;
  opacity: 0.6;
`;

/* ── Card ── */
export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 10px 12px;
  background: ${(p) => p.theme.popupbackgroundColor || "#ffffff"};
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);
  border: 1px solid ${(p) => {
    const c = p.theme.mainColor || p.theme.maincolor || "#007bff";
    return `${c}28`;
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

export const ImageContainer = styled.div`
  flex-shrink: 0;
`;

export const Image = styled.img`
  width: 58px;
  height: 58px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: block;
`;

export const PriceContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
  padding-top: 2px;
`;

export const Name = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.popupTextColor};
  line-height: 1.35;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Price = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  white-space: nowrap;
`;

/* right actions column */
export const QuantityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 6px;
  flex-shrink: 0;
`;

export const QuantityWrapper = styled.div`
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

export const Plus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  color: ${(p) => p.theme.popupbackgroundColor || "#ffffff"};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;

  &:hover { transform: scale(1.15); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
  &:active { transform: scale(0.9); }
`;

export const Minus = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
  color: ${(p) => p.theme.popupbackgroundColor || "#ffffff"};
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  line-height: 1;

  &:hover { transform: scale(1.15); box-shadow: 0 2px 8px rgba(0,0,0,0.2); }
  &:active { transform: scale(0.9); }
`;

export const Quantity = styled.div`
  font-size: 13px;
  font-weight: 700;
  color: ${(p) => p.theme.popupTextColor};
  min-width: 20px;
  text-align: center;
`;

export const DeleteIcon = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${(p) => p.theme.popupTextColor};
  opacity: 0.4;
  font-size: 14px;
  transition: opacity 0.2s ease, color 0.2s ease, transform 0.2s ease;

  &:hover {
    opacity: 1;
    color: #e53935;
    transform: scale(1.15);
  }
  &:active { transform: scale(0.9); }
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

export const LegacyLine = styled.span`
  font-size: 10px;
  color: ${(p) => p.theme.popupTextColor};
  opacity: 0.75;
  line-height: 1.5;
  display: block;
`;

/* ── Summary ── */
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  margin-top: 10px;
`;

export const TotalLabel = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: ${(p) => p.theme.popupTextColor};
  opacity: 0.75;
`;

export const TotalValue = styled.span`
  font-size: 16px;
  font-weight: 800;
  color: ${(p) => p.theme.mainColor || p.theme.maincolor || "#007bff"};
`;

export const Purchase = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  color: ${(p) => p.theme.popupbuttonText};
  width: 100%;
  margin-top: 12px;
  background-color: ${(p) => p.theme.mainColor};
  border-radius: 20px;
  padding: 10px 0;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.3px;
  transition: opacity 0.2s ease, transform 0.15s ease;

  &:hover { opacity: 0.9; transform: translateY(-1px); }
  &:active { transform: scale(0.98); }
`;
