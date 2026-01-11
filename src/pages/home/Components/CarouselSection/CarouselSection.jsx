import React from 'react'
import CarouselInverted from '../Carousel/CarouselInverted';
import Carousel from '../Carousel/Carousel';
import './CarouselSection.css'
import styled from "styled-components";

const UnderTitle = styled.span`
    font-size: 16px;
    text-align: center;
    width: 100%;
    color: #666;
    line-height: 1.6;
    max-width: 700px;
    
    @media (max-width: 768px) {
        font-size: 14px;
        width: 85%;
    }
    
    @media (max-width: 600px) {
        font-size: 13px;
        width: 80%;
    }
`;
const Title = styled.span`
    font-size: 36px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    color: #00112b;
    letter-spacing: -0.5px;
    line-height: 1.3;
    background: linear-gradient(135deg, #00112b 0%, #1d2856 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: 768px) {
        font-size: 28px;
        width: 90%;
        line-height: 1.4;
    }
    
    @media (max-width: 600px) {
        font-size: 24px;
        width: 85%;
    }
`;
const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 0 20px;
    margin-bottom: 80px;
    
    @media (max-width: 768px) {
        gap: 30px;
        margin-bottom: 60px;
    }
`;
export default function CarouselSection() {
  return (
    <div id="clients">
        <div className='upperSection'>
            <Title>Join many clients around the world</Title>
            <UnderTitle>We have helped many stores and services increase their sales in record time.</UnderTitle>
        </div>
        <CarouselContainer>
            <Carousel/>
            <CarouselInverted/>
        </CarouselContainer>
    </div>
  )
}
