import React, { useState } from "react";
import {
  Container,
  Close,
} from "./styles";
import CartItems from "./cartitems";
import Order from "./order";
export default function CartPopup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
  
  const[block,setblock]=useState("cart")
  return (
    <Container showPopup={showPopup}>
      <Close
        onClick={() => {
          popupHandler(null);
        }}
      />
      {block=="cart" && <CartItems setblock={setblock} />}
      {block=="order" && <Order setblock={setblock} popupHandler={popupHandler} restaurant={restaurant}/>}
    </Container>
  );
}
