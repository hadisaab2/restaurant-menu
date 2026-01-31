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
  LeftArrowIcon
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useLogCategory } from "../../../../../apis/categories/logCategory";

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
  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );

  const { refetch } = useLogCategory({
    CategoryId: activeCategory,
  });


  const handleArrow = () => {
    if (carouselPosition < categories.length - 4) {
      setcarouselPosition(carouselPosition + 1);
    }
  }

  const handleLeftArrow = ()=>{
    if (carouselPosition >0) {
      setcarouselPosition(carouselPosition - 1);
    }
  }

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
      {(categories?.length > 4 && carouselPosition >= 1 ) && <LeftArrowIcon onClick={handleLeftArrow} />}
      <CarouselContainer
     
      >
        <Carousel carouselPosition={carouselPosition}>
          {categories?.sort((a, b) => b.priority - a.priority).map((category, index) => {
            return (
              <CarouselItem
                activeLanuguage={activeLanuguage}
                activeCategory={activeCategory}
                categoryId={category.id}
                onClick={() => itemClick(category.id,index)}
                ref={(el) => (carouselRefs.current[index] = el)} // Assign ref to each category item

                // onDoubleClick={() => handleDoubleClick(category.id)} // Attach double-click handler
                >
                <CategoryWrapper activeCategory={activeCategory} categoryId={category.id}>
                  <IconContainer >
                    <IconWrapper activeCategory={activeCategory} categoryId={category.id} >
                      <Icon 
                        src={
                          category.image_url 
                            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${category.image_url}`
                            : category.isAllItems && restaurant?.logoURL
                            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
                            : category.isAllItems && restaurant?.cover_url
                            ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.cover_url}`
                            : ""
                        } 
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
