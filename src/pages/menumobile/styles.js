import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
height: 100%;
filter:${props=>props.showPopup?"blur(5px)":"blur(0px)"} ;
transition: all 1s ease-in-out;
`;
