import { FaSpinner } from "react-icons/fa6"

function Spinner() {
    return (
        <div className="bg-white h-screen w-full  flex items-center justify-center ">
            <div className=" animate-spin">
                <FaSpinner style={{height:"2rem",width:"2rem",color:"black"}}/>
            </div>
        </div>
    )
}

export default Spinner
