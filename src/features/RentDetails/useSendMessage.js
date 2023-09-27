import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../../services/apiMessages";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";


export function useSendMessage(){

    const {propertyID} = useParams();
    
    

    const { mutate:messageData, isLoading } = useMutation({
        mutationFn:(message) => {
            
            sendMessage(propertyID,message)
        },
        
        onSuccess: (data) => {
            
            toast.success(
              "message sent."
            );
          },
          onError:(data)=>{
            toast.error("could not send message,try again")
          }

    });

    return {messageData,isLoading}
}