import axios from "axios";
import { DELETE_WORKING_HOURS_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteWorkingHours = async (id) => {
  const response = await axios.delete(DELETE_WORKING_HOURS_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteWorkingHours = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: deleteWorkingHours,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["working-hours", restaurant_id] });
      onSuccess?.();
    },
  });
  return { mutate };
};
