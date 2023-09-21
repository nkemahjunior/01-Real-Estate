import { TbBuildingSkyscraper } from "react-icons/tb"
import { useRentalDetails } from "./useRentalDetails"
import Spinner from "../../ui/Spinner";
import ErrorRent from "../../ui/ErrorRent";

function RentalFeatures({area,price}) {

    const {isLoading,data,error} = useRentalDetails();

    if(isLoading) return <Spinner/>
    if(error) return <ErrorRent/>

    const {city,cooling,heating,laundry,parkingArea,yearBuilt,created_at} = data[0]

    const listedDate = created_at.split("T")

    

    return (
        <>
            <h1 className="font-inter font-bold ">Rental features</h1>
        <div className="md:grid grid-cols-2  md:gap-[15rem] lg:gap-[16rem] xl:gap-[18] 2xl:gap-[20rem]">

            <div>
                <div className="flex items-center justify-between ">
                    
                    <div className="font-rubik text-indigo-950 font-bold text-xs flex ">
                    <div className="font-inter  font-black ">Listed on &nbsp;</div>
                    <TbBuildingSkyscraper color='#1e1b4b'/>
                    Zeco estate 
                    </div>

                    <div className="font-inter font-bold">{listedDate[0]}</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Date available</div>
                    <div className="font-inter font-bold">Available now</div>
                </div>
                
                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Type</div>
                    <div className="font-inter font-bold">Home</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Laundry</div>
                    <div className="font-inter font-bold">{laundry}</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Cooling</div>
                    <div className="font-inter font-bold">{cooling}</div>
                </div>

            </div> 

            
            <div>


                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Heating</div>
                    <div className="font-inter font-bold">{heating}</div>
                </div>
                
                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">City</div>
                    <div className="font-inter font-bold">{city}</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Size</div>
                    <div className="font-inter font-bold">{area} sqft</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Parking Area</div>
                    <div className="font-inter font-bold">{parkingArea ? "Yes" : "No"}</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Year Built</div>
                    <div className="font-inter font-bold">{yearBuilt}</div>
                </div>

                <div className="flex items-center justify-between ">
                    <div className="font-inter font-light">Deposits & Fees</div>
                    <div className="font-inter font-bold">${price}</div>
                </div>

            </div> 

            
        </div>
        </>
    )
}

export default RentalFeatures
