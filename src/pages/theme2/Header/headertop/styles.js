import styled from "styled-components";
import { RxHamburgerMenu } from "react-icons/rx";

export const Container = styled.div`
display: flex;
align-items: center;
position: relative;
height: 10vh;
justify-content: space-between;
width: 100%;
`;
export const Brand = styled.img`
max-width: 250px;
max-height: 120px;
margin-left: 20px;

`;

export const ButtonsContainer=styled.div`
display: flex;
flex-direction: row;
margin-right: 20px;
align-items: center;
justify-content: center;

`;
export const LanguageContainer = styled.div`
display: flex;
flex-direction: row;
margin-right: 20px;
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
background-color: ${props=>props.theme.mainColor};
opacity: 0.6;
position: absolute;
height: 100%;
z-index: 1;
border-radius: 10px;


`;

export const Ball = styled.div`
position: absolute;
background-color: ${props=>props.theme.mainColor};
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


export const MenuIcon = styled(RxHamburgerMenu)`
color: ${props=>props.theme.mainColor};
font-size: 20px;

`;