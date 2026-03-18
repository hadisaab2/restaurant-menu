import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";



export const Container = styled.div`
position: fixed;
bottom: ${props=>props.showPopup=="cart"?"0%":"-100%"};
min-height: 45vh;
background-color: ${props=>props.theme.popupbackgroundColor};
width: 100%;
transition: all 0.8s ease-in-out;
border-top-right-radius: 60px;
border-top-left-radius: 60px;
box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.2);
display: flex;
flex-direction: column;
align-items: center;
z-index: 5;
padding-bottom: 20px;
`;
export const Close = styled(IoMdClose)`
font-size: 20px;
position: absolute;
top: 30px;
right:20px;
cursor: pointer;
color:${props=>props.theme.popupTextColor}

`;

export const Wrapper = styled.div`
width: 90%;
display: flex;
flex-direction: column;
`;

export const Title = styled.div`
font-size: 25px;
font-weight:600;
margin-top:40px;
color: ${props=>props.theme.popupTextColor};

`;
export const Border = styled.div`
height: 0.25px;
width: 100%;
background-color: ${props=>props.theme.popupTextColor};
opacity: 0.1;
margin-top:10px;

`;
export const ItemsWrap = styled.div`
max-height: 35vh;
width: 100%;
overflow: scroll;
margin-top: 20px;

`;
export const NoItems = styled.div`
height: 35vh;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
color:${props=>props.theme.popupTextColor};
font-size: 18px;
`;

export const ItemsContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
height: 11vh;
margin-top: 1vh;
position: relative;

`;
export const ImageContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
`;
export const Image = styled.img`
width: 70%;
height: 100%;
object-fit: cover;
border-radius: 3px;
`;
export const PriceContainer = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap:2px;
`;

export const QuantityContainer = styled.div`
flex: 1;
display: flex;
align-items: flex-end;
justify-content: flex-end;


`;
export const QuantityWrapper = styled.div`
width: 50%;
display: flex;
flex-direction: row;
height: 20px;
background-color:${props=>props.theme.mainColor};
color:${props=>props.theme.popupbackgroundColor};
border-radius: 20px;
margin-right: 20px;
margin-bottom: 10px;

`;

export const Plus = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`;
export const Minus = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`;

export const Quantity = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex:1;
font-size: 11px;

`;
export const Name = styled.span`
font-size: 13px;
font-weight: 500;
color:${props=>props.theme.popupTextColor};

`;
export const Price = styled.span`
color:${props=>props.theme.popupTextColor};
font-size: 13px;


`;


export const TotalPrice = styled.span`
color:${props=>props.theme.popupTextColor};
font-size: 13px;
margin-top: 30px;


`;

export const Purchase = styled.button`
outline: none;
border: 0;
cursor: pointer;
color: ${props=>props.theme.backgroundColor};
width: 100%;
margin-top: 10px;
background-color: ${props=>props.theme.mainColor};
border-radius: 20px;
padding-top: 8px;
padding-bottom: 8px;

`;

export const DeleteIcon = styled(MdOutlineDelete)`
font-size: 15px;
position: absolute;
top: 0px;
right:20px;
cursor: pointer;
color:${props=>props.theme.popupTextColor}

`;

