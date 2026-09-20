import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 12px 4%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  background-color: ${props => props.theme.backgroundColor};

  @media (min-width: 768px) {
    padding: 16px 5%;
  }
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  width: 100%;
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  border-radius: 16px;
  background: ${(props) => props.theme?.BoxColor || props.theme?.categoryUnActive || "#ffffff"};
  border: 1px solid ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}15` : "rgba(0, 123, 255, 0.08)")};
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.12);
    border-color: ${(props) => (props.theme?.mainColor ? `${props.theme.mainColor}40` : "rgba(0, 123, 255, 0.25)")};
    transform: translateY(-4px);
  }
`;

export const CategoryIconWrapper = styled.div`
  width: 100%;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  background: ${(props) => props.theme?.mainColor ? `${props.theme.mainColor}0a` : "rgba(0, 123, 255, 0.04)"};
`;

export const CategoryIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
  ${CategoryCard}:hover & {
    transform: scale(1.06);
  }
`;

export const CategoryFallback = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme?.mainColor || "#007bff"};
  opacity: 0.4;
`;

export const CategoryName = styled.div`
  display: block;
  width: 100%;
  padding: 12px 10px;
  font-size: 13px;
  font-weight: 600;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  text-align: center;
  direction: ${props => props.activeLanguage === "ar" ? "rtl" : "ltr"};
  @media (min-width: 768px) {
    padding: 14px 12px;
    font-size: 15px;
  }
`;
