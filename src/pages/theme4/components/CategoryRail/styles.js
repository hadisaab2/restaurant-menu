import styled from "styled-components";

export const CategoryRailContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: ${(props) => {
    const theme = props.theme || {};
    return theme.backgroundColor || "#fafafa";
  }};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 12px;
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 100;
  direction: ${(props) => (props.activeLanguage === "ar" ? "rtl" : "ltr")};
  
  /* Rounded inner edge (organic wave / soft curve) */
  ${(props) => (props.activeLanguage === "ar" 
    ? "border-top-left-radius: 24px; border-bottom-left-radius: 24px;" 
    : "border-top-right-radius: 24px; border-bottom-right-radius: 24px;"
  )}

  @media (min-width: 768px) {
    padding: 24px 16px;
    ${(props) => (props.activeLanguage === "ar" 
      ? "border-top-left-radius: 32px; border-bottom-left-radius: 32px;" 
      : "border-top-right-radius: 32px; border-bottom-right-radius: 32px;"
    )}
  }

  /* Hide scrollbar for clean look */
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;

export const CategoryItem = styled.div`
  position: relative;
  width: 100%;
  min-height: 80px;
  margin-bottom: 16px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px 8px;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  background: ${(props) => {
    const theme = props.theme || {};
    return props.active
      ? (theme.categoryActive || theme.mainColor || "#d4a574")
      : "transparent";
  }};
  touch-action: manipulation;
  transform: ${(props) => (props.active ? "scale(1.02)" : "scale(1)")};

  &:hover {
    background: ${(props) => {
      const theme = props.theme || {};
      return props.active
        ? (theme.categoryActive || theme.mainColor || "#d4a574")
        : "rgba(0, 0, 0, 0.03)";
    }};
    transform: ${(props) => (props.active ? "scale(1.02)" : "scale(1.05)")};
  }

  &:active {
    transform: scale(0.98);
  }

  @media (min-width: 768px) {
    min-height: 90px;
    padding: 16px 10px;
    margin-bottom: 20px;
  }
`;

export const CategoryIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  filter: ${(props) => (props.active ? "brightness(1)" : "brightness(0.8)")};
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 8px;
  transform: ${(props) => (props.active ? "scale(1.1)" : "scale(1)")};

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    margin-bottom: 10px;
  }
`;

export const CategoryIconFallback = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => {
    const theme = props.theme || {};
    if (props.active) {
      return theme.categoryActiveText || "#ffffff";
    }
    return theme.textColor || "#333";
  }};
  background: transparent;
  border-radius: 50%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  margin-bottom: 8px;
  transform: ${(props) => (props.active ? "scale(1.1)" : "scale(1)")};

  @media (min-width: 768px) {
    width: 48px;
    height: 48px;
    font-size: 24px;
    margin-bottom: 10px;
  }
`;

export const CategoryName = styled.span`
  font-size: 11px;
  font-weight: ${(props) => (props.active ? "600" : "500")};
  color: ${(props) => {
    const theme = props.theme || {};
    if (props.active) {
      return theme.categoryActiveText || "#ffffff";
    }
    return theme.textColor || "#333";
  }};
  text-align: center;
  margin-top: 4px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  line-height: 1.2;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  @media (min-width: 768px) {
    font-size: 12px;
    margin-top: 6px;
  }
`;

export const CategoryIndicator = styled.div`
  position: absolute;
  ${(props) => (props.activeLanguage === "ar" ? "left: -6px;" : "right: -6px;")}
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 70%;
  background: ${(props) => {
    const theme = props.theme || {};
    return theme.categoryActive || theme.mainColor || "#d4a574";
  }};
  border-radius: 2px;
  opacity: 0.8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
`;

