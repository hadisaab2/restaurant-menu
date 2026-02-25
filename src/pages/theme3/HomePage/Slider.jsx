import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  SliderContainer,
  SwiperWrap,
  SlideCard,
  CardBody,
  CardInfo,
  SlideTitle,
  SliderDots,
  Dot,
  SliderArrows,
  ArrowButton,
} from "./SliderStyles";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IMAGE_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing";

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
    <SliderContainer className="m-b10" id="swiper">
      <SwiperWrap className="swiper-btn-center-lr1">
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          modules={[Autoplay]}
          slidesPerView={1.2}
          spaceBetween={10}
          loop={totalSlides > 1}
          grabCursor
          speed={400}
          autoplay={
            totalSlides > 1
              ? { delay: 5000, disableOnInteraction: false }
              : false
          }
          breakpoints={{
            576: { slidesPerView: 1.5, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            992: { slidesPerView: 2.5, spaceBetween: 10 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="home-banner-swiper tag-group recomand-swiper"
        >
          {images.map((image, index) => {
            const imageUrl = image.url
              ? `${IMAGE_BASE}/${image.url}`
              : "";
            const title = activeLanguage === "ar" ? image.ar_title : image.en_title;
            return (
              <SwiperSlide key={image.id || index}>
                <SlideCard
                  className="card add-banner"
                  style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : undefined }}
                >
                  <CardBody className="card-body">
                    <CardInfo className="card-info w-70">
                      <SlideTitle className="title mb-2 text-white">
                        {title || ""}
                      </SlideTitle>
                    </CardInfo>
                  </CardBody>
                </SlideCard>
              </SwiperSlide>
            );
          })}
        </Swiper>

        
      </SwiperWrap>

      {totalSlides > 1 && (
        <>
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
