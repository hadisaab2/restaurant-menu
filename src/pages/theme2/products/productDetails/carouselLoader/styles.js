import styled from "styled-components";


export const Container = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-top: 20px;
display: ${(props) => (props.CloseAnimation ? "flex" : "none")};
`;
export const Wrapper = styled.div`
display: flex;
flex-direction: row;
`;

export const ActiveCircleWrapper = styled.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
transition: all 0.4s ease-in-out;
transform: ${(props) => `translateX(${props.carouselIndex * 15}px)`};
`;
export const ActiveCircle = styled.div`
width: 7px;
height: 7px;
border-radius: 50%;
background-color:${(props) => props.theme.mainColor};;
`;

export const CircleWrapper = styled.div`
width: 15px;
height: 15px;
display: flex;
align-items: center;
justify-content: center;
`;

export const Circle = styled.div`
width: 7px;
height: 7px;
border-radius: 50%;
border:1px solid ${(props) => props.theme.mainColor};
`;