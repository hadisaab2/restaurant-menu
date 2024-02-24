import React, { useState } from "react";
import { Container } from "./styles";
import VerticalCarousel from "./verticalcarousel";
import Plate from "./plate";
export default function Menu({ menu, activeCategory, animationchange }) {
  const [activePlate, setactivePlate] = useState(0);

  return (
    <Container>
      {menu.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <VerticalCarousel
              activePlate={activePlate}
              plates={singlemenu.items}
              setactivePlate={setactivePlate}
              animationchange={animationchange}
            />
          );
        }
      })}

      <Plate activePlate={activePlate} menu={menu[activeCategory].items} />
    </Container>
  );
}
