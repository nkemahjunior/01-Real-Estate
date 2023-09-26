import supabase from "./supabase";

export async function getMproperties(){

    const {
        data: { user },
      } = await supabase.auth.getUser()
    const  currentUserId = user.id
    
    const { data, error } = await supabase
    .from('PropertiesForRent')
    .select('*')
    .eq('ownerID',currentUserId)

    if(error) throw new Error("could not get your properties")

    return {data,error}

}

export async function getMyBookmarks(){
    
    const {
        data: { user },
      } = await supabase.auth.getUser()
    const  currentUserId = user.id
    
    const { data, error } = await supabase
    .from('userBookmarks')
    .select('*')

    if(error) throw new Error("could not get your bookmarked properties")
  

    return {data,error}
}