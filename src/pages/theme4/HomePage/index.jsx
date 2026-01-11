import React, { useState } from "react";
import {
  HomepageContainer,
  CoverImage,
  Content,
  WelcomeText,
  Logo,
  RestaurantName,
  Slogan,
  CTAButton,
  CTAText,
  ContactSection,
  ContactTitle,
  ContactIcon,
  ContactLink,
  ArrowButton,
} from "./styles";
import { FaInstagram, FaWhatsapp, FaPhone, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Homepage({ onEnterMenu }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  // Get background color from theme
  const theme = restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {};
  const backgroundColor = theme?.homepageBackgroundColor || "#ffffff";

  // Get cover image from slider_images table (type = 2)
  const coverImage = restaurant?.homepageCoverImage?.url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.homepageCoverImage.url}`
    : null;

  // Get slogan
  const slogan = activeLanguage === "en" 
    ? (restaurant?.en_slogan || "")
    : (restaurant?.ar_slogan || "");

  // Get contact info
  const branches = restaurant?.branches || [];
  const socialMedia = restaurant?.socialMedia || [];
  
  const phoneNumber = branches?.[0]?.phone_number || "";
  const whatsappNumber = branches?.[0]?.whatsapp_number || "";
  const instagramLink = socialMedia?.find(s => 
    s.platform?.toLowerCase().includes("instagram") || s.name?.toLowerCase().includes("instagram")
  )?.link || socialMedia?.[0]?.link || "";

  // Translations
  const welcomeText = activeLanguage === "en" 
    ? "Welcome to" 
    : "مرحباً بكم في";
  const ctaText = activeLanguage === "en" 
    ? "Slide to see menu" 
    : "اسحب لرؤية القائمة";

  // Handle swipe gesture
  const handleTouchStart = (e) => {
    setIsSliding(true);
    setSwipeProgress(0);
  };

  const handleTouchMove = (e) => {
    if (!isSliding) return;
    const touch = e.touches[0];
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const startX = rect.left;
    const currentX = touch.clientX;
    
    // Calculate progress based on touch position
    const isRTL = activeLanguage === "ar";
    const maxDistance = rect.width * 0.8; // Allow sliding up to 80% of button width
    const deltaX = isRTL ? startX - currentX : currentX - startX;
    const progress = Math.min(Math.max(deltaX / maxDistance, 0), 1);
    
    setSwipeProgress(progress);
  };

  const handleTouchEnd = () => {
    if (swipeProgress >= 0.6) {
      onEnterMenu();
    }
    setIsSliding(false);
    setSwipeProgress(0);
  };

  // Handle mouse drag (for desktop)
  const handleMouseDown = (e) => {
    setIsSliding(true);
    setSwipeProgress(0);
    const handleMouseMove = (e) => {
      if (!isSliding) return;
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const startX = rect.left;
      const currentX = e.clientX;
      
      const isRTL = activeLanguage === "ar";
      const maxDistance = rect.width * 0.8;
      const deltaX = isRTL ? startX - currentX : currentX - startX;
      const progress = Math.min(Math.max(deltaX / maxDistance, 0), 1);
      
      setSwipeProgress(progress);
    };

    const handleMouseUp = () => {
      if (swipeProgress >= 0.6) {
        onEnterMenu();
      }
      setIsSliding(false);
      setSwipeProgress(0);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  // Format phone number
  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\s/g, "");
  };

  return (
    <HomepageContainer 
      activeLanguage={activeLanguage}
      backgroundColor={backgroundColor}
    >
      {coverImage && (
        <CoverImage src={coverImage} alt="Cover" />
      )}
      <Content activeLanguage={activeLanguage}>
        <WelcomeText activeLanguage={activeLanguage} theme={theme}>
          {welcomeText}
        </WelcomeText>
        {restaurant?.logoURL && (
          <Logo
            src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
            alt={restaurant?.name || "Restaurant"}
          />
        )}
        {!restaurant?.logoURL && restaurant?.name && (
          <RestaurantName activeLanguage={activeLanguage} theme={theme}>
            {restaurant.name}
          </RestaurantName>
        )}
        {slogan && (
          <Slogan activeLanguage={activeLanguage} theme={theme}>
            {slogan}
          </Slogan>
        )}
        
        <CTAButton
          onClick={swipeProgress >= 0.6 ? onEnterMenu : undefined}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          activeLanguage={activeLanguage}
          swipeProgress={swipeProgress}
          theme={theme}
        >
          <CTAText activeLanguage={activeLanguage} swipeProgress={swipeProgress}>
            {ctaText}
          </CTAText>
          <ArrowButton
            activeLanguage={activeLanguage}
            swipeProgress={swipeProgress}
          >
            {activeLanguage === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </ArrowButton>
        </CTAButton>
      </Content>

      <ContactSection activeLanguage={activeLanguage}>
        <ContactTitle activeLanguage={activeLanguage} theme={theme}>
          {activeLanguage === "en" ? "Contact Us" : "اتصل بنا"}
        </ContactTitle>
        <div style={{ display: "flex", gap: "20px", alignItems: "center", justifyContent: "center" }}>
          {instagramLink && (
            <ContactLink
              href={instagramLink.startsWith("http") ? instagramLink : `https://${instagramLink}`}
              target="_blank"
              rel="noopener noreferrer"
              activeLanguage={activeLanguage}
              theme={theme}
            >
              <ContactIcon>
                <FaInstagram />
              </ContactIcon>
            </ContactLink>
          )}
          {whatsappNumber && (
            <ContactLink
              href={`https://wa.me/${formatPhone(whatsappNumber)}`}
              target="_blank"
              rel="noopener noreferrer"
              activeLanguage={activeLanguage}
              theme={theme}
            >
              <ContactIcon>
                <FaWhatsapp />
              </ContactIcon>
            </ContactLink>
          )}
          {phoneNumber && (
            <ContactLink
              href={`tel:${formatPhone(phoneNumber)}`}
              activeLanguage={activeLanguage}
              theme={theme}
            >
              <ContactIcon>
                <FaPhone />
              </ContactIcon>
            </ContactLink>
          )}
        </div>
      </ContactSection>
    </HomepageContainer>
  );
}

