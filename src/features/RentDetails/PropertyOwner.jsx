import { CameraOutdoor, CameraTwoTone, Cameraswitch, FlipCameraAndroid, VideoCameraBack } from "@mui/icons-material"
import { IoCamera, IoCameraOutline } from "react-icons/io5"


function PropertyOwner() {
    return (<>
        <div className="border-solid border-2 border-indigo-100 px-4 mt-4 rounded-lg md:border-0 md:px-0">
            <h3 className="md:hidden font-inter font-light mt-2">Listed by property owner</h3>

            <div  className="md:grid md:grid-cols-2 md:gap-6">
                <div className="md:border-solid md:border-2 md:border-indigo-100 md:rounded-lg md: px-4 "
                >
                    <h3 className="767:hidden font-inter font-light mt-2">Listed by property owner</h3>
                    <div className="flex mt-2">

                        <div><img src="../../public/avatar1.jpg" alt="avatar" className="h-[4rem] w-[4rem] rounded-full"/></div>
                        <div className="flex items-center justify-center font-bold">owner name</div>
                    </div>

                    <div>
                        <div className="mt-2 mb-2 border-solid border-2 border-indigo-100 bg-indigo-200 text-indigo-600 md:hover:text-indigo-800 hover:bg-indigo-400 rounded-md p-4 text-center font-bold ">Ask a question about this home</div>

                    </div>
                </div>


                <div>
                    <div className="border-solid border-2 border-indigo-100 p-8 mt-4 rounded-lg  767:hidden">
                        <div>
                            <h2 className="font-bold mb-2">Request a home tour</h2>

                            <div className="flex items-center justify-center space-x-1 text-white bg-indigo-800 hover:bg-indigo-950
                            text-center p-2 rounded-lg mb-2 ">
                                <div><IoCameraOutline color="white"/></div>
                                <div > Request a tour</div>
                             </div>
                    
                        </div>
                    </div>
                </div>



            </div>
        </div>

        <div className="border-solid border-2 border-indigo-100 px-4 mt-4 rounded-lg md:hidden">
            <div>
                <h2 className="font-bold mb-2">Request a home tour</h2>

                <div className="flex items-center justify-center space-x-1 text-white bg-indigo-800 hover:bg-indigo-950
                text-center p-2 rounded-lg mb-2 ">
                    <div><IoCameraOutline color="white"/></div>
                    <div > Request a tour</div>
                </div>
                    
            </div>
        </div>
    </> )
}

export default PropertyOwner
