import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";



const Footerwrapper = styled.div`
    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
    min-height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px 20px 40px;
    border-top: 1px solid rgba(0, 0, 0, 0.05);
    
    @media (max-width: 768px) {
        padding: 50px 15px 30px;
        min-height: 300px;
    }
`;
const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    color: #00112b;
    padding-top: 20px;
    letter-spacing: -0.3px;
    
    @media (max-width: 768px) {
        font-size: 24px;
        padding-top: 15px;
    }
`
const UnderTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    color: #666;
    padding: 15px 20px 20px;
    line-height: 1.6;
    max-width: 600px;
    
    @media (max-width: 768px) {
        font-size: 14px;
        padding: 12px 15px 15px;
    }
`
const Dot = styled.div`
    background-color: #8b8b8b;
    width: 5px;
    height: 5px;
    border-radius: 50%;
`
const SectionItem = styled.span`
    font-size: 15px;
    padding: 10px;
    margin-left: 5px;
    color: #fff;
    color: #000000;
`
const Sections = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 25px 0;

`
const SectionsWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;
const SocialMedia = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;
const MediaItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;   
    background-color: white;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    color: #00112b;
    
    &:hover {
        transform: translateY(-3px);
        box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
        background-color: #f8f9fa;
    }
    
    &:active {
        transform: translateY(-1px);
    }
    
    svg {
        font-size: 20px;
    }
    
    @media (max-width: 768px) {
        width: 44px;
        height: 44px;
        margin: 8px;
        
        svg {
            font-size: 18px;
        }
    }
`
const menuItems = [
    { name: 'Home', sectionId: 'home' },
    { name: 'Clients', sectionId: 'clients' },
    { name: 'Features', sectionId: 'features' },
  ];

  // Function to handle the scrolling when clicking a menu item
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const mediaItems = 
[
    {
        "Name":"Whatsapp",
        "Icon":FaWhatsapp,
        "link":"https://wa.me/96178911634"
    },
    {
        "Name":"Instagram",
        "Icon":FaInstagram,
        "link":"https://www.instagram.com/menugic/"

    },
    //{
    //    "Name":"Email",
    //    "Icon":MdOutlineMail
    //}
];

export default function Footer() {
  return (
    <div>
    <Footerwrapper>
        <img src="images/logo.png" alt="" />
        <Title>Order List Site</Title>
        <UnderTitle>The easiest and fastest way to create an electronic menu for your business, whether products or services.</UnderTitle>
        <Sections >
        {menuItems.map((item, index) => (
            <SectionsWrapper  onClick={() => handleScroll(item.sectionId)} >
                <SectionItem>{item.name}</SectionItem> 
                {index!==menuItems.length-1?<Dot/>:null}
            </SectionsWrapper>
            ))}
            </Sections>
        <SocialMedia>
        {mediaItems.map((item, index) => (
            <SectionsWrapper  onClick={() => window.location.href = item.link}>
                <MediaItem>
                    <item.Icon/>
                </MediaItem>
            </SectionsWrapper>
            ))}

        </SocialMedia>
    </Footerwrapper>

    </div>
  )
}
