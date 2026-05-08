import styled, { keyframes } from "styled-components";

// Define the slide-down animation
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
  top: ${props=>props.showInstallPopup?"20px":"-100%"};
  left: 50%;
  transform: translateX(-50%);
  background: ${(props) => props.theme.popupbackgroundColor};
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 2000;
  animation: ${slideDown} 0.5s ease-out; // Animate on mount
  transition: all 0.5s ease-in-out;

`;

export const PopupText = styled.p`
  margin: 0 0 10px;
  font-size: 16px;
  text-align: center;
  color:${(props) => props.theme.popupTextColor};;

`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const InstallButton = styled.button`
  background:${(props) => props.theme.mainColor};;
  color: ${(props) => props.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }
`;

export const DismissButton = styled.button`
  background:${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbackgroundColor};
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  &:focus{
    outline: none;
  }

`;
