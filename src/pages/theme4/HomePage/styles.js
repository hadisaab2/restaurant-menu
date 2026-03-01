import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  animation: ${fadeIn} 0.5s ease-in;
  position: relative;
  display: flex;
  flex-direction: column;
`;

// Hero Section
export const HeroSection = styled.section`
  width: 100%;
  padding: 32px 48px 0px 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  background: ${props => props.theme.heroSectionBackgroundColor || props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 44px 5%;
  }
`;

export const RestaurantLogo = styled.img`
  max-width: 430px;
  max-height: 320px;
  object-fit: contain;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    max-width: 520px;
    max-height: 390px;
    margin-bottom: 32px;
  }
`;

export const CategoriesCarouselContainer = styled.div`
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 16px 0px;
  margin-bottom: 24px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  position: relative;
  background: ${props => props.theme?.homepageCategoriesBackgroundColor || "transparent"};
  
  /* Hide scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  
  /* Scrollable indicator gradient - right side for LTR, left side for RTL */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    ${props => props.activeLanguage === "ar" ? "left: 0;" : "right: 0;"}
    width: 60px;
    
    pointer-events: none;
    z-index: 1;
    opacity: ${props => props.showScrollIndicator ? 0.6 : 0};
    transition: opacity 0.3s ease;
  }
  
  /* Show indicator when content is scrollable and hovering */
  &:hover::after {
    opacity: ${props => props.showScrollIndicator ? 0.9 : 0};
  }
  
  @media (min-width: 768px) {
    padding: 24px 0px;
    margin-bottom: 32px;
    
    &::after {
      width: 70px;
    }
  }
`;

export const ScrollHint = styled.div`
  position: absolute;
  ${props => props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;"}
  top: 95%;
  transform: translateY(-50%);
  font-size: 12px;
  color: ${props => props.theme?.textColor || "#666"};
  opacity: 0.7;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
  animation: fadeInOut 2s ease-in-out infinite;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0.7;
    }
    50% {
      opacity: 0.4;
    }
  }
  
  @media (min-width: 768px) {
    ${props => props.activeLanguage === "ar" ? "left: 30px;" : "right: 30px;"}
    font-size: 13px;
  }
`;

export const CategoriesCarousel = styled.div`
  display: flex;
  gap: 0px;
  padding: 0;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  align-items: flex-start;
  width: max-content;
  
  @media (min-width: 768px) {
    gap: 15px;
  }
`;

export const CategoriesLink = styled.button`
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.theme.slidingButtonTextColor || "#ffffff"};
  background: ${props => props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff"};
  border: none;
  border-radius: 14px;
  padding: 0;
  cursor: ${props => props.swipeProgress >= 0.6 ? "pointer" : "default"};
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  box-shadow: 0 4px 16px ${props => {
    const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
    return bgColor ? `${bgColor}40` : "rgba(0, 123, 255, 0.4)";
  }};
  margin: 32px auto;
  overflow: hidden;
  user-select: none;
  display: block;
  
  &:hover {
    ${props => props.swipeProgress >= 0.6 ? `
      background: ${props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#0056b3"};
      transform: translateY(-2px);
      box-shadow: 0 6px 20px ${props => {
        const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
        return bgColor ? `${bgColor}50` : "rgba(0, 123, 255, 0.5)";
      }};
    ` : ""}
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 380px;
    height: 64px;
    font-size: 18px;
    margin: 32px auto;
  }
`;

export const CTAText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: ${props => props.activeLanguage === "ar" 
    ? "translate(calc(-50% - 30px), -50%)" 
    : "translate(-50%, -50%)"};
  transition: opacity 0.3s ease;
  opacity: ${props => 1 - props.swipeProgress};
  white-space: nowrap;
  z-index: 2;
  margin: 0px 20px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  color: ${props => props.theme.slidingButtonTextColor || "#ffffff"};
  
  @media (min-width: 768px) {
    transform: ${props => props.activeLanguage === "ar" 
      ? "translate(calc(-50% - 35px), -50%)" 
      : "translate(-50%, -50%)"};
  }
`;

export const ArrowButton = styled.div`
  position: absolute;
  ${props => {
    const maxWidth = 320; // max-width of CategoriesLink
    const buttonSize = 48;
    const startPos = 16;
    const endPos = maxWidth - buttonSize - 16;
    const currentPos = startPos + props.swipeProgress * (endPos - startPos);
    
    return props.activeLanguage === "ar" 
      ? `right: ${currentPos}px;`
      : `left: ${currentPos}px;`;
  }}
  top: 50%;
  transform: translateY(-50%);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #ffffff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  z-index: 3;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: rgba(255, 255, 255, 0.35);
    transform: translateY(-50%) scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    font-size: 22px;
    ${props => {
      const maxWidth = 420; // max-width of CategoriesLink on desktop
      const buttonSize = 56;
      const startPos = 20;
      const endPos = maxWidth - buttonSize - 20;
      const currentPos = startPos + props.swipeProgress * (endPos - startPos);
      
      return props.activeLanguage === "ar" 
        ? `right: ${currentPos}px;`
        : `left: ${currentPos}px;`;
    }}
  }
`;

// Language Navigator
export const LanguageNavigator = styled.div`
  position: fixed;
  top: 20px;
  ${props => props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;"}
  z-index: 1000;
  
  @media (min-width: 768px) {
    top: 30px;
    ${props => props.activeLanguage === "ar" ? "left: 30px;" : "right: 30px;"}
  }
`;

export const LanguageContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  border-radius: 10px;
  width: 60px;
  height: 25px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.languagebackground || "#f0f0f0"};
  opacity: 0.6;
  position: absolute;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
