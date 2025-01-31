import axios from "axios";
import { GET_BRANCH_URL } from "../URLs";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "../../utilities/manageCookies";
import _ from "lodash";

const getBranch = async (id) => {
    try {
        console.log(id)
        if (id!=null && id!=undefined) {
            
        const url = GET_BRANCH_URL(id);

        const response = await axios.get(url, {
            headers: {
                Authorization: `Bearer ${getCookie("accessToken")}`,
            },
        });

        return response;
    }
    } catch (error) {
        throw error;
    }
};

export const useGetBranch = ({ onSuccess, branch_id }) => {
        const { error, isLoading, status, data, refetch } = useQuery({
            queryFn: () => getBranch(branch_id),
            queryKey: [`branch-${branch_id}`],
            onSuccess,
            retry: false, // Disable retries
            cacheTime: 0, // Do not cache results
            staleTime: 0, // Always refetch the data
            refetchOnMount: true, // Fetch again when component remounts
            refetchOnWindowFocus: true, // Fetch again when the window is focused

        });

        return { error, isLoading, status, response: data, refetch };
    
};