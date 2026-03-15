import React, { useState, useEffect } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { getBadgeIconComponent } from "../../../constants/badgeIconTypes";
import {
  HeroRoot,
  HeroBgImage,
  HeroBgImageSlide,
  HeroGradient,
  HeroContent,
  HeroInner,
  BadgesWrap,
  Badge,
  HeroTitle,
  HeroSubtext,
  CTAWrap,
  CtaPrimary,
  HeroImagePopupBackdrop,
  HeroImagePopupContent,
  HeroImagePopupClose,
} from "./HeroBannerStyles";

const IMAGE_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing";
const ROTATE_INTERVAL_MS = 5000;

export default function HeroBanner({
  images = [],
  activeLanguage = "en",
  onShopNow,
  headline,
  subtext,
  badges = [],
  ctaPrimaryText,
}) {
  const validImages = (images || []).filter((img) => img?.url);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showImagePopup, setShowImagePopup] = useState(false);
  const hasMultipleImages = validImages.length > 1;

  useEffect(() => {
    if (!hasMultipleImages) return;
    const id = setInterval(() => {
      setCurrentImageIndex((i) => (i + 1) % validImages.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(id);
  }, [hasMultipleImages, validImages.length]);

  const head = headline ?? (activeLanguage === "en" ? "Welcome" : "مرحباً");
  const sub = subtext ?? "";
  const cta1 = ctaPrimaryText ?? (activeLanguage === "en" ? "Shop Now" : "تسوق الآن");

  const openImagePopup = () => {
    if (validImages.length > 0) setShowImagePopup(true);
  };

  const closeImagePopup = (e) => {
    if (e) e.stopPropagation();
    setShowImagePopup(false);
  };

  return (
    <HeroRoot>
      <HeroBgImage
        $clickable={validImages.length > 0}
        onClick={openImagePopup}
        role={validImages.length > 0 ? "button" : undefined}
        aria-label={validImages.length > 0 ? (activeLanguage === "en" ? "View hero image" : "عرض الصورة") : undefined}
      >
        {validImages.length > 0 ? (
          validImages.map((img, i) => (
            <HeroBgImageSlide
              key={img.id ?? i}
              $active={i === currentImageIndex}
              aria-hidden={i !== currentImageIndex}
            >
              <img src={`${IMAGE_BASE}/${img.url}`} alt="" />
            </HeroBgImageSlide>
          ))
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
      {showImagePopup && validImages.length > 0 && (
        <HeroImagePopupBackdrop onClick={closeImagePopup}>
          <HeroImagePopupContent onClick={(e) => e.stopPropagation()}>
            <HeroImagePopupClose type="button" onClick={closeImagePopup} aria-label={activeLanguage === "en" ? "Close" : "إغلاق"}>
              <IoMdClose size={28} />
            </HeroImagePopupClose>
            <img
              src={`${IMAGE_BASE}/${validImages[currentImageIndex].url}`}
              alt=""
            />
          </HeroImagePopupContent>
        </HeroImagePopupBackdrop>
      )}
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
