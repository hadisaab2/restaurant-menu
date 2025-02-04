import { CiSearch } from "react-icons/ci";
import styled from "styled-components";


export const Wrapper = styled.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${props=>props.showSidebar?"0":"-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${props=>props.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${props=>props.showSidebar?"blur(5px)":"blur(0px)"};
z-index: 100;
`;

export const BlurLayer = styled.div`
width: 100%;
height: 100%;
  backdrop-filter:${props=>props.showSidebar?"blur(5px)":"blur(0px)"};
-webkit-backdrop-filter: ${props=>props.showSidebar?"blur(5px)":"blur(0px)"};
`;

export const Container = styled.div`
height: 100%;
background-color: ${props=>props.theme.sidebarbackground};
width: 70%;
position: absolute;
left: 0;
top:0;
border-top-right-radius: 50px;
border-bottom-right-radius: 50px;
box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
        width: 25%;
    }
`;

export const Top = styled.div`
width: 100%;
position:relative;
display: flex;
flex-direction: column;
gap:20px;
`;

export const Tabs = styled.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
`;
export const Tab = styled.div`
width: 100%;
height: 40px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`;

export const CategoryName = styled.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 12px;
    color: ${props=>props.theme.sidebartext};

`;


export const IconWrapper = styled.div`
width:42px;
height:42px;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
margin-left: 10%;

`;
export const Icon = styled.img`
width:20px;
height:20px;
`;
export const Brand = styled.img`
max-width: 150px;
max-height: 150px;
margin-top: 10px;
`;

export const SearchContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
height: 30px;
border-radius: 10px;
overflow: hidden;
position: relative;
margin-left: 10%;
width: 70%;
margin-bottom: 20px;
`;

export const Search = styled.input`
width: 100%;
height:100%;
background-color:${props=>props.theme.sidebarsearch};
border: 0;
outline: none;
font-size: 12px;
padding-left: ${props=>props.activeLanguage=="en"?"30px":"0px"};
padding-right: ${props=>props.activeLanguage=="en"?"0px":"30px"};
color:${props=>props.theme.sidebarsearchText};
&::placeholder{
    color:${props=>props.theme.sidebarsearchText};
    opacity: 0.5;
}

`;

export const SearchIcon = styled(CiSearch)`
position: absolute;
left: ${props=>props.activeLanguage=="en"?"10px":null};
right: ${props=>props.activeLanguage=="en"?null:"10px"};
color:${props=>props.theme.sidebarsearchText};

`;