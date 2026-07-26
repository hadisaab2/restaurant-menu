import axios from "axios";
import { ADD_GALLERY_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const addGallery = async (payload) => {
  const response = await axios.post(ADD_GALLERY_URL, payload, {
    headers: { Authorization: `Bearer ${getCookie("accessToken")}` },
  });
  return response;
};

export const useAddGallery = ({ restaurant_id, onSuccess }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: addGallery,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery", restaurant_id] });
      onSuccess?.();
    },
  });

  return { mutate };
};
