import React, { useState,useEffect } from "react";
import {
  CarouselItem,
  PlateContainer,
  Plate,
  LoaderWrapper,
  Loader,
  PlateName
} from "./styles";
export default function PlateItem({ plateitem, itemclick, index,key }) {
  const [imageLoaded, setimageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setimageLoaded(true);
  };
  return (
    <CarouselItem onClick={() => itemclick(index)} key={key}>
      <PlateContainer index={index}>
        {!imageLoaded && (
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        )}
        <Plate
          src={plateitem.image}
          onLoad={handleImageLoaded} // Call handleImageLoaded when image is loaded
        />
        <PlateName>{plateitem.nametop} {plateitem.namebottom}</PlateName>
      </PlateContainer>
    </CarouselItem>
  );
}
