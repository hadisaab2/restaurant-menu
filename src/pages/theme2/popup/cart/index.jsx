import React, { useEffect, useState } from "react";
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

    useEffect(() => {
      const handlePopState = () => {
        // Revert to the normal view when back is pressed
        popupHandler(null);
      };
  
      // Add event listener for popstate
      window.addEventListener("popstate", handlePopState);
  
      // Cleanup event listener
      return () => window.removeEventListener("popstate", handlePopState);
    }, []);
  
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
