import * as React from "react"
import clsx from 'clsx'
import StarRating from "./components/StarRating/StarRating"
import StopCount from "./components/StopCount/StopCount"
import DistanceIndicator from "./components/DistanceIndicator/DistanceIndicator"
import ReviewCounter from "./components/ReviewCounter/ReviewCounter"

interface TourStatsProps{
  tourData?: any,
  className?: String,
}


const TourStats = (props: TourStatsProps) => {
  const { tourData, className } = props
  const { tour, latest_reviews } = tourData
  const { rating, stops_count, length } = tour
  return (
    <div className={clsx(className, "flex flex-wrap justify-between md:justify-start align-middle content-center mb-4")} >
      <StopCount stops_count={stops_count} />
      <DistanceIndicator length={length} />
      <StarRating rating={rating} />
      {latest_reviews && <ReviewCounter latest_reviews={latest_reviews} />}
    </div>
  )
}

export default TourStats
