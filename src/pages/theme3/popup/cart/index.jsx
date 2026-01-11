import React, { useEffect } from "react";
import {
  Container,
  Close,
} from "./styles";
import Wizard from "./Wizard";

export default function CartPopup({
  restaurant,
  showPopup,
  popupHandler = { popupHandler },
}) {
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
      <Wizard popupHandler={popupHandler} restaurant={restaurant} />
    </Container>
  );
}
