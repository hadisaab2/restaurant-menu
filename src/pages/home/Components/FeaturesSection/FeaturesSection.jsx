import React from 'react'
import styled from 'styled-components'
import { FaWhatsapp } from "react-icons/fa";
import { MdInvertColors } from "react-icons/md";
import { HiBriefcase } from "react-icons/hi2";
import { FaLink } from "react-icons/fa";
import { GrUserAdmin } from "react-icons/gr";
import { HiQrCode } from "react-icons/hi2";

import './FeaturesSection.css'

const Card = styled.div`
    width: 100%;
    min-width: 280px;
    max-width: 380px;
    padding: 30px 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    background: white;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    &:hover {
        transform: translateY(-8px);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12);
    }
    
    @media (max-width: 768px) {
        max-width: 100%;
        padding: 25px 20px;
    }
`;
const Content = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0 0;
    gap: 8px;
    
    @media (max-width: 768px) {
        padding: 15px 0 0;
    }
`;
const CardTitle = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 20px;
    color: #00112b;
    margin-bottom: 8px;
    line-height: 1.3;
    
    @media (max-width: 768px) {
        font-size: 18px;
    }
`;
const CardDesc = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 15px;
    color: #666;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 14px;
    }
`;
const CardImage = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 70px;
    height: 70px;
    border-radius: 18px;
    transition: all 0.3s ease;
    margin-bottom: 8px;
    
    ${Card}:hover & {
        transform: scale(1.1);
    }
`;

const CardHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 25px 20px;
    margin-bottom: 120px;
    gap: 30px;
    
    @media (max-width: 768px) {
        gap: 25px;
        padding: 25px 15px;
        margin-bottom: 80px;
    }
`
const Title = styled.div`
    width: 100%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-weight: 700;
    font-size: 38px;
    color: #00112b;
    line-height: 1.3;
    letter-spacing: -0.5px;
    background: linear-gradient(135deg, #00112b 0%, #1d2856 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
        font-size: 30px;
        width: 90%;
        line-height: 1.4;
    }
    
    @media (max-width: 600px) {
        font-size: 26px;
        width: 85%;
    }
`
const UnderTitle = styled.div`
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 16px;
    color: #666;
    line-height: 1.6;
    
    @media (max-width: 768px) {
        font-size: 15px;
        width: 85%;
    }
    
    @media (max-width: 600px) {
        font-size: 14px;
        width: 80%;
    }
`
const SectionHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 100px;
    gap: 16px;
    margin-bottom: 60px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.02), transparent);
    padding-bottom: 30px;
    
    @media (max-width: 768px) {
        padding-top: 80px;
        gap: 12px;
        margin-bottom: 50px;
    }
`
const Items = [
    {

        "CardTitle":"Reception on WhatsApp",
        "CardDesc":"Receive menu requests on WhatsApp, as the customer can share the request on WhatsApp after completing the order process.",
        "CardIcon": FaWhatsapp,
        "CardColor":"#19e039",
        "CardBackground":"#e1ffe9"
    },
    {

        "CardTitle":"Customize your menu's style.",
        "CardDesc":"Effortlessly control your menu's theme, tailoring colors, fonts, and layouts to perfectly match your brand.",
        "CardIcon": MdInvertColors,
        "CardColor":"#fbb040",
        "CardBackground":"#fff7eb"
    },
    {

        "CardTitle":"All in one",
        "CardDesc":"Providing all your information through the menu page as well.",
        "CardIcon": HiBriefcase,
        "CardColor":"#18d6a8",
        "CardBackground":"#e5fbf5"
    },
    {

        "CardTitle":"One link to the menu",
        "CardDesc":"Access your product list with one easy-to-remember link.",
        "CardIcon": FaLink,
        "CardColor":"#ff4a55",
        "CardBackground":"#ffeced"
    },
    {

        "CardTitle":"Manage everything with ease.",
        "CardDesc":"Menugic's admin panel lets you effortlessly control products and categories, keeping your menu organized and up to date.",
        "CardIcon": GrUserAdmin,
        "CardColor":"#343cf2",
        "CardBackground":"#ddebff"
    },
    {

        "CardTitle":"Table barcode",
        "CardDesc":"Your customers can scan the barcode on the table for quick access to the menu",
        "CardIcon": HiQrCode,
        "CardColor":"#000000",
        "CardBackground":"#efefef"
    },
   
]

export default function FeaturesSection() {
  return (
    <div id="features">
    <SectionHeader>
        <Title>Easier order management for you and your clients.</Title>
        <UnderTitle>The easiest and fastest way to create a digital menu for your business, whether for products or services. We provide all the solutions your project needs to go global.</UnderTitle>
    </SectionHeader>
    <CardHolder>
            {Items.map((item, index) => (
              <Card key={index} className='Features'>
                <CardImage style={{backgroundColor : item.CardBackground}}>
                    <item.CardIcon className='Card-Icon' style={{fill : item.CardColor}}/>
                </CardImage>
                <Content>
                    <CardTitle>{item.CardTitle}</CardTitle>
                    <CardDesc>{item.CardDesc}</CardDesc>
                </Content>
              </Card>
            ))}
    </CardHolder>
    </div>
  )
}
