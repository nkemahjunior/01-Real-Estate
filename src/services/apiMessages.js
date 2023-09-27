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

export async function getMessages(){
  const {
    data: { user },
  } = await supabase.auth.getUser()
  let metadata = user.user_metadata
  let senderid = user.id

  
const  { data, error } = await supabase
.from('messages')
.select('*')
.eq('receiverID',senderid)

if(error) throw new Error("could not get messages " + error.message)

return{data,error}

}

export async function getAllMessagesWithAPerson(personID){
  const {
    data: { user },
  } = await supabase.auth.getUser()
  let currentUserid = user.id

  
const  { data, error } = await supabase
.from('messages')
.select('*')
.eq('receiverID',currentUserid)
.eq('senderID',personID)


if(error) throw new Error("could not get  all messages " + error.message)

return{data,error}

}

export async function replyAMessage(receiverID,message){

  const {
    data: { user },
  } = await supabase.auth.getUser()
  let metadata = user.user_metadata
  let senderid = user.id
  
  const { data, error } = await supabase
  .from('messages')
  .insert([
  { senderID: senderid, message: message.message,receiverID:receiverID,senderName:metadata.fullName },
  ])
  .select()

  if(error) throw new Error("could not send  your message " + error.message)

  return {data,error}
}

export async function displayYourReplyToAMessage(receiverID){
  
  const {
    data: { user },
  } = await supabase.auth.getUser()
  let senderid = user.id

  let { data, error } = await supabase
  .from('messages')
  .select('*')
  .eq('senderID',senderid)
  .eq('receiverID',receiverID)

  if(error) throw new Error("could not get  your reply " + error.message)

  return {data,error}
}