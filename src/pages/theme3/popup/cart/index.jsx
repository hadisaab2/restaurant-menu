import React, { useEffect, useRef } from "react";
import {
  Container,
  Close,
  NoItems,
} from "./styles";
import Wizard from "./Wizard";
import useDialogFocus from "../../../../utilities/useDialogFocus";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CartPopup({
  restaurant,
  variant,
  showPopup,
  popupHandler = () => {},
}) {
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www" && subdomain !== "api" && subdomain !== "staging-api"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []);
  const activeLanguage = useSelector(
    (state) => state.restaurant?.[restaurantName]?.activeLanguage || "en"
  );
  const isCartEmpty = cart.length === 0;
  const dialogRef = useRef(null);
  useDialogFocus(dialogRef, variant === "theme1" && showPopup === "cart", () => popupHandler(null));

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
    <Container ref={dialogRef} showPopup={showPopup} role={variant === "theme1" ? "dialog" : undefined} aria-modal={variant === "theme1" ? "true" : undefined} aria-label={activeLanguage === "ar" ? "السلة" : "Your cart"} tabIndex={variant === "theme1" ? -1 : undefined}>
      {variant === "theme1" && isCartEmpty && <button type="button" onClick={handleClose} style={{ minHeight: 44, padding: "12px 24px", margin: 20, borderRadius: 12 }}>{activeLanguage === "ar" ? "متابعة التسوق" : "Continue browsing"}</button>}
      {isCartEmpty ? (
        <NoItems>
          {activeLanguage === "en"
            ? "Your cart is empty"
            : "سلة المشتريات فارغة"}
        </NoItems>
      ) : (
        <Wizard popupHandler={popupHandler} restaurant={restaurant} variant={variant} />
      )}
    </Container>
  );
}
