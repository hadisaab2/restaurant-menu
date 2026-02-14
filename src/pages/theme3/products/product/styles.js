import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: ${props => props.$isFeatured ? '100%' : '50%'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    @media (min-width: 1024px) {
        width: ${props => props.$isFeatured ? '100%' : '20%'};
    }
`;
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.theme.BoxColor};
    border-radius: 20px;
    position: relative;

    //cjhange loadeeerr wrappperr and this oneee colorrrr

`;

export const Image = styled.img`
width:90%;
height:100%;
object-fit: cover;
border-radius: 10px;
visibility: ${props=>props.imageLoaded?"visible":"hidden"};
/* display:${props=>props.imageLoaded?"block":"none"} */
`;
export const ImageContainer = styled.div`
width:100%;
height: 20vh;
overflow: hidden;
margin-top: 10px;
display: flex;
justify-content: center;
border-radius: 10px;
@media (min-width: 1024px) {
  height: 30vh;
    }


`;
export const TextContainer = styled.div`
width:90%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: ${props=>props.activeLanuguage=="en"?"left":"right"};
position: relative;
align-items: ${props=>props.activeLanuguage=="en"?"flex-start":"flex-end"};
gap:5px;
height: 10vh;
margin-top: 5px;

`;
export const PlateName = styled.span`
font-size: ${props=>props.fontSize};
font-weight: 500;
color:${props=>props.theme.BoxTextColor};

display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 3em; /* Adjust based on line-height */
  line-height: 1.5em; /* Adjust based on your font size and design */



`;

export const PriceContainer = styled.div`
display: flex;
flex-direction: row;
gap:5px;
`;

export const PlatePrice = styled.span`
color:${props=>props.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;
text-decoration:${props=>props.discounted?"line-through":"none"};


`;

export const DiscountPrice = styled.span`
color:${props=>props.theme.BoxPriceColor};
font-size: 14px;
word-spacing: 0px;

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
  border-left-color: #333; /* Change color as needed */
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
  width:91%;
height: 20vh;
border-radius: 10px;
overflow: hidden;
top: 10px;
  z-index: 3;
  background-color: ${props=>props.theme.categoryUnactive};

`;

export const NEW = styled.div`
position: absolute;
right: ${props=>props.activeLanuguage=="en"?"5px":null};
left: ${props=>props.activeLanuguage=="en"?null:"5px"};
bottom: 15px;
font-size: 13px;
padding-left: 5px;
padding-right: 5px;
 background-color:${props=>props.theme.mainColor};
 color:${props=>props.theme.popupbuttonText};
 border-radius: 4px;

`;

export const QuickAddButton = styled.button`
  position: absolute;
  bottom: 8px;
  right: ${(props) => (props.activeLanuguage === "en" ? "8px" : "auto")};
  left: ${(props) => (props.activeLanuguage === "en" ? "auto" : "8px")};
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 0;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: auto;
  z-index: 10;
  transition: transform 0.2s ease, opacity 0.2s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  
  &:hover {
    transform: scale(1.1);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${(props) => props.theme.mainColor}40;
  }
`;

export const OutOfStockBadge = styled.div`
  position: absolute;
  bottom: 8px;
  right: ${(props) => (props.activeLanuguage === "en" ? "8px" : "auto")};
  left: ${(props) => (props.activeLanuguage === "en" ? "auto" : "8px")};
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  background: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.mainColor};
  border: 0;
`;