import React, { useState } from "react";
import { Container } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import { restaurantmenus } from "../../data";
import Offers from "./Offers";
import { useParams } from 'react-router-dom';

export default function Theme1({ showPopup }) {
  const { restaurantname } = useParams();
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);
  let menu=restaurantmenus.find((restaurant) => restaurant.name === restaurantname).menu
  return (
    <Container showPopup={showPopup}>
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
    </Container>
  );
}
