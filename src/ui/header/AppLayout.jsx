import { Outlet } from "react-router-dom"
import CombinedHeader from "./CombinedHeader"
import Footer from "./Footer"


function AppLayout() {

    return (

        <>
            <CombinedHeader/>
            <Outlet/>
            
           
            <Footer/>
            

        </>
    )
}

export default AppLayout
