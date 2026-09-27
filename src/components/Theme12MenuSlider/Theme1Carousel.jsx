import React, { useRef, useState } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { getImageUrl } from "../../utilities/imageUrl";
import "swiper/css";

const Root = styled.section`
  width: min(100%, 1280px);
  margin: 0 auto;
  padding: 16px 16px 0;
  color: ${(p) => p.theme.textColor || "#222"};
  @media (max-width: 479px) { padding: 12px 12px 0; }
  @media (min-width: 768px) { padding: 24px 24px 0; }
  .swiper { border-radius: 18px; overflow: hidden; background: ${(p) => p.theme.BoxColor || p.theme.backgroundColor || "#fff"}; }
  .swiper-wrapper { align-items: stretch; }
  .swiper-slide { height: auto; }
  @media (prefers-reduced-motion: reduce) { .swiper-wrapper { transition-duration: 0ms !important; } }
`;
const Slide = styled.figure`
  margin: 0;
  height: 100%;
  background: ${(p) => p.theme.BoxColor || "#fff"};
  img { display: block; width: 100%; height: clamp(140px, 40vw, 220px); object-fit: contain; }
  figcaption { padding: 10px 16px; font-size: .875rem; font-weight: 600; color: ${(p) => p.theme.BoxTextColor || p.theme.textColor || "#222"}; }
  @media (min-width: 768px) { img { height: 220px; } }
`;
const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  min-height: 44px;
`;
const Arrow = styled.button`
  width: 44px;
  height: 44px;
  border: 0;
  border-radius: 12px;
  background: transparent;
  color: ${(p) => p.theme.mainColor || "#333"};
  display: grid;
  place-items: center;
  cursor: pointer;
  &:disabled { opacity: .3; cursor: default; }
`;
const Dot = styled.button`
  width: 32px;
  height: 44px;
  padding: 0;
  border: 0;
  background: transparent;
  display: grid;
  place-items: center;
  cursor: pointer;
  &::after { content: ""; width: ${(p) => p.$active ? "22px" : "6px"}; height: 6px; border-radius: 8px; background: ${(p) => p.theme.mainColor || "#333"}; opacity: ${(p) => p.$active ? 1 : .3}; transition: width 160ms ease; }
`;

export default function Theme1Carousel({ images = [], activeLanguage = "en" }) {
  const swiper = useRef(null);
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState([]);
  const ar = activeLanguage === "ar";
  const valid = images.filter((image) => typeof image?.url === "string" && image.url.trim() && !failed.includes(image.url));
  const index = Math.min(active, Math.max(0, valid.length - 1));
  if (!valid.length) return null;
  return <Root aria-label={ar ? "عروض المطعم" : "Restaurant highlights"} aria-roledescription={ar ? "عارض شرائح" : "carousel"} data-theme1-slider dir={ar ? "rtl" : "ltr"}>
    <Swiper key={`${activeLanguage}-${valid.map((item) => item.url).join("|")}`} modules={[A11y]} slidesPerView={1} spaceBetween={16} speed={300}
      initialSlide={index} onSwiper={(instance) => { swiper.current = instance; }} onSlideChange={(instance) => setActive(instance.activeIndex)}
      a11y={{ prevSlideMessage: ar ? "الشريحة السابقة" : "Previous slide", nextSlideMessage: ar ? "الشريحة التالية" : "Next slide", slideLabelMessage: "{{index}} / {{slidesLength}}" }}>
      {valid.map((image, position) => {
        const title = (ar ? image.ar_title : image.en_title) || image.en_title || image.ar_title;
        return <SwiperSlide key={image.id || image.url}><Slide>
          <img src={getImageUrl(image.url)} alt={title || (ar ? `عرض ${position + 1}` : `Restaurant highlight ${position + 1}`)} loading={position === 0 ? "eager" : "lazy"} onError={() => setFailed((previous) => [...previous, image.url])} />
          {title && <figcaption>{title}</figcaption>}
        </Slide></SwiperSlide>;
      })}
    </Swiper>
    {valid.length > 1 && <Controls>
      <Arrow type="button" disabled={index === 0} onClick={() => swiper.current?.slidePrev()} aria-label={ar ? "الشريحة السابقة" : "Previous slide"}>{ar ? <FiChevronRight /> : <FiChevronLeft />}</Arrow>
      {valid.map((image, position) => <Dot type="button" key={image.id || image.url} $active={position === index} aria-current={position === index ? "true" : undefined} aria-label={ar ? `عرض الشريحة ${position + 1}` : `Show slide ${position + 1}`} onClick={() => swiper.current?.slideTo(position)} />)}
      <Arrow type="button" disabled={index === valid.length - 1} onClick={() => swiper.current?.slideNext()} aria-label={ar ? "الشريحة التالية" : "Next slide"}>{ar ? <FiChevronLeft /> : <FiChevronRight />}</Arrow>
    </Controls>}
  </Root>;
}
