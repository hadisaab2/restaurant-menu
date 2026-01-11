import React from "react";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import VerticalCategory from "./verticalCategory";
import HorizantalWithoutIcon from "./horizantalWithoutIcon";

export default function Categories({
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


  const restaurant = useSelector(
    (state) => state.restaurant?.[restaurantName]
  );


  return (
    <>
      {restaurant.category_type == "vertical-category" &&
        <VerticalCategory
          categories={categories}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
          carouselPosition={carouselPosition}
          setcarouselPosition={setcarouselPosition} />}
      {restaurant.category_type == "horizantal-withoutIcon" &&
        <HorizantalWithoutIcon
          categories={categories}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
          carouselPosition={carouselPosition}
          setcarouselPosition={setcarouselPosition} />}
    </>
  );
}
