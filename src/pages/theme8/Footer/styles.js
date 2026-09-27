import styled from "styled-components";

export const FooterWrap = styled.footer`
  width: 100%;
  padding: 40px 16px 20px;
  margin-top: auto;
  background: ${(p) => p.theme?.footerSectionBackgroundColor || p.theme?.textColor || "#1a1a1a"};
  color: ${(p) => p.theme?.footerTextColor || "#fff"};
  direction: ${(p) => (p.$rtl ? "rtl" : "ltr")};
  @media (min-width: 768px) {
    padding: 48px 24px 24px;
  }
`;

export const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-bottom: 40px;
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    gap: 40px;
  }
`;

export const FooterBrand = styled.div`
  text-align: start;
`;

export const FooterLogo = styled.span`
  font-size: 1.25rem;
  font-weight: 700;
  letter-spacing: -0.02em;
  color: inherit;
  display: inline-block;
`;

export const FooterLogoImg = styled.img`
  max-width: 140px;
  max-height: 56px;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
`;

export const FooterLogoAccent = styled.span`
  color: ${(p) => p.theme?.mainColor || "#007bff"};
`;

export const FooterTagline = styled.p`
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.7;
  margin: 12px 0 0 0;
  text-align: start;
`;

export const FooterCol = styled.div`
  text-align: start;
`;

export const FooterColTitle = styled.h4`
  font-size: 18px;
  font-weight: 600;
  color: inherit;
  margin: 0 0 16px 0;
  text-align: start;
`;

export const FooterLink = styled.a`
  display: block;
  font-size: 14px;
  opacity: 0.7;
  text-decoration: none;
  margin-bottom: 10px;
  transition: opacity 0.2s ease;
  cursor: pointer;
  border: none;
  background: none;
  font: inherit;
  text-align: start;
  color: inherit;
  padding: 0;
  &:hover {
    opacity: 1;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterBranchesCol = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 24px;
`;

export const FooterBranchBlock = styled.div`
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  &:last-child {
    border-bottom: none;
  }
`;

export const FooterBranchName = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
  color: inherit;
`;

export const FooterContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 14px;
  opacity: 0.7;
  margin-bottom: 10px;
  line-height: 1.5;
  a {
    color: inherit;
    text-decoration: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterContactIcon = styled.span`
  flex-shrink: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 2px;
`;

export const FooterHoursText = styled.p`
  font-size: 14px;
  opacity: 0.7;
  margin: 0 0 8px 0;
  line-height: 1.5;
  text-align: start;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const FooterSocialWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const FooterSocialLink = styled.a`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: background 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
  }
`;

export const FooterDivider = styled.div`
  padding-top: 32px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  text-align: center;
`;

export const FooterCopyright = styled.p`
  font-size: 12px;
  opacity: 0.5;
  margin: 0;
`;
