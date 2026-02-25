import styled, { keyframes } from "styled-components";

const pulse = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
`;

const scaleIn = keyframes`
  from {
    transform: scale(0.95);
    opacity: 0.8;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  padding: 24px 0 44px 0;
  background: ${props => props.theme.backgroundColor || "transparent"};
  
  @media (max-width: 768px) {
    padding: 20px 0 0px 0;
  }
`;

/* Wrapper: swiper-btn-center-lr1 style (centered L/R arrows) */
export const SwiperWrap = styled.div`
  width: 100%;
  overflow: hidden;
  padding: 10px 0;
  margin-bottom: 10px;
  position: relative;
  
  .home-banner-swiper {
    overflow: hidden;
    padding: 0 8px;
  }
  
  .home-banner-swiper .swiper-wrapper {
    align-items: stretch;
  }
  
  .home-banner-swiper .swiper-slide {
    height: auto;
    display: flex;
    box-sizing: border-box;
    width: auto;
  }
  
  @media (min-width: 768px) {
    padding: 8px 0;
    .home-banner-swiper {
      padding: 0 12px;
    }
  }
  
  @media (min-width: 1200px) {
    padding: 12px 0;
    .home-banner-swiper {
      padding: 0 16px;
    }
  }
`;

export const SliderTrack = styled.div`
  display: flex;
  gap: 16px;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  cursor: grab;
  padding: 10px calc(12.5% - 8px);
  background: transparent;
  box-shadow: none;
  
  &::-webkit-scrollbar {
    display: none;
  }
  
  &:active {
    cursor: grabbing;
  }
  
  @media (max-width: 768px) {
    gap: 12px;
    padding: 8px calc(10% - 6px);
  }
  
  @media (min-width: 1200px) {
    gap: 20px;
    padding: 12px calc(15% - 10px);
  }
`;

/* Card add-banner style: background-image, card-body overlay */
export const SlideCard = styled.div`
  width: 100%;
  height: 100%;
  min-height: 160px;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  background-color: ${props => props.theme.categoryUnactive || "#e0e0e0"};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);
  }
  
  @media (max-width: 767px) {
    min-height: 140px;
    border-radius: 12px;
  }
  
  @media (min-width: 768px) {
    min-height: 180px;
  }
  
  @media (min-width: 1200px) {
    min-height: 200px;
    border-radius: 20px;
  }
`;

export const CardBody = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  pointer-events: none;
  
  @media (min-width: 1200px) {
    padding: 20px;
  }
`;

export const CardInfo = styled.div`
  width: 70%;
  max-width: 100%;
`;

export const SlideTitle = styled.h4`
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  line-height: 1.3;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const SliderArrows = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  padding: 0 16px;
  pointer-events: none;
  z-index: 10;
  
  @media (max-width: 768px) {
    padding: 0 8px;
  }
  
  @media (min-width: 1200px) {
    padding: 0 32px;
  }
`;

export const ArrowButton = styled.button`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background: ${props => props.theme.backgroundColor || "transparent"};
  color: ${props => props.theme.mainColor || "#1a1a1a"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  pointer-events: auto;
  font-size: 18px;
  border: solid 1px ${props => props.theme.mainColor || "#1a1a1a"};
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  box-shadow: none;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    transform: scale(1.12);
    background: ${props => props.theme.backgroundColor || "transparent"};
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
  
  @media (min-width: 1200px) {
    width: 56px;
    height: 56px;
    font-size: 20px;
  }
`;

export const SlideIndicator = styled.div`
  display: none;
`;

export const SliderDots = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding-bottom: 8px;
  
  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 16px;
    padding-bottom: 6px;
  }
`;

export const Dot = styled.button`
  width: ${props => props.$active ? "28px" : "10px"};
  height: 10px;
  border-radius: 5px;
  border: none;
  background: ${props => props.$active 
    ? (props.theme.mainColor || "#007bff")
    : "rgba(0, 0, 0, 0.2)"
  };
  cursor: pointer;
  padding: 0;
  transition: all 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  outline: none;
  -webkit-tap-highlight-color: transparent;
  
  &:hover {
    background: ${props => props.$active 
      ? (props.theme.mainColor || "#007bff")
      : "rgba(0, 0, 0, 0.4)"
    };
    transform: scale(1.15);
  }
  
  &:focus {
    outline: none;
  }
  
  @media (max-width: 768px) {
    width: ${props => props.$active ? "24px" : "8px"};
    height: 8px;
    border-radius: 4px;
  }
`;
