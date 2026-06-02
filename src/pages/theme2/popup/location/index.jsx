import React, { useState } from "react";
import {
  Title,
  ResName,
  SocialMediaContainer,
  InstagramContainer,
  InstagramLogo,
  TiktokContainer,
  TiktokLogo,
  BranchesContainer,
  Branch,
  BranchInfo,
  FacebookContainer,
  FacebookLogo,
  TitleContainer,
  ButtonFilled,
  ButtonBorder,
  ButttonWrapper,
  BranchSpan,
  BranchWrapper,
  BranchIconWrapper,
  LineContainer,
  Line,
  SocialMediaTitle,
  SocialMediaTitleWrapper,
  ShadeBox,
  ChoosePlaceHolder,
  ShadeBorder,
  Arrow,
  OptionsList,
  Option,
  PoweredBy,
  Link,
  CopyWrite
} from "./styles";
import { LuPhoneCall } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PopupShell from "../PopupShell";

export default function LocationPopup({
  restaurant,
  showPopup,
  popupHandler
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );
  const [activeButton, setActiveButton] = useState("");

  function capitalizeWords(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase();
    });
  }

  const handleCallButton = () => {
    setActiveButton(activeButton === "Call" ? "" : "Call");
  };

  const handleMessageButton = () => {
    setActiveButton(activeButton === "Message" ? "" : "Message");
  };

  return (
    <PopupShell
      open={showPopup === "location"}
      onClose={() => popupHandler(null)}
      title={activeLanguage === "en" ? "Contact" : "تواصل معنا"}
    >
      <TitleContainer>
        <ResName>{capitalizeWords(restaurant?.name)}</ResName>
      </TitleContainer>
      <ButttonWrapper>
        <ButtonFilled activeButton={activeButton} onClick={handleCallButton}>
          {activeButton !== "Call" ? (
            <>
              <LuPhoneCall size={"25px"} />
              {activeLanguage === "en" ? "Call Now" : "اتصل الان"}
            </>
          ) : (
            <>
              <OptionsList activeButton={activeButton}>
                {restaurant?.branches?.flatMap((branch) =>
                  branch.phone_number.split(" ").map((phone, index) => (
                    <Option key={`call-${branch.id}-${index}`}>
                      <a href={`tel:${phone}`} style={{ textDecoration: "none", color: "inherit" }}>
                        {phone} {branch.location && <span>- {branch.name}</span>}
                      </a>
                    </Option>
                  ))
                )}
              </OptionsList>
              <ShadeBox activeButton={activeButton}>
                <ShadeBorder activeButton={activeButton} />
              </ShadeBox>
              <ChoosePlaceHolder activeButton={activeButton}>
                {activeLanguage === "en" ? "Choose Number" : "اختر رقم"}
              </ChoosePlaceHolder>
              <Arrow activeButton={activeButton} />
            </>
          )}
        </ButtonFilled>
        <ButtonBorder activeButton={activeButton} onClick={handleMessageButton}>
          {activeButton !== "Message" ? (
            <>
              <FaWhatsapp size={"25px"} />
              {activeLanguage === "en" ? "Message" : "رسالة"}
            </>
          ) : (
            <>
              <OptionsList activeButton={activeButton}>
                {restaurant?.branches?.map((branch) => (
                  <Option key={`msg-${branch.id}`}>
                    <a
                      href={`https://wa.me/${
                        branch?.whatsapp_number?.startsWith("961")
                          ? branch?.whatsapp_number
                          : "961" + branch?.whatsapp_number
                      }`}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      {branch?.whatsapp_number}-{branch?.name}
                    </a>
                  </Option>
                ))}
              </OptionsList>
              <ShadeBox activeButton={activeButton}>
                <ShadeBorder activeButton={activeButton} />
              </ShadeBox>
              <ChoosePlaceHolder activeButton={activeButton}>
                {activeLanguage === "en" ? "Choose Number" : "اختر رقم"}
              </ChoosePlaceHolder>
              <Arrow activeButton={activeButton} />
            </>
          )}
        </ButtonBorder>
      </ButttonWrapper>

      <BranchInfo>
        {restaurant?.branches?.name && <BranchSpan>Branches</BranchSpan>}
        <BranchesContainer>
          {restaurant?.branches?.map((branch, index) => {
            return (
              branch.name && (
                <BranchWrapper key={branch.id || index}>
                  {index !== restaurant?.branches?.length - 1 && (
                    <LineContainer index={index}>
                      <Line />
                    </LineContainer>
                  )}
                  <BranchIconWrapper>
                    <FaLocationDot />
                  </BranchIconWrapper>
                  <Branch href={`https://${branch?.mapLink}`}>
                    {branch.location}
                  </Branch>
                </BranchWrapper>
              )
            );
          })}
        </BranchesContainer>
      </BranchInfo>

      <SocialMediaTitleWrapper>
        <SocialMediaTitle>
          {activeLanguage === "en" ? "Follow Us" : "تابعنا"}
        </SocialMediaTitle>
      </SocialMediaTitleWrapper>
      <SocialMediaContainer>
        {restaurant.socialMedia.find((m) => m.platform === "Instagram") && (
          <InstagramContainer
            href={`https://${restaurant.socialMedia.find((m) => m.platform === "Instagram").link}`}
          >
            <InstagramLogo />
          </InstagramContainer>
        )}
        {restaurant.socialMedia.find((m) => m.platform === "Facebook") && (
          <FacebookContainer
            href={`https://${restaurant.socialMedia.find((m) => m.platform === "Facebook").link}`}
          >
            <FacebookLogo />
          </FacebookContainer>
        )}
        {restaurant.socialMedia.find((m) => m.platform === "Tiktok") && (
          <TiktokContainer
            href={`https://${restaurant.socialMedia.find((m) => m.platform === "Tiktok").link}`}
          >
            <TiktokLogo />
          </TiktokContainer>
        )}
      </SocialMediaContainer>

      <PoweredBy>
        Copyright<CopyWrite /> {new Date().getFullYear()}{" "}
        <Link href="https://www.menugic.com">menugic.com</Link>
      </PoweredBy>
    </PopupShell>
  );
}
