import React from "react";
import { MdRestaurant, MdDeliveryDining } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import {
  LandingWrapper,
  LandingContent,
  LogoContainer,
  Logo,
  WelcomeText,
  SubText,
  Divider,
  CardsRow,
  ChoiceCard,
  CardIcon,
  CardTitle,
  CardSubtitle,
  LangToggle,
  PoweredBy,
} from "./styles";

const labels = {
  en: {
    welcome: "Welcome to",
    choose: "How would you like to enjoy your meal?",
    dineInTitle: "Dine In",
    dineInSub: "Browse our in-house menu",
    deliveryTitle: "Delivery",
    deliverySub: "Order to your doorstep",
    langSwitch: "عربي",
  },
  ar: {
    welcome: "أهلاً بك في",
    choose: "كيف تحب أن تستمتع بوجبتك؟",
    dineInTitle: "تناول في المطعم",
    dineInSub: "تصفح قائمة الطعام في المطعم",
    deliveryTitle: "توصيل",
    deliverySub: "اطلب إلى باب منزلك",
    langSwitch: "EN",
  },
};

export default function LandingPage({
  restaurant,
  restaurantName,
  activeLanguage,
  onSelect,
}) {
  const dispatch = useDispatch();
  const lang = activeLanguage === "ar" ? "ar" : "en";
  const t = labels[lang];

  const logoUrl = restaurant?.logoURL
    ? restaurant.logoURL.startsWith("http")
      ? restaurant.logoURL
      : `https://storage.googleapis.com/ecommerce-bucket-testing/${restaurant.logoURL}`
    : null;

  const displayName =
    lang === "ar" && restaurant?.ar_name
      ? restaurant.ar_name
      : restaurant?.name || restaurantName;

  const isBilingual =
    restaurant?.languages === "en&ar" || restaurant?.default_language === "en&ar";

  const toggleLang = () => {
    const next = lang === "en" ? "ar" : "en";
    dispatch(changelanuage({ restaurantName, language: next }));
    document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  };

  return (
    <LandingWrapper>
      {isBilingual && (
        <LangToggle onClick={toggleLang}>{t.langSwitch}</LangToggle>
      )}
      <LandingContent>
        {logoUrl && (
          <LogoContainer>
            <Logo src={logoUrl} alt={displayName} />
          </LogoContainer>
        )}
        <WelcomeText>
          {t.welcome}
          <span>{displayName}</span>
        </WelcomeText>
        <SubText>{t.choose}</SubText>
        <Divider />
        <CardsRow>
          <ChoiceCard onClick={() => onSelect("dine_in")} $accent="#10b981">
            <CardIcon $accent="#10b981">
              <MdRestaurant />
            </CardIcon>
            <CardTitle>{t.dineInTitle}</CardTitle>
            <CardSubtitle>{t.dineInSub}</CardSubtitle>
          </ChoiceCard>
          <ChoiceCard onClick={() => onSelect("delivery")} $accent="#3b82f6">
            <CardIcon $accent="#3b82f6">
              <MdDeliveryDining />
            </CardIcon>
            <CardTitle>{t.deliveryTitle}</CardTitle>
            <CardSubtitle>{t.deliverySub}</CardSubtitle>
          </ChoiceCard>
        </CardsRow>
      </LandingContent>
      <PoweredBy>
        Powered by <a href="https://menugic.com" target="_blank" rel="noopener noreferrer">Menugic</a>
      </PoweredBy>
    </LandingWrapper>
  );
}
