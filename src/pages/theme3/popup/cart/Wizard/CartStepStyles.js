import styled from "styled-components";

export const CartStepContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ItemsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 360px;
  overflow-y: auto;
  padding-bottom: 12px;
  flex: 1;
  min-height: 0;
  padding-right: 12px;
  scrollbar-gutter: stable;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: ${(props) => props.theme.categoryUnActive || "#f5f5f5"};
    border-radius: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
    border-radius: 3px;
  }
`;

export const CartItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 6px;
  background: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 9px;
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  border: 2px solid ${(props) => props.theme.mainColor || "rgba(0, 0, 0, 0.05)"};
  height: 90px;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 26px;
  height: 26px;
  border-radius: 6px;
  border: none;
  background: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  color: ${(props) => props.theme.popupTextColor || "#666"};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 11px;
  }
  
  &:hover {
    color: #ffffff;
    background: #ff4444;
    border-color: #ff4444;
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(255, 68, 68, 0.3);
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const ItemImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 7px;
  flex-shrink: 0;
`;

export const ItemInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
  margin-right: 0px;
  margin-bottom: 0px;
  padding-right: 0px;
  padding-top: 2px;
  justify-content: center;
`;

export const ItemName = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  line-height: 1.3;
  margin-right: 40px;
`;

export const ItemPrice = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ItemDetails = styled.div`
  font-size: 10px;
  color: ${(props) => props.theme.popupTextColor || "#666"};
  opacity: 0.8;
  line-height: 1.4;
`;

export const QuantityControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
  background: ${(props) => props.theme.categoryUnActive || "#ffffff"};
  padding: 3px 5px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 5;
  margin-left: auto;
`;

export const QuantityButton = styled.button`
  width: 22px;
  height: 22px;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  background: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  color: white;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.15);
    box-shadow: 0 2px 8px rgba(0, 123, 255, 0.4);
  }
  
  &:active {
    transform: scale(0.9);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const QuantityValue = styled.div`
  font-size: 12px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
  min-width: 22px;
  text-align: center;
  padding: 0 4px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  background: ${(props) => props.theme.categoryUnActive || "#f8f9fa"};
  border-radius: 9px;
  border: 2px solid ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  margin-top: 6px;
`;

export const TotalLabel = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.popupTextColor || "#00112b"};
`;

export const TotalPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor || props.theme.maincolor || "#007bff"};
`;

export const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  font-size: 14px;
  color: ${(props) => props.theme.popupTextColor || "#999"};
  text-align: center;
`;

