import styled from "styled-components";
import { MdOutlineArrowBackIosNew  } from "react-icons/md";


export const Wrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height:40vh
`;

export const Input = styled.input`
  width: 90%;
  height: 40px;
  margin-top: 20px;
  background-color: transparent;
  border: 1px solid ${props=>props.theme.popupTextColor};
  border-radius:5px;
  padding-left: 10px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

export const Purchase = styled.button`
outline: none;
border: 0;
cursor: pointer;
color: ${props=>props.theme.backgroundColor};
width: 90%;
margin-top: 30px;
background-color: ${props=>props.theme.mainColor};
border-radius: 10px;
padding-top: 10px;
padding-bottom: 10px;

`;
export const Title = styled.span`
font-size: 15px;
font-weight:600;
margin-top:30px;
margin-bottom:10px;

color: ${props=>props.theme.popupTextColor};

`;


export const BackIcon = styled(MdOutlineArrowBackIosNew)`
font-size: 15px;
position: absolute;
top: 30px;
left:20px;
cursor: pointer;
color:${props=>props.theme.popupTextColor}
`;