import axios from "axios";
import { GET_BADGES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getBadges = async (restaurantId) => {
  const url = GET_BADGES_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetBadges = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["badges", restaurant_id],
    queryFn: () => getBadges(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });
  return { response: data, refetch, isLoading };
};
