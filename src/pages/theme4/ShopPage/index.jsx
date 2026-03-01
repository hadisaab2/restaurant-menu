import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  ShopPageWrap,
  ShopHeaderSection,
  ShopHeaderInner,
  ShopLabel,
  ShopTitle,
  ShopSubtitle,
  ShopPillsWrap,
  ShopPill,
  ShopPillIcon,
  ShopStickyBar,
  ShopStickyInner,
  ShopSearchWrap,
  ShopSearchIcon,
  ShopSearchInput,
  ShopContentSection,
  ShopContentInner,
} from "./styles";
import { FaShoppingBag, FaThLarge } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import Products from "../products";

export default function ShopPage({
  categories,
  activeCategory,
  setactiveCategory,
  searchText,
  setSearchText,
  searchParams,
  setSearchParams,
  menu,
  showPopup,
  setcarouselPosition,
  carouselPosition,
  onAddToCart,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const subdomain = window.location.hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;
  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const theme = restaurant?.theme
    ? typeof restaurant.theme === "string"
      ? JSON.parse(restaurant.theme)
      : restaurant.theme
    : {};

  const shopTitle = theme?.shopPageTitle || restaurant?.name || (activeLanguage === "en" ? "Shop" : "تسوق");
  const shopSubtitle = theme?.shopPageSubtitle || (activeLanguage === "en" ? "Browse our menu and place your order." : "تصفح قائمتنا واطلب ما تشاء.");

  return (
    <ShopPageWrap $activeLanguage={activeLanguage} theme={theme}>
      <ShopHeaderSection>
        <ShopHeaderInner>
          <ShopLabel theme={theme}>
            {activeLanguage === "en" ? "Shop" : "تسوق"}
          </ShopLabel>
          <ShopTitle theme={theme}>{shopTitle}</ShopTitle>
          <ShopSubtitle theme={theme}>{shopSubtitle}</ShopSubtitle>
          <ShopPillsWrap>
            {categories.map((cat) => {
              const isAll = cat.id === "all-items" || cat.isAllItems;
              const isActive = String(activeCategory) === String(cat.id);
              const name = activeLanguage === "en" ? (cat.en_category || cat.ar_category) : (cat.ar_category || cat.en_category);
              const categoryImageUrl = cat.image_url
                ? `https://storage.googleapis.com/ecommerce-bucket-testing/${cat.image_url}`
                : null;
              return (
                <ShopPill
                  key={cat.id}
                  type="button"
                  $active={isActive}
                  theme={theme}
                  onClick={() => {
                setactiveCategory(cat.id);
                const newParams = new URLSearchParams(searchParams);
                newParams.set("categoryId", String(cat.id));
                setSearchParams(newParams);
              }}
                >
                  <ShopPillIcon>
                    {isAll ? (
                      <FaShoppingBag size={14} />
                    ) : categoryImageUrl ? (
                      <img
                        src={categoryImageUrl}
                        alt=""
                        style={{ width: 14, height: 14, objectFit: "cover", borderRadius: 4 }}
                      />
                    ) : (
                      <FaThLarge size={14} />
                    )}
                  </ShopPillIcon>
                  {name}
                </ShopPill>
              );
            })}
          </ShopPillsWrap>
        </ShopHeaderInner>
      </ShopHeaderSection>

      <ShopStickyBar theme={theme}>
        <ShopStickyInner>
          <ShopSearchWrap>
            <ShopSearchIcon $activeLanguage={activeLanguage} theme={theme}>
              <CiSearch size={18} />
            </ShopSearchIcon>
            <ShopSearchInput
              type="text"
              placeholder={activeLanguage === "en" ? "Search..." : "بحث..."}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              $activeLanguage={activeLanguage}
              theme={theme}
            />
          </ShopSearchWrap>
        </ShopStickyInner>
      </ShopStickyBar>

      <ShopContentSection>
        <ShopContentInner>
          <Products
            menu={menu}
            activeCategory={activeCategory}
            showPopup={showPopup}
            searchText={searchText}
            carouselPosition={carouselPosition}
            setcarouselPosition={setcarouselPosition}
            setactiveCategory={setactiveCategory}
            categories={categories}
            onAddToCart={onAddToCart}
          />
        </ShopContentInner>
      </ShopContentSection>
    </ShopPageWrap>
  );
}
