import React, { useState,useEffect } from "react";
import {
  CarouselItem,
  PlateContainer,
  Plate,
  LoaderWrapper,
  Loader,
} from "./styles";
export default function PlateItem({ plateitem, itemclick, index }) {
  const [imageLoaded, setimageLoaded] = useState(false);
  const handleImageLoaded = () => {
    console.log("hiiii")
    setimageLoaded(true);
  };
  return (
    <CarouselItem onClick={() => itemclick(index)}>
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
      </PlateContainer>
    </CarouselItem>
  );
}