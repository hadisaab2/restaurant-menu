import styled from "styled-components";
import { HiMenuAlt2 } from "react-icons/hi";

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
height: 10vh;
width: 100%;
`;
export const HeaderWrapper = styled.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 90%;
position: relative;

`;

export const Brand = styled.img`
max-width: 250px;
max-height: 120px;
position: absolute;
margin-right: 7px;
/* margin-left: 20px; */

`;

export const ButtonsContainer=styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

`;
export const LanguageContainer = styled.div`
display: flex;
flex-direction: row;
position: relative;
border-radius: 10px;
width:60px;
height: 25px;
display: flex;
align-items: center;
justify-content: center;

overflow: hidden;
`;

export const Wrapper = styled.div`
width: 100%;
background-color: ${props=>props.theme.languagebackground};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`;

export const Ball = styled.div`
position: absolute;
background-color: ${props=>props.theme.languagebackground};
left:${props=>props.activeLanguage=="en"?"0px":"32px"} ;
transition:all ease-in-out 0.2s;
height: 100%;
width: 50%;
z-index: 2;

`;
export const Language = styled.div`
z-index: 3;
flex:1;
height: 100%;
color:${props=>props.theme.languageTextColor};
text-align: center;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;

/* opacity: ${props=>props.activeLanguage==props.language?`1`:"0.7"} ;
/* transition:all ease-in-out 0.2s; */
`;


export const MenuIcon = styled(HiMenuAlt2)`
color: ${props=>props.theme.mainColor};
font-size: 27px;

`;

export const HomeButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.mainColor || "#333333"};
  font-size: 18px;
  margin-left: ${props => props.activeLanguage === "ar" ? "0" : "12px"};
  margin-right: ${props => props.activeLanguage === "ar" ? "12px" : "0"};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12), 0 2px 6px rgba(0, 0, 0, 0.08);
    background: ${props => props.theme.mainColor || "#007bff"};
    color: #ffffff;
    border-color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  &:active {
    transform: translateY(0) scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;

export const LanguageButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: transparent;
  border: none;
  box-shadow: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${props => props.theme.mainColor || "#333333"};
  font-size: 18px;
  margin-left: ${props => props.activeLanguage === "ar" ? "0" : "12px"};
  margin-right: ${props => props.activeLanguage === "ar" ? "12px" : "0"};
  
  &:hover {
    transform: scale(1.1);
    color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  &:active {
    transform: scale(1);
  }
  
  @media (min-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 20px;
  }
`;
