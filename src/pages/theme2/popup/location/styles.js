import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";

export const Container = styled.div`
position: fixed;
bottom: ${props=>props.showPopup=="location"?"0%":"-100%"};
<<<<<<< HEAD
=======
height: 80vh;
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
background-color: ${props=>props.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
z-index: 5;
<<<<<<< HEAD
padding-bottom: 6vh;
=======
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
`;
export const Title = styled.span`
font-size: 30px;
font-weight:bold;
<<<<<<< HEAD
text-align: left;
=======
margin-top:60px;
text-align: left;
width: 70%;
margin-left: 20px;
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
color:${props=>props.theme.mainColor}

`;
export const ResName = styled.span`
font-size: 30px;
font-weight:bold;
<<<<<<< HEAD
text-align: left;
color:${props=>props.theme.mainColor}

`;
export const TitleContainer = styled.span`
width: 80%;
display: flex;
flex-direction: column;
gap:5px;
justify-content: flex-end;
height: 15vh;
padding-left: 20px;
`;


=======
margin-top:6px;
text-align: left;
width: 70%;
margin-left: 20px;
color:${props=>props.theme.mainColor}

`;
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
export const BranchesContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  width: 80%;
  gap:20px;
  margin-left: 20px;
  margin-top: 40px;
<<<<<<< HEAD
=======
  height: 40px;
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80

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

<<<<<<< HEAD
export const Info = styled.a`
=======
export const Info = styled.span`
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
margin-top: 50px;
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


export const PoweredBy = styled.pre`
  font-size: 15px;
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
font-size: 15px;
margin-left: 5px;
margin-right: 5px;

`;