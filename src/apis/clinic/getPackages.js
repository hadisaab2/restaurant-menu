import axios from "axios";
import { GET_PACKAGES_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getPackages = async (restaurantId) => {
  const url = GET_PACKAGES_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetPackages = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["packages", restaurant_id],
    queryFn: () => getPackages(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });

  return { response: data, refetch, isLoading };
};
