import React, { useState } from "react";
import {
  Container, 
} from "./styles";
import Branches from "./branches";
import SocialMedia from "./socialmedia";


export default function Settings() {
  
  return (
    <Container>
        <Branches/>
        <SocialMedia/>
    </Container>
  );
}
