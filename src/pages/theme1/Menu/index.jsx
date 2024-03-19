import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import VerticalCarousel from "./verticalcarousel";
import Plate from "./plate";
export default function Menu({ menu, activeCategory, animationchange }) {
  const [activePlate, setactivePlate] = useState(0);
  const[scrollChecker,setScrollChecker]=useState(false);

  useEffect(()=>{
    setactivePlate(0)
  },[activeCategory])
  return (
    <Container activeCategory={activeCategory}>
      {menu?.map((singlemenu, index) => {
        if (activeCategory == index) {
          return (
            <VerticalCarousel
              activePlate={activePlate}
              plates={singlemenu?.products}
              setactivePlate={setactivePlate}
              animationchange={animationchange}
              setScrollChecker={setScrollChecker}
            />
          );
        }
      })}

      <Plate activePlate={activePlate} menu={menu?.[activeCategory].products} scrollChecker={scrollChecker} />
    </Container>
  );
}
