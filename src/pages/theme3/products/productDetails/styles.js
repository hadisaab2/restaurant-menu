import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import _ from "lodash";


// Backdrop fade-in animation - smoother
const backdropFadeIn = keyframes`
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
`;

// Popup expand animation - starts as a line in the middle, then expands to floating modal
const popupExpand = keyframes`
  0% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
  8% {
    opacity: 1;
  }
  35% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
  }
  65% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.98);
    border-radius: 20px;
    opacity: 1;
  }
  85% {
    transform: translate(-50%, -50%) scale(1.01);
  }
  100% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
`;

// Popup close animation - collapses back to a line
const popupCollapse = keyframes`
  0% {
    width: 92%;
    height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  20% {
    transform: translate(-50%, -50%) scale(0.98);
    opacity: 0.95;
  }
  50% {
    width: 92%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0.6;
  }
  80% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 2px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 0px;
    opacity: 0;
  }
`;

// Backdrop component
export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 299;
  opacity: ${props => props.CloseAnimation ? 1 : 0};
  animation: ${props => props.CloseAnimation ? backdropFadeIn : 'none'} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`;

export const Wrapper = styled.div`
  position: fixed;
  width: 92%;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  max-height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom) - 90px);
  align-items: center;
  justify-content: flex-start;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.backgroundColor};
  padding-bottom: 0;
  overflow-y: ${props => props.CloseAnimation ? 'auto' : 'hidden'};
  overflow-x: hidden;
  z-index: 300;
  border-radius: 24px;
  box-shadow: ${props => props.CloseAnimation 
    ? '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
    : 'none'};
  display: flex;
  flex-direction: column;
  
  animation: ${props => props.CloseAnimation ? popupExpand : popupCollapse} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.mainColor || '#007bff'}40;
    border-radius: 10px;
    &:hover {
      background: ${props => props.theme.mainColor || '#007bff'}60;
    }
  }
  
  @media (min-width: 768px) {
    width: 88%;
    max-width: 900px;
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    border-radius: 28px;
    box-shadow: ${props => props.CloseAnimation 
      ? '0 24px 80px rgba(0, 0, 0, 0.35), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
      : 'none'};
  }
  
  @media (min-width: 1024px) {
    width: 85%;
    max-width: 1000px;
    border-radius: 32px;
    box-shadow: ${props => props.CloseAnimation 
      ? '0 32px 100px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 0, 0, 0.05)' 
      : 'none'};
  }
`;




const ImageAnimation = keyframes`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:45vh;
    top:80px;

    }
`;
const ImageAnimationScreen = keyframes`
 0% { 
    height:30vh;
    top:0px;
}

 100% { 
    height:70vh;
    top:80px;

    }
`;

export const ImagesContainer = styled.div`
  width: 100%;
  height: ${(props)=>props.squareDimension?"55vh":"70vh"};
  margin-top: 65px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: visible;
  position: relative;
`;

export const SwiperWrapper = styled.div`
  width: 85%;
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
    border-radius: 18px;
    overflow: hidden;
    box-shadow: none !important;
  }
  .swiper-pagination {
    bottom: 8px;
  }
  .swiper-pagination-fraction {
    color: ${(props) => props.theme.textColor || "#333"};
    font-size: 14px;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position: relative;
  transform: ${(props) => `translateX(-${props.carouselIndex * 100}%)`};
  transition: all 0.2s ease;
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
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;


export const Loader = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.1);
  border-left-color: ${(props) => props.theme.mainColor}; /* Change color as needed */
  border-radius: 50%;
  width: 20px;
  height: 20px;
  animation: ${spin} 1s linear infinite; /* Apply animation */
`;

export const LoaderWrapper = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width:100%;
height: 100%;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${(props) =>
    props.$cardSlide ? "0" : (props.CloseAnimation ? "40px" : "10px")};
  width: ${(props) =>
    props.$cardSlide ? "100%" : (props.CloseAnimation ? "90%" : "100%")};
  display: ${(props) => (props.Loaded ? "block" : "none")};
  transition: all 0.8s;
  margin: 0 auto;
  @media (min-width: 1024px) {
    width: ${(props) =>
      props.$cardSlide ? "100%" : (props.CloseAnimation ? "50%" : "100%")};
  }
`;
const BackIconAnimation = keyframes`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1
    }
`;

export const BackIcon = styled(IoIosArrowBack)`
  font-size: 14px;
  color: ${(props) => props.theme.backgroundColor || "#ffffff"};
`;

export const CarouselBack = styled(IoIosArrowBack)`
  font-size: 26px;
  color: ${(props) => props.theme.backgroundColor || "#fff"};
  background-color: ${(props) => props.theme.mainColor || "#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  left:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  @media (min-width: 1024px) {
    left:27%;
  }
`;

