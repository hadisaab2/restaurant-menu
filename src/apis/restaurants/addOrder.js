import axios from "axios";
import { ADD_ORDER_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { getCustomerAccessToken } from "../../utilities/customerAuthStorage";

const addOrder = async ({ payload, restaurantName }) => {
  try {
    const url = ADD_ORDER_URL;
    const customerToken = restaurantName ? getCustomerAccessToken(restaurantName) : null;
    const adminToken = getCookie("accessToken");
    const token = customerToken || adminToken;
    const headers = {};
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const response = await axios.post(url, payload, { headers });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddOrderQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: addOrder,
    onSuccess,
  });

  const handleApiCall = (payload, restaurantName) => mutate({ payload, restaurantName });

  return { isPending, error, handleApiCall };
};
