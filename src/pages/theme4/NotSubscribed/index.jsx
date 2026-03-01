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
  Subtitle,
} from "./styles";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function Theme3NotSubscribed({ restaurant }) {
  const handleContact = () => {
    const phoneNumber = "96178911634";
    const whatsappUrl = `https://wa.me/${phoneNumber}`;
    window.open(whatsappUrl, "_blank");
  };

  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  return (
    <Container>
      <Content>
        {logoUrl && (
          <LogoWrapper>
            <Logo src={logoUrl} alt={restaurant?.name || "Restaurant Logo"} />
          </LogoWrapper>
        )}
        {restaurant?.name && <Subtitle>{restaurant.name}</Subtitle>}
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
