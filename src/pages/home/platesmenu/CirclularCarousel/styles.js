import styled from "styled-components";

export const PlateContainer = styled.div`
  height: 800px;
  width: 800px;
  position: absolute;
  border-radius: 50%;
  border: 150px solid transparent;
  display: flex;
  /* justify-content: center; */
  transition: all 1.3s ease-in-out;
  align-items: center;
  left: -250px;
  top: -770px;
  rotate: ${(props) => {
    if (props.index < props.activeIndex) {
      return "180deg";
    } else {
      if (props.index == props.activeIndex) {
        return "90deg";
      } else {
        return "0deg";
      }
    }
  }};
`;
export const Container = styled.div`
  height: 800px;
  width: 800px;
  position: absolute;
  border-radius: 50%;
  border: 130px solid #E7E6E8;
  display: flex;
  /* justify-content: center; */
  transition: all 1.3s ease-in-out;
  align-items: center;
  left: -250px;
  top: -770px;

`;


export const Plate = styled.img`
  position: absolute;
  right: ${(props) => props.right};
  height: 300px;
  width: 300px;
  /* border-radius: 50%; */
  /* background-color: ${(props) => props.color}; */
  z-index: 3;
`;
