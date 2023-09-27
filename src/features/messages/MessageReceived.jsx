function MessageReceived({message}) {
    return (
        <div className="mt-2">
            <div className="border-solid border-2 rounded-md bg-stone-50 text-left  w-fit p-2 font-Inter ">
                {message}
            </div>
        </div>
    )
}

export default MessageReceived
