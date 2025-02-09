import React, { useState, useRef } from "react";
import {
  Container,
  CarouselContainer,
  Carousel,
  CarouselItem,
  CategoryName,
  CategoryWrapper,
  IconWrapper,
  IconContainer,
  TextContainer,
  Icon,
  ArrowIcon,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import categoryicon from "./categoryicon.png";
import categoryicon2 from "./categoryicon2.png";
import perfume from "./perfume.png";

export default function Categories({
  categories,
  activeCategory,
  setactiveCategory,
  carouselPosition,
  setcarouselPosition
}) {
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];
  const [searchParams, setSearchParams] = useSearchParams();

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www")
    ? subdomain
    : paramRestaurantName;

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const touchStartX = useRef(0);
  const handleArrow = () => {
    if (carouselPosition < categories.length - 4) {
      setcarouselPosition(carouselPosition + 1);
    }
  }
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

  const itemClick = (id) => {
    setactiveCategory(id);

  };

  const touchStartTime = useRef(0); // Store the time when the press starts

  const TouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartTime.current = Date.now(); // Record the time the press starts
  };

  const TouchEnd = (id) => {
    const touchDuration = Date.now() - touchStartTime.current; // Calculate how long the press was

    // If the press was held long enough (e.g., 1000ms), it's considered a long press
    if (touchDuration >= 600) {
      const fullUrl = window.location.href; // Copies full URL including pathname and search params
      navigator.clipboard.writeText(fullUrl + "?categoryId=" + id)

    }
  };


  return (
    <Container>
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Carousel carouselPosition={carouselPosition}>
          {categories?.sort((a, b) => b.priority - a.priority).map((category, index) => {
            return (
              <CarouselItem
                activeLanuguage={activeLanuguage}
                activeCategory={activeCategory}
                categoryId={category.id}
                onClick={() => itemClick(category.id)}
                onTouchStart={TouchStart} // Start the touch event for long press
                onTouchEnd={() => TouchEnd(category.id)} // Handle end of touch for long press
                ref={touchStartTime}
              >
                <CategoryWrapper activeCategory={activeCategory} categoryId={category.id}>
                  <IconContainer >
                    <IconWrapper activeCategory={activeCategory} categoryId={category.id} >
                      <Icon src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`} />
                      {/* <Icon src={perfume} /> */}

                    </IconWrapper>
                  </IconContainer>
                  <TextContainer>
                    <CategoryName activeCategory={activeCategory} categoryId={category.id}>
                      {activeLanuguage == "en"
                        ? category.en_category
                        : category.ar_category}
                    </CategoryName>
                  </TextContainer>
                </CategoryWrapper>
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselContainer>
      {categories?.length > 4 && <ArrowIcon onClick={handleArrow} />}
    </Container>
  );
}
