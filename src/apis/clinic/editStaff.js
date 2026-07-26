import axios from "axios";
import { EDIT_STAFF_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editStaff = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_STAFF_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditStaff = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
