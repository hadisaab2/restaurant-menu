import styled from "styled-components";

export const Container = styled.div`
    width:50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;

`;
export const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${props=>props.theme.categoryUnactive};
    border-radius: 20px;

`;

export const Image = styled.img`
width:100%;
height:100%;
object-fit: cover;

`;
export const ImageContainer = styled.div`
width:90%;
height: 20vh;
border-radius: 10px;
overflow: hidden;
margin-top: 10px;


`;
export const TextContainer = styled.div`
width:90%;
display: flex;
justify-content: center;
flex-direction: column;
text-align: ${props=>props.activeLanuguage=="en"?"left":"right"};

align-items: ${props=>props.activeLanuguage=="en"?"flex-start":"flex-end"};
gap:5px;
height: 10vh;
margin-top: 5px;

`;
export const PlateName = styled.span`
font-size: 14px;
font-weight: 500;
color:${props=>props.theme.textColor};

`;
export const PlatePrice = styled.span`
color:${props=>props.theme.mainColor};
font-size: 14px;


`;
