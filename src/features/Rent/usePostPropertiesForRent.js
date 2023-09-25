import { useMutation } from "@tanstack/react-query";
import { postPropertiesForRent } from "../../services/apiAuth";

export function usePostPropertiesForRent(){
    const { mutate: postProperties, isLoading } = useMutation({
        mutationFn:(data) => postPropertiesForRent(data),
        
        onSuccess: (data) => {
            
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },

    });

    return {postProperties, isLoading};
}