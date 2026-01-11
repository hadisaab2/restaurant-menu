import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

export const ModalContent = styled.div`
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 20px;
  padding: 32px;
  max-width: 500px;
  width: 100%;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  ${props => props.activeLanguage === "ar" ? "left: 16px;" : "right: 16px;"}
  background: transparent;
  border: none;
  font-size: 32px;
  color: #999;
  cursor: pointer;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f0f0f0;
    color: #333;
    transform: rotate(90deg);
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 24px 0;
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const SocialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
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
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 1px solid rgba(0, 0, 0, 0.08);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    background: ${props => props.theme.categoryUnActive || "#ffffff"};
  }
`;

export const SocialIcon = styled.div`
  font-size: 32px;
  color: ${props => props.color || "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const SocialName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

