import React from "react";
import styled, { keyframes } from "styled-components";

// Calculate the keyframes dynamically
const slideAnimation = (trackWidth) => keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-${trackWidth / 2}px); }
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
    slideAnimation(props.trackWidth)} ${(props) => props.duration}s linear infinite;
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
  },
  {
    name: "magnifico",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1736967893061-410590808_776386197848578_970705798533961791_n-removebg-preview.svg",
  },
  {
    name: "balloweenevent",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1713873140213-balloween-event-logo-removebg-preview-2.svg",
  },
  {
    name: "theflowershop",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1713692650687-10560986_301435386703720_1643784321_a-removebg-preview.svg",
  },
  {
    name: "andysrolls",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1736077791504-312993080_6321930744490328_111076251399715480_n-removebg-preview (2).svg",
  },
  {
    name: "aldoauksweets",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1735600724733-470897863_1250703089551104_8662433934202922003_n-removebg-preview.svg",
  },
  {
    name: "bodyboost",
    logo: "https://storage.googleapis.com/ecommerce-bucket-testing/1737311485437-textwithflaskBodyBoost (1).png",
  },
];

export default function Carousel() {
  const itemWidth = 232 + 20; // Item width + margin-right
  const trackWidth = items.length * itemWidth * 2; // Double the items for seamless looping
  const duration = items.length * 4; // Duration adjusts based on item count

  return (
    <CarouselWrapper>
      <Track trackWidth={trackWidth} duration={duration}>
        {/* Render carousel items */}
        {items.map((item, index) => (
          <Item key={`original-${index}`}>
            <Image src={item.logo} alt={item.name} />
          </Item>
        ))}
        {/* Duplicate items for seamless looping */}
        {items.map((item, index) => (
          <Item key={`duplicate-${index}`}>
            <Image src={item.logo} alt={item.name} />
          </Item>
        ))}
      </Track>
    </CarouselWrapper>
  );
}
