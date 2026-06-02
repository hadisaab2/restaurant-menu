import React, { useState } from "react";
import {
  CategoryLink,
  CategoryLinkWrapper,
  CopyIcon,
  CopyWrite,
  InstagramLogo,
  InstagramLogoContainer,
  LinkContainer,
  LinkTitle,
  Media,
  MediaText,
  PoweredBy,
  ShareWrapper,
  SocialMediaContainer,
  Tick,
  Title,
  WhatsappLogo,
  WhatsappLogoContainer,
} from "./styles";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PopupShell from "../PopupShell";

export default function Share({ showPopup, popupHandler, activeCategory }) {
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

  const handleShareOnWhatsApp = (id) => {
    const baseUrl = window.location.origin + window.location.pathname;
    const categoryurl = baseUrl + "?categoryId=" + id;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(categoryurl)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleShareInsta = () => {
    window.open("https://www.instagram.com/direct/inbox/", "_blank");
  };

  const getLink = (id) => {
    if (id) {
      const baseUrl = window.location.origin + window.location.pathname;
      return baseUrl + "?categoryId=" + id;
    }
  };

  const [copied, setCopied] = useState(false);

  const copyLinkHandler = (id) => {
    const baseUrl = window.location.origin + window.location.pathname;
    navigator.clipboard.writeText(baseUrl + "?categoryId=" + id);
    setCopied(true);
    setTimeout(() => setCopied(false), 4000);
  };

  return (
    <PopupShell
      open={showPopup === "share"}
      onClose={() => popupHandler(null)}
      title={activeLanguage === "ar" ? "مشاركة" : "Share Category"}
    >
      <ShareWrapper>
        <SocialMediaContainer>
          <Media>
            <WhatsappLogoContainer onClick={() => handleShareOnWhatsApp(activeCategory)}>
              <WhatsappLogo />
            </WhatsappLogoContainer>
            <MediaText>Whatsapp</MediaText>
          </Media>
          <Media>
            <InstagramLogoContainer onClick={() => handleShareInsta()}>
              <InstagramLogo />
            </InstagramLogoContainer>
            <MediaText>Instagram</MediaText>
          </Media>
        </SocialMediaContainer>

        <LinkTitle>Get Link</LinkTitle>
        <LinkContainer>
          <CategoryLinkWrapper>
            <CategoryLink>{getLink(activeCategory)}</CategoryLink>
          </CategoryLinkWrapper>
          {!copied ? (
            <CopyIcon onClick={() => copyLinkHandler(activeCategory)} />
          ) : (
            <Tick />
          )}
        </LinkContainer>
      </ShareWrapper>
      <PoweredBy>
        Copyright
        <CopyWrite />
        2024 <Link href="https://www.menugic.com">menugic.com</Link>
      </PoweredBy>
    </PopupShell>
  );
}
