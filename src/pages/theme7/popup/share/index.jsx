import React, { useState } from "react";
import { FiX, FiCopy, FiCheck, FiShare2 } from "react-icons/fi";
import styled from "styled-components";
import {
  Overlay,
  PopupWrap,
  PopupHeader,
  PopupTitle,
  PopupClose,
  PopupBody,
  PopupBtn,
} from "../../styles";

/* ── local helpers ── */
const CopyRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const UrlBox = styled.div`
  flex: 1;
  min-width: 0;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  font-size: 0.75rem;
  color: #918c86;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CopyBtn = styled.button`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  border: 1px solid #e5e2db;
  background: ${(p) => p.theme.searchbackground || "#F4F2ED"};
  color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 150ms;
  svg {
    width: 18px;
    height: 18px;
  }
  &:hover {
    border-color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  }
`;

const CopiedLabel = styled.span`
  font-size: 0.6875rem;
  color: ${(p) => p.theme.mainColor || "#9E7C0C"};
  font-weight: 600;
  text-align: center;
  display: block;
  margin-bottom: 12px;
`;

export default function SharePopup({ restaurant, popupHandler, isRtl }) {
  const loc = (en, ar) => (isRtl ? ar || en : en);
  const [copied, setCopied] = useState(false);
  const url = window.location.href;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const nativeShare = () => {
    if (navigator.share) {
      navigator.share({ title: restaurant?.name, url });
    }
  };

  return (
    <>
      <Overlay onClick={() => popupHandler(null)} />
      <PopupWrap>
        <PopupHeader>
          <PopupTitle $rtl={isRtl}>{loc("Share", "مشاركة")}</PopupTitle>
          <PopupClose onClick={() => popupHandler(null)}>
            <FiX />
          </PopupClose>
        </PopupHeader>

        <PopupBody>
          <CopyRow>
            <UrlBox>{url}</UrlBox>
            <CopyBtn onClick={copy}>
              {copied ? <FiCheck /> : <FiCopy />}
            </CopyBtn>
          </CopyRow>

          {copied && (
            <CopiedLabel>{loc("Copied!", "تم النسخ!")}</CopiedLabel>
          )}

          {navigator.share && (
            <PopupBtn onClick={nativeShare}>
              <FiShare2 />
              {loc("Share", "مشاركة")}
            </PopupBtn>
          )}
        </PopupBody>
      </PopupWrap>
    </>
  );
}
