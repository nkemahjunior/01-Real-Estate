import supabase from "./supabase";
import PAGE_SIZE from "../ui/PAGE_SIZE";



export async function getProperties({page,sortPrice,properyName,searchValue}){


  let query = supabase
  .from('PropertiesForRent')
  .select('*' , { count: "exact", });
  
  //PAGINATION
  if (page) {
   const from = (page - 1) * PAGE_SIZE;
   const to = from + PAGE_SIZE - 1;

   query.range(from,to)
   
  }

  if(sortPrice  ) {
    
    const[lowPrice,highPrice] = sortPrice
    const toNumber1 = Number(lowPrice)
    const toNumber2 = Number(highPrice)

    
     query.gte('price',toNumber1)
     query.lte('price', toNumber2 )
     query.order('price',{ascending: true})
  }

  if(properyName){
    
    if (properyName === 'allproperties') {
      return query;
    }

    query.eq('propertyType', properyName)
  }



  if(searchValue){
    console.log(searchValue)
    query.eq('name', searchValue)
  } 
  
  const { data, error,count } = await query;
    

if(error){
    console.error(error)
    throw new Error("properties could not be loaded")
}

return {data,count};

}




