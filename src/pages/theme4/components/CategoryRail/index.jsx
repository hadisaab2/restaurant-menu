import React from "react";
import {
  CategoryRailContainer,
  CategoryItem,
  CategoryIcon,
  CategoryIconFallback,
  CategoryIndicator,
  CategoryName,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function CategoryRail({
  categories = [],
  activeCategory,
  setactiveCategory,
  setcarouselPosition,
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const theme = restaurant?.theme ? (typeof restaurant.theme === 'string' ? JSON.parse(restaurant.theme) : restaurant.theme) : {};

  const handleCategoryClick = (category, index) => {
    setactiveCategory(category.id);
    setcarouselPosition(index);
  };

  // Sort categories by priority
  const sortedCategories = [...categories].sort((a, b) => (b.priority || 0) - (a.priority || 0));

  return (
    <CategoryRailContainer activeLanguage={activeLanguage} theme={theme}>
      {sortedCategories.map((category, index) => {
        const isActive = activeCategory === category.id;
        const categoryImage = category.image_url
          ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
          : null;

        return (
          <CategoryItem
            key={category.id}
            active={isActive}
            onClick={() => handleCategoryClick(category, index)}
            activeLanguage={activeLanguage}
            theme={theme}
          >
            {categoryImage ? (
              <CategoryIcon src={categoryImage} alt={activeLanguage === "en" ? category.en_category : category.ar_category} active={isActive} />
            ) : (
              <CategoryIconFallback active={isActive}>
                {(activeLanguage === "en" ? category.en_category : category.ar_category)?.charAt(0) || "?"}
              </CategoryIconFallback>
            )}
            <CategoryName active={isActive} activeLanguage={activeLanguage} theme={theme}>
              {activeLanguage === "en" ? category.en_category : category.ar_category}
            </CategoryName>
            {isActive && <CategoryIndicator activeLanguage={activeLanguage} theme={theme} />}
          </CategoryItem>
        );
      })}
    </CategoryRailContainer>
  );
}

