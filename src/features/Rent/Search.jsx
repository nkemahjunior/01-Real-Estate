
import { useState } from "react";
import { useSearchParams } from "react-router-dom"

function Search() {

    const [searchParams,setSearchParams] = useSearchParams()

    const [search,setSearch] = useState("");


    function handlePriceChange(e){

       searchParams.set("price", e.target.value)
       setSearchParams(searchParams)
    }

   
    function handlePropertyTypeChange(e){
        searchParams.set("propertyName", e.target.value)
       setSearchParams(searchParams)
    }

    function handleSearch(e){
        if(search.length === 0 ) return;
        
        searchParams.set("query", e.target.value)
       setSearchParams(searchParams)

        
    }

    
return (
    <>
    {
    <>
   
        <div  className="md:flex md:justify-between md:items-baseline">
            <h1 className="font-inter text-xl md:text-2xl font-bold text-center mt-8 mb-4 md:text-start ">Search properties to rent</h1>

            <div className=" flex items-baseline">
                <div className="flex items-center justify-center mb-4 md:block">

                    <input type="text" placeholder="search properties..." className="border-solid border-2 rounded-lg placeholder:font-Inter " onChange={handleSearch} />
                    
                </div>

                <div className="bg-indigo-600 p-[0.2rem] rounded-lg ml-1" onClick={handleSearch}>
                        Search
                </div>
            </div>

        </div>

        <div className="flex justify-between md:justify-evenly border-transparent border-2 bg-white rounded-md p-4 ">

            <div className="flex justify-center items-center flex-col md:flex-row  ">

                <div className="inline-block  font-Inter md:mr-1">Price</div>

                <div className="inline-block" >

                    <select  className="font-inter outline-none " onChange={ handlePriceChange }>
                        <option value="500-1500">all prices</option>
                        <option value="500-700">$500 - $700</option>
                        <option value="700-1000">$700 - $1000</option>
                        <option value="1000-1500">$1000 - $1500 </option>
                    </select>

                </div>

            </div>

            <div className="flex justify-center items-center flex-col md:flex-row ">
               
                <div className="inline-block font-Inter md:mr-1">Property type</div>
                

                <div className="inline-block">

                    <select name="houseType" id="houseType" className="font-inter outline-none " onChange={handlePropertyTypeChange}>

                        <option value="allproperties"  >all properties</option>
                        <option value="mansion"  >Mansion</option>

                        <option value="duplex">Duplex</option>

                        <option value="bungalow" >Bungalow</option>

                    </select>

                </div>

            </div>

            
        </div>
    </>}
    </>
)

}

export default Search





