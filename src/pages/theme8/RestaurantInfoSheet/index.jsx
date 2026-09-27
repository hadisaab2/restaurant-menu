import React from "react";
import styled from "styled-components";
import { t } from "../i18n";
import { Backdrop } from "../styles";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  display: ${p => p.$show ? "flex" : "none"};
  align-items: flex-end;
  justify-content: center;
`;

const Sheet = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 520px;
  max-height: 85vh;
  background: var(--c-surface);
  border-radius: var(--r-xl) var(--r-xl) 0 0;
  display: flex;
  flex-direction: column;
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`;

const SheetHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--sp-4);
  border-bottom: 1px solid var(--c-border-light);
`;

const SheetTitle = styled.h3`
  font-family: var(--font-display);
  font-size: var(--text-lg);
  font-weight: 700;
  [dir="rtl"] & { font-family: var(--font-ar); }
`;

const CloseBtn = styled.button`
  width: 32px;
  height: 32px;
  border-radius: var(--r-full);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--c-border);
  background: none;
  cursor: pointer;
  color: var(--c-text);
  &:hover { background: var(--c-surface-alt); }
`;

const SheetBody = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: var(--sp-4);
`;

const Section = styled.div`
  margin-bottom: var(--sp-5);
  &:last-child { margin-bottom: 0; }
`;

const SectionLabel = styled.h4`
  font-size: var(--text-xs);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--c-text-3);
  margin-bottom: var(--sp-3);
`;

const InfoRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: var(--sp-2);
  padding: var(--sp-2) 0;
  font-size: var(--text-sm);
  color: var(--c-text-2);
  svg { width: 16px; height: 16px; color: var(--c-text-3); flex-shrink: 0; margin-top: 2px; }
`;

const BranchItem = styled.div`
  padding: var(--sp-3);
  border: 1px solid var(--c-border-light);
  border-radius: var(--r-md);
  margin-bottom: var(--sp-2);
`;

const BranchName = styled.div`
  font-weight: 600;
  font-size: var(--text-sm);
  margin-bottom: var(--sp-1);
`;

const BranchAddr = styled.div`
  font-size: var(--text-xs);
  color: var(--c-text-3);
`;

const AllergyBox = styled.div`
  padding: var(--sp-3);
  background: var(--c-warning-light);
  border-radius: var(--r-md);
  font-size: var(--text-sm);
  color: var(--c-warning);
  line-height: 1.5;
`;

export default function RestaurantInfoSheet({ show, onClose, restaurant, activeLanguage }) {
  const lang = activeLanguage || "en";
  if (!restaurant) return null;

  const branches = restaurant.branches || [];
  const workingHours = restaurant.workingHours || [];
  const phone = branches[0]?.phone_number || "";

  const formatDays = (days) => {
    if (!days) return "";
    return days.split(",").map(d => d.trim().charAt(0).toUpperCase() + d.trim().slice(1)).join(", ");
  };

  return (
    <Overlay $show={show}>
      <Backdrop onClick={onClose} />
      <Sheet>
        <SheetHeader>
          <SheetTitle>{t("info.title", lang)}</SheetTitle>
          <CloseBtn onClick={onClose} aria-label="Close">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
          </CloseBtn>
        </SheetHeader>
        <SheetBody>
          {workingHours.length > 0 && (
            <Section>
              <SectionLabel>{t("info.hours", lang)}</SectionLabel>
              {workingHours.map((wh, i) => (
                <InfoRow key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  <div>
                    <div style={{ fontWeight: 500 }}>{formatDays(wh.days)}</div>
                    <div style={{ color: "var(--c-text-3)" }}>{wh.start_time} - {wh.end_time}</div>
                  </div>
                </InfoRow>
              ))}
            </Section>
          )}

          {phone && (
            <Section>
              <SectionLabel>{t("info.contact", lang)}</SectionLabel>
              <InfoRow>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
                <a href={`tel:${phone}`} style={{ color: "var(--c-accent)" }}>{phone}</a>
              </InfoRow>
            </Section>
          )}

          {branches.length > 0 && (
            <Section>
              <SectionLabel>{t("info.branches", lang)}</SectionLabel>
              {branches.map((b) => (
                <BranchItem key={b.id}>
                  <BranchName>{lang === "ar" ? (b.ar_name || b.en_name || b.name) : (b.en_name || b.name)}</BranchName>
                  {b.address && <BranchAddr>{b.address}</BranchAddr>}
                </BranchItem>
              ))}
            </Section>
          )}

          <Section>
            <SectionLabel>{t("info.allergy_title", lang)}</SectionLabel>
            <AllergyBox>{t("info.allergy_text", lang)}</AllergyBox>
          </Section>
        </SheetBody>
      </Sheet>
    </Overlay>
  );
}
