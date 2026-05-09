import styled, { keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slideAnimation = () => keyframes`
  0% { right: -100%; }
  100% { right: 0; }
`;

export const Wrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  top: 0;
  right: ${(props) => (props.CloseAnimation ? 0 : "-100%")};
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.backgroundColor};
  padding-bottom: env(safe-area-inset-bottom, 120px);
  overflow-x: hidden;
  overflow-y: auto;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideAnimation} 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 6;

  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
`;

const ImageAnimation = keyframes`
  0% { height: 20vh; top: 0px; }
  100% { height: 45vh; top: 80px; }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  height: ${(props) =>
    props.isNormalCarousel
      ? "auto"
      : props.squareDimension
      ? "50vh"
      : "65vh"};
  min-height: ${(props) =>
    props.isNormalCarousel
      ? props.squareDimension
        ? "42vh"
        : "55vh"
      : "unset"};
  margin-top: ${(props) => (props.isNormalCarousel ? "70px" : "60px")};
  padding: ${(props) => (props.isNormalCarousel ? "0 4%" : "10px 0")};
  transition: all 0.5s ease;
  display: flex;
  flex-direction: ${(props) => (props.isNormalCarousel ? "column" : "row")};
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;

  @media (min-width: 768px) {
    min-height: ${(props) =>
      props.isNormalCarousel
        ? props.squareDimension
          ? "48vh"
          : "62vh"
        : "unset"};
    margin-top: ${(props) => (props.isNormalCarousel ? "80px" : "65px")};
  }

  @media (min-width: 1024px) {
    min-height: ${(props) =>
      props.isNormalCarousel
        ? props.squareDimension
          ? "50vh"
          : "65vh"
        : "unset"};
    margin-top: ${(props) => (props.isNormalCarousel ? "90px" : "65px")};
  }
`;

export const SwiperWrapper = styled.div`
  width: 88%;
  height: 100%;

  .swiper {
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  .swiper-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: none !important;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${(props) => `translateX(-${props.carouselIndex * 100}%)`};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
`;

export const CarouselItem = styled.div`
  height: 100%;
  width: 100%;
  min-width: 100%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  flex-shrink: 0;
`;

export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Loader = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.08);
  border-left-color: ${(props) => props.theme.mainColor};
  border-radius: 50%;
  width: 24px;
  height: 24px;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoaderWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${(props) =>
    props.$cardSlide ? "0" : props.CloseAnimation ? "24px" : "12px"};
  width: ${(props) =>
    props.$cardSlide ? "100%" : props.CloseAnimation ? "92%" : "100%"};
  display: ${(props) => (props.Loaded ? "block" : "none")};
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  margin: 0 auto;

  @media (min-width: 768px) {
    width: ${(props) =>
      props.$cardSlide ? "100%" : props.CloseAnimation ? "75%" : "100%"};
  }

  @media (min-width: 1024px) {
    width: ${(props) =>
      props.$cardSlide ? "100%" : props.CloseAnimation ? "50%" : "100%"};
  }
`;

const BackIconAnimation = keyframes`
  0% { left: -60px; opacity: 0; }
  100% { left: 20px; opacity: 1; }
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 22px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  padding: 6px;
  border-radius: 50%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const CarouselBack = styled(IoIosArrowBack)`
  font-size: 26px;
  padding: 8px;
  background-color: ${(props) => props.theme.mainColor || "#007bff"};
  color: ${(props) => props.theme.backgroundColor || "#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  left: 4%;
  top: 45%;
  z-index: 20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 1024px) {
    left: 22%;
  }
`;

export const CarouselForward = styled(IoIosArrowForward)`
  font-size: 26px;
  padding: 8px;
  background-color: ${(props) => props.theme.mainColor || "#007bff"};
  color: ${(props) => props.theme.backgroundColor || "#fff"};
  border-radius: 50%;
  cursor: pointer;
  position: absolute;
  right: 4%;
  top: 45%;
  z-index: 20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }

  @media (min-width: 1024px) {
    right: 22%;
  }
`;

export const BackBtn = styled.button`
  position: fixed;
  z-index: 8;
  top: 24px;
  left: 20px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  animation: ${BackIconAnimation} 0.4s ease-out;
  -webkit-tap-highlight-color: transparent;
  padding: 4px;
`;

export const ItemCategory = styled.div`
  width: 100%;
  height: 80px;
  position: absolute;
  top: 0;
  color: black;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

const CategoryAnimation = keyframes`
  0% { margin-top: -30px; opacity: 0; }
  50% { margin-top: -30px; opacity: 0; }
  100% { margin-top: 0px; opacity: 1; }
`;

export const Category = styled.span`
  font-size: 16px;
  font-weight: 600;
  margin-top: 0px;
  color: ${(props) => props.theme.textColor};
  animation: ${CategoryAnimation} 1s ease-out;
  letter-spacing: 0.2px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const FakeContainer = styled.div`
  width: 90%;
  height: ${(props) => (props.squareDimension ? "45vh" : "60vh")};
  border-radius: 24px;
  margin-top: 0px;
  display: flex;
  overflow: hidden;
  transition: all 0.5s ease;
  animation: ${ImageAnimation} 0.4s ease-out;

  @media (min-width: 1024px) {
    height: 70vh;
  }
`;

const QuantityAnimation = keyframes`
  0% { margin-left: -50px; opacity: 0; }
  50% { margin-left: -50px; opacity: 0; }
  100% { margin-left: 0; opacity: 1; }
