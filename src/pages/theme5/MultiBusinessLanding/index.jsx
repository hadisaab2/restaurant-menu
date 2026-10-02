import React from "react";
import { useDispatch } from "react-redux";
import { changelanuage } from "../../../redux/restaurant/restaurantActions";
import { getImageUrl } from "../../../utilities/imageUrl";
import {
  GlobalStyle,
  LandingWrapper,
  LangToggle,
  Hero,
  HeroLogo,
  HeroLogoFallback,
  HeroName,
  HeroTagline,
  HeroDivider,
  BrandsSection,
  BrandsHeading,
  BrandsGrid,
  BrandCard,
  CardCover,
  CoverImg,
  CoverFallback,
  CardOverlay,
  CardName,
  CardDesc,
  CardFooter,
  CardSocials,
  SocialLink,
  CardCta,
  LandingFooter,
  FooterPowered,
} from "./styles";

const labels = {
  en: {
    toggle: "عربي",
    explore: "Our Brands",
    visit: "Visit",
    powered: "Powered by",
  },
  ar: {
    toggle: "EN",
    explore: "علاماتنا التجارية",
    visit: "زيارة",
    powered: "مدعوم بواسطة",
  },
};


const SocialIcon = ({ platform }) => {
  switch (platform?.toLowerCase()) {
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V9.05a8.16 8.16 0 004.76 1.52v-3.4a4.85 4.85 0 01-1-.48z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
        </svg>
      );
    case "whatsapp":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
        </svg>
      );
    case "twitter":
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "snapchat":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3-.016.659-.12.922-.214.094-.03.189-.048.284-.048.246 0 .482.105.655.3.17.2.255.476.205.742-.105.6-.645.93-1.109 1.2-.15.09-.285.16-.406.24-.39.24-.605.45-.615.6-.009.12.056.285.195.54.33.6.63 1.14.78 1.44.105.21.18.39.21.555.165.9-.36 1.125-.615 1.215l-.045.015c-.087.03-.178.054-.294.084-.465.12-.918.237-1.424.487-.225.12-.39.254-.555.39-.57.48-1.245 1.05-3.21 1.05-1.905 0-2.592-.54-3.15-1.02-.195-.165-.375-.315-.615-.435-.51-.255-.96-.375-1.425-.495-.12-.03-.21-.054-.285-.075-.27-.105-.78-.315-.615-1.215.03-.165.105-.345.21-.555.15-.3.45-.84.78-1.44.135-.255.21-.42.195-.54-.015-.15-.225-.36-.615-.6-.12-.075-.255-.15-.405-.24-.42-.24-1.005-.585-1.11-1.2-.045-.255.03-.525.195-.72.165-.195.39-.3.63-.3.105 0 .21.015.315.05.255.09.59.2.885.21.03 0 .06 0 .09-.015.21-.015.375-.075.405-.09-.006-.12-.015-.27-.027-.45l-.003-.06c-.105-1.635-.225-3.66.3-4.86C7.44 1.065 10.785.793 11.775.793h.435z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
        </svg>
      );
  }
};

export default function MultiBusinessLanding({ restaurant, restaurantName, activeLanguage, children }) {
  const dispatch = useDispatch();
  const lang = activeLanguage || "en";
  const isAr = lang === "ar";
  const l = labels[lang];
  const isBilingual = restaurant?.languages?.includes(",") || restaurant?.languages?.includes("&");

  const handleToggleLang = () => {
    const newLang = isAr ? "en" : "ar";
    document.documentElement.dir = newLang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = newLang;
    dispatch(changelanuage({ name: restaurantName, activeLanguage: newLang }));
  };

  const handleCardClick = (childName) => {
    const host = window.location.hostname;
    if (host.includes("localhost") || host.includes("127.0.0.1")) {
      window.location.href = `/${childName}`;
    } else {
      window.location.href = `https://${childName}.menugic.com`;
    }
  };

  const getSlogan = (child) => {
    if (isAr) return child.ar_slogan || child.en_slogan || "";
    return child.en_slogan || "";
  };

  const getSloganSubtext = (child) => {
    if (isAr) return child.ar_slogan_subtext || child.en_slogan_subtext || "";
    return child.en_slogan_subtext || "";
  };

  // Parse parent theme colors
  let accentColor = "#8b6f4e";
  let bgColor = "#fdfcfa";
  let textColor = "#1a1a1a";
  try {
    const theme = typeof restaurant?.theme === "string" ? JSON.parse(restaurant.theme) : restaurant?.theme;
    if (theme?.mainColor) accentColor = theme.mainColor;
    if (theme?.backgroundColor) bgColor = theme.backgroundColor;
    if (theme?.textColor) textColor = theme.textColor;
  } catch (e) { /* use default */ }

  const parentSlogan = isAr
    ? (restaurant?.ar_slogan || restaurant?.en_slogan || "")
    : (restaurant?.en_slogan || "");
  const parentSloganSubtext = isAr
    ? (restaurant?.ar_slogan_subtext || restaurant?.en_slogan_subtext || "")
    : (restaurant?.en_slogan_subtext || "");

  return (
    <LandingWrapper dir={isAr ? "rtl" : "ltr"}>
      <GlobalStyle $accent={accentColor} $bg={bgColor} $text={textColor} />

      {isBilingual && (
        <LangToggle onClick={handleToggleLang}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
          </svg>
          {l.toggle}
        </LangToggle>
      )}

      <Hero>
        {restaurant?.logoURL ? (
          <HeroLogo src={getImageUrl(restaurant.logoURL)} alt={restaurantName} />
        ) : (
          <HeroLogoFallback>
            {(restaurantName || "M").charAt(0).toUpperCase()}
          </HeroLogoFallback>
        )}
        <HeroName>{parentSlogan || restaurantName}</HeroName>
        {parentSloganSubtext && <HeroTagline>{parentSloganSubtext}</HeroTagline>}
        <HeroDivider />
      </Hero>

      <BrandsSection>
        <BrandsHeading>{l.explore}</BrandsHeading>
        <BrandsGrid $count={children.length}>
          {children.map((child, idx) => {
            const single = children.length <= 2;
            return (
              <BrandCard key={child.id} $index={idx} onClick={() => handleCardClick(child.name)}>
                <CardCover $single={single}>
                  {child.cover_url ? (
                    <CoverImg className="cover-img" src={getImageUrl(child.cover_url)} alt={child.name} loading="lazy" />
                  ) : (
                    <CoverFallback />
                  )}
                  <CardOverlay>
                    <CardName $single={single}>{getSlogan(child) || child.name}</CardName>
                    {getSloganSubtext(child) && (
                      <CardDesc $single={single}>{getSloganSubtext(child)}</CardDesc>
                    )}
                  </CardOverlay>
                </CardCover>
                <CardFooter $single={single}>
                  {child.socialMedia?.length > 0 && (
                    <CardSocials>
                      {child.socialMedia.map((sm, i) => (
                        <SocialLink
                          key={i}
                          href={sm.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={sm.platform}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <SocialIcon platform={sm.platform} />
                        </SocialLink>
                      ))}
                    </CardSocials>
                  )}
                  <CardCta className="card-cta" $single={single}>
                    {l.visit}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </CardCta>
                </CardFooter>
              </BrandCard>
            );
          })}
        </BrandsGrid>
      </BrandsSection>

      <LandingFooter>
        <FooterPowered>
          {l.powered} <a href="https://menugic.com" target="_blank" rel="noopener noreferrer">Menugic</a>
        </FooterPowered>
      </LandingFooter>
    </LandingWrapper>
  );
}
