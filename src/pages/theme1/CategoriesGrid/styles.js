import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 25px 4%;
  margin-top: 10px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  
  @media (min-width: 768px) {
    padding: 30px 5%;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: ${props => props.theme.categoryUnActive || "#ffffff"};
  border-radius: 20px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  min-height: 160px;
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(0, 0, 0, 0.04);
  
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
    padding: 28px 20px;
    min-height: 180px;
  }
`;

export const CategoryIconWrapper = styled.div`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.categoryUnactiveIcon || "#f5f5f5"};
  margin-bottom: 16px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  position: relative;
  z-index: 1;
  
  ${CategoryCard}:hover & {
    background: ${props => props.theme.categoryActiveIcon || props.theme.mainColor || "#007bff"};
    transform: scale(1.1);
    box-shadow: 0 4px 16px ${props => props.theme.mainColor || "#007bff"}40;
  }
  
  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
    margin-bottom: 18px;
  }
`;

export const CategoryIcon = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  transition: transform 0.35s ease;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
  
  ${CategoryCard}:hover & {
    transform: scale(1.1);
  }
  
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

export const CategoryName = styled.div`
  font-size: 15px;
  font-weight: 600;
  color: ${props => props.theme.textColor || "#333333"};
  text-align: center;
  word-wrap: break-word;
  white-space: normal;
  line-height: 1.5;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  letter-spacing: 0.2px;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  
  ${CategoryCard}:hover & {
    color: ${props => props.theme.mainColor || "#007bff"};
  }
  
  @media (min-width: 768px) {
    font-size: 16px;
    line-height: 1.6;
  }
`;

