import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin-top: 24px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
`;

export const ProductWrapper = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 95%;
  min-height: ${(props) => (props.$noMinHeight ? "0" : "70vh")};
  opacity: 1;
  transition: all 0.5s ease-in-out;
  gap: 0;

  @media (min-width: 480px) {
    width: 96%;
  }

  @media (min-width: 768px) {
    width: 96%;
  }
`;

export const AllItemsWrapper = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  @media (min-width: 768px) {
    width: 96%;
    gap: 32px;
  }
`;

export const AllItemsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: center;

  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const AllItemsTitle = styled.h3`
  margin: 0 auto;
  width: 95%;
  max-width: 600px;
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
  letter-spacing: 0.3px;
  padding: 12px 16px;
  border-radius: 14px;
  background: ${(props) =>
    props.theme.BoxColor ||
    props.theme.popupbackgroundColor ||
    props.theme.categoryUnActive};
  box-shadow: 0 2px 10px rgba(15, 23, 42, 0.08);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: ${(props) => (props.activeLanguage === "ar" ? "auto" : "0")};
    right: ${(props) => (props.activeLanguage === "ar" ? "0" : "auto")};
    top: 50%;
    transform: translateY(-50%);
    width: 4px;
    height: 60%;
    border-radius: 4px;
    background: ${(props) => props.theme.mainColor};
  }

  @media (min-width: 768px) {
    font-size: 20px;
    max-width: 800px;
  }
`;

export const GoToTopButton = styled.button`
  position: fixed;
  bottom: 25px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 0;
  background: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText || "#fff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.18);
  z-index: 60;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.08);
    box-shadow: 0 6px 20px rgba(15, 23, 42, 0.25);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const AllItemsLoaderWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 10px 0 20px;
`;

export const AllItemsLoader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 14px auto 0;
  color: ${(props) => props.theme.mainColor};
  font-size: 13px;
`;

export const LoaderDot = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(props) => props.theme.mainColor};
  animation: pulse 0.8s ease-in-out infinite;

  @keyframes pulse {
    0% {
      opacity: 0.3;
      transform: scale(0.9);
    }
    50% {
      opacity: 1;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.3;
      transform: scale(0.9);
    }
  }
`;
