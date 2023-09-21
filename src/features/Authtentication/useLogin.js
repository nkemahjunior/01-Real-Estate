import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";



export function useLogin(){
    const queryClient = useQueryClient();
    const navigate = useNavigate();


    const{mutate: login, isLoading} = useMutation({
        mutationFn:({email,password}) => loginApi({email,password}),
        onSuccess : (data) => {
            queryClient.setQueryData(['user'],data.user) //manually setting the login data from useUser.js to the cache to safe time, this is not really necessary
            navigate('/home')
        },
        onError: (err) => {
            console.log('ERROR', err);
            //toast.error('Provided email or password are incorrect');
        },
    });

    return {login,isLoading}
}