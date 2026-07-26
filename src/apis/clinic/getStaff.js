import axios from "axios";
import { GET_STAFF_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getStaff = async (restaurantId) => {
  const url = GET_STAFF_URL(restaurantId);
  const response = await axios.get(url);
  return response;
};

export const useGetStaff = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["staff", restaurant_id],
    queryFn: () => getStaff(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });

  return { response: data, refetch, isLoading };
};
