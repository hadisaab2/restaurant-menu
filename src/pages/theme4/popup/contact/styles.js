import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

export const Container = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showPopup === "contact" ? "0px" : "-100%")};
  min-height: 60vh;
  max-height: 90vh;
  background-color: ${(props) => props.theme?.popupbackgroundColor || "#ffffff"};
  width: 100%;
  transition: all 0.8s ease-in-out;
  border-top-right-radius: 60px;
  border-top-left-radius: 60px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  overflow-y: auto;
`;

export const Close = styled(IoMdClose)`
  font-size: 24px;
  position: absolute;
  top: 30px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  z-index: 10;

  &:hover {
    opacity: 0.7;
  }
`;

export const Title = styled.h2`
  font-size: 28px;
  font-weight: 600;
  margin-top: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  text-align: center;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const ContentContainer = styled.div`
  width: 90%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
`;

export const Section = styled.div`
  width: 100%;
`;

export const SectionTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme?.popupTextColor || "#333333"};
  margin-bottom: 20px;
  text-align: ${(props) => (props.activeLanguage === "ar" ? "right" : "left")};
`;

export const BranchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BranchItem = styled.div`
  background: ${props => props.theme?.categoryUnActive || "#ffffff"};
  border-radius: 16px;
  padding: 12px 24px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    ${props => props.activeLanguage === "ar" ? "right: 0;" : "left: 0;"}
    width: 4px;
    height: 100%;
    background: linear-gradient(180deg, ${props => props.theme?.mainColor || "#007bff"} 0%, ${props => props.theme?.mainColor || "#0056b3"} 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: rgba(0, 123, 255, 0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (min-width: 768px) {
    padding: 24px 28px;
  }
`;

export const BranchName = styled.h3`
  font-size: 18px;
  font-weight: 500;
  color: ${props => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  text-align: left;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: -0.02em;
  line-height: 1.3;
  flex: 1;
  
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;

export const LocationIconsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 12px;
  flex-wrap: nowrap;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  flex-shrink: 0;
  
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const LocationIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
  text-decoration: none;
  
  background: ${props => {
    if (props.whatsapp) return "rgba(37, 211, 102, 0.12)";
    if (props.location || props.map) return "rgba(0, 123, 255, 0.12)";
    return props.theme?.mainColor ? `${props.theme.mainColor}12` : "rgba(0, 123, 255, 0.12)";
  }};
  
  color: ${props => {
    if (props.whatsapp) return "#25D366";
    if (props.location || props.map) return props.theme?.mainColor || "#007bff";
    return props.theme?.mainColor || "#007bff";
  }};
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    background: ${props => {
      if (props.whatsapp) return "rgba(37, 211, 102, 0.2)";
      if (props.location || props.map) return props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)";
      return props.theme?.mainColor ? `${props.theme.mainColor}20` : "rgba(0, 123, 255, 0.2)";
    }};
    box-shadow: 0 4px 12px ${props => {
      if (props.whatsapp) return "rgba(37, 211, 102, 0.3)";
      return props.theme?.mainColor ? `${props.theme.mainColor}30` : "rgba(0, 123, 255, 0.3)";
    }};
  }
  
  &:active {
    transform: translateY(0) scale(0.98);
  }
  
  @media (min-width: 768px) {
    width: 52px;
    height: 52px;
    font-size: 22px;
  }
`;

export const SocialMediaSection = styled.div`
  width: 100%;
`;

export const SocialMediaGrid = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 100%;
  margin: 0 auto;
  
  @media (min-width: 768px) {
    gap: 20px;
  }
`;

export const SocialLink = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
  background: ${props => props.theme?.categoryUnActive || "#ffffff"};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    background: ${props => props.theme?.categoryUnActive || "#ffffff"};
  }
`;

export const SocialIcon = styled.div`
  font-size: 32px;
  color: ${props => {
    if (props.platform?.toLowerCase().includes("facebook")) return "#1877F2";
    if (props.platform?.toLowerCase().includes("instagram")) return "#E4405F";
    if (props.platform?.toLowerCase().includes("twitter")) return "#1DA1F2";
    if (props.platform?.toLowerCase().includes("whatsapp")) return "#25D366";
    if (props.platform?.toLowerCase().includes("tiktok")) return "#000000";
    return props.theme?.mainColor || "#007bff";
  }};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

