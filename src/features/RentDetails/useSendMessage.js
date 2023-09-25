import { useMutation } from "@tanstack/react-query";
import { sendMessage } from "../../services/apiMessages";
import { useParams } from "react-router-dom";


export function useSendMessage(){

    const {propertyID} = useParams();
    
    

    const { mutate:messageData, isLoading } = useMutation({
        mutationFn:(message) => {
            
            sendMessage(propertyID,message)
        },
        
        onSuccess: (data) => {
            
            // toast.success(
            //   "Account successfully created! Please verufy the new account from the user's email address."
            // );
          },

    });

    return {messageData,isLoading}
}