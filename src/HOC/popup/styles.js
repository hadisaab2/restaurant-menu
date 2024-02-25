import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";

export const Container = styled.div`
position: fixed;
bottom: ${props=>props.showPopup?"0%":"-100%"};
height: 80vh;
background-color: white;
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
`;
export const Title = styled.span`
font-size: 30px;
font-weight:bold;
margin-top:60px;
text-align: left;
width: 70%;
margin-left: 20px;
`;
export const ResName = styled.span`
font-size: 30px;
font-weight:bold;
margin-top:6px;
text-align: left;
width: 70%;
margin-left: 20px;
`;

export const LocationTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap:5px;
width: 100%;
margin-left: 20px;
margin-top: 20px;

`;
export const LocTitle = styled.span`
font-size: 20px;
font-weight: bold;


`;

export const Location = styled(MdLocationOn)`
font-size: 20px;
`;

export const Close = styled(IoMdClose)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
`;

export const LocationsContainer = styled.div`
margin-left: 20px;
margin-top: 10px;
display: flex;
flex-direction: column;
`;

export const Loc = styled.div`
font-size: 15px;
margin-top: 5px;


`;



export const NumberTitle = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap:5px;
width: 100%;
margin-left: 20px;
margin-top: 20px;

`;
export const NumTitle = styled.span`
font-size: 20px;
font-weight: bold;


`;

export const NumberLogo = styled(BsTelephoneFill)`
font-size: 20px;

`;

export const NumbersContainer = styled.div`
margin-left: 20px;
margin-top: 10px;
display: flex;
flex-direction: column;
`;
export const Num = styled.span`
font-size: 15px;
margin-top: 5px;

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

export const InstagramContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
background: #f09433;
width: 60px;
height: 60px;
border-radius: 50%;
background: -moz-linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); 
background: -webkit-linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%); 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f09433', endColorstr='#bc1888',GradientType=1 );
cursor: pointer;
`;
export const WhatsappContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;
background-color: #25D366;
cursor: pointer;

`;
export const TiktokContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 60px;
height: 60px;
border-radius: 50%;
background-color:  black;
cursor: pointer;

`;
export const WhatsappLogo = styled(IoLogoWhatsapp)`
font-size: 30px;
color: white;


`;
export const InstagramLogo = styled(FaInstagram)`
font-size: 30px;
color: white;

`;
export const TiktokLogo = styled(FaTiktok)`
font-size: 30px;
color: white;

`;
