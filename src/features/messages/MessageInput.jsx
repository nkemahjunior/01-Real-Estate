import { Send } from "@mui/icons-material"
import { useForm } from "react-hook-form"

function MessageInput() {
    const { register, handleSubmit } = useForm()

    function onsubmit( data){
        console.log(data)
    }

    return (
        <div className="mt-4">
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="flex space-x-2"> 
                    <div>
                        <input type="text" id="message" className="w-[40dvh] rounded-md" {...register("message",{required:true})}/>
                    </div>

                    <button><Send style={{  color:'#6366f1'}} /></button>
                </div>
            </form>
        </div>
    )
}

export default MessageInput
