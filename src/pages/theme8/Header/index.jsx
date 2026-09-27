import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../../utilities/imageUrl";
import {
  HeaderWrap, HeaderInner, HeaderStart, HeaderBrand, HeaderLogo, HeaderName,
  HeaderSearch, HeaderSearchIcon, HeaderSearchInput, HeaderSearchClear,
  HeaderEnd, HeaderIconBtn, MobileSearchBtn, CartButton, HeaderCartBadge,
} from "./styles";

export default function Header({
  restaurant, restaurantName, activeLanguage, cartCount,
  onCartClick, onLanguageToggle, onSearchChange, searchText,
  onMobileSearchOpen, onLogoClick,
}) {
  const displayName = restaurant?.name || restaurantName || "";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <HeaderWrap className={scrolled ? "scrolled" : ""}>
      <HeaderInner>
        <HeaderStart>
          <HeaderBrand onClick={onLogoClick}>
            <HeaderLogo>
              {restaurant?.logoURL ? (
                <img src={getImageUrl(restaurant.logoURL)} alt="" />
              ) : displayName.charAt(0).toUpperCase()}
            </HeaderLogo>
            <HeaderName>{displayName}</HeaderName>
          </HeaderBrand>
        </HeaderStart>

        <HeaderSearch>
          <HeaderSearchIcon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </HeaderSearchIcon>
          <HeaderSearchInput
            type="search"
            placeholder={activeLanguage === "ar" ? "ابحث في القائمة..." : "Search menu..."}
            value={searchText}
            onChange={(e) => onSearchChange?.(e.target.value)}
          />
          {searchText && (
            <HeaderSearchClear onClick={() => onSearchChange?.("")}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </HeaderSearchClear>
          )}
        </HeaderSearch>

        <HeaderEnd>
          <MobileSearchBtn onClick={onMobileSearchOpen} aria-label="Search">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
          </MobileSearchBtn>
          <HeaderIconBtn onClick={onLanguageToggle} aria-label="Switch language">
            {activeLanguage === "ar" ? "EN" : "ع"}
          </HeaderIconBtn>
          <CartButton onClick={onCartClick} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18"/><path d="M16 10a4 4 0 01-8 0"/></svg>
            {cartCount > 0 && <HeaderCartBadge>{cartCount}</HeaderCartBadge>}
          </CartButton>
        </HeaderEnd>
      </HeaderInner>
    </HeaderWrap>
  );
}
