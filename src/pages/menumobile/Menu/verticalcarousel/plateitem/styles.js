import styled from "styled-components";
import { keyframes } from 'styled-components'

export const CarouselItem = styled.div`
  min-height: calc(100% /6);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlateContainer = styled.div`
  width: 100%;
  /* background-color: ${(props) =>
    props.activeIndex == props.index ? "#667075" : "transparent"}; */
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 150px;
  position: relative;
`;
const PlateAnimation = keyframes`
 0% { width: 0px;height:0px;}
 40% { width: 0px;height:0px;}
 100% { width: 75px;height:75px;}
`;

export const Plate = styled.img`
  width: 75px;
  height: 75px;
  user-select: none;
  filter: drop-shadow(1px 1px 1px black);
  animation: ${PlateAnimation} 1s ease-in-out;
  z-index: 2;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: #333; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite; /* Apply animation */
`;

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 3;
  background-color: white;
`;