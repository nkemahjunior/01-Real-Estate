import Pagination from "../../ui/Pagination"
import Spinner from "../../ui/Spinner";
import ErrorRent from "../../ui/ErrorRent"

import SearchCard from "./SearchCard";
import { useRentProperties } from "./useRentProperties";
import { Link } from "react-router-dom";
import { useCheckBookmarks } from "./useCheckBookmarks";
import { useEffect } from "react";
import { supabase } from "@supabase/auth-ui-shared";



function SearchResults() {

    //  supabase
    //     .channel('realtime')
    //     .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'PropertiesForRent' }, ()=>{console.log("hello")})
    //     .subscribe()
    
       

   
    
    const { isLoading, rentData,count,error } = useRentProperties();
    const {data,isLoading:isChecking} = useCheckBookmarks();

    if(isChecking) return <Spinner/>  
    if(isLoading) return <Spinner/>
    if(error) return <ErrorRent/>

    // console.log("COMPONENT")
    // console.log(count)
  
    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-8 1380:grid  xlplus:grid-cols-4 md:px-5 2xl:p-6  ">
                
                {
                    rentData.map((el) => (
                       
                        <Link to ={`/home/rent/details/${el.id} `}  key={el.id} >
                            <SearchCard key={el.id} searchData ={el} isLoading={isLoading} id = {el.id} bookmarkdata = {data} />
                        </Link>
                    ))
                
                }
            </div>

            <div  className="mt-4">
                <Pagination count={count}/>
            </div>
        </>
    )
}

export default SearchResults 

