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
  LanguageButton,
  MobileMenuButton,
  MobileMenuIcon,
  MobileMenu,
  MobileMenuOverlay,
  MobileNavLink,
} from "./styles";
import { FaGlobe, FaBars, FaTimes } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";

export default function NavigationBar({
  onProductsClick,
  onSocialMediaClick,
  onBranchesClick,
  onFeedbackClick,
  onOrderClick,
  onHomeClick,
}) {
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
  const dispatch = useDispatch();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguage = (lang) => {
    dispatch(changelanuage({ name: restaurantName, activeLanguage: lang }));
  };

  const toggleMobileMenu = () => {
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

  // Navigation items with translations
  const navItems = [
    {
      id: "products",
      en: "Products",
      ar: "المنتجات",
      handler: onProductsClick,
    },
    {
      id: "social",
      en: "Social Media",
      ar: "وسائل التواصل",
      handler: onSocialMediaClick,
    },
    {
      id: "branches",
      en: "Branches",
      ar: "الفروع",
      handler: onBranchesClick,
    },
    {
      id: "feedback",
      en: "Feedback",
      ar: "التعليقات",
      handler: onFeedbackClick,
    },
    {
      id: "order",
      en: "Order",
      ar: "الطلب",
      handler: onOrderClick,
    },
  ];

  return (
    <>
      <NavBarContainer activeLanguage={activeLanguage}>
        <NavContent>
          {/* Logo */}
          <LogoContainer onClick={onHomeClick} style={{ cursor: onHomeClick ? "pointer" : "default" }}>
            {restaurant?.logoURL && (
              <Logo
                src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`}
                alt={restaurant?.name || "Restaurant Logo"}
              />
            )}
          </LogoContainer>

          {/* Desktop Navigation Links */}
          <NavLinks activeLanguage={activeLanguage}>
            {navItems.map((item) => (
              <NavLink
                key={item.id}
                onClick={() => handleNavClick(item.handler)}
                activeLanguage={activeLanguage}
              >
                <NavLinkText activeLanguage={activeLanguage}>
                  {activeLanguage === "en" ? item.en : item.ar}
                </NavLinkText>
              </NavLink>
            ))}
          </NavLinks>

          {/* Language Switcher & Mobile Menu Button */}
          <LanguageContainer activeLanguage={activeLanguage}>
            {restaurant?.languages === "en&ar" && (
              <LanguageButton
                onClick={() => handleLanguage(activeLanguage === "en" ? "ar" : "en")}
                activeLanguage={activeLanguage}
              >
                <FaGlobe />
              </LanguageButton>
            )}
            <MobileMenuButton onClick={toggleMobileMenu} activeLanguage={activeLanguage}>
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </MobileMenuButton>
          </LanguageContainer>
        </NavContent>
      </NavBarContainer>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          <MobileMenuOverlay onClick={closeMobileMenu} />
          <MobileMenu activeLanguage={activeLanguage} isOpen={mobileMenuOpen}>
            {navItems.map((item) => (
              <MobileNavLink
                key={item.id}
                onClick={() => handleNavClick(item.handler)}
                activeLanguage={activeLanguage}
              >
                {activeLanguage === "en" ? item.en : item.ar}
              </MobileNavLink>
            ))}
          </MobileMenu>
        </>
      )}
    </>
  );
}

