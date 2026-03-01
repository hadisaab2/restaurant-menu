import axios from "axios";
import { UPDATE_VALUE_CARDS_SECTION_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const updateValueCardsSection = async ({ restaurant_id, ...payload }) => {
  const response = await axios.put(UPDATE_VALUE_CARDS_SECTION_URL(restaurant_id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useUpdateValueCardsSectionQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateValueCardsSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["value-cards", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
