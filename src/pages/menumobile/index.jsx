import React, { useState } from "react";
import { Container } from "./styles";
import Menu from "./Menu";
import Header from "./Header";
import plate from "../../static/plate.png";
import plate2 from "../../static/plate2.png";
import plate3 from "../../static/plate4.png";
import plate4 from "../../static/plate3.png";
import burger1 from "../../static/burger1.png";

export default function MenuMobile() {
  const plates = [
    {
      category: "Plates",
      items: [
        { name: "LAMB STEAK POTATO", image: plate },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
      ],
    },
    {
      category: "Burgers",
      items: [
        { name: "LAMB STEAK POTATO", image: burger1 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
        { name: "LAMB STEAK POTATO", image: plate3 },
        { name: "LAMB STEAK POTATO", image: plate4 },
        { name: "LAMB STEAK POTATO", image: plate2 },
      ],
    },
    { category: "Drinks", items: [] },
    { category: "Coffea", items: [] },
    { category: "Offers", items: [] },
    { category: "Appetizers", items: [] },
  ];
  const [activeCategory, setactiveCategory] = useState(0);
  const [animationchange, setanimationchange] = useState(false);

  return (
    <Container>
      <Header
        plates={plates}
        activeCategory={activeCategory}
        setactiveCategory={setactiveCategory}
        setanimationchange={setanimationchange}
        animationchange={animationchange}
      />
      <Menu
        plates={plates[activeCategory].items}
        activeCategory={activeCategory}
        animationchange={animationchange}
      />
    </Container>
  );
}
