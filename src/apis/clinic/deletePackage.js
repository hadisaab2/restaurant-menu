import axios from "axios";
import { DELETE_PACKAGE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deletePackage = async (id) => {
  const response = await axios.delete(DELETE_PACKAGE_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeletePackage = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deletePackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
