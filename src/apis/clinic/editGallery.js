import axios from "axios";
import { EDIT_GALLERY_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editGallery = async ({ id, ...payload }) => {
  const response = await axios.put(EDIT_GALLERY_URL(id), payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useEditGallery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: editGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
