import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";



const Footerwrapper = styled.div`
    background-color: #f3f3f3;
    height: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 45px;
`;
const Title = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    color: #00112b;
    padding-top: 15px;
`
const UnderTitle = styled.div`

    display : flex;
    align-items : center;
    justify-content : center;
    text-align: center;
    font-size: 15px;
    padding: 15px 5px 5px 0;
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
    width: 40px;
    height: 40px;   
    background-color: #d8d8d8;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
    
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
    {
        "Name":"Email",
        "Icon":MdOutlineMail
    }
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
