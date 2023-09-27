import { IoBedOutline } from "react-icons/io5";
import { LiaBathSolid } from "react-icons/lia";

import { MdOutlineForest } from "react-icons/md";

import Spinner from "../../ui/Spinner";



function MyRentPropertiesCard({ searchData, isLoading, id, bookmarkdata }) {
  


  if (isLoading) return <Spinner />;
  const { price, beds, bathRooms, area, name, image } = searchData;
 



  return (
    <div>
      <div className="  px-4md:px-0 rounded-lg    mt-8 md:mt-0">
        <div className=" rounded-lg pl-4 overflow-hidden bg-white shadow-md shadow-indigo-400 md:w-[100%]">
          <img
            src={image}
            alt=""
            className="h-[46%] 
                    w-[100%] "
          />

          <div className="flex justify-between items-center   pr-4">
            <div>
              <span className="font-Roboto font-bold  inline-block text-indigo-500 mt-3">
                ${price}{" "}
              </span>
              <span className="font-Roboto text-indigo-400">/month</span>
            </div>

            {/* <div onClick={handleClick} >
              {
                 isBookmark && <BsBookmarkFill style={{ fontSize: '2rem', color:'#6366f1'}} width={500}/>
              
              }
              {
                 !isBookmark && <BsBookmarkPlus style={{ fontSize: '2rem', color:'#6366f1'}} width={500}/>
              }


            </div> */}
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
    </div>
  );
}

export default MyRentPropertiesCard;


