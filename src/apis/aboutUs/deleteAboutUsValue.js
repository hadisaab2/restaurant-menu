import axios from "axios";
import { DELETE_ABOUT_US_VALUE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteAboutUsValue = async (id) => {
  const url = DELETE_ABOUT_US_VALUE_URL(id);
  const response = await axios.delete(url, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteAboutUsValueQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteAboutUsValue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about-us", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
