function MessageRow({senderName,message}) {
    return (
            <div className="bg-stone-200 p-2 border-b-2 border-solid  border-stone-300"  >
            <div className="font-bold font-inter">{senderName}</div>
            <div className=" font-inter">{message}</div>
       </div>
    )
}

export default MessageRow
