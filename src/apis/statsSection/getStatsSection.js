import axios from "axios";
import { GET_STATS_SECTION_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const getStatsSection = async (restaurantId) => {
  const response = await axios.get(GET_STATS_SECTION_URL(restaurantId), {
    headers: { Authorization: "Bearer " + getCookie("accessToken") },
  });
  return response;
};

export const useGetStatsSection = ({ restaurant_id, enabled = true }) => {
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["stats-section", restaurant_id],
    queryFn: () => getStatsSection(restaurant_id),
    enabled: !!restaurant_id && enabled,
  });
  const section = data?.data?.section ?? null;
  const items = Array.isArray(data?.data?.items) ? data.data.items : [];
  return { section, items, refetch, isLoading };
};