`;

export const Ball = styled.div`
  position: absolute;
  background-color: ${props => props.theme.languagebackground || "#f0f0f0"};
  left: ${props => props.activeLanguage === "en" ? "0px" : "32px"};
  transition: all ease-in-out 0.2s;
  height: 100%;
  width: 50%;
  z-index: 2;
  border-radius: 10px;
`;

export const Language = styled.div`
  z-index: 3;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  color: ${props => 
    props.activeLanguage === props.language 
      ? (props.theme.mainColor || "#007bff")
      : (props.theme.languageTextColor || "#333333")
  };
  transition: color 0.2s ease;
  user-select: none;
  
  &:hover {
    color: ${props => props.theme.mainColor || "#007bff"};
  }
`;

// Carousel Styles
export const CarouselSection = styled.section`
  width: 100%;
  position: relative;
  margin-bottom: 40px;
  
  @media (min-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  background: ${props => props.theme.mainColor || "#007bff"};
`;

export const CarouselWrapper = styled.div`
  display: flex;
  width: 100%;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
`;

export const CarouselItem = styled.div`
  min-width: 100%;
  width: 100%;
  flex-shrink: 0;
  opacity: ${props => props.active ? 1 : 0};
  transition: opacity 0.5s ease;
  display: ${props => props.active ? 'block' : 'none'};
`;

export const CarouselImage = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  display: block;
  
  @media (min-width: 768px) {
    height: 60vh;
  }
  
  @media (min-width: 1024px) {
    height: 70vh;
  }
`;

export const CarouselButton = styled.button`
  position: absolute;
  top: 50%;
  ${props => props.direction === "prev" 
    ? (props.activeLanguage === "ar" ? "right: 20px;" : "left: 20px;")
    : (props.activeLanguage === "ar" ? "left: 20px;" : "right: 20px;")
  }
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.9);
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
  color: ${props => props.theme.mainColor || "#007bff"};
  transition: all 0.3s ease;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: #ffffff;
    transform: translateY(-50%) scale(1.1);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  
  @media (min-width: 768px) {
    width: 56px;
    height: 56px;
    font-size: 28px;
    ${props => props.direction === "prev" 
      ? (props.activeLanguage === "ar" ? "right: 30px;" : "left: 30px;")
      : (props.activeLanguage === "ar" ? "left: 30px;" : "right: 30px;")
    }
  }
`;

export const CarouselDots = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  z-index: 10;
  
  @media (min-width: 768px) {
    bottom: 30px;
    gap: 12px;
  }
`;

export const Dot = styled.button`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background: ${props => props.active ? "#ffffff" : "rgba(255, 255, 255, 0.5)"};
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
  
  &:hover {
    background: ${props => props.active ? "#ffffff" : "rgba(255, 255, 255, 0.8)"};
    transform: scale(1.2);
  }
  
  @media (min-width: 768px) {
    width: 12px;
    height: 12px;
  }
`;

// Section Title
export const SectionTitle = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 24px 0;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

// Top Categories Section
export const TopCategoriesSection = styled.section`
  width: 100%;
  padding: 20px 0px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @media (min-width: 768px) {
    padding: 60px 5%;
  }
`;

export const TopCategoryItem = styled.div`
  min-width: 120px;
  width: 120px;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: flex-start;
  gap: 10px;
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
  }
  
  @media (min-width: 768px) {
    min-width: 160px;
    width: 160px;
    gap: 14px;
  }
