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

export const FormWrapper = styled.div`
display: flex;
flex-direction: row;
gap:20px;
margin-top: 20px;
align-items: center;
`;


export const AddButton = styled.button`
  width: 150px;
  outline: none;
  border: 0;
  color: black;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
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
  color: black;
  cursor: pointer;
  border-radius: 10px;
  background-color: white;
  display: flex;
  gap: 10px;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  height: 40px;
`;
