import React, { useEffect, useState } from "react";
import { Container, Logo, LogoImage, Text } from "./styles";
import { PulseLoader } from "react-spinners";
import "./styles.css";
const backgroundColors=[
  {
    name:"kacodoner",
    color:"rgb(255 233 226)",
  },
  {
    name:"aldaouksweets",
    color:"#E1DBCA",
  },
  {
    name:"junkies",
    color:"black",
  },
  {
    name:"cheeseboard",
    color:"#194b70",
  },
  {
    name:"balloweenevent",
    color:"white"
  },
  {
    name:"the1burger",
    color:"#038796"
  },
  {
    name:"alsharqsweets",
    color:"white"
  }
]
export default function Loading({ restaurantName,viewLoading }) {
  const [removeAnimation,setRemoveAnimation]=useState(false)
  const [imagesrc,setImagesrc]=useState("emptysrc")

  const restaurant = backgroundColors.find(
    (bg) => bg.name.toLowerCase() === restaurantName.toLowerCase()
  );

  useEffect(()=>{
    if(viewLoading){
      const timer = setTimeout(() => {
        setRemoveAnimation(true);
      }, 1000);
    }
  },[viewLoading])
  return (
    
    <Container viewLoading={viewLoading} bg={restaurant?restaurant.color:"black"}>
      {(restaurantName == "junkies" || restaurantName == "kacodoner" || restaurantName == "aldaouksweets" || restaurantName=="cheeseboard"|| restaurantName=="balloweenevent" || restaurantName=="the1burger"||restaurantName=="alsharqsweets") ?
        <>
          <LogoImage src={!removeAnimation?`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurantName}`:""} />
           {/* {restaurantName=="junkies" && <BouncingLoader /> } */}
        </>

        :
        <div class="container">
          <div class="text-animation">
            <div class="text-wrapper">
              <h2>LOADING</h2>
              <h2>LOADING</h2>
            </div>
          </div>
        </div>
      }
    </Container>
  );
}
