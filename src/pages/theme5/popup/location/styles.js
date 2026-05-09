import styled, { keyframes } from "styled-components";
import { MdLocationOn } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { FaLocationArrow } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { MdCopyright } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  position: fixed;
  bottom: ${(props) => (props.showPopup == "location" ? "0%" : "-100%")};
  background-color: ${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  border-top-right-radius: 28px;
  border-top-left-radius: 28px;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.12);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 5;
  padding-bottom: max(10vh, env(safe-area-inset-bottom, 10vh));

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;

  @media (min-width: 768px) {
    max-width: 500px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 28px 28px 0 0;
  }
`;

export const Title = styled.span`
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.mainColor};
  letter-spacing: -0.3px;

  @media (min-width: 768px) {
    font-size: 28px;
  }
`;

export const ResName = styled.span`
  font-size: 26px;
  font-weight: 700;
  text-align: left;
  color: ${(props) => props.theme.mainColor};
  letter-spacing: -0.3px;
`;

export const TitleContainer = styled.span`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  justify-content: flex-end;
  min-height: 10vh;
  padding-top: 20px;
`;

export const BranchInfo = styled.div`
  margin-top: 24px;
  width: 90%;
  display: flex;
  flex-direction: column;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

export const Info = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor};
  text-decoration: none;
`;

export const MapLink = styled.a`
  font-size: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.popupTextColor};
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:active {
    opacity: 0.7;
  }
`;

export const LocationLogo = styled(FaLocationArrow)`
  font-size: 22px;
  opacity: 0.8;
  color: ${(props) => props.theme.popupTextColor};
`;

export const CallLogo = styled(IoIosCall)`
  font-size: 22px;
  opacity: 0.8;
  color: ${(props) => props.theme.popupTextColor};
`;

export const MapsLogo = styled(MdLocationOn)`
  font-size: 22px;
  opacity: 0.8;
  color: ${(props) => props.theme.popupTextColor};
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

export const SocialMediaTitle = styled.span`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.2px;
`;

export const SocialMediaTitleWrapper = styled.div`
  width: 90%;
  margin-top: 16px;
`;

export const SocialMediaContainer = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: row;
  width: 90%;
  align-items: center;
  gap: 12px;
`;

const socialIconBase = `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  -webkit-tap-highlight-color: transparent;

  &:hover {
    transform: scale(1.08);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const InstagramContainer = styled.a`
  ${socialIconBase}
  border: 1.5px solid ${(props) => props.theme.popupTextColor};
`;

export const WhatsappContainer = styled.a`
  ${socialIconBase}
  border: 1.5px solid ${(props) => props.theme.popupTextColor};
`;

export const TiktokContainer = styled.a`
  ${socialIconBase}
  border: 1.5px solid ${(props) => props.theme.popupTextColor};
`;

export const FacebookContainer = styled.a`
  ${socialIconBase}
  border: 1.5px solid ${(props) => props.theme.popupTextColor};
`;

export const FacebookLogo = styled(FaFacebookF)`
  font-size: 18px;
  color: ${(props) => props.theme.popupTextColor};
`;

export const WhatsappLogo = styled(IoLogoWhatsapp)`
  font-size: 18px;
  color: ${(props) => props.theme.popupTextColor};
`;

export const InstagramLogo = styled(FaInstagram)`
  font-size: 18px;
  color: ${(props) => props.theme.popupTextColor};
`;

export const TiktokLogo = styled(BsTiktok)`
  font-size: 18px;
  color: ${(props) => props.theme.popupTextColor};
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

export const ButttonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  height: 50px;
  gap: 16px;
  margin-top: 24px;
`;

export const ButtonFilled = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-color: ${(props) => props.theme.mainColor};
  width: ${(props) => (props.activeButton == "Call" ? "80%" : "50%")};
  height: 100%;
  border: 0;
  color: ${(props) => props.theme.popupbackgroundColor};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  gap: 12px;
  position: relative;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: transparent;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
`;

const borderanimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

export const ShadeBox = styled.div`
  position: absolute;
  width: 10%;
  height: 50%;
  background-color: ${(props) =>
    props.activeButton == "Call"
      ? props.theme.mainColor
      : props.theme.popupbackgroundColor};
  left: 0;
  z-index: 5;
`;

export const ShadeBorder = styled.div`
  position: absolute;
  width: 1px;
  height: 100%;
  background-color: ${(props) =>
    props.activeButton == "Call"
      ? props.theme.popupbackgroundColor
      : props.theme.mainColor};
  right: 0;
  animation: ${borderanimation} 0.5s ease-in-out infinite;
`;

const placeholderAnimation = keyframes`
  0% { opacity: 0; left: -10%; }
  100% { opacity: 1; left: 16%; }
`;

export const ChoosePlaceHolder = styled.span`
  position: absolute;
  left: 16%;
  color: ${(props) =>
    props.activeButton == "Call"
      ? props.theme.popupbackgroundColor
      : props.theme.mainColor};
  animation: ${placeholderAnimation} 0.4s ease-out;
  z-index: 4;
  font-size: 14px;
`;

const arrowanimation = keyframes`
  0% { opacity: 0; rotate: calc(180deg); }
  100% { opacity: 1; rotate: calc(0deg); }
`;

export const Arrow = styled(IoIosArrowDown)`
  color: ${(props) =>
    props.activeButton == "Call"
      ? props.theme.popupbackgroundColor
      : props.theme.mainColor};
  font-size: 15px;
  position: absolute;
  right: 5%;
  animation: ${arrowanimation} 0.4s ease-out;
`;

const OptionsListAnimation = keyframes`
  0% { max-height: 0px; }
  100% { max-height: 300px; }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 110%;
  left: 0;
  right: 0;
  border-radius: 12px;
  z-index: 1000;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 300px;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupbackgroundColor};
  width: 100%;
  animation: ${OptionsListAnimation} 0.4s ease-out;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
`;

export const Option = styled.li`
  cursor: pointer;
  transition: background 0.2s ease;
  padding: 12px 16px;
  font-size: 15px;
  -webkit-tap-highlight-color: transparent;

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonBorder = styled.button`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 12px;
  align-items: center;
  background-color: transparent;
  width: ${(props) => (props.activeButton == "Message" ? "80%" : "50%")};
  height: 100%;
  border: 1.5px solid ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.popupTextColor};
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }

  &:active {
    transform: scale(0.97);
  }
`;

export const BranchSpan = styled.span`
  color: ${(props) => props.theme.popupTextColor};
  font-size: 16px;
  font-weight: 700;
`;

export const BranchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
`;

export const BranchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 48px;
`;

export const BranchIconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 15px;
  align-items: center;
  justify-content: center;
  position: relative;
  color: ${(props) => props.theme.mainColor};
`;

export const BranchIcon = styled.div`
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.mainColor};
`;

export const Iconhole = styled.div`
  width: 5px;
  height: 5px;
  position: absolute;
  border-radius: 50%;
  background-color: ${(props) => props.theme.popupbackgroundColor};
`;

export const Branch = styled.a`
  font-size: 14px;
  font-weight: 400;
  flex: 1;
  color: ${(props) => props.theme.popupTextColor};
  display: flex;
  align-items: center;
  margin-left: 16px;
  height: 100%;
  line-height: 1.4;
  text-decoration: none;
`;

export const LineContainer = styled.div`
  width: 15px;
  height: 44px;
  top: 24px;
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
`;

export const Line = styled.div`
  width: 2px;
  height: 100%;
  background-color: ${(props) => props.theme.popupTextColor};
  opacity: 0.3;
`;
