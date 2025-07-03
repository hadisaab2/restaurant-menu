import styled, { keyframes } from "styled-components";
import { FaArrowRight } from "react-icons/fa6";


export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
flex-direction: column;
display: flex;
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const ActiveCircleWrapper = styled.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${(props) => `translateX(${props.carouselIndex * 15}px)`};
`;
export const ActiveCircle = styled.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${(props) => props.theme.mainColor};
`;

export const CircleWrapper = styled.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Circle = styled.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${(props) => props.theme.mainColor};
`;

export const SwipeAnimation = styled.div`
 margin-top: 20px;
 font-size: 12px;
 color:${(props) => props.theme.mainColor};
 position: relative;
 width: 60px;
 background-color: red;
 display: flex;
 align-items: center;
`;
export const SwipeText= styled.span`
position: absolute;
left: 0;

`;
const AnimationArrow = keyframes`
  0% {
    right: 13px;

  }
  50%{
    right: 0px;

  }
  100% {
    
    right: 13px;

  }
`;

export const ArrowRight = styled(FaArrowRight )`
    animation:1.2s ${AnimationArrow}  linear infinite ;
    position: absolute;
`;