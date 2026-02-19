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
  padding: 10px calc(12.5% - 8px); /* Center cards with ~12.5% padding on each side */
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

export const SlideCard = styled.div`
  flex: 0 0 75%; /* Card takes 75% width, showing ~12.5% of adjacent cards */
  scroll-snap-align: center;
  scroll-snap-stop: always;
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  background: ${props => props.theme.backgroundColor || "transparent"};
  box-shadow: none;
  transform: ${props => props.$isActive ? "scale(1)" : "scale(0.92)"};
  opacity: ${props => props.$isActive ? 1 : 0.65};
  transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  aspect-ratio: 16 / 8;
  animation: ${props => props.$isActive ? scaleIn : "none"} 0.3s ease-out;
  
  &:hover {
    transform: ${props => props.$isActive ? "scale(1.02)" : "scale(0.95)"};
    opacity: ${props => props.$isActive ? 1 : 0.8};
  }
  
  @media (max-width: 768px) {
    flex: 0 0 80%;
    border-radius: 16px;
    aspect-ratio: 16 / 9;
  }
  
  @media (min-width: 1200px) {
    flex: 0 0 70%;
    border-radius: 24px;
    aspect-ratio: 16 / 7;
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  user-select: none;
  pointer-events: none;
  transition: transform 0.5s ease;
  
  ${SlideCard}:hover & {
    transform: scale(1.05);
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$isActive 
    ? "linear-gradient(180deg, transparent 40%, rgba(0, 0, 0, 0.3) 100%)"
    : "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%)"
  };
  pointer-events: none;
  transition: background 0.4s ease;
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
