import { useQuery } from "@tanstack/react-query";
import { getAllMessagesWithAPerson } from "../../services/apiMessages";
import { useParams } from "react-router-dom";

export function useGetAllMessages(){

    const {senderID} = useParams();

    const {isLoading ,data, error,} = useQuery({
        queryKey:["Allmessages",senderID],
        queryFn:() => getAllMessagesWithAPerson(senderID)
    });

    return {isLoading,data}
}