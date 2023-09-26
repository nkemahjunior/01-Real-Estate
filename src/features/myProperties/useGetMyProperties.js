

import { useQuery } from "@tanstack/react-query";
import { getMproperties } from "../../services/apiMyProperties";

export function useGetMyProperties(){
    const {isLoading ,data, error,} = useQuery({
        queryKey:["myProperties"],
        queryFn: getMproperties
    });

    return {isLoading,error,data}
}