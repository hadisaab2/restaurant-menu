import React from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { getBadgeIconComponent } from "../../../constants/badgeIconTypes";
import {
  HeroRoot,
  HeroBgImage,
  HeroGradient,
  HeroContent,
  HeroInner,
  BadgesWrap,
  Badge,
  HeroTitle,
  HeroSubtext,
  CTAWrap,
  CtaPrimary,
} from "./HeroBannerStyles";

const IMAGE_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing";

export default function HeroBanner({
  images = [],
  activeLanguage = "en",
  onShopNow,
  headline,
  subtext,
  badges = [],
  ctaPrimaryText,
}) {
  const heroImageUrl =
    images?.length > 0 && images[0]?.url
      ? `${IMAGE_BASE}/${images[0].url}`
      : null;

  const head = headline ?? (activeLanguage === "en" ? "Welcome" : "مرحباً");
  const sub = subtext ?? "";
  const cta1 = ctaPrimaryText ?? (activeLanguage === "en" ? "Shop Now" : "تسوق الآن");

  return (
    <HeroRoot>
      <HeroBgImage>
        {heroImageUrl ? (
          <img src={heroImageUrl} alt="" />
        ) : (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            }}
          />
        )}
      </HeroBgImage>
      <HeroGradient />
      <HeroContent $activeLanguage={activeLanguage}>
        <HeroInner>
          {Array.isArray(badges) && badges.length > 0 && (
            <BadgesWrap>
              {badges.map((b) => {
                const IconComponent = getBadgeIconComponent(b.icon_type);
                const label = activeLanguage === "ar" ? (b.ar_text || b.en_text) : (b.en_text || b.ar_text);
                if (!label) return null;
                return (
                  <Badge key={b.id}>
                    <IconComponent size={12} style={{ flexShrink: 0 }} />
                    {label}
                  </Badge>
                );
              })}
            </BadgesWrap>
          )}
          <HeroTitle>{head}</HeroTitle>
          {sub ? <HeroSubtext>{sub}</HeroSubtext> : null}
          <CTAWrap>
            <CtaPrimary type="button" onClick={onShopNow}>
              {cta1}
              {activeLanguage === "ar" ? (
                <FaChevronLeft size={16} />
              ) : (
                <FaChevronRight size={16} />
              )}
            </CtaPrimary>
          </CTAWrap>
        </HeroInner>
      </HeroContent>
    </HeroRoot>
  );
}
