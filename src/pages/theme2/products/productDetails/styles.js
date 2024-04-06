import styled from "styled-components";
import { keyframes } from "styled-components";
import { IoIosArrowBack } from "react-icons/io";


const slideAnimation = (x, y,width) => keyframes`
 0% { 
    left: ${x}px;
    top:${y}px;
    width:${width}px;
    min-height:20vh;
    border-radius: 10px;
    
}
 100% { 
    left: 0;
    top:0;
    width:100%;
    min-height: 110vh;
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
    opacity:1
    }
`;

export const BackIcon = styled(IoIosArrowBack)`
font-size: 22px;
color:white;
background-color: ${props=>props.theme.mainColor};
padding: 4px;
border-radius: 50%;
`;
export const BackBtn =  styled.button`
position: fixed;
z-index: 8;
top:30px;
left:30px;
outline: none;
border:0;
background-color: transparent;
display: ${props=>props.CloseAnimation?"flex":"none"};
animation: ${BackIconAnimation} 0.8s ease-in-out;
`;

export const ItemCategory = styled.div`
width: 100%;
height: 90px;
position: absolute;
top:0;
color:black;
display: ${props=>props.CloseAnimation?"flex":"none"};
justify-content: center;
align-items: center;

`;
const CategoryAnimation  = keyframes`
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
 color:${props=>props.theme.textColor};
 animation: ${CategoryAnimation} 1.8s ease-in-out;


`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;


export const Wrapper = styled.div`
position:fixed;
  width: ${props=>props.CloseAnimation?"100%":`${props.width}px`};
  top:${props=>props.CloseAnimation?"0":`${props.y}px`};
left:${props=>props.CloseAnimation?"0":`${props.x}px`};
  min-height: ${props=>props.CloseAnimation?"110vh":`20vh`};
  overflow: hidden;
  transition:all 0.8s ease-in-out;
  animation: ${({ x, y,width }) => slideAnimation(x, y,width)} 0.8s ease-in-out;
  z-index: 6;
  border-radius: 0px;
  background-color: ${props=>props.theme.backgroundColor};
  display: flex;
  justify-content: center;
`;
const ImageAnimation  = keyframes`
 0% { 
    width:100%;
    height:100%;
    border-radius: 10px;
    top:0px;
}

 100% { 
    width:90%;
    height:45%;
    border-radius: 40px;
    top:80px;

    }
`;
export const ImageContainer = styled.div`
  width: ${props=>props.CloseAnimation?"90%":"100%"};
height:${props=>props.CloseAnimation?"45%":"100%"}; 
position: absolute;
border-radius: ${props=>props.CloseAnimation?"40px":"10px"};
top:${props=>props.CloseAnimation?"80px":"0px"};
overflow: hidden;
transition:all 1s;
animation:${ImageAnimation} 0.8s;
box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.1); 

`



export const ItemInfoWrapper = styled.div`
  position:fixed;
  z-index: 7;
  top:0;
  min-height: 100vh;
  width: 100%;
  display: ${props=>props.CloseAnimation?"flex":"none"};
  align-items: flex-end;
  justify-content: center;
`;

export const ItemInfo = styled.div`
  height: 30vh;
  width: 90%;
  display:flex;
  flex-direction: column;
  border-radius: 30px;
  position: relative;
`;

const NameAnimation  = keyframes`
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

export const ItemName = styled.span`
 font-size: 23px;
 font-weight: bold;
 width: 60%;
 margin-left: 0px;
opacity: 1;
 margin-top: 10px;
 animation:${NameAnimation} 1.4s ease-in-out;
`;

const DescriptionAnimation  = keyframes`
 0% { 
    margin-top: -20px;
    opacity: 0;
}
50%{
  margin-top: -20px;
    opacity: 0;
}
 100% { 
    margin-top: 20px;
    opacity: 1;

}
`;
export const ItemDescription = styled.span`
font-size: 16px;
font-weight: 300;
width: 90%;
margin-top: 20px;
word-spacing: 1px;
animation:${DescriptionAnimation} 1.6s ease-in-out;
`;
const PriceAnimation  = keyframes`
 0% { 
    transform: scale(0);
    opacity: 0;
}
50% { 
    transform: scale(0);
    opacity: 0;
}
 100% { 
    transform: scale(1);
    opacity: 1;

}
`;
export const ItemPrice = styled.span`
font-size: 20px;
font-weight: 500;
word-spacing:3px;
position: absolute;
right: 0px;
transform: scale(1);
top:5px;
color:white;
padding: 10px;
border-radius: 10px;
background-color: ${props=>props.theme.mainColor};
animation:${PriceAnimation} 1.4s ease-in-out;

`;

