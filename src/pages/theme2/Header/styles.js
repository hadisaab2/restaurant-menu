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
color:${props=>props.theme.searchTextColor};
height: 40px;
border-radius: 10px;
overflow: hidden;
position: relative;

`;

export const Search = styled.input`
width: 100%;
height:100%;
background-color: ${props=>props.theme.BoxColor};
border: 0;
outline: none;
padding-left: ${props=>props.activeLanguage=="en"?"30px":"0px"};
padding-right: ${props=>props.activeLanguage=="en"?"0px":"30px"};
color:${props=>props.theme.searchTextColor};
&::placeholder{
    color:${props=>props.theme.searchTextColor};
    opacity: 0.5;
}

`;

export const SearchIcon = styled(CiSearch)`
position: absolute;
left: ${props=>props.activeLanguage=="en"?"10px":null};
right: ${props=>props.activeLanguage=="en"?null:"10px"};

`;

export const SidebarAction = styled.div`
width: 90%;
display: flex;
align-items: center;
justify-content: flex-start;
margin-top: 10px;
margin-left: 10px;

font-weight: 600;
color:${props=>props.theme.searchTextColor};
height: 40px;
font-size: 13px;

`;

