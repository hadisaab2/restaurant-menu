import axios from "axios";
import { EDIT_FAQ_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editFaq = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_FAQ_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditFaq = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faqs", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
