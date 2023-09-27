import { useDispatch, useSelector } from "react-redux"
import { closeModal } from "./modalSlice";
import { useEffect, useRef, useState } from "react";
import { useDetectClickOutsideTarget } from "../hooks/detectClickOutsideTarget";
import { useForm } from "react-hook-form";
import { usePostPropertiesForRent } from "../features/Rent/usePostPropertiesForRent";
import { createPortal } from "react-dom";

function Modal() {
    
    const {register,handleSubmit,reset,formState} = useForm()
    const { errors } = formState;

    const close_or_open = useSelector((state) => state.modal.open)
    const dispatch = useDispatch();
    const ref = useDetectClickOutsideTarget(closeModal);

    const {postProperties, isLoading} = usePostPropertiesForRent();
    

    
    

    //
    //data.interiorPicture[0].name
    function onSubmit(data){
        console.log(data)

        postProperties(data,{
            onSuccess:(data) => {
                reset();
            }
        })
    }


    return (
      

        <div className=" md:flex md:justify-center ">
        
            <div className={`
            
                ${close_or_open === false ? "hidden   transition  ease-out " : ""} 
                
                h-[95dvh]  w-[100%]  md:w-[80%]  fixed  z-[55] modal
                 md:mx-[8rem] 
                bg-stone-50 
                
                
                `}
                ref={ref}
            >
                <div className=" h-[100%] 
                w-[100%] overflow-y-scroll px-2 pt-8  pb-8">

                    <span className="  text-2xl cursor-pointer
                    border-2   border-solid border-black  p-2 ease-linear  ml-2  md:hover:bg-stone-600" 
                    onClick={() => {
                        dispatch(closeModal())
                      

                    }}
                    >x</span>

                    <div className="mt-8     py-8 px-2 ">
                
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col md:flex-row ">

                                <input type="hidden" value="8" 
                                {...register('rentID')}/>

                                <label htmlFor="name" className="font-inter font-bold mb-1 md:mr-[4.3rem]">
                                    Property name
                                </label>

                                <input className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3 " 
                                {...register('fullName',{required:true},{ pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.name ? "true" : "false"}
                                // disabled = {isLoading}
                                /> 
                                <div className="ml-1">
                                {errors.fullName?.type === "required" && ( <p role="alert" className="font-inter text-red-600">property name is required</p> )}</div>
                            </div>
                    
                            <div className="flex flex-col md:flex-row ">

                                <label htmlFor="propertyType" className="font-inter font-bold mb-1 md:mr-[4.3rem]">
                                    Property type
                                </label>

                                <input className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3 " 
                                {...register('propertyType',{required:true},{ pattern: /^[A-Za-z]+$/i })}
                                aria-invalid={errors.propertyType ? "true" : "false"}
                                // disabled = {isLoading}
                                /> 
                                <div className="ml-1">
                                {errors.propertyType?.type === "required" && ( <p role="alert" className="font-inter text-red-600">property type is required</p> )}</div>
                            </div>

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="price" 
                                className="font-inter font-bold mb-1 md:mr-[4.5rem]"
                                >Property price </label>

                                <input type="number" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                                {...register('price',{required:true})}
                                aria-invalid={errors.price ? "true" : "false"}
                                // disabled = {isLoading}
                                />
                                {errors.price?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">price is required</p> )}
                            </div>
                            

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="beds" 
                                className="font-inter font-bold mb-1 md:mr-[3.8rem] "
                                >number of beds </label>

                                <input type="number" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3 " 
                                {...register('beds',{required:true})}
                                aria-invalid={errors.beds ? "true" : "false"} 
                                // disabled = {isLoading}
                                />
                                {errors.beds?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">number of beds is required</p> )}
                            </div>
                        
                            

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="bathrooms" 
                                className="font-inter font-bold mb-1 md:mr-[0.9rem]"
                                >number of bathrooms </label>

                                <input type="number" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                                {...register('bathrooms',{required:true})}
                                aria-invalid={errors.bathrooms ? "true" : "false"}
                                // disabled = {isLoading}
                                />
                                {errors.bathrooms?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1">number of bathrooms is required</p> )}
                            </div>
                        
                        
                            

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="area" 
                                className="font-inter font-bold mb-1 md:mr-[4.8rem]"
                                > area of house </label>

                                <input type="number" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                                {...register('area',{required:true})}
                                aria-invalid={errors.area ? "true" : "false"}
                                // disabled = {isLoading}
                                />
                                {errors.area?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1"> area is required</p> )}
                            </div>
                        
                        
                            

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="repair" 
                                className="font-inter font-bold mb-1 md:mr-[5.5rem]"
                                > repairs type </label>

                                <input type="text" className="border-2 border-solid  rounded-md md:w-[80%] md:mb-3" 
                                {...register('repair',{required:true})}
                                aria-invalid={errors.repair ? "true" : "false"}
                                // disabled = {isLoading}
                                />
                                {errors.repair?.type === "required" && ( <p role="alert" className="font-inter text-red-600 ml-1"> repair type is required</p> )}
                            </div>

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="location"
                                className="font-inter font-bold mb-1 md:mr-[7.2rem]"
                                >location</label>

                                <input type="text" className="border-2 border-solid  rounded-md md:w-[80%]"
                                {...register('location',{required:true })}
                                
                                aria-invalid={errors.location ? "true" : "false"}
                                //disabled = {isLoading}
                                />  
                                {errors.location?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">location is required</p> )}
                            </div>

                                                        

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="description"
                                className="font-inter font-bold mb-1 md:mr-[5.8rem]"
                                >description</label>

                                <textarea rows="4" cols="100" type="text" className="border-2 border-solid  rounded-md md:w-[80%]"
                                {...register('description')}
                                
                                //disabled = {isLoading}
                                />  
                            </div>


                                                        

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="picture"
                                className="font-inter font-bold mb-1 md:mr-[3.3rem]"
                                >Property picture</label>

                                <input type="file" className="border-2 border-solid  rounded-md md:w-[80%]"
                                {...register('picture',{required:true })}
                                
                                aria-invalid={errors.picture ? "true" : "false"}
                                //disabled = {isLoading}
                                />  
                                {errors.picture?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">property picture is required</p> )}
                            </div>

                            
                                                        

                            <div className="flex flex-col md:flex-row mt-3">
                                <label htmlFor="picture"
                                className="font-inter font-bold mb-1 md:mr-[3.8rem]"
                                >interior picture</label>

                                <input type="file" className="border-2 border-solid  rounded-md md:w-[80%]"
                                {...register('interiorPicture',{required:true })}
                                
                                aria-invalid={errors.interiorPicture ? "true" : "false"}
                                //disabled = {isLoading}
                                />  
                                {errors.interiorPicture?.type === "required"  && ( <p role="alert" className="font-inter text-red-600 ml-1">interior  picture is required</p> )}
                            </div>


                            <div className="flex justify-center items-center flex-col mt-3">
                                <button className="text-white font-inter rounded-lg p-2 mt-4 mb-2 font-bold bg-indigo-800 w-[10rem] md:hover:bg-indigo-900
                                md:w-[15rem]">{isLoading ? "Adding property..." :"Add a property"}</button>


                            </div>
                            
                        </form>
                    </div>
                </div>
            </div>

        </div>

                
    
        
        
    )
}

export default Modal
