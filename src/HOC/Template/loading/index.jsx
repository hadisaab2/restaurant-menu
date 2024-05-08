import React from "react";
import { Container, Logo, Text } from "./styles";
import menugic from "./menugic.png";
import { PulseLoader  } from "react-spinners";
export default function Loading() {
  return (
    <Container>
      {/* <Logo src={menugic} /> */}
      <Text> Bringing Your Menu to Life.</Text>
      <PulseLoader style={{marginTop:"20px"}}  speedMultiplier={0.7} size={10} color="white" />

    </Container>
  );
}
