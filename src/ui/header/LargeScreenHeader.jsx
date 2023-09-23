


import { TbBuildingSkyscraper } from 'react-icons/tb';
import { useLogout } from '../../features/Authtentication/useLogout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openModal } from '../modalSlice';

function LargeScreenHeader() {
    const {logout, isLoading} = useLogout();
    

    const dispatch = useDispatch();

    

    return (
    <nav className="flex justify-between   h-10 items-center py-8 px-2 bg-stone-50 border-2 border-solid  sticky top-0">

        <div className="flex  space-x-2 ">
            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg text-indigo-950 font-bold flex justify-center items-center"><TbBuildingSkyscraper color='#1e1b4b'/> Zeco estate</div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer">rent</div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer">buy</div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer">sell</div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer">manage property</div>

            <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg cursor-pointer">resources</div>

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
