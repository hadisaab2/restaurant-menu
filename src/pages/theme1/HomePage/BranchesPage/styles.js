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
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
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

export const BranchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const BranchItem = styled.div`
  padding: 20px;
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.08);
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#1a1a1a"};
  margin: 0 0 12px 0;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchText = styled.div`
  font-size: 14px;
  color: ${props => props.theme.textColor || "#666"};
  display: flex;
  align-items: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
`;

export const BranchLink = styled.a`
  color: ${props => props.whatsapp ? "#25D366" : (props.theme.mainColor || "#007bff")};
  text-decoration: none;
  font-weight: 600;
  transition: all 0.2s ease;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const MapButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  background: ${props => props.theme.mainColor || "#007bff"};
  color: #ffffff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-top: 8px;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &:hover {
    background: ${props => props.theme.mainColor || "#0056b3"};
    transform: translateY(-2px);
    box-shadow: 0 4px 12px ${props => props.theme.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.4)"};
  }
`;

