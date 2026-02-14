import axios from "axios";
import { getCookie } from "../../utilities/manageCookies";
import { useMutation } from "@tanstack/react-query";

const { REACT_APP_BASE_URL } = process.env;

const bulkInsertExcel = async (payload) => {
  try {
    const url = `${REACT_APP_BASE_URL}/restaurants/bulk-insert-excel`;
    const formData = new FormData();
    formData.append("restaurant_id", payload.restaurant_id);
    formData.append("excel_file", payload.excel_file);

    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${getCookie("accessToken")}`,
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const useBulkInsertExcelQuery = ({ onSuccess, onError }) => {
  const { error, mutate, isPending } = useMutation({
    mutationFn: bulkInsertExcel,
    onSuccess,
    onError,
  });

  const handleApiCall = (data) => mutate(data);

  return { isPending, error, handleApiCall };
};
