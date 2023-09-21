import { useMutation, useQueryClient } from "@tanstack/react-query";
import {logout as logoutApi} from "../../services/apiAuth"
import { useNavigate } from "react-router-dom";


export function useLogout(){

    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const {mutate: logout, isLoading} = useMutation({
        mutationFn: logoutApi,

        onSuccess:() => {
            queryClient.removeQueries(); //remember we manually set login data to the cache when we were login in? (useLogin.js - line 15)
            navigate("/signUp/login")
        }
    })

    return {logout,isLoading}
}