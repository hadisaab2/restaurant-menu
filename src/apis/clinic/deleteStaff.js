import axios from "axios";
import { DELETE_STAFF_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteStaff = async (id) => {
  const response = await axios.delete(DELETE_STAFF_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteStaff = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
