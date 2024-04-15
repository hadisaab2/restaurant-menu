import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

export const Container = styled.div`
position: fixed;
bottom: ${props=>props.showPopup=="location"?"0%":"-100%"};
height: 80vh;
background-color: ${props=>props.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
z-index: 5;
`;
export const Title = styled.span`
font-size: 30px;
font-weight:bold;
margin-top:60px;
text-align: left;
width: 70%;
margin-left: 20px;
color:${props=>props.theme.mainColor}

`;
export const ResName = styled.span`
font-size: 30px;
font-weight:bold;
margin-top:6px;
text-align: left;
width: 70%;
margin-left: 20px;
color:${props=>props.theme.mainColor}

`;
export const BranchesContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 80%;
  gap:20px;
  margin-left: 20px;
  margin-top: 40px;
  height: 40px;

`;
export const Branch = styled.span`
 font-size:18px;
 font-weight: 620;
 color:${props=>props.activeBranch==props.BranchId?props.theme.popupTextColor:props.theme.branchUnActive};
 /* border-bottom:${props=>props.activeBranch==props.BranchId?`1px solid ${props.theme.textColor}`:"null"}; */
 transition:all 0.1s ease-in-out;
 height: 26px;
 `;


export const BranchInfo = styled.div`
  margin-left: 20px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap:40px;
`;

export const InfoContainer = styled.div`
display: flex;
  flex-direction: row;
  gap:10px;
  align-items: center;
  

`;

export const Info = styled.span`
font-size:16px;
 font-weight: 620;
 color:${props=>props.theme.popupTextColor}

`;
export const MapLink = styled.a`
font-size:16px;
 font-weight: 620;
 color:${props=>props.theme.popupTextColor};
 text-decoration: none;


`;

export const LocationLogo = styled(FaLocationArrow)`
font-size: 25px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}
`;

export const CallLogo = styled(IoIosCall)`
font-size: 25px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}

`;
export const MapsLogo = styled(MdLocationOn)`
font-size: 25px;
opacity: 0.8;
color:${props=>props.theme.popupTextColor}

`;

export const Close = styled(IoMdClose)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${props=>props.theme.popupTextColor}

`;

export const SocialMediaContainer = styled.div`
margin-top: 80px;
display: flex;
flex-direction: row;
width: 100%;
align-items: center;
justify-content: center;
gap:15px;
`;

export const InstagramContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
background: #f09433;
width: 50px;
height: 50px;
border-radius: 50%;
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
cursor: pointer;
`;
export const WhatsappContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color: #25D366;
cursor: pointer;

`;
export const TiktokContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
width: 50px;
height: 50px;
border-radius: 50%;
background-color:  black;
cursor: pointer;
`;

export const FacebookContainer = styled.a`
display: flex;
justify-content: center;
align-items: center;
background: #f09433;
width: 50px;
height: 50px;
border-radius: 50%;
background-color:  #1877F2;
cursor: pointer;
`;


export const FacebookLogo = styled(FaFacebookF)`
font-size: 24px;
color: white;
`;
export const WhatsappLogo = styled(IoLogoWhatsapp)`
font-size: 24px;
color: white;


`;
export const InstagramLogo = styled(FaInstagram)`
font-size: 24px;
color: white;

`;
export const TiktokLogo = styled(FaTiktok)`
font-size: 24px;
color: white;

`;
