import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IoLocationOutline, IoChevronForwardOutline } from 'react-icons/io5';
import { withAlpha, softGradient } from '../utils/colorUtils';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

/* ─── Hero section ───────────────────────────────────────────── */

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  margin-top: -58px;
  padding-top: 58px;
  min-height: 230px;
  overflow: visible;
  padding-bottom: 78px;
`;

const CoverBg = styled.div`
  position: absolute;
  inset: 0;
  background: url(${props => props.$src}) center/cover no-repeat;
`;

const GradientBg = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$gradient};
`;

const Blob = styled.div`
  position: absolute;
  border-radius: 50%;
  background: rgba(255,255,255,0.07);
  pointer-events: none;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0,0,0,0.06) 0%,
    rgba(0,0,0,0.22) 50%,
    rgba(0,0,0,0.54) 100%
  );
`;

/* ─── Slider ─────────────────────────────────────────────────── */

const SliderWrap = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;

  .swiper { width: 100%; height: 100%; }

  .swiper-pagination-bullet {
    background: rgba(255,255,255,0.6);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #ffffff;
    transform: scaleX(2.2);
    border-radius: 3px;
    transition: transform 0.3s ease;
  }
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

/* ─── Floating restaurant card ───────────────────────────────── */

const RestCard = styled.div`
  position: absolute;
  bottom: -64px;
  left: 16px;
  right: 16px;
  z-index: 20;
  background: var(--theme-card-bg, #fff);
  border-radius: 22px;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  gap: 14px;
  direction: ${props => props.$rtl ? 'rtl' : 'ltr'};
  cursor: ${props => props.$clickable ? 'pointer' : 'default'};
  box-shadow:
    0 1px 2px rgba(0,0,0,0.04),
    0 4px 14px rgba(0,0,0,0.08),
    0 16px 40px rgba(0,0,0,0.1);

  &:active { opacity: ${props => props.$clickable ? 0.9 : 1}; }
`;

const LogoCircle = styled.div`
  width: 52px;
  height: 52px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  background: ${props => props.$gradient};
  box-shadow: 0 2px 10px rgba(0,0,0,0.14);
  border: 2.5px solid var(--theme-card-bg, #fff);
  outline: 1px solid rgba(0,0,0,0.06);
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoInitials = styled.div`
  width: 100%;
  height: 100%;
  background: ${props => props.$gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 800;
  color: rgba(255,255,255,0.95);
  letter-spacing: -0.5px;
`;

const CardDetails = styled.div`
  flex: 1;
  min-width: 0;
`;

const CardName = styled.h1`
  margin: 0 0 4px;
  font-size: 17px;
  font-weight: 800;
  color: var(--theme-card-text, #111);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: -0.3px;
`;

const CardLocation = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 12.5px;
  color: var(--theme-card-text, #666);
  opacity: 0.55;
  font-weight: 500;
`;

const CardArrow = styled.div`
  flex-shrink: 0;
  color: var(--theme-main, #333);
  font-size: 18px;
  opacity: 0.45;
  display: flex;
  align-items: center;
`;

/* ─── Component ──────────────────────────────────────────────── */

export default function ElegantHero({ popupHandler, showMenuSlider = false, sliderImages = [] }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split('.')[0];
  const restaurantName =
    subdomain !== 'menugic' && subdomain !== 'localhost' && subdomain !== 'www'
      ? subdomain : paramRestaurantName;

  const restaurant    = useSelector(state => state.restaurant?.[restaurantName]);
  const activeLanguage = restaurant?.activeLanguage || 'en';
  const isRTL         = activeLanguage === 'ar';

  let themeColors = {};
  try { themeColors = JSON.parse(restaurant?.theme || '{}'); } catch (_) {}

  const mainColor = themeColors.mainColor || '#333333';
  const bgColor   = themeColors.backgroundColor || '#555555';

  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;
  const coverUrl = restaurant?.cover_url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.cover_url}`
    : null;

  const hasBranches   = (restaurant?.branches?.length || 0) > 0;
  const primaryBranch = restaurant?.branches?.[0];

  const initials         = (restaurant?.name || '').slice(0, 2).toUpperCase() || '🍽️';
  const heroGradient     = softGradient(mainColor, bgColor, '145deg', 0.78, 0.65);
  const logoInitGradient = softGradient(mainColor, bgColor, '135deg');

  const handleCardClick = () => {
    if (!hasBranches) return;
    window.history.pushState({}, '');
    popupHandler('location');
  };

  return (
    <HeroSection>
      {/* Background */}
      {showMenuSlider && sliderImages.length > 0 ? (
        <SliderWrap>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={sliderImages.length > 1}
          >
            {sliderImages.map((img, i) => (
              <SwiperSlide key={i}>
                <SliderImage
                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${img}`}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </SliderWrap>
      ) : coverUrl ? (
        <CoverBg $src={coverUrl} />
      ) : (
        <GradientBg $gradient={heroGradient}>
          <Blob style={{ width: 260, height: 260, top: -80, right: -70 }} />
          <Blob style={{ width: 160, height: 160, bottom: 60, left: -50, opacity: 0.5 }} />
          <Blob style={{ width: 90,  height: 90,  top: 90,  left: '50%', opacity: 0.4 }} />
        </GradientBg>
      )}
      <Overlay />

      {/* Floating restaurant card */}
      <RestCard
        $rtl={isRTL}
        $clickable={hasBranches}
        onClick={hasBranches ? handleCardClick : undefined}
      >
        <LogoCircle $gradient={logoInitGradient}>
          {logoUrl
            ? <LogoImg src={logoUrl} alt={restaurant?.name} />
            : <LogoInitials $gradient={logoInitGradient}>{initials}</LogoInitials>
          }
        </LogoCircle>

        <CardDetails>
          <CardName>{restaurant?.name}</CardName>
          {hasBranches && primaryBranch?.location && (
            <CardLocation>
              <IoLocationOutline size={12} />
              <span>{primaryBranch.location}</span>
            </CardLocation>
          )}
        </CardDetails>

        {hasBranches && (
          <CardArrow>
            <IoChevronForwardOutline style={{ transform: isRTL ? 'rotate(180deg)' : 'none' }} />
          </CardArrow>
        )}
      </RestCard>
    </HeroSection>
  );
}
