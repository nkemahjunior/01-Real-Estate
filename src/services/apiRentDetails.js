import supabase from "./supabase";

export async function propertyDetails(propertyID){
  const  { data, error } = await supabase
    .from('PropertiesForRent')
    .select('*')
    .eq('id', propertyID)

    if(error){
        console.error(error)
        throw new Error("properties Details could not be loaded")
    }

    return data;
}

export async function rentalDetails(propertyID){
   const { data, error } = await supabase
  .from('RentalFeatures')
  .select('*')
  .eq('propertyForRentID', propertyID)

  if(error){
    console.error(error)
    throw new Error("rental Details could not be loaded")
}

    return data;
}