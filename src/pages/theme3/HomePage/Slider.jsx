import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  SliderContainer,
  SwiperWrap,
  SlideCard,
  SlideImage,
  SliderDots,
  Dot,
  SliderArrows,
  ArrowButton,
  SlideOverlay,
} from "./SliderStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Slider({ images, activeLanguage }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const totalSlides = images?.length || 0;

  if (!images || images.length === 0) {
    return null;
  }

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index);
    }
    setActiveIndex(index);
  };

  return (
    <SliderContainer>
      <SwiperWrap>
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Autoplay]}
          slidesPerView={1.5}
          centeredSlides
          spaceBetween={4}
          loop={totalSlides > 1}
          grabCursor
          watchSlidesProgress
          speed={500}
          autoplay={
            totalSlides > 1
              ? { delay: 5000, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            768: { spaceBetween: 4, slidesPerView: 1.5 },
            1200: { spaceBetween: 6, slidesPerView: 1.5 },
          }}
          className="home-expo-swiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={image.id || index}>
              {({ isActive }) => (
                <SlideCard $isActive={isActive}>
                  <SlideImage
                    src={`https://storage.googleapis.com/ecommerce-bucket-testing/${image.url}`}
                    alt={`Slide ${index + 1}`}
                    draggable={false}
                    loading="lazy"
                  />
                  <SlideOverlay $isActive={isActive} />
                </SlideCard>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrap>

      {totalSlides > 1 && (
        <>
          <SliderArrows>
            <ArrowButton
              $position="left"
              activeLanguage={activeLanguage}
              aria-label="Previous slide"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <FaChevronLeft />
            </ArrowButton>
            <ArrowButton
              $position="right"
              activeLanguage={activeLanguage}
              aria-label="Next slide"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <FaChevronRight />
            </ArrowButton>
          </SliderArrows>

          <SliderDots>
            {images.map((_, index) => (
              <Dot
                key={index}
                $active={index === activeIndex}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </SliderDots>
        </>
      )}
    </SliderContainer>
  );
}
