import React, { useState } from "react";
import { Container } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import {plates} from "./data"

export default function MenuMobile() {
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);

  return (
    <Container>
      <Header
        plates={plates}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}
      />
      <Menu
        plates={plates[activeCategory].items}
        activeCategory={activeCategory}
        animationchange={animationchange}
      />
    </Container>
  );
}
