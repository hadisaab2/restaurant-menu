import styled from "styled-components";

export const TabBar = styled.nav`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1200;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => props.theme.BoxColor || props.theme.popupbackgroundColor || "#ffffff"};
  border-top: 1px solid ${(props) => props.theme.categoryUnActive || "rgba(0,0,0,0.08)"};
  box-shadow: 0 -4px 28px rgba(0, 0, 0, 0.1);
  padding-bottom: env(safe-area-inset-bottom, 0px);
  border-radius: 20px 20px 0 0;
  overflow: hidden;
`;

export const Tab = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  background: transparent;
  padding: 10px 4px 8px;
  cursor: pointer;
  outline: none;
  gap: 3px;
  min-height: 58px;
  transition: all 0.18s ease;
  color: ${(props) =>
    props.active
      ? props.theme.categoryActive || props.theme.mainColor || "#e53e3e"
      : props.theme.textColor || "#666"};
  opacity: ${(props) => (props.active ? 1 : 0.6)};

  &:active {
    transform: scale(0.92);
  }
`;

export const TabIconWrap = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  font-size: 22px;
  color: inherit;
  transition: transform 0.18s ease;

  ${Tab}:active & {
    transform: scale(0.88);
  }
`;

export const TabLabel = styled.span`
  font-size: 10px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  color: inherit;
  letter-spacing: 0.3px;
  line-height: 1;
`;

export const CartBadge = styled.span`
  position: absolute;
  top: -7px;
  right: -9px;
  min-width: 18px;
  height: 18px;
  border-radius: 999px;
  background-color: ${(props) => props.theme.mainColor || "#e53e3e"};
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  font-size: 9px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
  line-height: 1;
  border: 1.5px solid ${(props) => props.theme.BoxColor || "#fff"};
`;
