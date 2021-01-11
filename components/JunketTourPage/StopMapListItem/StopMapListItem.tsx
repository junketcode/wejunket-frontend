import * as React from "react"
import clsx from "clsx"
import { IStop } from "../../../interfaces/tour-data.interface"

const StopMapListItem = ({
  stop,
  handleClickOnStop,
  isActive,
}: {
  stop: IStop
  handleClickOnStop: any
  isActive: boolean
}) => {
  
  const active = isActive? 'active': ''

  return (
    <li
      key={stop.id}
      onClick={handleClickOnStop(stop.id)}
      className={clsx([active, "junket-stop-list"])}
    >
      <img src={require("../../../public/img/icons/list-location-pin.png")} alt="location pin"/>
      {stop.order}. {stop.title}
    </li>
  )
}

export default StopMapListItem
