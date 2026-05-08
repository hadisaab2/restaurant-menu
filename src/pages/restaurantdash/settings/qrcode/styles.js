import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../../styles/theme";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

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

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  font-size: 22px;
  cursor: pointer;
  color: #64748b;
  margin-bottom: 12px;
  transition: color 0.15s;
  &:hover { color: ${C}; }
`;

export const Button = styled.button`
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
