import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";

const slideAnimation = (x, y,width) => keyframes`
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
    height: 70vh;
    border-radius: 0px;

}
`;

const BackIconAnimation  = keyframes`
 0% { 
    left:-90px;
    opacity:0;
}

 100% { 
    left:30px;
    opacity:1;}
`;

export const BackIcon = styled(IoIosArrowBack)`
position: fixed;
z-index: 6;
top:30px;
left:30px;
  font-size: 22px;
  color:white;
  background-color: ${props=>props.theme.mainColor};
  padding-left: 4px;
  padding-right: 4px;
padding-top: 3px;
padding-bottom: 3px;
animation: ${BackIconAnimation} 1s ease-in-out;

`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
export const ImageContainer = styled.div`
position:fixed;
  width: 100%;
  top:0;
  left:0;
  height: 70vh;
  overflow: hidden;
  animation: ${({ x, y,width }) => slideAnimation(x, y,width)} 0.8s ease-in-out;
  z-index: 3;
  border-radius: 0px;

`;


const InfoAnimation  = keyframes`
 0% { 
    bottom: -80vh;
}

 100% { 
    bottom: 0;
}
`;

export const ItemInfo = styled.div`
position:fixed;
z-index: 4;

  bottom:0;
  height: 40vh;
  width: 100%;
  background-color:${props=>props.theme.backgroundColor};
  display: flex;
  flex-direction: column;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2); 
  animation: ${InfoAnimation} 0.8s ease-in-out;
`;
export const ItemName = styled.span`
font-size: 23px;
font-weight: bold;
width: 60%;
margin-top: 40px;
margin-left: 20px;

`;

export const ItemDescription = styled.span`
font-size: 16px;
font-weight: 300;
width: 80%;
margin-top: 20px;
word-spacing: 1px;
margin-left: 20px;


`;
export const ItemPrice = styled.span`
font-size: 22px;
font-weight: 500;
width: 80%;
margin-top: 20px;
color:${props=>props.theme.mainColor};
margin-left: 20px;


`;
