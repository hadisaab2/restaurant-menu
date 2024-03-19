import axios from "axios";
import { GET_PRODUCT_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getProducts = async (id) => {
  try {
    const url = GET_PRODUCT_URL(id);

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

export const useGetProducts = ({ onSuccess, restaurantId }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getProducts(restaurantId),
    retry: false,
    queryKey: [`products-${restaurantId}`],
    onSuccess,
  });

  return { error, isLoading, status, response: data, refetch };
};
