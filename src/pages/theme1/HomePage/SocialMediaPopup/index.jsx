import React from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  SocialGrid,
  SocialLink,
  SocialIcon,
  SocialName,
} from "./styles";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp, FaTiktok, FaGlobe } from "react-icons/fa";

export default function SocialMediaPopup({ restaurant, activeLanguage, onClose }) {
  const socialMedia = restaurant?.socialMedia || [];

  const getSocialIcon = (platform) => {
    const platformLower = platform?.toLowerCase() || "";
    if (platformLower.includes("facebook")) return <FaFacebook />;
    if (platformLower.includes("instagram")) return <FaInstagram />;
    if (platformLower.includes("twitter")) return <FaTwitter />;
    if (platformLower.includes("whatsapp")) return <FaWhatsapp />;
    if (platformLower.includes("tiktok")) return <FaTiktok />;
    return <FaGlobe />;
  };

  const getSocialColor = (platform) => {
    const platformLower = platform?.toLowerCase() || "";
    if (platformLower.includes("facebook")) return "#1877F2";
    if (platformLower.includes("instagram")) return "#E4405F";
    if (platformLower.includes("twitter")) return "#1DA1F2";
    if (platformLower.includes("whatsapp")) return "#25D366";
    if (platformLower.includes("tiktok")) return "#000000";
    return "#007bff";
  };

  const title = activeLanguage === "en" ? "Follow Us" : "تابعنا";

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} activeLanguage={activeLanguage}>
        <CloseButton onClick={onClose} activeLanguage={activeLanguage}>×</CloseButton>
        <Title activeLanguage={activeLanguage}>{title}</Title>
        <SocialGrid>
          {socialMedia.map((social, index) => {
            const platform = social.platform || social.name || "";
            const link = social.link || social.url || "";
            const href = link.startsWith("http") ? link : `https://${link}`;
            
            return (
              <SocialLink
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                platform={platform}
                activeLanguage={activeLanguage}
              >
                <SocialIcon color={getSocialColor(platform)}>
                  {getSocialIcon(platform)}
                </SocialIcon>
                <SocialName activeLanguage={activeLanguage}>{platform}</SocialName>
              </SocialLink>
            );
          })}
        </SocialGrid>
      </ModalContent>
    </ModalOverlay>
  );
}

