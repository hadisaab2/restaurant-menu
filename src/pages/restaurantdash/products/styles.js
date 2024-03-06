import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  width: 90%;
  flex-direction: column;
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
`;



export const AddButton = styled.button`
  width: 150px;
  height: 40px;
  outline: none;
  border: 0;
  color: black;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
`;
