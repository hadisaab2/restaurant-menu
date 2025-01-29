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

        });

        return { error, isLoading, status, response: data, refetch };
    
};