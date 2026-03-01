import React, { useState, useEffect, useRef } from "react";
import {
  Container,
  HeroSection,
  RestaurantLogo,
  ValueCardsSectionWrap,
  ValueCardsContainer,
  ValueCardsHeader,
  ValueCardsLabel,
  ValueCardsTitle,
  ValueCardsGrid,
  ValueCard,
  ValueCardIconWrap,
  ValueCardContent,
  ValueCardHeading,
  ValueCardDescription,
  StatsSectionWrap,
  StatsSectionContainer,
  StatsSectionCard,
  StatsSectionInner,
  StatsSectionTitle,
  StatsSectionSubtitle,
  StatsSectionGrid,
  StatsStatBox,
  StatsStatValue,
  StatsStatLabel,
  CategoriesSectionWrap,
  CategoriesSectionContainer,
  CategoriesSectionHeader,
  CategoriesSectionLabel,
  CategoriesSectionTitle,
  CategoriesPillsWrap,
  CategoryPill,
  CategoryPillIcon,
  CategoryPillName,
  CategoriesBrowseAllWrap,
  BrowseAllButton,
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
  HowItWorksWrap,
  HowItWorksContainer,
  HowItWorksHeader,
  HowItWorksLabel,
  HowItWorksTitle,
  HowItWorksGrid,
  HowItWorksStep,
  HowItWorksStepIconWrap,
  HowItWorksStepBadge,
  HowItWorksStepTitle,
  HowItWorksStepDesc,
  FooterWrap,
  FooterContainer,
  FooterGrid,
  FooterBrand,
  FooterLogo,
  FooterLogoImg,
  FooterLogoAccent,
  FooterTagline,
  FooterSocialWrap,
  FooterSocialLink,
  FooterCol,
  FooterBranchesCol,
  FooterBranchBlock,
  FooterBranchName,
  FooterColTitle,
  FooterLink,
  FooterContactItem,
  FooterContactIcon,
  FooterHoursText,
  FooterDivider,
  FooterCopyright,
  WelcomeSection,
  WelcomeText,
  WelcomeLogo,
  FeaturedProductsSection,
  FeaturedProductsGrid,
  ViewAllButton,
} from "./styles";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaGlobe, FaTiktok, FaChevronRight, FaChevronLeft, FaThLarge, FaEnvelope, FaMapMarkerAlt, FaSearch, FaShoppingCart, FaTruck, FaThumbsUp } from "react-icons/fa";
import HeroBanner from "./HeroBanner";
import { getBadgeIconComponent } from "../../../constants/badgeIconTypes";
import { useGetFeaturedProducts } from "../../../apis/products/getFeaturedProducts";
import Product from "../products/product";

// Category pill for theme4 (new 37 style): icon + name, rounded pill
const CategoryPillItem = ({ category, activeLanguage, onExploreClick, logoURL }) => {
  const [imageError, setImageError] = useState(false);
  const categoryName = activeLanguage === "en" ? category.en_category : category.ar_category;
  const categoryImageUrl = category.image_url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
    : null;
  const showImage = categoryImageUrl && !imageError;

  return (
    <CategoryPill
      type="button"
      onClick={() => onExploreClick(category.id)}
      $activeLanguage={activeLanguage}
    >
      <CategoryPillIcon>
        {showImage ? (
          <img
            src={categoryImageUrl}
            alt=""
            onError={() => setImageError(true)}
          />
        ) : (
          <FaThLarge size={20} />
        )}
      </CategoryPillIcon>
      <CategoryPillName>{categoryName}</CategoryPillName>
    </CategoryPill>
  );
};

// Helpers for count-up: only animate plain numbers (e.g. product count), not "24h" or "100%"
function parseStatNumber(val) {
  if (val == null || val === "") return null;
  const s = String(val).trim();
  if (!/^\d+$/.test(s)) return null; // only whole numbers
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}
function isNumericStat(val) {
  return parseStatNumber(val) !== null;
}

// Round for display and append "+" (e.g. 570 → 600+, 520 → 500+)
function roundAndSuffix(n) {
  if (n == null || !Number.isFinite(n)) return "—";
  const num = Number(n);
  const rounded =
    num >= 100 ? Math.round(num / 100) * 100 : num >= 10 ? Math.round(num / 10) * 10 : Math.round(num);
  return `${rounded}+`;
}

const DURATION_MS = 1400;
const easeOutExpo = (t) => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t));

