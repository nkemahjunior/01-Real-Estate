import { useState } from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import {  useNavigate } from "react-router-dom"
import { useLogin } from "./useLogin";
// 
function Login() {

    const navigate = useNavigate();

    const {login,isLoading} = useLogin();


    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")


   
    function handleBackward(){
        navigate("/signUp")
    }

    function handleSubmit(e){
        e.preventDefault();
        if (!email || !password) return;
    
        //since this is a mutate function it has access to the onSuccess,onError,onSettled state
        login({email,password},
            {
                onSettled:() => {
                    setEmail("");
                    setPassword("");
                }
            }
            
        );
        

    }
    return (
       <div className=" relative top-[30dvh] 2xl:px-[30rem] space-y-10 " >

            <div className="font-rubik text-indigo-950 font-bold text-2xl flex justify-center items-center">
                <TbBuildingSkyscraper color='#1e1b4b'/>
                Zeco estate 
            </div>


        <div className=" shadow-sm shadow-indigo-900 ">

            <form onSubmit={handleSubmit} className=" bg-indigo-50">
                <div className=" flex flex-col justify-center items-center">

                    <div className="mb-4 flex flex-col 2xl:flex-row space-y-2 2xl:space-x-[1rem] mt-4">

                        <label htmlFor="email">Email Address </label>
                        <input type="email" className="border-2 border-solid  rounded-md 2xl:w-[20rem]" autoComplete="username"
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={isLoading}
                        />
                        
                    </div>

                    <div className="flex flex-col 2xl:flex-row space-y-2 2xl:space-x-[3.5rem]">
                        <label htmlFor="password">Password</label>

                        <input type="password" className="border-2 border-solid  rounded-md 2xl:w-[20rem]" 
                        onChange={(e) => setPassword(e.target.value)}
                        disabled={isLoading}
                        />
                    </div>
                </div>

                <div className="2xl:flex 2xl:justify-center 2xl:flex-col  2xl:items-center flex flex-col justify-center items-center">
                    <button type="submit"  className=" w-[80%]  bg-indigo-800 text-white font-bold font-Inter text-center p-4 2xl:w-[27.8rem] rounded-md mt-4 hover:bg-indigo-900"
                     disabled={isLoading}>

                         Login
                    </button>

                    <div className="font-inter mt-4 ">Don&apos;t have an account? <span onClick={handleBackward}  className="text-indigo-800 hover:underline">SignUp here</span> </div>
                </div>
            </form>
        </div>

        </div>

    )
}

export default Login
