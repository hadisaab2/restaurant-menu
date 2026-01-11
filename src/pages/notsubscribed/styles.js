import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 20px;
`;

export const Content = styled.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 60px 40px;
  max-width: 600px;
  width: 100%;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  
  @media (min-width: 768px) {
    padding: 80px 60px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  width: 100%;
`;

export const Logo = styled.img`
  max-width: 200px;
  height: auto;
  object-fit: contain;
  
  @media (min-width: 768px) {
    max-width: 250px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 80px;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    font-size: 100px;
    margin-bottom: 32px;
  }
`;

export const BilingualContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  direction: ltr;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const TitleArabic = styled.h1`
  font-size: 32px;
  font-weight: 700;
  color: #1a1a1a;
  margin: 0;
  direction: rtl;
  text-align: center;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;
  
  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Message = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
  direction: ltr;
  text-align: center;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const MessageArabic = styled.p`
  font-size: 16px;
  color: #666666;
  line-height: 1.6;
  margin: 0;
  direction: rtl;
  text-align: center;
  font-family: "Noto Kufi Arabic", "Arial", sans-serif;
  
  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

export const CTAButton = styled.button`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #ffffff;
  border: none;
  border-radius: 12px;
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
  margin: 20px 60px 20px 60px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;
  justify-content: center;
  
  span:last-child {
    font-family: "Noto Kufi Arabic", "Arial", sans-serif;
    font-size: 16px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(102, 126, 234, 0.5);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  @media (min-width: 768px) {
    padding: 18px 48px;
    font-size: 20px;
    margin-bottom: 48px;
    
    span:last-child {
      font-size: 18px;
    }
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid #e0e0e0;
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #333333;
    font-size: 15px;
    
    svg {
      color: #667eea;
      font-size: 20px;
    }
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 40px;
    
    div {
      font-size: 16px;
      
      svg {
        font-size: 22px;
      }
    }
  }
`;

