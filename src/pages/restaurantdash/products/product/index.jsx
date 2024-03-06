import React from "react";
import {
  Container,
  Wrapper,
  Image,
  Title,
  ImageWrapper,
  InfoContainer,
  Category,
} from "./styles";

import pizza1 from "../../../../static/pizza1.png";
export default function Product() {
  return (
    <Container>
      <Wrapper>
        <ImageWrapper>
          <Image src={pizza1} />
        </ImageWrapper>
        <InfoContainer>
          <Title>Chicken Burger</Title>
          <Category>Burgers</Category>
        </InfoContainer>
      </Wrapper>
    </Container>
  );
}
