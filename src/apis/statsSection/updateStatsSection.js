import axios from "axios";
import { UPDATE_STATS_SECTION_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const updateStatsSection = async (args) => {
  const { restaurant_id, ...payload } = args;
  const response = await axios.put(UPDATE_STATS_SECTION_URL(restaurant_id), payload, {
    headers: { Authorization: "Bearer " + getCookie("accessToken") },
  });
  return response;
};

export const useUpdateStatsSection = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateStatsSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats-section", restaurant_id] });
      if (onSuccess) onSuccess();
    },
  });
  return { mutate };
};
