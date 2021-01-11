import * as React from "react"
import Router, { useRouter } from "next/router"
import CallToActionButton from "../../DynamicComponent/components/CallToActionButton/CallToActionButton"
import JunketsAvailable from "./JunketsAvailable.component"
import Link from "next/link"

const TourListingToolBar = props => {
  const router = useRouter()

  const startJunketHandler = () => {
    Router.push(`/junkets/${props.startJunketLink}`)
  }

  const buttonClasses = [
    "bg-white",
    "hover:bg-blue-700",
    "hover:text-white",
    "text-gray-800",
    "font-bold",
    "uppercase",
    "py-2",
    "px-4",
    "border",
    "rounded-lg",
  ].join(" ")

  return (
    <div className="flex px-2 lg:px-4 h-12 justify-between content-center items-center">
      <JunketsAvailable toursAvailable={props.toursAvailable} />
    </div>
  )
}

export default TourListingToolBar
