import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  overflow: hidden;
  bottom: 20%;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const CarouselContainer = styled.div`
  width: 90%;
  overflow: hidden;
`;

export const Carousel = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  align-items: center;
  transform: ${(props) => {
    if (props.activeIndex > 3) {
      // return `translateX(calc(-(${(props.activeIndex-4)*100}%/ 4))`};
      return `translateX(-${(props.activeIndex-3)*25}%)`;
    }
  }};
`;

export const CarouselItem = styled.div`
  min-width: calc(100% / 4);
  box-sizing: border-box;
  opacity: 1;
  transition: opacity 0.5s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const PlateContainer = styled.div`
  width: 70%;
  background-color: ${(props) =>
    props.activeIndex == props.index ? "#667075" : "transparent"};
  border-radius: 10px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  height: 150px;
`;
export const Plate = styled.img`
  width: 80px;
  height: 80px;
`;
export const PlateName = styled.span`
  font-size: 13px;
  color:white;
  text-align: center;

`;
export const ArrowRight = {
  position: "absolute",
  right: "0px",
  cursor:"pointer",
  fontSize:"35px",
  color:"#444046"

};
export const ArrowLeft = {
  position: "absolute",
  left: "0px",
  cursor:"pointer",
  fontSize:"35px",
  color:"444046"


};
