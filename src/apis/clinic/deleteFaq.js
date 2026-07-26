import axios from "axios";
import { DELETE_FAQ_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteFaq = async (id) => {
  const response = await axios.delete(DELETE_FAQ_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteFaq = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteFaq,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["faqs", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
