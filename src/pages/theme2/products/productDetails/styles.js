import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const slideAnimation = (x, y, width) => keyframes`
 0% { 
    left: ${x}px;
    top:${y}px;
    width:${width}px;
    height:20vh;
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
  width: ${(props) => (props.CloseAnimation ? "100%" : `${props.width}px`)};
  top: ${(props) => (props.CloseAnimation ? "0" : `${props.y}px`)};
  left: ${(props) => (props.CloseAnimation ? "0" : `${props.x}px`)};
  height: ${(props) => (props.CloseAnimation ? "100vh" : `20vh`)};
  border-radius: ${(props) => (props.CloseAnimation ? "0px" : `10px`)};
  overflow: scroll;
  transition: all 0.8s;
  animation: ${({ x, y, width }) => slideAnimation(x, y, width)} 0.8s;
  z-index: 6;
  ::-webkit-scrollbar {
    display: none;
  }
  background-color: ${(props) => props.theme.backgroundColor};
  @media (min-width: 1024px) {
    animation: ${({ x, y, width }) => slideAnimationScreen(x, y, width)} 0.8s;
    height: ${(props) => (props.CloseAnimation ? "100vh" : `30vh`)};



    }

`;



const ImageAnimation = keyframes`
 0% { 
    height:20vh;
    top:0px;
}

 100% { 
    height:55vh;
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
  height: ${(props) => (props.CloseAnimation ? "55vh" : "20vh")};
  position: absolute;
  top: ${(props) => (props.CloseAnimation ? "80px" : "0px")};
  
  transition: all 0.8s;
  animation: ${ImageAnimation} 0.8s;
  display: flex;
  justify-content: center;
  overflow: hidden;
  @media (min-width: 1024px) {
    height: ${(props) => (props.CloseAnimation ? "70vh" : "30vh")};
    animation: ${ImageAnimationScreen} 0.8s;

    }
`;
export const Carousel = styled.div`
  width: 100%;
  height: 100%;
  white-space: nowrap;
  position:relative;
  transform: ${(props) => `translateX(-${props.carouselIndex * 100}%)`};
  transition: all 0.2s ease;
`;
export const CarouselItem = styled.div`
  height: 100%;
  width: 100%;
  display: inline-block;
  vertical-align: top;

`;
export const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display:flex;
  align-items:center;
  justify-content:center;
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
  border-radius: ${(props) => (props.CloseAnimation ? "40px" : "10px")};
  width: ${(props) => (props.CloseAnimation ? "90%" : "100%")};
  display:${props => props.Loaded ? 'block' : 'none'};
  transition: all 0.8s;
    @media (min-width: 1024px) {
      width: ${(props) => (props.CloseAnimation ? "50%" : "100%")};


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
  font-size: 22px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};

  padding: 4px;
  border-radius: 50%;
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
export const BackBtn = styled.button`
  position: fixed;
  z-index: 8;
  top: 30px;
  left: 30px;
  outline: none;
  border: 0;
  background-color: transparent;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  animation: ${BackIconAnimation} 0.8s ease-in-out;
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
  width: ${(props) => (props.CloseAnimation ? "90%" : "100%")};
  height: ${(props) => (props.CloseAnimation ? "55vh" : "25vh")};
  border-radius: ${(props) => (props.CloseAnimation ? "40px" : "10px")};
  margin-top: ${(props) => (props.CloseAnimation ? "80px" : "0px")};
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  overflow: hidden;
  transition: all 1s;
  animation: ${ImageAnimation} 0.8s;
  @media (min-width: 1024px) {
    height: ${(props) => (props.CloseAnimation ? "70vh" : "30vh")};
    }
  /* background-color: red; */
`;
const QuantityAnimation = keyframes`
 0% { 
  margin-top: 0px;
  opacity: 0;
}
100% { 
  margin-top: -20px;
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
  margin-top: -20px;

  animation: ${QuantityAnimation} 1.4s ease-in-out;

`;
export const ItemInfo = styled.div`
  width: 90%;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  align-items: ${props => props.activeLanguage == "en" ? "flex-start" : "flex-end"};;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 20px;
  padding-bottom: 10vh;
  color: ${(props) => props.theme.textColor};
  @media (min-width: 1024px) {
        width: 50%;
    }
    /* background-color: red; */
`;

const NameAnimationLeft = keyframes`
 0% { 
    margin-left: -50px;
    opacity: 0;
}
50%{
  margin-left: -50px;
    opacity: 0;
}
 100% { 
    margin-left: 0px;
    opacity: 1;

}
`;
const NameAnimationRight = keyframes`
 0% { 
    margin-right: -50px;
    opacity: 0;
}
50%{
  margin-right: -50px;
    opacity: 0;
}
 100% { 
    margin-right: 0px;
    opacity: 1;

}
`;
export const ItemName = styled.span`
  font-size: 23px;
  font-weight: bold;
  width: 100%;
  margin-left:${props => props.activeLanguage == "en" ? "0px" : null} ;
  margin-right:${props => props.activeLanguage == "en" ? null : "0px"} ;
  text-align:center;
  opacity: 1;
  margin-top: 10px;
  /* animation: ${props => props.activeLanguage == "en" ? NameAnimationLeft : NameAnimationRight} 1.4s ease-in-out; */
`;


export const ItemDescription = styled.span`
  font-size: 16px;
  font-weight: 300;
  width: 100%;
  margin-top: 20px;
  word-spacing: 1px;
  white-space: pre-line;
  text-align: center;
  direction: ${props => props.activeLanguage == "en" ? "ltr" : "rtl"} ;;
`;

export const ItemPrice = styled.span`
  font-size: 20px;
  font-weight: 600;
  word-spacing: 3px;
  transform: scale(1);
  color: ${(props) => props.theme.mainColor};;
  padding: 10px;
  border-radius: 10px;
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
  flex-direction: row;
  align-items: center;
  gap: 10px;
  animation: ${AddToCartAnimation} 1.4s ease-in-out;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};

  margin-top: 30px;
  height: 50px;
  @media (min-width: 1024px) {
        width: 50%;
    }
`;
export const AddToCart = styled.button`
  flex: 1;
  outline: none;
  border: 0;
  cursor: pointer;
  height: 100%;

  color: ${(props) => props.theme.popupbuttonText};
  font-weight: 400;
  background-color: ${(props) => props.theme.mainColor};
`;



export const QuantityWrapper = styled.div`
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  flex-direction: row;
  height: 50px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbuttonText};
  border-radius: 25px;
  width: 150px;
  z-index: 2000;

`;

export const Plus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;
`;
export const Minus = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 20px;
`;

export const Quantity = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  font-size: 17px;
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
 position: fixed;
  z-index: 8;
  top: 30px;
  background-color: ${props => props.theme.mainColor};
  color: ${props => props.theme.backgroundColor};
  right: 30px;
  display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
  animation: ${CopyBtnAnimation} 0.8s ease-in-out;
  font-size: 14px;
  cursor: pointer;
`;

