import supabase from "./supabase";

export  async function test(){
    
let { data: PropertiesForRent, error,count } = await supabase
.from('PropertiesForRent')
.select('*',{count:"exact"})

console.log(count)
console.log(PropertiesForRent)
}