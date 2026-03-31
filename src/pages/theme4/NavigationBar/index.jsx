import React, { useState, useRef, useEffect } from "react";
import {
  NavBarContainer,
  NavContent,
  NavActions,
  LogoContainer,
  Logo,
  NavLinks,
  NavLink,
  NavLinkText,
  GlobeLanguageWrap,
  GlobeLanguageButton,
  GlobeLanguageMenu,
  GlobeLanguageMenuBtn,
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
import { IoGlobeOutline, IoHeartOutline } from "react-icons/io5";
import { FaTimes, FaHome, FaList, FaCommentAlt, FaAddressBook, FaChevronDown, FaChevronUp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGlobe, FaTiktok, FaQuestionCircle, FaInfoCircle, FaClipboardList } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import { FaWhatsapp } from "react-icons/fa6";
import CustomerAccountNav from "../../../components/CustomerAccountNav";

const WishlistHeartIcon = IoHeartOutline;

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
  onAboutClick,
  categories,
  activeCategory,
  setshowSidebar,
  showSidebar,
  restaurant: restaurantProp,
  popupHandler,
  isProductDetailsOpen = false,
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
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const customerAccountNavRef = useRef(null);
  const globeLangRef = useRef(null);

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  useEffect(() => {
    if (!langMenuOpen) return undefined;
    const close = (e) => {
      if (globeLangRef.current && !globeLangRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", close);
    document.addEventListener("touchstart", close);
    return () => {
      document.removeEventListener("mousedown", close);
      document.removeEventListener("touchstart", close);
    };
  }, [langMenuOpen]);

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

  const handleAboutClick = () => {
    if (onAboutClick) {
      onAboutClick();
    }
    closeMobileMenu();
  };

  const handleMobileOrdersClick = () => {
    if (popupHandler) {
      popupHandler(null);
    }
    customerAccountNavRef.current?.openOrders?.();
    closeMobileMenu();
  };

  const handleMobileWishlistClick = () => {
    if (popupHandler) {
      popupHandler(null);
    }
    customerAccountNavRef.current?.openWishlist?.();
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
      <NavBarContainer activeLanguage={activeLanguage} $isProductDetailsOpen={isProductDetailsOpen}>
        <NavContent dir={activeLanguage === "ar" ? "rtl" : "ltr"}>
          <MobileMenuButton
            onClick={toggleMobileMenu}
            activeLanguage={activeLanguage}
            $lang={activeLanguage}
          >
            {mobileMenuOpen ? <FaTimes /> : <HiMenuAlt2 />}
          </MobileMenuButton>

          {/* Logo - Center (absolute on mobile; order from styles so it doesn’t steal flex slots) */}
          <LogoContainer
            onClick={() => {
              if (onHomeClick) {
                onHomeClick();
              }
            }}
            style={{ cursor: onHomeClick ? "pointer" : "default" }}
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
              onClick={() => handleNavClick(onProductsClick)}
              activeLanguage={activeLanguage}
            >
              <NavLinkText activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? "Categories" : "الفئات"}
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
            {onAboutClick && (
              <NavLink
                onClick={() => handleNavClick(onAboutClick)}
                activeLanguage={activeLanguage}
              >
                <NavLinkText activeLanguage={activeLanguage}>
                  {activeLanguage === "en" ? "About us" : "من نحن"}
                </NavLinkText>
              </NavLink>
            )}
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

          <NavActions>
            <CustomerAccountNav
              ref={customerAccountNavRef}
              restaurant={restaurant}
              restaurantName={restaurantName}
              activeLanguage={activeLanguage}
              popupHandler={popupHandler}
            />
            {restaurant?.languages === "en&ar" && (
              <GlobeLanguageWrap ref={globeLangRef}>
                <GlobeLanguageButton
                  type="button"
                  aria-label={activeLanguage === "en" ? "Language" : "اللغة"}
                  aria-expanded={langMenuOpen}
                  onClick={() => setLangMenuOpen((o) => !o)}
                >
                  <IoGlobeOutline aria-hidden />
                </GlobeLanguageButton>
                {langMenuOpen && (
                  <GlobeLanguageMenu
                    $rtl={activeLanguage === "ar"}
                    dir={activeLanguage === "ar" ? "rtl" : "ltr"}
                  >
                    <GlobeLanguageMenuBtn
                      type="button"
                      $active={activeLanguage === "en"}
                      $rtl={activeLanguage === "ar"}
                      onClick={() => {
                        handleLanguage("en");
                        setLangMenuOpen(false);
                      }}
                    >
                      English
                    </GlobeLanguageMenuBtn>
                    <GlobeLanguageMenuBtn
                      type="button"
                      $active={activeLanguage === "ar"}
                      $rtl={activeLanguage === "ar"}
                      onClick={() => {
                        handleLanguage("ar");
                        setLangMenuOpen(false);
                      }}
                    >
                      العربية
                    </GlobeLanguageMenuBtn>
                  </GlobeLanguageMenu>
                )}
              </GlobeLanguageWrap>
            )}
          </NavActions>
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
            </>

            {/* Orders — under Feedback */}
            <MobileMenuSection>
              <MobileMenuSectionHeader onClick={handleMobileOrdersClick}>
                <MobileMenuSectionIcon>
                  <FaClipboardList />
                </MobileMenuSectionIcon>
                <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                  {activeLanguage === "en" ? "Orders" : "الطلبات"}
                </MobileMenuSectionTitle>
              </MobileMenuSectionHeader>
            </MobileMenuSection>

            <MobileMenuSection>
              <MobileMenuSectionHeader onClick={handleMobileWishlistClick}>
                <MobileMenuSectionIcon>
                  <WishlistHeartIcon style={{ fill: "none", stroke: "currentColor" }} />
                </MobileMenuSectionIcon>
                <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                  {activeLanguage === "en" ? "Wishlist" : "المفضلة"}
                </MobileMenuSectionTitle>
              </MobileMenuSectionHeader>
            </MobileMenuSection>

            {/* About us Section */}
            {onAboutClick && (
              <MobileMenuSection>
                <MobileMenuSectionHeader onClick={handleAboutClick}>
                  <MobileMenuSectionIcon>
                    <FaInfoCircle />
                  </MobileMenuSectionIcon>
                  <MobileMenuSectionTitle activeLanguage={activeLanguage}>
                    {activeLanguage === "en" ? "About us" : "من نحن"}
                  </MobileMenuSectionTitle>
                </MobileMenuSectionHeader>
              </MobileMenuSection>
            )}

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

