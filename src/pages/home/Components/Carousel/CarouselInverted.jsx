import React from "react";
import styled, { keyframes } from "styled-components";

// Calculate the keyframes dynamically for the inverted direction
const slideAnimationInverted = (trackWidth) => keyframes`
  0% { transform: translateX(-${trackWidth / 2}px); }
  100% { transform: translateX(0); }
`;

const CarouselWrapper = styled.div`
  overflow: hidden; /* Hide the overflow to ensure a clean carousel */
  width: 100%; /* Full width of the carousel */
  height: 120px; /* Adjust height to fit your content */
  position: relative;
`;

const Track = styled.div`
  display: flex;
  animation: ${(props) =>
    slideAnimationInverted(props.trackWidth)} ${(props) => props.duration}s linear infinite;
  width: ${(props) => props.trackWidth}px; /* Dynamically set the track width */
`;

const Item = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e8e8e8;
  width: 232px;
  border-radius: 14px;
`;

const Image = styled.img`
  width: auto;
  border-radius: 10px; /* Optional styling */
  max-width: 100px;
  max-height: 100px;
`;

const items = [
  {
    name: "yalunji",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1736080387300-ce22b88d-701a-43a5-b40d-3e409a5f2780_1-removebg-preview (1).svg",
    link:"https://yalunji.menugic.com"

  },
  {
    name: "walidFlower",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1714720286931-fe43c3dc-2f2c-4111-a0d7-e00b628bad59-removebg-preview.svg",
    link:"https://walidFlower.menugic.com"

  },
  {
    name: "bacherlights",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1714216387965-IMG-20240427-WA0065-removebg-preview.svg",
    link:"https://bacherlights.menugic.com"

  },
  {
    name: "theflowershop",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1713692650687-10560986_301435386703720_1643784321_a-removebg-preview.svg",
    link:"https://theflowershop.menugic.com"

  },
  {
    name: "glowvana",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1714810892590-be10d0ab-fcac-422d-97c1-5c53b9df2eda-removebg-preview.svg",
    link:"https://glowvana.menugic.com"

  },
  {
    name: "aldoauksweets",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1735600724733-470897863_1250703089551104_8662433934202922003_n-removebg-preview.svg",
    link:"https://aldoauksweets.menugic.com"

  },
  {
    name: "bodyboost",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1737311485437-textwithflaskBodyBoost (1).png",
    link:"https://bodyboost.menugic.com"

  },
];

export default function CarouselInverted() {
  const itemWidth = 232 + 20; // Item width + margin-right
  const trackWidth = items.length * itemWidth * 2; // Double the items for seamless looping
  const duration = items.length * 4; // Duration adjusts based on item count

  return (
    <CarouselWrapper>
      <Track trackWidth={trackWidth} duration={duration}>
        {/* Render carousel items */}
        {items.map((item, index) => (
          <Item key={`original-${index}`} onClick={() => window.location.href = item.link}>
            <Image src={item.logo} alt={item.name} />
          </Item>
        ))}
        {/* Duplicate items for seamless looping */}
        {items.map((item, index) => (
          <Item key={`duplicate-${index}`} onClick={() => window.location.href = item.link}>
            <Image src={item.logo} alt={item.name} />
          </Item>
        ))}
      </Track>
    </CarouselWrapper>
  );
}
