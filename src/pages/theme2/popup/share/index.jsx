import React, { useEffect, useState } from "react";
import {
  CategoryLink,
  CategoryLinkWrapper,
  Close,
  Container,
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
import { TiTick } from "react-icons/ti";


export default function Share({
  showPopup,
  popupHandler,
  activeCategory
}) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" &&
      subdomain !== "localhost" &&
      subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );


  useEffect(() => {
    const handlePopState = () => {
      // Revert to the normal view when back is pressed
      popupHandler(null);
    };

    // Add event listener for popstate
    window.addEventListener("popstate", handlePopState);

    // Cleanup event listener
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);


  const handleShareOnWhatsApp = (id) => {
    const baseUrl = window.location.origin + window.location.pathname; // Get the base URL without query params
    const categoryurl = baseUrl + "?categoryId=" + id; // Append categoryId query parameter

    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(categoryurl)}`; // Create the WhatsApp URL with the encoded link

    window.open(whatsappUrl, '_blank'); // Open WhatsApp with the pre-filled message
  };
  const handleShareInsta = (id) => {
    window.open("https://www.instagram.com/direct/inbox/", "_blank");
  };

  

  const getLink = (id) => {
    if (id) {
      const baseUrl = window.location.origin + window.location.pathname; // Get the main host + pathname
      const categoryurl = baseUrl + "?categoryId=" + id
      return categoryurl;
    }
  }
  const [copied, setCopied] = useState(false);

  const copyLinkHandler = (id) => {
    const baseUrl = window.location.origin + window.location.pathname; // Get the main host + pathname
    navigator.clipboard.writeText(baseUrl + "?categoryId=" + id)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 4000);



  }
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      <ShareWrapper>
        <Title>Share</Title>
        <SocialMediaContainer>
          <Media>
            <WhatsappLogoContainer onClick={() => handleShareOnWhatsApp(activeCategory)}>
              <WhatsappLogo />
            </WhatsappLogoContainer>
            <MediaText>Whatsapp</MediaText>
          </Media>
          <Media>
            <InstagramLogoContainer onClick={() => handleShareInsta(activeCategory)}>
              <InstagramLogo />
            </InstagramLogoContainer>
            <MediaText>Instagram</MediaText>
          </Media>
        </SocialMediaContainer>
      

        <LinkTitle>Get Link</LinkTitle>
        <LinkContainer>
          <CategoryLinkWrapper><CategoryLink>{getLink(activeCategory)}</CategoryLink></CategoryLinkWrapper>
          {!copied ? <CopyIcon onClick={() => copyLinkHandler(activeCategory)} /> : <Tick />}


        </LinkContainer>
      </ShareWrapper>
      <PoweredBy>
        Copyright
        <CopyWrite />
        2024 <Link href="https://www.menugic.com">menugic.com</Link>
      </PoweredBy>
    </Container >
  );
}
