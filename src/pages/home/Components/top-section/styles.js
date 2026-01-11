import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
  flex-direction: column;
  padding: 40px 20px;
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

export const PhoneWrapper = styled.div`
  height: 60vh;
  width: 100%;
  max-width: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 40px;

  @media (max-width: 768px) {
    height: 50vh;
    max-width: 100%;
    margin-top: 20px;
  }
`;
export const TitleContainer = styled.div`
  position: absolute;
  bottom: 0;
  /* z-index: 10; */
  width: 100%;
  display: flex;
  justify-content: center;
  height: 20%;

`;

export const Title = styled.span`
  position: absolute;
  bottom: ${props=>props.index==props.currentIndex?"-30px":"150px"};
  font-size: 42px;
  font-weight: 700;
  color: white;
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  letter-spacing: 1px;
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props=>props.index==props.currentIndex ? "1" : "0"};
  transform: ${props=>props.index==props.currentIndex ? "translateY(0)" : "translateY(20px)"};
  
  @media (max-width: 768px) {
    font-size: 28px;
    bottom: ${props=>props.index==props.currentIndex?"-20px":"120px"};
  }
`;

export const PhoneImage = styled.img`
  width: 100%;
  max-width: 500px;
  height: auto;
  z-index: 10;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.3));
  transition: transform 0.3s ease;
  
  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export const CarouselWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  transition: transform 0.7s ease-in-out;
  transform: translateX(${props => -props.currentIndex * 100}%);
  z-index: 11;

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
  width: 280px;
  height: 280px;
  object-fit: contain;
  rotate: ${props=>props.index==props.currentIndex?"0deg":"150deg"};
  transition: all 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props=>props.index==props.currentIndex ? "1" : "0.3"};
  filter: ${props=>props.index==props.currentIndex ? "drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))" : "blur(2px)"};
  transform: ${props=>props.index==props.currentIndex ? "scale(1)" : "scale(0.8)"};
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;



export const LogoMenugic = styled.img`
  width: 220px;
  height: auto;
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 160px;
    top: 20px;
  }
`;
