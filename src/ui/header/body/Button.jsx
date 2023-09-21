import { Link } from "react-router-dom"

function Button() {
    return (

        <Link to="/home/rent" >
            <span className="bg-indigo-500 hover:bg-indigo-600 mt-4 inline-block rounded-md text-white p-2">View more properties</span>
        </Link>
        
    )
}

export default Button
