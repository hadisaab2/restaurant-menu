import React from "react";
import {
  Container,
  Card,
  LogoWrapper,
  Logo,
  RestaurantName,
  IconBadge,
  Title,
  TitleArabic,
  Divider,
  Message,
  MessageArabic,
  CTAButton,
  CTALabels,
} from "./styles";
import { FiPauseCircle, FiRefreshCw } from "react-icons/fi";

const MENUGIC_CONTACT_URL = "https://www.menugic.com/#contact";

export default function Theme3NotSubscribed({ restaurant }) {
  const logoUrl = restaurant?.logoURL
    ? `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  return (
    <Container>
      <Card>
        {logoUrl && (
          <LogoWrapper>
            <Logo src={logoUrl} alt={restaurant?.name || "Logo"} />
          </LogoWrapper>
        )}
        {restaurant?.name && <RestaurantName>{restaurant.name}</RestaurantName>}

        <IconBadge>
          <FiPauseCircle />
        </IconBadge>

        <Title>Subscription Expired</Title>
        <TitleArabic>انتهى الاشتراك</TitleArabic>

        <Divider />

        <Message>
          This menu is temporarily unavailable. Contact Menugic to renew the
          subscription and bring it back online.
        </Message>
        <MessageArabic>
          هذه القائمة غير متاحة مؤقتاً. تواصل مع Menugic لتجديد الاشتراك وإعادة
          تفعيلها.
        </MessageArabic>

        <CTAButton
          href={MENUGIC_CONTACT_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiRefreshCw />
          <CTALabels>
            <span>Contact Menugic to renew</span>
            <span>تواصل مع Menugic للتجديد</span>
          </CTALabels>
        </CTAButton>
      </Card>
    </Container>
  );
}
