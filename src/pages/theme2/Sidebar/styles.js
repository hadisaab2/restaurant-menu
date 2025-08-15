import { CiSearch } from "react-icons/ci";
import { HiMenuAlt2 } from "react-icons/hi";
import styled, { keyframes } from "styled-components";


export const Wrapper = styled.div`
height: 100vh;
position: fixed;
width: 100%;
left: ${props => props.showSidebar ? "0" : "-100%"};
top:0;
  transition:all  0.5s ease-in-out;
  backdrop-filter:${props => props.showSidebar ? "blur(5px)" : "blur(0px)"};
-webkit-backdrop-filter: ${props => props.showSidebar ? "blur(5px)" : "blur(0px)"};
z-index: 100;
`;

export const BlurLayer = styled.div`
width: 100%;
height: 100%;
  backdrop-filter:${props => props.showSidebar ? "blur(5px)" : "blur(0px)"};
-webkit-backdrop-filter: ${props => props.showSidebar ? "blur(5px)" : "blur(0px)"};
`;

export const Container = styled.div`
height: 100%;
background-color: ${props => props.theme.sidebarbackground};
width: 80%;
position: absolute;
left: 0;
top:0;
box-shadow: 10px 0 15px -5px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
        width: 25%;
    }
`;


export const Tabs = styled.div`
width: 100%;
  height: 60%; /* 60% of the sidebar height */
  overflow-y: auto;
  margin-right: ${props => !props.showSidebar ? "150px" : "0px"};
transition: all 0.8s ease-in-out;
opacity: ${props => !props.showSidebar ? "0" : "1"};

`;
export const Tab = styled.div`
width: 100%;
height: 50px;
display: flex;
flex-direction: row;
align-items: center;
justify-content:flex-start;
`;

export const CategoryName = styled.span`
    /* overflow: hidden;
    text-overflow: ellipsis; */
    margin-left:${props => props.categoryType ? "10%" : "0%"};

    text-align: center;
    white-space: normal;
    word-wrap: break-word;
    font-size: 13px;
    color: ${props => props.theme.sidebartext};

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


export const BrandContainer = styled.div`
height: 20vh;
display: flex;
align-items: center;
justify-content: center;
margin-top: 5vh;
`;


export const Brand = styled.img`
max-width: 200px;
max-height: 200px;
margin-right: ${props => !props.showSidebar ? "150px" : "0px"};
transition: all 0.8s ease-in-out;
opacity: ${props => !props.showSidebar ? "0" : "1"};

`;

export const SearchContainer = styled.div`
display: flex;
align-items: center;
font-weight: 600;
height: 35px;
overflow: hidden;
position: relative;
width: 80%;
margin-bottom: 20px;
margin-top: 10px;
margin-right: ${props => !props.showSidebar ? "150px" : "0px"};
transition: all 0.8s ease-in-out;
opacity: ${props => !props.showSidebar ? "0" : "1"};

`;

export const Search = styled.input`
width: 100%;
height:100%;
background-color:${props => props.theme.sidebarsearch};
border: 0;
outline: none;
font-size: 12px;
padding-left: ${props => props.activeLanguage == "en" ? "30px" : "0px"};
padding-right: ${props => props.activeLanguage == "en" ? "0px" : "30px"};
color:${props => props.theme.sidebarsearchText};
&::placeholder{
    color:${props => props.theme.sidebarsearchText};
    opacity: 0.5;
}

`;

export const SearchIcon = styled(CiSearch)`
position: absolute;
left: ${props => props.activeLanguage == "en" ? "10px" : null};
right: ${props => props.activeLanguage == "en" ? null : "10px"};
color:${props => props.theme.sidebarsearchText};

`;

export const MenuIcon = styled(HiMenuAlt2)`
position: absolute;
left: 20px;
top: 20px;
color: ${props => props.theme.sidebarsearch};
font-size: 27px;

`;