`;

export const TopCategoryContent = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background: ${props => props.theme.BoxColor || "#ffffff"};
  border-radius: 20px;
  padding: 16px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
  position: relative;
  overflow: hidden;
  flex-direction: ${props => props.isEven 
    ? (props.activeLanguage === "ar" ? "row-reverse" : "row")
    : (props.activeLanguage === "ar" ? "row-reverse" : "row")
  };
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  width: 100%;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.isEven 
      ? (props.activeLanguage === "ar" ? "right: 0;" : "left: 0;")
      : (props.activeLanguage === "ar" ? "left: 0;" : "right: 0;")
    }
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${props => props.theme.mainColor || "#007bff"} 0%, ${props => props.theme.mainColor || "#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    padding: 22px 26px;
    gap: 26px;
  }
`;

export const TopCategoryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 2;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const TopCategoryName = styled.h3`
  font-size: 13px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0;
  line-height: 1.3;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  max-width: 90px;
  text-align: center;
  word-wrap: break-word;
  word-break: break-word;
  white-space: normal;
  
  @media (min-width: 768px) {
    font-size: 14px;
    max-width: 120px;
  }
`;

export const TopCategoryDescription = styled.p`
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.theme.textColor || "#666"};
  margin: 6px 0 0 0;
  line-height: 1.5;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 8px;
  }
`;

export const TopCategoryIcon = styled.img`
  width: 84px;
  height: 84px;
  border-radius: 16px;    
  padding: 8px;
  object-fit: contain;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border: 2px solid ${props => props.theme.mainColor || "#007bff"}20;
  transition: all 0.3s ease;
  z-index: 2;
  position: relative;
  
  ${TopCategoryItem}:hover & {
    transform: scale(1.05) rotate(${props => props.isEven ? "-5deg" : "5deg"});
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.mainColor || "#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: 120px;
    height: 120px;
    border-radius: 22px;
  }
`;

export const ShowAllButton = styled.button`
  width: 100%;
  max-width: 360px;
  margin: 0 auto;
  padding: 14px 28px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  background: ${props => props.theme.mainColor || "#007bff"};
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 16px ${props => props.theme.mainColor ? `${props.theme.mainColor}30` : "rgba(0, 123, 255, 0.3)"};
  display: block;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.theme.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.4)"};
    background: ${props => props.theme.mainColor || "#0056b3"};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    padding: 16px 36px;
    font-size: 16px;
    max-width: 440px;
  }
`;

// Theme4 value cards section ("Why Reflex" / "Food your pets will love")
export const ValueCardsSectionWrap = styled.section`
  width: 100%;
  padding: 40px 16px;
  background: ${(props) => props.theme?.valueCardsSectionBackgroundColor || props.theme?.homepageBackgroundColor || props.theme?.backgroundColor || "#ffffff"};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`;

export const ValueCardsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const ValueCardsHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const ValueCardsLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  margin: 0 0 12px 0;
`;

export const ValueCardsTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const ValueCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
`;

const ValueCardBase = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 16px;
  text-align: left;
  padding: 18px 16px;
  border-radius: 12px;
  background: ${(props) => props.theme?.valueCardBackgroundColor || props.theme?.backgroundColor || "#f8f9fa"};
  border-left: 4px solid ${(props) => props.theme?.mainColor || "#007bff"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  &:hover {
    background: ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.04)")};
    border-left-width: 6px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
  }
  @media (min-width: 768px) {
    padding: 20px 20px;
    gap: 18px;
  }
`;

export const ValueCard = ValueCardBase;

export const ValueCardIconWrap = styled.div`
  width: 48px;
  height: 48px;
  min-width: 48px;
  border-radius: 50%;
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  ${ValueCardBase}:hover & {
    transform: scale(1.08);
    box-shadow: 0 4px 12px ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.25)")};
  }
