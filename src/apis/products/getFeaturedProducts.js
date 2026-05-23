import axios from "axios";
import { GET_FEATURED_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getFeaturedProducts = async (restaurantId, menuMode) => {
  if (!restaurantId) return [];
  const url = GET_FEATURED_PRODUCTS_URL(restaurantId, menuMode);
  const response = await axios.get(url);
  return response.data || [];
};

export const useGetFeaturedProducts = (restaurantId, menuMode) =>
  useQuery({
    queryKey: ["featured-products", restaurantId, menuMode || 'all'],
    queryFn: () => getFeaturedProducts(restaurantId, menuMode),
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
