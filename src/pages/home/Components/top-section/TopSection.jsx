import React, { useState, useRef, useEffect } from 'react';
import {
    Container,
    HeroLeft,
    Kicker,
    HeroTitle,
    HeroSubtitle,
    HeroActions,
    PrimaryButton,
    SecondaryButton,
    HeroRight,
    Image,
    ImageWrapper,
    PhoneImage,
    PhoneWrapper,
    Title,
    CarouselWrapper,
    TitleContainer,
    LogoMenugic
} from './styles';

import phone from './phone.png';
import Mashewi from './Mashewi.png';
import Coffee from './Coffee.png';
import Flowers from './Flowers.png';
import Cream from './Cream.png';
import Logo from './Logo.png';

const carouselItems = [
    { image: Mashewi, title: "QR DIGITAL ORDER MENU" },
    { image: Coffee, title: "WHATSAPP ORDERING" },
    { image: Flowers, title: "TABLE QR SCANNING" },
    { image: Cream, title: "MULTI-BRANCH MENUS" }
];

export default function TopSection({ onPrimaryCta, onSecondaryCta }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2200);
        return () => clearInterval(interval);
    }, []);

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
        <Container>
            <HeroLeft>
                <Kicker>QR digital ordering</Kicker>
                <HeroTitle>Turn every table into an order.</HeroTitle>
                <HeroSubtitle>
                    Menugic helps restaurants launch a modern QR menu, take WhatsApp orders, and manage everything from one simple admin.
                </HeroSubtitle>

                <HeroActions>
                    <PrimaryButton
                        type="button"
                        onClick={() => onPrimaryCta && onPrimaryCta()}
                    >
                        Get started
                    </PrimaryButton>

                    <SecondaryButton
                        type="button"
                        onClick={() => onSecondaryCta && onSecondaryCta()}
                    >
                        View pricing
                    </SecondaryButton>
                </HeroActions>
            </HeroLeft>

            <HeroRight>
                <PhoneWrapper onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
                    <LogoMenugic src={Logo} alt="Menugic" />
                    <PhoneImage src={phone} alt="Phone preview" />

                    <TitleContainer>
                        {carouselItems.map((item, index) => (
                            <Title key={index} index={index} currentIndex={currentIndex}>
                                {item.title}
                            </Title>
                        ))}
                    </TitleContainer>

                    <CarouselWrapper currentIndex={currentIndex}>
                        {carouselItems.map((item, index) => (
                            <ImageWrapper key={index}>
                                <Image
                                    index={index}
                                    currentIndex={currentIndex}
                                    src={item.image}
                                    alt={item.title}
                                />
                            </ImageWrapper>
                        ))}
                    </CarouselWrapper>
                </PhoneWrapper>
            </HeroRight>
        </Container>
    );
}
