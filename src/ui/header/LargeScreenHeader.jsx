


import { TbBuildingSkyscraper } from 'react-icons/tb';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useLogout } from '../../features/Authtentication/useLogout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../modalSlice';
import { useDetectClickOutsideTarget } from '../../hooks/detectClickOutsideTarget';
import { Link } from 'react-router-dom';

function LargeScreenHeader() {

    const [show, setShow] = useState(false)
    const {logout, isLoading} = useLogout();

    
    function handleShow(){
        setShow((c) => !c)
    }
    

    const dispatch = useDispatch();

    

    return (
    <nav className="flex justify-between   h-10 items-center py-8 px-2 bg-stone-50 border-2 border-solid  sticky top-0 z-50">

        <div className="flex  space-x-2 ">
            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg text-indigo-950 font-bold flex justify-center items-center">  <Link to ="/home"><TbBuildingSkyscraper color='#1e1b4b'/> </Link>
            <Link to ="/home"> Zeco estate</Link></div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer"> <Link to='/home/rent'>rent</Link></div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer"><Link to='/home/rent'>buy</Link></div>



            <div className='relative' onClick={handleShow} >
                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg flex items-center cursor-pointer">manage property <RiArrowDropDownLine/></div>

                <div className={`border-solid border-2  absolute 
                ${show === true? "" :"hidden"} flex flex-col justify-center px-4 bg-stone-50 `}> 
                    <div className="capitalize hover:text-indigo-400  font-Rubik  hover:rounded-lg cursor-pointer">
                        <Link to="/myProperties">my properties</Link></div>

                    <div className="capitalize hover:text-indigo-400  font-Rubik  hover:rounded-lg cursor-pointer">
                        <Link to="/bookmarks">bookmarks</Link></div>
                </div>
            </div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer"><Link to = "/messages">messages</Link></div>

        </div>

        <div className="flex space-x-12 ">
            <div className=" bg-indigo-500 hover:bg-indigo-600 p-[.2rem] font-Rubik  rounded-md text-white cursor-pointer "
            onClick={() => {
                dispatch(openModal())
            }}
            >+ Add a property</div>




            <div onClick={logout} className="capitalize  border-2 border-indigo-200 border-solid hover:border-indigo-400 rounded-md text-indigo-600  p-[.2rem]  font-Rubik cursor-pointer"> LOGOUT</div>

        </div>
    </nav>
)

    
}

export default LargeScreenHeader
