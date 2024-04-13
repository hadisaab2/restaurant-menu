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
import { useParams } from "react-router-dom";
import categoryicon from "./categoryicon.png";
import categoryicon2 from "./categoryicon2.png";
import perfume from "./perfume.png";

export default function Categories({
  categories,
  activeCategory,
  setactiveCategory,
}) {
  const [carouselPosition, setcarouselPosition] = useState(0);
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const { restaurantName } = useParams();
  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

  const touchStartX = useRef(0);
  const handleArrow = ()=>{
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
              >
                <CategoryWrapper activeCategory={activeCategory} categoryId={category.id}>
                  <IconContainer >
                    <IconWrapper activeCategory={activeCategory} categoryId={category.id} >
                      {/* <Icon src={`https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`} /> */}
                      <Icon src={perfume} />

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
      {categories?.length>4 && <ArrowIcon onClick={handleArrow}/>}
    </Container>
  );
}
