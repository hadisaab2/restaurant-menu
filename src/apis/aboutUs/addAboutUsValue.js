import axios from "axios";
import { ADD_ABOUT_US_VALUE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addAboutUsValue = async (payload) => {
  const response = await axios.post(ADD_ABOUT_US_VALUE_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddAboutUsValueQuery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addAboutUsValue,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about-us", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
