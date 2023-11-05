import { Link } from "react-router-dom";
import Spinner from "../../ui/Spinner";
import MessageRow from "./MessageRow";
import { useGetMessages } from "./useGetMessages";

function Messages({sender,message}) {

    const {isLoading,error,data} = useGetMessages();
    if(isLoading) return <Spinner/>
        const {data:messages} = data;
     

    return (
        <div className="flex justify-center items-center md:mt-6 px-2 bg-indigo-50 md:bg-white mb-2 ">

            <div className="md:border-2 md:border-solid phones:h-[40rem] h-[98dvh] w-[100dvh] md:h-[70dvh] md:w-[100dvh] overflow-y-scroll bg-indigo-50 md:px-4">

                {
                    messages.map(el => (
                       <Link to={`/messages/content/${el.senderID}`} key={el.id}>
                            <MessageRow  senderName={el.senderName} message={el.message}/>
                       </Link>
                    ))
                }
            </div>

        </div>
    )
}

export default Messages
