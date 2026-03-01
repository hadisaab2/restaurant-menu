import axios from "axios";
import { DELETE_VALUE_CARD_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteValueCard = async (id) => {
  const response = await axios.delete(DELETE_VALUE_CARD_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteValueCardQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteValueCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["value-cards", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
