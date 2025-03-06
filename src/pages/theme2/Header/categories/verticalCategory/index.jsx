import React, {useRef, useEffect } from "react";
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
import { useParams } from "react-router-dom";

export default function VerticalCategory({
  categories,
  activeCategory,
  setactiveCategory,
  carouselPosition,
  setcarouselPosition
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
  }

  const itemClick = (id) => {
    setactiveCategory(id);

  };

const carouselRef = useRef(null);


useEffect(() => {
  if (carouselRef.current) {
    const containerWidth = carouselRef.current.offsetWidth;
    const scrollTo = (carouselPosition * containerWidth) / 4;
    carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
  }
}, [carouselPosition]);

  return (
    <Container>
      <CarouselContainer
      ref={carouselRef}
     
      >
        <Carousel carouselPosition={carouselPosition}>
          {categories?.sort((a, b) => b.priority - a.priority).map((category, index) => {
            return (
              <CarouselItem
                activeLanuguage={activeLanuguage}
                activeCategory={activeCategory}
                categoryId={category.id}
                onClick={() => itemClick(category.id)}
                // onDoubleClick={() => handleDoubleClick(category.id)} // Attach double-click handler
                >
                <CategoryWrapper activeCategory={activeCategory} categoryId={category.id}>
                  <IconContainer >
                    <IconWrapper activeCategory={activeCategory} categoryId={category.id} >
                      <Icon src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`} 
                      />

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
