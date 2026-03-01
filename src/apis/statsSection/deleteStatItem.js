import axios from "axios";
import { DELETE_STAT_ITEM_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteStatItem = async (id) => {
  const response = await axios.delete(DELETE_STAT_ITEM_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteStatItem = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteStatItem,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["stats-section", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
