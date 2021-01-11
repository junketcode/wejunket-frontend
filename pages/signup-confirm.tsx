import React from "react"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"
import SignUpConfirmMessage from "../components/Auth/Confirm/SignUpConfirmMessage"

const SignUpConfirm = () => {
    return (
        <React.Fragment>
            <NavBar />
                
            <SignUpConfirmMessage /> 
            
            {/* <Footer /> */}
        </React.Fragment>
    )
}

export default SignUpConfirm