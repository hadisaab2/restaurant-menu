import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
  background-color: white;
  margin-top: 20px;
  min-height: 60vh;
  margin-left: 20px;
`;

export const Button = styled.button`
  width: 150px;
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
  @media (max-width: ${breakingPoints.sm}px) {
  font-size: 11px;
  width: 100px;
  height: 30px;
  }
`;

