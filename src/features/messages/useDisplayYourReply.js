import { useQuery } from "@tanstack/react-query";
import { displayYourReplyToAMessage, getAllMessagesWithAPerson } from "../../services/apiMessages";
import { useParams } from "react-router-dom";

export function useDisplayYourReply(){

    const {senderID} = useParams();

    const {isLoading ,data, error,} = useQuery({
        queryKey:["reply",senderID],
        queryFn:() => displayYourReplyToAMessage(senderID)
    });

    return {isLoading,data}
}