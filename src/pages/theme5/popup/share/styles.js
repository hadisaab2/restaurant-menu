import { FaInstagram, FaRegCopy, FaWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdCopyright } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import styled, { keyframes } from "styled-components";


export const Container = styled.div`
position: fixed;
bottom: ${props => props.showPopup == "share" ? "0%" : "-100%"};
background-color: ${props => props.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 10vh;
`;

export const ShareWrapper = styled.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top:40px;
`;


export const PoweredBy = styled.pre`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`;

export const Link = styled.a`
  color: ${props => props.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`;


export const CopyWrite = styled(MdCopyright)`
color: ${props => props.theme.popupTextColor};
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`;

export const Close = styled(IoMdClose)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${props => props.theme.popupTextColor}

`;

export const Title = styled.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${props => props.theme.popupTextColor}

`;
export const LinkTitle = styled.span`
font-size: 17px;
font-weight:bold;
text-align: left;
color:${props => props.theme.popupTextColor};
margin-top: 20px;
`;


export const SocialMediaContainer = styled.div`
display: flex;
flex-direction: row;
gap:15px;
margin-top: 20px;


`;

export const Media = styled.div`
display: flex;
flex-direction: column;
gap:5px;
align-items: center;
justify-content: center;

`;


export const WhatsappLogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #8bffb83d;
`;

export const WhatsappLogo = styled(FaWhatsapp)`
font-size: 24px;
color:#51C288;
`;


export const InstagramLogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background: linear-gradient(45deg, 
    rgba(254, 218, 117, 0.2),  /* Light Yellow */
    rgba(250, 126, 30, 0.2),   /* Orange */
    rgba(214, 41, 118, 0.2),   /* Pink */
    rgba(150, 47, 191, 0.2),   /* Purple */
    rgba(79, 91, 213, 0.2)     /* Blue */
  );

background-size: 300% 300%; /* Creates a smooth animated effect */`;

export const InstagramLogo = styled(FaInstagram)`
font-size: 24px;
/* color:#51C288; */
color:#5c595b;



`;


export const MediaText = styled.span`
font-size: 10px;
color:${props => props.theme.popupTextColor}

`;



export const LinkContainer = styled.div`
width: 100%;
margin-top: 20px;
background-color: ${props => props.theme.mainColor};
display: flex;
align-items: center;
position: relative;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 5px;
border-radius: 5px;

`;


export const CategoryLinkWrapper = styled.div`
width: 85%;
overflow: hidden;

`;

export const CategoryLink = styled.span`
font-size: 15px;
color:${props => props.theme.popupbackgroundColor};
white-space: nowrap;
`;

export const CopyIcon = styled(FaRegCopy)`
font-size: 15px;
color:${props => props.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;

export const Tick = styled(TiTick)`
font-size: 18px;
color:${props => props.theme.popupbackgroundColor};
position: absolute;
right: 10px;
`;

