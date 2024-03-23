import axios from "axios";
import { SIGNIN_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";

const signIn = async (payload) => {
  try {
    const url = SIGNIN_URL;

    const response = await axios.post(url, payload);

    return response;
  } catch (error) {
    throw error;
  }
};

export const useSignInQuery = ({ onSuccess, onError }) => {
  const { error, mutate, isLoading } = useMutation({
    mutationFn: signIn,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isLoading, error, handleApiCall };
};
