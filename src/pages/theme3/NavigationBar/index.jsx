import React, { useState } from "react";
import {
  NavBarContainer,
  NavContent,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
  NavLinkText,
  LanguageContainer,
  Language,
  Ball,
  Wrapper,
  MobileMenuButton,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuOverlay,
  MobileNavLink,
  MobileMenuSection,
  MobileMenuSectionHeader,
  MobileMenuSectionIcon,
  MobileMenuSectionTitle,
  MobileMenuSectionContent,
  MobileMenuCollapsibleIcon,
  MobileMenuCategoryList,
  MobileMenuCategoryItem,
  MobileMenuCategoryIcon,
  MobileMenuCategoryText,
  MobileMenuLogoContainer,
  MobileMenuLogo,
  MobileMenuDivider,
  MobileMenuSocialSection,
  MobileMenuSocialGrid,
  MobileMenuSocialLink,
  MobileMenuSocialIcon,
  MobileMenuCopyright,
  MobileMenuCloseButton,
} from "./styles";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaTimes, FaHome, FaList, FaShoppingBag, FaCommentAlt, FaAddressBook, FaChevronDown, FaChevronUp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGlobe, FaTiktok, FaQuestionCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import { FaWhatsapp } from "react-icons/fa6";

export default function NavigationBar({
  onProductsClick,
  onSocialMediaClick,
  onBranchesClick,
  onFeedbackClick,
  onOrderClick,
  onHomeClick,
  onCategoryClick,
  onContactClick,
  onContactFormClick,
  categories,
  activeCategory,
  setshowSidebar,
  showSidebar,
  restaurant: restaurantProp,
  popupHandler,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurantFromRedux = useSelector((state) => state.restaurant?.[restaurantName]);
  const restaurant = restaurantProp || restaurantFromRedux;
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(false);

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  const toggleMobileMenu = () => {
    // Close any opened popup when opening mobile menu
    if (popupHandler) {
      popupHandler(null);
    }
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const handleNavClick = (handler) => {
    if (handler) {
      handler();
    }
    closeMobileMenu();
  };

  const handleCategoryItemClick = (categoryId, index) => {
    if (onCategoryClick) {
      onCategoryClick(categoryId);
    }
    closeMobileMenu();
  };

  const handleFeedbackClick = () => {
    if (onFeedbackClick) {
      onFeedbackClick();
    }
    closeMobileMenu();
  };

  const handleContactClick = () => {
    if (onContactClick) {
      onContactClick();
    }
    closeMobileMenu();
  };

  const handleContactFormClick = () => {
    if (onContactFormClick) {
      onContactFormClick();
    }
    closeMobileMenu();
  };

  const handleBranchesClick = () => {
    if (onBranchesClick) {
      onBranchesClick();
    }
    closeMobileMenu();
  };

  // Get social media data
  const branches = restaurant?.branches || [];
  let socialMedia = {};
  let hasSocialMedia = false;
  
  if (restaurant?.social_media) {
    try {
      socialMedia = typeof restaurant.social_media === 'string' 
        ? JSON.parse(restaurant.social_media) 
        : restaurant.social_media;
      hasSocialMedia = Object.keys(socialMedia).length > 0;
    } catch (e) {
      socialMedia = {};
    }
  }
  
  if (!hasSocialMedia && restaurant?.socialMedia && Array.isArray(restaurant.socialMedia)) {
    restaurant.socialMedia.forEach(media => {
      if (media.platform && media.link) {
        const platform = media.platform.toLowerCase();
        socialMedia[platform] = media.link.startsWith('http') 
          ? media.link 
          : `https://${media.link}`;
      }
    });
    hasSocialMedia = Object.keys(socialMedia).length > 0;
  }

  return (
    <>
      <NavBarContainer activeLanguage={activeLanguage}>
        <NavContent>
          {/* Menu Button (3 dashes) - Left */}
          <MobileMenuButton onClick={toggleMobileMenu} activeLanguage={activeLanguage} style={{ order: activeLanguage === "ar" ? 3 : 1 }}>
            {mobileMenuOpen ? <FaTimes /> : <HiMenuAlt2 />}
          </MobileMenuButton>

          {/* Logo - Center */}
          <LogoContainer 
            onClick={() => {
              if (onHomeClick) {
                onHomeClick();
              }
            }} 
            style={{ cursor: onHomeClick ? "pointer" : "default", order: 2 }}
          >
            {restaurant?.logoURL && (
              <Logo
                src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
                alt={restaurant?.name || "Restaurant Logo"}
              />
            )}
          </LogoContainer>

          {/* Desktop Navigation Links */}
          <NavLinks activeLanguage={activeLanguage}>
            {onHomeClick && (
              <NavLink
                onClick={() => handleNavClick(onHomeClick)}
                activeLanguage={activeLanguage}
              >
                <NavLinkText activeLanguage={activeLanguage}>
                  {activeLanguage === "en" ? "Homepage" : "الصفحة الرئيسية"}
                </NavLinkText>
              </NavLink>
            )}
            <NavLink
              onClick={toggleMobileMenu}
              activeLanguage={activeLanguage}
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Categories" : "الفئات"}
              </NavLinkText>
            </NavLink>
            <NavLink
              activeLanguage={activeLanguage}
              disabled
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Orders (Coming Soon)" : "الطلبات (قريباً)"}
              </NavLinkText>
            </NavLink>
            <NavLink
              onClick={() => handleNavClick(onFeedbackClick)}
              activeLanguage={activeLanguage}
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Feedback" : "التعليقات"}
              </NavLinkText>
            </NavLink>
            <NavLink
              onClick={() => handleNavClick(onBranchesClick)}
              activeLanguage={activeLanguage}
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Branches" : "الفروع"}
              </NavLinkText>
            </NavLink>
            <NavLink
              onClick={() => handleNavClick(onContactFormClick)}
              activeLanguage={activeLanguage}
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Questions & Suggestions" : "أسئلة واقتراحات"}
              </NavLinkText>
            </NavLink>
          </NavLinks>

          {/* Language Switcher - Right */}
          <LanguageContainer activeLanguage={activeLanguage} style={{ order: activeLanguage === "ar" ? 1 : 3 }}>
            {restaurant?.languages === "en&ar" && (
              <>
                <Wrapper />
                <Ball activeLanguage={activeLanguage} />
                <Language
                  activeLanguage={activeLanguage}
                  language={"en"}
                  onClick={() => handleLanguage("en")}
                >
                  En
                </Language>
                <Language
                  activeLanguage={activeLanguage}
                  language={"ar"}
                  onClick={() => handleLanguage("ar")}
                >
                  Ar
                </Language>
              </>
            )}
          </LanguageContainer>
        </NavContent>
      </NavBarContainer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <MobileMenuOverlay onClick={closeMobileMenu} />
          <MobileMenu activeLanguage={activeLanguage} isOpen={mobileMenuOpen}>
            {/* Close Button - Top Right */}
            <MobileMenuCloseButton onClick={closeMobileMenu} activeLanguage={activeLanguage}>
              <FaTimes />
            </MobileMenuCloseButton>

            {/* Logo at Top */}
            {restaurant?.logoURL && (
              <MobileMenuLogoContainer 
                onClick={() => {
                  if (onHomeClick) {
                    onHomeClick();
                    closeMobileMenu();
                  }
                }}
                style={{ cursor: onHomeClick ? "pointer" : "default" }}
              >
                <MobileMenuLogo
                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
                  alt={restaurant?.name || "Restaurant Logo"}
                />
              </MobileMenuLogoContainer>
            )}
            
            {/* Homepage Section */}
            {onHomeClick && (
              <>
                <MobileMenuSection>
                  <MobileMenuSectionHeader onClick={() => handleNavClick(onHomeClick)}>
                    <MobileMenuSectionIcon>
                      <FaHome />
                    </MobileMenuSectionIcon>
                    <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                      {activeLanguage === "en" ? "Homepage" : "الصفحة الرئيسية"}
                    </MobileMenuSectionTitle>
                  </MobileMenuSectionHeader>
                </MobileMenuSection>
                <MobileMenuDivider />
              </>
            )}

            {/* Categories Section - Collapsible */}
            <>
              <MobileMenuSection>
                <MobileMenuSectionHeader onClick={() => setCategoriesExpanded(!categoriesExpanded)}>
                  <MobileMenuSectionIcon>
                    <FaList />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Categories" : "الفئات"}
                  </MobileMenuSectionTitle>
                  <MobileMenuCollapsibleIcon activeLanguage={activeLanguage}>
                    {categoriesExpanded ? <FaChevronUp /> : <FaChevronDown />}
                  </MobileMenuCollapsibleIcon>
                </MobileMenuSectionHeader>
                {categoriesExpanded && (
                  <MobileMenuSectionContent>
                    <MobileMenuCategoryList>
                      {categories
                        ?.sort((a, b) => b.priority - a.priority)
                        .map((category, index) => {
                          return (
                            <MobileMenuCategoryItem
                              key={index}
                              onClick={() => handleCategoryItemClick(category.id, index)}
                              active={activeCategory === category.id}
                              activeLanguage={activeLanguage}
                            >
                              {restaurant?.category_type !== "horizantal-withoutIcon" && category.image_url && (
                                <MobileMenuCategoryIcon
                                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`}
                                  alt={activeLanguage === "en" ? category.en_category : category.ar_category}
                                />
                              )}
                              <MobileMenuCategoryText>
                                {activeLanguage === "en" ? category.en_category : category.ar_category}
                              </MobileMenuCategoryText>
                            </MobileMenuCategoryItem>
                          );
                        })}
                    </MobileMenuCategoryList>
                  </MobileMenuSectionContent>
                )}
              </MobileMenuSection>
              <MobileMenuDivider />
            </>

            {/* Orders Section */}
            <>
              <MobileMenuSection>
                <MobileMenuSectionHeader disabled>
                  <MobileMenuSectionIcon>
                    <FaShoppingBag />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Orders (Coming Soon)" : "الطلبات (قريباً)"}
                  </MobileMenuSectionTitle>
                </MobileMenuSectionHeader>
              </MobileMenuSection>
              <MobileMenuDivider />
            </>

            {/* Feedback Section */}
            <>
              <MobileMenuSection>
                <MobileMenuSectionHeader onClick={handleFeedbackClick}>
                  <MobileMenuSectionIcon>
                    <FaCommentAlt />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Feedback" : "التعليقات"}
                  </MobileMenuSectionTitle>
                </MobileMenuSectionHeader>
              </MobileMenuSection>
              <MobileMenuDivider />
            </>

            {/* Branches Section */}
            <>
              <MobileMenuSection>
                <MobileMenuSectionHeader onClick={handleBranchesClick}>
                  <MobileMenuSectionIcon>
                    <FaAddressBook />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Branches" : "الفروع"}
                  </MobileMenuSectionTitle>
                </MobileMenuSectionHeader>
              </MobileMenuSection>
              <MobileMenuDivider />
            </>

            {/* Contact Us Section */}
            <>
              <MobileMenuSection>
                <MobileMenuSectionHeader onClick={handleContactFormClick}>
                  <MobileMenuSectionIcon>
                    <FaQuestionCircle />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "Questions & Suggestions" : "أسئلة واقتراحات"}
                  </MobileMenuSectionTitle>
                </MobileMenuSectionHeader>
              </MobileMenuSection>
              <MobileMenuDivider />
            </>

            {/* Social Media Section */}
            {hasSocialMedia && (
              <MobileMenuSocialSection activeLanguage={activeLanguage}>
                <MobileMenuSocialGrid>
                  {Object.entries(socialMedia).map(([platform, url]) => {
                    if (!url) return null;
                    const getSocialIcon = (platform) => {
                      const platformLower = platform?.toLowerCase() || "";
                      if (platformLower.includes("facebook")) return <FaFacebook />;
                      if (platformLower.includes("instagram")) return <FaInstagram />;
                      if (platformLower.includes("tiktok")) return <FaTiktok />;
                      if (platformLower.includes("twitter")) return <FaTwitter />;
                      if (platformLower.includes("linkedin")) return <FaLinkedin />;
                      if (platformLower.includes("youtube")) return <FaYoutube />;
                      if (platformLower.includes("whatsapp")) return <FaWhatsapp />;
                      return <FaGlobe />;
                    };

                    return (
                      <MobileMenuSocialLink
                        key={platform}
                        href={url.startsWith('http') ? url : `https://${url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        platform={platform}
                      >
                        <MobileMenuSocialIcon platform={platform}>
                          {getSocialIcon(platform)}
                        </MobileMenuSocialIcon>
                      </MobileMenuSocialLink>
                    );
                  })}
                </MobileMenuSocialGrid>
              </MobileMenuSocialSection>
            )}

            {/* Copyright */}
            <MobileMenuCopyright activeLanguage={activeLanguage}>
              MENUGIC © Copyright {new Date().getFullYear()} - All rights reserved. Created by "MENUGIC".
            </MobileMenuCopyright>
          </MobileMenu>
        </>
      )}
    </>
  );
}

