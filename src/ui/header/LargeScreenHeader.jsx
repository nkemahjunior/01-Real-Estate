


import { TbBuildingSkyscraper } from 'react-icons/tb';
import { useLogout } from '../../features/Authtentication/useLogout';

function LargeScreenHeader() {
    const {logout, isLoading} = useLogout();

    

      return (
        <nav className="flex justify-between   h-10 items-center py-8 px-2 bg-white border-2 border-solid  sticky top-0">

            <div className="flex  space-x-2 ">
                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg text-indigo-950 font-bold flex justify-center items-center"><TbBuildingSkyscraper color='#1e1b4b'/> Zeco estate</div>

                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg">rent</div>

                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg">buy</div>

                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg">sell</div>

                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg">manage property</div>

                <div className="capitalize hover:text-indigo-400 p-[.2rem] hover:bg-indigo-100 font-Rubik  hover:rounded-lg">resources</div>

            </div>

            <div className="flex space-x-4 ">
                <div className="capitalize border-2 border-indigo-50 border-solid hover:border-indigo-200 rounded-md text-indigo-600  p-[.2rem]  font-Rubik  ">login</div>

                <div className="capitalize bg-indigo-600 hover:bg-indigo-800 p-[.2rem] font-Rubik  rounded-md text-white ">sign up</div>


                <div onClick={logout} className="capitalize bg-indigo-600 hover:bg-indigo-950 p-[.2rem] font-Rubik  rounded-md text-white ">TEST LOGOUT</div>

            </div>
        </nav>
    )

    
}

export default LargeScreenHeader
