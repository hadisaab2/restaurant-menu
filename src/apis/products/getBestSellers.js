import axios from "axios";
import { GET_BEST_SELLERS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getBestSellers = async (restaurantId) => {
  if (!restaurantId) return [];
  const response = await axios.get(GET_BEST_SELLERS_URL(restaurantId));
  return response.data || [];
};

export const useGetBestSellers = (restaurantId) =>
  useQuery({
    queryKey: ["bestsellers", restaurantId],
    queryFn: () => getBestSellers(restaurantId),
    enabled: !!restaurantId,
    refetchOnWindowFocus: false,
    retry: false,
  });
