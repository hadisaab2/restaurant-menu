import axios from "axios";
import { THREADS_PUBLIC_URL } from "../URLs";

export const createThreadPublic = async (payload) => {
  const response = await axios.post(THREADS_PUBLIC_URL, payload);
  return response;
};
