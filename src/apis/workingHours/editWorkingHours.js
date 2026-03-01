import axios from "axios";
import { EDIT_WORKING_HOURS_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editWorkingHours = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_WORKING_HOURS_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditWorkingHours = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: editWorkingHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["working-hours", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
