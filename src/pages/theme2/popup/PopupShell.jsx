import React, { useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";
import { IoMdClose } from "react-icons/io";

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;
const fadeOut = keyframes`
  from { opacity: 1; }
  to   { opacity: 0; }
`;
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(40px) scale(0.98); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;
const slideDown = keyframes`
  from { opacity: 1; transform: translateY(0) scale(1); }
  to   { opacity: 0; transform: translateY(40px) scale(0.98); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  z-index: 2000;
  animation: ${(p) => (p.$closing ? fadeOut : fadeIn)} 0.3s ease forwards;
`;

const Panel = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 94%;
  max-width: 520px;
  max-height: calc(100dvh - 40px);
  background: ${(p) => p.theme?.popupbackgroundColor || "#fff"};
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
  z-index: 2001;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  animation: ${(p) => (p.$closing ? slideDown : slideUp)} 0.35s
    cubic-bezier(0.34, 1.4, 0.64, 1) forwards;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 100%;
    max-height: 100dvh;
    border-radius: 0;
    top: 0;
    left: 0;
    transform: none;
    height: 100dvh;
  }
`;

const ScrollArea = styled.div`
  flex: 1;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  padding: 24px 20px 32px;

  @media (max-width: 480px) {
    padding: 20px 16px 32px;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px 0;
  flex-shrink: 0;

  @media (max-width: 480px) {
    padding: 14px 16px 0;
  }
`;

const Title = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  color: ${(p) => p.theme?.popupTextColor || "#1a1a1a"};

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const CloseBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: ${(p) => p.theme?.popupTextColor || "#1a1a1a"}12;
  color: ${(p) => p.theme?.popupTextColor || "#1a1a1a"};
  cursor: pointer;
  flex-shrink: 0;
  transition: background 0.15s;

  &:hover {
    background: ${(p) => p.theme?.popupTextColor || "#1a1a1a"}22;
  }
`;

/**
 * PopupShell — Shared popup wrapper for theme2.
 *
 * Props:
 *  - open      : boolean
 *  - onClose   : () => void
 *  - title     : string (optional header title)
 *  - children  : popup body content
 */
export default function PopupShell({ open, onClose, title, children }) {
  const [visible, setVisible] = React.useState(false);
  const [closing, setClosing] = React.useState(false);
  const panelRef = useRef(null);

  // Open
  useEffect(() => {
    if (open) {
      setVisible(true);
      setClosing(false);
      document.body.style.overflow = "hidden";
    } else if (visible) {
      // Close with animation
      setClosing(true);
      const t = setTimeout(() => {
        setVisible(false);
        setClosing(false);
        document.body.style.overflow = "";
      }, 300);
      return () => clearTimeout(t);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Back button support
  useEffect(() => {
    if (!visible) return;
    const handlePop = () => onClose?.();
    window.addEventListener("popstate", handlePop);
    return () => window.removeEventListener("popstate", handlePop);
  }, [visible, onClose]);

  // Escape key
  useEffect(() => {
    if (!visible) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <>
      <Backdrop $closing={closing} onClick={onClose} />
      <Panel $closing={closing} ref={panelRef}>
        <Header>
          <Title>{title || ""}</Title>
          <CloseBtn onClick={onClose}>
            <IoMdClose size={20} />
          </CloseBtn>
        </Header>
        <ScrollArea>{children}</ScrollArea>
      </Panel>
    </>
  );
}
