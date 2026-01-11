import styled from "styled-components";

export const HomeContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background: ${props => props.theme.backgroundColor || "#f8f9fa"};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0;
`;

export const TopBar = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 24px;
  z-index: 100;
  
  @media (max-width: 768px) {
    height: 70px;
    padding: 0 16px;
  }
`;

export const MenuButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border: 1px solid ${props => props.theme.borderColor || "rgba(0, 0, 0, 0.08)"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.textColor || props.theme.textcolor || "#1a1a1a"};
  font-size: 24px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    background: ${props => props.theme.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.08)"};
    border-color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
    transform: scale(1.05);
    color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const LanguageButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  font-size: 20px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: ${props => props.theme.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.08)"};
    transform: scale(1.1);
    color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  }
  
  &:active {
    transform: scale(0.95);
  }
`;

export const SemiCircleCard = styled.div`
  position: absolute !important;
  left: 7%;
  top: 40%;
  transform: translate(-40%, -27%);
  width: 400px !important;
  height: 400px !important;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 50%;
  border: 2px solid ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  z-index: 10;
  position: relative;
  
  @media (max-width: 768px) {
    width: 370px !important;
    height: 370px !important;
    padding: 40px !important;
  }
`;

export const Logo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1));
  position: absolute;
  ${props => props.activeLanguage === "ar" ? "left: 20%;" : "right: 20%;"}
  top: 50%;
  transform: translateY(-50%);
  max-width: 250px;
  max-height: 250px;
  
  @media (max-width: 768px) {
    max-width: 250px;
    max-height: 250px;
    ${props => props.activeLanguage === "ar" ? "left: 1%;" : "right: 1%;"}
  }
`;

export const IconCircle = styled.button`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border: 2px solid ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  pointer-events: auto;
  
  &:hover {
    background: ${props => props.theme.mainColor ? `${props.theme.mainColor}08` : "rgba(0, 123, 255, 0.08)"};
    border-color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
    transform: scale(1.15) translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
  
  &:active {
    transform: scale(1.05) translateY(0);
  }
  
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 20;
  pointer-events: none;
  
  @media (max-width: 768px) {
    gap: 8px;
  }
`;

export const IconButton = styled.div`
  color: ${props => props.theme.mainColor || props.theme.maincolor || "#007bff"};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const IconLabel = styled.span`
  color: ${props => props.theme.textColor || props.theme.textcolor || "#1a1a1a"};
  font-size: 13px;
  font-weight: 600;
  text-align: center;
  line-height: 1.3;
  white-space: nowrap;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  position: relative;
  z-index: 2;
  padding: 4px 8px;
  border-radius: 6px;
  
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 3px 6px;
  }
`;
