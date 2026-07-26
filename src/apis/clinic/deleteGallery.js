import axios from "axios";
import { DELETE_GALLERY_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const deleteGallery = async (id) => {
  const response = await axios.delete(DELETE_GALLERY_URL(id), {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useDeleteGallery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
