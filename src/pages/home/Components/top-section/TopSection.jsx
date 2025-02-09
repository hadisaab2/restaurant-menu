import React, { useState, useRef } from 'react';
import {
    Container, Image, ImageWrapper,
    PhoneImage, PhoneWrapper, Title, CarouselWrapper,
    TitleContainer,LogoMenugic
} from './styles';

import phone from './phone.png';
import Mashewi from './Mashewi.png';
import Coffee from './Coffee.png';
import Flowers from './Flowers.png';
import Cream from './Cream.png';
import Logo from './Logo.png';



// Carousel data with local images
const carouselItems = [
    { image: Mashewi, title: "FOOD MENU" },
    { image: Coffee, title: "COFFEE SHOP" },
    { image: Flowers, title: "FLOWER SHOP" },
    { image: Cream, title: "COSMETICS" }

    
];

export default function TopSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);

    // Handle left/right scrolling (mouse wheel)
    const handleScroll = (e) => {
        if (e.deltaY > 0 || e.deltaX > 0) {
            nextSlide();
        } else if (e.deltaY < 0 || e.deltaX < 0) {
            prevSlide();
        }
    };

    // Handle touch start
    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    // Handle touch end (detect swipe)
    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (deltaX > 50) {
            prevSlide(); // Swipe Right
        } else if (deltaX < -50) {
            nextSlide(); // Swipe Left
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <Container
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <LogoMenugic src={Logo}/>
            <PhoneWrapper>
                <PhoneImage src={phone} />
                <TitleContainer>
            {carouselItems.map((item, index) => (

                <Title index={index} currentIndex={currentIndex}>{item.title}</Title>

            ))}
            </TitleContainer>
            </PhoneWrapper>
         
            <CarouselWrapper currentIndex={currentIndex}>
                {carouselItems.map((item, index) => (
                    <>
                        <ImageWrapper key={index}>
                            <Image   index={index} currentIndex={currentIndex} src={item.image} alt={item.title} />

                        </ImageWrapper>

                    </>
                ))}
            </CarouselWrapper>
        </Container>
    );
}