`;

export const ValueCardContent = styled.div`
  flex: 1;
  min-width: 0;
`;

export const ValueCardHeading = styled.h3`
  font-size: 1.0625rem;
  font-weight: 600;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0 0 6px 0;
`;

export const ValueCardDescription = styled.p`
  font-size: 13px;
  line-height: 1.5;
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#666")};
  margin: 0;
`;

// Key stats / Trust stats section (theme4: "Trusted by 5,000+ owners" style)
export const StatsSectionWrap = styled.section`
  width: 100%;
  padding: 40px 16px;
  background: ${(props) => props.theme?.featuredProductsSectionBackgroundColor || props.theme?.homepageBackgroundColor || props.theme?.backgroundColor || "#f8f9fa"};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`;

export const StatsSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const StatsSectionCard = styled.div`
  background: ${(props) => props.theme?.valueCardBackgroundColor || props.theme?.backgroundColor || "#ffffff"};
  border-radius: 24px;
  border: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}18` : "rgba(0, 123, 255, 0.1)")};
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 32px 24px;
  @media (min-width: 768px) {
    padding: 48px;
  }
`;

export const StatsSectionInner = styled.div`
  text-align: center;
`;

export const StatsSectionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0 0 6px 0;
  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StatsSectionSubtitle = styled.p`
  font-size: 14px;
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#666")};
  margin: 0 0 24px 0;
`;

export const StatsSectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin-top: 24px;
  @media (min-width: 768px) {
    gap: 16px;
    margin-top: 32px;
  }
`;

export const StatsStatBox = styled.div`
  padding: 16px;
  border-radius: 12px;
  background: ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.04)")};
`;

export const StatsStatValue = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const StatsStatLabel = styled.p`
  font-size: 11px;
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#666")};
  margin: 4px 0 0 0;
`;

// Theme4 categories section (new 37 style: centered pills + Browse All)
export const CategoriesSectionWrap = styled.section`
  width: 100%;
  padding: 40px 16px;
  background: ${(props) => props.theme?.categoriesSectionBackgroundColor || props.theme?.homepageBackgroundColor || (props.theme?.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.04)")};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 56px 16px;
  }
`;

export const CategoriesSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const CategoriesSectionHeader = styled.div`
  text-align: center;
  margin-bottom: 28px;
`;

export const CategoriesSectionLabel = styled.p`
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  margin: 0 0 12px 0;
`;

export const CategoriesSectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2.25rem;
  }
`;

export const CategoriesPillsWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  max-width: 672px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const CategoryPill = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 9999px;
  background: ${(props) => props.theme?.BoxColor || props.theme?.categoryUnActive || "#ffffff"};
  border: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.12)")};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-color: ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.2)")};
    transform: translateY(-2px);
  }
`;

export const CategoryPillIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.textColor ? `${props.theme.textColor}99` : "#666"};
  transition: color 0.3s ease;
  ${CategoryPill}:hover & {
    color: ${(props) => props.theme?.mainColor || "#007bff"};
  }
  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    border-radius: 4px;
  }
`;

export const CategoryPillName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
`;

export const CategoriesBrowseAllWrap = styled.div`
  text-align: center;
  margin-top: 48px;
`;

export const BrowseAllButton = styled.button`
  width: 55%;
  max-width: 280px;
  height: 48px;
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme?.slidingButtonTextColor || "#ffffff"};
  background: ${(props) => props.theme?.slidingButtonBackgroundColor || props.theme?.mainColor || "#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  font-family: inherit;
  box-shadow: 0 4px 16px ${(props) => {
    const bgColor = props.theme?.slidingButtonBackgroundColor || props.theme?.mainColor || "#007bff";
    return bgColor ? `${bgColor}40` : "rgba(0, 123, 255, 0.4)";
  }};
  &:hover {
    background: ${(props) => props.theme?.slidingButtonBackgroundColor || props.theme?.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${(props) => {
      const bgColor = props.theme?.slidingButtonBackgroundColor || props.theme?.mainColor || "#007bff";
      return bgColor ? `${bgColor}50` : "rgba(0, 123, 255, 0.5)";
    }};
  }
  &:active {
    transform: translateY(0);
  }
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
    margin: 24px auto 0;
  }
`;

// Location Cards Section
export const LocationCardsSection = styled.section`
  width: 100%;
  padding: 0px 20px 0px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: ${props => props.theme.locationsSectionBackgroundColor || props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 24px 5%;
  }
`;

export const LocationCard = styled.div`
  background: ${props => props.theme.hplocationBackgroundColor || props.theme.categoryUnActive || "#ffffff"};
  border-radius: 12px;
  padding: 8px 16px;
  margin-bottom: 10px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.activeLanguage === "ar" ? "right: 0;" : "left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${props => props.theme.mainColor || "#007bff"} 0%, ${props => props.theme.mainColor || "#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 123, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 14px 20px;
    margin-bottom: 12px;
  }
