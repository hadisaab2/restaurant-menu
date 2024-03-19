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
          src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plateitem.image.url}`}
          onLoad={handleImageLoaded} // Call handleImageLoaded when image is loaded
        />
        <PlateName>{plateitem.en_name}</PlateName>
      </PlateContainer>
    </CarouselItem>
  );
}
