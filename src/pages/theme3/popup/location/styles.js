import styled,{keyframes} from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
position: fixed;
bottom: ${props=>props.showPopup=="location"?"0%":"-100%"};
background-color: ${props=>props.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 50px;
border-top-left-radius: 50px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 8vh;
`;
export const Title = styled.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${props=>props.theme.mainColor}

`;
export const ResName = styled.span`
font-size: 26px;
font-weight:bold;
text-align: left;
color:${props=>props.theme.mainColor}

`;
export const TitleContainer = styled.span`
width: 90%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 8vh;
`;





export const BranchInfo = styled.div`
  margin-top: 24px;
width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`;

export const Info = styled.a`
font-size:14px;
 font-weight: 620;
 color:${props=>props.theme.popupTextColor}

`;
export const MapLink = styled.a`
font-size:14px;
 font-weight: 620;
 color:${props=>props.theme.popupTextColor};
 text-decoration: none;


`;

export const LocationLogo = styled(FaLocationArrow)`
font-size: 22px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}
`;

export const CallLogo = styled(IoIosCall)`
font-size: 22px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}

`;
export const MapsLogo = styled(MdLocationOn)`
font-size: 22px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}

`;

export const Close = styled(IoMdClose)`
font-size: 18px;
position: absolute;
top: 22px;
right:20px;
cursor: pointer;
color:${props=>props.theme.popupTextColor}

`;

export const SocialMediaTitle = styled.span`
color: ${props=>props.theme.popupTextColor};
font-size: 13px;
font-weight: bold;

`;
export const SocialMediaTitleWrapper = styled.div`
width: 90%;
margin-top: 10px;

`;
export const SocialMediaContainer = styled.div`
margin-top: 8px;
display: flex;
flex-direction: row;
width: 90%;
align-items: center;
gap:8px;
`;

export const InstagramContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${props=>props.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`;
export const WhatsappContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${props=>props.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;

`;
export const TiktokContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${props=>props.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`;

export const FacebookContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
border: 1px solid ${props=>props.theme.popupTextColor};;
width: 26px;
height: 26px;
border-radius: 50%;
cursor: pointer;
`;


export const FacebookLogo = styled(FaFacebookF)`
font-size: 16px;
color: ${props=>props.theme.popupTextColor};
`;
export const WhatsappLogo = styled(IoLogoWhatsapp)`
font-size: 16px;
color: ${props=>props.theme.popupTextColor};


`;
export const InstagramLogo = styled(FaInstagram)`
font-size: 16px;
color: ${props=>props.theme.popupTextColor};;

`;
export const TiktokLogo = styled(BsTiktok)`
font-size: 16px;
color: ${props=>props.theme.popupTextColor};;

`;


export const PoweredBy = styled.pre`
  font-size: 12px;
  text-align: center;
  color: ${props=>props.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 1px;
  width: 100%;
`;

export const Link = styled.a`
  color: ${props=>props.theme.popupTextColor};
  text-decoration: none;
  outline: none;
  &:hover {
    color: lightgray;
  }
`;


export const CopyWrite = styled(MdCopyright)`
color: ${props=>props.theme.popupTextColor};
font-size: 13px;
margin-left: 5px;
margin-right: 5px;

`;

export const ButttonWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
width: 90%;
height: 44px;
gap:18px;
margin-top: 22px;
`;

export const ButtonFilled = styled.button`
display: flex;
justify-content: center;
flex-direction: row;
align-items: center;
background-color:${props=>props.theme.mainColor} ;
width:${props=>props.activeButton=="Call"?"80%":"50%"};
height: 100%;
border:0;
color: ${props=>props.theme.popupbackgroundColor};
border-radius: 10px;
font-size: 16px;
gap:10px;
position: relative;
&:focus{
  outline: none;
}
/* overflow: hidden; */
transition: all 0.2s ease-in-out;
`;

const borderanimation = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const ShadeBox = styled.div`
position: absolute;
width:9%;
height: 50%;
background-color:${props=>props.activeButton=="Call"?props.theme.mainColor:props.theme.popupbackgroundColor} ;
 left: 0;
 z-index: 5;

 `;
 export const ShadeBorder = styled.div`
position: absolute;
width:1px;
height: 100%;
background-color:${props=>props.activeButton=="Call"?props.theme.popupbackgroundColor:props.theme.mainColor} ;
 right: 0;
 animation: ${borderanimation} 0.5s ease-in-out infinite; /* Infinite animation */

 `;
 
 const placeholderAnimation = keyframes`
  0% {
opacity: 0;
left: -10%;
  }
  100% {
opacity: 1;
left: 16%;

  }

`;
 export const ChoosePlaceHolder = styled.span`
position: absolute;
 left: 16%;
 color:${props=>props.activeButton=="Call"?props.theme.popupbackgroundColor:props.theme.mainColor} ;
 animation: ${placeholderAnimation} 0.5s ease-in-out;
 z-index: 4;

 `;

 const arrowanimation = keyframes`
  0% {
    opacity: 0;
    rotate: calc(180deg);
  }
  1000% {
    opacity: 1;
    rotate: calc(0deg);

  }
 
`;


 export const Arrow = styled(IoIosArrowDown )`
color:${props=>props.activeButton=="Call"?props.theme.popupbackgroundColor:props.theme.mainColor} ;
font-size: 13px;
position: absolute;
right: 5%;
animation: ${arrowanimation} 0.7s ease-in-out;

`;
const OptionsListAnimation = keyframes`
  0% {
    max-height: 0px;
  }
  1000% {
    max-height: 300px;


  }
 
`;
export const OptionsList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 4px;
  /* overflow-y: auto; */
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 260px;
  background-color:${props=>props.theme.mainColor} ;
  color:${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  animation: ${OptionsListAnimation} 1s ease-in-out;
  overflow: hidden;

`;

export const Option = styled.li`
  cursor: pointer;
  transition: background 0.2s;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 15px;

`;


export const ButtonBorder = styled.button`
display: flex;
justify-content: center;
flex-direction: row;
gap:15px;
align-items: center;
flex-direction: row;
background-color:transparent ;
width:${props=>props.activeButton=="Message"?"80%":"50%"};
height: 100%;
border:1px solid ${props=>props.theme.mainColor} ;
color: ${props=>props.theme.popupTextColor};
border-radius: 10px;
font-size: 16px;
&:focus{
  outline: none;
};
position: relative;
`;
  

export const BranchSpan = styled.span`
color: ${props=>props.theme.popupTextColor};
font-size: 16px;
font-weight: bold;

`;
  

export const BranchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

export const BranchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 44px;
`;
export const BranchIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 13px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${props=>props.theme.mainColor};
`;

export const BranchIcon = styled.div`
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background-color: ${props=>props.theme.mainColor};
`;

export const Iconhole = styled.div`
  width: 4px;
  height: 4px;
  position: absolute;
  border-radius: 50%;
  background-color: ${props=>props.theme.popupbackgroundColor};
`;


export const Branch = styled.a`
 font-size:13px;
 font-weight: 300;
 flex: 1;
 color: ${props=>props.theme.popupTextColor};
 display: flex;
 align-items: center;
 margin-left: 20px;
 height: 100%;

 `;

 export const LineContainer = styled.div`
 width: 13px;
 height: 40px;
 top: 22px;
 position: absolute;
 left: 0;
 display: flex;
 justify-content: center;
 `;
 export const Line = styled.div`
 width: 2px;
 height: 100%;
 background-color: ${props=>props.theme.popupTextColor};
 opacity: 0.5;
 `;


 