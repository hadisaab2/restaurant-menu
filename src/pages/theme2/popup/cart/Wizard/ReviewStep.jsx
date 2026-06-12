import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { convertPrice } from "../../../../../utilities/convertPrice";
import { getImageUrl } from "../../../../../utilities/imageUrl";
import { getCurrencySymbol } from "../../../../../utilities/getCurrencySymbol";
import {
  ReviewContainer,
  ReviewSection,
  SectionTitle,
  ReviewItem,
  ReviewLabel,
  ReviewValue,
  ItemsList,
  ReviewCartItem,
  ItemSummary,
  Divider,
  TotalValue,
  ReviewItemImage,
} from "./ReviewStepStyles";

export default function ReviewStep({ formData, restaurant, activeLanguage }) {
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

  const currencySymbol = getCurrencySymbol(restaurant?.currency);

  return (
    <ReviewContainer>
      <SectionTitle>Review Your Order</SectionTitle>

      <ReviewSection>
        <SectionTitle style={{ fontSize: "18px", marginBottom: "15px" }}>
          Order Items
        </SectionTitle>
        <ItemsList>
          {cart.map((item) => (
            <ReviewCartItem key={item.uniqueId}>
              <ItemSummary>
                <ReviewItemImage
                  src={getImageUrl(item.images?.[0]?.url)}
                  alt={activeLanguage === "en" ? item.en_name : item.ar_name}
                />
                <ReviewValue style={{ flex: 2 }}>
                  {item.quantity}x{" "}
                  <strong>
                    {activeLanguage === "en" ? item.en_name : item.ar_name}
                  </strong>
                </ReviewValue>
                <ReviewValue>
                  {convertPrice(item.price * item.quantity, currencySymbol)}
                </ReviewValue>
              </ItemSummary>
            </ReviewCartItem>
          ))}
        </ItemsList>
        <Divider />
        <ReviewItem>
          <ReviewLabel>Total:</ReviewLabel>
          <TotalValue>
            {convertPrice(totalPrice, currencySymbol)}
          </TotalValue>
        </ReviewItem>
      </ReviewSection>

      <ReviewSection>
        <SectionTitle style={{ fontSize: "18px", marginBottom: "15px" }}>
          Order Details
        </SectionTitle>
        <ReviewItem>
          <ReviewLabel>Order Type:</ReviewLabel>
          <ReviewValue>{formData.deliveryType}</ReviewValue>
        </ReviewItem>
        {formData.selectedBranch && (
          <ReviewItem>
            <ReviewLabel>Branch:</ReviewLabel>
            <ReviewValue>{formData.selectedBranch.name}</ReviewValue>
          </ReviewItem>
        )}
        {formData.selectedRegion && (
          <ReviewItem>
            <ReviewLabel>Region:</ReviewLabel>
            <ReviewValue>{formData.selectedRegion}</ReviewValue>
          </ReviewItem>
        )}
      </ReviewSection>

      <ReviewSection>
        <SectionTitle style={{ fontSize: "18px", marginBottom: "15px" }}>
          Contact Information
        </SectionTitle>
        <ReviewItem>
          <ReviewLabel>Name:</ReviewLabel>
          <ReviewValue>{formData.fullName}</ReviewValue>
        </ReviewItem>
        <ReviewItem>
          <ReviewLabel>Phone:</ReviewLabel>
          <ReviewValue>{formData.phoneNumber}</ReviewValue>
        </ReviewItem>
        {formData.deliveryType === "Delivery" && formData.fullAddress && (
          <ReviewItem>
            <ReviewLabel>Address:</ReviewLabel>
            <ReviewValue>{formData.fullAddress}</ReviewValue>
          </ReviewItem>
        )}
        {formData.deliveryType === "DineIn" && formData.tableNumber && (
          <ReviewItem>
            <ReviewLabel>Table Number:</ReviewLabel>
            <ReviewValue>{formData.tableNumber}</ReviewValue>
          </ReviewItem>
        )}
        {formData.note && (
          <ReviewItem>
            <ReviewLabel>Notes:</ReviewLabel>
            <ReviewValue>{formData.note}</ReviewValue>
          </ReviewItem>
        )}
      </ReviewSection>
    </ReviewContainer>
  );
}

