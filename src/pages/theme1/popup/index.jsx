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
} from "./styles";

export default function Popup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
  const [activeBranch, setActiveBranch] = useState(restaurant?.branches[0]);
  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function(char) {
        return char.toUpperCase();
    });
}
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(false);
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
        <InfoContainer>
          <LocationLogo />
          <Info>{activeBranch?.location}</Info>
        </InfoContainer>
        <InfoContainer>
          <CallLogo />
          <Info>01274929 | 70771432 | 03615688</Info>
        </InfoContainer>
        <InfoContainer>
          <MapsLogo />
          <Info>{activeBranch?.mapLink}</Info>
        </InfoContainer>
      </BranchInfo>

      <SocialMediaContainer>
        {restaurant.socialMedia.find((media) => media.platform == "Instagram") && (
          <InstagramContainer href={`https://${restaurant.socialMedia.find((media) => media.platform == "Instagram").link}`}>
            <InstagramLogo />
          </InstagramContainer>
        )}
        {restaurant.socialMedia.find((media) => media.platform == "Whatsapp") && (
          <WhatsappContainer>
          <WhatsappLogo />
        </WhatsappContainer>
        )}
      {restaurant.socialMedia.find((media) => media.platform == "Facebook") && (
          <FacebookContainer>
          <FacebookLogo />
        </FacebookContainer>
        )}
        {restaurant.socialMedia.find((media) => media.platform == "Tiktok") && (
        <TiktokContainer>
        <TiktokLogo />
      </TiktokContainer>
        )}

      </SocialMediaContainer>
    </Container>
  );
}
