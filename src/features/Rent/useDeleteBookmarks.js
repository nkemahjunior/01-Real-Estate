import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmarks } from "../../services/apiBookmarks";
import toast from "react-hot-toast";


export function useDeleteBookmark(){
    const queryClient = useQueryClient();
    const { mutate: deleteBookmark, isLoading } = useMutation({
        mutationFn:(propertyID) => deleteBookmarks(propertyID),
        
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
            
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },
          onError:(data)=>{
            toast.error("could not remove the property from bookmarks,try again")
          }
 
         

    });

    return{deleteBookmark,isLoading}

}