`;

// Popup Styles
export const BranchPopup = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const BranchPopupOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
`;

export const BranchPopupContent = styled.div`
  position: relative;
  background: #ffffff;
  border-radius: 20px;
  padding: 32px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  z-index: 1001;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  animation: ${fadeIn} 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 768px) {
    padding: 40px;
    max-width: 450px;
  }
`;

export const BranchPopupClose = styled.button`
  position: absolute;
  top: 16px;
  ${props => props.activeLanguage === "ar" ? "left: 16px;" : "right: 16px;"}
  background: transparent;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: rotate(90deg);
  }
`;

export const BranchPopupTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 24px 0;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 26px;
    margin-bottom: 28px;
  }
`;

export const BranchPopupDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  align-items: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchPopupInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
  align-items: center;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchPopupText = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#666"};
  margin: 0;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  text-align: center;
  
  ${props => props.location && `
    font-weight: 400;
    line-height: 1.6;
    color: ${props.theme.textColor || "#555"};
    margin-top: 4px;
  `}
  
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const BranchPopupLink = styled.a`
  font-size: 18px;
  font-weight: 600;
  color: ${props => {
    if (props.whatsapp) return "#25D366";
    return props.theme.mainColor || "#007bff";
  }};
  text-decoration: none;
  display: block;
  transition: all 0.3s ease;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  text-align: center;
  
  &:hover {
    color: ${props => {
      if (props.whatsapp) return "#128C7E";
      return props.theme.mainColor || "#0056b3";
    }};
    text-decoration: underline;
  }
  
  @media (min-width: 768px) {
    font-size: 20px;
  }
`;

export const BranchPopupMapButton = styled.a`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background: ${props => props.theme.mainColor || "#007bff"};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 32px;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  box-shadow: 0 2px 8px ${props => props.theme.mainColor ? `${props.theme.mainColor}30` : "rgba(0, 123, 255, 0.3)"};
  margin-top: 8px;
  width: 70%;
  max-width: 280px;
  
  &:hover {
    background: ${props => props.theme.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.4)"};
    text-decoration: none;
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    font-size: 17px;
    padding: 16px 36px;
  }
`;

export const LocationName = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.hplocationTextColor || props.theme.textColor || "#1a1a1a"};
  margin: 0;
  text-align: left;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const LocationIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  flex-wrap: nowrap;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 12px;
  }
`;

export const LocationIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  
  background: ${props => {
    if (props.whatsapp) return "rgba(37, 211, 102, 0.12)";
    if (props.location || props.map) return "rgba(0, 123, 255, 0.12)";
    return props.theme.mainColor ? `${props.theme.mainColor}12` : "rgba(0, 123, 255, 0.12)";
  }};
  
  color: ${props => {
    if (props.whatsapp) return "#25D366";
    if (props.location || props.map) return props.theme.mainColor || "#007bff";
    return props.theme.mainColor || "#007bff";
  }};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${props => {
      if (props.whatsapp) return "rgba(37, 211, 102, 0.2)";
      if (props.location || props.map) return props.theme.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)";
      return props.theme.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)";
    }};
    box-shadow: 0 4px 12px ${props => {
      if (props.whatsapp) return "rgba(37, 211, 102, 0.3)";
      return props.theme.mainColor ? `${props.theme.mainColor}30` : "rgba(0, 123, 255, 0.3)";
    }};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`;

export const LocationPhone = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px 14px;
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  border-radius: 10px;
  transition: all 0.3s ease;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  gap: 10px;
  
  &:hover {
    background: ${props => props.theme.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.08)"};
    transform: translateX(${props => props.activeLanguage === "ar" ? "-2px" : "2px"});
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 768px) {
    padding: 11px 16px;
    margin-bottom: 12px;
  }
`;