`;

export const ItemInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InfoContainer = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-left: 0;
  animation: ${QuantityAnimation} 0.8s ease-out;

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const ItemInfo = styled.div`
  width: 90%;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: ${(props) =>
    props.activeLanguage == "en" ? "flex-start" : "flex-end"};
  flex-direction: column;
  position: relative;
  margin-top: 20px;
  padding-bottom: 24px;
  color: ${(props) => props.theme.textColor};

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const ItemName = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-left: ${(props) => (props.activeLanguage == "en" ? "0px" : null)};
  margin-right: ${(props) => (props.activeLanguage == "en" ? null : "0px")};
  text-align: ${(props) =>
    props.activeLanguage == "en" ? "left" : "right"};
  opacity: 1;
  margin-top: 5px;
  line-height: 1.3;

  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const ItemDescription = styled.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 8px;
  text-align: ${(props) => (props.activeLanguage == "en" ? "left" : "right")};
  direction: ${(props) => (props.activeLanguage == "en" ? "ltr" : "rtl")};
  opacity: 0.75;
  line-height: 1.6;
  max-width: 600px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const OutOfStockNotice = styled.div`
  margin-top: 10px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.mainColor};
  background: ${(props) => props.theme.backgroundColor};
  border: 0;
  padding: 6px 14px;
  border-radius: 999px;
  align-self: flex-start;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  margin-top: 4px;
`;

export const ItemPrice = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  text-decoration: ${(props) => (props.discounted ? "line-through" : "none")};
  opacity: ${(props) => (props.discounted ? 0.55 : 1)};
  word-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const DiscountPrice = styled.span`
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => props.theme.mainColor};
  border-radius: 10px;
  word-spacing: 0px;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const AddToCartAnimation = keyframes`
  0% { bottom: -100%; }
  100% { bottom: 0; }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${AddToCartAnimation} 0.5s ease-out;
  background-color: ${(props) => props.theme.backgroundColor};
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.06);
  padding-bottom: max(12px, env(safe-area-inset-bottom, 12px));
  padding-top: 12px;
  margin-top: 30px;

  @media (min-width: 768px) {
    width: 60%;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export const AddToCart = styled.button`
  outline: none;
  border: 0;
  cursor: pointer;
  position: relative;
  width: 90%;
  border-radius: 12px;
  height: 48px;
  color: ${(props) => props.theme.popupbuttonText};
  font-weight: 600;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 14px;
  letter-spacing: 0.3px;
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
  transition: transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.98);
  }
`;

export const QuantityPrice = styled.span`
  position: absolute;
  right: 10%;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme.popupbuttonText};
  word-spacing: 1px;
`;

export const QuantityWrapper = styled.div`
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  flex-direction: row;
  height: 48px;
  color: ${(props) => props.theme.mainColor};
  width: 55%;
  z-index: 2000;
  max-width: 200px;
`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.85);
  }
`;

export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  user-select: none;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.85);
  }
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 16px;
  font-weight: 700;
`;

const CopyBtnAnimation = keyframes`
  0% { right: -60px; opacity: 0; }
  100% { right: 20px; opacity: 1; }
`;

export const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 34px;
  width: 34px;
  border-radius: 50%;
  position: fixed;
  z-index: 8;
  top: 24px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
  right: 20px;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  animation: ${CopyBtnAnimation} 0.4s ease-out;
  font-size: 15px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    transform: scale(0.9);
  }
`;

export const InstructionContainer = styled.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 32px;
  align-items: ${(props) =>
    props.activeLanguage == "en" ? "flex-start" : "flex-end"};

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1024px) {
    width: 60%;
  }
`;

export const InstructionLabel = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.formColor};
`;

export const Instruction = styled.input`
  background-color: transparent;
  border: 1px solid
    ${(props) => {
      let color = props?.theme?.formColor;
      const opacity = 0.3;
      if (color?.startsWith("#")) {
        const r = parseInt(color.slice(1, 3), 16);
        const g = parseInt(color.slice(3, 5), 16);
        const b = parseInt(color.slice(5, 7), 16);
        return `rgba(${r}, ${g}, ${b}, ${opacity})`;
      } else if (color?.startsWith("rgb")) {
        return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
          const rgbValues = values.split(",").slice(0, 3).join(",");
          return `rgba(${rgbValues}, ${opacity})`;
        });
      }
      return color;
    }};
  text-align: ${(props) => (props.activeLanguage == "en" ? "left" : "right")};
  direction: ${(props) => (props.activeLanguage == "en" ? "ltr" : "rtl")};

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.mainColor};
  }

  &::placeholder {
    color: ${(props) => props.theme.formColor};
    opacity: 0.4;
  }

  font-size: 14px;
  color: ${(props) => props.theme.formColor};
  width: 100%;
  padding: 12px 14px;
  border-radius: 12px;
  transition: border-color 0.2s ease;
`;

export const MagnifyBtn = styled.button`
  position: absolute;
  bottom: 12px;
  right: 12px;
  z-index: 25;
  background: rgba(0, 0, 0, 0.4);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #fff;
  font-size: 20px;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease, transform 0.15s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: rgba(0, 0, 0, 0.6);
    transform: scale(0.92);
  }
`;

export const ZoomOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
  user-select: none;
  -webkit-user-drag: none;
`;

export const ZoomCloseBtn = styled.button`
  position: absolute;
  top: max(18px, env(safe-area-inset-top, 18px));
  right: 18px;
  z-index: 10000;
  background: rgba(255, 255, 255, 0.15);
  border: none;
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  backdrop-filter: blur(4px);
  transition: background 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export const ZoomImage = styled.img`
  max-width: 95vw;
  max-height: 90vh;
  object-fit: contain;
  border-radius: 8px;
  pointer-events: none;
  transition: transform 0.15s ease;
`;
