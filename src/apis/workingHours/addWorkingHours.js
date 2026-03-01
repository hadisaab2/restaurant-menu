import axios from "axios";
import { ADD_WORKING_HOURS_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addWorkingHours = async (payload) => {
  const response = await axios.post(ADD_WORKING_HOURS_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddWorkingHours = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: addWorkingHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["working-hours", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
