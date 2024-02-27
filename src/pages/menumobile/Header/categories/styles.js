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

export const CarouselItem = styled.div`
  min-width: calc(100% / 4);
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  transition:all 0.2s ease-in-out;
  color:${props=>props.index==props.activeCategory?"black":"lightgray"};
`;
export const LineContainer = styled.div`
position: relative;
width: 100%;
flex: 1;
`;

export const LineBox = styled.div`
width:calc(100%/4);
display: flex;
align-items: center;
justify-content: center;
margin-left: ${props=>`${((props.activeCategory-props.carouselPosition)*100/4)}%`};
transition: all 0.6s ease-in-out;
`
export const Line = styled.div`
width: 27%;
height: 2px;
/* background-color:#FB4303; */
background-color: #fad218;
`;
