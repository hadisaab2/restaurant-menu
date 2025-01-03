import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import { DELETE_BRANCH_URL } from "../URLs";

const deleteBranch = async (id) => {
  try {
    const url = DELETE_BRANCH_URL(id);

    const response = await axios.delete(url, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const useDeleteBranchQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (id) => deleteBranch(id),
    onSuccess,
  });

  const handleApiCall = (id) => mutate(id);

  return { isPending, error, handleApiCall };
};
