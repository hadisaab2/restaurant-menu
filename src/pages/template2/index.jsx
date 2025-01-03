import React, { useState } from "react";
import { Container, MenuWrapper } from "./styles";
import { restaurantmenus } from "../../data";
import { useParams } from "react-router-dom";

export default function Template2() {
  const { restaurantName: paramRestaurantName } = useParams();
  
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www") 
    ? subdomain 
    : paramRestaurantName;


    let menu = restaurantmenus.find(
        (restaurant) => restaurant.name === restaurantname
      ).menu;
  const [activeCategory, setactiveCategory] = useState(0);
  return (
    <Container>
      <MenuWrapper>
        {/* <Header
          menu={menu}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
        /> */}
      </MenuWrapper>
    </Container>
  );
}
