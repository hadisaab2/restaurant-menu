import axios from "axios";
import { GET_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getProducts = async (categoryId, page) => {
  try {
    const url = GET_PRODUCTS_URL(categoryId, page);

    const response = await axios.get(url);

    return response;
  } catch (error) {
    throw error;
  }
};

export const useGetProducts = ({ onSuccess, categoryId, page }) => {
  const { error, isLoading, status, data, refetch } = useQuery({
    queryFn: () => getProducts(categoryId, page),
    queryKey: [`products-${categoryId}`, page],
    onSuccess,
    keepPreviousData: true,
    retry:false
  });
  return { error, isLoading, status, response: data, refetch };
};