export const LocationPhoneIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  font-size: 16px;
  flex-shrink: 0;
  background: ${props => 
    props.whatsapp 
      ? "rgba(37, 211, 102, 0.12)" 
      : (props.theme.mainColor ? `${props.theme.mainColor}12` : "rgba(0, 123, 255, 0.12)")
  };
  color: ${props => 
    props.whatsapp 
      ? "#25D366" 
      : (props.theme.mainColor || "#007bff")
  };
  
  @media (min-width: 768px) {
    width: 36px;
    height: 36px;
    font-size: 18px;
  }
`;

export const LocationPhoneLink = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.whatsapp ? "#25D366" : (props.theme.mainColor || "#007bff")};
  text-decoration: none;
  transition: all 0.2s ease;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  flex: 1;
  letter-spacing: 0.01em;
  
  &:hover {
    color: ${props => props.whatsapp ? "#128C7E" : (props.theme.mainColor || "#0056b3")};
    text-decoration: none;
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

// How it works – generic 4 steps (above footer)
export const HowItWorksWrap = styled.section`
  width: 100%;
  padding: 48px 16px 56px;
  background: ${(props) => props.theme?.howItWorksSectionBackgroundColor || props.theme?.homepageBackgroundColor || props.theme?.backgroundColor || "#f8f9fa"};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 72px 16px 80px;
  }
`;

export const HowItWorksContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const HowItWorksHeader = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

export const HowItWorksLabel = styled.p`
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  margin: 0 0 8px 0;
`;

export const HowItWorksTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const HowItWorksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px 16px;
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
`;

export const HowItWorksStep = styled.div`
  text-align: center;
`;

export const HowItWorksStepIconWrap = styled.div`
  position: relative;
  width: 56px;
  height: 56px;
  margin: 0 auto 12px;
  border-radius: 16px;
  background: ${(props) => props.theme?.howItWorksStepIconBackgroundColor || props.theme?.backgroundColor || "#fff"};
  border: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.12)")};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.howItWorksStepIconColor || props.theme?.mainColor || "#007bff"};
`;

export const HowItWorksStepBadge = styled.span`
  position: absolute;
  top: -6px;
  right: -6px;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${(props) => props.theme?.mainColor || "#007bff"};
  color: ${(props) => props.theme?.backgroundColor || "#fff"};
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HowItWorksStepTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0 0 4px 0;
  @media (min-width: 768px) {
    font-size: 15px;
  }
`;

export const HowItWorksStepDesc = styled.p`
  font-size: 12px;
  color: ${(props) => (props.theme?.textColor ? `${props.theme.textColor}99` : "#666")};
  margin: 0;
`;

// Footer (dark multi-column style)
export const FooterWrap = styled.footer`
  width: 100%;
  padding: 40px 16px 20px;
  margin-top: auto;
  background: ${(props) => props.theme?.footerSectionBackgroundColor || props.theme?.homepageBackgroundColor || props.theme?.textColor || "#1a1a1a"};
  color: ${(props) => props.theme?.footerTextColor || "#fff"};
  direction: ${(props) => (props.$activeLanguage === "ar" ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 48px 24px 24px;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-bottom: 48px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }
`;

export const FooterBrand = styled.div``;

export const FooterLogo = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: inherit;
  display: inline-block;
`;

export const FooterLogoImg = styled.img`
  max-width: 140px;
  max-height: 56px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const FooterLogoAccent = styled.span`
  color: ${(props) => props.theme?.mainColor || "#007bff"};
`;

export const FooterTagline = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 12px 0 0 0;
`;

export const FooterSocialWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
`;

export const FooterSocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const FooterCol = styled.div``;

export const FooterBranchesCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
`;

export const FooterBranchBlock = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:last-child {
    border-bottom: none;
  }
`;

export const FooterBranchName = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: inherit;
`;

export const FooterColTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  margin: 0 0 16px 0;
`;

