import { FaInstagram, FaRegCopy, FaWhatsapp } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { MdCopyright } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showPopup == "share" ? "0%" : "-100%")};
  background-color: ${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  padding-bottom: max(10vh, env(safe-area-inset-bottom, 10vh));

  @media (min-width: 768px) {
    max-width: 460px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const ShareWrapper = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  padding-top: 36px;
`;

export const PoweredBy = styled.pre`
  font-size: 13px;
  text-align: center;
  color: ${(props) => props.theme.popupTextColor};
  font-style: italic;
  position: absolute;
  bottom: 2px;
  width: 100%;
  opacity: 0.7;
`;

export const Link = styled.a`
  color: ${(props) => props.theme.popupTextColor};
  text-decoration: none;
  outline: none;

  &:hover {
    color: lightgray;
  }
`;

export const CopyWrite = styled(MdCopyright)`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 14px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Close = styled(IoMdClose)`
  font-size: 22px;
  position: absolute;
  top: 24px;
  right: 20px;
  cursor: pointer;
  color: ${(props) => props.theme.popupTextColor};
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:active {
    background-color: rgba(0, 0, 0, 0.06);
  }
`;

export const Title = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.popupTextColor};
  letter-spacing: 0.1px;
`;

export const LinkTitle = styled.span`
  font-size: 16px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.popupTextColor};
  margin-top: 24px;
  letter-spacing: 0.1px;
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-top: 16px;
`;

export const Media = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 0.15s ease;

  &:active {
    transform: scale(0.95);
  }
`;

export const WhatsappLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: rgba(139, 255, 184, 0.15);
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const WhatsappLogo = styled(FaWhatsapp)`
  font-size: 26px;
  color: #51c288;
`;

export const InstagramLogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(254, 218, 117, 0.15),
    rgba(250, 126, 30, 0.15),
    rgba(214, 41, 118, 0.15),
    rgba(150, 47, 191, 0.15),
    rgba(79, 91, 213, 0.15)
  );
  background-size: 300% 300%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const InstagramLogo = styled(FaInstagram)`
  font-size: 26px;
  color: #5c595b;
`;

export const MediaText = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => props.theme.popupTextColor};
`;

export const LinkContainer = styled.div`
  width: 100%;
  margin-top: 16px;
  background-color: ${(props) => props.theme.mainColor};
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px 10px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: opacity 0.2s ease;

  &:active {
    opacity: 0.85;
  }
`;

export const CategoryLinkWrapper = styled.div`
  width: 85%;
  overflow: hidden;
`;

export const CategoryLink = styled.span`
  font-size: 14px;
  color: ${(props) => props.theme.popupbackgroundColor};
  white-space: nowrap;
`;

export const CopyIcon = styled(FaRegCopy)`
  font-size: 16px;
  color: ${(props) => props.theme.popupbackgroundColor};
  position: absolute;
  right: 12px;
`;

export const Tick = styled(TiTick)`
  font-size: 20px;
  color: ${(props) => props.theme.popupbackgroundColor};
  position: absolute;
  right: 12px;
`;
