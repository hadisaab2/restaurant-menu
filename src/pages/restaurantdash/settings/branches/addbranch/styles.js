import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../../styles/theme";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const C = dashboardColors.mainColor;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 20px;
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
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

export const AddBranchForm = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
  position: relative;
  padding-top: 60px;
  width: 100%;
`;

export const Note = styled.span`
  font-size: 12px;
  margin-top: 20px;
  font-weight: 600;
  color: #475569;
  line-height: 1.5;
  width: 100%;
  max-width: 480px;

  @media (max-width: ${breakingPoints.sm}px) {
    max-width: 100%;
    font-size: 11px;
  }
`;
