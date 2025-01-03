import React from "react";
import {
  ActiveCircle,
  ActiveCircleWrapper,
  Circle,
  CircleWrapper,
  Container,
  Wrapper,
} from "./styles";

export default function CarouselLoader({ carouselIndex, images,CloseAnimation }) {
  return (
    <Container CloseAnimation={CloseAnimation}>
      <Wrapper>
        <ActiveCircleWrapper carouselIndex={carouselIndex}>
          <ActiveCircle />
        </ActiveCircleWrapper>
        {images.map((image) => {
          return (
            <CircleWrapper>
              <Circle />
            </CircleWrapper>
          );
        })}
      </Wrapper>
    </Container>
  );
}
