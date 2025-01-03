import React from "react";
import { Container, Logo, Text } from "./styles";
import menugic from "./menugic.png";
import { PulseLoader } from "react-spinners";
import "./styles.css";
export default function Loading() {
  return (
    <Container>
      {/* <Logo src={menugic} /> */}
      {/* <Text> Almost there! Your unique shopping journey is loading</Text>
      <PulseLoader style={{marginTop:"20px"}}  speedMultiplier={0.7} size={10} color="white" /> */}
      <div class="container">
        <div class="text-animation">
          <div class="text-wrapper">
            <span>LOADING</span>
            <span>LOADING</span>
          </div>
        </div>
      </div>
    </Container>
  );
}
