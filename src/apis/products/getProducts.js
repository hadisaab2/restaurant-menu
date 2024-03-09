import axios from "axios";
import { GET_PRODUCT_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getProducts = async () => {
  try {
    const url = GET_PRODUCT_URL;

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

export const useGetProducts = ({ onSuccess }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: getProducts,
    retry: false,
    queryKey: ["products"],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
