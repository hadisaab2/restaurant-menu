import React from "react";
import { NoItems } from "./styles";
import Wizard from "./Wizard";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PopupShell from "../PopupShell";

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

  return (
    <PopupShell
      open={showPopup === "cart"}
      onClose={() => popupHandler(null)}
      title={activeLanguage === "ar" ? "سلة المشتريات" : "Your Cart"}
    >
      {isCartEmpty ? (
        <NoItems>
          {activeLanguage === "en"
            ? "Your cart is empty"
            : "سلة المشتريات فارغة"}
        </NoItems>
      ) : (
        <Wizard popupHandler={popupHandler} restaurant={restaurant} />
      )}
    </PopupShell>
  );
}
