import styled, { keyframes } from 'styled-components';
import { FaLocationArrow } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export const PageLayout = styled.div`
height: 100vh;
`;

export const DetailsBtn = styled.div`
position: fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
background-color:#cce4a9;
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
const arrowanimation = keyframes`
  0% {
    margin-top: -10px;

  }
  50%{
    margin-top: 0px;

  }
  75%{
    margin-top: -5px;

  }
  100% {
    margin-top: -10px;
  }
`;

export const Arrow = styled(IoIosArrowDown)`
font-size: 20px;
animation: ${arrowanimation} 1s linear infinite;
margin-bottom: -10px;
color:#cce4a9;
`;

export const SwipeDownContainer = styled.div`
position: absolute;
left: 5px;
top:20vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
