import axios from "axios";
import { EDIT_ABOUT_US_VALUE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editAboutUsValue = async (payload) => {
  const response = await axios.put(EDIT_ABOUT_US_VALUE_URL(payload.id), payload, {
    headers: { Authorization: "Bearer " + getCookie("accessToken") },
  });
  return response;
};

export const useEditAboutUsValueQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editAboutUsValue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about-us", restaurant_id] });
      onSuccess && onSuccess();
    },
  });
  return { mutate };
};
