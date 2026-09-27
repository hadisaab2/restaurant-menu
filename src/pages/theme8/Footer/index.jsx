import React from "react";
import { FaPhone, FaWhatsapp, FaFacebook, FaInstagram, FaGlobe, FaTiktok, FaMapMarkerAlt } from "react-icons/fa";
import {
  FooterWrap,
  FooterContainer,
  FooterGrid,
  FooterBrand,
  FooterLogoImg,
  FooterLogo,
  FooterLogoAccent,
  FooterTagline,
  FooterCol,
  FooterColTitle,
  FooterLink,
  FooterBranchesCol,
  FooterBranchBlock,
  FooterBranchName,
  FooterContactItem,
  FooterContactIcon,
  FooterHoursText,
  FooterSocialWrap,
  FooterSocialLink,
  FooterDivider,
  FooterCopyright,
} from "./styles";

const GCS_BASE = "https://storage.googleapis.com/menugic-images/";

const getSocialIcon = (platform) => {
  const p = platform?.toLowerCase() || "";
  if (p.includes("facebook")) return <FaFacebook />;
  if (p.includes("instagram")) return <FaInstagram />;
  if (p.includes("tiktok")) return <FaTiktok />;
  if (p.includes("whatsapp")) return <FaWhatsapp />;
  return <FaGlobe />;
};

const formatPhone = (phone) => {
  if (!phone) return "";
  return phone.replace(/\s/g, "");
};

