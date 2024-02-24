import React from "react";
import {
  Container,
  PlateItem,
  PlateInfo,
  PlateNameBottom,
  PlateNameTop,
  Price,
  Description
} from "./styles";

export default function Plate({ menu, activePlate }) {
  const {nametop,namebottom,price}=menu[activePlate];
  return (
    <Container>
      {menu.map((plateitem, index) => {
        return (
          <PlateItem
            src={plateitem.image}
            activePlate={activePlate}
            index={index}
          />
        );
      })}

      <PlateInfo>
        <PlateNameTop>{nametop}</PlateNameTop>
        <PlateNameBottom>{namebottom}</PlateNameBottom>

        <Price>{price}$</Price>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Description>
      </PlateInfo>
    </Container>
  );
}
