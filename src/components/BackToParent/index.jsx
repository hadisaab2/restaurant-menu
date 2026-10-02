import React from "react";
import styled from "styled-components";
import { getImageUrl } from "../../utilities/imageUrl";

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 16px;
  background: ${(p) => p.$accent + "14"};
  cursor: pointer;
  transition: background 0.2s ease;
  &:hover {
    background: ${(p) => p.$accent + "22"};
  }
  [dir="rtl"] & {
    flex-direction: row-reverse;
  }
`;

const ParentLogo = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  object-fit: cover;
  border: 1.5px solid ${(p) => p.$accent + "40"};
`;

const ParentLogoFallback = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${(p) => p.$accent};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

const Label = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: ${(p) => p.$accent};
  @media (max-width: 374px) {
    font-size: 12px;
  }
`;

const Arrow = styled.svg`
  width: 14px;
  height: 14px;
  color: ${(p) => p.$accent};
  [dir="rtl"] & {
    transform: scaleX(-1);
  }
`;

export default function BackToParent({ parent, activeLanguage, accentColor }) {
  if (!parent?.name) return null;

  const isAr = activeLanguage === "ar";
  const accent = accentColor || "#8b6f4e";

  const handleClick = () => {
    const host = window.location.hostname;
    if (host.includes("localhost") || host.includes("127.0.0.1")) {
      window.location.href = `/${parent.name}`;
    } else {
      window.location.href = `https://${parent.name}.menugic.com`;
    }
  };

  return (
    <Bar $accent={accent} onClick={handleClick}>
      <Arrow $accent={accent} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M19 12H5M12 19l-7-7 7-7" />
      </Arrow>
      {parent.logoURL ? (
        <ParentLogo src={getImageUrl(parent.logoURL)} alt={parent.name} $accent={accent} />
      ) : (
        <ParentLogoFallback $accent={accent}>
          {parent.name.charAt(0).toUpperCase()}
        </ParentLogoFallback>
      )}
      <Label $accent={accent}>
        {isAr ? `العودة إلى ${parent.name}` : `Back to ${parent.name}`}
      </Label>
    </Bar>
  );
}