export const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 10px;
  transition: opacity 0.2s ease, color 0.2s ease;
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
  text-align: inherit;
  &:hover {
    opacity: 1;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 10px;
  line-height: 1.5;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterContactIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const FooterHoursText = styled.p`
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 8px 0;
  line-height: 1.5;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterDivider = styled.div`
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

export const FooterCopyright = styled.p`
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`;

// Legacy (keep for any other theme refs)
export const Footer = FooterWrap;
export const Copyright = FooterCopyright;

// Social Media Section
export const SocialMediaSection = styled.section`
  width: 100%;
  padding: 12px;
  max-width: 1200px;
  margin: 6px auto;
  background: ${props => props.theme.socialSectionBackgroundColor || props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
  
  @media (min-width: 768px) {
    padding: 20px 5%;
  }
`;

export const SocialMediaGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 12px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 12px;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 10px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${props => props.theme.categoryUnActive || "#ffffff"};
  }
  
  span {
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.textColor || "#1a1a1a"};
    
    @media (min-width: 768px) {
      font-size: 13px;
    }
  }
`;

export const SocialIcon = styled.div`
  font-size: 24px;
  color: ${props => {
    if (props.platform?.toLowerCase().includes("facebook")) return "#1877F2";
    if (props.platform?.toLowerCase().includes("instagram")) return "#E4405F";
    if (props.platform?.toLowerCase().includes("twitter")) return "#1DA1F2";
    if (props.platform?.toLowerCase().includes("whatsapp")) return "#25D366";
    return props.theme.mainColor || "#007bff";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

// Welcome Section (when no slider images)
export const WelcomeSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px 0px 20px;
  background: ${props => props.theme.welcomeSectionBackgroundColor || props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  min-height: 340px;
  
  @media (min-width: 768px) {
    padding: 56px 20px 48px 20px;
    min-height: 420px;
  }
`;

export const WelcomeText = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 32px 0;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: -0.02em;
  
  @media (min-width: 768px) {
    font-size: 40px;
    margin-bottom: 40px;
  }
`;

export const WelcomeLogo = styled.img`
  max-width: 240px;
  max-height: 240px;
  width: auto;
  height: auto;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  
  @media (min-width: 768px) {
    max-width: 320px;
    max-height: 320px;
  }
`;

export const FeaturedProductsSection = styled.section`
  width: 100%;
  padding: 40px 16px;
  background: ${props => props.theme.featuredProductsSectionBackgroundColor || props.theme.homepageBackgroundColor || props.theme.backgroundColor || "#f8f9fa"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @media (min-width: 768px) {
    padding: 40px 5%;
  }
`;

export const FeaturedProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 0;
  margin-bottom:50px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-top: 0;
  }
`;

export const ExploreButton = styled.button`
  width: 50%;
  max-width: 280px;
  height: 48px;
  margin: 24px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.slidingButtonTextColor || "#ffffff"};
  background: ${props => props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  box-shadow: 0 4px 16px ${props => {
    const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
    return bgColor ? `${bgColor}40` : "rgba(0, 123, 255, 0.4)";
  }};
  
  &:hover {
    background: ${props => props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => {
      const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
      return bgColor ? `${bgColor}50` : "rgba(0, 123, 255, 0.5)";
    }};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
  }
`;

export const SloganText = styled.p`
  width: 100%;
  padding: 24px 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme.textColor || "#333333"};
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  margin: 0;
  line-height: 1.6;
  
  @media (min-width: 768px) {
    padding: 32px 5%;
    font-size: 20px;
  }
`;

export const ViewAllButton = styled.button`
  width: 55%;
  max-width: 280px;
  height: 48px;
  margin: 18px auto 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.slidingButtonTextColor || "#ffffff"};
  background: ${props => props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff"};
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  box-shadow: 0 4px 16px ${props => {
    const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
    return bgColor ? `${bgColor}40` : "rgba(0, 123, 255, 0.4)";
  }};
  
  &:hover {
    background: ${props => props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => {
      const bgColor = props.theme.slidingButtonBackgroundColor || props.theme.mainColor || "#007bff";
      return bgColor ? `${bgColor}50` : "rgba(0, 123, 255, 0.5)";
    }};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    max-width: 320px;
    height: 52px;
    font-size: 16px;
    margin: 24px auto 0;
  }
`;
