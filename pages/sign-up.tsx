import React, {useEffect} from "react"
import SignUpContent from "../components/2020/SignUpContent/SignUpContent";
import Head from "next/dist/next-server/lib/head";
// import Footer from "../components/2020/Footer/Footer";
import {AuthService, ILoginCredentials} from "../services/auth.service";
import {SessionStorageService} from "../services/sessionStorage.service";
import environment from "../environment/environment";

const SignUp = (props) => {
    const { monthly, yearly, planName } = props.URL.query ? props.URL.query : undefined;
    const [isLoggedIn, setIsLoggedIn] = React.useState(false)
    const handleLoginData = async (data: ILoginCredentials) => {
        if (!SessionStorageService || !isLoggedIn) {
            try {
                const userData = await AuthService.login(data)
                SessionStorageService.set("user", JSON.stringify(userData.data))
                setIsLoggedIn(true)
            } catch (err) {
                console.error(err)
            }
        }
    }

    useEffect(() => {
        const data = environment.API_CREDENTIALS
        handleLoginData(data)
            .then(res => {})
            .catch(e => {
                console.log(e)
            })
    }, [isLoggedIn])

    return (
        <React.Fragment>
            <Head>
                <title>Sign Up | Junket</title>
            </Head>
            <SignUpContent monthly={monthly} yearly={yearly} planName={planName} />
        </React.Fragment>
    )
}

export default SignUp
