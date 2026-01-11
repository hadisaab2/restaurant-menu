import axios from "axios";

const addFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/feedback`,
      feedbackData
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const useAddFeedback = ({ onSuccess, onError }) => {
  const handleApiCall = async (feedbackData) => {
    try {
      const response = await addFeedback(feedbackData);
      if (onSuccess) onSuccess(response);
      return response;
    } catch (error) {
      if (onError) onError(error);
      throw error;
    }
  };

  return { handleApiCall };
};

