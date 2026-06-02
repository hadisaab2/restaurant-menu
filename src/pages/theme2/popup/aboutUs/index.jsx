import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  Hero,
  HeroTitle,
  HeroGradient,
  HeroSubtitle,
  DecorativeLine,
  Section,
  SectionTitle,
  SectionTextBlock,
  SectionParagraph,
  ValuesGrid,
  ValueCard,
  ValueIcon,
  ValueTitle,
  ValueDesc,
  FooterBadge,
} from "../../../theme4/popup/aboutUs/styles";
import { FaHeart, FaLeaf, FaUsers, FaAward, FaInfoCircle } from "react-icons/fa";
import PopupShell from "../PopupShell";

const ICON_MAP = { heart: FaHeart, leaf: FaLeaf, users: FaUsers, award: FaAward };

const DEFAULT_CONTENT = {
  en: {
    title: "About Us", subtitle: "Our story, values, and commitment to you",
    storyTitle: "Our Story",
    story: "We are passionate about bringing you the finest dining experience. From our kitchen to your table, we focus on quality ingredients, authentic recipes, and a welcoming atmosphere.",
    valuesTitle: "What We Stand For",
    values: [
      { icon: FaHeart, title: "Passion", desc: "Love in every recipe" },
      { icon: FaLeaf, title: "Fresh", desc: "Quality ingredients daily" },
      { icon: FaUsers, title: "Community", desc: "Together at the table" },
      { icon: FaAward, title: "Excellence", desc: "Consistent quality" },
    ],
    footer: "Thank you for being part of our journey.",
  },
  ar: {
    title: "من نحن", subtitle: "قصتنا وقيمنا والتزامنا تجاهكم",
    storyTitle: "قصتنا",
    story: "نحن نؤمن بتقديم أفضل تجربة طعام لكم. من مطبخنا إلى مائدتكم، نركز على المكونات الجيدة والوصفات الأصيلة والجو الترحيبي.",
    valuesTitle: "ما نؤمن به",
    values: [
      { icon: FaHeart, title: "الشغف", desc: "حب في كل وصفة" },
      { icon: FaLeaf, title: "الطازجة", desc: "مكونات يومية متميزة" },
      { icon: FaUsers, title: "المجتمع", desc: "معاً على المائدة" },
      { icon: FaAward, title: "التميز", desc: "جودة متسقة" },
    ],
    footer: "شكراً لكونكم جزءاً من رحلتنا.",
  },
};

function buildContent(activeLanguage, restaurant) {
  const section = restaurant?.aboutUs;
  const valuesList = restaurant?.aboutUsValues;
  const isEn = activeLanguage === "en";
  if (!section && !(valuesList && valuesList.length > 0)) {
    return DEFAULT_CONTENT[activeLanguage] || DEFAULT_CONTENT.en;
  }
  const title = isEn ? (section?.en_title || "About Us") : (section?.ar_title || "من نحن");
  const subtitle = isEn ? (section?.en_subtitle || "") : (section?.ar_subtitle || "");
  const storyTitle = isEn ? (section?.en_story_title || "Our Story") : (section?.ar_story_title || "قصتنا");
  const story = isEn ? (section?.en_story || "") : (section?.ar_story || "");
  const valuesTitle = isEn ? (section?.en_values_title || "What We Stand For") : (section?.ar_values_title || "ما نؤمن به");
  const footer = isEn ? (section?.en_footer || "") : (section?.ar_footer || "");
  const values = (valuesList || []).map((v) => ({
    icon: ICON_MAP[(v.icon_type || "").toLowerCase()] || FaInfoCircle,
    title: isEn ? (v.en_title || "") : (v.ar_title || ""),
    desc: isEn ? (v.en_description || "") : (v.ar_description || ""),
  })).filter((v) => v.title || v.desc);
  return {
    title, subtitle, storyTitle, story, valuesTitle,
    values: values.length ? values : DEFAULT_CONTENT[activeLanguage]?.values || DEFAULT_CONTENT.en.values,
    footer: footer || DEFAULT_CONTENT[activeLanguage]?.footer || DEFAULT_CONTENT.en.footer,
  };
}

export default function AboutUsPopup({ showPopup, popupHandler }) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const restaurant = useSelector((state) => state.restaurant?.[restaurantName]);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const t = buildContent(activeLanguage, restaurant);

  return (
    <PopupShell
      open={showPopup === "about"}
      onClose={() => popupHandler(null)}
      title={t.title}
    >
      <Hero>
        <HeroTitle>
          <HeroGradient>{t.title}</HeroGradient>
        </HeroTitle>
        <HeroSubtitle>{t.subtitle}</HeroSubtitle>
        <DecorativeLine />
      </Hero>
      <Section $delay={0}>
        <SectionTitle>{t.storyTitle}</SectionTitle>
        <SectionTextBlock>
          {(() => {
            const raw = t.story || "";
            const paragraphs = raw.split(/\n\n+|\n/).map((p) => p.trim()).filter(Boolean);
            if (paragraphs.length === 0 && raw.trim()) return <SectionParagraph>{raw.trim()}</SectionParagraph>;
            return paragraphs.map((para, i) => <SectionParagraph key={i}>{para}</SectionParagraph>);
          })()}
        </SectionTextBlock>
      </Section>
      <Section $delay={0}>
        <SectionTitle>{t.valuesTitle}</SectionTitle>
        <ValuesGrid>
          {t.values.map((v, i) => {
            const Icon = v.icon;
            return (
              <ValueCard key={i}>
                <ValueIcon><Icon /></ValueIcon>
                <ValueTitle>{v.title}</ValueTitle>
                <ValueDesc>{v.desc}</ValueDesc>
              </ValueCard>
            );
          })}
        </ValuesGrid>
      </Section>
      <FooterBadge>{t.footer}</FooterBadge>
    </PopupShell>
  );
}
