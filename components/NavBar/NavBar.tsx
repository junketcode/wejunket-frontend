import * as React from "react"
import "../../styles/index.scss"
import "../2020/Header/Header.scss"
import NavBarLoginBtn from "./components/NavBarLoginBtn"
import SideDrawer from "./components/SideDrawer"
import BurgerMenuButton from "./components/BurgerMenuButton"
import { ILoginResponse } from "../../services/auth.service"
import { SessionStorageService } from "../../services/sessionStorage.service"
import Link from "next/link"
import HeaderMenu from "../2020/HeaderMenu/HeaderMenu"
import "./NavBar.scss"

const NavBar = props => {
  const { black, junkets } = props
  const [sideDrawerOpen, toggleSideDrawer] = React.useState(false)
  const [userInfo, setUserInfo] = React.useState<ILoginResponse | undefined>()
  const [sideDrawerClasses, setSideDrawerClasses] = React.useState([
    "fixed",
    "top-0",
    "right-0",
    "w-2/3",
    "h-screen",
    "bg-blue-800",
    "flex-col",
    "pt-4",
    "slideInRight",
    "fast",
  ])


  React.useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll)
    const userString = SessionStorageService.get("user")
    if (userInfo || !userString) {
      return
    }

    try {
      const { user } = JSON.parse(userString)
      if (user) {
        setUserInfo(user)
      }
      // is Not Logged In
    } catch (err) {
      console.error(err)
      // Is Not Logged In
    }
  })

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 200,
      headerEl = document.getElementById("js-header");

    if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
    } else {
      headerEl.classList.remove("smaller");
    }
  }

  const menuToggle = () => toggleSideDrawer(prev => !prev)

  return (
    <React.Fragment>
      {/* Desktop NavBar */}
      <nav
        style={{
          zIndex: 5,
          backgroundColor: "#fff",
        }}
        id="js-header" 
        className={[
          "local",
          "hidden",
          "md:flex",
          "items-center",
          "justify-between",
          "bg-transparent",
          "p-4",
          "min-w-full",
          "top-0",
          black ? "bg-black" : "transparent",
          junkets ? null : "fixed",
        ].join(" ")}
      >
        <div
          style={{ width: "90%", maxWidth: "1300px" }}
          className="md:flex items-center justify-between m-auto"
        >
          
          <div
            style={{ width: "30%" }}
            className="flex items-center justify-start"
          >
            <Link href={"/"}>
              <img
                src={require("../../public/img/logo/junket_color_12_21_17.png")}
                className="headerLogo"
                style={{ cursor: "pointer" }}
                alt="Junket Logo"
              />
            </Link>
          </div>
          
          <div
            className="flex items-center justify-end align-middle"
            style={{ width: "30%" }}
          >
            <HeaderMenu />
            <NavBarLoginBtn isLoggedIn={!!userInfo} />
            <BurgerMenuButton handleBtnClick={menuToggle} />
          </div>
        </div>
      </nav>

      {/* Mobile NavBar */}
      <nav
        style={{
          zIndex: 100,
          width: "90%",
          backgroundColor: "#fff",
        }}
        className={[
          "local",
          "flex",
          "md:hidden",
          "bg-transparent",
          "p-4",
          "min-w-full",
          "min-h-20",
          "align-baseline",
          "top-0",
          junkets ? null : "fixed",
        ].join(" ")}
      >
        <div className="flex items-center">
          <Link href={"/"}>
            <img
              src={require("../../public/img/logo/junket_color_12_21_17.png")}
              className="headerLogo"
              style={{ cursor: "pointer" }}
              alt="Header Logo"
            />
          </Link>
        </div>
        <div className="flex flex-grow flex-col bg-transparent">
          <p className="font-sans uppercase text-blue-800"></p>
        </div>
        <div className="flex items-center justify-center align-middle">
          <BurgerMenuButton handleBtnClick={menuToggle} />
        </div>
      </nav>

      {sideDrawerOpen && <SideDrawer handleClose={menuToggle} />}
    </React.Fragment>
  )
}

export default NavBar
