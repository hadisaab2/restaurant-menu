import React, { useState } from "react";
import { Container, DetailsBtn, Location, MenuWrapper } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import { restaurantmenus } from "../../data";
import Offers from "./Offers";
import { useParams } from "react-router-dom";
import Popup from "./popup";

export default function Theme1() {
  const { restaurantName } = useParams();
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);
  const [showPopup, setshowPopup] = useState(false);
  const popupHandler = (show) => {
    setshowPopup(show);
  };
  let menu = restaurantmenus.find(
    (restaurant) => restaurant.name === restaurantName
  ).menu;
  return (
    <Container >
      <MenuWrapper showPopup={showPopup}>
        <Header
          menu={menu}
          activeCategory={activeCategory}
          setactiveCategory={setactiveCategory}
          setanimationchange={setanimationchange}
          animationchange={animationchange}
        />
        <Offers
          offers={menu.find((category) => category.category === "Offers")}
          activeCategory={activeCategory}
        />
        <Menu
          menu={menu}
          activeCategory={activeCategory}
          animationchange={animationchange}
        />
      </MenuWrapper>

      <DetailsBtn onClick={() => popupHandler(true)}>
        <Location />
      </DetailsBtn>
      <Popup showPopup={showPopup} popupHandler={popupHandler} />
    </Container>
  );
}
