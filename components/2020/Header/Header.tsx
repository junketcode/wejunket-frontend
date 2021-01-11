import React from "react"
import "./Header.scss"
import Facebook from "../Social/Facebook/Facebook"
import Twitter from "../Social/Twitter/Twitter"
import Instagram from "../Social/Instagram/Instagram"
import Youtube from "../Social/Youtube/Youtube"
import Link from "next/link"
import BurgerMenuButton from "../../NavBar/components/BurgerMenuButton";

const Header = props => {
  const [sideDrawerOpen, toggleSideDrawer] = React.useState(false)

  const menuToggle = () => toggleSideDrawer(prev => !prev)

  return (
    <header
      className={["headerRoot", props.transparent ? "transparent" : "black"].join(" ")}
    >
      <div className="headerContent">
        <div className="thirtyThreeWide flexStart">
          <Link href={"/"}>
            <img
              src={require("../../../public/img/logo/junket_color_12_21_17.png")}
              className="headerLogo"
            />
          </Link>
        </div>
        <div className="thirtyThreeWide flexCenter">
          {/*Social Icons will go here*/}
        </div>
        <div className="thirtyThreeWide flexEnd">
          <a
            href="https://cms.wejunket.com"
            target="_blank"
            rel="noopener noreferrer"
            className="login"
          >
            <button className="st0">Login</button>
            <BurgerMenuButton handleBtnClick={menuToggle} />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
