import styled,{keyframes} from "styled-components";
import { FaLongArrowAltDown } from "react-icons/fa";

export const Container = styled.div`
width: 100%;
display: flex;
flex:1;
justify-content: center;
position: relative;
`;
export const PlateItem = styled.img`
position: absolute;
width: 180px;
  height: 180px;
transform:${props=>props.index==props.activePlate?"scale(1.5) rotate(360deg)":"scale(0) rotate(0deg)"}; 
opacity:${props=>props.index==props.activePlate?"1":"0"}; 

margin-left:50px;
top:50px;
transition: transform 1.2s ease-in-out, opacity 1s ease-in-out;

transform-origin: center;
filter:drop-shadow(1px 1px 1px gray)

`;

export const PlateInfo = styled.div`

margin-top: 300px;
width: 100%;
display: flex;
flex-direction: column;
`;

export const PlateNameTop = styled.span`
font-size: 30px;
font-weight:bold

`;
export const PlateNameBottom = styled.span`
font-size: 30px;
font-weight:bold;
margin-top: -8px;
`;


export const Price = styled.span`
font-size: 30px;
font-weight:bold;
margin-top: 20px;
color: #FB4303;
`;
export const Description = styled.span`
font-size: 15px;
margin-top: 5px;
color: gray;
width: 80%;
`;

const arrowanimation = keyframes`
  0% {
    top: -100%;

  }
  40%{
    top: 10%;

  }
  70%{
    top: 10%;

  }
  100% {
    top: 100%;
  }
`;

const scrollanimation = keyframes`
  0% {
opacity: 0;
  }
  50% {
opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;
export const ScrollContainer = styled.div`
width: 25px;
height: 40px;
border-radius: 50px;
position: absolute;
display: ${props=>props.scrollChecker?"none":"flex"};
justify-content: center;
top:20px;
left: -20px;
border: 2px solid rgb(0,0,0,0.2);
overflow: hidden;
animation: ${scrollanimation} 2s linear infinite;

`;
export const Arrow = styled(FaLongArrowAltDown)`
position: absolute;
font-size: 20px;
animation: ${arrowanimation} 2s linear infinite;

color:rgb(0,0,0,0.2);
`;