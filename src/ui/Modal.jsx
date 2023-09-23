import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "./modalSlice";
import { useEffect, useRef, useState } from "react";
import { useDetectClickOutsideTarget } from "../hooks/detectClickOutsideTarget";
import { useForm } from "react-hook-form";

function Modal() {
    
    const {register,handleSubmit,formState} = useForm()
    const { errors } = formState;

    const close_or_open = useSelector((state) => state.modal.open)
    

    const [slideBack, setSlideBack] = useState(false)

    
    
    const dispatch = useDispatch();

    const ref = useDetectClickOutsideTarget(closeModal);

    function onSubmit({data}){
        console.log(data)
    }

            // ${close_or_open === false ? "h-[0rem] w-[0rem] -mt-[3rem] " : ""} 
        // ${close_or_open === true ? " animate-expand" : " animate-small"} 
       // ${close_or_open === false ? "translate-x-[30rem] transition  ease-out " : ""} 
        //${close_or_open === true ? " animate-slide" : "  "} 
        //${slideBack === true ? "animate-slideBack" : ""}

    return (
      

        
        <div className={`
        
            ${close_or_open === false ? "translate-x-[120rem]   transition  ease-out " : ""} 
             ${close_or_open === true ? " animate-slide " : "  "} 
            ${slideBack === true ? "animate-slideBack  " : ""}
            
         
            
            h-[95dvh]  w-[100%]   fixed  z-50 modal
            border- border-solid border-red-700
            bg-indigo-50 
            lg:mx-[5rem]
            
            `}
            ref={ref}
        >
            <div className="border- border-solid border-blue-700 h-[100%] 
            w-[100%] overflow-scroll px-2 pt-8 ">

                <span className="  text-2xl cursor-pointer
                border-2   border-solid border-black  p-2 ease-linear  ml-2 " 
                onClick={() => {
                    dispatch(closeModal())
                    setSlideBack((v) => !v)

                }}
                >x</span>

                <div className="mt-8">
               
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex flex-col md:flex-row ">

                            <label htmlFor="name" className="font-inter font-bold mb-1 md:mr-[2.7rem]">
                                Property name
                            </label>

                            <input className="border-2 border-solid rounded-md md:w-[80%] md:mb-3 " 
                            {...register('fullName',{required:true},{ pattern: /^[A-Za-z]+$/i })}
                            aria-invalid={errors.name ? "true" : "false"}
                            // disabled = {isLoading}
                            /> 
                            <div className="ml-1">
                            {errors.fullName?.type === "required" && ( <p role="alert" className="font-inter text-red-600">property name is required</p> )}</div>
                        </div>

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="price" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            >Property price </label>

                            <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('price',{required:true})}
                            aria-invalid={errors.price ? "true" : "false"}
                            // disabled = {isLoading}
                            />
                            {errors.price?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">price is required</p> )}
                        </div>
                        

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="beds" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            >number of beds </label>

                            <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('beds',{required:true})}
                            aria-invalid={errors.beds ? "true" : "false"}
                            // disabled = {isLoading}
                            />
                            {errors.beds?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">number of beds is required</p> )}
                        </div>
                    
                        

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="bathrooms" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            >number of bathrooms </label>

                            <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('bathrooms',{required:true})}
                            aria-invalid={errors.bathrooms ? "true" : "false"}
                            // disabled = {isLoading}
                            />
                            {errors.bathrooms?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">number of bathrooms is required</p> )}
                        </div>
                    
                    
                        

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="area" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            > area of house </label>

                            <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('area',{required:true})}
                            aria-invalid={errors.area ? "true" : "false"}
                            // disabled = {isLoading}
                            />
                            {errors.area?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1"> area is required</p> )}
                        </div>
                    
                    
                        

                        <div className="flex flex-col md:flex-row">
                            <label htmlFor="repair" 
                            className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                            > repqirs type </label>

                            <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                            {...register('repair',{required:true})}
                            aria-invalid={errors.repair ? "true" : "false"}
                            // disabled = {isLoading}
                            />
                            {errors.repair?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1"> repair type is required</p> )}
                        </div>

                        <div className="flex flex-col md:flex-row ">
                            <label htmlFor="location"
                            className="font-inter font-bold mb-1 md:mr-[3rem]"
                            >location</label>

                            <input type="text" className="border-2 border-solid rounded-md md:w-[80%]"
                            {...register('location',{required:true })}
                            
                            aria-invalid={errors.location ? "true" : "false"}
                            //disabled = {isLoading}
                            />  
                            {errors.location?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">location is required</p> )}
                        </div>

                                                    

                        <div className="flex flex-col md:flex-row ">
                            <label htmlFor="description"
                            className="font-inter font-bold mb-1 md:mr-[3rem]"
                            >description</label>

                            <textarea rows="4" cols="100" type="text" className="border-2 border-solid rounded-md md:w-[80%]"
                            {...register('description')}
                            
                            //disabled = {isLoading}
                            />  
                        </div>


                                                    

                        <div className="flex flex-col md:flex-row ">
                            <label htmlFor="picture"
                            className="font-inter font-bold mb-1 md:mr-[3rem]"
                            >Property picture</label>

                            <input type="file" className="border-2 border-solid rounded-md md:w-[80%]"
                            {...register('picture',{required:true })}
                            
                            aria-invalid={errors.picture ? "true" : "false"}
                            //disabled = {isLoading}
                            />  
                            {errors.picture?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">property picture is required</p> )}
                        </div>

                        
                                                    

                        <div className="flex flex-col md:flex-row ">
                            <label htmlFor="picture"
                            className="font-inter font-bold mb-1 md:mr-[3rem]"
                            >interior picture</label>

                            <input type="file" className="border-2 border-solid rounded-md md:w-[80%]"
                            {...register('interiorPicture',{required:true })}
                            
                            aria-invalid={errors.interiorPicture ? "true" : "false"}
                            //disabled = {isLoading}
                            />  
                            {errors.interiorPicture?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">interior  picture is required</p> )}
                        </div>


                        <div className="flex justify-center items-center flex-col">
                            <button className="text-white font-inter rounded-lg p-2 mt-4 mb-2 font-bold bg-indigo-800 w-[10rem] md:hover:bg-indigo-900
                            md:w-[15rem]">{/*{isLoading ? <Spinner/>:"SignUp"}*/}</button>


                        </div>
                        
                    </form>
                </div>
            </div>
        </div>

                
    
        
        
    )
}

export default Modal
