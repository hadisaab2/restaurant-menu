import React, { useState, useRef, useEffect } from 'react';
import {
    Container, Image, ImageWrapper,
    PhoneImage, PhoneWrapper, Title, CarouselWrapper,
    TitleContainer, LogoMenugic
} from './styles';

import phone from './phone.png';
import Mashewi from './Mashewi.png';
import Coffee from './Coffee.png';
import Flowers from './Flowers.png';
import Cream from './Cream.png';
import Logo from './Logo.png';

const carouselItems = [
    { image: Mashewi, title: "FOOD MENU" },
    { image: Coffee, title: "COFFEE SHOP" },
    { image: Flowers, title: "FLOWER SHOP" },
    { image: Cream, title: "COSMETICS" }
];

export default function TopSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (deltaX > 50) {
            prevSlide();
        } else if (deltaX < -50) {
            nextSlide();
        }
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
    };

    return (
        <Container onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
            <LogoMenugic src={Logo} />
            <PhoneWrapper>
                <PhoneImage src={phone} />
                <TitleContainer>
                    {carouselItems.map((item, index) => (
                        <Title key={index} index={index} currentIndex={currentIndex}>{item.title}</Title>
                    ))}
                </TitleContainer>
            </PhoneWrapper>
            <CarouselWrapper currentIndex={currentIndex}>
                {carouselItems.map((item, index) => (
                    <ImageWrapper key={index}>
                        <Image index={index} currentIndex={currentIndex} src={item.image} alt={item.title} />
                    </ImageWrapper>
                ))}
            </CarouselWrapper>
        </Container>
    );
}
