import { useGetMyProperties } from "./useGetMyProperties"
import Spinner from "../../ui/Spinner"
import ErrorProperties from "./ErrorProperties"
import { Link } from "react-router-dom";
import MyRentPropertiesCard from "./MyRentPropertiesCards"


function MyRentProperties() {

    const {isLoading,data} = useGetMyProperties()
    if(isLoading) return <Spinner/>
    if(data===null || data.data.length < 1) return <ErrorProperties/>
    const {data:myPropertiesData} = data


    return (
        <>
            <div className="md:grid md:grid-cols-3 md:gap-8 2xl:grid-cols-4 md:px-5 2xl:p-6 ">
                
                {
                    myPropertiesData.map((el) => (
                       
                        <Link to ={`/home/rent/details/${el.id} `}  key={el.id} >
                            <MyRentPropertiesCard key={el.id} searchData ={el} isLoading={isLoading} id = {el.id} bookmarkdata = {myPropertiesData} />
                        </Link>
                    ))
                
                }
            </div>


        </>
    )
}

export default MyRentProperties
