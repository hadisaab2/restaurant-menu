import styled from "styled-components";

export const PlateContainer = styled.div`
  height: 1000px;
  width: 1000px;
  position: absolute;
  border-radius: 50%;
  border: 3px solid transparent;
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
  height: 1000px;
  width: 1000px;
  position: absolute;
  border-radius: 50%;
  border: 3px solid #ff001b;
  display: flex;
  /* justify-content: center; */
  transition: all 1.3s ease-in-out;
  align-items: center;
  left: -250px;
  top: -770px;
  /* filter: drop-shadow(0px 10px 40px rgba(255, 16, 61)) */
  box-shadow: 0 0 15px 2px #ff001b;
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
