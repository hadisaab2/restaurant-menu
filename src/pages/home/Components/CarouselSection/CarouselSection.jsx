import React from 'react'
import CarouselInverted from '../Carousel/CarouselInverted';
import Carousel from '../Carousel/Carousel';
import './CarouselSection.css'
import styled from "styled-components";

const UnderTitle = styled.span`
    font-size : 13px;
    text-align: center;
    width: 100%;
    @media (max-width: 600px) {
        width: 70%;
    }
`;
const Title = styled.span`
    font-size : 28px;
    font-weight : 700;
    text-align: center;
    width: 100%;
    @media (max-width: 600px) {
        width: 70%;
        line-height: 30px;

    }

`;
const CarouselContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap:20px;

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
