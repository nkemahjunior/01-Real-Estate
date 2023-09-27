
import Spinner from "../../ui/Spinner";
import MessageInput from "./MessageInput"
import MessageReceived from "./MessageReceived"
import MessageSent from "./MessageSent"
import { useDisplayYourReply } from "./useDisplayYourReply";
import { useGetAllMessages } from "./useGetAllMessages";

function MessageContent() {

  

    const {isLoading,error,data} = useGetAllMessages();
    const {isLoading:isReplying,data:replyData} = useDisplayYourReply();

    if(isLoading) return <Spinner/>
    if(isReplying) return <Spinner/>


    const{data:allReceivedMessages} = data
    const{data:replyingData} = replyData
    
    
   
    return (
        <div className="flex justify-center items-center md:mt-6 px-2 bg-indigo-50 md:bg-white">

            <div className="md:border-2 md:border-solid h-[98dvh] w-[100dvh] md:h-[70dvh] md:w-[100dvh] overflow-y-scroll bg-indigo-50 md:px-4">
                <div className="pt-4">
                    {
                        allReceivedMessages.map(el => <MessageReceived key={el.id} message={el.message}/>)
                    }
                    {
                        replyingData.map(el =><MessageSent key={el.id} message={el.message}/> )
                    }
                    
                    <MessageInput/>
                </div>
            </div>

        </div>
    )
}

export default MessageContent
