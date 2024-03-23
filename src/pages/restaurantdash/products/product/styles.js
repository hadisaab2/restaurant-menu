import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";

export const Container = styled.div`
  width: 20%;
  height: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
`;

export const ImageWrapper = styled.div`
  width: 90%;
  height: 120px;
  border-radius: 20px;
  background-color: #edeeef;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  object-fit: cover;
  overflow: hidden;
`;
export const Image = styled.img`
  /* width: 100px;
  height: 100px; */
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
`;
export const Category = styled.span`
  margin-top: 2px;
  font-size: 15px;
  font-weight: 300;
`;
