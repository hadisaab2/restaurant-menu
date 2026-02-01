import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const SliderContainer = styled.div`
  width: 100%;
  height: 350px;
  position: relative;
  overflow: hidden;
  margin-bottom: 30px;
  border-radius: 0;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    height: 220px;
    margin-bottom: 20px;
    border-radius: 0;
  }

  @media (min-width: 1200px) {
    height: 420px;
    border-radius: 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
`;

export const Slide = styled.div`
  min-width: 100%;
  height: 100%;
  position: relative;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.6s ease-in-out;
  animation: ${fadeIn} 0.6s ease-in-out;
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0;

  @media (max-width: 768px) {
    border-radius: 0;
  }

  @media (min-width: 1200px) {
    border-radius: 0;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.1) 100%
  );
  pointer-events: none;
`;

export const SliderArrows = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  z-index: 10;
  pointer-events: none;

  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;

export const ArrowButton = styled.button`
  background: rgba(255, 255, 255, 0.9);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  pointer-events: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  color: ${props => props.theme.mainColor || "#007bff"};
  font-size: 20px;

  &:hover {
    background: ${props => props.theme.mainColor || "#007bff"};
    color: white;
    transform: scale(1.1);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: scale(0.95);
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
`;

export const SliderDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 10px;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: 15px;
    gap: 8px;
  }
`;

export const Dot = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: 2px solid white;
  background: ${props => props.active ? "white" : "transparent"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.2);
    background: white;
    opacity: 0.8;
  }

  @media (max-width: 768px) {
    width: 10px;
    height: 10px;
  }
`;

