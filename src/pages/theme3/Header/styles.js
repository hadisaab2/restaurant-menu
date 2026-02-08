import styled from "styled-components";
import { CiSearch } from "react-icons/ci";
import { IoMdShare } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
background-color: ${props=>props.theme.backgroundColor};
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

export const SearchWapper = styled.div`
width: 90%;
max-width: 600px;
display: flex;
align-items: center;
margin: 25px auto 0;
color:${props=>props.theme.searchTextColor};
height: 48px;
border-radius: 12px;
overflow: visible;
position: relative;
flex-direction: row;
gap: 10px;

@media (min-width: 768px) {
  height: 52px;
  gap: 12px;
}
`;

export const SearchContainer = styled.div`
flex: 1;
display: flex;
align-items: center;
color:${props=>props.theme.searchTextColor};
height: 100%;
border-radius: 12px;
overflow: hidden;
position: relative;
background: ${props=>props.theme.searchbackground || "#ffffff"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
transition: all 0.3s ease;

&:focus-within {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  transform: translateY(-1px);
}
`;

export const Search = styled.input`
width: 100%;
height: 100%;
background-color: ${props=>props.theme.searchbackground || "#ffffff"};
border: 1px solid rgba(0, 0, 0, 0.08);
outline: none;
padding-left: ${props=>props.activeLanguage=="en"?"48px":"0px"};
padding-right: ${props=>props.activeLanguage=="en"?"0px":"48px"};
color:${props=>props.theme.searchTextColor || "#333333"};
font-size: 15px;
transition: all 0.3s ease;

&::placeholder{
    color:${props=>props.theme.searchTextColor || "#999999"};
    opacity: 0.6;
}

&:focus {
  border-color: ${props=>props.theme.mainColor || "#007bff"}40;
}

@media (min-width: 768px) {
  font-size: 16px;
}
`;

export const SearchIcon = styled(CiSearch)`
position: absolute;
left: ${props=>props.activeLanguage=="en"?"16px":null};
right: ${props=>props.activeLanguage=="en"?null:"16px"};
font-size: 20px;
color: ${props=>props.theme.searchTextColor || "#999999"};
z-index: 1;
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




export const ShareIcon = styled.div`
height: 100%;
min-width: 56px;
font-size: 14px;
padding: 0 16px;
border-radius: 12px;
font-weight: 500;
gap: 6px;
flex-direction: row;
display: flex;
align-items: center;
justify-content: center;
background-color:${props=>props.theme.searchbackground || "#ffffff"};
color:${props=>props.theme.searchTextColor || "#333333"};
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
cursor: pointer;
transition: all 0.3s ease;
border: 1px solid rgba(0, 0, 0, 0.08);
margin-bottom: 20px;
&:hover {
  background-color: ${props=>props.theme.mainColor || "#007bff"}15;
  color: ${props=>props.theme.mainColor || "#007bff"};
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

&:active {
  transform: translateY(0);
  transition: all 0.15s ease;
}

@media (min-width: 768px) {
  min-width: 64px;
  padding: 0 18px;
  font-size: 15px;
}
`;

export const ShareIconLogo = styled(IoShareSocialSharp)`
color: inherit;
font-size: 18px;
transition: transform 0.3s ease;

${ShareIcon}:hover & {
  transform: scale(1.1);
}

@media (min-width: 768px) {
  font-size: 20px;
}
`;
