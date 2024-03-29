import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const TextContainer = styled.div`
width: 90%;
display: flex;
align-items: ${props=>props.activeLanuguage=="en"?"flex-start":"flex-end"};
flex-direction: column;
margin-top: 30px;
margin-bottom: 30px;
font-weight: 600;
color:${props=>props.theme.textColor}
`;
export const Text = styled.div`
font-size: 27px;


`;