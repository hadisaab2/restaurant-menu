import React, { useState } from "react";
import { Container } from "./styles";
import Categories from "./categories";
import HeaderTop from "./headertop";

export default function Header({ activeCategory, setactiveCategory, menu,setanimationchange,animationchange }) {
  return (
    <Container>
      <HeaderTop />
      <Categories
        categories={menu}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}

      />
    </Container>
  );
}
