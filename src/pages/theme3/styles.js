import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

export const Container = styled.div`
min-height: 100vh;
width: 100%;
position: relative;
background-color: ${props=>props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
font-family: ${(props) => `${props.theme.font || "system-ui"}, "Noto Kufi Arabic" !important`};
overflow: visible;
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
    backdrop-filter:${props=>props.showPopup?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${props=>props.showPopup?"blur(5px)":"blur(0px)"};
transition: all 1s ease-in-out;

    pointer-events: none; /* Allows pointer events to go through the overlay */
`;

export const DetailsBtn = styled.div`
position: fixed;
bottom: 24px;
right: 20px;
width: 56px;
height: 56px;
background: ${props=>props.theme.mainColor || "#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 30px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`;

export const CartBtn = styled.div`
position: fixed;
bottom: 90px;
right: 20px;
width: 56px;
height: 56px;
background: ${props=>props.theme.mainColor || "#007bff"};
border-radius: 50%;
display: flex;
align-items: center;
box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(0, 0, 0, 0.1);
justify-content: center;
color: white;
font-size: 22px;
cursor: pointer;
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
z-index: 50;

&:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(0, 0, 0, 0.15);
}

&:active {
  transform: scale(1.05);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  bottom: 100px;
  right: 30px;
  width: 60px;
  height: 60px;
  font-size: 24px;
}
`;

export const CartCount = styled.div`
position: absolute;
left: -6px;
top: -6px;
min-width: 22px;
height: 22px;
border-radius: 12px;
font-size: 11px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
color: ${props=>props.theme.textColor || "#ffffff"};
background: ${props=>props.theme.backgroundColor || "#ff4444"};
padding: 0 6px;
border: 2px solid ${props=>props.theme.mainColor || "#007bff"};
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
color:${props=>props.theme.textColor};
background-color:${props=>props.theme.backgroundColor};
`;

// Language Navigator - Appears on all pages
export const LanguageNavigator = styled.div`
  position: fixed;
  top: 20px;
  ${props => props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;"}
  z-index: 10000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${props => props.activeLanguage === "ar" ? "left: 30px;" : "right: 30px;"}
  }
`;

export const LanguageButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.mainColor || "#333333"};
  font-size: 18px;
  
  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;


