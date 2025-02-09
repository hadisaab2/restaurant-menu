import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
`;

export const PhoneWrapper = styled.div`
  height: 50vh;
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneImage = styled.img`
  width: 500px;
  z-index: 10;

`;

export const CarouselWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  transition: transform 0.7s ease-in-out;
  transform: translateX(${props => -props.currentIndex * 100}%);
  z-index: 11;

`;
export const TitleContainer = styled.div`
  height: 70vh;
  position: absolute;
  /* z-index: 10; */
  width: 100%;
  display: flex;
  justify-content: center;

`;

export const ImageWrapper = styled.div`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  z-index: 11;

`;

export const Image = styled.img`
  width: 300px;
  height: 300px;
  rotate:${props=>props.index==props.currentIndex?"0deg":"150deg"} ;
  transition: all 0.7s ease-in-out;

`;

export const Title = styled.span`
position: absolute;
bottom:${props=>props.index==props.currentIndex?0:"150px"} ;
  font-size: 32px;
  font-weight: bold;
  color:white;
  transition: all 0.7s ease-in-out;
`;

export const LogoMenugic = styled.img`
position: absolute;
right: 20px;
top:20px;
width: 150px;
`;
