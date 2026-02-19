import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  40% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
  }
  100% {
    width: 92%;
    height: calc(100vh - 40px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }

  @media (min-width: 768px) {
    40% {
      width: 88%;
      border-radius: 28px;
    }
    100% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    40% {
      width: 85%;
      border-radius: 32px;
    }
    100% {
      width: 85%;
      border-radius: 32px;
    }
  }
`;

// Popup close animation - collapses back to a line
const popupCollapse = keyframes`
  0% {
    width: 92%;
    height: calc(100vh - 40px);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 1;
  }
  60% {
    width: 92%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1);
    border-radius: 24px;
    opacity: 0.5;
  }
  90% {
    opacity: 0.3;
  }
  100% {
    width: 0%;
    height: 3px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0.8);
    border-radius: 0px;
    opacity: 0;
  }

  @media (min-width: 768px) {
    0% {
      width: 88%;
      border-radius: 28px;
    }
    60% {
      width: 88%;
      border-radius: 28px;
    }
  }

  @media (min-width: 1024px) {
    0% {
      width: 85%;
      border-radius: 32px;
    }
    60% {
      width: 85%;
      border-radius: 32px;
    }
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
  animation: ${props => props.CloseAnimation ? backdropFadeIn : 'none'} 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transition: opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  /* Always capture clicks while mounted so closing doesn't let taps pass through to product grid (avoids reopen on 2nd close) */
  pointer-events: auto;
`;

export const SearchProductContainer = styled.div`
  position: fixed;
  width: 92%;
  height: calc(100vh - 40px);
  max-height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
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
  
  /* Animation based on CloseAnimation state - smoother easing */
  animation: ${props => props.CloseAnimation ? popupExpand : popupCollapse} 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  animation-fill-mode: forwards;
  
  /* Smooth scrolling */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  ::-webkit-scrollbar {
    width: 6px;
  }
  
  ::-webkit-scrollbar-track {
    background: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.mainColor || '#007bff'}40;
    border-radius: 3px;
  }
  
  @media (min-width: 768px) {
    width: 88%;
    border-radius: 28px;
  }
  
  @media (min-width: 1024px) {
    width: 85%;
    border-radius: 32px;
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
  min-height: ${(props) => (props.squareDimension ? "45vh" : "60vh")};
  margin-top: 80px;
  transition: all 0.8s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: visible;
  position: relative;
  padding: 0 5%;
  @media (min-width: 1024px) {
    min-height: ${(props) => (props.squareDimension ? "50vh" : "65vh")};
    margin-top: 90px;
  }
`;
export const Carousel = styled.div`
  width: 100%;
  min-height: calc(100% - 80px);
  white-space: nowrap;
  position: relative;
  transform: ${(props) => `translateX(-${props.carouselIndex * 100}%)`};
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  overflow: visible;
  margin-top: 60px;
  
  @media (min-width: 768px) {
    margin-top: 70px;
  }
`;
export const CarouselItem = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;
  flex-shrink: 0;
  padding: 0 10px;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 0 20px;
  }
`;
export const ImageWrapper = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;
  margin: 0 5px;
  
  @media (min-width: 768px) {
    margin: 0 10px;
  }
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

const shimmer = keyframes`
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
`;

export const SkeletonBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "24px"};
  border-radius: ${(props) => props.radius || "8px"};
  background: linear-gradient(
    90deg,
    ${(props) => (props.theme.textColor ? `${props.theme.textColor}0c` : "rgba(0,0,0,0.06)")} 25%,
    ${(props) => (props.theme.textColor ? `${props.theme.textColor}18` : "rgba(0,0,0,0.1)")} 50%,
    ${(props) => (props.theme.textColor ? `${props.theme.textColor}0c` : "rgba(0,0,0,0.06)")} 75%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.2s ease-in-out infinite;
`;

export const ProductDetailSkeleton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 5%;
  margin-top: 12px;
`;

export const Image = styled.img`
  max-height: 70vh;
  height: auto;
  width: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: ${(props) => (props.CloseAnimation ? "20px" : "10px")};
  display:${props => props.Loaded ? 'block' : 'none'};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${props => props.theme.backgroundColor || "#f5f5f5"};
  
  @media (min-width: 1024px) {
    max-height: 75vh;
    border-radius: ${(props) => (props.CloseAnimation ? "24px" : "10px")};
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
  font-size: 22px;
  color: white;
  position:absolute;
  left:7%;
  top:45%;
  z-index:20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  @media (min-width: 1024px) {
    left:27%;


    }

`;

export const CarouselForward = styled(IoIosArrowForward)`
  font-size: 22px;
  color: white;
  position:absolute;
  right:7%;
  top:45%;
  z-index:20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  @media (min-width: 1024px) {
    right:27%;


    }
`;
export const ProductHeader = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: center;
  justify-content: space-between;
  padding: 20px 30px;
  z-index: 301;
  background-color: ${props => props.theme.backgroundColor || "transparent"};
  transition: opacity 0.4s ease-in-out;
  
  @media (min-width: 1024px) {
    padding: 25px 40px;
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
  position: absolute;
  top: 0;
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
  animation: ${CategoryAnimation} 1.8s ease-in-out;
`;

export const FakeContainer = styled.div`
  width:90%;
  height: 45vh;
  margin-top: 80px;
  display: flex;
  overflow: hidden;
  transition: all 1s;
  animation: ${ImageAnimation} 0.8s;
  @media (min-width: 1024px) {
    height: ${(props) => (props.CloseAnimation ? "70vh" : "30vh")};
    }
`;

const QuantityAnimation = keyframes`
 0% { 
  margin-top: -20px;
  opacity: 0;
}
100% { 
  margin-top: 10px;
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

  animation: ${QuantityAnimation} 1.8s ease-in-out;

`;

export const ItemInfo = styled.div`
  width: 90%;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: ${props => props.activeLanguage == "en" ? "flex-start" : "flex-end"};;
  flex-direction: column;
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
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;
  margin-top: auto;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${AddToCartAnimation} 0.7s ease-in-out;
  background-color: ${(props) => props.theme.backgroundColor};
  z-index: 301;
  display: flex;
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1);
  padding-bottom: 10px;
  padding-top: 10px;
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
  position: relative;
  cursor: pointer;
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
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  flex-direction: row;
  height: 45px;
  color: ${(props) => props.theme.mainColor};
  width: 60%;
  z-index: 2000;

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


