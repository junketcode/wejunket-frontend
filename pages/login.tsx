import React, { useEffect } from "react"
import Head from "next/head"
import Router from "next/router"
// Components
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/2020/Footer/Footer"
import LoginForm from "../components/Auth/LoginForm.component"
import SignUpForm from "../components/Auth/SignUpForm.component"
import {
  AuthService,
  ILoginCredentials,
  ISignUpData,
} from "../services/auth.service"
import { SessionStorageService } from "../services/sessionStorage.service"

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState("Log In")

  const activeClasses =
    "flex justify-center cursor-pointer bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-blue-700 font-semibold"
  const regularClasses =
    "flex justify-center cursor-pointer bg-white inline-block py-2 px-4 text-blue-500 hover:text-blue-800 font-semibold"

  const handleTabClick = (tabKey: string) => () => {
    setActiveTab(tabKey)
  }

  const handleLoginData = async (data: ILoginCredentials) => {
    try {
      const userData = await AuthService.login(data)
      SessionStorageService.set("user", JSON.stringify(userData.data))
      setIsLoggedIn(true)
    } catch (err) {
      console.error(err)
    }
  }

  const handleSignUpData = async (data: ISignUpData) => {
    console.log("LoginPage.handleSignUpData", { data })
    try {
      const userData = await AuthService.signUp(data)
      SessionStorageService.set("user", JSON.stringify(userData.data))
      setIsLoggedIn(true)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    const userString = SessionStorageService.get("user")

    if (isLoggedIn || !userString) {
      return
    }

    try {
      const { token } = JSON.parse(userString)
      if (token) {
        setIsLoggedIn(true)
      }
      // is Not Logged In
    } catch (err) {
      console.error(err)
      // Is Not Logged In
    }
  })

  // If it is logged in, redirect
  if (isLoggedIn) {
    Router.push("/junkets")
  }
  return (
    <div id="page-wrapper" className="flex flex-col w-full h-screen">
      <Head>
        <title>Log-In | Junket</title>
      </Head>
      <NavBar />
      <div
        className="flex flex-col content-center justify-center flex-grow"
        id="page-wrapper"
      >
        <div className="mx-auto w-2/3 lg:w-1/3 rounded py-12">
          <div className="w-full">
            <ul className="flex border-b">
              <li className="flex-1 -mb-px mr-1">
                <a
                  onClick={handleTabClick("Sign Up")}
                  className={
                    activeTab === "Sign Up" ? activeClasses : regularClasses
                  }
                >
                  Sign Up
                </a>
              </li>
              <li className="flex-1 -mb-px">
                <a
                  onClick={handleTabClick("Log In")}
                  className={
                    activeTab === "Log In" ? activeClasses : regularClasses
                  }
                >
                  Log In
                </a>
              </li>
            </ul>
          </div>

          {activeTab === "Log In" ? (
            <LoginForm handleSubmitData={handleLoginData} />
          ) : (
            <SignUpForm handleSubmitData={handleSignUpData} />
          )}
        </div>
        <p className="text-center -m-8">For the Junket Business Login <a href="https://cms.wejunket.com" target="_blank" rel="noopener noreferrer" className="text-blue-800">Click Here</a></p>
      </div>
      <Footer />
    </div>
  )
}

export default LoginPage
