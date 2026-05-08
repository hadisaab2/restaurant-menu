import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

const C = dashboardColors.mainColor;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
`;

export const TableWrap = styled.div`
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  margin-top: 20px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 420px;
`;

export const Th = styled.th`
  border-bottom: 2px solid #e2e8f0;
  padding: 10px 12px;
  text-align: left;
  font-size: 13px;
  font-weight: 600;
  color: #475569;
  background: #f8fafc;
  white-space: nowrap;
`;

export const Td = styled.td`
  border-bottom: 1px solid #f1f5f9;
  padding: 10px 12px;
  font-size: 14px;
  color: #334155;
`;

export const EditDeleteIcons = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const Delete = styled(MdDelete)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: #ef4444; }
`;

export const Edit = styled(MdModeEditOutline)`
  cursor: pointer;
  font-size: 18px;
  color: #94a3b8;
  transition: color 0.15s;
  &:hover { color: ${C}; }
`;

export const AddButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 0 20px;
  height: 40px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  background-color: ${C};
  margin-top: 20px;
  font-weight: 600;
  font-size: 14px;
  transition: filter 0.15s, transform 0.15s;
  box-shadow: 0 3px 10px ${C}40;

  &:hover  { filter: brightness(1.1); transform: translateY(-1px); }
  &:active { transform: scale(0.97); }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    justify-content: center;
    font-size: 13px;
  }
`;

export const FormOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.45);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1100;
  padding: 16px;
`;

export const FormCard = styled.div`
  background: white;
  padding: 24px;
  border-radius: 16px;
  width: 100%;
  max-width: 440px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);

  @media (max-width: ${breakingPoints.sm}px) {
    padding: 18px 16px;
    border-radius: 14px;
  }
`;

export const FormTitle = styled.h3`
  margin: 0 0 18px 0;
  font-size: 17px;
  font-weight: 700;
  color: #0f172a;
`;

export const FormRow = styled.div`
  margin-bottom: 14px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 13px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #475569;
`;

export const DayCheckboxWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px 16px;
  margin-top: 4px;
`;

export const TimeInput = styled.input`
  width: 130px;
  padding: 8px 10px;
  font-size: 14px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.15s;

  &:focus {
    border-color: ${C};
    box-shadow: 0 0 0 3px ${C}20;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
  }
`;

export const BtnPrimary = styled.button`
  flex: 1;
  padding: 10px 16px;
  background: ${C};
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: filter 0.15s;

  &:hover { filter: brightness(1.1); }
`;

export const BtnSecondary = styled.button`
  flex: 1;
  padding: 10px 16px;
  background: #f1f5f9;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #475569;
  transition: background 0.15s;

  &:hover { background: #e2e8f0; }
`;
