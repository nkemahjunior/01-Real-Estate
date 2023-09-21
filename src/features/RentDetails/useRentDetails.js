import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { propertyDetails } from "../../services/apiRentDetails";


export function useRentDetails(){
   
   const {propertyID} = useParams();

    

    const {isLoading,data,error} = useQuery(
        {
            queryKey:["details",propertyID],
            queryFn:() => propertyDetails(propertyID)
        }
    );

    return {isLoading,data,error}
}