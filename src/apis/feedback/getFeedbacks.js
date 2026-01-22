import axios from "axios";
import { GET_FEEDBACKS_URL } from "../URLs";

export const getFeedbacks = async (restaurantId) => {
  const response = await axios.get(GET_FEEDBACKS_URL(restaurantId));
  return response;
};
