import React, { useState } from "react";
import {
  Container,
  CategoryCard,
  CategoryIcon,
  CategoryIconWrapper,
  CategoryName,
  CategoryGrid,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

// Component for category icon with fallback to logo
const CategoryIconWithFallback = ({ category, logoURL, activeLanguage, showOnePerLine, onCategoryClick }) => {
  const [imageError, setImageError] = useState(false);
  const categoryImageUrl = category.image_url
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
    : null;

  return (
    <CategoryCard
      onClick={() => onCategoryClick(category.id)}
      showOnePerLine={showOnePerLine}
      activeLanguage={activeLanguage}
    >
      <CategoryIconWrapper showOnePerLine={showOnePerLine} activeLanguage={activeLanguage}>
        <CategoryIcon
          src={imageError || !categoryImageUrl ? logoURL : categoryImageUrl}
          alt={activeLanguage === "en" ? category.en_category : category.ar_category}
          onError={() => setImageError(true)}
        />
      </CategoryIconWrapper>
      <CategoryName activeLanguage={activeLanguage} showOnePerLine={showOnePerLine}>
        {activeLanguage === "en" ? category.en_category : category.ar_category}
      </CategoryName>
    </CategoryCard>
  );
};

export default function CategoriesGrid({ categories, onCategoryClick }) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage
  );

  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );

  const categoriesCount = categories?.length || 0;
  const showOnePerLine = categoriesCount < 9;

  // Get restaurant logo URL for fallback
  const logoURL = restaurant?.logoURL 
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  return (
    <Container>
      <CategoryGrid showOnePerLine={showOnePerLine}>
        {categories
          ?.sort((a, b) => b.priority - a.priority)
          .map((category) => (
            <CategoryIconWithFallback
              key={category.id}
              category={category}
              logoURL={logoURL}
              activeLanguage={activeLanguage}
              showOnePerLine={showOnePerLine}
              onCategoryClick={onCategoryClick}
            />
          ))}
      </CategoryGrid>
    </Container>
  );
}

