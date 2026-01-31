import styled from "styled-components";

export const TabBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  background: ${(props) => props.theme?.popupbackgroundColor || props.theme?.backgroundColor || "#ffffff"};
  border-top: 1px solid ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 0, 0, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 0 calc(8px + env(safe-area-inset-bottom));
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.08);
  z-index: 100;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  
  /* Safe area for devices with notches */
  padding-bottom: max(8px, env(safe-area-inset-bottom));
`;

export const TabItem = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 8px 4px;
  transition: all 0.2s ease;
  position: relative;
  color: ${(props) => 
    props.$active 
      ? (props.theme?.mainColor || "#007bff")
      : (props.theme?.textColor || "#666666")
  };
  
  &:active {
    transform: scale(0.95);
    opacity: 0.8;
  }
  
  &:hover {
    opacity: 0.8;
  }
`;

export const TabIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  transition: transform 0.2s ease;
  
  ${TabItem}:active & {
    transform: scale(0.9);
  }
`;

export const TabLabel = styled.span`
  font-size: 11px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  line-height: 1.2;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -8px;
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.popupbuttonText || "#ffffff"};
  border-radius: 10px;
  min-width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  padding: 0 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  border: 2px solid ${(props) => props.theme?.popupbackgroundColor || props.theme?.backgroundColor || "#ffffff"};
`;
