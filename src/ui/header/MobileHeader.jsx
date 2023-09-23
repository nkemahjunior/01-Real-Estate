import { useState } from "react"
import { TbBuildingSkyscraper } from "react-icons/tb"
import { openModal } from "../modalSlice"
import { useDispatch } from "react-redux"


function MobileHeader() {
    const [show,setShow] = useState(false)

    const dispatch = useDispatch()
    
    function handleShow(){
        console.log(show)
        setShow((show) => !show)
    }

    

    return (
        <div className="sticky top-0 " >

        <div className="flex justify-between   h-10 items-center py-8 px-2 bg-stone-50 border-2 border-solid  sticky top-0 ">

            <div className="font-rubik text-indigo-950 font-bold text-2xl flex justify-center items-center ">
            <TbBuildingSkyscraper color='#1e1b4b'/>
            Zeco estate 
            </div>
            <div className=" w-10 space-y-1 mt-1.5  " onClick={handleShow}>
                <div className="bg-black h-1.5 "></div>
                <div className="bg-black h-1.5"></div>
                <div className="bg-black h-1.5"></div> 
            </div>
        </div>
        
        <nav className={`rigth-0  h-[92dvh] w-[80%]  left-[5rem] bg-white
        mt-[-8rem] pt-[4rem] ${ show ===false ? 'hidden' : ""} 
        400:left-[7rem] 580:left-[9rem]  overflow-y-scroll z-20 fixed `} >

            <div onClick={handleShow} className= "text-4xl absolute p-1 z-[10] " >
                x
            </div>

            <div className=" h-[92dvh] w-[100%]  top-0 space-y-8 ps-[2rem] pt-[8rem] 600:pr-[2rem]">

                <div className=" capitalize font-Rubik text-2xl 600:text-end  cursor-pointer "
                onClick={() => {
                    dispatch(openModal())
                }}
                >+ Add a property</div>

                <div className="capitalize font-Rubik text-2xl 600:text-end  " >rent</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">buy</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">sell</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">manage property</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">resources</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">login</div>
                <div className="capitalize font-Rubik text-2xl 600:text-end">sign up</div>
            </div>
        </nav>
        </div>
    )
}

export default MobileHeader
