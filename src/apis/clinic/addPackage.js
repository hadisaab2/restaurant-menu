import axios from "axios";
import { ADD_PACKAGE_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addPackage = async (payload) => {
  const response = await axios.post(ADD_PACKAGE_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddPackage = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addPackage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["packages", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
