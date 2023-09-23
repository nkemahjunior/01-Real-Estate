import { useEffect, useRef } from "react"
import { useDispatch } from "react-redux";

export function useDetectClickOutsideTarget(handler,listenCapturing = true){

    const dispatch = useDispatch();

    const ref = useRef(null)

    useEffect(function(){

        function handleClick(e){
            if(ref.current && !ref.current.contains(e.target)){
            dispatch(handler())

            }
        }

        document.addEventListener('click',handleClick,listenCapturing) //using true because we want event to happen only in the capturing phase and not bubbling phase
        return () => document.removeEventListener("click",handleClick,true)

   

     },[dispatch,handler,listenCapturing]
    );

    return ref;
}