import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import { FaMapMarkerAlt, FaPhone, FaWhatsapp, FaTruck, FaStore, FaMapPin } from "react-icons/fa";
import { formatWhatsappNumber } from "../../../utilities/formatWhatsappNumber";
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
  SectionSubtitle,
  BranchGrid,
  BranchCard,
  BranchName,
  BranchLocation,
  BranchContact,
  BadgeRow,
  Badge,
  OrderButton,
  MapLink,
} from "./styles";

const GCS_BASE = "https://storage.googleapis.com/ecommerce-bucket-testing/";

export default function LandingPage({
  restaurant,
  restaurantName,
  activeLanguage,
  showPopup,
  sliderImages,
  onBranchSelect,
  onCartClick,
  onBranchesClick,
  onFeedbackClick,
  popupHandler,
  setshowSidebar,
  showSidebar,
}) {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);

  const branches = restaurant?.branches || [];
  const isRtl = activeLanguage === "ar";

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

  const handleClickOutside = () => {
    if (showPopup != null) popupHandler?.(null);
  };

  let features = {};
  try {
    features = typeof restaurant?.features === "string"
      ? JSON.parse(restaurant.features)
      : restaurant?.features || {};
  } catch { features = {}; }

  const logoUrl = restaurant?.logoURL
    ? restaurant.logoURL.startsWith("http")
      ? restaurant.logoURL
      : GCS_BASE + restaurant.logoURL
    : null;

  return (
    <Container style={{ direction: isRtl ? "rtl" : "ltr" }} onClick={handleClickOutside}>
      <BlurOverlay showPopup={showPopup} />

      {/* Navigation Bar */}
      <NavigationBar
        onProductsClick={() => {}}
        onBranchesClick={onBranchesClick}
        onContactFormClick={() => popupHandler?.("contactForm")}
        onFeedbackClick={onFeedbackClick}
        onAboutClick={() => popupHandler?.("about")}
        onOrderClick={onCartClick}
        onHomeClick={undefined}
        onCategoryClick={() => {}}
        onContactClick={() => popupHandler?.("contactForm")}
        categories={[]}
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

      {/* Branches Section */}
      <SectionTitle $rtl={isRtl}>
        {isRtl ? "فروعنا" : "Our Branches"}
      </SectionTitle>
      <SectionSubtitle $rtl={isRtl}>
        {isRtl ? "اختر الفرع الأقرب إليك للطلب" : "Select a branch near you to start ordering"}
      </SectionSubtitle>

      <BranchGrid>
        {branches.map((branch) => (
          <BranchCard key={branch.id}>
            <BranchName>
              <FaMapMarkerAlt size={14} />
              {branch.name}
            </BranchName>

            {branch.location && (
              <BranchLocation>
                <FaMapPin size={10} style={{ marginTop: 2, flexShrink: 0 }} />
                {branch.location}
              </BranchLocation>
            )}

            <BranchContact>
              {branch.phone_number && (
                <a href={`tel:${branch.phone_number}`}>
                  <FaPhone size={10} /> {branch.phone_number}
                </a>
              )}
              {branch.whatsapp_number && (
                <a
                  href={`https://wa.me/${formatWhatsappNumber(branch.whatsapp_number, restaurant?.country_code)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={11} /> {branch.whatsapp_number}
                </a>
              )}
            </BranchContact>

            <BadgeRow>
              <Badge $active={branch.has_delivery}>
                <FaTruck size={9} />
                {isRtl ? "توصيل" : "Delivery"}
              </Badge>
              <Badge $active={true}>
                <FaStore size={9} />
                {isRtl ? "استلام" : "Takeaway"}
              </Badge>
            </BadgeRow>

            <OrderButton onClick={() => onBranchSelect(branch)}>
              {isRtl ? "اطلب من هنا" : "Order From Here"}
            </OrderButton>

            {branch.mapLink && (
              <MapLink
                href={`https://${branch.mapLink.startsWith("http") ? "" : ""}${branch.mapLink}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMapMarkerAlt size={9} />
                {isRtl ? "عرض على الخريطة" : "View on Map"}
              </MapLink>
            )}
          </BranchCard>
        ))}
      </BranchGrid>

      {/* Bottom Tab Bar */}
      <BottomTabBar
        hideHome={false}
        hideCategories={true}
        activeView="home"
        showPopup={showPopup}
        onHomeClick={() => {}}
        onCartClick={onCartClick}
        onFeedbackClick={onFeedbackClick}
        onBranchesClick={onBranchesClick}
        restaurantName={restaurantName}
        branches={branches}
      />
    </Container>
  );
}
