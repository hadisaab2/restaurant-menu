import styled, { keyframes } from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.backgroundColor};
  font-family: ${(props) => `${props.theme.font}, "Noto Kufi Arabic" !important`};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (min-width: 1024px) {
    max-width: 1400px;
    margin: 0 auto;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.06);
  }
`;

export const MenuWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
`;

export const BlurOverlay = styled.div`
  position: fixed;
  z-index: 4;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: ${(props) => (props.showPopup ? "blur(8px)" : "blur(0px)")};
  -webkit-backdrop-filter: ${(props) => (props.showPopup ? "blur(8px)" : "blur(0px)")};
  background-color: ${(props) => (props.showPopup ? "rgba(0, 0, 0, 0.15)" : "rgba(0, 0, 0, 0)")};
  transition: all 0.4s ease-in-out;
  pointer-events: none;
`;

const fabHover = keyframes`
  0% { box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15); }
  50% { box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25); }
  100% { box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15); }
`;

export const DetailsBtn = styled.div`
  position: fixed;
  bottom: 24px;
  right: 20px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 3;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    bottom: 28px;
    right: 28px;
  }
`;

export const CartBtn = styled.div`
  position: fixed;
  bottom: 82px;
  right: 20px;
  width: 48px;
  height: 48px;
  background-color: ${(props) => props.theme.mainColor};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 22px;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  z-index: 3;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    bottom: 90px;
    right: 28px;
  }
`;

const badgePop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const CartCount = styled.div`
  position: absolute;
  left: -4px;
  top: -4px;
  min-width: 22px;
  height: 22px;
  padding: 0 5px;
  border-radius: 50%;
  font-size: 11px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  animation: ${badgePop} 0.3s ease;
`;

export const Location = styled(FaLocationArrow)`
  transform: rotate(270deg);
  width: 20px;
  height: 20px;
`;

export const Cart = styled(IoBag)`
  width: 20px;
  height: 20px;
`;

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
