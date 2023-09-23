import { Outlet } from "react-router-dom"
import CombinedHeader from "./CombinedHeader"
import Footer from "./Footer"
import Modal from "../Modal"



function AppLayout() {
    

    return (

        <>
            <Modal/>
            <CombinedHeader/>
            <Outlet/>
            
           
            <Footer/>
            

        </>
    )
}

export default AppLayout
