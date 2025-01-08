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
  TitleContainer,
  ButtonFilled,
  ButtonBorder,
  ButttonWrapper,
  BranchSpan,
  BranchWrapper,
  BranchIconWrapper,
  BranchIcon,
  LineContainer,
  Line,
  Iconhole,
  SocialMediaTitle,
  SocialMediaTitleWrapper,
  ShadeBox,
  ChoosePlaceHolder,
  ShadeBorder,
  Arrow,
  OptionsList,
  Option
} from "./styles";
import { LuPhoneCall } from "react-icons/lu";
import { TiMessage } from "react-icons/ti";

export default function LocationPopup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
  const [activeBranch, setActiveBranch] = useState(restaurant?.branches[0]);
  const [callOpened, setCallOpened] = useState(false);

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
      <TitleContainer>
        <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      </TitleContainer>
      <ButttonWrapper>
        <ButtonFilled callOpened={callOpened} onClick={() => { setCallOpened(!callOpened) }}>
          {!callOpened ?
            <>
              <LuPhoneCall size={"25px"} />Call Now
            </>
            : <>
              <OptionsList callOpened={callOpened}>
                {restaurant?.branches?.flatMap(branch =>
                  branch.phone_number.split(" ").map((phone, index) => (
                    <Option>
                      <a href={`tel:${phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {phone} ({branch.location})
                      </a>
                    </Option>
                  ))
                )}
              </OptionsList>
              <ShadeBox>
                <ShadeBorder />
              </ShadeBox>
              <ChoosePlaceHolder>
                Choose Number
              </ChoosePlaceHolder>
              <Arrow callOpened={callOpened} />


            </>}

        </ButtonFilled>
        <ButtonBorder>
          <TiMessage size={"30px"} />
          Message
        </ButtonBorder>

      </ButttonWrapper>

      {/* <BranchesContainer>
        {restaurant?.branches?.map((branch) => {
          return (
            branch.name && 
            <Branch
              onClick={() => setActiveBranch(branch)}
              activeBranch={activeBranch.id}
              BranchId={branch.id}
            >
              {branch.name}
            </Branch>
            
          );
        })}
      </BranchesContainer> */}
      <BranchInfo>
        <BranchSpan>Branches</BranchSpan>
        <BranchesContainer>

          {restaurant?.branches?.map((branch, index) => {
            return (
              branch.name &&
              <>
                <BranchWrapper>
                  {index !== restaurant?.branches?.length - 1 && <LineContainer index={index}>
                    <Line />
                  </LineContainer>}
                  <BranchIconWrapper>
                    <Iconhole />
                    <BranchIcon />
                  </BranchIconWrapper>
                  <Branch
                    href={`https://${branch?.mapLink}`}

                  >
                    {branch.location}
                  </Branch>
                </BranchWrapper>
              </>
            );
          })}
        </BranchesContainer>
       
      </BranchInfo>
      <SocialMediaTitleWrapper>
        <SocialMediaTitle>Follow Us</SocialMediaTitle>
      </SocialMediaTitleWrapper>
      <SocialMediaContainer>
        {restaurant.socialMedia.find(
          (media) => media.platform == "Instagram"
        ) && (
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
