import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";
import { MdOutlineForest } from "react-icons/md";
import Spinner from "../../Spinner";

import {useRentProperties} from "../../../features/Rent/useRentProperties";

function CardLarge({LargeScreenData,isLoading }) {

    if(isLoading) return <Spinner/> 

    const {price,beds,bathRooms,area,name,image} = LargeScreenData;

   

 

  return (
    <>
      <div className=" px-4  md:px-0 rounded-lg    mt-8 md:mt-0  lg:w-[20rem] md:h-[22rem] lg:h-[25rem]">
        <div className="space-y-2 rounded-lg overflow-hidden bg-white shadow-md shadow-indigo-400 md:w-[100%]  h-full">
          <div className={` h-[48%] 
                      w-[100%] bg-stone-200 ${isLoading && 'animate-pulse'}`}>
          <img
               src={image}
              alt=""
              className="h-full
                      w-full"
            />
          </div>

          <div className=" ">
            <span className="font-Roboto font-bold  inline-block text-indigo-500 mt-3">
              ${price}{" "}
            </span>
            <span className="font-Roboto text-indigo-400">/month</span>
          </div>

          <div className=" inline-block mt-2 font-bold font-Inter">{name}</div>

          <div className="  font-Roboto text-indigo-400 mt-2 mb-2">
            28121 northSide
          </div>

          <div className="w-[90%] bg-indigo-400 h-[0.2px] mb-2"></div>

          <div className="flex space-x-4 mb-4">
            <div className="flex justify-center items-center space-x-2">
              <span>
                <IoBedOutline color="#818cf8" />
              </span>
              <span className="text-indigo-400">{beds}</span>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <span>
                <LiaBathSolid color="#818cf8" />
              </span>
              <span className="text-indigo-400">{bathRooms}</span>
            </div>

            <div className="flex justify-center items-center space-x-2">
              <span>
                <MdOutlineForest color="#818cf8" />
              </span>
              <span className="text-indigo-400">{area}m²</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardLarge;
