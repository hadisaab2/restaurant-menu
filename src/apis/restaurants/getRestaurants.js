import axios from "axios";
import { GET_RESTAURANTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getRestaurants = async (params = {}, basePath) => {
  try {
    const searchParams = new URLSearchParams();
    if (params.search) searchParams.set("search", params.search);
    if (params.paymentDateFrom) searchParams.set("paymentDateFrom", params.paymentDateFrom);
    if (params.paymentDateTo) searchParams.set("paymentDateTo", params.paymentDateTo);
    if (params.paymentDatePassed) searchParams.set("paymentDatePassed", params.paymentDatePassed);
    const query = searchParams.toString();
    const base = basePath ? `${process.env.REACT_APP_BASE_URL}${basePath}` : GET_RESTAURANTS_URL;
    const url = query ? `${base}?${query}` : base;

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

export const useGetRestaurants = ({ onSuccess, filterParams, basePath } = {}) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getRestaurants(filterParams || {}, basePath),
    retry: false,
    queryKey: ["restaurants", filterParams || {}, basePath],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
