import React from "react";
import {
  Container,
  Title,
  ResName,
  LocationTitle,
  LocTitle,
  Location,
  LocationsContainer,
  Loc,
  NumberTitle,
  NumberLogo,
  NumTitle,
  Num,
  NumbersContainer,
  Close,
  SocialMediaContainer,
  LogoContainer,
  InstagramContainer,
  InstagramLogo,
  WhatsappContainer,
  WhatsappLogo,
  TiktokContainer,
  TiktokLogo,
} from "./styles";

export default function Popup({ showPopup, popupHandler = { popupHandler } }) {
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(false);
        }}
      />
      <Title>Welcome To </Title>
      <ResName>Addict Burger</ResName>
      <LocationTitle>
        <Location />
        <LocTitle>Location</LocTitle>
      </LocationTitle>
      <LocationsContainer>
        <Loc>1. Beirut | Hadi Nasrallah St, Facing AlSharek Sweet </Loc>
        <Loc>2. Nabatieh | Mahmoud Fakih St </Loc>
      </LocationsContainer>
      <NumberTitle>
        <NumberLogo />
        <NumTitle>Contact</NumTitle>
      </NumberTitle>
      <NumbersContainer>
        <Num>1. Beirut 01274929 | 70771432 | 03615688</Num>
        <Num>2. Nabatieh 07763503 | 71181987 | 81076363</Num>
      </NumbersContainer>
      <SocialMediaContainer>
        <InstagramContainer>
          <InstagramLogo />
        </InstagramContainer>
        <WhatsappContainer>
          <WhatsappLogo />
        </WhatsappContainer>
        <TiktokContainer>
          <TiktokLogo />
        </TiktokContainer>
      </SocialMediaContainer>
    </Container>
  );
}
