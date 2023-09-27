import { useMutation, useQueryClient } from "@tanstack/react-query";
import { replyAMessage, sendMessage } from "../../services/apiMessages";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";


export function useReplyAMessage(){

    const {senderID} = useParams();
    
    const queryClient = useQueryClient();
    

    const { mutate:messageReply, isLoading } = useMutation({
        mutationFn:(message) => {
            
            replyAMessage(senderID,message)
        },
        
        onSuccess: (data) => {
            queryClient.invalidateQueries({ queryKey: ['reply'] })
            
            toast.success(
              "message sent."
            );
          },
          onError:(data)=>{
            toast.error("could not send message,try again")
          }

    });

    return {messageReply,isLoading}
}