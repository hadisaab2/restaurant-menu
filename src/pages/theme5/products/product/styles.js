import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  @media (min-width: 480px) {
    width: 33.333%;
  }

  @media (min-width: 768px) {
    width: 25%;
  }

  @media (min-width: 1024px) {
    width: 20%;
  }
`;

export const Wrapper = styled.div`
  width: 92%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.BoxColor};
  border-radius: 16px;
  position: relative;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  overflow: hidden;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 768px) {
    border-radius: 18px;
  }
`;

export const Image = styled.img`
  width: 90%;
  height: 100%;
  object-fit: cover;
  border-radius: 12px;
  visibility: ${(props) => (props.imageLoaded ? "visible" : "hidden")};
  opacity: ${(props) => (props.imageLoaded ? 1 : 0)};
  transition: opacity 0.4s ease;
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1 / 0.85;
  overflow: hidden;
  margin-top: 8px;
  display: flex;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  @media (min-width: 768px) {
    aspect-ratio: 1 / 0.9;
  }

  @media (min-width: 1024px) {
    aspect-ratio: 1 / 0.95;
  }
`;

export const TextContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: ${(props) => (props.activeLanuguage == "en" ? "left" : "right")};
  position: relative;
  align-items: ${(props) =>
    props.activeLanuguage == "en" ? "flex-start" : "flex-end"};
  gap: 4px;
  padding: 10px 0 12px;
`;

export const PlateName = styled.span`
  font-size: ${(props) => props.fontSize || "14px"};
  font-weight: 600;
  color: ${(props) => props.theme.BoxTextColor};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 2.8em;
  line-height: 1.4em;
  letter-spacing: 0.1px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6px;
  align-items: center;
  margin-top: 2px;
`;

export const PlatePrice = styled.span`
  color: ${(props) => props.theme.BoxPriceColor};
  font-size: 14px;
  font-weight: ${(props) => (props.discounted ? "400" : "700")};
  word-spacing: 0px;
  text-decoration: ${(props) => (props.discounted ? "line-through" : "none")};
  opacity: ${(props) => (props.discounted ? 0.55 : 1)};
  transition: opacity 0.2s ease;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const DiscountPrice = styled.span`
  color: ${(props) => props.theme.BoxPriceColor};
  font-size: 14px;
  font-weight: 700;
  word-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

export const Loader = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${(props) => props.theme.mainColor || "#333"};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 91%;
  aspect-ratio: 1 / 0.85;
  border-radius: 12px;
  overflow: hidden;
  top: 8px;
  z-index: 3;
  background: ${(props) => props.theme.categoryUnactive || "#f0f0f0"};
  background-image: linear-gradient(
    90deg,
    ${(props) => props.theme.categoryUnactive || "#f0f0f0"} 0%,
    ${(props) => props.theme.backgroundColor || "#e0e0e0"} 50%,
    ${(props) => props.theme.categoryUnactive || "#f0f0f0"} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.8s ease-in-out infinite;
`;

export const NEW = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  left: auto;
  bottom: auto;
  z-index: 4;
  font-size: 11px;
  font-weight: 700;
  padding: 4px 10px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText};
  border-radius: 20px;
  line-height: 1.2;
  letter-spacing: 0.3px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;
