import React from "react";
import { useSelector } from "react-redux";
import Theme1 from "../../pages/theme1";

export default function Template() {
  const restaurant = useSelector((state) => state.restaurant); // Access restaurant from state
  if (restaurant.template_id === 1) {
    return <Theme1/>;
  }
}
