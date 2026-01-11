import React from "react";
import {
  ModalOverlay,
  ModalContent,
  CloseButton,
  Title,
  BranchList,
  BranchItem,
  BranchName,
  BranchInfo,
  BranchText,
  BranchLink,
  MapButton,
} from "./styles";
import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function BranchesPage({ restaurant, activeLanguage, onClose }) {
  const branches = restaurant?.branches || [];

  const formatPhone = (phone) => {
    if (!phone) return "";
    return phone.replace(/\s/g, "");
  };

  const title = activeLanguage === "en" ? "Our Locations" : "فروعنا";
  const phoneLabel = activeLanguage === "en" ? "Phone" : "الهاتف";
  const whatsappLabel = activeLanguage === "en" ? "WhatsApp" : "واتساب";
  const locationLabel = activeLanguage === "en" ? "Location" : "الموقع";
  const viewOnMapText = activeLanguage === "en" ? "View on Map" : "عرض على الخريطة";

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()} activeLanguage={activeLanguage}>
        <CloseButton onClick={onClose} activeLanguage={activeLanguage}>×</CloseButton>
        <Title activeLanguage={activeLanguage}>{title}</Title>
        <BranchList>
          {branches.map((branch) => (
            <BranchItem key={branch.id} activeLanguage={activeLanguage}>
              <BranchName activeLanguage={activeLanguage}>{branch.name}</BranchName>
              <BranchInfo activeLanguage={activeLanguage}>
                {branch.phone_number && (
                  <BranchText>
                    <FaPhone style={{ marginRight: "8px", color: "#007bff" }} />
                    <span>{phoneLabel}: </span>
                    <BranchLink href={`tel:${formatPhone(branch.phone_number)}`}>
                      {branch.phone_number}
                    </BranchLink>
                  </BranchText>
                )}
                {branch.whatsapp_number && (
                  <BranchText>
                    <FaWhatsapp style={{ marginRight: "8px", color: "#25D366" }} />
                    <span>{whatsappLabel}: </span>
                    <BranchLink 
                      href={`https://wa.me/${formatPhone(branch.whatsapp_number)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      whatsapp
                    >
                      {branch.whatsapp_number}
                    </BranchLink>
                  </BranchText>
                )}
                {branch.location && (
                  <BranchText>
                    <IoLocationOutline style={{ marginRight: "8px", color: "#007bff" }} />
                    <span>{locationLabel}: </span>
                    <span>{branch.location}</span>
                  </BranchText>
                )}
                {branch.mapLink && (
                  <MapButton
                    href={`https://${branch.mapLink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    activeLanguage={activeLanguage}
                  >
                    {viewOnMapText}
                  </MapButton>
                )}
              </BranchInfo>
            </BranchItem>
          ))}
        </BranchList>
      </ModalContent>
    </ModalOverlay>
  );
}

