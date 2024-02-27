import React, { useState } from "react";
import { Container } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import { menu } from "./data";
import Offers from "./Offers";

export default function MenuMobile({ showPopup }) {
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);

  return (
    <Container showPopup={showPopup}>
      <Header
        menu={menu}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}
      />
      {activeCategory === 0 ? (
        <Offers
          offers={menu.find((category) => category.category === "Offers")}
        />
      ) : (
        <Menu
          menu={menu}
          activeCategory={activeCategory}
          animationchange={animationchange}
        />
      )}
    </Container>
  );
}
