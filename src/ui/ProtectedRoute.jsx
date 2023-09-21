
import { useNavigate } from "react-router-dom"
import { useUser } from "../features/Authtentication/useUser";
import { useEffect } from "react";
import Spinner from "./Spinner";

function ProtectedRoute({children}) {

    const navigate = useNavigate();

    
    1//Load the authenticated user
    const { isLoading, isAuthenticated } = useUser();

    //2if there is no authenticated user, redirect to /login
    useEffect(function(){
        if(!isAuthenticated && !isLoading) navigate("/signUp/login")
        },[isAuthenticated,isLoading, navigate]
   );

    //3. while loading show a spinner
    if(isLoading) return <Spinner/>


    //4. if there is a user, render the app
    if (isAuthenticated) return children;


   
}

export default ProtectedRoute
