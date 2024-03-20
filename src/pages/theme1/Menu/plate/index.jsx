import React from "react";
import {
  Container,
  PlateItem,
  PlateInfo,
  PlateName,
  Price,
  Description,
  Arrow,
  ScrollContainer
} from "./styles";

export default function Plate({ menu, activePlate,scrollChecker }) {
  return (
    <Container>
      {menu.map((plateitem, index) => {
        return (
          <PlateItem
          src={`https://storage.googleapis.com/ecommerce-bucket-testing/${plateitem.image.url}`}
            activePlate={activePlate}
            index={index}
          />
        );
      })}

      <PlateInfo>
        <PlateName>{menu[activePlate]?.en_name}</PlateName>

        <Price>{menu[activePlate]?.en_price}$</Price>

        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s
        </Description>
      </PlateInfo>
      <ScrollContainer scrollChecker={scrollChecker}>
        <Arrow/>
      </ScrollContainer>
    </Container>
  );
}
