import axios from "axios";
import { EDIT_PACKAGE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editPackage = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_PACKAGE_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditPackage = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
