import React, { useState, useRef } from "react";
import {
  Container,
  CarouselContainer,
  Carousel,
  CarouselItem,
  PlateContainer,
  Plate,
  PlateName,
  ArrowUp,
  ArrowDown,
  BoxContainer,
  Box
} from "./styles";

export default function VerticalCarousel({ plates,setactivePlate,activePlate,animationchange }) {
  const [carouselPosition, setcarouselPosition] = useState(0);
  const [scrollInProgress, setScrollInProgress] = useState(false);
  const touchStartY = useRef(0);

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    const currentY = e.touches[0].clientY;
    const deltaY = currentY - touchStartY.current;

    // Add a flag to check if the scroll action is in progress
    if (!scrollInProgress) {
      setScrollInProgress(true);
      if (deltaY > 0) {
        if (carouselPosition > 1) {
          setcarouselPosition(carouselPosition - 2);
        }
      } else {
        if (carouselPosition < plates.length - 7) {
          setcarouselPosition(carouselPosition + 2);
        }
      }

      touchStartY.current = currentY;
    }
  };

  const handleTouchEnd = () => {
    touchStartY.current = 0;
    setScrollInProgress(false);
  };

  const itemclick = (index)=>{
    setactivePlate(index)
  }
  return (
    <Container>
      <CarouselContainer
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <BoxContainer activePlate={activePlate} carouselPosition={carouselPosition}>
          <Box/>
        </BoxContainer>
        <Carousel carouselPosition={carouselPosition}>
          {plates.map((plateitem, index) => {
            return (
              <CarouselItem onClick={()=>itemclick(index)}>
                <PlateContainer index={index}>
                  <Plate src={plateitem.image} animationchange={animationchange}/>
                  {/* <PlateName>{plateitem.name}</PlateName> */}
                </PlateContainer>
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselContainer>
    </Container>
  );
}
