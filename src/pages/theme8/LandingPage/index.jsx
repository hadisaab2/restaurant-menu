import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import NavigationBar from "../../theme3/NavigationBar";
import BottomTabBar from "../../theme3/BottomTabBar";
import { BlurOverlay } from "../styles";
import {
  Container,
  SliderSection,
  SliderImage,
  SliderDots,
  SliderDot,
  SectionTitle,
  CategoryGrid,
  CategoryCard,
  CategoryIcon,
  CategoryIconFallback,
  CategoryName,
  PoweredBy,
} from "./styles";

const GCS_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function LandingPage({
  restaurant,
  restaurantName,
  categories,
  sliderImages,
  activeLanguage,
  showPopup,
  customerName,
  onCategorySelect,
  onSidebarOpen,
  onCartClick,
  onBranchesClick,
  onFeedbackClick,
  popupHandler,
  setshowSidebar,
  showSidebar,
}) {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlider =
    (restaurant?.show_slider_image === true ||
      restaurant?.show_slider_image === 1 ||
      restaurant?.show_slider_image === "1") &&
    sliderImages?.length > 0;

  // Auto-rotate slider
  useEffect(() => {
    if (!showSlider || sliderImages.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [showSlider, sliderImages?.length]);

  const toggleLang = () => {
    const next = activeLanguage === "en" ? "ar" : "en";
    dispatch(changelanuage({ restaurantName, activeLanguage: next }));
  };

  const logoUrl = restaurant?.logoURL
    ? restaurant.logoURL.startsWith("http")
      ? restaurant.logoURL
      : GCS_BASE + restaurant.logoURL
    : null;

  let features = {};
  try {
    features = JSON.parse(restaurant?.features || "{}");
  } catch (_) {
    features = {};
  }

  const isRtl = activeLanguage === "ar";

  const handleClickOutside = () => {
    if (showPopup != null) {
      popupHandler(null);
    }
  };

  return (
    <Container style={{ direction: isRtl ? "rtl" : "ltr" }} onClick={handleClickOutside}>
      <BlurOverlay showPopup={showPopup} />
      {/* Navigation Bar (same as Theme2) */}
      <NavigationBar
        onProductsClick={() => {}}
        onBranchesClick={onBranchesClick}
        onContactFormClick={() => popupHandler?.("contactForm")}
        onFeedbackClick={onFeedbackClick}
        onAboutClick={() => popupHandler?.("about")}
        onOrderClick={onCartClick}
        onHomeClick={undefined}
        onCategoryClick={(id) => onCategorySelect(id)}
        onContactClick={() => popupHandler?.("contactForm")}
        categories={categories}
        activeCategory={null}
        setshowSidebar={setshowSidebar}
        showSidebar={showSidebar}
        popupHandler={popupHandler}
        isProductDetailsOpen={false}
      />

      {/* Slider */}
      {showSlider && (
        <SliderSection>
          <SliderImage
            style={{
              backgroundImage: `url(${GCS_BASE}${sliderImages[currentSlide]?.url})`,
            }}
          />
          {sliderImages.length > 1 && (
            <SliderDots>
              {sliderImages.map((_, i) => (
                <SliderDot
                  key={i}
                  $active={i === currentSlide}
                  onClick={() => setCurrentSlide(i)}
                />
              ))}
            </SliderDots>
          )}
        </SliderSection>
      )}

      {/* Categories */}
      <SectionTitle $rtl={isRtl}>
        {isRtl ? "الأقسام" : "Categories"}
      </SectionTitle>

      <CategoryGrid $cols={features?.landing_columns || 3}>
        {categories
          .filter((c) => !c.isAllItems)
          .map((cat) => {
            const name =
              isRtl && cat.ar_category
                ? cat.ar_category
                : cat.en_category || cat.ar_category || "Category";
            const iconUrl = cat.image_url ? GCS_BASE + cat.image_url : null;

            return (
              <CategoryCard key={cat.id} onClick={() => onCategorySelect(cat.id)}>
                {iconUrl ? (
                  <CategoryIcon>
                    <img
                      src={iconUrl}
                      alt={name}
                      onError={(e) => { e.target.style.display = "none"; }}
                    />
                  </CategoryIcon>
                ) : (
                  <CategoryIconFallback>
                    {name.charAt(0).toUpperCase()}
                  </CategoryIconFallback>
                )}
                <CategoryName>{name}</CategoryName>
              </CategoryCard>
            );
          })}
      </CategoryGrid>

      {/* Bottom Tab Bar */}
      <BottomTabBar
        hideHome={false}
        hideCategories={true}
        activeView="home"
        showPopup={showPopup}
        onHomeClick={() => {}}
        onCategoriesClick={() => {}}
        onCartClick={onCartClick}
        onFeedbackClick={onFeedbackClick}
        onBranchesClick={onBranchesClick}
        restaurantName={restaurantName}
        branches={restaurant?.branches}
      />
    </Container>
  );
}
