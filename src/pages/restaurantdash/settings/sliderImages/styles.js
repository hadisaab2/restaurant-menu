import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

const C = dashboardColors.mainColor;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 14px;
  margin-top: 16px;
  min-height: 60vh;
  padding: 20px;
  box-shadow: 0 2px 12px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #0f172a;
  margin-bottom: 4px;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 16px;
  }
`;

export const AddSliderImage = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${C};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.2s, transform 0.15s;
  box-shadow: 0 3px 10px ${C}40;

  &:hover:not(:disabled) {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active { transform: scale(0.97); }
  &:disabled { opacity: 0.5; cursor: not-allowed; }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
  margin-top: 24px;
  width: 100%;

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 12px;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.07);
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 18px rgba(15, 23, 42, 0.12);
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 190px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakingPoints.sm}px) {
    height: 130px;
  }
`;

export const PriorityInput = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin: 10px;
  border: 1px solid #e2e8f0;
  border-radius: 6px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${C};
    box-shadow: 0 0 0 3px ${C}20;
  }
`;

export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  border-top: 1px solid #f1f5f9;
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  font-size: 22px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${C}; }
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  font-size: 22px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`;

export const UploadBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  outline: none;
  border: 1.5px solid ${C};
  color: ${C};
  cursor: pointer;
  border-radius: 8px;
  background-color: white;
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${C};
    color: white;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    justify-content: center;
  }
`;

export const UploadPhoto = styled.input`
  display: none;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  max-height: 360px;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export const UploadImageText = styled.span`
  color: #ef4444;
  font-size: 12px;
  margin-top: 5px;
  display: block;
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BackIcon = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  color: ${C};
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 20px;
  transition: opacity 0.15s;

  &:hover { opacity: 0.75; }
`;

export const FormTitle = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #0f172a;
`;

export const SaveButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 24px;
  height: 42px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${C};
  margin-top: 16px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${C}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    justify-content: center;
  }
`;

export const SectionTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #0f172a;
  margin-top: 24px;
  display: block;

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 15px;
  }
`;

export const HomepageCoverSection = styled.div`
  width: 100%;
  margin-bottom: 28px;
  padding-bottom: 28px;
  border-bottom: 1px solid #e2e8f0;
`;
