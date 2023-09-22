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

      console.log(id,metadata.fullName)


      const { data, error } = await supabase
      .from('owner')
      .insert([
        { ownerID: id, ownerName: metadata.fullName },
      ])
      .select()
    

     return data;

      
      
}