function StatsSectionWithCountUp({
  statItems,
  statsSection,
  activeLanguage,
  StatsSectionWrap,
  StatsSectionContainer,
  StatsSectionCard,
  StatsSectionInner,
  StatsSectionTitle,
  StatsSectionSubtitle,
  StatsSectionGrid,
  StatsStatBox,
  StatsStatValue,
  StatsStatLabel,
}) {
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [displayValues, setDisplayValues] = useState(() =>
    (statItems || []).map((item) => (isNumericStat(item.value) ? 0 : (item.value ?? "—")))
  );

  useEffect(() => {
    if (!statItems?.length) return;
    setDisplayValues((prev) => {
      if (prev.length === statItems.length) return prev;
      return statItems.map((item) => (isNumericStat(item.value) ? 0 : (item.value ?? "—")));
    });
  }, [statItems]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el || !statItems?.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry?.isIntersecting && !hasAnimated) setHasAnimated(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [statItems?.length, hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || !statItems?.length) return;
    const targets = statItems.map((item) => parseStatNumber(item.value));
    const startTime = performance.now();
    let rafId;
    const tick = (now) => {
      const elapsed = now - startTime;
      const t = Math.min(elapsed / DURATION_MS, 1);
      const eased = easeOutExpo(t);
      setDisplayValues(
        statItems.map((item, i) => {
          const target = targets[i];
          if (target == null) return item.value ?? "—";
          const current = Math.round(target * eased);
          return current;
        })
      );
      if (t < 1) rafId = requestAnimationFrame(tick);
    };
    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, statItems]);

  return (
    <StatsSectionWrap ref={sectionRef} $activeLanguage={activeLanguage}>
      <StatsSectionContainer>
        <StatsSectionCard>
          <StatsSectionInner>
            {(statsSection?.en_title || statsSection?.ar_title) && (
              <>
                <StatsSectionTitle>
                  {activeLanguage === "en"
                    ? (statsSection?.en_title || statsSection?.ar_title || "Trusted by owners")
                    : (statsSection?.ar_title || statsSection?.en_title || "موثوق من العملاء")}
                </StatsSectionTitle>
                {(statsSection?.en_subtitle || statsSection?.ar_subtitle) && (
                  <StatsSectionSubtitle>
                    {activeLanguage === "en"
                      ? (statsSection?.en_subtitle || statsSection?.ar_subtitle)
                      : (statsSection?.ar_subtitle || statsSection?.en_subtitle)}
                  </StatsSectionSubtitle>
                )}
              </>
            )}
            <StatsSectionGrid>
              {(statItems || []).map((item, idx) => {
                const rawDisplay = displayValues[idx] ?? item.value ?? "—";
                const isProductsCount = item.value_type === "products_count";
                const display = isProductsCount && typeof rawDisplay === "number"
                  ? roundAndSuffix(rawDisplay)
                  : rawDisplay;
                return (
                <StatsStatBox key={item.id || idx}>
                  <StatsStatValue>
                    {display}
                  </StatsStatValue>
                  <StatsStatLabel>
                    {activeLanguage === "ar" ? (item.ar_label || item.en_label) : (item.en_label || item.ar_label) || "—"}
                  </StatsStatLabel>
                </StatsStatBox>
              );
              })}
            </StatsSectionGrid>
          </StatsSectionInner>
        </StatsSectionCard>
      </StatsSectionContainer>
    </StatsSectionWrap>
  );
}

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
      {/* Hero Section (new 37 style) - replaces slider; displays slider image as background */}
      {hasSlider && sliderImages.length > 0 && (
        <>
          <HeroBanner
            images={sliderImages}
            activeLanguage={activeLanguage}
            onShopNow={() => onExploreClick()}
            headline={
              activeLanguage === "en"
                ? (restaurant.en_slogan || restaurant.ar_slogan || "")
                : (restaurant.ar_slogan || restaurant.en_slogan || "")
            }
            subtext={
              activeLanguage === "en"
                ? (restaurant.en_slogan_subtext || restaurant.ar_slogan_subtext || "")
                : (restaurant.ar_slogan_subtext || restaurant.en_slogan_subtext || "")
            }
            badges={restaurant.badges || []}
          />
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

      {/* Value Cards Section ("Why Reflex" / "Food your pets will love") - before categories */}
      {restaurant?.valueCards?.length > 0 && (
        <ValueCardsSectionWrap $activeLanguage={activeLanguage}>
          <ValueCardsContainer>
            <ValueCardsHeader>
              <ValueCardsLabel>
                {activeLanguage === "en"
                  ? (restaurant.valueCardSection?.en_section_label || "Why Us")
                  : (restaurant.valueCardSection?.ar_section_label || "لماذا نحن")}
              </ValueCardsLabel>
            </ValueCardsHeader>
            <ValueCardsGrid>
              {restaurant.valueCards.map((card) => {
                const IconComponent = getBadgeIconComponent(card.icon_type);
                const title = activeLanguage === "ar" ? (card.ar_title || card.en_title) : (card.en_title || card.ar_title);
                const desc = activeLanguage === "ar" ? (card.ar_description || card.en_description) : (card.en_description || card.ar_description);
                return (
                  <ValueCard key={card.id} $activeLanguage={activeLanguage}>
                    <ValueCardIconWrap>
                      <IconComponent size={24} />
                    </ValueCardIconWrap>
                    <ValueCardContent>
                      <ValueCardHeading>{title || ""}</ValueCardHeading>
                      <ValueCardDescription>{desc || ""}</ValueCardDescription>
                    </ValueCardContent>
                  </ValueCard>
                );
              })}
            </ValueCardsGrid>
          </ValueCardsContainer>
        </ValueCardsSectionWrap>
      )}

      {/* Categories Section - new 37 style: centered pills + Browse All */}
      {categories && categories.length > 0 && (
        <CategoriesSectionWrap $activeLanguage={activeLanguage}>
          <CategoriesSectionContainer>
            <CategoriesSectionHeader>
              <CategoriesSectionLabel>
                {activeLanguage === "en" ? "Categories" : "الفئات"}
              </CategoriesSectionLabel>
            </CategoriesSectionHeader>
            <CategoriesPillsWrap>
              {categories
                .sort((a, b) => (b.priority || 0) - (a.priority || 0))
                .slice(0, 6)
                .map((category) => (
                  <CategoryPillItem
                    key={category.id}
                    category={category}
                    activeLanguage={activeLanguage}
                    onExploreClick={onExploreClick}
                    logoURL={restaurant?.logoURL
                      ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
                      : null}
                  />
                ))}
            </CategoriesPillsWrap>
            <CategoriesBrowseAllWrap>
              <BrowseAllButton
                type="button"
                onClick={() => onExploreClick()}
                $activeLanguage={activeLanguage}
              >
                {activeLanguage === "en" ? "Browse All" : "عرض الكل"}
                <FaChevronRight size={16} style={activeLanguage === "ar" ? { transform: "rotate(180deg)" } : undefined} />
              </BrowseAllButton>
            </CategoriesBrowseAllWrap>
          </CategoriesSectionContainer>
        </CategoriesSectionWrap>
      )}

      {/* Top Products Section (same label style as Categories) */}
      {featuredProducts && featuredProducts.length > 0 && (
        <FeaturedProductsSection activeLanguage={activeLanguage}>
          <CategoriesSectionHeader>
            <CategoriesSectionLabel>
              {activeLanguage === "en" ? "Top Products" : "أفضل المنتجات"}
            </CategoriesSectionLabel>
          </CategoriesSectionHeader>
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
          <ViewAllButton
            onClick={() => onExploreClick()}
            activeLanguage={activeLanguage}
            theme={restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {}}
          >
            {activeLanguage === "en" ? "View All Products" : "عرض جميع المنتجات"}
            {activeLanguage === "ar" ? <FaChevronLeft /> : <FaChevronRight />}
          </ViewAllButton>
        </FeaturedProductsSection>
      )}

      {/* Key stats / Trust stats section (theme4) – below Top Products, count-up on first scroll */}
      {restaurant?.statItems?.length > 0 && (
        <StatsSectionWithCountUp
          statItems={restaurant.statItems}
          statsSection={restaurant?.statsSection}
          activeLanguage={activeLanguage}
          StatsSectionWrap={StatsSectionWrap}
          StatsSectionContainer={StatsSectionContainer}
          StatsSectionCard={StatsSectionCard}
          StatsSectionInner={StatsSectionInner}
          StatsSectionTitle={StatsSectionTitle}
          StatsSectionSubtitle={StatsSectionSubtitle}
          StatsSectionGrid={StatsSectionGrid}
          StatsStatBox={StatsStatBox}
          StatsStatValue={StatsStatValue}
          StatsStatLabel={StatsStatLabel}
        />
      )}

      {/* Location Cards Section */}

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

      {/* How it works – generic 4 steps (above footer) */}
      <HowItWorksWrap $activeLanguage={activeLanguage}>
        <HowItWorksContainer>
          <HowItWorksHeader>
            <HowItWorksLabel>
              {activeLanguage === "en" ? "How It Works" : "كيف يعمل"}
            </HowItWorksLabel>
            <HowItWorksTitle>
              {activeLanguage === "en" ? "4 simple steps" : "٤ خطوات بسيطة"}
            </HowItWorksTitle>
          </HowItWorksHeader>
          <HowItWorksGrid>
            <HowItWorksStep>
              <HowItWorksStepIconWrap>
                <FaSearch size={22} />
                <HowItWorksStepBadge>01</HowItWorksStepBadge>
              </HowItWorksStepIconWrap>
              <HowItWorksStepTitle>{activeLanguage === "en" ? "Browse" : "تصفح"}</HowItWorksStepTitle>
              <HowItWorksStepDesc>{activeLanguage === "en" ? "Explore our menu" : "استكشف قائمتنا"}</HowItWorksStepDesc>
            </HowItWorksStep>
            <HowItWorksStep>
              <HowItWorksStepIconWrap>
                <FaShoppingCart size={22} />
                <HowItWorksStepBadge>02</HowItWorksStepBadge>
              </HowItWorksStepIconWrap>
              <HowItWorksStepTitle>{activeLanguage === "en" ? "Order" : "اطلب"}</HowItWorksStepTitle>
              <HowItWorksStepDesc>{activeLanguage === "en" ? "Add items to your cart" : "أضف المنتجات إلى السلة"}</HowItWorksStepDesc>
            </HowItWorksStep>
            <HowItWorksStep>
              <HowItWorksStepIconWrap>
                <FaTruck size={22} />
                <HowItWorksStepBadge>03</HowItWorksStepBadge>
              </HowItWorksStepIconWrap>
              <HowItWorksStepTitle>{activeLanguage === "en" ? "Deliver" : "توصيل"}</HowItWorksStepTitle>
              <HowItWorksStepDesc>{activeLanguage === "en" ? "We deliver to you" : "نوصل طلبك إليك"}</HowItWorksStepDesc>
            </HowItWorksStep>
            <HowItWorksStep>
              <HowItWorksStepIconWrap>
                <FaThumbsUp size={22} />
                <HowItWorksStepBadge>04</HowItWorksStepBadge>
              </HowItWorksStepIconWrap>
              <HowItWorksStepTitle>{activeLanguage === "en" ? "Enjoy" : "استمتع"}</HowItWorksStepTitle>
              <HowItWorksStepDesc>{activeLanguage === "en" ? "Enjoy your order" : "استمتع بطلبك"}</HowItWorksStepDesc>
            </HowItWorksStep>
          </HowItWorksGrid>
        </HowItWorksContainer>
      </HowItWorksWrap>

      {/* Footer - dark multi-column */}
      <FooterWrap $activeLanguage={activeLanguage}>
        <FooterContainer>
          <FooterGrid>
            <FooterBrand>
              {restaurant?.logoURL ? (
                <FooterLogoImg
                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
                  alt={restaurant?.name || restaurantName}
                />
              ) : (
                <FooterLogo>
                  {(restaurant?.name || restaurantName).length > 0 ? (
                    <>
                      {(restaurant?.name || restaurantName).slice(0, 1)}
                      <FooterLogoAccent>{(restaurant?.name || restaurantName).slice(1)}</FooterLogoAccent>
                    </>
                  ) : (
                    <FooterLogoAccent>{restaurantName}</FooterLogoAccent>
                  )}
                </FooterLogo>
              )}
              <FooterTagline>
                {activeLanguage === "en"
                  ? (restaurant?.en_slogan || restaurant?.ar_slogan || "Quality food, delivered.")
                  : (restaurant?.ar_slogan || restaurant?.en_slogan || "طعام ذو جودة، نوصله إليك.")}
              </FooterTagline>
            </FooterBrand>
            <FooterCol>
              <FooterColTitle>{activeLanguage === "en" ? "Shop" : "تسوق"}</FooterColTitle>
              <FooterLink as="button" type="button" onClick={() => onExploreClick()}>
                {activeLanguage === "en" ? "All Products" : "جميع المنتجات"}
              </FooterLink>
              <FooterLink as="button" type="button" onClick={() => onExploreClick()}>
                {activeLanguage === "en" ? "Browse Categories" : "تصفح الفئات"}
              </FooterLink>
            </FooterCol>
            <FooterCol>
              <FooterColTitle>{activeLanguage === "en" ? "Branches" : "الفروع"}</FooterColTitle>
              {branches.length > 0 ? (
                <FooterBranchesCol>
                  {branches.map((branch) => (
                    <FooterBranchBlock key={branch.id || branch.name}>
                      <FooterBranchName>{branch.name || (activeLanguage === "en" ? "Branch" : "فرع")}</FooterBranchName>
                      {branch.phone_number && (
                        <FooterContactItem>
                          <FooterContactIcon><FaPhone size={14} /></FooterContactIcon>
                          <a href={`tel:${formatPhone(branch.phone_number)}`}>{branch.phone_number}</a>
                        </FooterContactItem>
                      )}
                      {branch.whatsapp_number && (
                        <FooterContactItem>
                          <FooterContactIcon><FaWhatsapp size={14} /></FooterContactIcon>
                          <a href={`https://wa.me/${formatPhone(branch.whatsapp_number)}`} target="_blank" rel="noopener noreferrer">{branch.whatsapp_number}</a>
                        </FooterContactItem>
                      )}
                      {(branch.location || branch.address) && (
                        <FooterContactItem>
                          <FooterContactIcon><FaMapMarkerAlt size={14} /></FooterContactIcon>
                          <span>{branch.location || branch.address}</span>
                        </FooterContactItem>
                      )}
                      {(branch.mapLink || branch.map_link) && (
                        <FooterContactItem>
                          <FooterContactIcon><FaMapMarkerAlt size={14} /></FooterContactIcon>
                          <a href={((branch.mapLink || branch.map_link) || "").startsWith("http") ? (branch.mapLink || branch.map_link) : `https://${branch.mapLink || branch.map_link}`} target="_blank" rel="noopener noreferrer">
                            {activeLanguage === "en" ? "View on map" : "عرض على الخريطة"}
                          </a>
                        </FooterContactItem>
                      )}
                    </FooterBranchBlock>
                  ))}
                </FooterBranchesCol>
              ) : (
                <FooterContactItem>
                  <FooterContactIcon><FaPhone size={14} /></FooterContactIcon>
                  <span>{activeLanguage === "en" ? "Contact us" : "تواصل معنا"}</span>
                </FooterContactItem>
              )}
            </FooterCol>
            <FooterCol>
              <FooterColTitle>{activeLanguage === "en" ? "Working Hours" : "أوقات العمل"}</FooterColTitle>
              {restaurant?.workingHours?.length > 0 ? (
                restaurant.workingHours.map((row, idx) => {
                  const dayLabels = { monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu", friday: "Fri", saturday: "Sat", sunday: "Sun" };
                  const daysStr = row.days
                    ? row.days.split(",").map((d) => dayLabels[d.trim().toLowerCase()] || d.trim()).join(", ")
                    : "";
                  const start = String(row.start_time || "").slice(0, 5);
                  const end = String(row.end_time || "").slice(0, 5);
                  return (
                    <FooterHoursText key={idx}>
                      {daysStr}: {start} – {end}
                    </FooterHoursText>
                  );
                })
              ) : (
                <>
                  <FooterHoursText>{activeLanguage === "en" ? "Mon – Fri: 9AM – 8PM" : "الإثنين – الجمعة: 9 ص – 8 م"}</FooterHoursText>
                  <FooterHoursText>{activeLanguage === "en" ? "Saturday: 9AM – 6PM" : "السبت: 9 ص – 6 م"}</FooterHoursText>
                  <FooterHoursText>{activeLanguage === "en" ? "Sunday: 10AM – 4PM" : "الأحد: 10 ص – 4 م"}</FooterHoursText>
                </>
              )}
            </FooterCol>
            <FooterCol>
              <FooterColTitle>{activeLanguage === "en" ? "Follow us" : "تابعنا"}</FooterColTitle>
              {socialMedia.length > 0 ? (
                <FooterSocialWrap>
                  {socialMedia.slice(0, 6).map((social, index) => {
                    const link = social.link || social.url || "";
                    const href = link.startsWith("http") ? link : `https://${link}`;
                    return (
                      <FooterSocialLink key={index} href={href} target="_blank" rel="noopener noreferrer">
                        {getSocialIcon(social.platform || social.name)}
                      </FooterSocialLink>
                    );
                  })}
                </FooterSocialWrap>
              ) : (
                <FooterHoursText style={{ opacity: 0.7 }}>{activeLanguage === "en" ? "No social links" : "لا توجد روابط"}</FooterHoursText>
              )}
            </FooterCol>
          </FooterGrid>
          <FooterDivider>
            <FooterCopyright>
              © {new Date().getFullYear()} Menugic. {activeLanguage === "en" ? "All rights reserved." : "جميع الحقوق محفوظة."}
            </FooterCopyright>
          </FooterDivider>
        </FooterContainer>
      </FooterWrap>
    </Container>
  );
}
