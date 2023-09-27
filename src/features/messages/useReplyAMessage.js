import { useMutation, useQueryClient } from "@tanstack/react-query";
import { replyAMessage, sendMessage } from "../../services/apiMessages";
import { useParams } from "react-router-dom";


export function useReplyAMessage(){

    const {senderID} = useParams();
    
    const queryClient = useQueryClient();
    

    const { mutate:messageReply, isLoading } = useMutation({
        mutationFn:(message) => {
            
            replyAMessage(senderID,message)
        },
        
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reply'] })
            
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },

    });

    return {messageReply,isLoading}
}