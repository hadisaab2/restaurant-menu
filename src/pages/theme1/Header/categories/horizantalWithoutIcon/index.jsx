import React, { useState, useRef, useEffect } from "react";
import {
  Container,
  CarouselContainer,
  Carousel,
  CarouselItem,
  CategoryName,
  CategoryWrapper,
  TextContainer,
  ArrowIcon,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function HorizantalWithoutIcon({
  categories,
  activeCategory,
  setactiveCategory,
  carouselPosition,
  setcarouselPosition,
}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www")
    ? subdomain
    : paramRestaurantName;

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const handleArrow = () => {
    if (carouselPosition < categories.length - 4) {
      setcarouselPosition(carouselPosition + 1);
    }
  };

  const itemClick = (id,index) => {
    setactiveCategory(id);
    setcarouselPosition(index)
  };

  const carouselRefs = useRef([]); // Array to hold refs for each carousel item

  // Initialize refs for each carousel item when categories change
  useEffect(() => {
    carouselRefs.current = carouselRefs.current.slice(0, categories.length); // Ensure we have enough refs for each category
  }, [categories.length]); // Update refs if categories change

  // Scroll to the current item when the carouselPosition changes
  useEffect(() => {
    console.log(carouselPosition)

    if (carouselRefs.current[carouselPosition]) {
      carouselRefs.current[carouselPosition].scrollIntoView({
        behavior: "smooth",
        block: "nearest", // Align the item nearest to the viewport
        inline: "start", // Center the item horizontally
      });
    }
  }, [carouselPosition]); // Trigger scrolling when carouselPosition changes

  return (
    <Container>
      <CarouselContainer >
        <Carousel >
          {categories?.sort((a, b) => b.priority - a.priority).map((category, index) => (
            <CarouselItem
              key={category.id}
              activeLanuguage={activeLanuguage}
              activeCategory={activeCategory}
              categoryId={category.id}
              onClick={() => itemClick(category.id,index)}
              index={index}
              ref={(el) => (carouselRefs.current[index] = el)} // Assign ref to each category item
            >
              <CategoryWrapper activeCategory={activeCategory} categoryId={category.id}>
                <TextContainer>
                  <CategoryName activeCategory={activeCategory} categoryId={category.id}>
                    {activeLanuguage === "en"
                      ? category.en_category
                      : category.ar_category}
                  </CategoryName>
                </TextContainer>
              </CategoryWrapper>
            </CarouselItem>
          ))}
        </Carousel>
      </CarouselContainer>
      {categories?.length > 4 && <ArrowIcon onClick={handleArrow} />}
    </Container>
  );
}
