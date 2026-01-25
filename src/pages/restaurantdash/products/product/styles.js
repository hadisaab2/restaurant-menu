import styled from "styled-components";
import { breakingPoints } from "../../../../styles/theme";
import { MdDelete } from "react-icons/md";

export const Container = styled.div`
  width: 20%;
  height: auto;
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  @media (max-width: ${breakingPoints.sm}px) {
    width: 50%;
    justify-content: center;
  }
`;
export const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding-bottom: 10px;
  border-radius: 5px;

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
  width:${props=>props.JPG?"100px":"100%"};
  height: ${props=>props.JPG?"100px":"100%"};
`;

export const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Title = styled.span`
  font-size: 15px;
  font-weight: 500;
  margin-top: 10px;
  width:70%;
`;
export const Category = styled.span`
  margin-top: 2px;
  font-size: 15px;
  font-weight: 300;
`;

export const StatusBadges = styled.div`
  display: flex;
  gap: 6px;
  margin-top: 8px;
  flex-wrap: wrap;
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid rgba(148, 163, 184, 0.5);
  color: ${(props) => (props.$variant === "hidden" ? "#b45309" : "#b91c1c")};
  background: ${(props) =>
    props.$variant === "hidden" ? "rgba(251, 191, 36, 0.15)" : "rgba(239, 68, 68, 0.12)"};
`;

export const DeleteButton = styled.button`
  position: absolute;
  right: 0px;
  top:7px;
  background-color: transparent;
  outline: none;
  border: 0;
  cursor: pointer;
`;


export const Delete = styled(MdDelete)`
&:hover{
  color:red;
}
`;
