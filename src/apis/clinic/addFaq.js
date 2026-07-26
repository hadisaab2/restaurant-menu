import axios from "axios";
import { ADD_FAQ_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addFaq = async (payload) => {
  const response = await axios.post(ADD_FAQ_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddFaq = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faqs", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
