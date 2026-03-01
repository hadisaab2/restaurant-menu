import axios from "axios";
import { ADD_VALUE_CARD_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addValueCard = async (payload) => {
  const response = await axios.post(ADD_VALUE_CARD_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddValueCardQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addValueCard,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["value-cards", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
