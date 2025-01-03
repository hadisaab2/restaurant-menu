import React, { useState,useEffect } from "react";
import {
  CarouselItem,
  PlateContainer,
  Plate,
  LoaderWrapper,
  Loader,
  PlateName
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function PlateItem({ plateitem, itemclick, index,key }) {
  const { restaurantName: paramRestaurantName } = useParams();
  
  const hostname = window.location.hostname;
  const subdomain = hostname.split('.')[0];

  // Determine the restaurant name to use
  const restaurantName = (subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www") 
    ? subdomain 
    : paramRestaurantName;
    
    const activeLanuguage = useSelector((state) => state.restaurant?.[restaurantName].activeLanguage);

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
        <PlateName>{activeLanuguage==="en"?plateitem.en_name:plateitem.ar_name}</PlateName>
      </PlateContainer>
    </CarouselItem>
  );
}
