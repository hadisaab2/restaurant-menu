import styled from "styled-components";

export const Container = styled.div`
display: flex;
align-items: center;
padding-left: 25px;
height: 7vh;
`;
export const CarouselContainer = styled.div`
  overflow: hidden;
  width: 90%;
  display: flex;
  align-items: center;
  position:relative;
  justify-content: center;
  flex-direction: column;
  gap: 4px;

`;
export const Carousel = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  width: 100%;
  transform: ${(props) =>
    `translateX(-${(props.carouselPosition) * 100/4}%)`};
`;

export const CarouselItemWrapper = styled.div`
  min-width: calc(100% / 4);
  border-radius:40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition:all 0.2s ease-in-out;
  color:${props=>props.index==props.activeCategory?props.theme.categoryactive:props.theme.categoryunactive};
  line-height: ${props=>props.activeLanuguage=="ar"?"1.5":"null"};
  height: 20px;

`;
export const CarouselItem = styled.div`
width:85%;
background-color:red;
border-radius:20px;
display: flex;
align-items: center;
justify-content: center;
background-color: red;
font-size: 14px;
height: 100%;

`;
