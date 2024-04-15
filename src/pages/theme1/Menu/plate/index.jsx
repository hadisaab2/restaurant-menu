import React from "react";
import {
  Container,
  PlateItem,
  PlateInfo,
  PlateName,
  Price,
  Description,
  Arrow,
  ScrollContainer,
} from "./styles";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function Plate({ menu, activePlate, scrollChecker }) {
  const { restaurantName } = useParams();

  const activeLanuguage = useSelector(
    (state) => state.restaurant?.[restaurantName].activeLanguage
  );

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

      <PlateInfo activeLanuguage={activeLanuguage}>
        <PlateName activeLanuguage={activeLanuguage}>
          {activeLanuguage == "en"
            ? menu[activePlate]?.en_name
            : menu[activePlate]?.ar_name}
        </PlateName>

        <Price>{menu[activePlate]?.en_price}</Price>

        <Description activeLanuguage={activeLanuguage}>
          {activeLanuguage == "en"
            ? menu[activePlate]?.en_description
            : menu[activePlate]?.ar_description}
        </Description>
      </PlateInfo>
      <ScrollContainer scrollChecker={scrollChecker}>
        <Arrow />
      </ScrollContainer>
    </Container>
  );
}
