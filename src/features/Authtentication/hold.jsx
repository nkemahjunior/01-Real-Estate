import { useForm } from "react-hook-form";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { useSignUp } from "./useSignUp";

function SignUp() {

    const {signUp, isLoading} = useSignUp();

    const {register, formState,  handleSubmit} = useForm();
    const {errors} = formState;

    const navigate = useNavigate();
    function handleForward(){
        navigate("/signUp/login")
    }

    function onSubmit({email,password,fullName}){
        
        signUp({email,password,fullName})
        navigate("/signUp/login")
    }

    return (
       <div className=" relative top-[30dvh] 2xl:px-[30rem] space-y-10 "  >
            <div className="font-rubik text-indigo-950 font-bold text-2xl flex justify-center items-center">
                <TbBuildingSkyscraper color='#1e1b4b'/>
                Zeco estate 
            </div>

        <div className=" shadow-sm shadow-indigo-900 mx-4 ">

            <form onSubmit={handleSubmit(onSubmit)} className=" bg-indigo-50">
                <div className=" flex flex-col justify-center items-center">

                    <div className="mb-4 flex flex-col 2xl:flex-row space-y-2 2xl:space-x-[1rem] mt-4">

                        <label htmlFor="fullName" >Full Name </label>

                        <input type="text" id="fullName" className="border-2 border-solid  rounded-md 2xl:w-[20rem]"  autoComplete="username"
                        {...register("fullName",{required:"This field is required boy",  })}
                        aria-invalid={errors.fullName ? "wrong name" : ""}
                        />
                        
                    </div>

                    <div className="mb-4 flex flex-col 2xl:flex-row space-y-2 2xl:space-x-[1rem] mt-4">

                        <label htmlFor="email" >Email Address </label>
                        <input type="email" id="email" className="border-2 border-solid  rounded-md 2xl:w-[20rem]"  autoComplete="username"
                        {...register("email",{required:"This field is required boy" ,
                        pattern: {
                          value: /\S+@\S+\.\S+/,
                          message: "Please provide a valid email address",
                        },})}

                        aria-invalid={errors.email ? "wrong email" : ""}
                        />
                        
                    </div>

                    <div className="flex flex-col 2xl:flex-row space-y-2 2xl:space-x-[3.5rem]">
                        <label htmlFor="password">Password(min: 8characters)</label>

                        <input type="password" id="password" className="border-2 border-solid  rounded-md 2xl:w-[20rem]" 
                        {...register("password",{required:"This field is required boy",
                        minLength: {
                          value: 8,
                          message: "Password needs a minimum of 8 characters",
                        },})}

                        aria-invalid={errors.email ? "password should not be less than 8characters" : ""}
                        />
                    </div>
                </div>

                <div className="2xl:flex 2xl:justify-center 2xl:flex-col  2xl:items-center flex flex-col justify-center items-center">
                    <button type="submit" className=" w-[80%]  bg-indigo-800 text-white font-bold font-Inter text-center p-4 2xl:w-[27.8rem] rounded-md mt-4 hover:bg-indigo-900">signup</button>

                    <div className="font-inter mt-4 ">Already have an account? <span onClick={handleForward} className="text-indigo-800 hover:underline">Sign in here</span> </div>
                </div>
            </form>
        </div>

        </div>

    )
}

export default SignUp;



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
        navigate("/")
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
