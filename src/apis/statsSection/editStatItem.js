import axios from "axios";
import { EDIT_STAT_ITEM_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editStatItem = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_STAT_ITEM_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditStatItem = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editStatItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats-section", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
