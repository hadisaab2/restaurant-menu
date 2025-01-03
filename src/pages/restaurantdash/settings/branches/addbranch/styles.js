import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;

export const AddBranch = styled.button`
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
  margin-left: 20px;
`;

export const AddBranchForm = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content: center;
  gap:20px;
  margin-top:30px;
  margin-left: 20px;
  position: relative;
  padding-top: 40px;
`;

export const Note = styled.span`
font-size: 12px;
margin-left: 20px;
margin-top: 30px;
width: 30%;
font-weight: bold;

`;

