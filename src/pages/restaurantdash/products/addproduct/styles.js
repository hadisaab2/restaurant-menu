import styled from "styled-components";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { breakingPoints } from "../../../../styles/theme";
import { MdDelete } from "react-icons/md";

export const ProductInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 20px;
  position: relative;
  padding-top: 40px;
  margin-top: 20px;
  width: 60%;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 100%;
  }
`;

export const Delete = styled(MdDelete)`
  font-size: 15px;
  cursor: pointer;

`;
export const ButtonsContainer = styled.div`
width: 100%;
height:30px;
display: flex;
align-items: center;
justify-content: space-between;

`;

export const CoverImage = styled.button`
  /* width: 150px; */
  height: 20px;
  outline: none;
  border: 0;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  background-color: turquoise;
  font-weight: 500;
  font-size: 10px;

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

export const Row = styled.div`
  width: 100%;
`;

export const ImagesContainer = styled.div`
  width: 80%;
  flex-wrap: wrap;
  display: flex;
  align-content: flex-start;
`;
export const UploadedImageContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const UploadedImageWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;

`;

export const UploadedImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;


`;
export const UploadBtn = styled.div`
   width: 100%;
  height: 150px;
  background-color: transparent;
  border:1px solid  #1976d2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap:10px;
  border-radius: 5px;
`;



export const fieldStyle = {
  width: "40%",
};

export const UploadImageText = styled.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`;

 