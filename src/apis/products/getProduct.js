import axios from "axios";
import { GET_ONEPRODUCT_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

export const getProduct = async (id) => {
  try {
    const url = GET_ONEPRODUCT_URL(id);

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

export const PRODUCT_QUERY_KEY = (productId) => [`products-${productId}`];

export const useGetProduct = ({ onSuccess, productId }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getProduct(productId),
    queryKey: PRODUCT_QUERY_KEY(productId),
    retry: false,
    staleTime: 5 * 60 * 1000,
    onSuccess,
    refetchOnWindowFocus: false,
  });

  return { error, isLoading, status, response: data?.data, refetch };
};
