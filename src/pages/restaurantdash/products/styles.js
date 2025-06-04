import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";
import { dashboardColors } from "../../../styles/theme";
import { InputLabel, Select } from "@mui/material";
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  @media (max-width: ${breakingPoints.sm}px) {
   align-items: center;
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
   justify-content: center;
  }
`;

export const FormWrapper = styled.div`
display: flex;
flex-direction: row;
gap:20px;
margin-top: 20px;
align-items: center;
@media (max-width: ${breakingPoints.sm}px) {
    justify-content: center;

  }
`;

// Styled Select Component
export const StyledSelect = styled(Select)`
  .MuiOutlinedInput-notchedOutline {
    border-color: ${dashboardColors.mainColor} !important; /* Base outline color */
  }

  &:hover .MuiOutlinedInput-notchedOutline {
    border-color: ${dashboardColors.mainColor} !important; /* Outline color on hover */
  }

  &.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${dashboardColors.mainColor} !important; /* Outline color when focused */
  }
`;
export const StyledInputLabel = styled(InputLabel)`
  &.MuiInputLabel-outlined {
    color: ${dashboardColors.mainColor} !important; /* Change label color */
  }

  &.Mui-focused {
    color: ${dashboardColors.mainColor} !important; /* Label color when focused */
  }
`;



export const AddButton = styled.button`
  width: 150px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  background-color: turquoise;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;

export const LoadWrapper = styled.div`
  width: 20%;
  height: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 40%;
  }
`;

export const LoadBtnWrapper = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  padding-bottom: 10px;
`;
export const LoadMore = styled.button`
  width: 80%;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  background-color: ${dashboardColors.mainColor};
  display: flex;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
