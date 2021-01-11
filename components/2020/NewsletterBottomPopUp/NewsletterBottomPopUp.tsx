import React, { useEffect, useState } from "react"
import "./NewsletterBottomPopUp.scss"
import { SessionStorageService } from "../../../services/sessionStorage.service"

const NewsletterBottomPopUp = ({ openModalHandler }) => {
  const buttonClasses = [
    "inline-block",
    "text-white",
    "font-sans",
    "px-4",
    "py-2",
    "leading-none",
    "border",
    "border-white",
    "rounded",
    "hover:bg-black",
    "hover:text-white",
    "mt-0",
  ].join(" ")

  const [popUpClasses, setPopUpClasses] = useState(["newsletterRoot", "popUpOut"])

  const closePopUpHandler = () => {
    setPopUpClasses(["newsletterRoot", "popUpOut"])
  }

  const yesHandler = () => {
    openModalHandler()
    closePopUpHandler()
  }

  useEffect(() => {
    if (!SessionStorageService.get("modalHasOpened")) {
      setTimeout(() => {
        setPopUpClasses(["newsletterRoot", "popUpIn"])
        SessionStorageService.set("modalHasOpened", true)
      }, 8000)
    }
  })

  return (
    <div className={popUpClasses.join(" ")}>
      <div className="newsletterContainer">
        <p className="mb-2">Sign Up for our Newsletter?</p>
        <div className="buttonsContainer">
          <button className={buttonClasses} onClick={yesHandler}>Yes</button>
          <button className={buttonClasses} onClick={closePopUpHandler}>
            No
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsletterBottomPopUp
