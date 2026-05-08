import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";

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
  min-width: 500px;
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
  align-items: center;
  justify-content: center;
  gap: 10px;
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

export const AddBranch = styled.button`
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
