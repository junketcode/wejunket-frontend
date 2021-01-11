import React, { useEffect } from "react"
import Router from "next/router"
// Base Styles for Tailwind
import "../styles/index.scss"
// Components
import { SessionStorageService } from "../services/sessionStorage.service"
import LoadingOverlay from "../components/LoadingOverlay/LoadingOverlay";

const LogoutPage = () => {
  const [isLoggedOut, setIsLoggedOut] = React.useState(false)

  useEffect(() => {
    const userString = SessionStorageService.get("user")

    if (!userString) {
      setIsLoggedOut(true)
    }

    SessionStorageService.remove("user")

    if (!SessionStorageService.get("user")) {
      setIsLoggedOut(true)
    }
  })

  // If it is logged in, redirect
  if (isLoggedOut) {
    Router.replace("/")
  }

  return <LoadingOverlay/>
}

export default LogoutPage
