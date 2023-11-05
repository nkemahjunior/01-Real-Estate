import { useQuery, useQueryClient } from "@tanstack/react-query";
import {  getProperties } from "../../services/apiRents";
import { useSearchParams } from "react-router-dom";
import PAGE_SIZE from "../../ui/PAGE_SIZE";


export function useRentProperties(){

 

    const queryClient = useQueryClient();
    const [searchParams] = useSearchParams();

    const page = !searchParams.get("page") ? 1 : Number(searchParams.get("page"));

    const price = searchParams.get("price")  || false

    let priceValue,sortPrice
    if(price){

      if(price === "all"){
        sortPrice = "all"
      }else{
        priceValue = price.split('-')
      sortPrice = priceValue
      }
      

    }else{
      sortPrice = false
    }
      
    // console.log(sortPrice)

    const properyName = searchParams.get("propertyName")  || ""


    const searchValue = searchParams.get("query") || "";
    
   

     
    const {isLoading:isLoading ,data:{data:rentData,count} ={}, error,} = useQuery({
        queryKey:["rent",page,price,properyName,searchValue],
        queryFn: () => getProperties({page,sortPrice,properyName,searchValue}),
    });



    //PREFETCHING
    const pageCount = Math.ceil(count / PAGE_SIZE);

  if (page < pageCount)
    queryClient.prefetchQuery({
      queryKey: ["rent",  page + 1],
      queryFn: () => getProperties({  page: page + 1 }),
    });

  if (page > 1)
    queryClient.prefetchQuery({
      queryKey: ["rent", page - 1],
      queryFn: () => getProperties({  page: page - 1 }),
    });

  
    return {isLoading, rentData,count};
}