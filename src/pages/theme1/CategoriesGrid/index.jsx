import React from "react";
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

  return (
    <Container>
      <CategoryGrid>
        {categories
          ?.sort((a, b) => b.priority - a.priority)
          .map((category) => (
            <CategoryCard
              key={category.id}
              onClick={() => onCategoryClick(category.id)}
            >
              <CategoryIconWrapper>
                <CategoryIcon
                  src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`}
                  alt={activeLanguage === "en" ? category.en_category : category.ar_category}
                />
              </CategoryIconWrapper>
              <CategoryName activeLanguage={activeLanguage}>
                {activeLanguage === "en" ? category.en_category : category.ar_category}
              </CategoryName>
            </CategoryCard>
          ))}
      </CategoryGrid>
    </Container>
  );
}

