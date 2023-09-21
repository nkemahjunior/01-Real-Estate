import { useParams } from "react-router-dom";
import { rentalDetails } from "../../services/apiRentDetails";
import { useQuery } from "@tanstack/react-query";


export function useRentalDetails(){
    const {propertyID} = useParams();

    const {isLoading,data,error} = useQuery(
        {
            queryKey:["rentalDetails",propertyID],
            queryFn:() => rentalDetails(propertyID)
        }
    );

    return {isLoading,data,error}
}