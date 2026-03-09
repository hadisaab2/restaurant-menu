import axios from "axios";
import { GET_ABOUT_US_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";

const getAboutUs = async (restaurantId) => {
  const response = await axios.get(GET_ABOUT_US_URL(restaurantId));
  return response;
};

export const useGetAboutUs = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["about-us", restaurant_id],
    queryFn: () => getAboutUs(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });
  return { response: data, refetch, isLoading };
};
