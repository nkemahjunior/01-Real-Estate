import { IoBedOutline } from "react-icons/io5"
import { LiaBathSolid } from "react-icons/lia"
import { MdOutlineForest } from "react-icons/md"
import Spinner from "../../ui/Spinner"

function DetailsPhotos({area, bathRooms, beds, image,interiorImage,isLoading}) {
   
    return (
        <div>
 
            <div className="" >
                <div className="flex  mt-4 flex-col md:flex-row md:gap-5 md:grid md:grid-cols-2">
                    <div className={`rounded-lg overflow-hidden mb-2 md:mb-0 h-[32dvh] phones:w-[90vw]  md:h-[70dvh] bg-stone-200 ${isLoading && 'animate-pulse'}`}>

                        <img src={image} alt="" className="h-[100%] w-[100%] rounded-lg"/>

                    </div>  

                    <div className={`rounded-lg overflow-hidden mb-2 md:mb-0 h-[32dvh] phones:w-[90vw] md:h-[70dvh] bg-stone-200 ${isLoading && 'animate-pulse'}`}>

                     <img src={interiorImage} alt="" className="h-[100%] w-[100%] rounded-lg"/>

                    </div>

                </div>

                <div className="flex flex-wrap space-x-6 mt-4  md:space-x-0 md:justify-evenly md:mt-3 border-solid border-2 border-indigo-100 px-6   md:p-4 rounded-lg">
                    <div>
                        <div>Bed</div>
                        <div className="flex  items-baseline"> <IoBedOutline/> <span className="ml-1 font-bold">{beds}</span></div>
                    </div>

                    <div>
                        <div>Bath</div>
                        <div className="flex  items-baseline"><LiaBathSolid/> <span className="ml-1 font-bold">{bathRooms}</span></div>
                    </div>

                    <div>
                        <div>sqft</div>
                        <div className="flex  items-baseline "><MdOutlineForest/> <span className="ml-1 font-bold">{area} m²</span></div>
                        
                    </div>

                    <div className="mt-1">
                        <span>Repair Quality</span>
                        <div className="flex  items-baseline font-bold"><MdOutlineForest/> Modern Loft</div>
                </div>

  
                </div>



                

            </div>
        </div>
    )
}

export default DetailsPhotos
