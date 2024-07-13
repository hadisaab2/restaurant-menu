import React, { useState } from "react";
import { Wrapper, Input, Purchase, Title, BackIcon, Select, NoteTextArea } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearCart } from "../../../../../redux/cart/cartActions";

export default function Order({ setblock, popupHandler, restaurant }) {
  const { restaurantName: paramRestaurantName } = useParams();

  const hostname = window.location.hostname;
  const subdomain = hostname.split(".")[0];

  // Determine the restaurant name to use
  const restaurantName =
    subdomain !== "menugic" && subdomain !== "localhost" && subdomain !== "www"
      ? subdomain
      : paramRestaurantName;
  const cart = useSelector((state) => state.cart[restaurantName] || []); // Fetch the cart for the specific restaurant
  const dispatch = useDispatch();

  const [details, setDetails] = useState({
    fullName: "",
    phoneNumber: "",
    fullAddress: "",
  });
  const [deliveryType, setDeliveryType] = useState("");
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handlePurchase = () => {
    console.log(cart);
    setblock("order");
    let message = `Hello *${restaurantName}*\n`;
    message += `It's *${details.fullName}* and I want to purchase the following items:\n`;

    cart.forEach((item) => {
      message += `• ${item.quantity} of *${item.en_name}* \n`;

      // Extract and format the formData details dynamically
      if (item.formData) {
        Object.keys(item.formData).forEach((key) => {
          const value = item.formData[key];
          if (Array.isArray(value)) {
            message += `  - ${key}: ${value.join(", ")}\n`;
          } else if (typeof value === "object" && value !== null) {
            // Handling objects like size
            message += `  - ${key}: ${value.label}\n`;
          } else {
            message += `  - ${key}: ${value}\n`;
          }
        });
      }

      message += `  - Price: ${item.price * item.quantity}\n`;
    });

    message += `I live in: *${details.fullAddress}* \n`;
    message += `You can contact me on this number: *${details.phoneNumber}* \n`;
    message += "Thank you.";

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${restaurant.phone_number}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank"); // Open WhatsApp in a new tab/window
    dispatch(clearCart());
    popupHandler(null);
  };

  return (
    <Wrapper>
      <BackIcon
        onClick={() => {
          setblock("cart");
        }}
      />
      <Title>Enter Your Details</Title>
      <Select
        value={deliveryType}
        onChange={(e) => {
          setDeliveryType(e.target.value);
        }}
      >
        <option value="">Select Order Type</option>
        <option value="Delivery">Delivery</option>
        <option value="TakeAway">TakeAway</option>
      </Select>

      <Input
        type="text"
        name="fullName"
        value={details.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <Input
        type="text"
        name="phoneNumber"
        value={details.phoneNumber}
        onChange={handleChange}
        placeholder="PhoneNumber"
      />
      {deliveryType == "Delivery" && (
        <Input
          type="text"
          name="fullAddress"
          value={details.fullAddress}
          onChange={handleChange}
          placeholder="Full Address"
        />
      )}
      <NoteTextArea placeholder="Note..."></NoteTextArea>
      <Purchase onClick={handlePurchase}>Purchase</Purchase>
    </Wrapper>
  );
}
