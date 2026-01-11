import axios from "axios";
import { EDIT_RESTAURANT_URL } from "../URLs";
import { useMutation } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";

const editRestaurant = async (id, payload) => {
  try {
    console.log("=".repeat(80));
    console.log("🔵 FRONTEND - editRestaurant called");
    console.log("ID:", id);
    console.log("Payload:", JSON.stringify(payload, null, 2));
    console.log("REACT_APP_BASE_URL:", process.env.REACT_APP_BASE_URL);
    
    const url = EDIT_RESTAURANT_URL(id);
    console.log("Full URL:", url);
    console.log("=".repeat(80));
    
    if (payload?.password === "") {
      delete payload?.password;
    }

    console.log("🚀 Sending PUT request to:", url);
    console.log("Request payload:", JSON.stringify(payload, null, 2));
    
    const response = await axios.put(url, payload, {
      headers: {
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });

    console.log("✅ Response received:", response.status, response.statusText);
    return response;
  } catch (error) {
    console.log("❌ ERROR in editRestaurant:");
    console.log("Error message:", error.message);
    console.log("Error response:", error.response?.data);
    console.log("Error status:", error.response?.status);
    console.log("Request URL:", error.config?.url);
    throw error;
  }
};

export const useEditRestaurantQuery = ({ onSuccess }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: (params) => editRestaurant(params[0], params[1]),
    onSuccess,
  });

  const handleApiCall = (id, data) => mutate([id, data]);

  return { isPending, error, handleApiCall };
};
