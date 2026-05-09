import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    top: -100%;
    opacity: 0;
  }
  100% {
    top: 20px;
    opacity: 1;
  }
`;

export const PopupContainer = styled.div`
  position: fixed;
  top: ${(props) => (props.showInstallPopup ? "20px" : "-100%")};
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.popupbackgroundColor};
  padding: 18px 20px;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  animation: ${slideDown} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  width: calc(100% - 32px);
  max-width: 380px;

  @media (min-width: 768px) {
    max-width: 400px;
    top: ${(props) => (props.showInstallPopup ? "24px" : "-100%")};
  }
`;

export const PopupText = styled.p`
  margin: 0 0 14px;
  font-size: 15px;
  text-align: center;
  color: ${(props) => props.theme.popupTextColor};
  line-height: 1.4;
  font-weight: 500;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
`;

export const InstallButton = styled.button`
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbackgroundColor};
  padding: 11px 20px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
  flex: 1.2;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const DismissButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.popupTextColor};
  padding: 11px 16px;
  border: 1.5px solid ${(props) => props.theme.popupTextColor}30;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  border-radius: 10px;
  flex: 0.8;
  transition: transform 0.15s ease, background-color 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
    background-color: rgba(0, 0, 0, 0.03);
  }
`;
