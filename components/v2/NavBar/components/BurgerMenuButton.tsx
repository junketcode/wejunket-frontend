import * as React from "react"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BurgerMenuButton = ({ handleBtnClick }) => {
  const twClasses = [
    "lg:hidden",
    "text-black",
    "font-sans",
    "rounded",
    "hover:bg-black",
    "hover:text-white",
    "h-10",
    "w-10",
    "p-1",
  ].join(" ")

  return (
    <button className={twClasses} onClick={handleBtnClick} name="Hamburger Menu" aria-label="hamburger-menu">
      <FontAwesomeIcon icon={faBars} />
    </button>
  )
}

export default BurgerMenuButton
