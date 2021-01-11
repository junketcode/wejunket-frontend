import * as React from "react"
import { IStop, ITour } from "../../../interfaces/tour-data.interface"
import "./JunketTourTitle.scss"
const JunketTourTitle = ({
  tour,
  inline,
  stop,
}: {
  tour: ITour
  inline?: boolean
  stop?: IStop
}) => {
  const { title } = tour

  const location = (t => {
    return `${t.location.city}, ${t.location.state}`
  })(tour)

  if (inline) {
    return (
      <div className="flex flex-col mb-2 justify-betwee tour-title">
        
        <h3 className="text-gray font-bold text-2xl tour-name">{title}</h3>
        {stop && stop.title && (
          <h3 className="text-gray font-bold text-2xl tour-stop-name">{stop.order}. {stop.title}</h3>
        )}
        <div className="tour-location"> 
          <img src={require("../../../public/img/icons/location-pin.png")} alt="location pin"/>
          <p className="text-gray font-semibold text-lg">
            {!stop ? location : stop.location.city}
          </p>
        </div>
        
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row mb-2 justify-between tour-title">
      {stop && stop.title && (
        <h3 className="text-gray self-center text-center md:text-left font-bold text-2xl md:text-4xl">
          {stop.title}
        </h3>
      )}
      <h3 className="text-gray self-center text-center md:text-left font-bold text-2xl md:text-4xl tour-name">
        {title}
      </h3>
      <div className="tour-location"> 
          <img src={require("../../../public/img/icons/location-pin.png")} alt="location pin"/><p className="text-gray font-semibold text-lg">{location}</p>
      </div>
    </div>
  )
}

export default JunketTourTitle
