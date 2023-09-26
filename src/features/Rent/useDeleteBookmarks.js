import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBookmarks } from "../../services/apiBookmarks";


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
 
         

    });

    return{deleteBookmark,isLoading}

}