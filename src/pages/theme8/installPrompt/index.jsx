import React from "react";
import { ButtonContainer, DismissButton, InstallButton, PopupContainer, PopupText } from "./styles";


export const InstallPrompt = ({ onInstall, onDismiss,restaurantName,showInstallPopup }) => {
  return (
    <PopupContainer showInstallPopup={showInstallPopup}>
      <PopupText>Access <b>{restaurantName}</b> anytime with one tap <b>Install The App!</b></PopupText>
      <ButtonContainer>
        <InstallButton onClick={onInstall}>Install</InstallButton>
        <DismissButton onClick={onDismiss}>Dismiss</DismissButton>
      </ButtonContainer>
    </PopupContainer>
  );
};

