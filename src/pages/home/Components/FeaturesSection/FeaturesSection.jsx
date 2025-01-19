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
    width : 100%;
    min-width : 250px;
    max-width : 400px;
    padding: 10px 20px;
    display : flex;
    align-items : center;
    flex-direction : column;
    
`;
const Content = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
    padding: 15px 0;
`;
const CardTitle = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    font-weight: 700;
    font-size: 18px;
`;
const CardDesc = styled.div`
    width : 100%;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align: center;
    font-size: 15px;
    padding-top: 7px;
`;
const CardImage = styled.div`
    display : flex;
    align-items : center;
    justify-content : center;
    min-width: 60px;
    height: 60px;
    border-radius: 15px;
`;

const CardHolder = styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    flex-direction : row;
    flex-wrap : wrap;
    padding : 25px 0;
    margin-bottom: 100px;
`
const Title = styled.div`
    width: 35%;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align: center;
    font-weight: 700;
    font-size: 30px;
    color: #00112b;
    line-height: 40px;
    @media (max-width: 600px) {
        width: 70%;
        line-height: 30px;

  }
`
const UnderTitle = styled.div`
    width: 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    text-align: center;
    font-size: 15px;
    @media (max-width: 600px) {
        width: 70%;
        
  }
`
const SectionHeader = styled.div`
    width: 100%;
    display : flex;
    flex-direction: column;
    align-items : center;
    justify-content : center;
    padding-top: 120px;
    gap:10px;
    margin-bottom: 50px;
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
