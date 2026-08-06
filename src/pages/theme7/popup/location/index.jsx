import React from "react";
import { FiX, FiMapPin, FiPhone, FiMessageCircle } from "react-icons/fi";
import styled from "styled-components";
import {
  Overlay,
  PopupWrap,
  PopupHeader,
  PopupTitle,
  PopupClose,
  PopupBody,
} from "../../styles";

/* ── local helpers ── */
const BranchList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const BranchCard = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid #f0ede7;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    margin-top: 2px;
    color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

const BranchInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const BranchName = styled.h4`
  font-size: 0.8125rem;
  font-weight: 600;
  margin: 0 0 4px;
  color: ${(p) => p.theme.popupTextColor || "#1A1816"};
`;

const BranchDetail = styled.p`
  font-size: 0.75rem;
  color: #918c86;
  margin: 0 0 2px;
  &:last-child {
    margin-bottom: 0;
  }
`;

const BranchLink = styled.a`
  font-size: 0.75rem;
  color: #918c86;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 2px;
  transition: color 150ms;
  svg {
    width: 14px;
    height: 14px;
    margin: 0;
    color: inherit;
  }
  &:hover {
    color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

const EmptyMsg = styled.p`
  text-align: center;
  color: #918c86;
  font-size: 0.8125rem;
  padding: 32px 0;
  margin: 0;
`;

export default function LocationPopup({
  restaurant,
  activeLanguage,
  popupHandler,
  isRtl,
}) {
  const loc = (en, ar) => (isRtl ? ar || en : en);
  const branches = restaurant?.branches || [];

  return (
    <>
      <Overlay onClick={() => popupHandler(null)} />
      <PopupWrap>
        <PopupHeader>
          <PopupTitle $rtl={isRtl}>{loc("Branches", "الفروع")}</PopupTitle>
          <PopupClose onClick={() => popupHandler(null)}>
            <FiX />
          </PopupClose>
        </PopupHeader>

        <PopupBody>
          {branches.length === 0 ? (
            <EmptyMsg>
              {loc("No branches available", "لا توجد فروع")}
            </EmptyMsg>
          ) : (
            <BranchList>
              {branches.map((branch) => (
                <BranchCard key={branch.id}>
                  <FiMapPin />
                  <BranchInfo>
                    <BranchName>
                      {isRtl && branch.ar_name
                        ? branch.ar_name
                        : branch.name}
                    </BranchName>
                    {branch.address && (
                      <BranchDetail>{branch.address}</BranchDetail>
                    )}
                    {branch.phone && (
                      <BranchLink href={`tel:${branch.phone}`}>
                        <FiPhone />
                        {branch.phone}
                      </BranchLink>
                    )}
                    {branch.whatsapp_number && (
                      <BranchLink
                        href={`https://wa.me/${branch.whatsapp_number}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FiMessageCircle />
                        {loc("WhatsApp", "واتساب")}
                      </BranchLink>
                    )}
                  </BranchInfo>
                </BranchCard>
              ))}
            </BranchList>
          )}
        </PopupBody>
      </PopupWrap>
    </>
  );
}
