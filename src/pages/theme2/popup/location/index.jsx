import React, { useState } from "react";
import {
  Container,
  Title,
  ResName,
  LocationLogo,
  Close,
  SocialMediaContainer,
  InstagramContainer,
  InstagramLogo,
  WhatsappContainer,
  WhatsappLogo,
  TiktokContainer,
  TiktokLogo,
  BranchesContainer,
  Branch,
  InfoContainer,
  Info,
  BranchInfo,
  CallLogo,
  MapsLogo,
  FacebookContainer,
  FacebookLogo,
  MapLink,
  PoweredBy,
  Link,
  CopyWrite,
} from "./styles";

export default function LocationPopup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
  const [activeBranch, setActiveBranch] = useState(restaurant?.branches[0]);
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      <Title>Welcome To </Title>
      <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      <BranchesContainer>
        {restaurant?.branches?.map((branch) => {
          return (
            <Branch
              onClick={() => setActiveBranch(branch)}
              activeBranch={activeBranch.id}
              BranchId={branch.id}
            >
              {branch.name}
            </Branch>
          );
        })}
      </BranchesContainer>
      <BranchInfo>
        {activeBranch?.location && (
          <InfoContainer>
            <LocationLogo />
            <Info>{activeBranch?.location}</Info>
          </InfoContainer>
        )}
        <InfoContainer>
          <CallLogo />
          <Info>{activeBranch?.phone_number}</Info>
        </InfoContainer>
        {activeBranch?.mapLink && (
          <InfoContainer>
            <MapsLogo />
            <MapLink href={`https://${activeBranch?.mapLink}`}>
              {activeBranch?.mapLink}
            </MapLink>
          </InfoContainer>
        )}
      </BranchInfo>

      <SocialMediaContainer>
        {restaurant.socialMedia.find(
          (media) => media.platform == "Instagram"
        ) && (
          <InstagramContainer
            href={`https://${
              restaurant.socialMedia.find(
                (media) => media.platform == "Instagram"
              ).link
            }`}
          >
            <InstagramLogo />
          </InstagramContainer>
        )}
        {restaurant.socialMedia.find(
          (media) => media.platform == "Whatsapp"
        ) && (
          <WhatsappContainer
            href={`https://${
              restaurant.socialMedia.find(
                (media) => media.platform == "Whatsapp"
              ).link
            }`}
          >
            <WhatsappLogo />
          </WhatsappContainer>
        )}
        {restaurant.socialMedia.find(
          (media) => media.platform == "Facebook"
        ) && (
          <FacebookContainer
            href={`https://${
              restaurant.socialMedia.find(
                (media) => media.platform == "Facebook"
              ).link
            }`}
          >
            <FacebookLogo />
          </FacebookContainer>
        )}
        {restaurant.socialMedia.find((media) => media.platform == "Tiktok") && (
          <TiktokContainer
            href={`https://${
              restaurant.socialMedia.find((media) => media.platform == "Tiktok")
                .link
            }`}
          >
            <TiktokLogo />
          </TiktokContainer>
        )}
      </SocialMediaContainer>

      <PoweredBy>
        Copyright
        <CopyWrite />
        2024 <Link href="https://www.menugic.com">menugic.com</Link>
      </PoweredBy>
    </Container>
  );
}
