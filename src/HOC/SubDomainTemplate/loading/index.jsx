import React from "react";
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
  }
]
export default function Loading({ restaurantName,viewLoading }) {
  const restaurant = backgroundColors.find(
    (bg) => bg.name.toLowerCase() === restaurantName.toLowerCase()
  );
  return (
    <Container viewLoading={viewLoading} bg={restaurant?restaurant.color:"black"}>
      {(restaurantName == "junkies" || restaurantName == "kacodoner" || restaurantName == "aldaouksweets" || restaurantName=="cheeseboard") ?
        <>
          <LogoImage src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurantName}`} />
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
