import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkerAlt"
import { IStop } from "../../../../interfaces/tour-data.interface"

const StopMapListItem = ({
  stop,
  handleClickOnStop,
  isActive,
}: {
  stop: IStop
  handleClickOnStop: any
  isActive: boolean
}) => {
  const rowItemClasses = [
    "h-8",
    "flex",
    "rounded-lg",
    "items-center",
    "bg-gray-200",
    "mt-2",
    "mb-2",
    "hover:bg-blue-600",
    "cursor-pointer",
    ...(isActive ? ["border-green-600", "bg-green-600"] : []),
  ].join(" ")

  const iconClasses = [
    "bg-white",
    "ml-4",
    "mr-2",
    "rounded-full",
    "h-6",
    "w-6",
    "flex",
    "items-center",
    "justify-center",
    "border",
    "border-1",
    ...(isActive ? ["border-green-600", "bg-gray-300"] : ["border-blue-600"]),
  ].join(" ")
  return (
    <li
      key={stop.id}
      onClick={handleClickOnStop(stop.id)}
      className={rowItemClasses}
    >
      <div className={iconClasses}>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
      </div>
      {stop.order} - {stop.title}
    </li>
  )
}

export default StopMapListItem
