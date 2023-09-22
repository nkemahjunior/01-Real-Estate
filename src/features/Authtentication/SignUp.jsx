import { useForm } from "react-hook-form"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { useSignUp } from "./useSignUp";
import { useNavigate } from "react-router-dom";
import Spinner from "../../ui/Spinner";



function SignUp() {

    const {signUp, isLoading} = useSignUp();

    const {register,handleSubmit,formState} = useForm()
    const { errors } = formState;

    const navigate = useNavigate();
    function handleForward(){
        navigate("/signUp/login")
    }

    function onSubmit({email,password,fullName}){
        
        signUp({email,password,fullName})
        navigate("/signUp/login")
    }

    return (
        <div>
            <div className="border-solid border- border-red-600 mt-[20dvh] px-2 py-2 md:px-8 md:mt-[23dvh] lg:px-[10rem]">
                


                <div className="border-solid border- border-blue-950 bg-indigo-50 px-1 shadow-sm shadow-indigo-950 md:px-8 md:py-4">

                    <div className="font-rubik text-indigo-950 font-bold text-2xl flex justify-center items-center mb-2 ">
                    <TbBuildingSkyscraper color='#1e1b4b'/>
                    Zeco estate 
                    </div>
                    <h1 className="text-center font-bold font-inter md:text-xl mb-[2rem] ">SignUp </h1>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row ">

                            <label htmlFor="fullName" className="font-inter font-bold mb-1 md:mr-[2.7rem]">
                                Full Name
                            </label>

                            <input className="border-2 border-solid rounded-md md:w-[80%] md:mb-3 " 
                            {...register('fullName',{required:true},{ pattern: /^[A-Za-z]+$/i })}
                            aria-invalid={errors.fullName ? "true" : "false"}
                            disabled = {isLoading}
                            /> 
                            <div className="ml-1">
                            {errors.fullName?.type === "required" && ( <p role="alert" className="font-inter text-red-600">First name is required</p> )}</div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="email" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            >Email Address </label>

                            <input type="email" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('email',{required:true})}
                            aria-invalid={errors.email ? "true" : "false"}
                            disabled = {isLoading}
                            />
                            {errors.email?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">email is required</p> )}
                        </div>

                        <div className="flex flex-col md:flex-row ">
                            <label htmlFor="password"
                            className="font-inter font-bold mb-1 md:mr-[3rem]"
                            >Password</label>

                            <input type="password" className="border-2 border-solid rounded-md md:w-[80%]"
                            {...register('password',{required:true,
                            minLength:{
                                value:8
                            }
                            })}
                            
                            aria-invalid={errors.password ? "true" : "false"}
                            disabled = {isLoading}
                            />  
                            {errors.password?.type === "minLength"  && ( <p role="alert" className="font-inter text-red-600 ml-1">password should be above 6 characters</p> )}
                        </div>

                        <div className="flex justify-center items-center flex-col">
                            <button className="text-white font-inter rounded-lg p-2 mt-4 mb-2 font-bold bg-indigo-800 w-[10rem] md:hover:bg-indigo-900
                            md:w-[15rem]">{isLoading ? <Spinner/>:"SignUp"}</button>

                            <div className="font-inter mt-2 ">Already have an account? <span onClick={handleForward} className="text-indigo-800 hover:underline">Sign in here</span> </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
