import React, { useState } from "react";
import { Container } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";

export default function Header({ activeCategory, setactiveCategory, plates,setanimationchange,animationchange }) {
  return (
    <Container>
      <HeaderTop />
      <Categories
        categories={plates}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}

      />
    </Container>
  );
}
