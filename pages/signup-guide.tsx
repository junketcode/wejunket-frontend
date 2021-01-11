import React from "react"
import SignupGuideContent from "../components/2020/SignupGuideContent/SignupGuideContent";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"

const SignUpGuide = () => {
    return (
        <React.Fragment>
            <NavBar />
            <SignupGuideContent/>
            <Footer />
        </React.Fragment>
    )
}

export default SignUpGuide
