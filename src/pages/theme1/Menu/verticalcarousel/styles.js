import styled from "styled-components";
import { keyframes } from 'styled-components'
import { themecolors } from "../../../../styles/theme";

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
  transition: transform 0.3s ease-in-out;
  width: 100%;
  transform: ${(props) =>
    `translateY(-${(props.carouselPosition * 100) /5}%)`};
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
  height: calc(100% /5);
  box-sizing: border-box;

  display: flex;
  align-items: flex-end;
  transform: ${(props) =>
    `translateY(${(props.activePlate - props.carouselPosition) * 16.2}vh)`};
  transition: transform 0.3s ease-in-out;

`;

export const Box = styled.div`
  /* background-color: #f3c9b8; */
  background-color: ${props=>props.theme.maincolor};
  height: 100%;
  width: 100%;
  border-radius: 20px;
`;
