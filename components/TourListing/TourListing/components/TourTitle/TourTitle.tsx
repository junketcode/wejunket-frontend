import * as React from "react"
import { IStop, ITour } from "../../../../../interfaces/tour-data.interface"

const TourTitle = ({
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
    if(!t.location.city || !t.location.state)
      return ''
      
    return `${t.location.city}, ${t.location.state}`
  })(tour)

  if (inline) {
    return (
      <div className="flex flex-col mb-2 justify-between">
        {stop && stop.title && (
          <h3 className="text-gray font-bold text-2xl">{stop.title}</h3>
        )}
        <h3 className="text-gray font-bold text-2xl">{title}</h3>
        <h4 className="text-gray font-semibold text-lg">{location}</h4>
      </div>
    )
  }

  return (
    <div className="flex flex-col md:flex-row mb-2 justify-between">
      {stop && stop.title && (
        <h3 className="text-gray self-center text-center md:text-left font-bold text-2xl md:text-4xl">
          {stop.title}
        </h3>
      )}
      <h3 className="text-gray self-center text-center md:text-left font-bold text-2xl md:text-4xl">
        {title}
      </h3>
      <h4 className="text-gray-800 self-center text-center md:text-left font-semibold text-lg md:text-2xl">
        {location}
      </h4>
    </div>
  )
}

export default TourTitle
