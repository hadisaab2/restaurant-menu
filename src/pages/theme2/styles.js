import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";
import { IoBag } from "react-icons/io5";

export const Container = styled.div`
min-height: 100vh;
position: relative;
background-color: ${props=>props.theme.backgroundColor};
font-family:${props=>props.theme.font};

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
bottom:20px;
right:20px;
width:40px;
height:40px;
background-color:${props=>props.theme.mainColor};
border-radius:50%;
display: flex;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
justify-content: center;
color:white;
font-size: 25px;
cursor: pointer;
`;
export const CartBtn = styled.div`
position: fixed;
bottom:70px;
right:20px;
width:40px;
height:40px;
background-color:${props=>props.theme.mainColor};
border-radius:50%;
display: flex;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
justify-content: center;
color:white;
font-size: 25px;
cursor: pointer;
`;
export const Number = styled.div`
position: absolute;
left: -5px;
top:-5px;
width:20px;
height:20px;
border-radius: 50%;
font-size: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.5);
color:${props=>props.theme.textColor};
background-color:${props=>props.theme.backgroundColor};

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


