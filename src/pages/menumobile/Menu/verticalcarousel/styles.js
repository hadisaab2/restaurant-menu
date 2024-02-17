import styled from "styled-components";
import { keyframes } from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 0.7;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
export const CarouselContainer = styled.div`
  height: 100%;
  overflow: hidden;
  width: 60%;
  display: flex;
  /* align-items: center; */
  position: relative;
  justify-content: center;
`;
export const Carousel = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.8s ease-in-out;

  width: 100%;
  transform: ${(props) =>
    `translateY(-${(props.carouselPosition * 100) /6}%)`};
`;

export const CarouselItem = styled.div`
  min-height: calc(100% /6);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PlateContainer = styled.div`
  width: 70%;
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
`;
export const PlateName = styled.span`
  font-size: 13px;
  color: white;
  text-align: center;
`;

export const ArrowUp = {
  position: "absolute",
  top: "0px",
  cursor: "pointer",
  fontSize: "35px",
  color: "#444046",
  zIndex: "20",
};
export const ArrowDown = {
  position: "absolute",
  bottom: "0px",
  cursor: "pointer",
  fontSize: "35px",
  color: "#444046",
};
export const BoxContainer = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% /6);
  display: flex;
  align-items: flex-end;
  transform: ${(props) =>
    `translateY(${(props.activePlate - props.carouselPosition) * 13.2}vh)`};
  transition: all 0.8s ease-in-out;
`;

export const Box = styled.div`
  /* background-color: #f3c9b8; */
  background-color: #f9dd63;
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;
