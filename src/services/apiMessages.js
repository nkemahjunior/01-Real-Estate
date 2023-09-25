import supabase from "./supabase";

export async function getOwnerOfProperty(id){
    const { data, error } = await supabase
  .from('PropertiesForRent')
  .select("id , ownerID")
  .eq('id', id)
  const ownerID = data[0]?.ownerID

  


  const { data:ownerData, error:ownerError } = await supabase
  .from('owner')
  .select("ownerID, ownerName")
  .eq('ownerID', ownerID)





  if(error) throw new Error("could not read property id " + error.message)
  if(ownerError) throw new Error("could not read owner name  " + ownerError.message)


  return ownerData;
}


export async function sendMessage(propertyID,message){
    console.log(propertyID,message)

    const {
        data: { user },
      } = await supabase.auth.getUser()
      let metadata = user.user_metadata
      let senderid = user.id


      const { data:receiverData, error:receiverError } = await supabase
      .from('PropertiesForRent')
      .select("id , ownerID")
      .eq('id', propertyID)
      
      const receiverID = receiverData[0]?.ownerID

    
    
    const { data:messageData, error } = await supabase
    .from('messages')
    .insert([
    { senderID: senderid, message: message.message,receiverID:receiverID,senderName:metadata.fullName },
    ])
    .select()

    if(error) throw new Error("could not send message " + error.message)
    if(receiverError ) throw new Error("could not find the receiver " + error.message)

    
}