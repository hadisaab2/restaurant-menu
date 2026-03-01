import axios from "axios";
import { GET_WORKING_HOURS_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getWorkingHours = async (restaurantId) => {
  const response = await axios.get(GET_WORKING_HOURS_URL(restaurantId), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useGetWorkingHours = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["working-hours", restaurant_id],
    queryFn: () => getWorkingHours(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });
  const list = Array.isArray(data?.data) ? data.data : [];
  return { response: list, refetch, isLoading };
};
