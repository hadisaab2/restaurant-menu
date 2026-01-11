import React, { useEffect } from "react";
import {
  Container,
  Close,
  Title,
  ContentContainer,
  Section,
  SectionTitle,
  BranchList,
  BranchItem,
  BranchName,
  LocationIconsContainer,
  LocationIconButton,
  SocialMediaSection,
  SocialMediaGrid,
  SocialLink,
  SocialIcon,
} from "./styles";
import { IoMdClose } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube, FaGlobe, FaTiktok } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

// Helper function to get social media icon
const getSocialIcon = (platform) => {
  const platformLower = platform?.toLowerCase() || "";
  if (platformLower.includes("facebook")) return <FaFacebook />;
  if (platformLower.includes("instagram")) return <FaInstagram />;
  if (platformLower.includes("tiktok")) return <FaTiktok />;
  if (platformLower.includes("twitter")) return <FaTwitter />;
  if (platformLower.includes("linkedin")) return <FaLinkedin />;
  if (platformLower.includes("youtube")) return <FaYoutube />;
  if (platformLower.includes("whatsapp")) return <FaWhatsapp />;
  return <FaGlobe />;
};

export default function ContactPopup({ showPopup, popupHandler, restaurant }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );

  const branches = restaurant?.branches || [];
  // Try both social_media (JSON string) and socialMedia (array) formats
  let socialMedia = {};
  let hasSocialMedia = false;
  
  if (restaurant?.social_media) {
    try {
      socialMedia = typeof restaurant.social_media === 'string' 
        ? JSON.parse(restaurant.social_media) 
        : restaurant.social_media;
      hasSocialMedia = Object.keys(socialMedia).length > 0;
    } catch (e) {
      socialMedia = {};
    }
  }
  
  // If no social_media JSON, try socialMedia array
  if (!hasSocialMedia && restaurant?.socialMedia && Array.isArray(restaurant.socialMedia)) {
    // Convert array format to object format
    restaurant.socialMedia.forEach(media => {
      if (media.platform && media.link) {
        const platform = media.platform.toLowerCase();
        socialMedia[platform] = media.link.startsWith('http') 
          ? media.link 
          : `https://${media.link}`;
      }
    });
    hasSocialMedia = Object.keys(socialMedia).length > 0;
  }

  useEffect(() => {
    const handlePopState = () => {
      popupHandler(null);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      <Title activeLanguage={activeLanguage}>
        {activeLanguage === "en" ? "Branches" : "الفروع"}
      </Title>

      <ContentContainer activeLanguage={activeLanguage}>
        {/* Branches Section */}
        {branches.length > 0 && (
          <Section>
            <SectionTitle activeLanguage={activeLanguage}>
              {activeLanguage === "en" ? "Our Locations" : "مواقعنا"}
            </SectionTitle>
            <BranchList>
              {branches.map((branch, index) => (
                <BranchItem key={index} activeLanguage={activeLanguage}>
                  <BranchName activeLanguage={activeLanguage}>
                    {branch.name}
                  </BranchName>
                  <LocationIconsContainer activeLanguage={activeLanguage}>
                    {branch.phone_number && (
                      <LocationIconButton
                        as="a"
                        href={`tel:${branch.phone_number.replace(/\s/g, "")}`}
                        phone
                        activeLanguage={activeLanguage}
                      >
                        <FaPhone />
                      </LocationIconButton>
                    )}
                    {branch.whatsapp_number && (
                      <LocationIconButton
                        as="a"
                        href={`https://wa.me/${branch.whatsapp_number.replace(/\s/g, "").startsWith("961") ? branch.whatsapp_number.replace(/\s/g, "") : "961" + branch.whatsapp_number.replace(/\s/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        whatsapp
                        activeLanguage={activeLanguage}
                      >
                        <FaWhatsapp />
                      </LocationIconButton>
                    )}
                    {(branch.location || branch.mapLink || branch.map_link) && (
                      <LocationIconButton
                        as="a"
                        href={branch.mapLink || branch.map_link ? `https://${branch.mapLink || branch.map_link}` : undefined}
                        target={branch.mapLink || branch.map_link ? "_blank" : undefined}
                        rel={branch.mapLink || branch.map_link ? "noopener noreferrer" : undefined}
                        location
                        activeLanguage={activeLanguage}
                      >
                        <IoLocationOutline />
                      </LocationIconButton>
                    )}
                  </LocationIconsContainer>
                </BranchItem>
              ))}
            </BranchList>
          </Section>
        )}

        {/* Social Media Section */}
        {hasSocialMedia && (
          <Section>
            <SectionTitle activeLanguage={activeLanguage}>
              {activeLanguage === "en" ? "Follow Us" : "تابعنا"}
            </SectionTitle>
            <SocialMediaGrid>
              {Object.entries(socialMedia).map(([platform, url]) => {
                if (!url) return null;

                return (
                  <SocialLink
                    key={platform}
                    href={url.startsWith('http') ? url : `https://${url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    platform={platform}
                  >
                    <SocialIcon platform={platform}>
                      {getSocialIcon(platform)}
                    </SocialIcon>
                  </SocialLink>
                );
              })}
            </SocialMediaGrid>
          </Section>
        )}
      </ContentContainer>
    </Container>
  );
}

