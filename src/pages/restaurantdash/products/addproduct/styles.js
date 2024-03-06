import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-direction: column;
  position: relative;
  padding-top: 40px;
  margin-top: 20px;
  width: 30%;
`;

export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;


export const UploadPhoto = styled.input`
    display: none;
`;

export const UploadBtn = styled.button`
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
`;

export const UploadedImage = styled.img`
width: 200px;
  height: 200px;
`;
