import styled from "styled-components";

export const Container = styled.div`
height: 100vh;
position: relative;
overflow: hidden;
background-color: ${props=>props.theme.backgroundcolor};
`;

export const MenuWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
filter:${props=>props.showPopup?"blur(5px)":"blur(0px)"} ;
transition: all 1s ease-in-out;
height: 100vh;
position: relative;
overflow: hidden;
`;