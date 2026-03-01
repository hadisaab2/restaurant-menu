import axios from "axios";
import { ADD_BADGE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addBadge = async (payload) => {
  const response = await axios.post(ADD_BADGE_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddBadgeQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addBadge,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["badges", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
