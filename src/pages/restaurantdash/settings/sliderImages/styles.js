import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  min-height: 60vh;
  padding: 20px;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-left: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    margin-left: 0px;
    font-size: 18px;
  }
`;

export const AddSliderImage = styled.button`
  width: 200px;
  height: 40px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: turquoise;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
  transition: all 0.3s ease;

  &:hover:not(:disabled) {
    background-color: #40e0d0;
    transform: translateY(-2px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    font-size: 12px;
    width: 150px;
    height: 35px;
    margin-left: 0px;
  }
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 30px;
  margin-left: 20px;
  width: calc(100% - 40px);

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 15px;
    margin-left: 0px;
    width: 100%;
  }
`;

export const ImageCard = styled.div`
  position: relative;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;

  @media (max-width: ${breakingPoints.sm}px) {
    height: 150px;
  }
`;

export const PriorityInput = styled.input`
  width: calc(100% - 20px);
  padding: 8px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: turquoise;
  }
`;

export const ImageActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 10px;
  border-top: 1px solid #eee;
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  font-size: 24px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: turquoise;
  }
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  font-size: 24px;
  color: #666;
  transition: color 0.3s ease;

  &:hover {
    color: #ff4444;
  }
`;

export const UploadBtn = styled.button`
  width: 200px;
  height: 40px;
  outline: none;
  border: 1px solid turquoise;
  color: turquoise;
  cursor: pointer;
  border-radius: 5px;
  background-color: white;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: turquoise;
    color: white;
  }
`;

export const UploadPhoto = styled.input`
  display: none;
`;

export const UploadedImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  margin-top: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const UploadImageText = styled.span`
  color: #ff4444;
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
  padding: 20px;
`;

export const BackIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: turquoise;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #40e0d0;
  }
`;

export const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #333;
`;

export const SaveButton = styled.button`
  width: 200px;
  height: 40px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: #ff4444;
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc0000;
  }
`;

export const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-left: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    margin-left: 0px;
    font-size: 18px;
  }
`;

export const HomepageCoverSection = styled.div`
  width: 100%;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 2px solid #eee;
`;

