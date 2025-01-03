import React, { useState, useRef } from "react";
import {
  Container,
  CarouselContainer,
  Carousel,
  CarouselItem,
  LineContainer,
  LineBox,
  Line,
  CategoryName
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


export default function Categories({
  categories,
  activeCategory,
  setactiveCategory,
  animationchange,
  setanimationchange,
}) {
  const [carouselPosition, setcarouselPosition] = useState(0);
  const [scrollInProgress, setScrollInProgress] = useState(false);
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

  const touchStartX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - touchStartX.current;

    // Add a flag to check if the scroll action is in progress
    if (!scrollInProgress) {
      setScrollInProgress(true);
      if (deltaX > 0) {
        if (carouselPosition > 0) {
          setcarouselPosition(carouselPosition - 1);
        }
      } else {
        if (carouselPosition < categories.length - 4) {
          setcarouselPosition(carouselPosition + 1);
        }
      }

      touchStartX.current = currentX;
    }
  };

  const handleTouchEnd = () => {
    touchStartX.current = 0;
    setScrollInProgress(false);
  };

  const itemClick = (index) => {
    setactiveCategory(index);
    setanimationchange(!animationchange);
  };
  return (
    <Container>
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Carousel carouselPosition={carouselPosition}>
          {categories?.map((category, index) => {
            return (
              <CarouselItem
                activeLanuguage={activeLanuguage}
                activeCategory={activeCategory}
                index={index}
                onClick={() => itemClick(index)}
              >
                <CategoryName>
                {activeLanuguage == "en"
                  ? category.en_category
                  : category.ar_category}
                  </CategoryName>
              </CarouselItem>
            );
          })}
        </Carousel>
        <LineContainer>
          <LineBox
            activeCategory={activeCategory}
            carouselPosition={carouselPosition}
          >
            <Line />
          </LineBox>
        </LineContainer>
      </CarouselContainer>
    </Container>
  );
}
