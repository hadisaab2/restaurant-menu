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
<<<<<<< HEAD
  TitleContainer,
=======
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
<<<<<<< HEAD
      <TitleContainer>
        <Title>Welcome To </Title>
        <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      </TitleContainer>

      <BranchesContainer>
        {restaurant?.branches?.map((branch) => {
          return (
            branch.name && 
=======
      <Title>Welcome To </Title>
      <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      <BranchesContainer>
        {restaurant?.branches?.map((branch) => {
          return (
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
            <Branch
              onClick={() => setActiveBranch(branch)}
              activeBranch={activeBranch.id}
              BranchId={branch.id}
            >
              {branch.name}
            </Branch>
<<<<<<< HEAD
            
=======
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
<<<<<<< HEAD
          <Info href={`tel:${activeBranch?.phone_number}`}>{activeBranch?.phone_number}</Info>
=======
          <Info>{activeBranch?.phone_number}</Info>
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
<<<<<<< HEAD
            <InstagramContainer
              href={`https://${restaurant.socialMedia.find(
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
              href={`https://${restaurant.socialMedia.find(
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
              href={`https://${restaurant.socialMedia.find(
                (media) => media.platform == "Facebook"
              ).link
                }`}
            >
              <FacebookLogo />
            </FacebookContainer>
          )}
        {restaurant.socialMedia.find((media) => media.platform == "Tiktok") && (
          <TiktokContainer
            href={`https://${restaurant.socialMedia.find((media) => media.platform == "Tiktok")
              .link
              }`}
=======
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
>>>>>>> 9d9e172828a11d102f723d7bf03f5a89d5a93e80
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
