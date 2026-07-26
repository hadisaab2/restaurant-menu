import axios from "axios";
import { ADD_STAFF_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addStaff = async (payload) => {
  const response = await axios.post(ADD_STAFF_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddStaff = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addStaff,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["staff", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
