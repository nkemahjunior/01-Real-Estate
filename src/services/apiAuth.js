import supabaseUrl from "../constants/supabaseURL";
import supabase from "./supabase";

export async function signUp({ fullName, email, password,avatar }){
    const  { data, error } = await supabase.auth.signUp({
      email,
      password,
      options:{
        data:{
            fullName,
            avatar:""
        },
      },
    })
    
    if (error) throw new Error(error.message);

    return data;
}


export async function login({email,password}){

   const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });
   

    if (error) throw new Error(error.message);

    return data;
}

export async function getCurrentUser(){
    //checks if the user is still login when the page is reloaded,it gets the session data from the local storage
    const {data: session} = await supabase.auth.getSession();
    if(!session.session) return null;

    //getting the user from supabase server instead from the local storage because it is more secured
    const{data, error} = await supabase.auth.getUser();
    
    return data?.user;
     
}

export async function logout(){
    
    const { error } = await supabase.auth.signOut();
    if(error) throw new Error("log out failed" + error.message);

}

export async function createOwnerTable(){
    const {
        data: { user },
      } = await supabase.auth.getUser()
      let metadata = user.user_metadata
      let id = user.id

      


      const { data, error } = await supabase
      .from('owner')
      .insert([
        { ownerID: id, ownerName: metadata.fullName },
      ])
      .select()
    

     return data;

      
      
}


export async function postPropertiesForRent(data){

  console.log(data.picture[0].name)


  
  const interiorImageName = `${Math.random()}-${data.interiorPicture[0].name}`.replaceAll("/","")
  const exteriorImageName = `${Math.random()}-${data.picture[0].name}`.replaceAll("/","")
  
  
  
  const exteriorUrl = `${supabaseUrl}/storage/v1/object/public/exterior/${exteriorImageName}`
  const interiorUrl = `${supabaseUrl}/storage/v1/object/public/interio/${interiorImageName}`
  


const {  error:storageError } = await supabase.storage.from('interio').upload(interiorImageName, data.interiorPicture[0])




const {  error:storageErrorExterior } = await supabase.storage.from('exterior').upload(exteriorImageName, data.picture[0])





  const {
    data: { user },
  } = await supabase.auth.getUser()
  // let metadata = user.user_metadata
  let id = user.id
  
  const {  error } = await supabase
  .from('PropertiesForRent')
  .insert([
    { price: data.price, name: data.fullName,location:data.location,propertyType:data.propertyType,beds:data.beds,bathRooms:data.bathrooms,area:data.area,image:exteriorUrl,description:data.description,interiorImage:interiorUrl,ownerID:id,rental_ID:data.rentID},
  ])
  .select()

  if(error) throw new Error("could not post the properties " + error.message);

  if (storageError) {
    throw new Error("could not post interior picture " + storageError.message);
  }
  
    if (storageErrorExterior) {
      throw new Error("could not post exterior picture " + storageErrorExterior.message);
    }

}