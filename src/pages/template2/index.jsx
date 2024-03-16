import React, { useState } from "react";
import { Container, MenuWrapper } from "./styles";
import { restaurantmenus } from "../../data";
import { useParams } from "react-router-dom";

export default function Template2() {
    const { restaurantname } = useParams();
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
