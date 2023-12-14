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

export default function Plate({ plates, activePlate }) {
  return (
    <Container>
      {plates.map((plateitem, index) => {
        return (
          <PlateItem
            src={plateitem.image}
            activePlate={activePlate}
            index={index}
          />
        );
      })}

      <PlateInfo>
        <PlateNameTop>BoneLess</PlateNameTop>
        <PlateNameBottom>Chicken</PlateNameBottom>

        <Price>8$</Price>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Description>
      </PlateInfo>
    </Container>
  );
}
