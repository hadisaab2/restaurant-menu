import React from "react";
import {
  Container,
  Content,
  Title,
  TitleArabic,
  Message,
  MessageArabic,
  ContactInfo,
  IconWrapper,
  BilingualContainer,
  LogoWrapper,
  Logo,
} from "./styles";
import { FaPhone, FaWhatsapp } from "react-icons/fa";

export default function NotSubscribed() {
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

