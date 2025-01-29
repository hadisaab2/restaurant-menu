import styled from "styled-components";


export const DeliveryWrapper = styled.div`
    display: flex;
    flex-direction: row;
    position: absolute;
    right: 10px;
    justify-content: center;
    align-items: center;
`;

export const DeliveryRate = styled.input`
    border: 0;
    flex: 1;
    width: 90px;
    border: none;
    font-size: 12px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 12px;
    }
`;

export const AddRate = styled.button`
    background-color: #1976d2;
    color:white;
    flex: 1;
    border: none;
    &:focus{
        outline: none;
    }
   

`;

export const CityDeliveryRate = styled.input`
    border: 0;
    flex: 1;
    width: 35px;
    border: none;
    font-size: 12px;

    &:focus{
        outline: none;
    }
    &::placeholder{
        font-size: 12px;
    }
`;

