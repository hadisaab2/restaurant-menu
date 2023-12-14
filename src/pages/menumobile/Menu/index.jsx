import React, { useState } from "react";
import { Container } from "./styles";
import VerticalCarousel from "./verticalcarousel";
import Plate from "./plate";




export default function Menu({plates,animationchange}) {
  const [activePlate, setactivePlate] = useState(0);

  return (
    <Container>
      <VerticalCarousel
        activePlate={activePlate}
        plates={plates}
        setactivePlate={setactivePlate}
        animationchange={animationchange}
      />
      <Plate activePlate={activePlate} plates={plates} />
    </Container>
  );
}
