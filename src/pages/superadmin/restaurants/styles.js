import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

const T = {
  accent: "#5eabb1",
  cardBg: "#ffffff",
  cardBorder: "rgba(148,163,184,0.18)",
  textPrimary: "#0f172a",
  textSub: "#64748b",
  shadow: "0 4px 20px rgba(15,23,42,0.07)",
  radius: "14px",
};

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: 40px;
`;

export const UploadPhoto = styled.input`
  display: none;
`;

export const UploadBtn = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f8fafc;
  border: 2px dashed ${T.cardBorder};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  border-radius: 12px;
  cursor: pointer;
  color: ${T.textSub};
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;

  &:hover {
    border-color: ${T.accent};
    background: rgba(94, 171, 177, 0.04);
    color: ${T.accent};
  }
`;

export const UploadedImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: 150px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid ${T.cardBorder};
`;

export const UploadImageText = styled.p`
  margin: 4px 0 0 0;
  font-size: 12px;
  color: #ef4444;
`;

export const AddRestaurantForm = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  position: relative;
  padding: 32px 24px 24px;
  background: ${T.cardBg};
  border-radius: ${T.radius};
  box-shadow: ${T.shadow};
  border: 1px solid ${T.cardBorder};
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.md}px) {
    padding: 28px 16px 20px;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 28px 12px 16px;
    gap: 12px;
  }

  /* Make MUI TextFields responsive */
  .MuiTextField-root,
  .MuiFormControl-root {
    @media (max-width: ${breakingPoints.sm}px) {
      width: 100% !important;
      min-width: 0 !important;
    }
  }

  /* Make Box containers with 30% width responsive */
  .MuiBox-root {
    @media (max-width: ${breakingPoints.sm}px) {
      width: 100% !important;
    }
  }
`;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 24px;
  top: 8px;
  font-size: 22px;
  cursor: pointer;
  color: ${T.textSub};
  padding: 4px;
  border-radius: 6px;
  transition: all 0.15s;

  &:hover {
    color: ${T.textPrimary};
    background: rgba(15, 23, 42, 0.06);
  }

  @media (max-width: ${breakingPoints.sm}px) {
    left: 12px;
  }
`;

export const AddRestaurant = styled.button`
  height: 42px;
  padding: 0 24px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  background: linear-gradient(135deg, ${T.accent} 0%, #4a9ba0 100%);
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0.2px;
  box-shadow: 0 4px 14px rgba(94, 171, 177, 0.3);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 20px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ColorsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.viewColorSection ? "2000px" : "0px")};
  opacity: ${(props) => (props.viewColorSection ? 1 : 0)};
  position: relative;
  transition: all 0.4s ease-in-out;
  gap: 10px;
`;

export const ColorSection = styled.div`
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${T.textSub};
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: rgba(15, 23, 42, 0.03);
  }
`;

export const SloganBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.viewSloganSection ? "400px" : "0px")};
  opacity: ${(props) => (props.viewSloganSection ? 1 : 0)};
  position: relative;
  transition: all 0.3s ease-in-out;
  gap: 10px;
`;

export const SloganSection = styled.div`
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${T.textSub};
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: rgba(15, 23, 42, 0.03);
  }
`;

export const FormSectionHeader = styled.div`
  width: 100%;
  margin-top: 16px;
  margin-bottom: 8px;
  padding: 12px 16px;
  background: linear-gradient(135deg, #f0f4ff 0%, #f8fafc 100%);
  border-radius: 10px;
  font-weight: 600;
  font-size: 14px;
  color: ${T.textPrimary};
  border-left: 4px solid ${T.accent};
  box-sizing: border-box;
`;

export const Arrow = styled(IoIosArrowDown)`
  font-size: 14px;
  position: absolute;
  right: 24px;
  color: ${T.textSub};

  @media (max-width: ${breakingPoints.sm}px) {
    right: 12px;
  }
`;

export const FeaturesSection = styled.div`
  height: 46px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: ${T.textSub};
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: rgba(15, 23, 42, 0.03);
  }
`;

export const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  max-height: ${(props) => (props.viewFeaturesSection ? "2000px" : "0px")};
  opacity: ${(props) => (props.viewFeaturesSection ? 1 : 0)};
  position: relative;
  transition: all 0.4s ease-in-out;
  gap: 10px;
`;
