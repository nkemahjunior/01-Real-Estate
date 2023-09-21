
import { useEffect } from "react"
import Footer from "../ui/header/Footer"
import HeroLarge from "../ui/header/HeroLarge"
import CardParent from "../ui/header/body/CardParent"
import { getProperties } from "../services/apiRents"

function IndexPage() {

  
    return (
        <>
        <HeroLarge />
        <CardParent/>
        </>
    )
}

export default IndexPage
