import { useState } from "react"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { openModal } from "../modalSlice"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { useLogout } from "../../features/Authtentication/useLogout"


function MobileHeader() {
    const [show,setShow] = useState(false)
    const {logout, isLoading} = useLogout();

    const dispatch = useDispatch()
    
    function handleShow(){
    
        setShow((show) => !show)
    }

    

    return (
        <div className="sticky top-0 " >

        <div className="flex justify-between   h-10 items-center py-8 px-2 bg-stone-50 border-2 border-solid  sticky top-0 ">

            <div className="font-rubik text-indigo-950 font-bold text-2xl flex justify-center items-center ">
            <Link to ="/home"><TbBuildingSkyscraper color='#1e1b4b'/> </Link>
            <Link to ="/home"> Zeco estate</Link>
            </div>
            <div className=" w-10 space-y-1 mt-1.5  " onClick={handleShow}>
                <div className="bg-black h-1.5 "></div>
                <div className="bg-black h-1.5"></div>
                <div className="bg-black h-1.5"></div> 
            </div>
        </div>
        
        <nav className={`rigth-0  h-[92dvh] w-[80%]  left-[5rem] bg-stone-50
        mt-[-8rem] pt-[4rem] ${ show ===false ? ' translate-x-[500%] transition-all duration-[0.6s]' : "translate-x-[0%] transition-all duration-[0.6s]"} 
        400:left-[7rem] 580:left-[9rem]  overflow-y-scroll z-20 fixed `} >

            <div onClick={handleShow} className= "text-4xl absolute p-1 z-[10] " >
                x
            </div>

            <div className=" h-[92dvh] w-[100%]  top-0 space-y-8 ps-[2rem] pt-[5rem] 600:pr-[2rem]">

            <div className="capitalize font-Rubik text-2xl 600:text-end  " ><Link to = "/messages">messages</Link></div>

                <div className=" capitalize font-Rubik text-2xl 600:text-end  cursor-pointer "
                onClick={() => {
                    dispatch(openModal())
                }}
                >+ Add a property</div>

                <div className="capitalize font-Rubik text-2xl 600:text-end  " ><Link to="/myProperties">my properties</Link></div>
                <div className="capitalize font-Rubik text-2xl 600:text-end  " ><Link to="/bookmarks">bookmarks</Link></div>
                <div className="capitalize font-Rubik text-2xl 600:text-end  " ><Link to='/home/rent'>rent</Link></div>
                <div className="capitalize font-Rubik text-2xl 600:text-end"><Link to='/home/rent'>buy</Link></div>
    

                <div className="capitalize font-Rubik text-2xl 600:text-end">resources</div>
                <div onClick={logout} className="capitalize font-Rubik text-2xl 600:text-end">logout</div>

            </div>
        </nav>
        </div>
    )
}

export default MobileHeader
