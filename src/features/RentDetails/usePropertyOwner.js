import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getOwnerOfProperty } from "../../services/apiMessages";

export function usePropertyOwner(){
    const {propertyID} = useParams();

    const {isLoading,data,error} = useQuery(
        {
            queryKey:["propertyOwner",propertyID],
            queryFn:() => getOwnerOfProperty(propertyID)
        }
    );

    return {isLoading,data,error}
}