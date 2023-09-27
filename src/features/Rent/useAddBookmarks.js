import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBookmark as addBookmarkApi } from "../../services/apiBookmarks";
import toast from "react-hot-toast";

export function useAddBookmarks(){
    const queryClient = useQueryClient();
    const { mutate: addBookmark, isLoading } = useMutation({
        mutationFn:(propertyID) => addBookmarkApi(propertyID),
        
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['bookmarks'] })
            
            // toast.success(
            //   "Bookmarks added."
            // );
          },
          onError:(data)=>{
            toast.error("could not be added to bookmarks,try again")
          }
         

    });

   

    return {addBookmark, isLoading};
}