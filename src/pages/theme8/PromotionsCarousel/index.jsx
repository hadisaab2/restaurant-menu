import React from "react";
import styled from "styled-components";
import { t } from "../i18n";
import { getImageUrl } from "../../../utilities/imageUrl";

const Section = styled.section`
  padding: var(--sp-5) 0;
`;

const Container = styled.div`
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--sp-4);
`;

const Heading = styled.h2`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 600;
  color: var(--c-text);
  margin-bottom: var(--sp-3);
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

const Rail = styled.div`
  display: flex;
  gap: var(--sp-3);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  padding-bottom: var(--sp-2);
  scrollbar-width: none;
  &::-webkit-scrollbar { display: none; }
`;

const PromoCard = styled.div`
  flex: 0 0 280px;
  scroll-snap-align: start;
  border-radius: var(--r-lg);
  overflow: hidden;
  position: relative;
  cursor: pointer;
  transition: transform var(--dur-normal) var(--ease-out);
  &:hover { transform: translateY(-2px); }
`;

const PromoImg = styled.div`
  height: 140px;
  position: relative;
  overflow: hidden;
  background: var(--c-surface-alt);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%);
  }
`;

const PromoContent = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: var(--sp-4);
  color: #fff;
  z-index: 1;
`;

const PromoTitle = styled.div`
  font-family: var(--font-display);
  font-size: var(--text-md);
  font-weight: 700;
  line-height: 1.2;
  text-shadow: 0 1px 3px rgba(0,0,0,0.3);
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

const PromoSub = styled.div`
  font-size: var(--text-xs);
  opacity: 0.9;
  margin-top: 2px;
`;

export default function PromotionsCarousel({ sliderImages, activeLanguage }) {
  const lang = activeLanguage || "en";

  if (!sliderImages || sliderImages.length === 0) return null;

  return (
    <Section aria-label="Promotions">
      <Container>
        <Heading>{t("promos.title", lang)}</Heading>
        <Rail>
          {sliderImages.map((slide, idx) => {
            const imgUrl = slide.url || slide.image_url;
            const title = lang === "ar" ? (slide.ar_title || slide.en_title) : (slide.en_title || "");
            const subtitle = lang === "ar" ? (slide.ar_subtitle || slide.en_subtitle) : (slide.en_subtitle || "");
            return (
              <PromoCard key={slide.id || idx}>
                <PromoImg>
                  {imgUrl && <img src={getImageUrl(imgUrl)} alt={title || ""} loading="lazy" />}
                </PromoImg>
                {(title || subtitle) && (
                  <PromoContent>
                    {title && <PromoTitle>{title}</PromoTitle>}
                    {subtitle && <PromoSub>{subtitle}</PromoSub>}
                  </PromoContent>
                )}
              </PromoCard>
            );
          })}
        </Rail>
      </Container>
    </Section>
  );
}
