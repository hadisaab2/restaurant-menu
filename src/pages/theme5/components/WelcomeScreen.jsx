import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { withAlpha, softGradient, getReadableTextColor, safeColor } from '../utils/colorUtils';

/* ─── Animations ─────────────────────────────────────────────── */

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const fadeOut = keyframes`
  from { opacity: 1; transform: scale(1); }
  to   { opacity: 0; transform: scale(1.04); }
`;

/* ─── Wrapper ────────────────────────────────────────────────── */

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  overflow: hidden;
  animation: ${props => props.$leaving ? fadeOut : fadeIn} 0.55s ease forwards;
`;

/* ─── Background ─────────────────────────────────────────────── */

const BgImage = styled.div`
  position: absolute;
  inset: 0;
  background: ${props => props.$src ? `url(${props.$src}) center/cover no-repeat` : props.$gradient};
  transform: scale(1.04);
`;

const DarkOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.28) 0%,
    rgba(0, 0, 0, 0.08) 40%,
    rgba(0, 0, 0, 0.72) 70%,
    rgba(0, 0, 0, 0.88) 100%
  );
`;

/* ─── Top logo area ──────────────────────────────────────────── */

const TopArea = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: env(safe-area-inset-top, 24px) 24px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: max(env(safe-area-inset-top, 24px), 40px);
  animation: ${slideUp} 0.7s ease 0.1s both;
`;

const LogoCircle = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 22px;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.18);
  border: 2.5px solid rgba(255, 255, 255, 0.45);
  box-shadow:
    0 4px 20px rgba(0, 0, 0, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.08) inset;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`;

const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoInitials = styled.div`
  font-size: 28px;
  font-weight: 800;
  color: rgba(255, 255, 255, 0.95);
  letter-spacing: -1px;
`;

/* ─── Bottom content card ────────────────────────────────────── */

const BottomCard = styled.div`
  position: relative;
  width: 100%;
  padding: 36px 28px calc(env(safe-area-inset-bottom, 0px) + 40px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  animation: ${slideUp} 0.7s ease 0.2s both;
`;

const RestaurantName = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 1.4px;
  text-transform: uppercase;
`;

const Headline = styled.h1`
  margin: 0;
  font-size: 34px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.18;
  letter-spacing: -0.8px;
  max-width: 290px;
`;

const Subline = styled.p`
  margin: 4px 0 0;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.62);
  font-weight: 400;
  line-height: 1.5;
`;

const CTAButton = styled.button`
  margin-top: 28px;
  width: 100%;
  height: 56px;
  border-radius: 18px;
  border: none;
  background: ${props => props.$bg};
  color: ${props => props.$col};
  font-size: 17px;
  font-weight: 700;
  letter-spacing: -0.2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: ${props => `0 8px 28px ${props.$shadow}`};
  transition: transform 0.16s ease, opacity 0.16s ease;

  &:active { transform: scale(0.97); opacity: 0.88; }
`;

const Arrow = styled.span`
  font-size: 19px;
  line-height: 1;
  transition: transform 0.2s ease;
  display: inline-block;
`;

/* ─── Component ──────────────────────────────────────────────── */

export default function WelcomeScreen({
  restaurant,
  themeColors,
  activeLanguage = 'en',
  onEnter,
}) {
  const [leaving, setLeaving] = useState(false);
  const isRTL = activeLanguage === 'ar';

  const mainColor = safeColor(themeColors?.mainColor, '#333333');
  const bgColor   = safeColor(themeColors?.backgroundColor, '#444444');
  const btnTextColor = safeColor(themeColors?.popupbuttonText, getReadableTextColor(mainColor));

  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;
  const coverUrl = restaurant?.cover_url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.cover_url}`
    : null;
  const heroGradient = softGradient(bgColor, mainColor, '160deg', 0.9, 0.85);

  const initials = (restaurant?.name || '').trim().slice(0, 2).toUpperCase() || '🍽';

  const btnShadow = withAlpha(mainColor, 0.38);

  const headlines = {
    en: 'Good food is always good',
    ar: 'الطعام الجيد دائماً رائع',
  };
  const sublines = {
    en: 'Explore our menu and order what you love',
    ar: 'تصفح قائمتنا واطلب ما تحب',
  };
  const ctaLabels = {
    en: 'Explore Menu',
    ar: 'استكشف القائمة',
  };

  const handleEnter = () => {
    setLeaving(true);
    setTimeout(() => { onEnter?.(); }, 500);
  };

  return (
    <Wrapper $leaving={leaving} dir={isRTL ? 'rtl' : 'ltr'}>
      <BgImage $src={coverUrl} $gradient={heroGradient} />
      <DarkOverlay />

      {/* Logo at the top */}
      <TopArea>
        <LogoCircle>
          {logoUrl
            ? <LogoImg src={logoUrl} alt={restaurant?.name || ''} />
            : <LogoInitials>{initials}</LogoInitials>
          }
        </LogoCircle>
      </TopArea>

      {/* Bottom content */}
      <BottomCard>
        {restaurant?.name && (
          <RestaurantName>{restaurant.name}</RestaurantName>
        )}
        <Headline>{headlines[activeLanguage] || headlines.en}</Headline>
        <Subline>{sublines[activeLanguage] || sublines.en}</Subline>
        <CTAButton
          $bg={mainColor}
          $col={btnTextColor}
          $shadow={btnShadow}
          onClick={handleEnter}
          type="button"
        >
          {ctaLabels[activeLanguage] || ctaLabels.en}
          <Arrow>{isRTL ? '←' : '→'}</Arrow>
        </CTAButton>
      </BottomCard>
    </Wrapper>
  );
}
