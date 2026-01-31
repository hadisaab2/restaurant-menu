import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  HeroSection,
  RestaurantLogo,
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
  FeaturedProductsSection,
  FeaturedProductsGrid,
  ExploreButton,
  SloganText,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGlobe, FaTiktok, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Slider from "./Slider";
import { useGetFeaturedProducts } from "../../../apis/products/getFeaturedProducts";
import Product from "../products/product";

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

export default function HomePage({ onExploreClick, categories, setSearchParams, searchParams }) {
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
  const restaurantId = restaurant?.id;
  const { data: featuredProducts = [], isLoading: isLoadingFeatured } = useGetFeaturedProducts(restaurantId);
  
  // Categories will be shown in carousel, sorted by priority
  
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const categoriesCarouselRef = useRef(null);
  
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
  const businessType = restaurant?.business_type || "restaurant";
  const exploreMenuText = activeLanguage === "en" 
    ? (businessType === "restaurant" ? "Explore Menu" : "Explore Products")
    : (businessType === "restaurant" ? "استكشف القائمة" : "استكشف المنتجات");
  const copyrightText = activeLanguage === "en" 
    ? `© ${new Date().getFullYear()} Menugic. All rights reserved.`
    : `© ${new Date().getFullYear()} Menugic. جميع الحقوق محفوظة.`;


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
        <>
          <Slider images={sliderImages} activeLanguage={activeLanguage} />
          {restaurant?.en_slogan || restaurant?.ar_slogan ? (
            <SloganText activeLanguage={activeLanguage}>
              {activeLanguage === "en" 
                ? (restaurant.en_slogan || restaurant.ar_slogan)
                : (restaurant.ar_slogan || restaurant.en_slogan)}
            </SloganText>
          ) : null}
        </>
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
          
          {/* Explore Menu Button Below Categories */}
          <ExploreButton
            onClick={() => onExploreClick()}
            activeLanguage={activeLanguage}
            theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
          >
            {exploreMenuText}
            {activeLanguage === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </ExploreButton>
        </TopCategoriesSection>
      )}

      {/* Featured Products Section */}
      {featuredProducts && featuredProducts.length > 0 && (
        <FeaturedProductsSection activeLanguage={activeLanguage}>
          <FeaturedProductsGrid>
            {featuredProducts.map((product, index) => {
              return (
                <Product
                  key={product.id}
                  plate={product}
                  index={index}
                  activePlate={null}
                  setactivePlate={() => {}}
                  showPopup={null}
                  setSearchParams={setSearchParams}
                  searchParams={searchParams}
                  activeCategoryId={product.category_id}
                  categories={categories}
                  disableDetails={false}
                  $isFeatured={true}
                />
              );
            })}
          </FeaturedProductsGrid>
        </FeaturedProductsSection>
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
