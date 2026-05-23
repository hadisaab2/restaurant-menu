import axios from "axios";
import { GET_BEST_SELLERS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getBestSellers = async (restaurantId, menuMode) => {
  if (!restaurantId) return [];
  const response = await axios.get(GET_BEST_SELLERS_URL(restaurantId, menuMode));
  return response.data || [];
};

export const useGetBestSellers = (restaurantId, menuMode) =>
  useQuery({
    queryKey: ["bestsellers", restaurantId, menuMode || 'all'],
    queryFn: () => getBestSellers(restaurantId, menuMode),
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
