import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/apiAuth";


export function useUser(){
    const {isLoading,data: userData} = useQuery({
        queryKey:["user"],
        queryFn:getCurrentUser,
    });
    
    return{isLoading,userData,isAuthenticated: userData?.role === "authenticated"}
}