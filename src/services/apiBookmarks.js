import supabase from "./supabase";

export async function addBookmark(propertyID){

    const {
        data: { user },
      } = await supabase.auth.getUser()
    let senderid = user.id

    //checking if the property is already bookmarked

    let { data:checkBookmarks, error:checkError } = await supabase
    .from('userBookmarks')
    .select('*')
    .eq('propertyID', propertyID)
    .eq('userID', senderid)

    const alreadyBookmarked = true;
    const notBookmarked = false;

    if(checkBookmarks.length > 0) return alreadyBookmarked

    //if there is no bookmark add new bookmark
    const { data, error } = await supabase
  .from('userBookmarks')
  .insert([
    { propertyID: propertyID, userID: senderid },
  ])
  .select()

  if(error){
    throw new Error("properties could not be added to bookmark " + error.message)
    }

    return notBookmarked;

}

export async function getBookmarks(){

    const {
        data: { user },
      } = await supabase.auth.getUser()
    let senderid = user.id

    let { data:checkBookmarks, error:checkError } = await supabase
    .from('userBookmarks')
    .select('*')
    .eq('userID', senderid)

    if(checkError){
        throw new Error("bookmarked properties could not be selected  " + checkError.message)
    }

        

    if(checkBookmarks.length > 0) return  checkBookmarks
    else return []
}

export async function deleteBookmarks(propertyID){
  

  const {
    data: { user },
  } = await supabase.auth.getUser()
  let currentUserId = user.id
  
  const { data,error } = await supabase
  .from('userBookmarks')
  .delete()
  .eq('userID', currentUserId)
  .eq('propertyID', propertyID)

  if(error){
    throw new Error("bookmarked properties could not be deleted  " + error.message)
}

  
}

