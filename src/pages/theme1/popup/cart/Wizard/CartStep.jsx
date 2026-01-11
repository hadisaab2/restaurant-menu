import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { adjustQuantity, removeFromCart } from "../../../../../redux/cart/cartActions";
import { convertPrice } from "../../../../../utilities/convertPrice";
import {
  CartStepContainer,
  ItemsList,
  CartItem,
  ItemImage,
  ItemInfo,
  ItemName,
  ItemPrice,
  ItemDetails,
  QuantityControls,
  QuantityButton,
  QuantityValue,
  DeleteButton,
  TotalContainer,
  TotalLabel,
  TotalPrice,
  EmptyCart,
} from "./CartStepStyles";
import { FaTrash } from "react-icons/fa";

export default function CartStep({ restaurant, activeLanguage }) {
  const dispatch = useDispatch();
  const { restaurantName: paramRestaurantName } = useParams();
  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;

  const cart = useSelector((state) => state.cart[restaurantName] || []);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const handleRemove = (uniqueId) => {
    dispatch(removeFromCart(restaurantName, uniqueId));
  };

  const handleIncrement = (uniqueId, quantity) => {
    dispatch(adjustQuantity(restaurantName, uniqueId, quantity + 1));
  };

  const handleDecrement = (uniqueId, quantity) => {
    if (quantity > 1) {
      dispatch(adjustQuantity(restaurantName, uniqueId, quantity - 1));
    }
  };

  const generateItemData = (item) => {
    if (!item.formData) return null;
    return Object.keys(item.formData).map((key, index) => {
      const value = item.formData[key];
      let displayValue = "";
      if (Array.isArray(value)) {
        displayValue = value.join(", ");
      } else if (typeof value === "object" && value !== null) {
        displayValue = value.label;
      } else {
        displayValue = value;
      }
      return (
        <ItemDetails key={index}>
          {key}: {displayValue}
        </ItemDetails>
      );
    });
  };

  let currencySymbol = "";
  switch (restaurant?.currency) {
    case "dollar":
      currencySymbol = "$";
      break;
    case "lb":
      currencySymbol = "L.L.";
      break;
    case "gram":
      currencySymbol = "g";
      break;
    case "kilogram":
      currencySymbol = "kg";
      break;
    default:
      currencySymbol = "";
  }

  if (cart.length === 0) {
    return (
      <CartStepContainer>
        <EmptyCart>Your cart is empty</EmptyCart>
      </CartStepContainer>
    );
  }

  return (
    <CartStepContainer>
      <ItemsList>
        {cart.map((item) => (
          <CartItem key={item.uniqueId}>
            <DeleteButton onClick={() => handleRemove(item.uniqueId)}>
              <FaTrash />
            </DeleteButton>
            <ItemImage
              src={`https://storage.googleapis.com/ecommerce-bucket-testing/${item.images[0].url}`}
              alt={activeLanguage === "en" ? item.en_name : item.ar_name}
            />
            <ItemInfo>
              <ItemName>
                {activeLanguage === "en" ? item.en_name : item.ar_name}
              </ItemName>
              <ItemPrice>
                {convertPrice(item.price * item.quantity, currencySymbol)}
                <QuantityControls>
                  <QuantityButton
                    onClick={() => handleDecrement(item.uniqueId, item.quantity)}
                  >
                    -
                  </QuantityButton>
                  <QuantityValue>{item.quantity}</QuantityValue>
                  <QuantityButton
                    onClick={() => handleIncrement(item.uniqueId, item.quantity)}
                  >
                    +
                  </QuantityButton>
                </QuantityControls>
              </ItemPrice>
              {generateItemData(item)}
              {item.instruction && (
                <ItemDetails>Note: {item.instruction}</ItemDetails>
              )}
            </ItemInfo>
          </CartItem>
        ))}
      </ItemsList>
      <TotalContainer>
        <TotalLabel>Total:</TotalLabel>
        <TotalPrice>{convertPrice(totalPrice, currencySymbol)}</TotalPrice>
      </TotalContainer>
    </CartStepContainer>
  );
}

