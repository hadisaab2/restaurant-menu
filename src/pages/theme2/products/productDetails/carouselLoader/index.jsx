import React from "react";
import {
  ActiveCircle,
  ActiveCircleWrapper,
  ArrowRight,
  Circle,
  CircleWrapper,
  Container,
  SwipeAnimation,
  SwipeText,
  Wrapper,
} from "./styles";

export default function CarouselLoader({ carouselIndex, images, CloseAnimation, carouselSwiped }) {
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
      {!carouselSwiped && <SwipeAnimation>
        <SwipeText>Swipe</SwipeText>
        <ArrowRight />
      </SwipeAnimation>}

    </Container>
  );
}
