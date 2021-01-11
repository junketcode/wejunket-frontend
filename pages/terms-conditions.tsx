import React from "react"
import TermsConditionsContent from "../components/2020/TermsConditionsContent/TermsConditionsContent";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"

const TermsConditions = () => {
    return (
        <React.Fragment>
            <NavBar />
            <TermsConditionsContent/>
            <Footer />
        </React.Fragment>
    )
}

export default TermsConditions
