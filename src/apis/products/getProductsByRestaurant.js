import axios from "axios";
import { GET_PRODUCTS_BY_RESTAURANT_URL } from "../URLs";
import { useInfiniteQuery } from "@tanstack/react-query";

const getProductsByRestaurant = async (restaurantId, page = 0) => {
  if (!restaurantId) return [];
  const url = GET_PRODUCTS_BY_RESTAURANT_URL(restaurantId, page);
  const response = await axios.get(url);
  return response.data || [];
};

export const useGetProductsByRestaurant = (restaurantId) =>
  useInfiniteQuery({
    queryKey: ["products-by-restaurant", restaurantId],
    queryFn: ({ pageParam = 0 }) => getProductsByRestaurant(restaurantId, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined;
      return allPages.length;
    },
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
