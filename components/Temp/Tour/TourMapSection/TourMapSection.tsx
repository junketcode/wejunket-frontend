import * as React from "react"
import clsx from 'clsx'
// import JunketsMap from "../../../TourListing/JunketsMap/JunketsMap"

interface VideoMapProps{
  className?: String
}

const TourMapSection = (props: VideoMapProps) => {

  const { className } = props
  return (
    <div className={clsx(className)}>
      Map
    </div>
  )
}

export default TourMapSection