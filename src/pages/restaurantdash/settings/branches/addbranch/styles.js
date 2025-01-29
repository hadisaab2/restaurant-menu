import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";


export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 20px;
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
  flex-wrap: wrap;
  align-items:center;
  gap:20px;
  margin-left: 20px;
  position: relative;
  padding-top: 60px;
  width: 100%;
`;

export const Note = styled.span`
font-size: 12px;
margin-left: 20px;
margin-top: 30px;
width: 30%;
font-weight: bold;

`;

