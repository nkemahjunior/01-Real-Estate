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
  .eq('propertyForRentID', 8)//i am using 8 instead of the property id here because i'm tired right now to implement and get the rental features from th form and store in the rental features table in the database....so lets just use 8 boy

  if(error){
    console.error(error)
    throw new Error("rental Details could not be loaded")
}

    return data;
}