import axios from "axios";
import { EDIT_VALUE_CARD_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editValueCard = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_VALUE_CARD_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditValueCardQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editValueCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["value-cards", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
