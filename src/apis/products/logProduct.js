import axios from "axios";
import { LOG_PRODUCT_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const logProduct = async (id) => {
  try {
    const url = LOG_PRODUCT_URL(id);

    const response = await axios.put(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useLogProduct = ({ onSuccess, productId }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => logProduct(productId),
    retry: false,
    queryKey: [`logproducts-${productId}`],
    onSuccess,
    refetchOnWindowFocus: false,
  });

  return { error, isLoading, status, response: data?.data, refetch };
};
