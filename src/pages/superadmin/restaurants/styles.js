import styled from "styled-components";
import { breakingPoints } from "../../../styles/theme";
import { MdModeEditOutline } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const UploadPhoto = styled.input`
  display: none;
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
export const UploadedImage = styled.img`
  width: 30%;
  height: 150px;
  object-fit: cover;
  border-radius: 5px;


`;

export const UploadImageText = styled.p`
  /* align-self: flex-end; */
  margin-left: 20px;
  font-size: 13px;
  color: red;
`;
export const AddRestaurantForm = styled.div`
  display: flex;
  gap:20px;
  flex-wrap: wrap;
  margin-top:30px;
  margin-left: 20px;
  position: relative;
  padding-top: 40px;
  width: 50%;
  padding-bottom: 20px;
`;


export const BackIcon = styled(MdOutlineKeyboardBackspace)`
  position: absolute;
  left: 0;
  top: 0;
  font-size: 20px;
`;

export const AddRestaurant = styled.button`
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


export const ColorsBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  overflow: hidden;
  height: ${props=>props.viewColorSection?"100vh":"0px"};
  position: relative;
  transition: all 0.8s ease-in-out ;
  gap:10px;
`;

export const ColorSection = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
`;


export const Arrow = styled(IoIosArrowDown)`
font-size: 15px;
position: absolute;
right: 5%;

`;

export const FeaturesSection = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  cursor: pointer;
`;

export const FeaturesBlock = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow: hidden;
  height: ${props=>props.viewFeaturesSection?"50vh":"0px"};
  position: relative;
  transition: all 0.8s ease-in-out ;
  gap:10px;
`;




