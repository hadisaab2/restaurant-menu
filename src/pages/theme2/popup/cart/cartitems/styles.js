import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";



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
min-height: 11vh;
margin-top: 1vh;
position: relative;

`;
export const ImageContainer = styled.div`
flex: 1;
display: flex;
justify-content: center;
max-height:11vh;
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
