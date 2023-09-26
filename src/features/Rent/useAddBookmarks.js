import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark as addBookmarkApi } from "../../services/apiBookmarks";

export function useAddBookmarks(){
    const queryClient = useQueryClient();
    const { mutate: addBookmark, isLoading } = useMutation({
        mutationFn:(propertyID) => addBookmarkApi(propertyID),
        
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
            
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },
         

    });

   

    return {addBookmark, isLoading};
}