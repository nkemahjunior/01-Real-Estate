import { useMutation } from "@tanstack/react-query";
import { signUp as signUpApi } from "../../services/apiAuth";


export function useSignUp(){
    const { mutate: signUp, isLoading } = useMutation({
        mutationFn:signUpApi,
        onSuccess: (user) => {
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },

    });

    return {signUp, isLoading};
}