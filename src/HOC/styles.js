import styled from "styled-components";
import { FaLocationArrow } from "react-icons/fa6";

export const PageLayout = styled.div`
height: 100vh;
`;

export const DetailsBtn = styled.div`
position: fixed;
bottom:20px;
right:20px;
width:50px;
height:50px;
background-color:#f9dd63;
border-radius:50%;
display: flex;
align-items: center;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
justify-content: center;
color:white;
font-size: 25px;
cursor: pointer;
`;
export const Location = styled(FaLocationArrow)`
transform: rotate(270deg);

`;