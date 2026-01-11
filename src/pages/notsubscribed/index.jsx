import React from "react";
import {
  Container,
  Content,
  Title,
  TitleArabic,
  Message,
  MessageArabic,
  CTAButton,
  ContactInfo,
  IconWrapper,
  BilingualContainer,
  LogoWrapper,
  Logo,
} from "./styles";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function NotSubscribed() {
  const handleContact = () => {
    // You can customize this to open email, phone, or WhatsApp
    const phoneNumber = "96178911634";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Container>
      <Content>
      <BilingualContainer>
          <Title>Subscription Not Valid</Title>
          <TitleArabic>الاشتراك غير صالح</TitleArabic>
        </BilingualContainer>
        <IconWrapper>🚫</IconWrapper>
        <BilingualContainer>
          <Message>
            This service is currently unavailable. Please contact us to
            activate your subscription.
          </Message>
          <MessageArabic>
            هذه الخدمة غير متاحة حالياً. يرجى الاتصال بنا لتفعيل اشتراكك.
          </MessageArabic>
        </BilingualContainer>
        <CTAButton onClick={handleContact}>
          <span>Contact Us</span>
          <span>اتصل بنا</span>
        </CTAButton>
        <ContactInfo>
          <div>
            <FaPhone /> <span>+961 78 911 634</span>
          </div>
          <div>
            <FaWhatsapp /> <span>WhatsApp</span>
          </div>
        </ContactInfo>
      </Content>
    </Container>
  );
}

