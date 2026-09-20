import React, { useState } from "react";
import {
  Container,
  CategoryCard,
  CategoryIcon,
  CategoryIconWrapper,
  CategoryFallback,
  CategoryName,
  CategoryGrid,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getImageUrl } from "../../../utilities/imageUrl";
import { FaThLarge } from "react-icons/fa";

const CategoryCardItem = ({ category, logoURL, activeLanguage, onCategoryClick }) => {
  const [imageError, setImageError] = useState(false);
  const categoryName = activeLanguage === "en" ? category.en_category : category.ar_category;
  const categoryImageUrl = category.image_url
    ? getImageUrl(category.image_url)
    : null;
  const showImage = categoryImageUrl && !imageError;

  return (
    <CategoryCard onClick={() => onCategoryClick(category.id)}>
      <CategoryIconWrapper>
        {showImage ? (
          <CategoryIcon
            src={categoryImageUrl}
            alt={categoryName}
            onError={() => setImageError(true)}
          />
        ) : logoURL && !imageError ? (
          <CategoryIcon
            src={logoURL}
            alt={categoryName}
            onError={() => setImageError(true)}
          />
        ) : (
          <CategoryFallback>
            <FaThLarge size={32} />
          </CategoryFallback>
        )}
      </CategoryIconWrapper>
      <CategoryName activeLanguage={activeLanguage}>{categoryName}</CategoryName>
    </CategoryCard>
  );
};

export default function CategoriesGrid({ categories, onCategoryClick }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www" && subdomain !== "api" && subdomain !== "staging-api"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage
  );

  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );

  const logoURL = restaurant?.logoURL
    ? `https://storage.googleapis.com/menugic-images/${restaurant.logoURL}`
    : null;

  return (
    <Container>
      <CategoryGrid>
        {categories
          ?.sort((a, b) => (b.priority || 0) - (a.priority || 0))
          .map((category) => (
            <CategoryCardItem
              key={category.id}
              category={category}
              logoURL={logoURL}
              activeLanguage={activeLanguage}
              onCategoryClick={onCategoryClick}
            />
          ))}
      </CategoryGrid>
    </Container>
  );
}
