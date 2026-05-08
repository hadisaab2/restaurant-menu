import styled from "styled-components";
import { breakingPoints, dashboardColors } from "../../../styles/theme";
import { InputLabel, Select } from "@mui/material";

const accent = dashboardColors.mainColor;
const cardBorder = "rgba(148, 163, 184, 0.22)";

export const SectionHeader = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-top: 4px;
`;

export const SectionTitle = styled.h2`
  margin: 0;
  font-size: 1.25rem;
  font-weight: 700;
  color: #0f172a;
  letter-spacing: -0.02em;
`;

export const SectionSubtitle = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.45;
  max-width: 42rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    max-width: 100%;
    align-items: stretch;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-top: 16px;
  padding: 18px 20px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid ${cardBorder};
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.06);
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.sm}px) {
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
    margin-top: 12px;
  }
`;

export const ToolbarFields = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  flex: 1;
  min-width: 200px;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  /* Desktop: 6 cards per row */
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 18px;
  margin-top: 20px;
  align-items: stretch;
  box-sizing: border-box;

  @media (max-width: ${breakingPoints.md}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;
  }

  @media (max-width: ${breakingPoints.sm}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 14px;
    margin-top: 16px;
  }
`;

export const StyledSelect = styled(Select)`
  border-radius: 10px;

  .MuiOutlinedInput-notchedOutline {
    border-color: ${accent} !important;
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${accent} !important;
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${accent} !important;
  }

  .MuiOutlinedInput-root {
    border-radius: 10px;
    background: rgba(248, 250, 252, 0.9);
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  &.MuiInputLabel-outlined {
    color: ${accent} !important;
  }

  &.Mui-focused {
    color: ${accent} !important;
  }
`;

export const AddButton = styled.button`
  min-width: 160px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 12px;
  background: linear-gradient(135deg, ${accent} 0%, #4a9499 100%);
  display: inline-flex;
  flex-direction: row;
  gap: 8px;
  font-weight: 600;
  font-size: 0.9rem;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  box-shadow: 0 4px 16px rgba(94, 171, 177, 0.35);
  transition: transform 0.15s ease, box-shadow 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 22px rgba(94, 171, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
    min-width: unset;
  }
`;

export const LoadWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 8px;
  padding-bottom: 8px;
`;

export const LoadBtnWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoadMore = styled.button`
  width: 100%;
  outline: none;
  border: 1px solid rgba(94, 171, 177, 0.45);
  color: ${accent};
  cursor: pointer;
  border-radius: 12px;
  background: rgba(94, 171, 177, 0.08);
  display: flex;
  gap: 8px;
  font-weight: 600;
  font-size: 0.875rem;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  padding: 0 20px;
  transition: background 0.15s, border-color 0.15s, color 0.15s;

  &:hover {
    background: rgba(94, 171, 177, 0.14);
    border-color: ${accent};
  }
`;
