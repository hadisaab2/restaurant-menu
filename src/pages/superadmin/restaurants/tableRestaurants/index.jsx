import React from "react";
import { Delete, Edit, EditDeleteIcons, Table, Td, Th, Tr } from "./styles";

function formatPaymentDate(value) {
  if (!value) return "—";
  const d = typeof value === "string" ? value.split("T")[0] : value;
  return d || "—";
}

function isPaymentDatePassed(paymentDate) {
  if (!paymentDate) return false;
  const d = typeof paymentDate === "string" ? paymentDate.split("T")[0] : paymentDate;
  if (!d) return false;
  return d < new Date().toISOString().slice(0, 10);
}

export default function TableRestaurants({
  restaurants,
  setSelectedIdForAction,
  setIsPopupOpen,
  handleEdit,
}) {
  return (
    <Table>
      <thead>
        <tr>
          <Th>User name</Th>
          <Th>Restaurant name</Th>
          <Th>Phone</Th>
          <Th>Payment date</Th>
          <Th>Amount</Th>
          <Th>Is paid</Th>
          <Th>Actions</Th>
        </tr>
      </thead>
      <tbody>
        {restaurants.map((restaurant) => {
          const needRenewal = isPaymentDatePassed(restaurant.payment_date);
          return (
            <Tr key={restaurant.restaurant_id} $needRenewal={needRenewal}>
              <Td>{restaurant.username}</Td>
              <Td>{restaurant.restaurantName}</Td>
              <Td>{restaurant.phone_number}</Td>
              <Td>{formatPaymentDate(restaurant.payment_date)}</Td>
              <Td>{restaurant.amount != null ? restaurant.amount : "—"}</Td>
              <Td>{restaurant.is_paid ? "Yes" : "No"}</Td>
              <Td>
                <EditDeleteIcons>
                  <Edit onClick={() => handleEdit(restaurant)} />
                  <Delete
                    onClick={() => {
                      setSelectedIdForAction(restaurant.restaurant_id);
                      setIsPopupOpen(true);
                    }}
                  />
                </EditDeleteIcons>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
}
