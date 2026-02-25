import axios from "axios";
import { GET_RESTAURANTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getRestaurants = async (params = {}) => {
  try {
    const searchParams = new URLSearchParams();
    if (params.search) searchParams.set("search", params.search);
    if (params.paymentDateFrom) searchParams.set("paymentDateFrom", params.paymentDateFrom);
    if (params.paymentDateTo) searchParams.set("paymentDateTo", params.paymentDateTo);
    if (params.paymentDatePassed) searchParams.set("paymentDatePassed", params.paymentDatePassed);
    const query = searchParams.toString();
    const url = query ? `${GET_RESTAURANTS_URL}?${query}` : GET_RESTAURANTS_URL;

    const response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetRestaurants = ({ onSuccess, filterParams } = {}) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getRestaurants(filterParams || {}),
    retry: false,
    queryKey: ["restaurants", filterParams || {}],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
