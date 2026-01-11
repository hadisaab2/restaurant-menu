import React, { useState, useEffect } from "react";
import {
  SliderContainer,
  SliderWrapper,
  Slide,
  SlideImage,
  SliderDots,
  Dot,
  SliderArrows,
  ArrowButton,
  SlideOverlay,
} from "./SliderStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ images, activeLanguage }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying || !images || images.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, images]);

  if (!images || images.length === 0) {
    return null;
  }

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000); // Resume auto-play after 10 seconds
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <SliderContainer>
      <SliderWrapper>
        {images.map((image, index) => (
          <Slide
            key={image.id || index}
            active={index === currentIndex}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            <SlideImage
              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`}
              alt={`Slider ${index + 1}`}
            />
            <SlideOverlay />
          </Slide>
        ))}
      </SliderWrapper>

      {images.length > 1 && (
        <>
          <SliderArrows>
            <ArrowButton
              onClick={goToPrevious}
              position="left"
              activeLanguage={activeLanguage}
            >
              <FaChevronLeft />
            </ArrowButton>
            <ArrowButton
              onClick={goToNext}
              position="right"
              activeLanguage={activeLanguage}
            >
              <FaChevronRight />
            </ArrowButton>
          </SliderArrows>

          <SliderDots activeLanguage={activeLanguage}>
            {images.map((_, index) => (
              <Dot
                key={index}
                active={index === currentIndex}
                onClick={() => goToSlide(index)}
              />
            ))}
          </SliderDots>
        </>
      )}
    </SliderContainer>
  );
}

