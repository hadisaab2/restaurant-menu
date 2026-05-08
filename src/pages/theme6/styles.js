import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => `${props.theme.font}, "Noto Kufi Arabic" !important`};
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  /* Bottom padding so content is never hidden behind the fixed tab bar */
  padding-bottom: calc(72px + env(safe-area-inset-bottom, 0px));
`;

export const BlurOverlay = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${(props) => (props.showPopup ? "blur(5px)" : "blur(0px)")};
  -webkit-backdrop-filter: ${(props) => (props.showPopup ? "blur(5px)" : "blur(0px)")};
  transition: all 1s ease-in-out;
  pointer-events: none;
`;

/* Legacy exports kept so any remaining imports don't break */
export const DetailsBtn = styled.div`
  display: none;
`;
export const CartBtn = styled.div`
  display: none;
`;
export const CartCount = styled.div`
  display: none;
`;
export const Location = styled.div``;
export const Cart = styled.div``;

export const ParamProductContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
`;
