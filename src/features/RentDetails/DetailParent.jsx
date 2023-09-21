import DetailsAbout from "./DetailsAbout"
import DetailsHead from "./DetailsHead"
import DetailsPhotos from "./DetailsPhotos"
import PropertyOwner from "./PropertyOwner"
import RentalFeatures from "./RentalFeatures"
import { useRentDetails } from "./useRentDetails"
import Spinner from "../../ui/Spinner"
import ErrorRent from "../../ui/ErrorRent"

function DetailParent() {
    const {isLoading,data,error} = useRentDetails();

    if(isLoading) return <Spinner/>
    if(error) return <ErrorRent/>
    
    const {area,bathRooms,beds,image,interiorImage,location,name,price} = data[0];

   
      

    return (
       <>
            <div className="px-4 sm:px-6 lg:px-8 xl:px-10 2xl:px-16">
                <DetailsHead name = {name} location = {location} />

                <div>
                <DetailsPhotos area={area} bathRooms = {bathRooms} beds = {beds} image = {image} interiorImage = {interiorImage}  />
                </div>

                <div className="mt-4">
                    <DetailsAbout/>
                </div>

                <div className="mb-6">
                    <PropertyOwner/>
                </div>

                <div className="mb-6">
                    <RentalFeatures area={area} price = {price}/>
                </div>
            </div>


       </>
    )
}

export default DetailParent
