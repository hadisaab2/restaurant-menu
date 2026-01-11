import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 4%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props=>props.theme.backgroundColor};
  
  @media (min-width: 768px) {
    padding: 30px 5%;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.showOnePerLine ? '1fr' : 'repeat(3, 1fr)'};
  gap: 12px;
  width: 100%;
  
  @media (min-width: 480px) {
    gap: 16px;
  }
  
  @media (min-width: 768px) {
    gap: 20px;
  }
  
  @media (min-width: 1024px) {
    gap: 24px;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: ${props => props.showOnePerLine ? 'row' : 'column'};
  align-items: ${props => props.showOnePerLine ? 'center' : 'center'};
  justify-content: ${props => props.showOnePerLine ? 'flex-start' : 'center'};
  padding: ${props => props.showOnePerLine ? '16px 24px' : '20px 16px'};
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: ${props => props.showOnePerLine ? 'auto' : '120px'};
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
  gap: ${props => props.showOnePerLine ? '20px' : '0'};
  direction: ${props => props.showOnePerLine && props.activeLanguage === "ar" ? "rtl" : "ltr"};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, ${props => props.theme.mainColor || "#007bff"}15 0%, transparent 100%);
    opacity: 0;
    transition: opacity 0.35s ease;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.08);
    border-color: ${props => props.theme.mainColor || "#007bff"}30;
    
    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.01);
    transition: all 0.15s ease;
  }
  
  @media (min-width: 768px) {
    padding: ${props => props.showOnePerLine ? '18px 28px' : '24px 20px'};
    min-height: ${props => props.showOnePerLine ? 'auto' : '140px'};
    gap: ${props => props.showOnePerLine ? '24px' : '0'};
  }
`;

export const CategoryIconWrapper = styled.div`
  width: ${props => props.showOnePerLine ? '80px' : '90px'};
  height: ${props => props.showOnePerLine ? '80px' : '90px'};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.categoryActive};
  margin-bottom: ${props => props.showOnePerLine ? '0' : '16px'};
  margin-right: ${props => props.showOnePerLine && props.activeLanguage === "en" ? '0' : '0'};
  margin-left: ${props => props.showOnePerLine && props.activeLanguage === "ar" ? '0' : '0'};
  flex-shrink: 0;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  order: ${props => props.showOnePerLine && props.activeLanguage === "ar" ? '2' : '1'};
  
  ${CategoryCard}:hover & {
    background: ${props => props.theme.categoryActiveIcon || props.theme.mainColor || "#007bff"};
    transform: scale(1.1);
    box-shadow: 0 4px 16px ${props => props.theme.mainColor || "#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: ${props => props.showOnePerLine ? '90px' : '100px'};
    height: ${props => props.showOnePerLine ? '90px' : '100px'};
    margin-bottom: ${props => props.showOnePerLine ? '0' : '18px'};
  }
`;

export const CategoryIcon = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  color: ${props => props.theme.categoryActiveIcon || "#333333"};
  ${CategoryCard}:hover & {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CategoryName = styled.div`
  font-size: ${props => props.showOnePerLine ? '18px' : '15px'};
  font-weight: 600;
  color: ${props => props.theme.categoryActiveText || "#333333"};
  text-align: ${props => props.showOnePerLine ? (props.activeLanguage === "ar" ? 'right' : 'left') : 'center'};
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: 0.2px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  flex: 1;
  display: flex;
  align-items: center;
  order: ${props => props.showOnePerLine && props.activeLanguage === "ar" ? '1' : '2'};
  
  ${CategoryCard}:hover & {
    color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  @media (min-width: 768px) {
    font-size: ${props => props.showOnePerLine ? '20px' : '16px'};
    line-height: 1.6;
  }
`;

