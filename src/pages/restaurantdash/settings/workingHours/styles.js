import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: white;
  margin-top: 20px;
  min-height: 60vh;
`;

export const Title = styled.span`
  font-size: 20px;
  font-weight: 500;
  margin-top: 30px;
  margin-left: 20px;
`;

export const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin-top: 30px;
  margin-left: 20px;
  @media (max-width: ${breakingPoints.sm}px) {
    margin-left: 0;
    width: 100%;
  }
`;

export const Th = styled.th`
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
`;

export const Td = styled.td`
  border: 1px solid #ddd;
  padding: 8px;
`;

export const EditDeleteIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  &:hover { color: turquoise; }
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  &:hover { color: turquoise; }
`;

export const AddButton = styled.button`
  width: 180px;
  height: 40px;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: turquoise;
  margin-top: 20px;
  font-weight: 500;
  font-size: 14px;
  margin-left: 20px;
`;

export const FormOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`;

export const FormCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 8px;
  min-width: 320px;
  max-width: 90%;
`;

export const FormTitle = styled.h3`
  margin: 0 0 16px 0;
  font-size: 18px;
`;

export const FormRow = styled.div`
  margin-bottom: 12px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 500;
`;

export const DayCheckboxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 4px;
`;

export const TimeInput = styled.input`
  width: 120px;
  padding: 8px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

export const BtnPrimary = styled.button`
  padding: 8px 16px;
  background: turquoise;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;

export const BtnSecondary = styled.button`
  padding: 8px 16px;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
`;
