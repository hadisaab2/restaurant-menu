import React, { useEffect } from "react";
import {
  Container,
  Close,
  NoItems,
} from "./styles";
import Wizard from "./Wizard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartPopup({
  restaurant,
  showPopup,
  popupHandler = () => {},
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const isCartEmpty = cart.length === 0;

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

  const handleClose = () => {
    if (typeof popupHandler === "function") {
      popupHandler(null);
    }
  };

  return (
    <Container showPopup={showPopup}>
      
      {isCartEmpty ? (
        <NoItems>
          {activeLanguage === "en"
            ? "Your cart is empty"
            : "سلة المشتريات فارغة"}
        </NoItems>
      ) : (
        <Wizard popupHandler={popupHandler} restaurant={restaurant} />
      )}
    </Container>
  );
}
