import React from "react"
import PromotionGuideContent from "../components/2020/PromotionGuideContent/PromotionGuideContent";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"

const PromotionGuide = () => {
    return (
        <React.Fragment>
            <NavBar />
            <PromotionGuideContent/>
            <Footer />
        </React.Fragment>
    )
}

export default PromotionGuide
