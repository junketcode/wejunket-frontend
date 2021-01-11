import React from "react"
import CopyrightContent from "../components/2020/CopyrightContent/CopyrightContent";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"

const Copyright = () => {
    return (
        <React.Fragment>
            <NavBar />
            <CopyrightContent/>
            <Footer />
        </React.Fragment>
    )
}

export default Copyright
