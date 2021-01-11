import * as React from "react"
import clsx from 'clsx'
import TourVideoSection from './TourVideoSection/TourVideoSection'
import TourMapSection from './TourMapSection/TourMapSection'

const Tour = () => {
  return (
    <div className={clsx("tour")}>
      <div className={clsx("tour-container")}>
        <p className={clsx("tour-name")}>Williamburgs Ghosts</p>
        <p className={clsx("tour-address")}>Edinburgh Castle Tavern</p>
        <div className={clsx("tour-intro")}>
          <TourVideoSection className={"tour-video"} />
          <TourMapSection className={"tour-map"} />
        </div>
      </div>
    </div>
  )
}

export default Tour