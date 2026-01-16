import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.theme?.backgroundColor || "#f8f9fa"};
  padding: 24px;
`;

export const Content = styled.div`
  background: ${(props) => props.theme?.BoxColor || "#ffffff"};
  border-radius: 20px;
  padding: 50px 36px;
  max-width: 620px;
  width: 100%;
  text-align: center;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);
  border: 1px solid ${(props) => props.theme?.borderColor || "transparent"};

  @media (min-width: 768px) {
    padding: 70px 56px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 18px;
  width: 100%;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  object-fit: contain;

  @media (min-width: 768px) {
    max-width: 240px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  opacity: 0.7;
  margin: 0 0 18px 0;
`;

export const IconWrapper = styled.div`
  font-size: 70px;
  margin: 18px 0 22px;

  @media (min-width: 768px) {
    font-size: 90px;
  }
`;

export const BilingualContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  direction: ltr;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const TitleArabic = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: ${(props) => props.theme?.textColor || "#1a1a1a"};
  margin: 0;
  direction: rtl;
  text-align: center;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;

  @media (min-width: 768px) {
    font-size: 38px;
  }
`;

export const Message = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme?.textColor || "#666666"};
  line-height: 1.6;
  margin: 0;
  direction: ltr;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const MessageArabic = styled.p`
  font-size: 15px;
  color: ${(props) => props.theme?.textColor || "#666666"};
  line-height: 1.6;
  margin: 0;
  direction: rtl;
  text-align: center;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;

  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const CTAButton = styled.button`
  background: ${(props) => props.theme?.mainColor || "#667eea"};
  color: ${(props) => props.theme?.slidingButtonTextColor || "#ffffff"};
  border: none;
  border-radius: 12px;
  padding: 14px 36px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  margin: 18px 0 20px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;

  span:last-child {
    font-family: "Noto Kufi Arabic", "Arial", sans-serif;
    font-size: 15px;
  }

  &:hover {
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  @media (min-width: 768px) {
    padding: 16px 44px;
    font-size: 19px;

    span:last-child {
      font-size: 17px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 26px;
  padding-top: 26px;
  border-top: 1px solid ${(props) => props.theme?.borderColor || "#e0e0e0"};

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: ${(props) => props.theme?.textColor || "#333333"};
    font-size: 15px;

    svg {
      color: ${(props) => props.theme?.mainColor || "#667eea"};
      font-size: 20px;
    }
  }

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 36px;
  }
`;
