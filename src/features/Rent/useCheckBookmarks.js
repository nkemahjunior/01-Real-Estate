
import { useQuery } from "@tanstack/react-query";
import { getBookmarks } from "../../services/apiBookmarks";

export function useCheckBookmarks(){
    const {isLoading ,data, error,} = useQuery({
        queryKey:["bookmarks"],
        queryFn: getBookmarks
    });

    return {isLoading,error,data}
}