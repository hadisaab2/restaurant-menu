import styled ,{keyframes}from "styled-components";
import { MdKeyboardArrowRight } from "react-icons/md";

const ContainerAnimation = keyframes`
  0% {
    right: -100%;

  }
  25%{
    right: -100%;
  }
  100%{
   right: 0;

  }
 
`;

export const Container = styled.div`
position: absolute;
top:18vh;
display: ${props=>props.categoryname===props.selectedCategory?"flex":"none"};
flex-direction: column;
gap:30px;
width: 100%;
align-items: center;
padding-bottom: 50px;
/* right:${props=>props.selectedCategory==null?"-100%":"0"}; */
animation:1s ${ContainerAnimation} ease-in-out;
`;

export const PlatesContainer = styled.div`
width: 75%;
height: 100px;
border-radius: 15px;
display: flex;
align-items: center;
box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
background-color: white;
position: relative;
`;

export const PlateName = styled.span`
font-size:25px;
font-weight: bold;
margin-left: 50px;
`;
export const PlateImaage = styled.img`
width: 70px;
height: 70px;
position: absolute;
left:-35px;
`;

export const ArrowContainer = styled.div`
width: 40px;
height: 40px;
right: -20px;
position: absolute;
border-radius: 50%;
box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
display: flex;
align-items: center;
justify-content: center;
background-color: white;
cursor: pointer;

`;
export const Arrow = styled(MdKeyboardArrowRight)`
font-size: 27px;
font-size: bolder;
color:#EB394D;
`;