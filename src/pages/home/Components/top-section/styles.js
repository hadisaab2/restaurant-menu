import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 40px;
  overflow: hidden;
  position: relative;
  padding: 60px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 40px 16px 20px;
    gap: 25px;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  padding-top: 10px;

  @media (max-width: 900px) {
    align-items: flex-start;
    padding-top: 0;
  }
`;

export const Kicker = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
`;

export const HeroTitle = styled.h1`
  margin: 0;
  font-size: 52px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.8px;
  color: #ffffff;

  @media (max-width: 900px) {
    font-size: 40px;
  }

  @media (max-width: 600px) {
    font-size: 32px;
  }
`;

export const HeroSubtitle = styled.p`
  margin: 0;
  max-width: 520px;
  font-size: 16px;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.78);
`;

export const HeroActions = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  margin-top: 10px;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  border: none;
  cursor: pointer;
  padding: 14px 26px;
  border-radius: 999px;
  background: #ff3745;
  color: white;
  font-weight: 600;
  font-size: 15px;
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  box-shadow: 0 12px 34px rgba(255, 55, 69, 0.25);

  &:hover {
    background: #d8121f;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const SecondaryButton = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.25);
  cursor: pointer;
  padding: 14px 22px;
  border-radius: 999px;
  background: transparent;
  color: rgba(255, 255, 255, 0.92);
  font-weight: 600;
  font-size: 15px;
  transition: border-color 0.2s ease, background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 55, 69, 0.6);
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0px);
  }
`;

export const HeroRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PhoneWrapper = styled.div`
  height: min(560px, 60vh);
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 26px 20px 20px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.28);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  @media (max-width: 768px) {
    height: min(480px, 52vh);
    max-width: 100%;
    padding: 18px 14px 14px;
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
  max-width: 420px;
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
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.2));
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateX(-50%) scale(1.05);
  }
  
  @media (max-width: 768px) {
    width: 160px;
    top: 0px;
  }
`;
