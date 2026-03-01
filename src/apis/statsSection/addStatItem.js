import axios from "axios";
import { ADD_STAT_ITEM_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addStatItem = async (payload) => {
  const response = await axios.post(ADD_STAT_ITEM_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddStatItem = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addStatItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats-section", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
