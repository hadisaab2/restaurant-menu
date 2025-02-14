import React from "react";
import { Container, Logo, LogoImage, Text } from "./styles";
import menugic from "./menugic.png";
import { PulseLoader } from "react-spinners";
import "./styles.css";
export default function Loading({ restaurantName }) {
  return (
    <Container>
      {(restaurantName == "junkies"|| restaurantName == "restaurant" || restaurantName == "hassaneen" ) ?
        <LogoImage src={`https://storage.googleapis.com/ecommerce-bucket-testing/${restaurantName}`}/>
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
