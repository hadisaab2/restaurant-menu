import axios from "axios";
import { GET_FEATURED_PRODUCTS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getFeaturedProducts = async (restaurantId) => {
  if (!restaurantId) return [];
  const url = GET_FEATURED_PRODUCTS_URL(restaurantId);
  const response = await axios.get(url);
  return response.data || [];
};

export const useGetFeaturedProducts = (restaurantId) =>
  useQuery({
    queryKey: ["featured-products", restaurantId],
    queryFn: () => getFeaturedProducts(restaurantId),
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
