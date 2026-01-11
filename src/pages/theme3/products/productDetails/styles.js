import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import _ from "lodash";


const slideAnimation = (x, y, width) => keyframes`
 0% { 
    right: -100%;
    
}
 100% { 
    right: 0;

}
`;

const slideAnimationScreen = (x, y, width) => keyframes`
 0% { 
    left: ${x}px;
    top:${y}px;
    width:${width}px;
    height:30vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    height: 100vh;
    border-radius: 0px;

}
`;

export const Wrapper = styled.div`
  
position: fixed;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;
top:0;
left: 0;
right: ${props => props.CloseAnimation ? 0 : "-100%"};
color:${props => props.theme.textColor};
background-color:${props => props.theme.backgroundColor};
padding-bottom:150px;

  overflow: scroll;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${slideAnimation} 0.5s;
  z-index: 300;
  ::-webkit-scrollbar {
    display: none;
  }
  @media (min-width: 1024px) {
    /* animation: ${({ x, y, width }) => slideAnimationScreen(x, y, width)} 0.8s;
    height: ${(props) => (props.CloseAnimation ? "100vh" : `30vh`)}; */

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
  min-height: ${(props)=>props.squareDimension?"45vh":"60vh"};
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
    min-height: ${(props)=>props.squareDimension?"50vh":"65vh"};
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

export const CarouselBack = styled.button`
  font-size: 24px;
  color: ${props => props.theme.textColor || "#ffffff"};
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.disabled ? 0.4 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (min-width: 1024px) {
    left: 20px;
    width: 48px;
    height: 48px;
    font-size: 26px;
  }
`;

export const CarouselForward = styled.button`
  font-size: 24px;
  color: ${props => props.theme.textColor || "#ffffff"};
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  opacity: ${props => props.disabled ? 0.4 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  
  &:hover {
    background: rgba(255, 255, 255, 1);
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (min-width: 1024px) {
    right: 20px;
    width: 48px;
    height: 48px;
    font-size: 26px;
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
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: ${props => props.activeLanguage == "en" ? "flex-start" : "flex-end"};;
  flex-direction: column;
  /* align-items: center; */
  position: relative;
  margin-top: 20px;
  padding-bottom: 10vh;
  color: ${(props) => props.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`;

export const ItemName = styled.span`
  font-size: 21px;
  font-weight: bold;
  margin-left:${props => props.activeLanguage == "en" ? "0px" : null} ;
  margin-right:${props => props.activeLanguage == "en" ? null : "0px"} ;
  text-align:${props => props.activeLanguage == "en" ? "left" : "right"} ;
  opacity: 1;
  margin-top: 5px;
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
gap:8px;
`;

export const ItemPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  transform: scale(1);
  color: ${(props) => props.theme.mainColor};;
  border-radius: 10px;
  text-decoration: ${props=>props.discounted?"line-through":"none"};
  word-spacing: 0px;

`;
export const DiscountPrice = styled.span`
  font-size: 16px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${(props) => props.theme.mainColor};;
  border-radius: 10px;
  word-spacing: 0px;

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
  position: fixed;
  bottom: 0;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  animation: ${AddToCartAnimation} 0.7s ease-in-out;
  background-color: ${(props) => props.theme.backgroundColor};

  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  box-shadow: 0px -3px 5px rgba(180, 180, 180, 0.1); /* Slight shadow on the top */
  padding-bottom: 10px;
  margin-top: 30px;
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

export const ThumbnailGallery = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  padding: 12px 5%;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  
  &::-webkit-scrollbar {
    height: 4px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.mainColor || "#007bff"}40;
    border-radius: 2px;
  }
  
  @media (min-width: 768px) {
    gap: 12px;
    padding: 16px 5%;
  }
`;

export const ThumbnailItem = styled.button`
  min-width: 60px;
  width: 60px;
  height: 60px;
  border-radius: 12px;
  overflow: hidden;
  border: 2px solid ${props => props.active 
    ? (props.theme.mainColor || props.theme.maincolor || "#007bff")
    : "transparent"};
  background: ${props => props.theme.backgroundColor || "#ffffff"};
  cursor: pointer;
  padding: 0;
  position: relative;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: ${props => props.active ? 1 : 0.7};
  
  &:hover {
    opacity: 1;
    transform: scale(1.05);
    border-color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"}80;
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  @media (min-width: 768px) {
    min-width: 70px;
    width: 70px;
    height: 70px;
    border-radius: 14px;
  }
`;

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const ImageCounter = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  color: white;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  z-index: 10;
  display: ${props => props.show ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    bottom: 16px;
    right: 16px;
    padding: 6px 14px;
    font-size: 13px;
  }
`;

