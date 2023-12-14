import React from "react";
import {
  Container,
  Carousel,
  CarouselItem,
  Plate,
  PlateName,
  ArrowLeft,
  ArrowRight,
  CarouselContainer,
  PlateContainer
} from "./styles";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function LinearCarousel({
  plates,
  activeIndex,
  setactiveIndex,
}) {
  const handleright = () => {
    if(activeIndex<plates.length-1){
      setactiveIndex(activeIndex + 1);

    }
  };
  const handleleft = () => {
    if(activeIndex>0){
      setactiveIndex(activeIndex - 1);
    }
  };

  const handleclick = (index)=>{
    setactiveIndex(index)
  }
  return (
    <Container>
      <FaAngleRight style={ArrowRight} onClick={handleright} />

      <CarouselContainer>
        <Carousel activeIndex={activeIndex}>
          {plates.map((plateitem, index) => {
            return (
              <CarouselItem onClick={()=>handleclick(index)} >
                <PlateContainer activeIndex={activeIndex} index={index}>
                  <Plate src={plateitem.image} />
                  <PlateName>{plateitem.name}</PlateName>
                </PlateContainer>
              </CarouselItem>
            );
          })}
        </Carousel>
      </CarouselContainer>
      <FaAngleLeft style={ArrowLeft} onClick={handleleft} />
    </Container>
  );
}
