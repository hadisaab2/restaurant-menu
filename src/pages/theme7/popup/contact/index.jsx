import React from "react";
import { FiX, FiPhone, FiMail, FiMapPin, FiMessageCircle } from "react-icons/fi";
import {
  Overlay,
  PopupWrap,
  PopupHeader,
  PopupTitle,
  PopupClose,
  PopupBody,
  PopupBtn,
} from "../../styles";
import styled from "styled-components";

/* ── local helpers ── */
const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ContactRow = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  text-decoration: none;
  color: ${(p) => p.theme.popupTextColor || "#1A1816"};
  font-size: 0.8125rem;
  transition: border-color 150ms;
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
  &:hover {
    border-color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

const AddressRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  color: ${(p) => p.theme.popupTextColor || "#1A1816"};
  font-size: 0.8125rem;
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

export default function ContactPopup({
  restaurant,
  activeLanguage,
  popupHandler,
  isRtl,
}) {
  const loc = (en, ar) => (isRtl ? ar || en : en);
  const branch = restaurant?.branches?.[0];

  return (
    <>
      <Overlay onClick={() => popupHandler(null)} />
      <PopupWrap>
        <PopupHeader>
          <PopupTitle $rtl={isRtl}>{loc("Contact", "تواصل")}</PopupTitle>
          <PopupClose onClick={() => popupHandler(null)}>
            <FiX />
          </PopupClose>
        </PopupHeader>

        <PopupBody>
          <ContactList>
            {branch?.phone && (
              <ContactRow href={`tel:${branch.phone}`}>
                <FiPhone />
                <span>{branch.phone}</span>
              </ContactRow>
            )}

            {branch?.whatsapp_number && (
              <PopupBtn
                as="a"
                href={`https://wa.me/${branch.whatsapp_number}`}
                target="_blank"
                rel="noopener noreferrer"
                $variant="whatsapp"
              >
                <FiMessageCircle />
                {loc("WhatsApp", "واتساب")}
              </PopupBtn>
            )}

            {branch?.email && (
              <ContactRow href={`mailto:${branch.email}`}>
                <FiMail />
                <span>{branch.email}</span>
              </ContactRow>
            )}

            {branch?.address && (
              <AddressRow>
                <FiMapPin />
                <span>{branch.address}</span>
              </AddressRow>
            )}
          </ContactList>
        </PopupBody>
      </PopupWrap>
    </>
  );
}