export const CarouselForward = styled(IoIosArrowForward)`
  font-size: 26px;
  color: ${(props) => props.theme.backgroundColor || "#fff"};
  background-color: ${(props) => props.theme.mainColor || "#007bff"};
  border-radius: 50%;
  padding: 8px;
  position:absolute;
  right:4%;
  top:45%;
  z-index:20;
  cursor: pointer;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  @media (min-width: 1024px) {
    right:27%;
  }
`;
export const ProductHeader = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  flex-shrink: 0;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  z-index: 301;
  background-color: ${props => props.theme.backgroundColor || "#fff"};
  transition: opacity 0.4s ease-in-out;
  
  @media (min-width: 1024px) {
    padding: 20px 40px;
  }
`;

export const ProductHeaderTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0;
  text-align: center;
  flex: 1;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 20px;
  
  @media (min-width: 768px) {
    font-size: 22px;
    font-weight: 700;
  }
`;

export const BackBtn = styled.button`
  position: relative;
  z-index: 302;
  outline: none;
  border: 0;
  background-color: ${(props) => props.theme.mainColor || "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  flex-shrink: 0;
  width: 27px;
  height: 27px;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    opacity: 0.9;
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const ItemCategory = styled.div`
  width: 100%;
  height: 90px;
  position: relative;
  color: black;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;
const CategoryAnimation = keyframes`
 0% { 
    margin-top: -50px;
    opacity: 0;
}
50%{
  margin-top: -50px;
    opacity: 0;
}
 100% { 
    margin-top: 0px;
    opacity: 1;

}
`;
export const Category = styled.span`
  font-size: 17px;
  font-weight: 600;
  margin-top: 0px;
  color: ${(props) => props.theme.textColor};
  animation: ${CategoryAnimation} 1s ease-in-out;
`;

export const FakeContainer = styled.div`
  width:90%;
  /* height: ${(props) => (props.CloseAnimation ? "45vh" : "25vh")}; */
  height: ${(props)=>props.squareDimension?"45vh":"60vh"};

  border-radius:40px;
  margin-top: 80px;
  display:flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${ImageAnimation} 0.4s;
  @media (min-width: 1024px) {
    height: 70vh;
    }
  /* background-color: red; */
`;
const QuantityAnimation = keyframes`
 0% { 
  margin-left: -70px;
  opacity: 0;
}
50%{
  margin-left: -70px;
  opacity: 0;
}
100% { 
  margin-left: 0;
  opacity: 1;
}
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

  animation: ${QuantityAnimation} 0.8s ease-in-out;

`;

export const ItemInfo = styled.div`
  width: 90%;
  display: flex;
  align-items: ${props => props.activeLanguage == "en" ? "flex-start" : "flex-end"};; 
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 100px;
  color: ${(props) => props.theme.textColor};
  opacity: ${(props) => (props.CloseAnimation ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.CloseAnimation ? "auto" : "none")};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`;

export const TitlePriceRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  margin-bottom: 14px;
  padding-bottom: 14px;
  border-bottom: 1px solid ${(props) => props.theme.mainColor ? `${props.theme.mainColor}18` : "rgba(0,0,0,0.06)"};
  flex-wrap: wrap;
  direction: ${props => props.activeLanguage === "en" ? "ltr" : "rtl"};
`;

export const ItemName = styled.span`
  font-size: clamp(1.3rem, 3.8vw, 1.55rem);
  font-weight: 700;
  letter-spacing: ${props => props.activeLanguage === "en" ? "0.02em" : "0"};
  line-height: 1.35;
  text-align: ${props => props.activeLanguage === "en" ? "left" : "right"};
  color: ${(props) => props.theme.textColor};
  flex: 1;
  min-width: 0;
  margin: 0;
`;


export const ItemDescription = styled.span`
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  margin-top: 5px;
  /* white-space: pre-line; */
  text-align:${props => props.activeLanguage == "en" ? "left" : "right"};
  direction: ${props => props.activeLanguage == "en" ? "ltr" : "rtl"} ;
  opacity: 0.8;
`;

export const OutOfStockNotice = styled.div`
  margin-top: 8px;
  font-size: 12px;
  font-weight: 600;
  color: ${(props) => props.theme.popupbackgroundColor};
  background: ${(props) => props.theme.mainColor};
  border: 0;
  padding: 4px 10px;
  border-radius: 999px;
  align-self: flex-start;
`;

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  padding: 10px 18px;
  border-radius: 12px;
  background: ${(props) => props.theme.mainColor ? `${props.theme.mainColor}14` : "rgba(0,0,0,0.06)"};
  border: 1px solid ${(props) => props.theme.mainColor ? `${props.theme.mainColor}28` : "rgba(0,0,0,0.08)"};
  box-shadow: 0 1px 3px rgba(0,0,0,0.04);
`;

export const ItemPrice = styled.span`
  font-size: clamp(0.9rem, 2.2vw, 1rem);
  font-weight: ${props => props.discounted ? "500" : "600"};
  color: ${(props) =>
    props.discounted
      ? (props.theme.textColor ? `${props.theme.textColor}88` : "rgba(0,0,0,0.45)")
      : (props.theme.mainColor || "inherit")};
  text-decoration: ${props => props.discounted ? "line-through" : "none"};
  letter-spacing: 0.02em;
`;

