import axios from "axios";
import { EDIT_BADGE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editBadge = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_BADGE_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditBadgeQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editBadge,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["badges", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
