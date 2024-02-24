import React, { useState } from "react";
import { Container } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import {menu} from "./data"

export default function MenuMobile() {
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);

  return (
    <Container>
      <Header
        menu={menu}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}
      />
      <Menu
        menu={menu}
        activeCategory={activeCategory}
        animationchange={animationchange}
      />
    </Container>
  );
}
