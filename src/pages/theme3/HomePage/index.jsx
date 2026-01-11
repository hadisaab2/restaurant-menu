import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  HeroSection,
  RestaurantLogo,
  CategoriesLink,
  TopCategoriesSection,
  TopCategoryItem,
  TopCategoryContent,
  TopCategoryIcon,
  TopCategoryInfo,
  TopCategoryName,
  TopCategoryDescription,
  CTAText,
  ArrowButton,
  CategoriesCarouselContainer,
  CategoriesCarousel,
  ScrollHint,
  LocationCardsSection,
  LocationCard,
  LocationName,
  LocationIconsContainer,
  LocationIconButton,
  BranchPopup,
  BranchPopupOverlay,
  BranchPopupContent,
  BranchPopupClose,
  BranchPopupTitle,
  BranchPopupDetails,
  BranchPopupInfo,
  BranchPopupText,
  BranchPopupLink,
  BranchPopupMapButton,
  SocialMediaSection,
  SocialMediaGrid,
  SocialLink,
  SocialIcon,
  SectionTitle,
  Footer,
  Copyright,
  WelcomeSection,
  WelcomeText,
  WelcomeLogo,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGlobe, FaTiktok, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "./Slider";

// Component for category carousel item with image fallback
const CategoryCarouselItem = ({ category, activeLanguage, onExploreClick, logoURL }) => {
  const [imageError, setImageError] = useState(false);
  const categoryName = activeLanguage === "en" ? category.en_category : category.ar_category;
  const categoryImageUrl = category.image_url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
    : null;

  return (
    <TopCategoryItem
      onClick={() => onExploreClick(category.id)}
      activeLanguage={activeLanguage}
    >
      <TopCategoryIcon
        src={imageError || !categoryImageUrl ? logoURL : categoryImageUrl}
        alt={categoryName}
        activeLanguage={activeLanguage}
        onError={() => setImageError(true)}
      />
      <TopCategoryName activeLanguage={activeLanguage}>
        {categoryName}
      </TopCategoryName>
    </TopCategoryItem>
  );
};

