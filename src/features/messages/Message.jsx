import MessageInput from "./MessageInput"
import MessageReceived from "./MessageReceived"
import MessageSent from "./MessageSent"

function Message() {
    return (
        <div className="flex justify-center items-center md:mt-6 px-2 bg-indigo-50 md:bg-white">

            <div className="md:border-2 md:border-solid h-[98dvh] w-[100dvh] md:h-[70dvh] md:w-[100dvh] overflow-y-scroll bg-indigo-50 md:px-4">
                <div className="pt-4">
                    <MessageReceived/>
                    <MessageSent/>
                    <MessageInput/>
                </div>
            </div>

        </div>
    )
}

export default Message