export default function Footer({ restaurant, restaurantName, activeLanguage, onExploreClick }) {
  const branches = restaurant?.branches || [];
  const socialMedia = restaurant?.socialMedia || [];
  const isRtl = activeLanguage === "ar";

  return (
    <FooterWrap $rtl={isRtl}>
      <FooterContainer>
        <FooterGrid>
          {/* Brand */}
          <FooterBrand>
            {restaurant?.logoURL ? (
              <FooterLogoImg
                src={`${GCS_BASE}${restaurant.logoURL}`}
                alt={restaurant?.name || restaurantName}
              />
            ) : (
              <FooterLogo>
                {(restaurant?.name || restaurantName || "").length > 0 ? (
                  <>
                    {(restaurant?.name || restaurantName).slice(0, 1)}
                    <FooterLogoAccent>{(restaurant?.name || restaurantName).slice(1)}</FooterLogoAccent>
                  </>
                ) : (
                  <FooterLogoAccent>{restaurantName}</FooterLogoAccent>
                )}
              </FooterLogo>
            )}
            <FooterTagline>
              {isRtl
                ? (restaurant?.ar_slogan || restaurant?.en_slogan || "طعام ذو جودة، نوصله إليك.")
                : (restaurant?.en_slogan || restaurant?.ar_slogan || "Quality food, delivered.")}
            </FooterTagline>
          </FooterBrand>

          {/* Shop */}
          <FooterCol>
            <FooterColTitle>{isRtl ? "تسوق" : "Shop"}</FooterColTitle>
            <FooterLink as="button" type="button" onClick={() => onExploreClick?.()}>
              {isRtl ? "جميع المنتجات" : "All Products"}
            </FooterLink>
            <FooterLink as="button" type="button" onClick={() => onExploreClick?.()}>
              {isRtl ? "تصفح الفئات" : "Browse Categories"}
            </FooterLink>
          </FooterCol>

          {/* Branches / Contact */}
          <FooterCol>
            <FooterColTitle>
              {isRtl ? (branches.length > 1 ? "الفروع" : "تواصل") : (branches.length > 1 ? "Branches" : "Contact")}
            </FooterColTitle>
            {branches.length > 0 ? (
              <FooterBranchesCol>
                {branches.map((branch) => (
                  <FooterBranchBlock key={branch.id || branch.name}>
                    {branches.length > 1 && (
                      <FooterBranchName>{branch.name || (isRtl ? "فرع" : "Branch")}</FooterBranchName>
                    )}
                    {branch.phone_number && (
                      <FooterContactItem>
                        <FooterContactIcon><FaPhone size={14} /></FooterContactIcon>
                        <a href={`tel:${formatPhone(branch.phone_number)}`}>{branch.phone_number}</a>
                      </FooterContactItem>
                    )}
                    {branch.whatsapp_number && (
                      <FooterContactItem>
                        <FooterContactIcon><FaWhatsapp size={14} /></FooterContactIcon>
                        <a href={`https://wa.me/${formatPhone(branch.whatsapp_number)}`} target="_blank" rel="noopener noreferrer">{branch.whatsapp_number}</a>
                      </FooterContactItem>
                    )}
                    {(branch.location || branch.address) && (
                      <FooterContactItem>
                        <FooterContactIcon><FaMapMarkerAlt size={14} /></FooterContactIcon>
                        <span>{branch.location || branch.address}</span>
                      </FooterContactItem>
                    )}
                    {(branch.mapLink || branch.map_link) && (
                      <FooterContactItem>
                        <FooterContactIcon><FaMapMarkerAlt size={14} /></FooterContactIcon>
                        <a
                          href={((branch.mapLink || branch.map_link) || "").startsWith("http") ? (branch.mapLink || branch.map_link) : `https://${branch.mapLink || branch.map_link}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {isRtl ? "عرض على الخريطة" : "View on map"}
                        </a>
                      </FooterContactItem>
                    )}
                  </FooterBranchBlock>
                ))}
              </FooterBranchesCol>
            ) : (
              <FooterContactItem>
                <FooterContactIcon><FaPhone size={14} /></FooterContactIcon>
                <span>{isRtl ? "تواصل معنا" : "Contact us"}</span>
              </FooterContactItem>
            )}
          </FooterCol>

          {/* Working Hours */}
          <FooterCol>
            <FooterColTitle>{isRtl ? "أوقات العمل" : "Working Hours"}</FooterColTitle>
            {restaurant?.workingHours?.length > 0 ? (
              restaurant.workingHours.map((row, idx) => {
                const dayLabels = { monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu", friday: "Fri", saturday: "Sat", sunday: "Sun" };
                const daysStr = row.days
                  ? row.days.split(",").map((d) => dayLabels[d.trim().toLowerCase()] || d.trim()).join(", ")
                  : "";
                const start = String(row.start_time || "").slice(0, 5);
                const end = String(row.end_time || "").slice(0, 5);
                return (
                  <FooterHoursText key={idx}>
                    {daysStr}: {start} – {end}
                  </FooterHoursText>
                );
              })
            ) : (
              <>
                <FooterHoursText>{isRtl ? "الإثنين – الجمعة: 9 ص – 8 م" : "Mon – Fri: 9AM – 8PM"}</FooterHoursText>
                <FooterHoursText>{isRtl ? "السبت: 9 ص – 6 م" : "Saturday: 9AM – 6PM"}</FooterHoursText>
                <FooterHoursText>{isRtl ? "الأحد: 10 ص – 4 م" : "Sunday: 10AM – 4PM"}</FooterHoursText>
              </>
            )}
          </FooterCol>

          {/* Social Media */}
          <FooterCol>
            <FooterColTitle>{isRtl ? "تابعنا" : "Follow us"}</FooterColTitle>
            {socialMedia.length > 0 ? (
              <FooterSocialWrap>
                {socialMedia.slice(0, 6).map((social, index) => {
                  const link = social.link || social.url || "";
                  const href = link.startsWith("http") ? link : `https://${link}`;
                  return (
                    <FooterSocialLink key={index} href={href} target="_blank" rel="noopener noreferrer">
                      {getSocialIcon(social.platform || social.name)}
                    </FooterSocialLink>
                  );
                })}
              </FooterSocialWrap>
            ) : (
              <FooterHoursText style={{ opacity: 0.7 }}>{isRtl ? "لا توجد روابط" : "No social links"}</FooterHoursText>
            )}
          </FooterCol>
        </FooterGrid>

        <FooterDivider>
          <FooterCopyright>
            &copy; {new Date().getFullYear()} Menugic. {isRtl ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </FooterCopyright>
        </FooterDivider>
      </FooterContainer>
    </FooterWrap>
  );
}
