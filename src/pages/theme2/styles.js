import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";

export const Container = styled.div`
min-height: 100vh;
position: relative;
background-color: ${props=>props.theme.backgroundColor};


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
width:50px;
height:50px;
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
export const Location = styled(FaLocationArrow)`
transform: rotate(270deg);

`;