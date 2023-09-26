import { Bookmark } from "@mui/icons-material";
import Spinner from "../../ui/Spinner";

function DetailsHead({name,location,isLoading}) {
   
    return (
        <div className="space-y-2">
            <div className="text-roboto font-bold text-indigo-500">&lt;Back</div>

            <div className="font-bold font-Inter text-2xl capitalize md:text-4xl  ">{name}</div>
            <div className="font-inter">{location}</div>

            {/* <div className="border-solid border-2 border-indigo-100 bg-indigo-50 p-2 hover:bg-indigo-200  rounded-lg items-center"><Bookmark/> &nbsp;Bookmark This Property </div> */}
        </div>
    )
}

export default DetailsHead
