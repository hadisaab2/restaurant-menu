import axios from "axios";
import { UPDATE_ABOUT_US_SECTION_URL } from "../URLs";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const updateAboutUsSection = async (args) => {
  const restaurant_id = args.restaurant_id;
  const url = UPDATE_ABOUT_US_SECTION_URL(restaurant_id);
  const response = await axios.put(url, args, {
    headers: { Authorization: "Bearer " + getCookie("accessToken") },
  });
  return response;
};

export const useUpdateAboutUsSectionQuery = (opts) => {
  const restaurant_id = opts.restaurant_id;
  const onSuccess = opts.onSuccess;
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateAboutUsSection,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["about-us", restaurant_id] });
      if (onSuccess) onSuccess();
    },
  });
  return { mutate };
};
