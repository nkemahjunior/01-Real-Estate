import { useMutation } from "@tanstack/react-query";
import { postPropertiesForRent } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function usePostPropertiesForRent(){
    const { mutate: postProperties, isLoading } = useMutation({
        mutationFn:(data) => postPropertiesForRent(data),
        
        onSuccess: (data) => {
            
            toast.success(
              "property added to properties for rent."
            );
          },
          onError:(data)=>{
            toast.error("could not add property,try again")
          }

    });

    return {postProperties, isLoading};
}