export default function HomePage({ onExploreClick, categories }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  const branches = restaurant?.branches || [];
  const socialMedia = restaurant?.socialMedia || [];
  const sliderImages = restaurant?.sliderImages || [];
  const hasSlider = restaurant?.has_slider || false;
  
  // Categories will be shown in carousel, sorted by priority
  
  const [swipeProgress, setSwipeProgress] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const categoriesCarouselRef = useRef(null);
  const touchStartXRef = useRef(null);
  const currentProgressRef = useRef(0);
  
  // Debug logging
  useEffect(() => {
    console.log('Theme3 HomePage - Slider Debug:', {
      hasSlider,
      sliderImagesCount: sliderImages.length,
      sliderImages,
      restaurant: restaurant ? { has_slider: restaurant.has_slider, sliderImages: restaurant.sliderImages } : null
    });
  }, [hasSlider, sliderImages, restaurant]);

  // Reset hasScrolled when categories change
  useEffect(() => {
    setHasScrolled(false);
  }, [categories]);

  // Check if categories carousel is scrollable and handle scroll events
  useEffect(() => {
    const checkScrollable = () => {
      if (categoriesCarouselRef.current) {
        const container = categoriesCarouselRef.current;
        const isScrollable = container.scrollWidth > container.clientWidth;
        setShowScrollIndicator(isScrollable && !hasScrolled);
      }
    };

    const handleScroll = () => {
      if (categoriesCarouselRef.current && !hasScrolled) {
        setHasScrolled(true);
        setShowScrollIndicator(false);
      }
    };

    checkScrollable();
    
    const container = categoriesCarouselRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', checkScrollable);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('resize', checkScrollable);
    };
  }, [categories, hasScrolled]);

  const [selectedBranch, setSelectedBranch] = useState(null);
  const [popupType, setPopupType] = useState(null); // 'phone', 'whatsapp', 'location'
  
  const restaurantNameText = restaurant?.name || restaurantName;

  // Helper function to get social media icon
  const getSocialIcon = (platform) => {
    const platformLower = platform?.toLowerCase() || "";
    if (platformLower.includes("facebook")) return <FaFacebook />;
    if (platformLower.includes("instagram")) return <FaInstagram />;
    if (platformLower.includes("tiktok")) return <FaTiktok />;
    if (platformLower.includes("whatsapp")) return <FaWhatsapp />;
    return <FaGlobe />;
  };
  
  // Helper function to format phone number
  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\s/g, "");
  };

  // Text translations
  const topCategoriesTitle = activeLanguage === "en" ? "Top Categories" : "الفئات المميزة";
  const showAllText = activeLanguage === "en" ? "Show All Categories" : "عرض جميع الفئات";
  const branchesTitle = activeLanguage === "en" ? "Our Locations" : "فروعنا";
  const socialTitle = activeLanguage === "en" ? "Follow Us" : "تابعنا";
  const viewOnMapText = activeLanguage === "en" ? "View on Map" : "عرض على الخريطة";
  const exploreMenuText = activeLanguage === "en" ? "Slide to explore products" : "اسحب لاستكشاف القائمة";
  const copyrightText = activeLanguage === "en" 
    ? `© ${new Date().getFullYear()} Menugic. All rights reserved.`
    : `© ${new Date().getFullYear()} Menugic. جميع الحقوق محفوظة.`;

  // Handle swipe gesture for sliding button
  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    touchStartXRef.current = touch.clientX;
    currentProgressRef.current = 0;
    setIsSliding(true);
    setSwipeProgress(0);
  };

  const handleTouchMove = (e) => {
    if (!isSliding || touchStartXRef.current === null) return;
    e.preventDefault();
    const touch = e.touches[0];
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const currentX = touch.clientX;
    const startX = touchStartXRef.current;
    
    const isRTL = activeLanguage === "ar";
    const maxDistance = rect.width * 0.8;
    // For RTL, dragging left (decreasing X) should increase progress
    // For LTR, dragging right (increasing X) should increase progress
    const deltaX = isRTL ? startX - currentX : currentX - startX;
    const progress = Math.min(Math.max(deltaX / maxDistance, 0), 1);
    
    currentProgressRef.current = progress;
    setSwipeProgress(progress);
  };

  const handleTouchEnd = (e) => {
    if (e) {
      e.preventDefault();
    }
    const finalProgress = currentProgressRef.current;
    touchStartXRef.current = null;
    currentProgressRef.current = 0;
    
    if (finalProgress >= 0.6) {
      onExploreClick();
    }
    setIsSliding(false);
    setSwipeProgress(0);
  };

  // Handle mouse drag (for desktop)
  const handleMouseDown = (e) => {
    const startX = e.clientX;
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const isRTL = activeLanguage === "ar";
    let currentProgress = 0;
    
    setIsSliding(true);
    setSwipeProgress(0);
    currentProgressRef.current = 0;
    
    const handleMouseMove = (e) => {
      const currentX = e.clientX;
      const maxDistance = rect.width * 0.8;
      // For RTL, dragging left (decreasing X) should increase progress
      // For LTR, dragging right (increasing X) should increase progress
      const deltaX = isRTL ? startX - currentX : currentX - startX;
      currentProgress = Math.min(Math.max(deltaX / maxDistance, 0), 1);
      
      currentProgressRef.current = currentProgress;
      setSwipeProgress(currentProgress);
    };

    const handleMouseUp = () => {
      if (currentProgress >= 0.6) {
        onExploreClick();
      }
      setIsSliding(false);
      setSwipeProgress(0);
      currentProgressRef.current = 0;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleIconClick = (branch, type) => {
    setSelectedBranch(branch);
    setPopupType(type);
  };

  const closePopup = () => {
    setSelectedBranch(null);
    setPopupType(null);
  };

  return (
    <Container>
      {/* Slider Section */}
      {hasSlider && sliderImages.length > 0 && (
        <Slider images={sliderImages} activeLanguage={activeLanguage} />
      )}

      {/* Welcome Message - Show only if no slider images */}
      {(!hasSlider || sliderImages.length === 0) && (
        <WelcomeSection activeLanguage={activeLanguage}>
          <WelcomeText activeLanguage={activeLanguage}>
            {activeLanguage === "en" ? "Welcome to" : "مرحباً بكم في"}
          </WelcomeText>
          {restaurant?.logoURL && (
            <WelcomeLogo
              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
              alt={restaurant?.name || restaurantName}
              activeLanguage={activeLanguage}
            />
          )}
        </WelcomeSection>
      )}

      {/* Top Categories Section - Horizontal Carousel */}
      {categories && categories.length > 0 && (
        <TopCategoriesSection activeLanguage={activeLanguage}>
          <SectionTitle activeLanguage={activeLanguage}>
            {topCategoriesTitle}
          </SectionTitle>
          <CategoriesCarouselContainer 
            ref={categoriesCarouselRef}
            activeLanguage={activeLanguage}
            showScrollIndicator={showScrollIndicator}
            theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
          >
            <CategoriesCarousel activeLanguage={activeLanguage}>
              {categories
                .sort((a, b) => (b.priority || 0) - (a.priority || 0))
                .map((category) => (
                  <CategoryCarouselItem
                    key={category.id}
                    category={category}
                    activeLanguage={activeLanguage}
                    onExploreClick={onExploreClick}
                    logoURL={restaurant?.logoURL 
                      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
                      : null}
                  />
                ))}
            </CategoriesCarousel>
            {showScrollIndicator && (
              <ScrollHint 
                activeLanguage={activeLanguage}
                theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
              >
                {activeLanguage === "en" ? "Scroll →" : "اسحب ←"}
              </ScrollHint>
            )}
          </CategoriesCarouselContainer>
          
          {/* Sliding Button Below Categories */}
          <CategoriesLink 
            onClick={swipeProgress >= 0.6 ? () => onExploreClick() : undefined}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            activeLanguage={activeLanguage}
            swipeProgress={swipeProgress}
            theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
          >
            <CTAText activeLanguage={activeLanguage} swipeProgress={swipeProgress}>
              {exploreMenuText}
            </CTAText>
            <ArrowButton
              activeLanguage={activeLanguage}
              swipeProgress={swipeProgress}
              theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
            >
              {activeLanguage === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
            </ArrowButton>
          </CategoriesLink>
        </TopCategoriesSection>
      )}

      {/* Location Cards Section */}
      {branches.length > 0 && (
        <LocationCardsSection id="branches-section">
          <SectionTitle activeLanguage={activeLanguage}>
            {branchesTitle}
          </SectionTitle>
          {branches.map((branch) => (
            <LocationCard key={branch.id} activeLanguage={activeLanguage}>
              <LocationName activeLanguage={activeLanguage}>
                {branch.name}
              </LocationName>
              <LocationIconsContainer activeLanguage={activeLanguage}>
                {branch.phone_number && (
                  <LocationIconButton
                    onClick={() => handleIconClick(branch, 'phone')}
                    phone
                    activeLanguage={activeLanguage}
                  >
                    <FaPhone />
                  </LocationIconButton>
                )}
                {branch.whatsapp_number && (
                  <LocationIconButton
                    onClick={() => handleIconClick(branch, 'whatsapp')}
                    whatsapp
                    activeLanguage={activeLanguage}
                  >
                    <FaWhatsapp />
                  </LocationIconButton>
                )}
                {(branch.location || branch.mapLink) && (
                  <LocationIconButton
                    onClick={() => handleIconClick(branch, 'location')}
                    location
                    activeLanguage={activeLanguage}
                  >
                    <IoLocationOutline />
                  </LocationIconButton>
                )}
              </LocationIconsContainer>
            </LocationCard>
          ))}
        </LocationCardsSection>
      )}

      {/* Social Media Section */}
      {socialMedia.length > 0 && (
        <SocialMediaSection id="social-media-section">
          <SectionTitle activeLanguage={activeLanguage}>
            {socialTitle}
          </SectionTitle>
          <SocialMediaGrid>
            {socialMedia.map((social, index) => {
              const platform = social.platform || social.name || "";
              const link = social.link || social.url || "";
              const href = link.startsWith("http") ? link : `https://${link}`;
              
              return (
                <SocialLink
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  platform={platform}
                >
                  <SocialIcon platform={platform}>
                    {getSocialIcon(platform)}
                  </SocialIcon>
                </SocialLink>
              );
            })}
          </SocialMediaGrid>
        </SocialMediaSection>
      )}

      {/* Branch Details Popup */}
      {selectedBranch && popupType && (
        <BranchPopup>
          <BranchPopupOverlay onClick={closePopup} />
          <BranchPopupContent activeLanguage={activeLanguage}>
            <BranchPopupClose onClick={closePopup} activeLanguage={activeLanguage}>×</BranchPopupClose>
            <BranchPopupTitle activeLanguage={activeLanguage}>
              {selectedBranch.name}
            </BranchPopupTitle>
            
            <BranchPopupDetails activeLanguage={activeLanguage}>
              {popupType === 'phone' && selectedBranch.phone_number && (
                <BranchPopupInfo activeLanguage={activeLanguage}>
                  <BranchPopupText activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Phone Number" : "رقم الهاتف"}
                  </BranchPopupText>
                  <BranchPopupLink 
                    href={`tel:${formatPhone(selectedBranch.phone_number)}`}
                    activeLanguage={activeLanguage}
                  >
                    {selectedBranch.phone_number}
                  </BranchPopupLink>
                </BranchPopupInfo>
              )}
              
              {popupType === 'whatsapp' && selectedBranch.whatsapp_number && (
                <BranchPopupInfo activeLanguage={activeLanguage}>
                  <BranchPopupText activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "WhatsApp Number" : "رقم واتساب"}
                  </BranchPopupText>
                  <BranchPopupLink 
                    href={`https://wa.me/${formatPhone(selectedBranch.whatsapp_number)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    activeLanguage={activeLanguage}
                    whatsapp
                  >
                    {selectedBranch.whatsapp_number}
                  </BranchPopupLink>
                </BranchPopupInfo>
              )}
              
              {popupType === 'location' && (
                <>
                  
                  {selectedBranch.location && (
                    <BranchPopupInfo activeLanguage={activeLanguage}>
                      <BranchPopupText activeLanguage={activeLanguage}>
                        {activeLanguage === "en" ? "Location" : "الموقع"}
                      </BranchPopupText>
                      <BranchPopupText activeLanguage={activeLanguage} location>
                        {selectedBranch.location}
                      </BranchPopupText>
                    </BranchPopupInfo>
                  )}
                  
                  {selectedBranch.mapLink && (
                    <BranchPopupMapButton 
                      href={`https://${selectedBranch.mapLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      activeLanguage={activeLanguage}
                    >
                      {viewOnMapText}
                    </BranchPopupMapButton>
                  )}
                </>
              )}
            </BranchPopupDetails>
          </BranchPopupContent>
        </BranchPopup>
      )}

      {/* Footer */}
      <Footer activeLanguage={activeLanguage}>
        <Copyright activeLanguage={activeLanguage}>
          {copyrightText}
        </Copyright>
      </Footer>
    </Container>
  );
}
