import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const TextContainer = styled.div`
width: 90%;
display: flex;
align-items: ${props=>props.activeLanuguage=="en"?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 600;
color:${props=>props.theme.textColor}
`;
export const Text = styled.div`
font-size: 27px;


`;

export const SearchContainer = styled.div`
width: 90%;
display: flex;
align-items: center;
margin-top: 30px;
font-weight: 600;
color:${props=>props.theme.textColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`;

export const Search = styled.input`
width: 100%;
height:100%;
background-color: ${props=>props.theme.categoryUnactive};
border: 0;
outline: none;
padding-left: 30px;
color:${props=>props.theme.textColor};
&::placeholder{
    color:${props=>props.theme.textColor};
    opacity: 0.5;
}

`;

export const SearchIcon = styled(CiSearch)`

position: absolute;
left: 10px;
`;
