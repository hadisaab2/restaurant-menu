import React, { useState } from "react";
import { Container, DetailsBtn, Location, MenuWrapper } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import Offers from "./Offers";
import Popup from "./popup";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Theme1() {
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);
  const [showPopup, setshowPopup] = useState(false);


  const { restaurantName: paramRestaurantName } = useParams();
  
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www") 
    ? subdomain 
    : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  
  const popupHandler = (show) => {
    setshowPopup(show);
  };
  return (
    <Container>
      <MenuWrapper showPopup={showPopup}>
        
            <Header
              categories={restaurant.categories}
              activeCategory={activeCategory}
              setactiveCategory={setactiveCategory}
              setanimationchange={setanimationchange}
              animationchange={animationchange}
            />
            
            {/* <Offers
          offers={menu.find((category) => category.category === "Offers")}
          activeCategory={activeCategory}
        />
        */}
            <Menu
              menu={restaurant.categories}
              activeCategory={activeCategory}
              animationchange={animationchange}
            />
        
      </MenuWrapper>
      <DetailsBtn onClick={() => popupHandler(true)}>
        <Location />
      </DetailsBtn>
      <Popup restaurant={restaurant} showPopup={showPopup} popupHandler={popupHandler} />
    </Container>
  );
}
