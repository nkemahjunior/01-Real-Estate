

import { useQuery } from "@tanstack/react-query";
import {  getMyBookmarks } from "../../services/apiMyProperties";

export function useGetMyBookmarks(){
    const {isLoading ,data, error,} = useQuery({
        queryKey:["myBookmarks"],
        queryFn: getMyBookmarks
    });

    return {isLoading,error,data}
}