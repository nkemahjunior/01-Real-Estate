
import { useState } from "react"
import {  IoCameraOutline } from "react-icons/io5"
import {  AiOutlineSend } from "react-icons/ai"
import { useForm } from "react-hook-form";
import { usePropertyOwner} from "./usePropertyOwner";
import Spinner from "../../ui/Spinner"
import { useSendMessage } from "./useSendMessage";



function PropertyOwner() {
    const [show,setShow] = useState(false);

    const {register,handleSubmit,formState,reset} = useForm()
    const { errors } = formState;

    const {messageData,isLoading:messageIsLoading} = useSendMessage();
    
    
  

    const {isLoading,data,error} = usePropertyOwner()
    if(isLoading) return <Spinner/>
    

    


    function onsubmit(message){
        
        messageData(message,{onSuccess:(data)=> {reset()}})
        
    }



    return (<>
        <div className="border-solid border-2 border-indigo-100 px-4 mt-4 rounded-lg md:border-0 md:px-0">
            <h3 className="md:hidden font-inter font-light mt-2">Listed by {data[0].ownerName}</h3>

            <div  className="md:grid md:grid-cols-2 md:gap-6">

                <div className="md:border-solid md:border-2 md:border-indigo-100 md:rounded-lg md: px-4 "
                >
                    <h3 className="767:hidden font-inter font-light mt-2">Listed by {data[0].ownerName}</h3>
                    <div className="flex mt-2">

                        <div><img src="../../public/avatar1.jpg" alt="avatar" className="h-[4rem] w-[4rem] rounded-full"/></div>
                        <div className="flex items-center justify-center font-bold">{data[0].ownerName}</div>
                    </div>

                    <div className="transition-all">
                        <div className="mt-2 mb-2 border-solid border-2 border-indigo-100 bg-indigo-200 text-indigo-600 md:hover:text-indigo-800 hover:bg-indigo-400 rounded-md p-4 text-center font-bold transition-all"
                        onClick={() => setShow((show) => !show)}
                        >Ask a question about this home</div>

                        { show && <div className="mt-4 transition-all delay-100">
                            <form onSubmit={handleSubmit(onsubmit)}>
                                <div className="w-[100%] ">
                                 <input type="text" className="border-solid border-2 border-black w-[100%] rounded-md h-[5rem]" 
                                 {...register('message',{required:true })}
                                 aria-invalid={errors.name ? "true" : "false"}
                                 />
                                    <div className="ml-1">
                                {errors.message?.type === "required" && ( <p role="alert" className="font-inter text-red-600">you can not send an empty message boy</p> )}</div>
                                </div>

                                <button className="flex items-center space-x-8 bg-indigo-600 py-2 px-2 text-white font-Inter rounded-md mb-4 mt-2"> send   <AiOutlineSend/></button>
                            </form>
                        </div>}

                    </div>
                </div>


                <div>
                    <div className="border-solid border-2 border-indigo-100 p-8 mt-4 rounded-lg  767:hidden">
                        <div>
                            <h2 className="font-bold mb-2">Request a home tour</h2>

                            <div className="flex items-center justify-center space-x-1 text-white bg-indigo-800 hover:bg-indigo-950
                            text-center p-2 rounded-lg mb-2 ">
                                <div><IoCameraOutline color="white"/></div>
                                <div > Request a tour</div>
                             </div>
                    
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <div className="border-solid border-2 border-indigo-100 px-4 mt-4 rounded-lg md:hidden">
            <div>
                <h2 className="font-bold mb-2">Request a home tour</h2>

                <div className="flex items-center justify-center space-x-1 text-white bg-indigo-800 hover:bg-indigo-950
                text-center p-2 rounded-lg mb-2 ">
                    <div><IoCameraOutline color="white"/></div>
                    <div > Request a tour</div>
                </div>
                    
            </div>
        </div>
    </> )
}

export default PropertyOwner
