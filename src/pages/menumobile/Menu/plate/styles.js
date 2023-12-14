import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex:1;
justify-content: center;
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
