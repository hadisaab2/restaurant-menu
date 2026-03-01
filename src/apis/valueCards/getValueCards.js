import axios from "axios";
import { GET_VALUE_CARDS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getValueCards = async (restaurantId) => {
  const url = GET_VALUE_CARDS_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetValueCards = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["value-cards", restaurant_id],
    queryFn: () => getValueCards(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });
  return { response: data, refetch, isLoading };
};