export const DiscountPrice = styled.span`
  font-size: clamp(1.15rem, 3vw, 1.4rem);
  font-weight: 700;
  color: ${(props) => props.theme.mainColor || "inherit"};
  letter-spacing: 0.03em;
`;


const AddToCartAnimation = keyframes`
 0% { 
   bottom: -100%;
}
100% { 
  bottom: 0;
}
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${AddToCartAnimation} 0.7s ease-in-out;
  background-color: ${(props) => props.theme.backgroundColor};
  display: flex;
  padding-bottom: max(10px, env(safe-area-inset-bottom));
  padding-top: 16px;
  margin-top: 8px;
  opacity: ${(props) => (props.CloseAnimation ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.CloseAnimation ? "auto" : "none")};
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
    border-radius: 10px;
    height: 40px;
  color: ${(props) => props.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${(props) => props.theme.mainColor};
  font-size: 12px;
`;

export const QuantityPrice = styled.span`
position: absolute;
right: 10%;
  font-size: 12px;
  color: ${(props) => props.theme.popupbuttonText};
  word-spacing: 1px;

`;


export const QuantityWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  color: ${(props) => props.theme.mainColor};
  width: 60%;
  z-index: 2000;
  opacity: ${(props) => (props.CloseAnimation ? 1 : 0)};
  transition: opacity 0.3s ease;
  pointer-events: ${(props) => (props.CloseAnimation ? "auto" : "none")};

`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`;
export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 18px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 15px;
`;


const CopyBtnAnimation = keyframes`
 0% { 
  right:-90px;
    opacity:0;
}

 100% { 
  right:30px;
    opacity:1
    }
`;

export const CopyButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 27px;
  width: 27px;
  border-radius: 50%;
  position: relative;
  z-index: 302;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.backgroundColor};
  flex-shrink: 0;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 1024px) {
    height: 30px;
    width: 30px;
    font-size: 16px;
  }
`;


export const InstructionContainer = styled.span`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap:10px;
  margin-top: 40px;
  align-items: ${props => props.activeLanguage == "en" ? "flex-start" : "flex-end"};;

`;


export const InstructionLabel = styled.span`
 
  font-size: 13px;
  color:${(props) => props.theme.formColor};

`;



export const Instruction = styled.input`
background-color: transparent;
border: 1px solid ${(props) => {
    let color = props?.theme?.formColor; // Get the color
    const opacity = 0.8; // Desired opacity (e.g., 50%)

    if (color.startsWith("#")) {
      // HEX to RGBA conversion
      const r = parseInt(color.slice(1, 3), 16);
      const g = parseInt(color.slice(3, 5), 16);
      const b = parseInt(color.slice(5, 7), 16);
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    } else if (color.startsWith("rgb")) {
      // Adjust existing RGB/RGBA
      return color.replace(/rgba?\(([^)]+)\)/, (_, values) => {
        const rgbValues = values.split(",").slice(0, 3).join(","); // Extract RGB values
        return `rgba(${rgbValues}, ${opacity})`;
      });
    }
    return color; // Fallback if format is unsupported
  }};
  text-align:${props => props.activeLanguage == "en" ? "left" : "right"};
direction: ${props => props.activeLanguage == "en" ? "ltr" : "rtl"} ;
&:focus{
  outline: none;
}
&::placeholder{
  color:${(props) => props.theme.formColor};
  opacity: 0.5;
}
font-size: 13px;
color:${(props) => props.theme.formColor};
width: 100%;
padding: 10px;
border-radius: 10px;

`;

export const MagnifyBtn = styled.button`
  position: absolute;
  bottom: 14px;
  right: 25px;
  z-index: 25;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme.mainColor || "#007bff"};
  color: ${(props) => props.theme.backgroundColor || "#fff"};
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 2px 10px rgba(0,0,0,0.2);
  transition: transform 0.2s ease;
  &:active {
    transform: scale(0.9);
  }
`;

export const ZoomOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;
  background: rgba(0,0,0,0.92);
  display: flex;
  align-items: center;
  justify-content: center;
  touch-action: none;
`;

export const ZoomCloseBtn = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 10000;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255,255,0.15);
  color: #fff;
  font-size: 22px;
  cursor: pointer;
  backdrop-filter: blur(4px);
`;

export const ZoomImage = styled.img`
  max-width: none;
  max-height: none;
  transform-origin: center center;
  transform: ${(props) => `scale(${props.$scale}) translate(${props.$translateX}px, ${props.$translateY}px)`};
  transition: ${(props) => props.$dragging ? "none" : "transform 0.2s ease"};
  user-select: none;
  -webkit-user-drag: none;
  width: 100vw;
  height: auto;
  object-fit: contain;
`;
