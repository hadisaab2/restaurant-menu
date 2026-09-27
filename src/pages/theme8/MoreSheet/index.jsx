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
  max-width: 480px;
  background: var(--c-surface);
  border-radius: var(--r-xl) var(--r-xl) 0 0;
  padding-bottom: var(--safe-bottom);
  animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  @keyframes slideUp {
    from { transform: translateY(100%); }
    to { transform: translateY(0); }
  }
`;

const Handle = styled.div`
  display: flex;
  justify-content: center;
  padding: var(--sp-3) 0 var(--sp-1);
  span {
    width: 36px;
    height: 4px;
    border-radius: 2px;
    background: var(--c-border);
  }
`;

const Body = styled.div`
  padding: var(--sp-2) var(--sp-4) var(--sp-6);
`;

const Item = styled.button`
  display: flex;
  align-items: center;
  gap: var(--sp-3);
  width: 100%;
  padding: var(--sp-3) var(--sp-3);
  border-radius: var(--r-md);
  font-size: var(--text-base);
  font-weight: 500;
  color: var(--c-text);
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  transition: background var(--dur-fast);
  text-align: start;
  &:hover { background: var(--c-surface-alt); }
  svg { width: 20px; height: 20px; color: var(--c-text-2); flex-shrink: 0; }
`;

const menuItems = [
  { key: "info", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg> },
  { key: "hours", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> },
  { key: "branches", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg> },
  { key: "contact", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg> },
  { key: "about", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg> },
  { key: "share", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> },
  { key: "feedback", icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg> },
];

export default function MoreSheet({ show, onClose, onAction, activeLanguage }) {
  const lang = activeLanguage || "en";

  return (
    <Overlay $show={show}>
      <Backdrop onClick={onClose} />
      <Sheet>
        <Handle><span /></Handle>
        <Body>
          {menuItems.map((item) => (
            <Item key={item.key} onClick={() => { onAction(item.key); onClose(); }}>
              {item.icon}
              <span>{t(`more.${item.key}`, lang)}</span>
            </Item>
          ))}
        </Body>
      </Sheet>
    </Overlay>
  );
}
