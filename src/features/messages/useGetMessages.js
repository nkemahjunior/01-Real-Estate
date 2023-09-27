import { useQuery } from "@tanstack/react-query";
import { getMessages } from "../../services/apiMessages";

export function useGetMessages(){
    const {isLoading ,data, error,} = useQuery({
        queryKey:["messages"],
        queryFn: getMessages
    });

    return {isLoading,data}
}