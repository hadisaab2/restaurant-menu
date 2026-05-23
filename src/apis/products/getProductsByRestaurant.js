import axios from "axios";
import { GET_PRODUCTS_BY_RESTAURANT_URL } from "../URLs";
import { useInfiniteQuery } from "@tanstack/react-query";

const getProductsByRestaurant = async (restaurantId, page = 0, menuMode) => {
  if (!restaurantId) return [];
  const url = GET_PRODUCTS_BY_RESTAURANT_URL(restaurantId, page, menuMode);
  const response = await axios.get(url);
  return response.data || [];
};

export const useGetProductsByRestaurant = (restaurantId, menuMode) =>
  useInfiniteQuery({
    queryKey: ["products-by-restaurant", restaurantId, menuMode || 'all'],
    queryFn: ({ pageParam = 0 }) => getProductsByRestaurant(restaurantId, pageParam, menuMode),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length < 10) return undefined;
      return allPages.length;
    },
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
